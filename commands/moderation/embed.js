module.exports = {
    description: 'Allows you to put text into an embed.',
    aliases: [],
    usage: 'embed  <Title> | <Description>'
}

module.exports.run = async(client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new client.embed().setDescription(`Sorry you are missing the permission \`ADMINISTRATOR\`!`).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })))
    let [title, description] = args.join(' ').split(/\s*\|\s*/)
    if (!title) return message.channel.send(new client.embed().setDescription(`You are missing the title, you need to do \`${message.px}embed  <title> | <description>\``).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })))
    if (!description) return message.channel.send(new client.embed().setDescription(`You are missing the description, you need to do \`${message.px}embed  <title> | <description>\``).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })))
    await message.channel.send(new client.embed().setTitle(title).setDescription(description).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })))
}