const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const talkedRecently = new Set();

 exports.run = (client, message, args) => {
                                         let update = new Discord.RichEmbed()
                    .setColor("#20B2AA")    
                    .addField(`Shutdown`, `I've been shutdown due to an update or repair! Please stand by!`)
     
message.channel.send(update).then(() => {
            client.destroy().then(() => {
            })
        })
 }
             
     
     
     
module.exports.help = {
    name: "shutdown"
}
