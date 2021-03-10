const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/Affaibli.html");
});

app.get("/", (request, response) => {
  response.json(200);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("our app is listening on port " + listener.address().port);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
//                                                                                                                //
//                                                                                                                //
//                                                  AFFABILI BOT BODY                                             //
//                                                                                                                //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Cliente
const Discord = require("discord.js"); 
const client = new Discord.Client({ ws: { intents: 32511 } }); //No Precences de momento.
client.login(process.env.TOKEN);
client.snipes = new Map();
//Configuración
const config = require("./config.json");
const prefix = process.env.PREFIX;
//Modulos
const fs = require("fs");
const marsnpm = require("marsnpm");
const DIG = require("discord-image-generation");
const Swiftcord = require("swiftcord");
const util = require("util");
const db = require("quick.db");

//Estado Inicial
client.on("ready", () => {
  client.cooldown = new Map();
  console.log(`Iniciado ${client.user.tag}, espere 5 segundos.`);
  client.user.setPresence({
    status: "online", 
    activity: {
     name: "Reiniciando..", 
        type: "WATCHING"  
    }
  });
}); 

//MultiEstado  + Mensaje de reinicio (log)
client.on("ready", () => {
  console.log(`MultiEstado Listo!`);
  const quanto = client.guilds.cache.size;
  var membersQuanto = 0;
  for (var i = 0; i < quanto; i++) {
    membersQuanto += client.guilds.cache.array()[i].memberCount;
  }
    const OS = require("os"); //os = operative system (sistema operativo), no hay que instalarlo, viene con node.js
  const maxMemory = OS.totalmem(); //obtiene la cantidad de bytes de memoria que hay totales de RAM (numero)
  var list = ['4%', '5%', '6%', '7%', '8%', '9%', '10%', '11%', '12%', '13%', '14%', '15%', '16%', '17%', '18%', '19%', '20%', '21%', '22%', '23%', '24%', '25%', '26%', '27%', '28%', '29%', '30%', '31%', '32%', '33%', '34%', '35%', '36%', '37%', '38%', '39%', '40%', '41%', '42%', '43%', '44%', '45%', '46%', '47%', '48%', '49%', '50%', '51%', '52%',  '53%', '54%', '55%', '56%', '57%', '58%', '59%', '60%', '61%', '62%', '63%', '64%', '65%', '66%', '67%', '68%', '69%', '70%', '71%', '72%', '73%', '74%', '75%', '76%', '77%', '78%', '79%', '80%', '81%', '82%', '83%', '84%', '85%', '86%', '87%', '88%', '89%', '90%', '91%', '92%', '93%', '94%', '95%', '96%', '97%', '98%', '99%',  
];

  var rand = list[Math.floor(Math.random() * list.length)]; 
    var list2 = ['t6*Xx86jYd', 'nz3W[McVUW', '6in7R+XM0%', '-xsDzps643', 'Jy}+mCkCU3', '{Y}@SJbCH^', 'QCM}hqI"Q|', ';9r=d|+%S1', 'ug46KgOp;C', 'FEjzf++rF@', 'PGI{=QoJ*X', 'JA;9TaeBy2', '5hX-[dQOU6', '%8gHWUwz}[', '@Ho3*GY:8^', 'hGx:%ySJL9', '"J\\yCsg0;', 'Ek;97oYz{k', 'HoomFsI2G2', 'NUOJ5M-z3:', '-FjW]jr@}~', '5933{mMN"J', '%LWNtP}ZRt', 'hrb4ggpAh3', 'VUl2b1gKzJ', 'J4dlx%4;u0', '^K:"SzBi6N', 'stzqplE=w0', 'RgbKw"wuPw', '3u}:t-0;kQ', '|gn0@SK%Ed', 'hWWIc0mGQ8', '%INezqzUp0', 'eGb5:lgI-U', 'Tmrj@}T~N}', 'Ia"-cTmlNV', '-F2WL9crv%', 'T{3Fy~D1Fj', 'MDFE^BCdgu', '"AFmd;}f-D', ']8H]n98cbE', 'POT-C0S{dP', '6BxUaiE7T6', 'DLj@7}6554', 'H%EH%*ZTiG', 'J7@+2iL3Z|', '@RPC{;v5Lu', 'e3NxaLFaNI', 'XX2j24@N;o',  'EntXbv7kyR', 'qnKQ:4Oi3Y', 'vo-mg;~sm;', 'aALIy@jiYp', 'G@vghbSV4q', '|3vbNiJVQK', 'bwZV{2x]zW', '4=CV;jxIT7', 'xIR[-FMbiS', 
];

  var rand2 = list2[Math.floor(Math.random() * list2.length)]; 
  var membersQuanto = 0;
  for (var i = 0; i < quanto; i++) {
    membersQuanto += client.guilds.cache.array()[i].memberCount;
  }

  const canalesc = client.channels.cache.filter(c => c.type !== "category")
    .size;
  function getMemoryUsage() {
  const free = OS.freemem();
    return {
      max: memory(maxMemory),
      free: memory(free),
      used: memory(maxMemory - free), 
      usedByProcess: memory(process.memoryUsage().rss) 
    };
  }

  function memory(bytes = 0) {
    const gigaBytes = bytes / 1024 ** 3; 

    if (gigaBytes > 1) {
      return `${gigaBytes.toFixed(1)} GB`;
    }

    const megaBytes = bytes / 1024 ** 2;
    if (megaBytes < 10) return `${megaBytes.toFixed(2)} MB`;
    if (megaBytes < 100) return `${megaBytes.toFixed(1)} MB`;
    return `${Math.floor(megaBytes)} MB`;
  }

  let memoria = getMemoryUsage();

  const d = new Date();
  var channel1 = client.guilds.cache.get("251221144013766656").channels.cache.get("797675077109809182");
  channel1.send( new Discord.MessageEmbed()
                .setTitle(`<a:662824192634388511:699480140824051735>Affaibli | Reiniciado Correctamente`)
                .setDescription(`Mensaje automatico de reinicio del bot\nEstado y comprobación del sistema`)
                .setAuthor(`Affaibli#6834`, client.user.displayAvatarURL({ dynamic: true }))
                .setColor(`#04FFF6`)
                .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .addField(
      `\`📡\`Estado de librerías ✅\nAutorización: \`\`\`${rand2}\`\`\` `,
      `\`\`\`OS - Ubuntu 16.04.6 LTS (Xenial Xerus Server)\nIntel(R) Xeon(R) CPU E5-2670 v2 @ 2.50GHz x86 \n\n\n⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄\n⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄\n⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰\n⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤\n⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗\n⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄\n⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄\n⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄\n⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄\n⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄\n⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄ \n\n\nDate: ${d.toLocaleString(
        "es-MX"
      )} - CDMX (UTC-6)\`\`\``
    )
    .addField(
      `\`📈\`Metadatos`,
      `> **Servidores:** ${quanto} \n> **Canales:** ${canalesc} \n> **Usuarios:** ${membersQuanto} \n> **API/Bot latencia:** ${client.ws.ping}ms `,
      true
    )
    .addField(
      `\`🚦\`Procesos del bot`,
      `> **Uso de CPU:** ${rand} \n> **Uso de RAM:** ${memoria.usedByProcess} \n> **Max de RAM:** ${memoria.max} \n> **Sin usar RAM:** ${memoria.free} \n> **Espacio en disco:** 2.1 GB `,
      true
    )
    .setFooter(
      "Para más información consulte la terminal", client.user.displayAvatarURL({ dynamic: true })))
  console.log("Comprobación de sistema enviado.");
  var channel = client.guilds.cache
    .get("251221144013766656") // Id del servidor
    .channels.cache.get("797675077109809182"); //Id del canal donde el mensaje será enviado
  setInterval(function() {
    channel.send(new Discord.MessageEmbed()
                 .setTitle(`<a:662824192634388511:699480140824051735>Affaibli | Comprobación Automatica `)
                 .setDescription(`Mensaje automatico cada \`hora\` de comprobación \`sistema activo\``)
                 .setAuthor(`Affaibli#6834`, client.user.displayAvatarURL({ dynamic: true }))
                 .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
                 .setColor(`#04FFF6`)
                 .addField(`\`🚦\` Datos`, `\n\`📡\` **API/Bot latencia:** ${client.ws.ping}ms\n\`🔒\` **Estado de Librerias:** ✅\n\`⏰\` **Fecha**: ${d.toLocaleString(
        "es-MX"
      )} - CDMX (UTC-6) `)
                 .setFooter(`Para más información consulte la terminal`, client.user.displayAvatarURL({ dynamic: true }))
                 .setTimestamp()
                );
  }, 1000 * 60 * 60 * 1);
  
  const ListaActividades = [
    `¿Ayuda? | f!help`,
    `We back in 20 minutes`,
    `Maintenance`
  ];

  setInterval(() => {
    const index = Math.floor(Math.random() * (ListaActividades.length - 1) + 1);
    client.user.setActivity(ListaActividades[index], { type: "WATCHING" });
  }, 5000);
});  


//Menciones + DM recopilador + Sistema AFK.
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.guild == null) {
    if (message.author.bot) return;
    var avatar = message.author.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 1024
    });
    const embed = new Discord.MessageEmbed()
      .setTitle(
        "<a:662824192634388511:699480140824051735> Mensaje Directo Recibido"
      )
      .addField("Autor:", message.author)
      .setColor("#04FFF6")
      .setThumbnail(avatar)
      .addField("Mensaje:\n", message.content)
      .setFooter("Alerta DM", client.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp();
    client.channels.cache.get("748353622563225610").send(embed);
  }
  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) { 
      /*  await message.react("<a:757960664080974024:758534476405014549>"); */
        await message.react("<a:2006_Reee:701958938303922187>");
        message.channel.send(`Saludos ${message.author}, ¿En que te puedo ayudar? <a:7940_FlyingHearts:713938159431450744> \nPrefix: \`${prefix}\` \n**Postdata**: No contesto mensajes por **DM**. <a:1339_sanicparty:713935560896413796> ||Bueno ci, pero aveces.|| `); 
 }
  if (message.channel.type == "dm") return;
  if(message.mentions.members.first()) {
      let user = message.mentions.users.first();
     /*  if (!user || user.id == message.author.id) return; */
        if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
          var data = null;
          if(message && message.guild && message.guild.id) data = message.guild.id;
          if(!data) data = Date.now();
          var w = await db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`, data)
          if(w) {
            if(w.reason == 1) {
              var reason = `Sin razón.`;
            } else {
            var reason = w.reason; 
            var reason2 = reason.replace(/@(here)/gi, `here`).replace(/@(everyone)/gi, `everyone`);
           const info = db.get(`afk-${message.author.id}+${message.guild.id}`, data)
            message.channel.send(`¡${message.author}, **${message.mentions.members.first().user.username}** se encuentra **AFK**!.\n Motivo: ${reason2.slice(0, 256)}`).then(m => m.delete({ timeout: 10000}).catch(()=>{}));
      }
    }
  }
 } 
});

//Log server add bot
client.on(`guildCreate`, async guild => {
  
  const iconPNG = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=2048`;
  const logsChannel = client.channels.cache.get(`748353622563225610`);
  const embed = new Discord.MessageEmbed()
    .setColor(`#04FFF6`)
    .setTimestamp()
    .setTitle(`Me agregaron a ${guild.name}`)
    .setDescription(
      `\`\`\`
Creador: ${guild.owner.user.tag} / ID: ${guild.owner.id}
Usuarios: ${await client.guilds.cache.get(guild.id).memberCount}
Server ID: ${guild.id}
Creado: ${guild.joinedAt.toDateString()}
\`\`\``
    )
    .setImage(guild.iconURL({ dynamic: true, size: 2048, format: `png` }));
  logsChannel.send(embed);
  let found = 0;
  guild.channels.cache.map(c => {
    if (found === 0) {
      if (c.type === "text") {
        if (c.permissionsFor(guild.id).has("VIEW_CHANNEL") === true) {
          if (c.permissionsFor(guild.id).has("SEND_MESSAGES") === true) {
            try {
              c.send(
                `Hola soy <@703509135743778877>, gracias por agregarme <:blush_eoto_002:693679299278012436>`
              );
            //  guild.owner.send("Gracias por agregarme a tu servidor!"); 
              } catch (err) { 
              console.log(err);
            }
            found = 1;
          }
        }
      }
    }
  });
}); 

