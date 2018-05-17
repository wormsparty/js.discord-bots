const discord = require("discord.js");
const client = new discord.Client();
const normalize = require('normalize-strings');

let joueurs = {};
let consideredChannel = "446385944040308786";
let currentQuestion = 0;
let mauvaisesReponses = 0;

let questions = [
    { Q: '1+1 = ?', A: '2'},
    { Q: '0! = ?', A: '1'},
    { Q: '(0^0)+(0^0) = ?', A: '2'},
    { Q: '2^((0^0)^2) = ?', A: '2'},
    { Q: 'y = ∫xdx, x=[5,10], c = 0, y = ?', A: '37.5'},
    { Q: '2x2x2x2x2x2x3x2x2x2x2 = ?', A: '3072'},
    { Q: 'A+2B = 1, B-A = 2, A+B = ?', A: '0'},
    { Q: `La réponse à la grande question sur la vie, l'univers et le reste = ?`, A: '42'},
    { Q: 'PGCD(120428,13566) = ?', A: '238'},
    { Q: 'FIB(25) = ?', A: '75025'},
    { Q: 'y = ∂(x^3+1)dx, y = ?', A: '3x^2'},
    { Q: '(ix+2)^2=4, x = 0,?', A: '4i'},
    { Q: 'integer(32π)-98 = ?', A: '2'},
    { Q: '√^8(5764801) = ?', A: '7'},
    { Q: 'a = ∫∫∫dxdydz, x=[-1,1], y=[-1,1], z=[-1,1], a = ?', A: '8'},
    { Q: 'x = 1+1-1+1+l-l-l+1+1-1-1+1+1-l+l, l = -1, x = ?', A: '5'},
    { Q: '700000 cm^3 = ? m^3', A: '0.7'},
    { Q: 'integer(|[2, 3, 4]|) = ?', A: '5'},
    { Q: 'C(32,7)', A: '3365856'},
    { Q: 'x+y+z+a = 1, x-y+z = 2, x-a = 5, z = 4, a = ?', A: '-5'},
];

module.exports = {
    run: function() {
        client.on("ready",
            () => {
                console.log(`quizz bot has started`);
                client.user.setActivity(``);
                let channel = client.channels.get(consideredChannel);

                channel.send(`Bonjour! Le quiz peut commencer. Voici les règles:
- Il y a 20 questions. Chaque personne qui répond correctement reçoit 1 point.
- La question change à chaque bonne réponse d'un joueur
- Au bout des 20 questions, le jeu s'arrête, et le classement sera affiché.
- Chaque réponse est un nombre entier, un nombre à virgule de la forme 3.21, ou un polynome de la forme 2x^3+4x+1
- Il n'y a pas d'indice. Lisez bien la question!`);

                channel.send('Que le jeu commence...');

                currentQuestion = 0;
                channel.send('Q' + (currentQuestion + 1) + ': ' + questions[currentQuestion].Q);
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

                // Ne plus rien dire si le quiz est fini
                if (currentQuestion === questions.length)
                    return;

                if (joueurs[message.author.id] === undefined) {
                    joueurs[message.author.id] = { points: 0 };
                }

                let joueur = joueurs[message.author.id];
                let msg = normalize(message.content.toLowerCase());

                if (msg === questions[currentQuestion].A)
                {
                    joueur.points++;
                    message.channel.send(`Félicitations! C'est un point pour <@${message.author.id}> pour un total de ${joueur.points}`);
                    currentQuestion++;

                    if (currentQuestion === questions.length)
                    {
                        message.channel.send(`C'est fini! Il n'y a plus de questions. Voici le score:`);

                        for (let key in joueurs) {
                            message.channel.send(`<@${key}>: ${joueurs[key].points}`);
                        }
                    }
                    else
                        message.channel.send('Q' + (currentQuestion + 1) + ': ' + questions[currentQuestion].Q);
                }
                else
                {
                    mauvaisesReponses++;

                    if (mauvaisesReponses >= 25)
                    {
                        message.channel.send(`Je vais répéter la question au cas où:`);
                        message.channel.send('Q' + (currentQuestion + 1) + ': ' + questions[currentQuestion].Q);
                        mauvaisesReponses = 0;
                    }
                }
            }
        );

        client.login("NDM4MjM4MzQ3MzU0NDM5Njgx.DcBtng.ppDVGwrz6KfO14nGW_CKPKKKqT8");
    }
};