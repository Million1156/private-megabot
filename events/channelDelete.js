module.exports = (client, channel) => {
    const log = client.channels.cache.get(client.conf.logging.Channel_Updates);
    if (!log) return

    const embed = new client.embed()
        .setAuthor('A channel was deleted!')
        .setDescription(`**Channel name:** ${channel.name}\n**Channel ID:** \`${channel.id}\``)
        .setFooter(`${channel.guild.name} | Made By dreamwastaken#0001`, channel.guild.iconURL({ dynamic: true }))

    log.send(embed)
}