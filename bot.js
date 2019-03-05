const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot Giriş Yaptı Lütfen Çukur ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!maç') {
    msg.reply('**Akhısar Beledıyespor-Alanyaspor -Saat:20:00**');
  }
  if (msg.content === '!top') {
    msg.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJIBE3vN7FaqGmZeE0ayPXgyuY4v9dL00GkchshuNveNAw-UK');
  }
  if (msg.content === '!destek') {
    msg.reply('https://www.youtube.com/channel/UC95vxzTYp8w_H5opPW7ng2w');
  }
  if (msg.content === '!sunucu') {
    msg.reply('**Yakında**');
  }
  if (msg.content === 'Sa') {
    msg.reply('**Aleykümselam,Hoşgeldin**');
  }
  if (msg.content === '!kral') {
    msg.reply('http://icdn.ensonhaber.com/resimler/diger/rte_7011.jpg');
  }
});

client.login('NTQ5NTY0MTU4OTUwMjQ0MzY0.D165Dg.23qgAsLTwGzp2h2dikt3fyuKrZE');



const discord = require("discord.js");

exports.run = async (client, msg) => {

const radio = {
    "number1": "https://20723.live.streamtheworld.com/NUMBER1FM_SC?type=.mp3",
    "powerturk": "https://listen.powerapp.com.tr/powerturk/mpeg/icecast.audio?/;stream.nsv",
    "power": "https://listen.powerapp.com.tr/powerfm/mpeg/icecast.audio?/;stream.nsv",
    "metrofm": "https://17703.live.streamtheworld.com/METRO_FM_SC?type=.mp3",
    "fenomen": "https://listen.radyofenomen.com/fenomen/128/icecast.audio?/;stream.nsv",
    "slowturk": "https://radyo.dogannet.tv/slowturk",
    "joyturk": "https://17753.live.streamtheworld.com/JOY_TURK_SC?/;stream.mp3",

}
            if (!msg.guild.voiceConnection) {

                if (!msg.member.voiceChannel) return msg.channel.send('❌ | Lütfen Bir Odaya Gir  !')

            }

            let args = msg.content.split(" ").slice(1).join(" ").toLowerCase();

      if (!args) return msg.channel.send('❌ | Bir Radyo Seçin : **number1**, **powerturk**, **power**, **metrofm**, **fenomen**, **slowturk**, **joyturk**')

        if(!radio[args]) return msg.channel.send('❌ | Lütfen Yandaki Radiolardan Birini Seç : **number1**, **powerturk**, **power**, **metrofm**, **fenomen**, **slowtürk**, **joyturk**')

    msg.member.voiceChannel.join().then(connection => {

    require('https').get(radio[args], (res) => {

            connection.playStream(res);

     let embed = new Discord.RichEmbed()
        .setAuthor(args)
        .setColor(0xFF0000)
        .addField("Radyo", args)
        .addField("Bağlantı", radio[args])
        .setFooter(msg.author.tag);

     msg.channel.send("**İyi Dinlemeler ↓Artz Bot↓ **", embed);

          });

  });

}




exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["radio"],
    permLevel: 0
  };
exports.help = {
    name : "radyo",
    usage: "radyo metrofm",
    description:"Radyo dinlersiniz"
}
//Artz
