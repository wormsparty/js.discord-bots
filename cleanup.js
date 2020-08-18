
const discord = require("discord.js");
const client = new discord.Client();
const config = require('./config.js');

function run() {
    console.log(`cleanup-bot has started`);

    var channel = client.channels.cache.get(config.channels[0]);
    channel.messages.fetch({ limit: 100 }).then(messages => {
        const mobsMessages = messages.filter(msg => msg.author.id === "387231361485766656").array();

        for(var i = 0 ; i < mobsMessages.length; i++) {
            console.log(i + ") " + mobsMessages[i].content);
        }

        console.log("Mob's messages = " + mobsMessages.length);
        //channel.bulkDelete(botMessages);
    });
}

module.exports = {
    run: function() {
        client.on("ready", () => { run(); });
        client.login(config.token);
    }
};
