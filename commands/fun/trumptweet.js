const fetch = require('node-fetch');

module.exports = {
    description: 'Tweet as trump.',
    aliases: ['trumptwt'],
    usage: 'trumptweet <Message>'
}

module.exports.run = async(client, message, args) => {

    if (!args[0]) return this.sendErrorMessage(message, 0, 'Please provide a message to tweet');
    let tweet = message.content.slice(message.content.indexOf(args[0]), message.content.length);
    if (tweet.length > 68) tweet = tweet.slice(0, 65) + '...';

    try {
        const res = await fetch(Buffer.from('aHR0cHM6Ly9uZWtvYm90Lnh5ei9hcGkvaW1hZ2VnZW4/dHlwZT10cnVtcHR3ZWV0JnRleHQ9', 'base64').toString() + tweet)
        const img = (await res.json()).message;
        const embed = new client.embed()
            .setImage(img)
            .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))
            .setTimestamp()
        message.channel.send(embed)
    } finally {}
}