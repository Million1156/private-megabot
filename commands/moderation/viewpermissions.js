module.exports = {
    description: 'This allows you to view all the requested users permissions.',
    aliases: [`viewperms`],
    usage: 'viewpermissions <@Member>'
}

module.exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send(new client.embed().setDescription(`You are missing permission \`ADMINISTRATOR\``).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })));
    const member = message.mentions.members.first() || message.guild.member(args[0])

    if (!member) return message.channel.send(embed.setDescription('Please mention or enter a valid member!'));
    message.channel.send(new client.embed().setFooter(`Requested By ${message.author.tag}  |  Made By dreamwastaken#0001`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`Displaying all of ${member}\'s permissions!\n\n\`${message.member.permissions.toArray().join('\n')}\``))
}