//Log server remove bot
client.on(`guildDelete`, async guild => {
  
  const iconPNG = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=2048`;
  const logsChannel = client.channels.cache.get(`748353622563225610`);
  const embed = new Discord.MessageEmbed()
    .setColor(`#04FFF6`)
    .setTimestamp()
    .setTitle(`Me eliminaron de ${guild.name}`)
    .setDescription(
      `\`\`\`
Creador: ${guild.owner.user.tag} / ID: ${guild.ownerID}
Server ID: ${guild.id}
Creado: ${guild.joinedAt.toDateString()}
\`\`\``
    )
    .setImage(guild.iconURL({ dynamic: true, size: 2048, format: `png` }));
  logsChannel.send(embed);
});

//Imagen Bienvenida (Solo Support Server)
client.on("guildMemberAdd", async member => {
  let guild = client.guilds.cache.get("251221144013766656");
  let canal = client.channels.cache.get("745834175214518352");
  if (guild != member.guild) {
    return console.log("Falsa Alarma, es en otro servidor!");
  } else {
let avatar = member.user.displayAvatarURL({
      dynamic: true,
      size: 1024,
      format: `png`
    });    
const canvas = require("discord-canvas"),
    welcomeCanvas = new canvas.Welcome();
    let image = await welcomeCanvas
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setMemberCount(member.guild.memberCount) 
  .setGuildName("Affaibli")
  .setAvatar(avatar)
.setColor("title", "#ffffff") // WELCOME 
.setColor("title-border", "#cf1111") // WELCOME BORDER
.setColor("avatar", "#cf1111") // CIRCLE
/*.setColor("username", "#ffffff") */// USER
.setColor("username-box", "#cf1111") // USER BACKGROUND
/*.setColor("hashtag", "#8015EA") */// # COLOR 
/*.setColor("discriminator", "#8015EA") */// USER DISCRIMINATOR
.setColor("discriminator-box", "#cf1111") // DISCRIMINATOR BACKGROUND
/*.setColor("message", "#8015EA") // WELCOME MESSAGE */
.setColor("message-box", "#cf1111") // WELCOME MESSAGE BACKGROUND
/*.setColor("member-count", "#ffffff") */// MEMBERCOUNT MESSAGE
/*.setColor("background", "#ffffff") */// BACKGROUND COLOR
.setColor("border", "#cf1111") // BORDER COLOR  
  .setText("title", "bienvenid@")
  .setText("message", "bienvenid@ a {server} <3")    
  .setText("member-count", "- {count}th miembro!")
  .setBackground("https://cdn.discordapp.com/attachments/703518450907086948/786077985080868904/41251512512312.jpg")
  .toAttachment();

let attachment = new Discord.MessageAttachment(image.toBuffer(), "bienvenido.png");

canal.send(attachment);
member.send(attachment);
  }
});

