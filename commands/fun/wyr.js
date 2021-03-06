const request = require('request')
const { load } = require('cheerio')

module.exports = {
    description: 'Get asked a random would you rather question.',
    aliases: [],
    usage: 'wyr'
}

module.exports.run = (client, message, args) => {
    request('http://either.io/', async(_, __, body) => {
        let blue = load(body)('#question .result.result-1').text().toString().split('\n').filter(s => s.length).slice(0, 3)
        let red = load(body)('#question .result.result-2').text().toString().split('\n').filter(s => s.length).slice(0, 3)

        const embed = new client.embed()
            .setTitle('Would you rather...')
            .setDescription(`:regional_indicator_a: **${blue[2]}**\n\n:b: **${red[2]}**`)
            .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))
        let m = await message.channel.send(embed)
        m.react('🇦').then(m.react('🅱️'))

        await new Promise(resolve => setTimeout(resolve, 8000))

        m.edit(embed.setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })).setDescription(`:regional_indicator_a: **${blue[2]}**\n**${blue[0]} - ${blue[1].match(/[0-9,]+/g)} total votes**\n\n:b: **${red[2]}**\n**${red[0]} - ${red[1].match(/[0-9,]+/g)} total votes**`))
    })
}