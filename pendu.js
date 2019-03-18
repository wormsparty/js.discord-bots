const wordList = [
    "ANGLE",
    "ARMOIRE",
    "BANC",
    "BUREAU",
    "CABINET",
    "CARREAU",
    "CHAISE",
    "CLASSE",
    "CLEF",
    "COIN",
    "COULOIR",
    "DOSSIER",
    "ECOLE",
    "ENTRER",
    "ESCALIER",
    "ETAGERE",
    "EXTERIEUR",
    "FENETRE",
    "INTERIEUR",
    "LAVABO",
    "LIT",
    "MARCHE",
    "MATELAS",
    "MATERNELLE",
    "MEUBLE",
    "MOUSSE",
    "MUR",
    "PELUCHE",
    "PLACARD",
    "PLAFOND",
    "PORTE",
    "POUBELLE",
    "RADIATEUR",
    "RAMPE",
    "RIDEAU",
    "ROBINET",
    "SALLE",
    "SALON",
    "SERRURE",
    "SERVIETTE",
    "SIEGE",
    "SIESTE",
    "SILENCE",
    "SOL",
    "SOMMEIL",
    "SONNETTE",
    "SORTIE",
    "TABLE",
    "TABLEAU",
    "TABOURET",
    "TAPIS",
    "TIROIR",
    "TOILETTE",
    "VITRE",
    "ALLER",
    "AMENER",
    "APPORTER",
    "APPUYER",
    "ATTENDRE",
    "BAILLER",
    "COUCHER",
    "DORMIR",
    "ECLAIRER",
    "EMMENER",
    "EMPORTER",
    "ENTRER",
    "FERMER",
    "FRAPPER",
    "INSTALLER",
    "LEVER",
    "OUVRIR",
    "PRESSER",
    "RECHAUFFER",
    "RESTER",
    "SONNER",
    "SORTIR",
    "VENIR",
    "ABSENT",
    "ASSIS",
    "BAS",
    "HAUT",
    "PRESENT",
    "GAUCHE",
    "DROITE",
    "DEBOUT",
    "DEDANS",
    "DEHORS",
    "FACE",
    "LOIN",
    "PRES",
    "TARD",
    "TOT",
    "APRES",
    "AVANT",
    "CONTRE",
    "DANS",
    "DE",
    "DERRIERE",
    "DEVANT",
    "DU",
    "SOUS",
    "SUR",
    "CRAYON",
    "STYLO",
    "FEUTRE",
    "MINE",
    "GOMME",
    "DESSIN",
    "COLORIAGE",
    "RAYURE",
    "PEINTURE",
    "PINCEAU",
    "COULEUR",
    "CRAIE",
    "PAPIER",
    "FEUILLE",
    "CAHIER",
    "CARNET",
    "CARTON",
    "CISEAUX",
    "DECOUPAGE",
    "PLIAGE",
    "PLI",
    "COLLE",
    "AFFAIRE",
    "BOITE",
    "CASIER",
    "CAISSE",
    "TROUSSE",
    "CARTABLE",
    "JEU",
    "JOUET",
    "PION",
    "DOMINO",
    "PUZZLE",
    "CUBE",
    "PERLE",
    "CHOSE",
    "FORME",
    "CARRE",
    "ROND",
    "PATE",
    "MODELER",
    "TAMPON",
    "LIVRE",
    "HISTOIRE",
    "BIBLIOTHEQUE",
    "IMAGE",
    "ALBUM",
    "TITRE",
    "CONTE",
    "DICTIONNAIRE",
    "MAGAZINE",
    "CATALOGUE",
    "PAGE",
    "LIGNE",
    "MOT",
    "ENVELOPPE",
    "ETIQUETTE",
    "CARTE",
    "APPEL",
    "AFFICHE",
    "ALPHABET",
    "APPAREIL",
    "CAMESCOPE",
    "CASSETTE",
    "CHAINE",
    "CHANSON",
    "CHIFFRE",
    "CONTRAIRE",
    "DIFFERENCE",
    "DOIGT",
    "ECRAN",
    "ECRITURE",
    "FILM",
    "FOIS",
    "FOI",
    "IDEE",
    "INSTRUMENT",
    "INTRUS",
    "LETTRE",
    "LISTE",
    "MAGNETOSCOPE",
    "MAIN",
    "MICRO",
    "MODELE",
    "MUSIQUE",
    "NOM",
    "NOMBRE",
    "ORCHESTRE",
    "ORDINATEUR",
    "PHOTO",
    "POINT",
    "POSTER",
    "POUCE",
    "PRENOM",
    "QUESTION",
    "RADIO",
    "SENS",
    "TAMBOUR",
    "TELECOMMANDE",
    "TELEPHONE",
    "TELEVISION",
    "TRAIT",
    "TROMPETTE",
    "VOIX",
    "XYLOPHONE",
    "ZERO",
    "CHANTER",
    "CHERCHER",
    "CHOISIR",
    "CHUCHOTER",
    "COLLER",
    "COLORIER",
    "COMMENCER",
    "COMPARER",
    "COMPTER",
    "CONSTRUIRE",
    "CONTINUER",
    "COPIER",
    "COUPER",
    "DECHIRER",
    "DECOLLER",
    "DECORER",
    "DECOUPER",
    "DEMOLIR",
    "DESSINER",
    "DIRE",
    "DISCUTER",
    "ECOUTER",
    "ECRIRE",
    "EFFACER",
    "ENTENDRE",
    "ENTOURER",
    "ENVOYER",
    "FAIRE",
    "FINIR",
    "FOUILLER",
    "GOUTER",
    "IMITER",
    "LAISSER",
    "LIRE",
    "METTRE",
    "MONTRER",
    "OUVRIR",
    "PARLER",
    "PEINDRE",
    "PLIER",
    "POSER",
    "PRENDRE",
    "PREPARER",
    "RANGER",
    "RECITER",
    "RECOMMENCER",
    "REGARDER",
    "REMETTRE",
    "REPETER",
    "REPONDRE",
    "SENTIR",
    "SOULIGNER",
    "TAILLER",
    "TENIR",
    "TERMINER",
    "TOUCHER",
    "TRAVAILLER",
    "TRIER",
    "AMI",
    "ATTENTION",
    "CAMARADE",
    "COLERE",
    "COPAIN",
    "COQUIN",
    "DAME",
    "DIRECTEUR",
    "DIRECTRICE",
    "DROIT",
    "EFFORT",
    "ELEVE",
    "ENFANT",
    "FATIGUE",
    "FAUTE",
    "FILLE",
    "GARCON",
    "GARDIEN",
    "MADAME",
    "MAITRE",
    "MAITRESSE",
    "MENSONGE",
    "ORDRE",
    "PERSONNE",
    "RETARD",
    "JOUEUR",
    "SOURIRE",
    "TRAVAIL",
    "AIDER",
    "DEFENDRE",
    "DESOBEIR",
    "DISTRIBUER",
    "ECHANGER",
    "EXPLIQUER",
    "GRONDER",
    "OBEIR",
    "OBLIGER",
    "PARTAGER",
    "PRETER",
    "PRIVER",
    "PROMETTRE",
    "PROGRES",
    "PROGRESSER",
    "PUNIR",
    "QUITTER",
    "RACONTER",
    "EXPLIQUER",
    "REFUSER",
    "SEPARER",
    "BLOND",
    "BRUN",
    "CALME",
    "CURIEUX",
    "DIFFERENT",
    "DOUX",
    "ENERVER",
    "GENTIL",
    "GRAND",
    "HANDICAPE",
    "INSEPARABLE",
    "JALOUX",
    "MOYEN",
    "MUET",
    "NOIR",
    "NOUVEAU",
    "PETIT",
    "POLI",
    "PROPRE",
    "ROUX",
    "SAGE",
    "SALE",
    "SERIEUX",
    "SOURD",
    "TRANQUILLE",
    "ARROSOIR",
    "ASSIETTE",
    "BALLE",
    "BATEAU",
    "BOITE",
    "BOUCHON",
    "BOUTEILLE",
    "BULLES",
    "CANARD",
    "CASSEROLE",
    "CUILLERE",
    "CUVETTE",
    "DOUCHE",
    "ENTONNOIR",
    "GOUTTES",
    "LITRE",
    "MOULIN",
    "PLUIE",
    "POISSON",
    "PONT",
    "POT",
    "ROUE",
    "SAC",
    "PLASTIQUE",
    "SALADIER",
    "SEAU",
    "TABLIER",
    "TASSE",
    "TROUS",
    "VERRE",
    "AGITER",
    "AMUSER",
    "ARROSER",
    "ATTRAPER",
    "AVANCER",
    "BAIGNER",
    "BARBOTER",
    "BOUCHER",
    "BOUGER",
    "DEBORDER",
    "DOUCHER",
    "ECLABOUSSER",
    "ESSUYER",
    "ENVOYER",
    "COULER",
    "PARTIR",
    "FLOTTER",
    "GONFLER",
    "INONDER",
    "JOUER",
    "LAVER",
    "MELANGER",
    "MOUILLER",
    "NAGER",
    "PLEUVOIR",
    "PLONGER",
    "POUSSER",
    "POUVOIR",
    "PRESSER",
    "RECEVOIR",
    "REMPLIR",
    "RENVERSER",
    "SECHER",
    "SERRER",
    "SOUFFLER",
    "TIRER",
    "TOURNER",
    "TREMPER",
    "VERSER",
    "VIDER",
    "VOULOIR",
    "AMUSANT",
    "CHAUD",
    "FROID",
    "HUMIDE",
    "INTERESSANT",
    "MOUILLE",
    "SEC",
    "TRANSPARENT",
    "MOITIE",
    "AUTANT",
    "BEAUCOUP",
    "ENCORE",
    "MOINS",
    "PEU",
    "PLUS",
    "TROP",
    "ANORAK",
    "ARC",
    "BAGAGE",
    "BAGUETTE",
    "BARBE",
    "BONNET",
    "BOTTE",
    "BOUTON",
    "BRETELLE",
    "CAGOULE",
    "CASQUE",
    "CASQUETTE",
    "CEINTURE",
    "CHAPEAU",
    "CHAUSSETTE",
    "CHAUSSON",
    "CHAUSSURE",
    "CHEMISE",
    "CIGARETTE",
    "COL",
    "COLLANT",
    "COURONNE",
    "CRAVATE",
    "CULOTTE",
    "ECHARPE",
    "EPEE",
    "FEE",
    "FLECHE",
    "FUSIL",
    "GANT",
    "HABIT",
    "JEAN",
    "JUPE",
    "LACET",
    "LAINE",
    "LINGE",
    "LUNETTES",
    "MAGICIEN",
    "MAGIE",
    "MAILLOT",
    "MANCHE",
    "MANTEAU",
    "MOUCHOIR",
    "MOUFLE",
    "NOEUD",
    "PAIRE",
    "PANTALON",
    "PIED",
    "POCHE",
    "PRINCE",
    "PYJAMA",
    "REINE",
    "ROBE",
    "ROI",
    "RUBAN",
    "SEMELLE",
    "SOLDAT",
    "SORCIERE",
    "TACHE",
    "TAILLE",
    "TALON",
    "TISSU",
    "TRICOT",
    "UNIFORME",
    "VALISE",
    "VESTE",
    "VETEMENT",
    "CHANGER",
    "CHAUSSER",
    "COUVRIR",
    "DEGUISER",
    "DESHABILLER",
    "ENLEVER",
    "HABILLER",
    "LACER",
    "PORTER",
    "RESSEMBLER",
    "CLAIR",
    "COURT",
    "ETROIT",
    "FONCE",
    "JOLI",
    "LARGE",
    "LONG",
    "MULTICOLORE",
    "NU",
    "USE",
    "BIEN",
    "MAL",
    "MIEUX",
    "PRESQUE",
    "AIGUILLE",
    "AMPOULE",
    "AVION",
    "BOIS",
    "BOUT",
    "BRICOLAGE",
    "BRUIT",
    "CABANE",
    "CARTON",
    "CLOU",
    "COLLE",
    "CROCHET",
    "ELASTIQUE",
    "FICELLE",
    "FIL",
    "MARIONNETTE",
    "MARTEAU",
    "METAL",
    "METRE",
    "MORCEAU",
    "MOTEUR",
    "OBJET",
    "OUTIL",
    "PEINTURE",
    "PINCEAU",
    "PLANCHE",
    "PLATRE",
    "SCIE",
    "TOURNEVIS",
    "VIS",
    "VOITURE",
    "ARRACHER",
    "ATTACHER",
    "CASSER",
    "COUDRE",
    "DETRUIRE",
    "ECORCHER",
    "ENFILER",
    "ENFONCER",
    "FABRIQUER",
    "MESURER",
    "PERCER",
    "PINCER",
    "REPARER",
    "REUSSIR",
    "SERVIR",
    "TAPER",
    "TROUER",
    "TROUVER",
    "ADROIT",
    "DIFFICILE",
    "DUR",
    "FACILE",
    "LISSE",
    "MALADROIT",
    "POINTU",
    "TORDU",
    "ACCIDENT",
    "AEROPORT",
    "CAMION",
    "ENGIN",
    "FEU",
    "FREIN",
    "FUSEE",
    "GARAGE",
    "GARE",
    "GRUE",
    "HELICOPTERE",
    "MOTO",
    "PANNE",
    "PARKING",
    "PILOTE",
    "PNEU",
    "QUAI",
    "TRAIN",
    "VIRAGE",
    "VITESSE",
    "VOYAGE",
    "WAGON",
    "ZIGZAG",
    "ARRETER",
    "ATTERRIR",
    "BOUDER",
    "CHARGER",
    "CONDUIRE",
    "DEMARRER",
    "DISPARAITRE",
    "DONNER",
    "ECRASER",
    "ENVOLER",
    "GARDER",
    "GARER",
    "MANQUER",
    "PARTIR",
    "POSER",
    "RECULER",
    "ROULER",
    "TENDRE",
    "TRANSPORTER",
    "VOLER",
    "ABIME",
    "ANCIEN",
    "BLANC",
    "BLEU",
    "CASSE",
    "CINQ",
    "DERNIER",
    "DEUX",
    "DEUXIEME",
    "DIX",
    "GRIS",
    "GROS",
    "HUIT",
    "JAUNE",
    "MEME",
    "NEUF",
    "PAREIL",
    "PREMIER",
    "QUATRE",
    "ROUGE",
    "SEPT",
    "SEUL",
    "SIX",
    "SOLIDE",
    "TROIS",
    "TROISIEME",
    "UN",
    "VERT",
    "DESSUS",
    "AUTOUR",
    "VITE",
    "VERS",
    "ACROBATE",
    "ARRET",
    "ARRIERE",
    "BARRE",
    "BARREAU",
    "BORD",
    "BRAS",
    "CERCEAU",
    "CHAISE",
    "CHEVILLE",
    "CHUTE",
    "COEUR",
    "CORDE",
    "CORPS",
    "COTE",
    "COU",
    "COUDE",
    "CUISSE",
    "DANGER",
    "DOIGTS",
    "DOS",
    "ECHASSES",
    "ECHELLE",
    "EPAULE",
    "EQUIPE",
    "ESCABEAU",
    "FESSE",
    "FILET",
    "FOND",
    "GENOU",
    "GYMNASTIQUE",
    "HANCHE",
    "JAMBE",
    "JEU",
    "MAINS",
    "MILIEU",
    "MONTAGNE",
    "MUR",
    "ESCALADE",
    "MUSCLE",
    "NUMERO",
    "ONGLE",
    "PARCOURS",
    "PAS",
    "PASSERELLE",
    "PENTE",
    "PEUR",
    "PIED",
    "PLONGEOIR",
    "POIGNET",
    "POING",
    "PONT",
    "SIGNE",
    "SINGE",
    "POUTRE",
    "EQUILIBRE",
    "PRISE",
    "RIVIERE",
    "CROCODILE",
    "ROULADE",
    "PIROUETTE",
    "SAUT",
    "SERPENT",
    "SPORT",
    "SUIVANT",
    "TETE",
    "TOBOGGAN",
    "TOUR",
    "TRAMPOLINE",
    "TUNNEL",
    "VENTRE",
    "ACCROCHER",
    "APPUYER",
    "ARRIVER",
    "BAISSER",
    "BALANCER",
    "BONDIR",
    "BOUSCULER",
    "COGNER",
    "COURIR",
    "DANSER",
    "DEPASSER",
    "DESCENDRE",
    "ECARTER",
    "ESCALADER",
    "GAGNER",
    "GENER",
    "GLISSER",
    "GRIMPER",
    "MARCHER",
    "PATTES",
    "DEBOUT",
    "MONTER",
    "MONTRER",
    "PENCHER",
    "PERCHER",
    "PERDRE",
    "RAMPER",
    "RATER",
    "REMPLACER",
    "RESPIRER",
    "RETOURNER",
    "REVENIR",
    "SAUTER",
    "SOULEVER",
    "SUIVRE",
    "TOMBER",
    "TRANSPIRER",
    "TRAVERSER",
    "DANGEUREUX",
    "EPAIS",
    "FORT",
    "GROUPE",
    "IMMOBILE",
    "ROND",
    "SERRE",
    "SOUPLE",
    "ENSEMBLE",
    "ICI",
    "JAMAIS",
    "TOUJOURS",
    "SOUVENT",
    "BAGARRE",
    "BALANCOIRE",
    "BALLON",
    "BANDE",
    "BICYCLETTE",
    "BILLE",
    "CAGE",
    "ECUREUIL",
    "CERF",
    "VOLANT",
    "CHATEAU",
    "COUP",
    "COUR",
    "COURSE",
    "ECHASSE",
    "FLAQUE",
    "EAU",
    "PAIX",
    "PARDON",
    "PARTIE",
    "PEDALE",
    "PELLE",
    "POMPE",
    "PREAU",
    "RAQUETTE",
    "RAYON",
    "RECREATION",
    "SABLE",
    "SIFFLET",
    "SIGNE",
    "TAS",
    "TRICYCLE",
    "TUYAU",
    "VELO",
    "FILE",
    "RANG",
    "BAGARRER",
    "BATTRE",
    "CACHER",
    "CRACHER",
    "CREUSER",
    "CRIER",
    "DEGONFLER",
    "DISPUTE",
    "EMPECHER",
    "GALOPER",
    "HURLER",
    "JONGLER",
    "LANCER",
    "PEDALER",
    "PLAINDRE",
    "PLEURER",
    "POURSUIVRE",
    "PROTEGER",
    "SAIGNER",
    "SALIR",
    "SIFFLER",
    "SURVEILLER",
    "TRAINER",
    "TROUVER",
    "FOU",
    "MECHANT",
];

