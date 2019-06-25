const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {

    let kayıt = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
    if (!kayıt) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("📥 Birini Etiketlemelisin!")
        }
    })

    let role = msg.guild.roles.find(r => r.name === "ヤ| Night Kingdom");
    if (!role) {
        try {
            role = await msg.guild.Role({
            });

            msg.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    
                });
            });
        } catch (e) {
            console.log(e.stack);
        }

    }

    if (kayıt.roles.has(role.id)) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (" 💡 Zaten önceden permin verilmiş! ")
        }
    });

    await kayıt.addRole(role);
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (":star: Tebrikler başarıyla permi aldınız!")
        }
    })
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
};

exports.help = {
    name: 'tag',
    description: 'Tag alanlara tag yetkisi verir!',
    usage: 'tag'
};