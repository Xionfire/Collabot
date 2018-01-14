
//declaration des consts et importation des fichiers json
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix=config.prefix;
const url = require("./url.json");
const fs= require ("fs");
const Simulateur= require("./Simulateur.json");

client.on("ready", () => {
  console.log("I am ready to proc violent!");
});

var rune=0;
let star="";

/*
mention msg
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "batman")) {
    message.channel.sendMessage("<@180073496414519296>" +" On a besoin de toi");

  }
});*/

client.on("message", (message) => {
//classical msg
  if (message.content.startsWith(prefix + "batman")) {
    message.channel.sendMessage("<@180073496414519296>" +" On a besoin de toi"+" https://media.giphy.com/media/l0NwGpoOVLTAyUJSo/giphy.gif");

  }
  //msg with option
  if(message.content.startsWith(prefix + "def")){
    message.channel.send("Ta gueule" , {tts:true});
  }
  if(message.content.startsWith(prefix + "sonnet")){
    message.channel.send("Sonnet you make me feel in life" , {tts:true});
  }
  if(message.content.startsWith(prefix + "grav")){
    message.channel.sendMessage("L'homme trop bien sapé" );
  }
  if(message.content.startsWith(prefix + "orion")){
    message.channel.sendMessage("Le pokemon boule magic quand il joue on peut entendre zub ce masturber " );
  }
  if(message.content.startsWith(prefix + "sarean")){
    message.channel.sendMessage("VAS FARME DES RUNES ENCULE <3" );
  }
  if(message.content.startsWith(prefix + "shiru")){
    message.channel.send("GvG DE MERDE !!!" , {tts:true});
  }
  if(message.content.startsWith(prefix + "elgrim")){
    message.channel.sendMessage("A plus micro" , {tts:true});
    }
  if(message.content.startsWith(prefix + "shark")){
      message.channel.send("coin coin" , {tts:true});
    }
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
        message.member.voiceChannel.leave()
          .then(connection => { // Connection is an instance of VoiceConnection
            message.reply('I have successfully disconnected to the channel!');
          })
          .catch(console.log);
  }
  if(message.content.startsWith("AH")){
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            //connection.playFile(soundList[a]);
            connection.playFile("./soundbox/ah.mp3");
          })
          .catch(console.log);
          setTimeout(function(){
            message.member.voiceChannel.leave();
          }, 3000);
      }
  }
  if(message.content.startsWith("YAMETE")){
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            //connection.playFile(soundList[a]);
            connection.playFile("./soundbox/yamete.mp3");
          })
          .catch(console.log);
          setTimeout(function(){
            message.member.voiceChannel.leave();
          }, 11000);
      }
  }









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
  if (message.content.startsWith(prefix + "rungeant")) {
    var geant=Math.floor(Math.random() * Math.floor(100));
    run(geant);
    var etoile=Math.floor(Math.random() * Math.floor(100));
    stars(etoile);
    var pos=Math.floor(Math.random()*Math.floor(6));
    pos=pos+1;
    var grade=Math.floor(Math.random() * Math.floor(100));
    grad(grade);
    message.channel.sendMessage(Simulateur.tab[rune]+" (" +(pos)+")" +" " + star);
    message.channel.sendMessage(rare);
    var stt = "";
    if(pos%2!=0){
    stt = flats(pos);
    message.channel.sendMessage("**" + stt + "**");
  }
  else{
    stt = paire(pos);
    message.channel.sendMessage("**" + stt + "**");
  }
  sub(rare,message,pos,stt);
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
function run(geant){
  if (geant<21){
    rune=1;
  }
  else if (geant<42){
    rune=2;
  }
  else if(geant<63){
    rune=3;
  }
  else if (geant<84){
    rune=4;
  }
  else{
    rune=5;
  }
  return rune;
}
function stars(etoile){
  if(etoile<85){
    star="5☆";
  }else{
    star="6☆";
  }
  return star;
}
function flats (pos){
  if(pos==1){
    return Simulateur.flat[2];
  }
  if(pos==3) {
    return Simulateur.flat[1];
  }
  if(pos==5){
    return Simulateur.flat[0];
  }
  }
function paire(pos){
 if(pos===2){
   return Simulateur.deux[Math.floor(Math.random()*Math.floor(Simulateur.deux.length))];
 }
  else if(pos===4){
   return Simulateur.quatre[Math.floor(Math.random()*Math.floor(Simulateur.quatre.length))];
}else {
  return Simulateur.six[Math.floor(Math.random()*Math.floor(Simulateur.six.length))];
}}
function grad(grade){
  if(grade<70){
    rare=Simulateur.rarity[0];
  }
  else if (grade<95) {
    rare=Simulateur.rarity[1];

  }else {
    rare=Simulateur.rarity[2];
  }
}

function sub(rare,message,pos,stt){
var tps=0;
    var mdr = [];
    var a = 0;
    mdr.push(stt)
    if(rare==="Rare"){
      a = 2;
    }else if(rare==="Heroique"){
      a = 3;
    }else{
      a = 4;
    }
    for(var i=0;i<a;i++){
      tps=Math.floor(Math.random() * Math.floor(Simulateur.stat.length));
      while(mdr.indexOf(Simulateur.stat[tps])!==-1){
        tps=Math.floor(Math.random() * Math.floor(Simulateur.stat.length));
      }
      mdr.push(Simulateur.stat[tps]);
      console.log(mdr[0],mdr[1],mdr[2]);
      message.channel.sendMessage(Simulateur.stat[tps]);
    }
  }



















client.login(config.token);
