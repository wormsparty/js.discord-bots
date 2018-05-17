const discord = require("discord.js");
const client = new discord.Client();
const normalize = require('normalize-strings');

let joueurs = {};
let consideredChannel = "446385944040308786";
let currentQuestion = 0;
let mauvaisesReponses1 = 0;
let mauvaisesReponses2 = 0;

let questions = [
    // Math
    /*{ Q: '1+1 = ?', A: '2'},
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
    { Q: 'x+y+z+a = 1, x-y+z = 2, x-a = 5, z = 4, a = ?', A: '-5'},*/

    // Trivia
    { Q: `En quelle année a été publié 1984?`, A: '1949'},
    { Q: `Qui est vert et mélange les mots de sa phrase?`, A: 'yoda'},
    { Q: `Qu'est-ce qui est plus fort que toi?`, A: 'sega'},
    { Q: `Il n'y a que ta mère pour le croire`, A: `c'est de l'eau`},
    { Q: 'En rouge et...', A: 'noir'},
    { Q: 'Les balles du...', A: 'dragon'},
    { Q: 'Qui Mario va-t-il sauver des griffes de Donkey Kong?', A: 'pauline'},
    { Q: `Ca s'en va et...`, A: 'ca revient'},
    { Q: `Une souris morte qui fait de la musique`, A: 'deadmau5'},
    { Q: `Dans quelle émission étaient Yakko, Wakko et Dot?`, A: 'animaniacs'},
    { Q: `Quel est le verbe favoris des petits êtres bleus?`, A: 'schtroumpfer'},
    { Q: `Nom d'un animé, se dit Cerisier en français.`, A: 'sakura'},
    { Q: `Traduit littérelement, c'est plutôt Les Guerres de l'Étoile`, A: 'star wars'},
    { Q: `Quel groupe chante le célèbre Afrique?`, A: 'toto'},
    { Q: `Bon, si vous en êtes là c'est que c'est trop facile... essayer des morceaux connus de Souhait de Nuit`, A: 'nemo'},
    { Q: 'Essayez quelques poissons maintenant', A: 'thon'},
    { Q: 'Et une couleur?', A: 'brun'},
    { Q: 'Un instrument cette fois', A: 'ocarina'},
    { Q: `En parlant d'Ocarina, comment s'appelle la fée dans le premier jeu en 3D?`, A: 'navi'},
    { Q: 'Bon... un petit dernier: un des instruments du premier morceau de cette vidéo: https://www.youtube.com/watch?v=8nIFXjk30Ds', A: 'saxophone'},
];

module.exports = {
    run: function() {
        client.on("ready",
            () => {
                console.log(`quizz bot has started`);
                client.user.setActivity(``);
                let channel = client.channels.get(consideredChannel);

                channel.send(`Voici le 2e quiz! Les règles sont les mêmes, il n'y qu'une seule et unique bonne réponse à chaque question`);
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
                    mauvaisesReponses1++;
                    mauvaisesReponses2++;

                    if (mauvaisesReponses1 >= 25)
                    {
                        message.channel.send(`Je vais répéter la question au cas où:`);
                        message.channel.send('Q' + (currentQuestion + 1) + ': ' + questions[currentQuestion].Q);
                        mauvaisesReponses1 = 0;
                    }

                    if (mauvaisesReponses2 >= 50)
                    {
                        message.channel.send(`Indice: la première lettre de la réponse est: ${questions[currentQuestion].A[0]}`);
                        mauvaisesReponses2 = 0;
                    }
                }
            }
        );

        client.login("NDM4MjM4MzQ3MzU0NDM5Njgx.DcBtng.ppDVGwrz6KfO14nGW_CKPKKKqT8");
    }
};