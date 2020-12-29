const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let kylus = args.slice(0).join(' ');
if (kylus.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(kylus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazbaqim'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};