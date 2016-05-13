var Discordie = require("discordie");
var client = new Discordie();

var Config = require("./config.json");
var token = Config.token;
client.connect({ token: token });

client.Dispatcher.on("GATEWAY_READY", e => {
	console.log('Hey, I\'m ' + client.User.username + ', your latest dancer. I can\'t wait to entertain you.');
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
	var incoming_text = e.message.content;
	var found = false;
	if(incoming_text == '!vvvc') {
		e.message.channel.sendMessage('COOL!');
		found = true;
	} else if(incoming_text == '!naptime')  {
		e.message.channel.uploadFile("img/billynap.gif"); // File
		found = true;
	// Mark Nickerson, our hero
	} else if(incoming_text == '!mark' || incoming_text == '!tank') {
		e.message.channel.uploadFile("img/tank.jpg"); // File
		found = true;
	}
	
	// Do VGS
	vgs = require('./vgs.js');
	vgsMessage = vgs(incoming_text);
	if(vgsMessage.message != false) {
		e.message.channel.sendMessage(vgsMessage.message);
		found = true;
	}
	// Go back in time
	if(incoming_text == '!killyourself') {
		e.message.channel.sendMessage('Going back in time, brb.');
		client.disconnect();
		found = true;
	}
	// Snark inc
	if(incoming_text.substring(0,1) == '!' && !found) {
		var snark = [
			'Good morning, Paul. What will your first sequence of the day be?',
			'I can\'t wait to entertayne you.',
		    'Can I see a hat wobble?',
		    'Can I see a Flarhgunnstow?',
		    'Can you kick up the 4D3D3D3?',
		    'add sequence: OYSTER',
		    'Give me a print-out of Oyster smiling.',
		    'Nude. Tayne.',
		    'We have important work to do.'
		];
		var rando_snark = Math.floor(Math.random()*snark.length);
		e.message.channel.sendMessage(snark[rando_snark]);
	}
});

