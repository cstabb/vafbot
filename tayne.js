var log = require('better-log')

var Discordie = require("discordie");
var discord = new Discordie();

var Config = require("./config.json");
discord.connect({ token: Config.discord.token });

var tayneCommands = require("./commands.json");

// This event is emitted when the Discord server connection is ready.
discord.Dispatcher.on("GATEWAY_READY", e => {
	log("New Event: GATEWAY_READY");
	log("Hey, I'm " + discord.User.username + ", your latest dancer. I can't wait to entertain you.");
});

// This event is emitted when a user inputs something to a text channel.
discord.Dispatcher.on("MESSAGE_CREATE", e => {
	log("New Event: MESSAGE_CREATE");
	log(">(" + e.message.timestamp + ") " + e.message.author.username + ": " + e.message.content);

	var incoming_text = e.message.content;

	if(incoming_text.substring(0,1) == "!") {
		if(tayneCommands.hasOwnProperty(incoming_text)) {
			for (var i = 0, l = tayneCommands[incoming_text].instructions.length; i < l; i++) {
			    var obj = tayneCommands[incoming_text].instructions[i];
			    if(obj.override === null) {
			    	var s = 'e.message.channel.' + obj.method + '("' + obj.output + '")';
					eval(s);
			    } else {
					eval(obj.override);
			    }
			}
		}
	}

/*
	// !smite-random [tag] [tag] [tag] ...
	// Choose a random Smite god based on desired tags
	// Valid tags are pantheon, attack type (melee, ranged), power type (physical, magical), class (mage, hunter, warrior, guardian, assassin)
	if(incoming_text.startsWith("!smite")) {
		_log("SMITE!");
		return;
	}
	// VGS
	if(incoming_text.substring(0,2) == "!v") {
		vgs = require("./vgs.json");
		vgs_arr = eval("vgs." + incoming_text.substring(1).split(" ", 1) + "['text']");
		if(vgs_arr.length > 1) {
			var rando = Math.floor(Math.random()*vgs_arr.length);
			vgs_final = vgs_arr[rando];
		} else {
			vgs_final = vgs_arr[0];
		}
		sendMessage(e, vgs_final);
		return;
	}

	// Tayne doesn't understand
	if(incoming_text.substring(0,1) == "!") { // Snark inc
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
	*/
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

function sendMessage(obj, text) {
	obj.message.channel.sendMessage(text);
}

String.prototype.startsWith = function(prefix) {
    return this.indexOf(prefix) === 0;
}