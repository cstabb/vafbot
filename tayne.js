var Discordie = require("discordie");
var Config = require("./config.json");
var Commands= require("./commands.json");
var log = require('better-log')
var oggstream = require("./oggstream.js");

const discord = new Discordie();
discord.connect({ token: Config.token });

function sendMessage(obj, text) {
	obj.message.channel.sendMessage(text);
}

String.prototype.startsWith = function(prefix) {
    return this.indexOf(prefix) === 0;
}


// This event is emitted when the Discord server connection is ready.
discord.Dispatcher.on("GATEWAY_READY", e => {
	log("New Event: GATEWAY_READY");
	log("Hey, I'm " + discord.User.username + ", your latest dancer. I can't wait to entertain you.");
});

// This event is emitted when a user inputs something to a text channel.
discord.Dispatcher.on("MESSAGE_CREATE", e => {
	// Do logging
	log("New Event: MESSAGE_CREATE");
	log(">(" + e.message.timestamp + ") " + e.message.author.username + ": " + e.message.content);

	var incoming_text = e.message.content;

	if(incoming_text.startsWith("!")) {


		if(Commands.hasOwnProperty(incoming_text)) {
			for (var i = 0, l = Commands[incoming_text].instructions.length; i < l; i++) {
			    var obj = Commands[incoming_text].instructions[i];
			    if(obj.override === null) {
			    	var s = 'e.message.channel.' + obj.method + '("' + obj.output + '")';
					eval(s);
			    } else {
					eval(obj.override);
			    }
			}
		} else if(incoming_text.substring(0,2) == "!v") 
{			vgs = require("./vgs.json");
			v_command = incoming_text.substring(1).split(" ", 1);
			vgs_data = vgs[v_command];

			if(vgs_data !== undefined) {
				rando = Math.floor(Math.random()*vgs_data.length);

				if(vgs_data[rando]['text'] !== undefined) {
					sendMessage(e, vgs_data[rando]['text']);
				}
				if(vgs_data[rando]['audio'] !== undefined) {
					oggstream.play(false, discord, vgs_data[rando]['audio']);
				}
				return;
			}		
		} else if (incoming_text.indexOf("!join ") == 0) {
	        guild = e.message.channel.guild;
	        const targetChannel = incoming_text.replace("!join ", "");

	        var vchannel = guild.voiceChannels.find(channel => channel.name.toLowerCase().indexOf(targetChannel) >= 0);
	        if (vchannel) vchannel.join().then(info => play(info));

	        return;
	    } else {
			var snark = [
			"Good morning, Paul. What will your first sequence of the day be?",
			"I can't wait to entertayne you.",
		    "Can I see a hat wobble?",
		    "Can I see a Flarhgunnstow?",
		    "Can you kick up the 4D3D3D3?",
		    "add sequence: OYSTER",
		    "Give me a print-out of Oyster smiling.",
		    "Nude. Tayne.",
		    "We have important work to do."
			];
			var rando_snark = Math.floor(Math.random()*snark.length);
			sendMessage(e, snark[rando_snark]);
		}
	}
});

// This event is emitted when a user joins a voice channel.
discord.Dispatcher.on("VOICE_CHANNEL_JOIN", e => {
	log("New Event: VOICE_CHANNEL_JOIN");
	log("Oh hi " + e.user.username);
});

// This event is emitted when a user leaves a voice channel.
discord.Dispatcher.on("VOICE_CHANNEL_LEAVE", e => {
	log("New Event: VOICE_CHANNEL_LEAVE");
	log("See ya never, " + e.user.username);
});



