const Discord = require('discord.js');
const bot = new Discord.Client();

//Bot settings
const prefix = "!"

bot.on('message', message => {
  //Variables
  let msg = message.content.toUpperCase(); //Msg Variables
  let sender = message.author; //Takes the msg

  //commands
  if (msg === prefix +'HELP') {

  message.channel.send('Help list will be added soon!');

  }

  if (msg === prefix +'PURCHASE') {

  message.channel.send('Purchase it now by clicking to the following link: https://store.steampowered.com/app/748820/Monstrous/');

  }
  
  if (msg === prefix +'WEBSITE') {

  message.channel.send('http://www.reddiskgames.com/');

  }
  
  if (msg === prefix +'INVITE') {

  message.channel.send('You can invite anyone to this server by using this link: https://discord.gg/xac3Fx2');

  }
  

  
});

bot.on('ready', () => {
  console.log('Bot started.')
});
//Demmit bois cant steal token.
bot.login(process.env.BOT_TOKEN);
