// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./auth.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

var numberServed = 0;

client.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`Bot has started`);
    // Example of changing the bot's playing game to something useful. `client.user` is what the
    // docs refer to as the "ClientUser".
    client.user.setActivity(`Served ${numberServed} pizzas`);
});

const data = `
- les classiques
204, Marguerite, 15.90, tomates, mozzarella
205, Napoli, 19.90, anchois, c�pres
206, Capri, 19.90, anchois, c�pres, olives
207, Veneziana, 19.90, jambon
208, Romana, 19.90, jambon, champignons
209, Appia, 19.90, anchois, huile de basilic, persil, huile d'olive
210, Navigation, 20.50, parmesan, pancetta, oignons
211, Thon, 20.50, thon, huile de basilic, persil, c�pres
212, Rucola, 21.90, rucola, (copeaux de) parmesan
213, Fruits de mer, 21.90, (m�lange de) fruits de mer
214, Exotique, 20.50, jambon, ananas, banane
215, Beau-rivage, 20.50, jambon, artichauts, �uf (dur)
216, Italia, 20.50, poivrons, jambon, �uf (dur)
217, Ouchy, 20.50, champignons, asperges, artichauts, �uf (dur)
- les gourmandes
218, Bismark, 21.50, jambon, artichauts, �uf (miroir)
219, Toscana, 21.50, champignons, asperges, jus de citron, ail, persil, huile d'olive
220, Valaisanne, 22.50, jambon, viande s�ch�e de cheval, raclette, persil
221, Vaudoise, 22.50, filets de perche, artichauts, ail, persil, jus de citron
222, Grisonne, 22.50, viande s�ch�e de cheval, salami (piquant), persil
223, Ticinese, 22.50, salami, pancetta, coppa, champignons
224, Six fromages, 22.50, mozzarella, gruy�re, ricotta, gorgonzola, tomme, parmesan
225, Capricciosa, 22.50, jambon, artichauts, asperges, olives
226, Quattro stagioni, 22.50, jambon, champignons, fruits de mer, �uf (dur), olives
227, Siciliana, 22.50, jambon, poivrons, anchois, �uf (dur)
228, Boccalino, 22.50, jambon, champignons, chanterelles, olives (vertes)
239, Tunisienne, 22.50, poivrons, merguez
229, Calzone alla diavola, 22.50, calzone, jambon cru, ricotta, piments
230, Calzone alla romana, 22.50, calzone, jambon, jaune d��uf, parmesan
231, Calzone alla ricotta, 22.50, calzone, jaune d��uf, ricotta, parmesan
232, Calzone al prosciutto, 22.50, calzone, tomates, mozzarella, jambon, champignons
- les sportives
233, FC Lausanne-sport, 22.50, jambon, (2) �uf(s), parmesan
234, CUST �cole de r�gate, 22.50, chanterelles, tomme, jambon cru, ail
235, L.U.C, 22.50, parmesan, poivrons, �uf (dur), mortadella, salami, champignons, piments
236, Richard Chassot, 22.50, vacherin fribourgeois, gruy�re, jambon, oignons
237, Jos� Mourinho, 22.50, artichauts, anchois, thon, ail, persil, jus de citron, piments
238, Real Madrid, 22.50, jambon cru
240, Manchester United, 22.50, champignons, jambon cru, persil, ail, huile d'olive
241, Michel Platini, 22.50, pancetta, salami (piquant), champignons, oignons
242, Lionel Messi, 22.50, jambon, champignons, oignons, poivrons, �uf (dur), thon
243, Vladimir Petkovic, 23.50, jambon, jambon cru, coppa, mortadella, merguez, salami
244, Dimitri Payet, 22.50, poulet (au curry), champignons, oignons, piments
245, Stan Wawr., 22.90, gruy�re, tomme (vaudoise), champignons, chanterelles, viande s�ch�e de cheval, olives
246, Maradona, 22.90, c�pres, oignons, crevettes, saumon fum�
247, Zinedine Zidane, 22.90, c�pres, oignons, saumon fum�
248, LS Tennis, 22.50, jambon, champignons, poivrons, merguez
249, Roger Federer, 22.50, jambon, lard, jambon cru, champignons
250, Antoine Griezmann, 22.50, crevettes, thon, piments, ananas, merguez
251, John Gobbi, 22.50, jambon, �uf (dur), merguez, poivrons, piments
252, Christian Constantin, 23.50, raclette, jambon cru, viande s�ch�e de cheval
253, David Beckham, 22.50, jambon, lard, merguez, ananas, piments
254, Neymar Jr, 22.50, poulet (au curry), crevettes, ananas
255, Cristobal Huet, 22.50, gruy�re, lard, viande s�ch�e de cheval, �uf (dur)
256, Benjamin Antonietti, 22.50, jambon, lard, �uf (dur), oignons
257, CAN-AM, 22.50, jambon, champignons, salami (piquant), olives
- les people
258, DJ Guz, 22.50, viande h�ch�e de b�uf, jambon, oignons, �uf (miroir), basilic frais
259, Rihanna, 22.50, artichauts, oignons, (copeaux de) parmesan, rucola
260, Ed Sheeran, 22.50, jambon cru, oignons, champignons, piments
261, Hugh Jackman, 22.50, jambon, champignons, poivrons, parmesan, c�pres, gruy�re
262, Johnny Hallyday, 22.50, jambon, coppa, champignons, poivrons, �uf (dur), olives
264, Adele, 22.90, fruits de mer, crevettes, jambon, oignons, champignons
265, George Clooney, 22.50, asperges, artichauts, poivrons, champignons
266, C�line Dion, 22.90, pancetta, jambon, oignons, crevettes, ananas, champignons, banane
- les politiques
268, Theresa May, 22.50, jambon cru, champignons, olives, oignons, artichauts, piments
269, Mario Monti, 22.50, pancetta, coppa, jambon cru, salami, champignons, olives, asperges
270, Donald Trump, 22.90, jambon cru, asperges, thon, �uf (dur), crevettes, ananas
271, Fran�ois Hollande, 22.50, merguez, oignons, champignons, huile de basilic, piments
272, D. Burkhalter c. f�d., 22.50, thon, ananas, salami (piquant), piments
273, A. Berset c. f�d., 22.50, thon, ananas, oignons, c�pres, crevettes, huile de basilic
274, D. Leuthard c. f�d., 22.50, thon, jambon, champignons, olives, piments
275, G. Parmelin c.f�d., 22.50, jambon, champignons, fruits de mer, lard, oignons
276, S. sommaruga c. f�d., 22.50, jambon, salami, asperges, champignons, ail
277, J. Schneider-A. c.f�d., 22.50, gambas, ail, saumon fum�
278, U. Maurer c. f�d., 22.90, jambon cru, pancetta, mortadella, salami, crevettes, champignons, ail
263, J. de Quattro c. d�etat, 22.50, jambon, lard (fum�), coppa, mortadella, champignons
279, P.Y. Maillard c. d�etat, 22.50, viande h�ch�e de b�uf, poivrons, oignons
281, B. M�traux c. d�etat, 22.50, jambon, gorgonzola, champignons, ail
282, A.C. Lyon c. d�etat, 22.50, aubergines, jambon cru
283, N. Gorrite c. d�etat, 22.50, tomme, piments, ail, chanterelles
284, P. Broulis c. d�etat, 22.50, lard, olives (noires), oignons
285, O. Tosato c. muni., 22.50, gambas, ail, piments, merguez
286, P.A Hildbrand c. muni., 22.50, jambon, artichauts, champignons, olives, rucola
287, J-Y. Pidoux c. muni., 22.50, crevettes, olives, oignons, ail, c�pres
288, F. Germond c. muni., 22.50, epinards, poivrons, �uf (dur), chanterelles, champignons
289, G. Junod c. muni., 22.50, merguez, salami (piquant)
290, N. litzistorf c. muni., 22.50, tomates (fra�ches), anchois, olives (noires), piments
291, D. payot c. muni., 22.50, calzone, poulet (au curry), oignons, ananas, piments
- les amis du Bocca
293, Sauvetage d�Ouchy, 22.50, oignons, c�pres, ail, gambas, ananas, piments
294, P.A. Sch�rmann, 22.50, merguez, poivrons, piments, salami (piquant)
295, Confr�rie LS, 22.50, jambon, pancetta, �uf (dur), olives, champignons, merguez, oignons
296, Philippe Rochat, 22.50, mozzarella di bufala, tomates (fra�ches), basilic frais
297, J.P. Delamuraz, 22.90, fruits de mer, gambas, c�pres, piments
298, J. Zisyadis, 22.50, olives (noires), f�ta, artichauts, aubergines, salami, piments
300, Guy Delessert, 22.50, crevettes, piments, ananas, fruits de mer
301, P.O.P Porsche Ouchy Passion, 22.50, jambon cru, tomates (fra�ches), parmesan, basilic frais
302, John Kerry, 22.50, poulet, oignons, lard(ons), rucola, (copeaux de) parmesan
`

