module.exports = {
    description: 'Lets you lock a channel in the guild.',
    aliases: ['lockc', 'lock'],
    usage: 'lockchannel <#Channel>'
}
module.exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send(new client.embed().setDescription(`Sorry! You are missing the permission \`ADMINISTRATOR\``).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })));

    const channel =
        message.mentions.channels.first() ||
        message.guild.channels.cache.get(args[0]);

    if (!channel) {
        return message.channel.send(new client.embed().setDescription(`Please provide a valid channel by mention or ID!`).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })));
    }

    channel
        .updateOverwrite(message.guild.roles.everyone.id, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
        })
        .catch((error) => {
            return message.channel.send(new client.embed().setDescription(`Sorry! You are missing the permission \`ADMINISTRATOR\``).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })))
        });

    message.guild.roles.cache.each((role) => {
        channel
            .updateOverwrite(role.id, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
            })
            .catch((error) => {
                return message.channel.send(new client.embed().setDescription(`Sorry! You are missing the permission \`ADMINISTRATOR\``).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })));
            });
    });

    const embed = new client.embed()
        .setAuthor(`${message.author.tag} - (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Action:** Lock Channel\n**Channel:** ${channel.name}\n**Time:** ${require('moment')().format('ddd, MMMM Do YYYY [at] hh:mm A')}`)
        .setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        .setColor(`RED`)
    channel.send(embed);

    message.author.send(new client.embed().setColor(`GREEN`).setDescription(`Success! You have locked ${channel.name}.`).setFooter(`${message.guild.name} | Made By dreamwastaken#0001`, message.guild.iconURL({ dynamic: true })))
}