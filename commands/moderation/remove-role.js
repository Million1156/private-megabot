module.exports = {
    description: 'Lets you revoke a certain role from a member.',
    aliases: ['remover', 'removerole'],
    usage: 'remove-role <@User | ID> <@Role | ID | Name>'
}


module.exports.run = async(client, message, args) => {
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(new client.embed().setDescription(`Sorry! You are missing the permission \`MANAGE_ROLES\``).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))).then(m => m.delete({ timeout: 9000 }));

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const role = message.mentions.roles.first() || message.guild.roles.cache.find(r => [r.name, r.id].includes(args.slice(1).join(' ')))

    if (!member || !role) return message.channel.send(new client.embed().setDescription(`To remove a role from a member, you need to do\n\`${message.px}remove-role <@User | ID> <@Role | ID | Name>\``).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))).then(m => m.delete({ timeout: 9000 }))
    if (member.roles.highest.rawPosition >= message.member.roles.highest.rawPosition) return message.channel.send(new client.embed().setDescription('That member has higher roles than you, you cant remove a role from them!').setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))).then(m => m.delete({ timeout: 9000 }))
    if (member.roles.highest.rawPosition >= message.guild.me.roles.highest.rawPosition) return message.channel.send(new client.embed().setDescription('That member has higher roles than me, I cant remove a role from them!').setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))).then(m => m.delete({ timeout: 9000 }))
    if (!member.roles.cache.has(role.id)) return message.channel.send(new client.embed().setDescription(`That member doesnt have the role ${role}!`).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))).then(m => m.delete({ timeout: 9000 }))

    const embed = new client.embed()
        .setTitle(`Successfully Removed Role!`)
        .addField('Member', member.user)
        .addField('Moderator', message.author)
        .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))
        .addField('Role', role)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))

    return member.roles.remove(role).then(() =>
        message.channel.send(embed)).catch(() => message.channel.send(new client.embed().setDescription('I cant remove that role from that member!').setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))).then(m => m.delete({ timeout: 9000 })))
}