const channelStates   = {};
const maxErrors       = 5;
const maxAchievements = 5;
const vowels          = [ "A", "E", "I", "O", "U", "Y" ];

const discord = require("discord.js");
const client = new discord.Client();
const normalize = require('normalize-strings');
const config = require('./config.js');

function onMessage(message, channelState) {
    const messageContent = normalize(message.content.toUpperCase());

    if (channelState.CurrentWord === "") {
        generateNewWord(channelState);
        message.channel.send("On joue au pendu? " + channelState.FormattedWord);
    } else if (messageContent.length === 1) {
        if (messageContent[0] < 'A' || messageContent[0] > 'Z') {
            return;
        }

        if (!channelState.CurrentParticipants.includes(message.author.id)) {
            channelState.CurrentParticipants.push(message.author.id);
        }

        if (channelState.AllParticipants[message.author.id] === undefined) {
            channelState.AllParticipants[message.author.id] = {
                CurrentParticipations: 0,
                AchievementKing: false,
                AchievementLoner: false,
                AchievementComboBreaker: false,
                AchievementOpportinist: false,
                AchievementSoClose: false,
            }
        }

        const participant = channelState.AllParticipants[message.author.id];

        if (vowels.includes(messageContent)) {
            message.channel.send("Les voyelles sont déjà offertes");
        } else if (channelState.PickedCorrectCharacters.includes(messageContent)) {
            message.channel.send("Cette lettre a déjà été choisie");
        } else {
            const i = channelState.CurrentWord.indexOf(messageContent);

            if (i > -1) {
                participant.CurrentParticipations++;
                channelState.PickedCorrectCharacters += messageContent;
                channelState.FormattedWord = formatWord(channelState);
                message.channel.send(channelState.FormattedWord);

                if (!channelState.FormattedWord.includes("\\_")) {
                    message.channel.send("Bravo <@" + message.author.id + ">, un point!");

                    if (channelState.CurrentParticipants.length === 1 && !participant.AchievementKing && channelState.CurrentErrors === 0) {
                        message.channel.send("ACHIEVEMENT UNLOCKED!\nRoi: Réussir un mot seul, sans erreur");
                        participant.AchievementKing = true;
                        printStatus(message, participant, channelState)
                    }

                    if (!participant.AchievementOpportinist && participant.CurrentParticipations === 1 && channelState.CurrentParticipants.length > 1) {
                        message.channel.send("ACHIEVEMENT UNLOCKED!\nOpportuniste: Finir un mot (mais laisser les autres faire le travail)");
                        participant.AchievementOpportinist = true;
                        printStatus(message, participant, channelState)
                    }

                    if (!participant.AchievementSoClose && channelState.CurrentErrors === maxErrors - 1) {
                        message.channel.send("ACHIEVEMENT UNLOCKED!\nAu bord du gouffre: Finir un mot, alors que plus aucune faute n'était permise");
                        participant.AchievementSoClose = true;
                        printStatus(message, participant, channelState)
                    }

                    channelState.Combo++;
                    generateNewWord(channelState);
                    message.channel.send("Nouveau mot: " + channelState.FormattedWord);
                }
            } else {
                if (!channelState.PickedWrongCharacters.includes(messageContent)) {
                    channelState.CurrentErrors++;
                    participant.CurrentParticipations++;

                    if (channelState.CurrentErrors === maxErrors) {
                        message.channel.send("Dommage! C'était: " + channelState.CurrentWord + ". On réessaye?");

                        if (channelState.CurrentParticipants.length === 1 && !participant.AchievementLoner) {
                            message.channel.send("ACHIEVEMENT UNLOCKED!\nI'm a lonely loner (alone): Être le seul à participer à un mot (... et perdre)");
                            participant.AchievementLoner = true;
                            printStatus(message, participant, channelState)
                        }

                        if (!participant.AchievementComboBreaker && channelState.Combo >= 5) {
                            message.channel.send("ACHIEVEMENT UNLOCKED!\nCombo breaker: Être celui qui rate un mot après 5 ou plus mots réussis à la suite");
                            participant.AchievementComboBreaker = true;
                            printStatus(message, participant, channelState);
                        }

                        channelState.Combo = 0;

                        generateNewWord(channelState);
                        message.channel.send("Nouveau mot: " + channelState.FormattedWord);
                    } else {
                        channelState.PickedWrongCharacters += messageContent;
                        message.channel.send("Nombre d'erreurs: " + channelState.CurrentErrors + " / " + maxErrors);
                    }
                } else {
                    message.channel.send("On a déjà dit que c'était une erreur, ça ne compte donc pas :)");
                }
            }
        }
    }
}

