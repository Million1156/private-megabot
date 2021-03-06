module.exports = {
    description: 'Play a game of rps.',
    aliases: ['rock-paper-scissors'],
    usage: 'rps [rock | paper | scissors]'
}

module.exports.run = async(client, message, args, cmd) => {
    let embed1 = new client.embed()
        .setDescription(`Please include your choice, you can pick from rock,paper or scissors.`)
        .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))

    let embed2 = new client.embed()
        .setDescription(`I won, I had paper.`)
        .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))

    let embed3 = new client.embed()
        .setDescription(`I won, I had scissors.`)
        .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))

    let embed4 = new client.embed()
        .setDescription(`I won I had rock.`)
        .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))

    let embed5 = new client.embed()
        .setDescription(`You won, I had scissors.`)
        .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))

    let embed6 = new client.embed()
        .setDescription(`You won, I had rock.`)
        .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))

    let embed7 = new client.embed()
        .setDescription(`You won, I had paper.`)
        .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))

    let embed8 = new client.embed()
        .setDescription(`Please include either: Rock, Paper, or Scissors.`)
        .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))

    let embed9 = new client.embed()
        .setDescription(`It was a tie, we both had ${args[0]}`)
        .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))


    if (!args[0]) {
        return message.channel.send(embed1)
    }

    let choices = ['rock', 'paper', 'scissors'];
    if (choices.includes((args[0]).toLowerCase())) {
        let number = Math.floor(Math.random() * 3);
        if (number == 1) {
            return message.channel.send(embed9)
        }
        if (number == 2) {
            if ((args[0]).toLowerCase() == "rock") {
                return message.channel.send(embed2)
            }
            if ((args[0]).toLowerCase() == "paper") {
                return message.channel.send(embed3)
            }
            if ((args[0]).toLowerCase() == "scissors") {
                return message.channel.send(embed4)
            }
        }
        if (number == 0) {
            if ((args[0]).toLowerCase() == "rock") {
                return message.channel.send(embed5)
            }
            if ((args[0]).toLowerCase() == "paper") {
                return message.channel.send(embed6)
            }
            if ((args[0]).toLowerCase() == "scissors") {
                return message.channel.send(embed7)
            }
        }
    } else {
        return message.channel.send(embed8)
    }
}