module.exports = {
    description: 'Allows you to view information on the bot.',
    aliases: ['binfo', 'infobot', 'bottinfo'],
    usage: 'channelinfo <#chanel>'
}

module.exports.run = async(client, message, args) => {

    const info = new client.embed()
        .setTitle(`Information on ${client.user.username}`)
        .setThumbnail(client.user.displayAvatarURL())
        .addField('**ID:**', client.user.id)
        .addField('**Name:**', client.user.username)
        .addField('**Prefix:**', message.px)
        .addField('**Channels:**', client.channels.cache.size)
        .addField('**Creator**', 'This bot was made with :blue_heart: by dreamwastaken')
        .setFooter('I hope you enjoy my new bot! I put over 2 months of development into this bot. I made sure to add everything possible!')
    message.channel.send(info)
}