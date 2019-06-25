const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazini Yaz');
  message.channel.sendCode("asciidoc", `
  ${mesaj} `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botyaz',
  description: 'inek',
  usage: 'inek'
};