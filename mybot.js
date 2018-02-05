
//declaration des consts et importation des fichiers json
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix=config.prefix;
const url = require("./url.json");
const fs= require ("fs");
const txt=require("./txt.json");

//const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
var helper = fs.readFileSync("./helper.txt","utf8");
client.on("ready", () => {
  console.log("I am ready to proc violent!");
});
var dispatcher;


/*
mention msg
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "batman")) {
    message.channel.sendMessage("<@180073496414519296>" +" On a besoin de toi");

  }
});*/

client.on("message", (message) => {
//-------Command-------
if(message.content.startsWith(prefix)){
  var sub = message.content.substring(prefix.length);
  var command = sub.split(" ")[0];
  if(command === "violant"){
    violent(message);
  }
  if(txt.tts[command]){
    message.channel.send(txt.tts[command],{tts:true});
  }else if (txt.classic[command]) {
    message.channel.send(txt.classic[command]);
  }
}

//---------Song commands
  if(message.content.startsWith(prefix+"karaoke")){
    message.channel.send(url.list[Math.floor(Math.random()*url.list.length)])
  }
  if(message.content.startsWith(prefix+"join")){
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            message.reply('I have successfully connected to the channel!');
          })
          .catch(console.log);
      } else {
        message.reply('You need to join a voice channel first!');
      }
  }
  if(message.content.startsWith(prefix+"leave")){
    var vc = message.guild.members.find('id',client.user.id).voiceChannel;
    if (vc) {
      vc.leave();
      message.reply("Voice channel successfully left. ＼(´ヘ`)");
    } else {
      message.reply("I'm currently not in any voice channel. ╮(´ヘ`)╭");
    }
  }
  if(message.content.startsWith(prefix+"play")){
      var lien = message.content.split(" ")[1];
      if(lien){
        if(lien.startsWith("https://www.youtube.com/watch?v=")){
          if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
              .then(connection => { // Connection is an instance of VoiceConnection
                message.reply("I have successfully connected to the channel! \(>▽<)/");
                message.reply("Now playing the track. (〜￣△￣)〜");
                const stream = ytdl(lien, { filter : 'audioonly' });
                if(dispatcher){
                  dispatcher.end();
                }
                dispatcher = connection.playStream(stream, streamOptions);
              })
              .catch(console.log);
          } else {
            message.reply("You need to join a voice channel first! (・∧‐)ゞ");
          }
        }
      }
    }
    if(message.content.startsWith(prefix+"pause")){
      var vcPresent = message.member.voiceChannel.members.find('id',client.user.id);
      if (vcPresent) {
        if(dispatcher){
          dispatcher.pause();
          message.reply("Track paused.");
        } else {
          message.reply("Not playing any track. ╮(´ヘ`)╭");
        }
      }
    }
    if(message.content.startsWith(prefix+"resume")){
      var vcPresent = message.member.voiceChannel.members.find('id',client.user.id);
      if (vcPresent) {
        if(dispatcher){
          dispatcher.resume();
          message.reply("Track resumed.");
        } else {
          message.reply("Not playing any track. ╮(´ヘ`)╭");
        }
      }
    }
  if(message.content.startsWith(prefix+'HELP')){
    message.channel.send(helper);
  }

//---------WTF commands
  if(message.content.startsWith()){
    var sub = message.content.substring(0);
    var command = sub.split(" ")[0];
      if(txt.wtf[command]){
        if (message.member.voiceChannel) {
          message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
            //connection.playFile(soundList[a]);
              connection.playFile(txt.wtf[command]);
            })
            .catch(console.log);

      }
  }}

  //if(message.content.startsWith(prefix + "GvG") && message.author.id ===
/*  if(message.content.startsWith("a")){
    message.channel.send("b").then(message => message.edit("c")).then(message => message.edit("d")).then(message => message.edit("e")).then(message => message.edit("f"));
  }*/
  if(message.content.startsWith(prefix+"add") && message.content.substring(5).length > 1){
      var lien = message.content.split(" ")[1];
      if(lien.startsWith("https://www.youtube.com/watch?v=") && diflink(lien)){
        url.list.push(lien)
        fs.writeFile("./url.json", JSON.stringify(url), function(err) {
        if(err) {
          console.log(err);
        }
        else {
          console.log("link successfully added");
        }
      });
      message.channel.send("link successfully added");
    }else{
      message.channel.send("link is invalid or already exist");
    }
  }









});




function diflink(str){
  var cpt=0;
  for(var i = 0; i<url.list.length;i++){
    if(url.list[i]===str){
      return false;
    }else{
      cpt=cpt+1;
    }
  }
  if (cpt==url.list.length){
    return true;
  }
}
function violent(message){
  var lul=Math.floor(Math.random() * Math.floor(41));
  if(lul<10){
    return message.channel.send("Captain Orion on duty");
  }else if (lul<20) {
    return message.channel.send("Orewa Theomars SAMA !!!!!!!");
  }else if (lul<30) {
    return message.channel.send("TUTURU");
  }else if(lul<40) {
  return message.channel.send("Keep calm and JUST FUCKING SUCK DICK WITH YOUR FUCKING VIOLANT PROC !!!! Im calm dud CHUT UP");
  }else {
   return message.channel.send("Just calm your selfe and breathe");
 }

}


















client.login(config.token);
