var Discordie = require("discordie");
var client = new Discordie();

var oggstream = require("./oggstream.js");

var Config = require("./config.json");
var token = Config.token;
client.connect({ token: token });

client.Dispatcher.on("GATEWAY_READY", e => {
	console.log("New Event: GATEWAY_READY");
	console.log("Hey, I'm " + client.User.username + ", your latest dancer. I can't wait to entertain you.");


	const guild = client.Guilds.getBy("name", "Milzton");
	if (!guild) return console.log("Guild not found");

	const general = guild.voiceChannels.find(c => c.name == "General");
	if (!general) return console.log("Channel not found");

	return general.join(false, false);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
	console.log("New Event: MESSAGE_CREATE");
	console.log(">(" + e.message.timestamp + ") " + e.message.author.username + ": " + e.message.content);

	var incoming_text = e.message.content;

	if (incoming_text.indexOf("!join ") == 0) {
		guild = e.message.channel.guild;
		const targetChannel = incoming_text.replace("!join ", "");

		var vchannel = guild.voiceChannels.find(channel => channel.name.toLowerCase().indexOf(targetChannel) >= 0);
		if (vchannel) vchannel.join().then(info => play(info));

		return;
	}
	// !killyourself
	// Go back in time and kill yourself
	if(incoming_text == "!killyourself") { // Go back in time
		sendMessage(e, "Going back in time, brb.");
		client.disconnect();
		return;
	}

	// !mark or !tank
	// Mark Nickerson, our hero
	if(incoming_text == "!mark" || incoming_text == "!tank") {
		e.message.channel.uploadFile("resources/img/tank.jpg"); // File
		return;
	}

	// !naptime
	// Billy takes a dirt nap
	if(incoming_text == "!naptime") {
		e.message.channel.uploadFile("resources/img/billynap.gif"); // File
		return;
	}

	// !same
	// Same!
	if(incoming_text == "!same") {
		e.message.channel.uploadFile("resources/img/same.gif"); // File
		return;
	}

	// !smite-random [tag] [tag] [tag] ...
	// Choose a random Smite god based on desired tags
	// Valid tags are pantheon, attack type (melee, ranged), power type (physical, magical), class (mage, hunter, warrior, guardian, assassin)
	if(incoming_text.startsWith("!smite")) {
		console.log("SMITE!");
		return;
	}

	// VGS
	if(incoming_text.substring(0,2) == "!v") {
		vgs = require("./vgs.json");
		v_command = incoming_text.substring(1).split(" ", 1);
		vgs_data = vgs[v_command];

		if(vgs_data !== undefined) {
			rando = Math.floor(Math.random()*vgs_data.length);

			if(vgs_data[rando]['text'] !== undefined) {
				sendMessage(e, vgs_data[rando]['text']);
			}
			if(vgs_data[rando]['audio'] !== undefined) {
				oggstream.play(false, client, vgs_data[rando]['audio']);
			}
			return;
		}		
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
});

client.Dispatcher.on("VOICE_CHANNEL_JOIN", e => {
	console.log("New Event: VOICE_CHANNEL_JOIN");
	console.log("Oh hi " + e.user.username);
});


client.Dispatcher.on("VOICE_CHANNEL_LEAVE", e => {
	console.log("New Event: VOICE_CHANNEL_LEAVE");
	console.log("See ya never, " + e.user.username);
});

function sendMessage(obj, text) {
	obj.message.channel.sendMessage(text);
}

String.prototype.startsWith = function(prefix) {
    return this.indexOf(prefix) === 0;
}