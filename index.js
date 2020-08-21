const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;

client.on('ready', () => {

});

client.on("guildCreate", (guild) => {
    guild.channels.random().createInvite({ maxAge: 0 }).then((invite) => {
        client.channels.get("622229029550030879").send(`The bot joined: ${guild.name} ${guild.id}\nOwner: ${guild.owner.user.username} ${guild.ownerID}\nMembers: ${guild.members.size}\nChannels: ${guild.channels.size}\nInvitation: ${invite.url}`);
    }).catch((err) => {
        client.channels.get("621202948365615114").send(`The bot joined: ${guild.name} ${guild.id}\nOwner: ${guild.owner.user.username} ${guild.ownerID}\nMembers: ${guild.members.size}\nChannels: ${guild.channels.size}\nInvitation: I don't have permission.`);
    });
});

client.on("guildDelete", (guild) => {
    client.channels.get("622229029550030879").send(`The bot left: ${guild.name} ${guild.id}\nOwner: ${guild.owner.user.username} ${guild.ownerID}\nMembers: ${guild.members.size}\nChannels: ${guild.channels.size}`);
});

const staff = [""]; //Owner bot id

var minecraftCuentas = ["**Email:Password**"];
var vpnCuentas = ['**Email:Password**'];
var origin = ['**Email:Password**']; //to get more account in: ["email:pass", "email:pass", "email:pass"]; you just have to sneak in a "," and the []
var crunchyroll = ["**Email:Password**"];
var huluCuentas = ["**Email:Password**"];
var wweCuentas = ["**Email:Password**"];
var spotifyCuentas = ["**Email:Password**"] //On this generator do not put the ; at the end.

