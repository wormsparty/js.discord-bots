const discord = require("discord.js");
const client = new discord.Client();
const normalize = require('normalize-strings');

let joueurs = {};
let consideredChannel = "446385944040308786";
let currentQuestion, currentAnswer, currentQuestionNb = 0;
let mauvaisesReponses = 0;

let firstPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function factorielle(n) {
    return n === 0 ? 1 :  n * factorielle (n-1);
}

let generateQuestion = function()
{
    currentQuestionNb++;

    let rnd = getRandomInt(0, 4);

    if (rnd === 0)
    {
        let s = getRandomInt(0, 9);
        let e = getRandomInt(10, 20);

        currentQuestion = `y = ∫xdx, x=[${s},${e}], y = ?`;
        currentAnswer = `${Math.round(e*e/2 - s*s/2)}`;
    }
    else if (rnd === 1)
    {
        let s = getRandomInt(15, 30);
        let e = getRandomInt(2, 6);

        currentQuestion = `C(${s}, ${e}) - combien de possibilités de prendre X éléments d'un groupe de Y?`;
        currentAnswer = `${Math.round(factorielle(s) / factorielle(s - e) / factorielle(e))}`;
    }
    else if (rnd === 2)
    {
        let s = getRandomInt(2, 9);
        let e = getRandomInt(2, 9);

        currentQuestion = `Racine ${s}e de ${Math.round(Math.pow(e, s))} = ?`;
        currentAnswer = `${e}`;
    }
    else if (rnd === 3)
    {
        let primes1 = [], primes2 = [];
        let pgcd = 1;
        let n1 = 1, n2 = 1;
        let i;

        for(i = 0; i < 3; i++)
        {
            let p1 = firstPrimes[getRandomInt(0, firstPrimes.length - 1)];
            let p2 = firstPrimes[getRandomInt(0, firstPrimes.length - 1)];

            if (p1 === p2)
                pgcd *= p1;
            else
            {
                if (primes2.indexOf(p1) > -1)
                    pgcd *= p1;

                if (primes1.indexOf(p2) > -1)
                    pgcd *= p2;
            }

            n1 *= p1;
            n2 *= p2;

            primes1.push(p1);
            primes2.push(p2);
        }

        currentQuestion = `PGCD(${n1}, ${n2})`;
        currentAnswer = `${pgcd}`;
    }
    else if (rnd === 4)
    {
        let s = getRandomInt(5, 20);
        currentQuestion = `S'il y a ${s} personnes qui trinquent, combien de verres se touchent?`;
        currentAnswer = `${Math.round(s * (s - 1) / 2)}`;
    }

    console.log('Question: ' + currentQuestion);
    console.log('Réponse: ' + currentAnswer);
};

module.exports = {
    run: function() {
        client.on("ready",
            () => {
                console.log(`quizz bot has started`);
                client.user.setActivity(``);
                let channel = client.channels.get(consideredChannel);

                channel.send(`Voici le 3e quiz! Les règles sont les mêmes, il n'y qu'une seule et unique bonne réponse à chaque question`);
                channel.send('Que le jeu commence...');

                generateQuestion();
                channel.send('Q' + currentQuestionNb + ': ' + currentQuestion);
            });

        client.on("message",
            async message => {
                // Don't answer to bots
                if (message.author.bot)
                    return;

                const me = `<@!438238347354439681>`;

                if (message.content.indexOf(me) > -1) {
                    message.channel.send(`Bonjour <@${message.author.id}>, viens me voir sur le channel du quizbot :)`);
                    return;
                }

                if (message.channel.type === 'dm')
                {
                    message.channel.send(`Viens me voir sur le channel du quizbot :)`);
                    return;
                }

                if (message.channel.id !== consideredChannel)
                    return;

                if (joueurs[message.author.id] === undefined) {
                    joueurs[message.author.id] = { points: 0 };
                }

                let joueur = joueurs[message.author.id];
                let msg = normalize(message.content.toLowerCase());

                if (msg === '!score')
                {
                    message.channel.send(`Voici le score:`);

                    for (let key in joueurs)
                        message.channel.send(`<@${key}>: ${joueurs[key].points}`);
                }
                else if (msg === currentAnswer)
                {
                    joueur.points++;
                    message.channel.send(`Félicitations! C'est un point pour <@${message.author.id}> pour un total de ${joueur.points}`);

                    generateQuestion();
                    message.channel.send('Q' + currentQuestionNb + ': ' + currentQuestion);
                    mauvaisesReponses = 0;
                }
                else
                {
                    mauvaisesReponses++;

                    if (mauvaisesReponses >= 12)
                    {
                        message.channel.send(`Je vais répéter la question au cas où:`);
                        message.channel.send('Q' + currentQuestionNb + ': ' + currentQuestion);
                        mauvaisesReponses = 0;
                    }
                }
            }
        );

        client.login("NDM4MjM4MzQ3MzU0NDM5Njgx.DcBtng.ppDVGwrz6KfO14nGW_CKPKKKqT8");
    }
};