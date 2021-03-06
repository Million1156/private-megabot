module.exports = {
    description: 'Lets you ask the magic 8 ball.',
    aliases: ['question', 'ball8'],
    usage: '8ball <Question>'
}

module.exports.run = async(client, message, args) => {
    if (!args[1]) return message.channel.send(new client.embed().setDescription(`Please specify your question`).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })))
    const responses = ['Signs point to yes.', 'No.', 'Ask again later.', 'Maybe.', 'Possibly', 'I really dont want to answer.', 'Stop using me.', 'I have to help users, no time to answer dumb questions.', 'Yes', 'If i answer your question, will you stop bothering me?', 'Sorry, have to go! My food is ready!', 'Dont care, didn\'t ask', 'I wont tell a lie for you.', 'In the shower, everytime you use me it stops my music so stop.']

    message.channel.send(new client.embed().setDescription(`
    **Question**: ${args.join(' ')}
    **Answer:** ${responses[~~(Math.random() * responses.length)]}
    `))
}