//Imagen Despedida (Solo Support Server)
client.on("guildMemberRemove", async member => {
  var list = [
    "https://media1.tenor.com/images/a035b6942d3f0e217840624ad7672283/tenor.gif?itemid=11820579",
    "https://i.pinimg.com/originals/34/12/9a/34129ac9fd3db99e6cc2a1d286dd2bfc.gif",
    "https://64.media.tumblr.com/tumblr_m1t614JSq21qkpz7co1_500.gif",
    "https://media1.tenor.com/images/78b41d02e3d6b5b857120879c49e559f/tenor.gif?itemid=15990382",
    "https://media1.tenor.com/images/56976dab54f0f14b5d9b87d100091858/tenor.gif?itemid=17441907",
    "https://www.askideas.com/media/07/I-Guess-This-Is-Goodbye-Animated-Picture.gif",
    "https://i.pinimg.com/originals/40/66/a5/4066a57e49c748d90330db89c15af609.gif",
    "https://thumbs.gfycat.com/LikableYellowGander-size_restricted.gif",
    "https://media1.tenor.com/images/97dd3b98910af5ac12559df23454f9ac/tenor.gif?itemid=12046347",
    "https://i.imgur.com/kOXnswR.gif",
    "https://pa1.narvii.com/6575/041d8fa3248163c1b34774427c1159aa39ce7607_hq.gif"
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  var list2 = [
    `¡**${member.user.username}** dejó el servidor! <:2647_nene_peeking:701954690316763156> `,
    `¡¿Porque... **${member.user.username}**.. te fuiste?! <:2068_YatogameCry:693681159263223818> `,
    `¿**${member.user.username}**? supongo qué no eras imporante. <:6193_mariumu:693681228590612529> `,
    `¡Viva **${member.user.username}**!.. ¡Pero muy lejos de aqui! <a:8215_stressed:701959049520087130>  `
  ];

  var mensaje = list2[Math.floor(Math.random() * list2.length)];
  let guild = await client.guilds.cache.get("251221144013766656");
  let channel = await client.channels.cache.get("761058383272738846");
  let channel2 = await client.channels.cache.get("748353622563225610");
  if (guild != member.guild) {
    return console.log(
      "Alguna tonto salió del servidor. Pero no es el fin del mundo, así que está bien :)"
    );
  } else {
    let embed = await new Discord.MessageEmbed()
      .setColor("#04FFF6")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(
        `<a:662824192634388511:699480140824051735> Un usuario a salido del servidor.`
      )
      .setImage(rand)
      .setDescription(mensaje)
      .setThumbnail(
        member.user.displayAvatarURL({
          dynamic: true,
          size: 4096
        })
      )
      .setFooter(
        "Affaibli Discord.",
        client.user.avatarURL({
          dynamic: true,
          size: 4096
        })
      )
      .setTimestamp();
    channel.send(embed).catch(()=>{});
  }
});

//Invite Tracker (Solo Support Server
const invites = {};
const wait = require('util').promisify(setTimeout);

client.on('ready', async () => {
  await wait(1000);

client.guilds.cache.forEach(g => {
  g.fetchInvites().catch(e => e).then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
//
client.on('guildMemberAdd', async member => {
  let guild = client.guilds.cache.get("251221144013766656");
  if (guild != member.guild) return;
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.cache.get(invite.inviter.id);
    const logChannel = member.guild.channels.cache.find(channel => channel.id === `745834175214518352`);
    let InviteEmbed = new Discord.MessageEmbed()
    .setColor(`#04FFF6`)
    .setAuthor(`Affaibli#6834`, client.user.avatarURL({ dynamic: true, format: "png"}))
    .setTitle(`<a:662824192634388511:699480140824051735>Affaibli | Invite tracker`)
    .setDescription(`¡${member.user} ha sido invitad@ al servidor!`)
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024}))
    .addField(`\`📡\` Información`, `\`👤\` Usuario: ${member.user} \n\`✉️\` Invitado por: **${inviter.username}** \n\`📩\` Usos de la invitación: **${invite.uses}** \n\`💻\` Código de invitación: ${invite.url}`);

    logChannel.send(InviteEmbed);
  });
});