module.exports = {
    run: function() {
        client.on("ready",
            () => {
                console.log(`pendu-bot has started`);
            });

        client.on("message",
            async message => {
                if (message.author.bot) {
                    return;
                }

                if (message.channel.type === 'dm') {
                    return;
                }

                if (!config.channels.includes(message.channel.id)) {
                    return;
                }

                if (channelStates[message.channel.id] === undefined) {
                    channelStates[message.channel.id] = {
                        CurrentWord: "",
                        AllParticipants: {},
                        CurrentWinnerCount: 0,
                        PickedCorrectCharacters: {},
                        PickedWrongCharacters: {},
                        CurrentParticipants: [],
                        CurrentParticipations: 0,
                        Combo: 0,
                   };
                }

                const channelState = channelStates[message.channel.id];

                onMessage(message, channelState);
            }
        );

        client.login(config.token);
    }
};

function formatWord(channelState) {
    let word = "";

    //if (channelState.CurrentWord === undefined) {
    //    return word;
    //}

    for (let i = 0; i < channelState.CurrentWord.length; i++)
    {
        const chr = channelState.CurrentWord[i];

        if (vowels.includes(chr)) {
            word += chr;
        } else if (channelState.PickedCorrectCharacters.includes(chr)) {
            word += chr;
        } else {
            word += "\\_";
        }

        word += " ";
    }

    return word;
}

