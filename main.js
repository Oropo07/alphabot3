const Discord = require('discord.js');
const bot = new Discord.Client ();

bot.on('guildMemberAdd', member => {
   member.send(":pushpin: Bienvenue sur le serveur **Alpha !**");
});

bot.login('NDE1NjcxNTgzNDYyNTIyODgx.DW5T5g.-EirllXqugjCih4AEx2BGq7OI6o');