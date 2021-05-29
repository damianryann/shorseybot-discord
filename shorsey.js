const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODQ4MjQ4ODM5MTU2NTMxMjgy.YLJ3Sg._BgAeXt4ov_0QfSdp9N7H-AGkHk');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