var lines = data.split('\n');
var allIngredients = [];
var ingredientsToNo = {};
var noToIngredients = {};
var noToPizza = {};
var allNb = [];

// First parse the data
var i;

for (i = 0; i < lines.length; i++) {
    if (lines[i].trim().length === 0
        || lines[i].trim()[0] === '-')
        continue;

    var elements = lines[i].trim().split(',');
    var name = elements[1].trim();
    var nb = elements[0].trim();
    elements.splice(0, 3);
    // elements now contains the ingredients

    for (var j = 0; j < elements.length; j++) {
        var ingredient = elements[j].replace(/\(.*?\)/g, '').trim();

        if (!allIngredients.includes(ingredient))
            allIngredients.push(ingredient);

        if (ingredientsToNo[ingredient] === undefined)
            ingredientsToNo[ingredient] = [];

        if (!ingredientsToNo[ingredient].includes(nb))
            ingredientsToNo[ingredient].push(nb);
    }

    noToIngredients[nb] = elements.join();
    noToPizza[nb] = name;
    allNb.push(nb);
}

client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.

    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if (message.author.bot) return;

    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if (message.content.indexOf(config.prefix) !== 0) return;

    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Let's go with a few common example commands! Feel free to delete or change those.

    if (command === "ping") {
        // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
        // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }

    if (command === "say") {
        // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
        // To get the "message" itself we join the `args` back into a string with spaces: 
        const sayMessage = args.join(" ");
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
        message.delete().catch(O_o => { });
        // And we get the bot to say the thing: 
        message.channel.send(sayMessage);
    }

    if (command === "pizza") {
        var randomNb = allNb[Math.floor(Math.random() * allNb.length)];
        message.channel.send(`${randomNb}, ${noToPizza[randomNb]}, ${noToIngredients[randomNb]}`);

        numberServed += 1;
        client.user.setActivity(`Served ${numberServed} pizzas`);
    }
});

client.login(config.token);