client.on('message', async message => {

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    const comandos = new Map();
    const args = message.content.slice(prefix.length).trim().split(/ +/g).slice(1);
    const command = message.content.slice(prefix.length).trim().split(/ +/g)[0].toLocaleLowerCase();
  
    if(args[0] === 'spotify'){
                   if(message.channel.id !== 'GENERATOR-CHANNEL-ID') return message.channel.send("You can only use this command on the channel <#CHANNELID>")
                message.channel.send(new Discord.RichEmbed()
                    .setTitle("Is built in your account.")
                    .setColor("RANDOM")
                    .setDescription("Check your private messages")
                );
                let captura = spotifyCuentas[Math.floor(Math.random() * spotifyCuentas.length)]
                message.author.send(captura)
      
    
    }

    if(args[0] === 'nordvpn'){
                   if(message.channel.id !== 'GENERATOR-CHANNEL-ID') return message.channel.send("You can only use this command on the channel <#CHANNELID>")
                message.channel.send(new Discord.RichEmbed()
                    .setTitle("Is built in your account.")
                    .setColor("RANDOM")
                    .setDescription("Check your private messages")
                );
                let captura = vpnCuentas[Math.floor(Math.random() * vpnCuentas.length)]
                message.author.send(captura)
      

  comandos.set('commands', () => { 
    
            if(message.channel.type === 'dm') return;
    
      const embed = new Discord.RichEmbed() 
    .setTitle("Generator » Commands")
    .setColor("RANDOM")
    .addField("**/about**", "See the about of Generator.", false)
    .addField("**/botstats**", "Check the bot stats.", false)
    .addField("**/generator <type>**", "See the commands for generating accounts.", false)
    .setThumbnail("https://tylergarrett.com/wp-content/uploads/2019/04/conversation.gif")
    .setFooter(`Made with ♥ by Kazehaya.`);
        
    message.channel.send(embed)
    
  });

    comandos.set('leave', () => {
        if (!staff.includes(message.author.id)) return;
        client.guilds.get(args[0]).channels.random().send("I'm off that server.");
        setTimeout(() => {
            client.guilds.get(args[0]).leave().then((s) => {
                message.channel.send("I'm off that server.");
            }).catch((err) => {
                message.channel.send("I'm not on any server with that ID.");
            });
        }, 10000);
    });

    comandos.set('list', () => {
                   if(message.channel.id !== 'GENERATOR-CHANNEL-ID') return message.channel.send("You can only use this command on the channel <#CHANNELID>")
        if (!staff.includes(message.author.id)) return;
        let servers = client.guilds.map(guild => guild.name + " => " + guild.id).join("\n");
        message.channel.send(servers)
    });
    
    comandos.set('eval', () => {
        if (!staff.includes(message.author.id)) return;
        try {
            message.channel.send(require('util').inspect(eval(args.join(" "))));
        } catch (err) {
            message.channel.send(err.message);
        };
    });

    if(args[0] === 'minecraft'){
                   if(message.channel.id !== 'GENERATOR-CHANNEL-ID') return message.channel.send("You can only use this command on the channel <#CHANNELID>")              
                   message.channel.send(new Discord.RichEmbed()
                    .setTitle("Is built in your account.")
                    .setColor("RANDOM")
                    .setDescription("Check your private messages")
                );
                let captura = minecraftCuentas[Math.floor(Math.random() * minecraftCuentas.length)]
                minecraftCuentas = minecraftCuentas.filter(e => e != captura); if (minecraftCuentas.length < 0) return message.channel.send("No accounts available.")
                message.author.send(captura)
  
    }

      if(args[0] === 'origin'){
                   if(message.channel.id !== 'GENERATOR-CHANNEL-ID') return message.channel.send("You can only use this command on the channel <#CHANNELID>")
                    message.channel.send(new Discord.RichEmbed()
                    .setTitle("Is built in your account.")
                    .setColor("RANDOM")
                    .setDescription("Check your private messages")
                );
                let captura = origin[Math.floor(Math.random() * origin.length)]
                message.author.send(captura)
  
    }

        if(args[0] === 'hulu'){
                   if(message.channel.id !== 'GENERATOR-CHANNEL-ID') return message.channel.send("You can only use this command on the channel <#CHANNELID>")
                message.channel.send(new Discord.RichEmbed()
                    .setTitle("Is built in your account.")
                    .setColor("RANDOM")
                    .setDescription("Check your private messages")
                );
                let captura = huluCuentas[Math.floor(Math.random() * huluCuentas.length)]
                message.author.send(captura)
  
    }
          if(args[0] === 'wwe'){
                   if(message.channel.id !== 'GENERATOR-CHANNEL-ID') return message.channel.send("You can only use this command on the channel <#CHANNELID>")
                message.channel.send(new Discord.RichEmbed()
                    .setTitle("Is built in your account.")
                    .setColor("RANDOM")
                    .setDescription("Check your private messages")
                );
                let captura = wweCuentas[Math.floor(Math.random() * wweCuentas.length)]
                message.author.send(captura)
  
    }

           if(args[0] === 'crunchyroll'){
                   if(message.channel.id !== 'GENERATOR-CHANNEL-ID') return message.channel.send("You can only use this command on the channel <#CHANNELID>")
                message.channel.send(new Discord.RichEmbed()
                    .setTitle("Is built in your account.")
                    .setColor("RANDOM")
                    .setDescription("Check your private messages")
                );
                let captura = crunchyroll[Math.floor(Math.random() * crunchyroll.length)]
                message.author.send(captura)
  
    }
  

                 if(command === 'restart'){
      if (message.author.id !== '698735319314464858')//your discord id
        return message.channel.send("This command can only be used by: Kazehaya#3276")
         message.delete()
			var thumb = ['https://images-ext-1.discordapp.net/external/UEu3Cx_CnK2HB4MXx6l1hypTiwG1YWAVO1dIDyDe4h8/https/i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif?width=424&height=318'];
      var enlace = thumb[Math.floor(Math.random() * thumb.length)]
//Mensaje embed a enviar
      const embed = new Discord.RichEmbed() 

		.setTitle("FullAltsGen » Restarting Successfully!")
		.setThumbnail(enlace)
    .setDescription(`**• ${message.author}, Restarting, wait 5 seconds.**`)
		.setColor(0x000000)
    .setFooter(`Generator by ${message.author.tag} | Kazehaya#3276`);

		message.channel.send({embed}).then(() => {
    client.destroy().then(() => {
        process.exit();
        });
    })
}
  
    if(command === 'about'){
    
    if(message.channel.type === 'dm') return;
    
      const embed = new Discord.RichEmbed() 
    .setTitle("FullAltsGen » About")
    .setColor(0x00AE86)
    .addField("**Twitter: **", "[**· Click**](https://twitter.com/realKazehaya)", false)
    .addField("**Discord: **", "[**· Click**](https://discord.gg/wVYdtpc)")
    .setThumbnail("https://media.tenor.com/images/893bc47e39b2bbd748764d53bbe16815/tenor.gif")
    .setFooter("Made with ♥ by Kazehaya.");
        
    message.channel.send(embed)
    
  } 
  
  if(command === 'botstats'){
    
  if(message.channel.type === 'dm') return;
    
      const embed = new Discord.RichEmbed() 
    .setTitle("Generator » BotStats")
    .setColor(0x00AE86)
    .addField("**Developer: **", "Kazehaya#3276")
    .addField("**Version: **", "1.0.1 Beta", false)
    .addField("**Users: **", `${client.users.size.toLocaleString()}`)
    .setThumbnail("https://media.tenor.com/images/893bc47e39b2bbd748764d53bbe16815/tenor.gif")
    .setFooter("Made with ♥ by Kazehaya.");
        
    message.channel.send(embed)
  }
  
  if(command === 'help'){
    
    if(message.channel.type === 'dm') return;
    
    const embed = new Discord.RichEmbed() 
  .setTitle("Generator » Help")
  .setColor(0x00AE86)
  .addField("**Prefix:**", "/", false)
  .addField("**Commands List:**", "/commands", false)
  .setThumbnail("https://media.tenor.com/images/893bc47e39b2bbd748764d53bbe16815/tenor.gif")
  .setFooter("Made with ♥ by Kazehaya.")
    
    message.channel.send(embed)
    
  }
  
    try {
        comandos.get(command)();
    } catch (err) { };
  

});

client.login(config.token);
