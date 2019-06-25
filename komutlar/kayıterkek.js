const Discord = require('discord.js');
exports.run = async (bot, message, msg, args) =>
{

    var user = message.mentions.members.first();

    let role1 = message.guild.roles.find("name", "Unconfirmed");
    let role2 = message.guild.roles.find("name", "Male");
	
	
    if (!user) return message.channel.send("Bir Kişi Etiketlemen Gerek!")
    if (user.roles.has(role2.id)) return message.channel.send(
    {
    embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (`Maalesef Bu Kullanıcı Zaten Kayıtlı! <@${user.id}>`)
        }
    }
    );





    await user.removeRole(role1);
    await user.addRole(role2)
   message.channel.send(
   {
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (`:star: Tebrikler başarıyla kayıt oldunuz! <@${user.id}>`)
        }
    }
)
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
};

exports.help = {
    name: 'erkek',
    description: 'Sunucuya kayıt olursunuz!',
    usage: 'erkek'
};