module.exports = {
    description: 'Cant decide? Ill pick for you.',
    aliases: ['choose', 'pick'],
    usage: 'pickforme <option,option ETC>'
}

module.exports.run = async(client, message, args) => {

    const choices = args.join(' ').split(/\s*\|\s*/).filter(s => s.length)
    const choice = choices[~~(Math.random() * choices.length)]

    if (!choice) return message.channel.send(new client.embed().setDescription(`You need to give me choices separated with a \`|\`\nExample \`${message.px}pickforme apple | banana | peach\`!`).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })))

    message.channel.send(`You gave me the options of \`${choices.join(' ')}\`\nI chose: ${choice}`)
}