//Sistema de Bienvenidas (Global)
client.on("guildMemberAdd", async member => { //usage of welcome event
  let chx = db.get(`welchannel_${member.guild.id}`); //defining var
  let txmsg = db.get(`weltext_${member.guild.id}`);
  let imagen = db.get(`welimage_${member.guild.id}`);
  let color = db.get(`welcolor_${member.guild.id}`);
  let cuadro = db.get(`welcuadro_${member.guild.id}`);
  if(chx === null) { //check if var have value or not
    return;
  }
  if(txmsg === null) { 
    txmsg = "  ";
  }
  if(imagen === null) { //check if var have value or not
    return; 
  } 
  if(color === null) {
    return;
  }
  if(cuadro === null) {
    cuadro = "bienvenid@ a {server}!";
  }  
let convertidor = txmsg.replace(/{member}/g, `<@${member.id}>`); 
let avatar = member.user.displayAvatarURL({ dynamic: true, format: `png`, size: 2048 });

const canvas = require("discord-canvas"),
    welcomeCanvas = new canvas.Welcome();
    let image = await welcomeCanvas
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setMemberCount(member.guild.memberCount) 
  .setGuildName(member.guild.name)
  .setAvatar(avatar)
  .setColor("title", "#ffffff") // WELCOME 
  .setColor("title-border", `${color}`) // WELCOME BORDER
  .setColor("avatar", `${color}`) // CIRCLE
  .setColor("username-box", `${color}`) // USER BACKGROUND
  .setColor("discriminator-box", `${color}`) // DISCRIMINATOR BACKGROUND
  .setColor("message-box", `${color}`) // WELCOME MESSAGE BACKGROUND
  .setColor("border", `${color}`) // BORDER COLOR  
  .setText("title", "bienvenid@")
  .setText("message", `${cuadro}`)    
  .setText("member-count", "- {count}th miembro!")
  .setBackground(`${imagen}`)
  .toAttachment();

let attachment = new Discord.MessageAttachment(image.toBuffer(), "bienvenido.png"); 
client.channels.cache.get(chx).send(convertidor, attachment).catch(e => e);
});

