const discord = require("discord.js");
const client = new discord.Client();
const normalize = require('normalize-strings');

let joueurs = {};
let totalFins = 0;

let resetPlayer = function(joueur) {
    joueur.inventaire = ["badge"];
    joueur.position = 0;
    joueur.superenergy = false;
    joueur.prisPiece = false;
    return joueur;
};

module.exports = {
    run: function() {
        client.on("ready",
            () => {
                console.log(`adventure v2 has started`);
                client.user.setActivity(`Total fins trouvées: ${totalFins}`);
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

                // Si on ne connait pas le joueur, on crée une structure vide pour lui
                if (joueurs[message.author.id] === undefined) {
                    let plr = {
                        initialized: false,
                        finMigros: false,
                        finTrain: false,
                        finOuchy: false,
                        finElca: false,
                        fins: 0
                    };

                    joueurs[message.author.id] = resetPlayer(plr);
                }

                let joueur = joueurs[message.author.id];
                let msg = normalize(message.content.toLowerCase().trim());

                if (!joueur.initialized || msg === "aide") {
                    message.channel.send(`Bienvenue à cette aventure 2.0! Les règles ont changées comme suit:
  - Les actions sont maintenant dans un format donné, comme ci-dessous:
    aide: affiche cette aide
    entrer: entrer si l'environnement le permet
    sortir: sortir si l'environnement le permet
    inventaire: liste les objets dans votre poche
    utiliser X: utiliser l'objet X de votre inventaire
    marche nord/sud/est/ouest: marcher dans la direction choisie
    prendre: prendre l'objet à proximité
  - Penser à dessiner une petite carte! On se perd vite...
  - Le but du jeu est de trouver les 4 fins. Bonne chance!`);

                    if (msg !== "aide") {
                        message.channel.send(
                            `> Votre aventure commence devant la porte des employés. À votre droite se trouve le lecteur de badge. Dans votre poche se trouve votre badge.`);
                    }

                    joueur.initialized = true;
                } else if (msg === "entrer") {
                    if (joueur.position === 0) {
                        if (joueur.inventaire.indexOf("badge") > -1) {
                            message.channel.send(`> C'est fermé`);
                        } else {
                            message.channel.send(
                                `> Vous entrez dans le sas. Les portes se ferment, mais ne se rouvrent pas.`);
                            message.channel.send(
                                `> Vous frappez contre les fenêtres mais rien n'y fait: lentement vous manquez d'oxygène. Vous êtes mort.`);

                            if (!joueur.finElca) {
                                joueur.fins++;
                                joueur.finElca = true;
                                message.channel.send(
                                    `>> Félicitations! Vous avez trouvé une nouvelle fin. Vous êtes à ${joueur
                                    .fins}/4`);

                                totalFins++;
                                client.user.setActivity(`Total fins trouvées: ${totalFins}`);

                                if (joueur.fins === 4) {
                                    message.channel.send(
                                        `>>> Toutes les fins ont été trouvées! Voici une petite récompense: https://www.youtube.com/watch?v=SPK9fxvvbfk`);
                                }
                            } else {
                                message.channel.send(
                                    `>> Fin! Mais vous l'aviez déjà trouvée celle-là. Vous êtes à ${joueur.fins}/4`);
                            }

                            message.channel.send(`> Lançons la machine à remonter le temps! *ZAP*`);
                            message.channel.send(
                                `> Votre aventure commence devant la porte des employés. À votre droite se trouve le lecteur de badge. Dans votre poche se trouve votre badge.`);

                            joueurs[message.author.id] = resetPlayer(joueur);
                        }
                    } else if (joueur.position === 1) {
                        if (joueur.prisPiece) {
                            message.channel.send(`> C'est fermé.`);
                        } else {
                            message.channel.send(`> C'est fermé. Par contre, vous voyez une pièce de 2.- par terre.`);
                        }
                    } else if (joueur.position === 2) {
                        message.channel.send(
                            `> Vous entrez. Alors que vous cherchez votre glace favorite, vous tomber nez à nez avec votre âme soeur.`);
                        message.channel.send(
                            `> À son simple regard, vous savez que c'est la bonne. Vous oubliez tout ce que vous étiez en train de faire.`);
                        message.channel.send(
                            `> Vous lui proposez d'aller boire quelque chose, et elle accepte. La suite est à construire.`);

                        if (!joueur.finMigros) {
                            joueur.fins++;
                            joueur.finMigros = true;
                            message.channel.send(
                                `>> Félicitations! Vous avez trouvé une nouvelle fin. Vous êtes à ${joueur.fins}/4`);

                            totalFins++;
                            client.user.setActivity(`Total fins trouvées: ${totalFins}`);

                            if (joueur.fins === 4) {
                                message.channel.send(
                                    `>>> Toutes les fins ont été trouvées! Voici une petite récompense: https://www.youtube.com/watch?v=SPK9fxvvbfk`);
                            }
                        } else {
                            message.channel.send(
                                `>> Fin! Mais vous l'aviez déjà trouvée celle-là. Vous êtes à ${joueur.fins}/4`);
                        }

                        message.channel.send(`> Lançons la machine à remonter le temps! *ZAP*`);
                        message.channel.send(
                            `> Votre aventure commence devant la porte des employés. À votre droite se trouve le lecteur de badge. Dans votre poche se trouve votre badge.`);

                        joueurs[message.author.id] = resetPlayer(joueur);
                    } else if (joueur.position === 3) {
                        message.channel.send(`> Vous entrez dans l'eau. Après tout, pourquoi pas? Glou, glou, glou...`);

                        if (!joueur.finOuchy) {
                            joueur.fins++;
                            joueur.finOuchy = true;
                            message.channel.send(
                                `>> Félicitations! Vous avez trouvé une nouvelle fin. Vous êtes à ${joueur.fins}/4`);

                            totalFins++;
                            client.user.setActivity(`Total fins trouvées: ${totalFins}`);

                            if (joueur.fins === 4) {
                                message.channel.send(
                                    `>>> Toutes les fins ont été trouvées! Voici une petite récompense: https://www.youtube.com/watch?v=SPK9fxvvbfk`);
                            }
                        } else {
                            message.channel.send(
                                `>> Fin! Mais vous l'aviez déjà trouvée celle-là. Vous êtes à ${joueur.fins}/4`);
                        }

                        message.channel.send(`> Lançons la machine à remonter le temps! *ZAP*`);
                        message.channel.send(
                            `> Votre aventure commence devant la porte des employés. À votre droite se trouve le lecteur de badge. Dans votre poche se trouve votre badge.`);

                        joueurs[message.author.id] = resetPlayer(joueur);
                    } else if (joueur.position === 4) {
                        message.channel.send(`> Vous êtes dans le Coop. Il n'y a qu'un seul produit: un redbull à 2.-`);
                        joueur.position = 5;
                    } else {
                        message.channel.send(`> Il n'y a rien dans quoi enter`);
                    }
                } else if (msg === "sortir") {
                    if (joueur.position === 5) {
                        message.channel.send(`> Vous êtes devant la Coop`);
                        joueur.position = 4;
                    } else {
                        message.channel.send(`> Vous êtes déjà dehors`);
                    }
                } else if (msg === "prendre") {
                    if (joueur.position === 1 && !joueur.prisPiece) {
                        message.channel.send(`> Vous prenez la pièce de 2.- par terre`);
                        joueur.prisPiece = true;
                        joueur.inventaire.push("piece");
                    } else {
                        message.channel.send(`> Il n'y a rien à prendre`);
                    }
                } else if (msg === "inventaire") {
                    if (joueur.inventaire.length === 0)
                        message.channel.send(`> Votre inventaire est vide`);
                    else
                        message.channel.send(`> Voici votre inventaire: ${joueur.inventaire}`);
                } else {
                    var commands = msg.split(" ");

                    if (commands.length === 2) {
                        if (commands[0].trim() === "utiliser") {
                            let obj = commands[1].trim();
                            let idx = joueur.inventaire.indexOf(obj);

                            if (idx > -1) {
                                if (obj === "badge") {
                                    if (joueur.position === 0) {
                                        message.channel.send(
                                            `> Vous scannez votre badge. La porte s'ouvre. Votre badge tombe dans une bouche d'égoûts.`);
                                        joueur.inventaire.splice(idx, 1);
                                    } else {
                                        message.channel.send(`> Cet objet ne peut pas être utilisé ici`);
                                    }
                                } else if (obj === "piece") {
                                    if (joueur.position === 5) {
                                        message.channel.send(`> Vous achetez un redbull pour 2.-`);
                                        joueur.inventaire.splice(idx, 1);
                                        joueur.inventaire.push("redbull");
                                    } else {
                                        message.channel.send(`> Cet objet ne peut pas être utilisé ici`);
                                    }
                                } else if (obj === "redbull") {
                                    message.channel.send(`> Vous avez d'un coup plus d'énergie.`);
                                    joueur.superenergy = true;
                                    joueur.inventaire.splice(idx, 1);
                                } else {
                                    message.channel.send(`> Objet inconnu`);
                                }
                            } else {
                                message.channel.send(`> Votre inventaire ne contient pas cet objet`);
                            }
                        } else if (commands[0].trim() === "marche") {
                            let dir = commands[1].trim();

                            if (dir === "nord") {
                                if (joueur.position === 0) {
                                    message.channel.send(`> Vous arrivez au Pinnochio.`);
                                    joueur.position = 1;
                                } else if (joueur.position === 1) {
                                    if (!joueur.superenergy) {
                                        message.channel.send(
                                            `> Vous n'avez pas assez d'énergie pour continuer à monter.`);
                                    } else {
                                        message.channel.send(`> Vous arrivez devant la Migros. Elle est ouverte.`);
                                        joueur.position = 2;
                                    }
                                } else if (joueur.position === 2) {
                                    message.channel.send(`> Le traffic est bloqué.`);
                                } else if (joueur.position === 3) {
                                    message.channel.send(
                                        `> Vous arrivez devant la porte des employés. À votre droite se trouve le lecteur de badge.`);
                                    joueur.position = 0;
                                } else if (joueur.position === 4) {
                                    message.channel.send(
                                        `> Vous préférez monter la rue depuis l'autre côté du troitoire.`);
                                } else if (joueur.position === 5) {
                                    message.channel.send(`> Aïe! Vous êtes à l'intérieur, il y a donc des murs.`);
                                }
                            } else if (dir === "est") {
                                if (joueur.position === 0) {
                                    message.channel.send(`> Vous êtes devant la Coop. Elle est ouverte`);
                                    joueur.position = 4;
                                } else if (joueur.position === 5) {
                                    message.channel.send(`> Aïe! Vous êtes à l'intérieur, il y a donc des murs.`);
                                } else if (joueur.position === 4) {
                                    message.channel.send(
                                        `> Vous marchez jusqu'au métro. Vous montez, et sortez à Lausanne Gare.`);
                                    message.channel.send(
                                        `> Vous regardez les affichages pour trouver le prochain train pour Genève Aéroport.`);
                                    message.channel.send(
                                        `> Une fois sur place, vous demandez le prochain avion pour la Turquie.`);
                                    message.channel.send(
                                        `> Vous vous envolez, et observez le couper de soleil. Vous vous dites que vous avez droit à une nouvelle vue.`);

                                    if (!joueur.finTrain) {
                                        joueur.fins++;
                                        joueur.finTrain = true;
                                        message.channel.send(
                                            `>> Félicitations! Vous avez trouvé une nouvelle fin. Vous êtes à ${joueur
                                            .fins}/4`);

                                        totalFins++;
                                        client.user.setActivity(`Total fins trouvées: ${totalFins}`);

                                        if (joueur.fins === 4) {
                                            message.channel.send(
                                                `>>> Toutes les fins ont été trouvées! Voici une petite récompense: https://www.youtube.com/watch?v=SPK9fxvvbfk`);
                                        }
                                    } else {
                                        message.channel.send(
                                            `>> Fin! Mais vous l'aviez déjà trouvée celle-là. Vous êtes à ${joueur.fins
                                            }/4`);
                                    }

                                    message.channel.send(`> Lançons la machine à remonter le temps! *ZAP*`);
                                    message.channel.send(
                                        `> Votre aventure commence devant la porte des employés. À votre droite se trouve le lecteur de badge. Dans votre poche se trouve votre badge.`);

                                    joueurs[message.author.id] = resetPlayer(joueur);
                                } else {
                                    message.channel.send(`> Aïe! Il y a un immeuble`);
                                }
                            } else if (dir === "sud") {
                                if (joueur.position === 2) {
                                    message.channel.send(`> Vous arrivez au Pinnochio.`);
                                    joueur.position = 1;
                                } else if (joueur.position === 1) {
                                    message.channel.send(
                                        `> Vous arrivez devant la porte des employés. À votre droite se trouve le lecteur de badge.`);
                                    joueur.position = 0;
                                } else if (joueur.position === 0) {
                                    message.channel.send(`> Vous arrivez à Ouchy. Vous contemplez le lac.`);
                                    joueur.position = 3;
                                } else if (joueur.position === 3) {
                                    message.channel.send(`> Il n'y a pas de chemin pour continuer.`);
                                } else if (joueur.position === 4) {
                                    message.channel.send(
                                        `> Vous préférez descendre la rue depuis l'autre côté du troitoire.`);
                                } else if (joueur.position === 5) {
                                    message.channel.send(`> Aïe! Vous êtes à l'intérieur, il y a donc des murs.`);
                                }
                            } else if (dir === "ouest") {
                                if (joueur.position === 4) {
                                    message.channel.send(
                                        `> Vous arrivez devant la porte des employés. À votre droite se trouve le lecteur de badge.`);
                                    joueur.position = 0;
                                } else if (joueur.position === 5) {
                                    message.channel.send(`> Aïe! Vous êtes à l'intérieur, il y a donc des murs.`);
                                } else {
                                    message.channel.send(`> Aïe! Il y a un immeuble`);
                                }
                            } else {
                                message.channel.send(`> Je ne connais pas cette direction.`);
                            }
                        } else {
                            message.channel.send(`> Cette action s'utilise sans complément`);
                        }
                    } else {
                        message.channel.send(`> Je n'ai pas compris`);
                    }
                }
            }
        );

        client.login("NDM4MjM4MzQ3MzU0NDM5Njgx.DcBtng.ppDVGwrz6KfO14nGW_CKPKKKqT8");
    }
};