function generateNewWord(channelState) {
    channelState.CurrentErrors = 0;
    channelState.CurrentWord = wordList[Math.floor(Math.random() * wordList.length)];
    channelState.PickedCorrectCharacters = [];
    channelState.PickedWrongCharacters = [];
    channelState.FormattedWord = formatWord(channelState);
    channelState.CurrentParticipants = [];

    for (let key in channelState.AllParticipants) {
        if (channelState.AllParticipants.hasOwnProperty(key)) {
            channelState.AllParticipants[key].CurrentParticipations = 0;
        }
    }
}

function printStatus(message, participant, channelState) {
    let total = 0;

    if (participant.AchievementKing) {
        total++
    }

    if (participant.AchievementLoner) {
        total++
    }

    if (participant.AchievementComboBreaker) {
        total++
    }

    if (participant.AchievementOpportinist) {
        total++
    }

    if (participant.AchievementSoClose) {
        total++
    }

    message.channel.send("Achievements " + total + " / " + maxAchievements);

    if (total === maxAchievements) {
        if (channelState.CurrentWinnerCount === 0) {
            message.channel.send("Cadeau pour être le 1e gagnant: https://www.youtube.com/watch?v=P-YprXEotS0");
        } else if (channelState.CurrentWinnerCount === 1) {
            message.channel.send("Cadeau pour être le 2e gagnant: https://www.youtube.com/watch?v=CduA0TULnow");
        } else if (channelState.CurrentWinnerCount === 2) {
            message.channel.send("Cadeau pour être le 3e gagnant: https://www.youtube.com/watch?v=j25tkxg5Vws");
        } else {
            message.channel.send("Il n'y a plus de récompense https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }

        channelState.CurrentWinnerCount++
    }
}