//Sistema de Despedidas (Global)
client.on("guildMemberRemove", async member => {
  let chx = db.get(`leachannel_${member.guild.id}`); //defining var
  let txmsg = db.get(`leatext_${member.guild.id}`);
  let imagen = db.get(`leaimage_${member.guild.id}`);
  let color = db.get(`leacolor_${member.guild.id}`);
  let cuadro = db.get(`leacuadro_${member.guild.id}`);
  
  if(chx === null) { //check if var have value or not
    return;
  }
  if(txmsg === null) { 
    txmsg = "  ";
  }
  if(imagen === null) { //check if var have value or not
    return; 
  } 
  if(color === null) {
    return;
  }
  if(cuadro === null) {
    cuadro = "se ha ido de {server}!";
  }  
  
let convertidor = txmsg.replace(/{member}/g, `<@${member.id}>`); 
let avatar = member.user.displayAvatarURL({ dynamic: true, format: `png`, size: 2048 }); 
const canvas = require("discord-canvas"),
  goodbyeCanvas = new canvas.Goodbye();

let image = await goodbyeCanvas
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setMemberCount(member.guild.memberCount) 
  .setGuildName(member.guild.name)
  .setAvatar(avatar)
  .setColor("title", "#ffffff") // WELCOME 
  .setColor("title-border", `${color}`) // WELCOME BORDER
  .setColor("avatar", `${color}`) // CIRCLE
  .setColor("username-box", `${color}`) // USER BACKGROUND
  .setColor("discriminator-box", `${color}`) // DISCRIMINATOR BACKGROUND
  .setColor("message-box", `${color}`) // WELCOME MESSAGE BACKGROUND
  .setColor("border", `${color}`) // BORDER COLOR  
  .setText("title", "adios")
  .setText("message", `${cuadro}`)    
  .setText("member-count", "- {count}th miembro!")
  .setBackground(`${imagen}`)
  .toAttachment();
 
const attachment = new Discord.MessageAttachment(image.toBuffer(), "goodbye.png");
 
client.channels.cache.get(chx).send(convertidor, attachment).catch(e => e);
});


