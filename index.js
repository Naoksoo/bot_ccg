const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "!";

Client.on ("ready", () => {
    console.log("bot oppérationnel");
});

Client.login("ODc2NDIxMDE2MDczNjgyOTg1.YRj0rQ.oE4t08zC6nzgUzZ-ynDOarmcADg");

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!sniper
    if (message.content === prefix + "sniper"){
        message.reply("_crit crit_ POOOOOM ! 360 headshot dans ta grand mère")
    }

    //!help
    if (message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#8a0505")
            .setTitle("Liste des commandes")
            .setAuthor("bot by Naoksoo.#8907", "http://pm1.narvii.com/6743/2ddb8e65cb1a332042f809ee60e22eb4a83a4eb5v2_00.jpg")
            .setDescription("Vous y trouverez la liste des commandes du bot")
            .setThumbnail("http://ekladata.com/euh8vUT76Aai2z0zoNsgvsj4jVA.png")
            .addField("!help", "Affiche la liste des commandes")
            .addField("!team", "Affiche les informations brutes de la team")
            .addField("!sniper", "Met un headshot dans votre pire ennemi")
            .addField("!niveaux", "Affiche les recompenses de niveaux")
            .addField("!reseaux", "Affiche tout les réseaux sociaux officiels de la team")
            .setTimestamp()
            .setFooter("Ce bot appartient au serveur CCG", "http://pm1.narvii.com/6743/2ddb8e65cb1a332042f809ee60e22eb4a83a4eb5v2_00.jpg")
        message.channel.send({embeds: [embed]});
    }

    //!team
    if (message.content === prefix + "team"){
        const embed = new Discord.MessageEmbed()
            .setColor("#8a0505")
            .setTitle("Team")
            .setAuthor("bot by Naoksoo.#8907", "http://pm1.narvii.com/6743/2ddb8e65cb1a332042f809ee60e22eb4a83a4eb5v2_00.jpg")
            .setThumbnail("http://ekladata.com/euh8vUT76Aai2z0zoNsgvsj4jVA.png")
            .addField("CCG", "Une team multi-gamimg qui a pour gérant Naoksoo et Saikoo. Pour nous rejoindre postuler avec une candidature !")
            .setTimestamp()
            .setFooter("Ce bot appartient au serveur CCG", "http://pm1.narvii.com/6743/2ddb8e65cb1a332042f809ee60e22eb4a83a4eb5v2_00.jpg")
        message.channel.send({embeds: [embed]});
    }

    //!niveaux
    if (message.content === prefix + "niveaux"){
        const embed = new Discord.MessageEmbed()
        .setColor("#8a0505")
        .setTitle("Rôles Niveaux")
        .setAuthor("bot by Naoksoo.#8907", "http://pm1.narvii.com/6743/2ddb8e65cb1a332042f809ee60e22eb4a83a4eb5v2_00.jpg")
        .setThumbnail("http://ekladata.com/euh8vUT76Aai2z0zoNsgvsj4jVA.png")
        .setDescription("Plus vous parlez sur le serveur, plus vous gagnez d'ex et donc passer de niveaux pour voir votre niveaux aller dans cmd et tapper *rank. Vous pouvez voir les recompenses de niveaux avec la commande !niveaux")
        .addField("niveaux 10 :", "Rang B")
        .addField("niveaux 15 :", "Rang A")
        .addField("niveaux 25 :", "Rang S")
        .addField("niveaux 50 :", "Rang SS")
        .addField("niveaux 75 :", "Rang SS*")
        .setTimestamp()
        .setFooter("Ce bot appartient au serveur CCG", "http://pm1.narvii.com/6743/2ddb8e65cb1a332042f809ee60e22eb4a83a4eb5v2_00.jpg")
    message.channel.send({embeds: [embed]});
    
    }

    //!reseaux
    if(message.content === prefix + "reseaux"){
        const embed = new Discord.MessageEmbed()
        .setColor("#8a0505")
        .setTitle("Nos réseaux :")
        .setAuthor("bot by Naoksoo.#8907", "http://pm1.narvii.com/6743/2ddb8e65cb1a332042f809ee60e22eb4a83a4eb5v2_00.jpg")
        .setThumbnail("http://ekladata.com/euh8vUT76Aai2z0zoNsgvsj4jVA.png")
        .setDescription("Voici les réseaux sociaux officiel de la team CCG")
        .addField("Instagram :", "ccgteam14")
        .addField("Twitter :", "CCGTeam14")
        .addField("TikTok :", "ccgteam14")
        .setTimestamp()
        .setFooter("Ce bot appartient au serveur CCG", "http://pm1.narvii.com/6743/2ddb8e65cb1a332042f809ee60e22eb4a83a4eb5v2_00.jpg")
        message.channel.send({embeds: [embed]});

    }

});