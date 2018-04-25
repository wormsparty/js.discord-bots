const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Bot has started`);
    client.user.setActivity('');
});

client.on("message", async message =>
{
    // Don't answer to bots
    if (message.author.bot)
        return;

    console.log('Call from ' + message.author.id);

    var me = `<@!438238347354439681>`;
    var mentionnedMe = false;
    var isMusic = false;

    if (message.content.indexOf(me) > -1 || message.channel.type === 'dm')
        mentionnedMe = true;

    if (message.content.indexOf('!music') > -1)
        isMusic = true;

    if (!isMusic && !mentionnedMe) {
        return;
    }

    if (mentionnedMe && !isMusic) {
        message.channel.send(
            `Hi <@${message.author.id}>! I'm glad you mentionned me. Please send !music to get a music recommendation`);
    }
    else if (isMusic) {
        message.channel.send(`Here you go <@${message.author.id}>:\nhttps://www.youtube.com/watch?v=dQw4w9WgXcQ`);
    }
});

client.login("NDM4MjM4MzQ3MzU0NDM5Njgx.DcBtng.ppDVGwrz6KfO14nGW_CKPKKKqT8");