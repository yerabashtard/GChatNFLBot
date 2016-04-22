//nflbot89@gmail.com
//Nimda123!

var hangoutsBot 	= require("hangouts-bot");
var pirate		 	= require("./pirate");

var bot 			= new hangoutsBot("nflbot89@gmail.com", "Nimda123!");

const justinId = "1hk7alenghct50vgp7rcv8hypv@public.talk.google.com/lcsw_hangouts_39A4C027";
const helloRegex = /^(hi[$\s\r]|hello|hey)/igm;

bot.on('online', function() {
    console.log('online');
    console.log(pirate('Hello my friends!'));
});

bot.on('message', function(from, message) {
    console.log(from + ">> " + message);
    if (message.match(helloRegex)) {
    	var matcher = Math.floor((Math.random() * 21) + 1)
    	bot.sendMessage(from, "matched string")
	    if (matcher < 8) {
	    	bot.sendMessage(from, "Hiya!")
	    } else if (matcher >= 8 && matcher < 15) {
	    	bot.sendMessage(from, "Hello back!")	
	    } else if (matcher >= 15) {
	    	bot.sendMessage(from, "Heyo!")
	    }
    }
});

