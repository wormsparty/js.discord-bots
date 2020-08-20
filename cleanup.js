
const discord = require("discord.js");
const client = new discord.Client();
const config = require('./config.js');

function fetchAndDeleteMessages(channelId, before) {
    const channel = client.channels.cache.get(channelId);

    channel.messages.fetch({ limit: 100, before: before }).then(messages => {
        const mobsMessages = messages.filter(msg => msg.author.id === "387231361485766656").array();

        if (mobsMessages.length > 0)
        {
            for(let i = 0 ; i < mobsMessages.length; i++) {
                //console.log("Je supprimerais: " + mobsMessages[i].content);
                mobsMessages[i].delete();
            }

            console.log(mobsMessages.length + " messages supprimés");
        }

        if (messages.size > 0) {
            fetchAndDeleteMessages(channelId, messages.last().id);
        } else {
            console.log('Done !');
        }

    });
}

function run() {
    console.log(`cleanup-bot has started`);

    for (let j = 0; j < config.channels.length; j++) {
        fetchAndDeleteMessages(config.channels[j], undefined);
    }
}

module.exports = {
    run: function() {
        client.on("ready", () => { run(); });
        client.login(config.token);
    }
};
