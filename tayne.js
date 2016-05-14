var Discordie = require("discordie");
var client = new Discordie();

var Config = require("./config.json");
var token = Config.token;
client.connect({ token: token });

client.Dispatcher.on("GATEWAY_READY", e => {
	console.log("New Event: GATEWAY_READY");
	console.log("Hey, I'm " + client.User.username + ", your latest dancer. I can't wait to entertain you.");
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
	console.log("New Event: MESSAGE_CREATE");
	console.log(">(" + e.message.timestamp + ") " + e.message.author.username + ": " + e.message.content);

	var incoming_text = e.message.content;

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
	if(incoming_text == "!naptime")  {
		e.message.channel.uploadFile("resources/img/billynap.gif"); // File
		return;
	}
	if(incoming_text == "!same")  {
		e.message.channel.uploadFile("resources/img/same.gif"); // File
		return;
	}
	if(incoming_text == "!mark" || incoming_text == "!tank") { // Mark Nickerson, our hero
		e.message.channel.uploadFile("resources/img/tank.jpg"); // File
		return;
	}
	if(incoming_text == "!killyourself") { // Go back in time
		sendMessage(e, "Going back in time, brb.");
		client.disconnect();
		return;
	}
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