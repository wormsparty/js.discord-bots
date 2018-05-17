const discord = require("discord.js");
const client = new discord.Client();
const normalize = require('normalize-strings');

let joueurs = {};
let nombreGagnants = 0;

module.exports = {
    run: function() {
        client.on("ready",
            () => {
                console.log(`adventure has started`);
                client.user.setActivity(`Nombre de gagnants: 0`);
            });

        client.on("message",
            async message => {
                // Don't answer to bots
                if (message.author.bot)
                    return;

                const me = `<@!438238347354439681>`;

                if (message.content.indexOf(me) > -1) {
                    message.channel.send(`Bonjour <@${message.author.id}>, je ne répond qu'aux messages privés.`);
                    return;
                }

                if (message.channel.type !== 'dm')
                    return;

                if (joueurs[message.author.id] === undefined) {
                    joueurs[message.author.id] = {};
                }

                let joueur = joueurs[message.author.id];
                let msg = normalize(message.content.toLowerCase());

                if (joueur.state === undefined) {
                    message.channel.send(
                        `> Votre aventure commence devant la porte des employés. À votre droite se trouve le lecteur de badge. Que faites-vous?`);
                    joueur.state = 0;
                    joueurs[message.author.id] = joueur;
                } else if (joueur.state === 0) {
                    if (msg.indexOf('badge') > -1) {
                        message.channel.send(
                            `> La porte s'ouvre. Quelqu'un entre avec vous, mais vous ne l'avez jamais vu. Il force son chemin, et vous soupçonnez que c'est un intru. Vous saisissez un incident sur le portail intranet. Ce soir-là, on vous appelle et vous vire pour incompétence. Game Over`);
                        joueur.state = undefined;
                        joueurs[message.author.id] = joueur;
                        return;
                    } else if (msg.indexOf('coop') > -1 || msg.indexOf('migros') > -1 || msg.indexOf('manger') > -1 || msg.indexOf('boire') > -1) {
                        message.channel.send(
                            `> Manger et boire vous font du bien, mais vous ne faites que retarder l'inévitable`);
                        return;
                    } else if (msg.indexOf('reception') > -1 || (msg.indexOf('autre') > -1 && (msg.indexOf('porte') > -1 || msg.indexOf('entree') > -1))) {
                        message.channel.send(
                            `> Alors que vous passez par la réception, un "Bonjour!" vous fait sursauter, mais vous survivez. Vous croisez José dans le couloir avec un gros carton. Que faites-vous?`);
                        joueur.state = 1;
                        joueurs[message.author.id] = joueur;
                        return;
                    } else {
                        message.channel.send(
                            "> N'ayant pas d'idée intelligeante sur quoi faire, vous attendez. Des fumeurs sortent. Peu à peu, la fumée passive vous achève. Game Over.");
                        joueur.state = undefined;
                        joueurs[message.author.id] = joueur;
                        return;
                    }
                } else if (joueur.state === 1) {
                    if (msg.indexOf('ascenseur') > -1) {
                        message.channel.send(`> Les ascenseurs sont en panne`);
                        return;
                    } else if (msg.indexOf('ecarte') > -1 || msg.indexOf('cote') > -1 || msg.indexOf('evite') > -1 || msg.indexOf('baisse') > -1) {
                        message.channel.send(`> José vous croise sans problème. Vous arrivez devant votre ordinateur.`);
                        joueur.state = 2;
                        joueurs[message.author.id] = joueur;
                        return;
                    } else {
                        message.channel.send(
                            '> José force son chemin. Il trébuche, et son carton vous arrive droit dans le pied. Vous finisser aux urgences. Vous recevez un appel de votre patron, qui vous dit que vous êtes virés pour manque de respect envers le personnel. Game Over');
                        joueur.state = undefined;
                        joueurs[message.author.id] = joueur;
                        return;
                    }
                } else if (joueur.state === 2) {
                    if (msg.indexOf('allume') > -1) {
                        message.channel.send(`> Il ne s'allume pas.`);
                        return;
                    } else if (msg.indexOf('service') > -1 && msg.indexOf('desk') > -1) {
                        message.channel.send(`> Il n'y a personne`);
                        return;
                    } else if (msg.indexOf('manager') > -1 || msg.indexOf('collegue') > -1) {
                        message.channel.send(`> Ils sont tous à Berne`);
                        return;
                    } else if (msg.indexOf('rentre') > -1 || msg.indexOf('parti') > -1 || msg.indexOf('fuir') > -1 || msg.indexOf('demission') > -1 || msg.indexOf('sorti') > -1) {
                        message.channel.send(
                            `> Vous avez décidé de rentrez chez vous, et vous jouez à Mario Kart avec votre moitié. Tout finit bien. Gagné!`);
                        joueur.state = 3;
                        joueurs[message.author.id] = joueur;
                        nombreGagnants += 1;
                        client.user.setActivity(`Nombre de gagnants: ${nombreGagnants}`);
                    } else {
                        message.channel.send(
                            `> Votre conscience vous dit qu'il faudrait faire quelque chose. Pourtant, il semble n'y avoir personne dans le bureau pour vous mettre de pression.`);
                        return;
                    }
                } else {
                    message.channel.send(`> Vous avez gagné! Pourquoi ne pas créer votre propre aventure?`);
                }
            }
        );

        client.login("NDM4MjM4MzQ3MzU0NDM5Njgx.DcBtng.ppDVGwrz6KfO14nGW_CKPKKKqT8");
    }
};