//Snipe Evento
client.on("messageDelete", async message =>{
  client.snipes.set(message.channel.id, {
    content: message.content,
    delete: message.author,
    canal: message.channel
  })
});


//Command Handler (global sin dm)
client.on("message", async message => {
  const msg = message;
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
    return;
  if (
    message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)
  )
    return;

  const args = message.content
    .trim()
    .slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

//Automatización  
 if (fs.existsSync(`./automatizacion/${command}.js`)) {
    const commandFile = require(`./automatizacion/${command}.js`);
    commandFile.run(client, message, args);
  } 

//Diversión
  if (fs.existsSync(`./diversion/${command}.js`)) {
    const commandFile = require(`./diversion/${command}.js`);
    commandFile.run(client, message, args);
  }

//Juegos
  if (fs.existsSync(`./juegos/${command}.js`)) {
    const commandFile = require(`./juegos/${command}.js`);
    commandFile.run(client, message, args);
  }

//Utilidad
  if (fs.existsSync(`./utilidad/${command}.js`)) {
    const commandFile = require(`./utilidad/${command}.js`);
    commandFile.run(client, message, args);
  }

//Moderación
  if (fs.existsSync(`./moderacion/${command}.js`)) {
    const commandFile = require(`./moderacion/${command}.js`);
    commandFile.run(client, message, args);
  }
  
//Owner
    if (fs.existsSync(`./owner/${command}.js`)) {
    const commandFile = require(`./owner/${command}.js`);
    commandFile.run(client, message, args);
  } 

//Nsfw
  if (fs.existsSync(`./nsfw/${command}.js`)) {
    if (!message.channel.nsfw) {
      return message.reply(`No puedes usar este comando en un canal SFW.`);
    } else {
      const commandFile = require(`./nsfw/${command}.js`);
      commandFile.run(client, message, args);
    }         
  } 
});    
