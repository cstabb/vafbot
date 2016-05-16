var Discordie = require("discordie");
var ogg = require("ogg");
var vorbis = require('vorbis');
var client = new Discordie();

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
		if(incoming_text == "!vej") {
			var batz = [
				"Hun_Batz_Joke_1c.ogg",
				"Hun_Batz_Joke_2a.ogg",
				"Hun_Batz_Joke_3a.ogg"
			];
			return playRandom(e, batz);
		}
		if(incoming_text == "!vet") {
			var batz = [
				"Hun_Batz_Taunt_1b.ogg",
				"Hun_Batz_Taunt_2a.ogg",
				"Hun_Batz_Taunt_3a.ogg",
				"Hun_Batz_Taunt_4b.ogg",
				"Hun_Batz_Taunt_5b.ogg"
			];
			return playRandom(e, batz);
		}
		if(incoming_text == "!vel") {
			var batz = [
				"Hun_Batz_Laugh_1.ogg",
				"Hun_Batz_Laugh_2.ogg",
				"Hun_Batz_Laugh_3.ogg"
			];
			return playRandom(e, batz);
		}

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

function playRandom(event, rando) {
	guild = event.message.channel.guild;
	if (!client.VoiceConnections.length) {
		return event.message.reply("Not connected to any channel");
	}
	var info = client.VoiceConnections.getForGuild(guild);
	var rando_key = Math.floor(Math.random()*rando.length);
	play(info, "/resources/snd/VGS/"+rando[rando_key])
}

function play(info, filename) {
	if (!client.VoiceConnections.length) {
		return console.log("Voice not connected");
	}

	if (!info) info = client.VoiceConnections[0];

	var file = __dirname + filename;

	var fs = require('fs');

	var decoder = new ogg.Decoder();

	decoder.on('stream', function (stream) {

		var vd = new vorbis.Decoder();

		// the "format" event contains the raw PCM format 
		vd.on('format', function (format) {
			var options = {
				frameDuration: 60,
				sampleRate: format.sampleRate,
				channels: format.channels,
				float: true
			};
			var encoderStream = info.voiceConnection.getEncoderStream(options);
			if (!encoderStream) {
				return console.log(
				"Unable to get encoder stream, connection is disposed"
				);
			}
			vd.pipe(encoderStream);
		});

		stream.pipe(vd);
	});

	// pipe the ogg file to the decoder
	fs.createReadStream(file).pipe(decoder);
}