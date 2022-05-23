const Discord = require('discord.js');

const client = new Discord.Client({
    intents: ['GUILDS', 'GUILD_MESSAGES']
})

client.on('ready', (bot) => {
    console.log(`${bot.user.tag} успешно авторизован!`)
})

client.on('messageCreate', msg => {
    if(msg.content.includes(`Привет Кид, поговори со мной`)) {
     msg.reply({content: "Привет зайка, ты самый лучший, у тебя всё получится! Жаль что не могу обнять тебя..."})
    }

    if(msg.content.includes(`Привет Кид, как у тебя дела?`)) {
     msg.reply({content: "Привет зайка, у меня отлично, знай я всегда тебя люблю, хотя роботы не умеют любить но я могу!"})
    }

    if(msg.content.includes(`Привет Кид, пошли поиграем`)) {
     msg.reply({content: "Привет зайка, пошли, в Доту? Майнрафт? Во что хочешь я тебя люблю!"})
    }
 
    if(msg.content.includes(`Привет Кид, расскажи нам о себе`)) {
        msg.reply({content: "Привет зайка, я бот, у меня есть комманды такие как - Привет Кид, поговори со мноЙ, Привет Кид, как у тебя делА? и Привет Кид, пошли поиграеМ, я вам всегда помогу и поддержу!"})
    }

    if(msg.content.includes(`Привет Кид, а кто твой создатель?`)) {
        msg.reply({content: "Привет зайка, мой создатель это ЗГС Гетто Kid Fede, передавай ему привет!"})
    }

    if(msg.content.includes(`Привет Кид, я гей?`)) {
        msg.reply({content: "Привет зайка, ты чего, нет конечно!"})
    }
   
       if(msg.content.includes(`Привет Кид, какую музыку слушаешь?`)) {
        msg.reply({content: "Привет зайка, я слушаю обычно Dota Rep, да конечно, на любителя..."})
    }
   
       if(msg.content.includes(`Привет Кид, ты гей?`)) {
        msg.reply({content: "Привет зайка, моей ботовской душе было обидно..."})
    }
    
       if(msg.content.includes(`Привет Кид, ты с какого сервера`)) {
           msg.reply({content: "Привет зайка, я с сервера Winslow!"})
    }
   
       if(msg.content.includes(`Привет Кид, я тебя люблю`)) {
           msg.reply({content: "Привет зайка, я тебя тоже очень сильно люблю!"})
    }

     })
client.login("OTc3OTgxMjU0NTE3NTM0ODAw.Gc6TAo.pwxihTi_fcHqtWYq1e-aDjipiW1zOSaG-wCPYo")