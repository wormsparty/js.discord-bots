const discord = require("discord.js");
const client = new discord.Client();
const normalize = require('normalize-strings');
const request = require('request');

let joueurs = {};
let consideredChannel = "446385944040308786";
let currentQuestion, currentAnswer, currentQuestionNb = 0;

let mauvaisesReponses = 0;
let nombreCaracteresAReveler = 0;

let generateQuestion = function(after)
{
    currentQuestionNb++;

    request('https://opentdb.com/api.php?amount=1&type=multiple', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let json = JSON.parse(body);

            currentQuestion = json.results[0].question;
            currentAnswer = normalize(json.results[0].correct_answer.toLowerCase().trim());

            console.log('Question: ' + currentQuestion);
            console.log('Réponse: ' + currentAnswer);

            after();
        }
    });
};

module.exports = {
    run: function() {
        client.on("ready",
            () => {
                console.log(`trivia-bot bot has started`);
                client.user.setActivity(``);
                let channel = client.channels.get(consideredChannel);

                channel.send(`Voici le trivia-quiz! Les questions ne sont pas de moi mais de opentdb.com. N'hésitez donc pas à utiliser tonton Google. !joker permet de sauter la question car parfois faut pas déconner...`);

                generateQuestion(function() {
                    channel.send('Q' + currentQuestionNb + ': ' + currentQuestion);
                });
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
                let msg = normalize(message.content.toLowerCase().trim());

                if (msg === '!score')
                {
                    message.channel.send(`Voici le score:`);

                    for (let key in joueurs)
                        message.channel.send(`<@${key}>: ${joueurs[key].points}`);
                }
                else if (msg === currentAnswer || msg === '!joker')
                {
                    if (msg !== '!joker')
                    {
                        joueur.points++;
                        message.channel.send(`Félicitations! C'est un point pour <@${message.author.id}> pour un total de ${joueur.points}`);
                    }

                    generateQuestion(function() {
                        message.channel.send('Q' + currentQuestionNb + ': ' + currentQuestion);
                        mauvaisesReponses = 0;
                        nombreCaracteresAReveler = 0;
                    });
                }
                else
                {
                    mauvaisesReponses++;

                    if (mauvaisesReponses >= 12)
                    {
                        if (nombreCaracteresAReveler < currentAnswer.length - 1)
                            nombreCaracteresAReveler++;

                        message.channel.send(`Un indice - La réponse commence par: ${currentAnswer.substr(0, nombreCaracteresAReveler)}`);
                        mauvaisesReponses = 0;
                    }
                }
            }
        );

        client.login("NDM4MjM4MzQ3MzU0NDM5Njgx.DcBtng.ppDVGwrz6KfO14nGW_CKPKKKqT8");
    }
};