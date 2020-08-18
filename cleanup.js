
const discord = require("discord.js");
const client = new discord.Client();
const config = require('./config.js');

function fetchAndDeleteMessages(before) {
    const channel = client.channels.cache.get(config.channels[0]);

    channel.messages.fetch({ limit: 100, before: before }).then(messages => {
        const mobsMessages = messages.filter(msg => msg.author.id === "387231361485766656").array();

        if (mobsMessages.length > 0)
        {
            for(let i = 0 ; i < mobsMessages.length; i++) {
                mobsMessages[i].delete();
            }
        }

        if (messages.size > 0) {
            fetchAndDeleteMessages(messages.last().id)
        }

    });
}

function run() {
    console.log(`cleanup-bot has started`);

    fetchAndDeleteMessages(undefined);
}

module.exports = {
    run: function() {
        client.on("ready", () => { run(); });
        client.login(config.token);
    }
};
