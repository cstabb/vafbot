var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
	token: 'MTc5NzUzMDk1OTg1NjI3MTM3.ChQPnQ.wbT9aedbH7Rj1izEvrpFmPTupes'
});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
	console.log('Hey, I\'m ' + client.User.username + ', your latest dancer. I can\'t wait to entertain you.');
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
	var incoming_text = e.message.content;
	if(incoming_text == '!vvvc') {
		e.message.channel.sendMessage('COOL!');
	// VA - Attack
	} else if(incoming_text == '!va1') {
			e.message.channel.sendMessage('Attack left lane!');	
	} else if(incoming_text == '!va2') {
			e.message.channel.sendMessage('Attack middle lane!');	
	} else if(incoming_text == '!va3') {
			e.message.channel.sendMessage('Attack right lane!');	
	} else if(incoming_text == '!vaa') {
			e.message.channel.sendMessage('Attack!');	
	} else if(incoming_text == '!vaf') {
			e.message.channel.sendMessage('Attack Fire Giant!');	
	} else if(incoming_text == '!vag') {
			e.message.channel.sendMessage('Attack the Gold Fury!');	
	} else if(incoming_text == '!vam') {
			e.message.channel.sendMessage('Attack the Titan!');
	} else if(incoming_text == '!vat1') {
			e.message.channel.sendMessage('Attack left tower!');	
	} else if(incoming_text == '!vat2') {
			e.message.channel.sendMessage('Attack middle tower!');	
	} else if(incoming_text == '!vat3') {
			e.message.channel.sendMessage('Attack right tower!');
	// VB - Enemy
	} else if(incoming_text == '!vb1') {
			e.message.channel.sendMessage('Enemies in left lane!');	
	} else if(incoming_text == '!vb2') {
			e.message.channel.sendMessage('Enemies in middle lane!');	
	} else if(incoming_text == '!vb3') {
			e.message.channel.sendMessage('Enemies in right lane!');	
	} else if(incoming_text == '!vba') {
			e.message.channel.sendMessage('Enemy ultimate incoming!');	
	} else if(incoming_text == '!vbb') {
			e.message.channel.sendMessage('Enemies have returned to base.');	
	} else if(incoming_text == '!vbd') {
			e.message.channel.sendMessage('Enemy ultimate down!');	
	} else if(incoming_text == '!vbe') {
			e.message.channel.sendMessage('Enemies behind us!');	
	} else if(incoming_text == '!vbf') {
			e.message.channel.sendMessage('Enemies at the Fire Giant!');	
	} else if(incoming_text == '!vbg') {
			e.message.channel.sendMessage('Enemies at the Gold Fury!');	
	} else if(incoming_text == '!vbm') {
			e.message.channel.sendMessage('Enemies at our Titan!');	
	} else if(incoming_text == '!vbs') {
			e.message.channel.sendMessage('Enemy spotted!');
	} else if(incoming_text == '!vbj1') {
			e.message.channel.sendMessage('Enemies in the Left Jungle!');	
	} else if(incoming_text == '!vbj2') {
			e.message.channel.sendMessage('Enemies in the right jungle!');	
	} else if(incoming_text == '!vbjj') {
			e.message.channel.sendMessage('Enemies in the jungle!');
	} else if(incoming_text == '!vc1') {
			e.message.channel.sendMessage('Be careful left!');	
	} else if(incoming_text == '!vc2') {
			e.message.channel.sendMessage('Be careful middle!');	
	} else if(incoming_text == '!vc3') {
			e.message.channel.sendMessage('Be careful right!');	
	} else if(incoming_text == '!vcb') {
			e.message.channel.sendMessage('Return to base!');	
	} else if(incoming_text == '!vcc') {
			e.message.channel.sendMessage('Be careful!');	
	} else if(incoming_text == '!vcj') {
			e.message.channel.sendMessage('Be careful in the jungle!');	
	// VD - Defend
	} else if(incoming_text == '!vd1') {
			e.message.channel.sendMessage('Defend left lane!');	
	} else if(incoming_text == '!vd2') {
			e.message.channel.sendMessage('Defend middle lane!');	
	} else if(incoming_text == '!vd3') {
			e.message.channel.sendMessage('Defend right lane!');	
	} else if(incoming_text == '!vdd') {
			e.message.channel.sendMessage('Defend!');	
	} else if(incoming_text == '!vdf') {
			e.message.channel.sendMessage('Defend the Fire Giant!');	
	} else if(incoming_text == '!vdg') {
			e.message.channel.sendMessage('Defend the Gold Fury!');	
	} else if(incoming_text == '!vdm') {
			e.message.channel.sendMessage('Defend the Titan!');	
	} else if(incoming_text == '!vdm') {
			e.message.channel.sendMessage('Defend the Portal!');
	// VE - Emote
	} else if(incoming_text == '!vea') {
			e.message.channel.sendMessage('Awesome!');	
	} else if(incoming_text == '!veg') {
			e.message.channel.sendMessage('I\'m the Greatest!');	
	} else if(incoming_text == '!ver') {
			e.message.channel.sendMessage('You Rock!');	
	} else if(incoming_text == '!vew') {
			e.message.channel.sendMessage('Woohoo!');	
	// VF - MIA
	} else if(incoming_text == '!vf1') {
			e.message.channel.sendMessage('Enemy missing left!');	
	} else if(incoming_text == '!vf2') {
			e.message.channel.sendMessage('Enemy missing middle!');	
	} else if(incoming_text == '!vf3') {
			e.message.channel.sendMessage('Enemy missing right!');	
	} else if(incoming_text == '!vff') {
			e.message.channel.sendMessage('Enemy missing!');	
	// VG - Gank
	} else if(incoming_text == '!vg1') {
			e.message.channel.sendMessage('Gank left lane!');	
	} else if(incoming_text == '!vg2') {
			e.message.channel.sendMessage('Gank middle lane!');	
	} else if(incoming_text == '!vg3') {
			e.message.channel.sendMessage('Gank right lane!');	
	} else if(incoming_text == '!vgg') {
			e.message.channel.sendMessage('Gank!');	
	// VH - Help
	} else if(incoming_text == '!vh1') {
			e.message.channel.sendMessage('Help left lane!');	
	} else if(incoming_text == '!vh2') {
			e.message.channel.sendMessage('Help middle lane!');	
	} else if(incoming_text == '!vh3') {
			e.message.channel.sendMessage('Help right lane!');	
	} else if(incoming_text == '!vhh') {
			e.message.channel.sendMessage('Help!');	
	} else if(incoming_text == '!vhs') {
			e.message.channel.sendMessage('Need Healing!');	
	// VI - Incoming
	} else if(incoming_text == '!vi1') {
			e.message.channel.sendMessage('Enemies incoming left!');	
	} else if(incoming_text == '!vi2') {
			e.message.channel.sendMessage('Enemies incoming middle!');	
	} else if(incoming_text == '!vi3') {
			e.message.channel.sendMessage('Enemies incoming right!');	
	} else if(incoming_text == '!vii') {
			e.message.channel.sendMessage('Enemies incoming!');	
	// VQ - Ward
	} else if(incoming_text == '!vq1') {
			e.message.channel.sendMessage('Ward Left!');	
	} else if(incoming_text == '!vq2') {
			e.message.channel.sendMessage('Ward middle!');	
	} else if(incoming_text == '!vq3') {
			e.message.channel.sendMessage('Ward Right!');	
	} else if(incoming_text == '!vqf') {
			e.message.channel.sendMessage('Ward Fire Giant!');	
	} else if(incoming_text == '!vqg') {
			e.message.channel.sendMessage('Ward Gold Fury!');	
	} else if(incoming_text == '!vqn') {
			e.message.channel.sendMessage('Need Wards!');	
	} else if(incoming_text == '!vqq') {
			e.message.channel.sendMessage('Ward Here!');	
	// VR - Retreat
	} else if(incoming_text == '!vr1') {
			e.message.channel.sendMessage('Retreat left lane!');	
	} else if(incoming_text == '!vr2') {
			e.message.channel.sendMessage('Retreat middle lane!');	
	} else if(incoming_text == '!vr3') {
			e.message.channel.sendMessage('Retreat right lane!');	
	} else if(incoming_text == '!vrj') {
			e.message.channel.sendMessage('Retreat from the Jungle!');	
	} else if(incoming_text == '!vrr') {
			e.message.channel.sendMessage('Retreat!');	
	} else if(incoming_text == '!vrs') {
			e.message.channel.sendMessage('Save yourself!');	
	// VS - Self
	} else if(incoming_text == '!vso') {
			e.message.channel.sendMessage('I\'m on it!');	
	} else if(incoming_text == '!vsr') {
			e.message.channel.sendMessage('Falling back!');	
	} else if(incoming_text == '!vss') {
			e.message.channel.sendMessage('I\'m building Stacks!');	
	// VSA - Attack
	} else if(incoming_text == '!vsa1') {
			e.message.channel.sendMessage('I\'ll Attack left lane!');	
	} else if(incoming_text == '!vsa2') {
			e.message.channel.sendMessage('I\'ll Attack middle lane!');	
	} else if(incoming_text == '!vsa3') {
			e.message.channel.sendMessage('I\'ll Attack right lane!');	
	} else if(incoming_text == '!vsaa') {
			e.message.channel.sendMessage('I\'ll Attack!');	
	} else if(incoming_text == '!vsaf') {
			e.message.channel.sendMessage('I\'ll Attack Fire Giant!');	
	} else if(incoming_text == '!vsag') {
			e.message.channel.sendMessage('I\'ll Attack the Gold Fury!');	
	} else if(incoming_text == '!vsam') {
			e.message.channel.sendMessage('I\'ll Attack the Titan!');	
	// VSB - Buff
	} else if(incoming_text == '!vsbb') {
			e.message.channel.sendMessage('I\'m going for jungle buff!');	
	} else if(incoming_text == '!vsbn') {
			e.message.channel.sendMessage('I need the jungle buff.');	
	} else if(incoming_text == '!vsbt') {
			e.message.channel.sendMessage('Take this jungle buff.');	
	// VSD - Defend
	} else if(incoming_text == '!vsd1') {
			e.message.channel.sendMessage('I\'ll defend left lane!');	
	} else if(incoming_text == '!vsd2') {
			e.message.channel.sendMessage('I\'ll defend middle lane!');	
	} else if(incoming_text == '!vsd3') {
			e.message.channel.sendMessage('I\'ll defend right lane!');	
	} else if(incoming_text == '!vsdd') {
			e.message.channel.sendMessage('I\'ll defend!');	
	} else if(incoming_text == '!vsdf') {
			e.message.channel.sendMessage('I\'ll defend the Fire Giant!');	
	} else if(incoming_text == '!vsdg') {
			e.message.channel.sendMessage('I\'ll defend the Gold Fury!');	
	} else if(incoming_text == '!vsdm') {
			e.message.channel.sendMessage('I\'ll defend the Titan!');	
	// VSG - Gank
	} else if(incoming_text == '!vsg1') {
			e.message.channel.sendMessage('I\'ll gank left lane!');	
	} else if(incoming_text == '!vsg2') {
			e.message.channel.sendMessage('I\'ll gank middle lane!');	
	} else if(incoming_text == '!vsg3') {
			e.message.channel.sendMessage('I\'ll gank right lane!');	
	} else if(incoming_text == '!vsgg') {
			e.message.channel.sendMessage('I\'ll gank!');	
	// VSQ - Ward
	} else if(incoming_text == '!vsq1') {
			e.message.channel.sendMessage('I will ward left!');	
	} else if(incoming_text == '!vsq2') {
			e.message.channel.sendMessage('I will ward middle!');	
	} else if(incoming_text == '!vsq3') {
			e.message.channel.sendMessage('I will ward right!');	
	} else if(incoming_text == '!vsqq') {
			e.message.channel.sendMessage('I will ward!');	
	// VST - Returned
	} else if(incoming_text == '!vst1') {
			e.message.channel.sendMessage('I\'m returning left lane!');	
	} else if(incoming_text == '!vst2') {
			e.message.channel.sendMessage('I\'m returning middle lane!');	
	} else if(incoming_text == '!vst3') {
			e.message.channel.sendMessage('I\'m returning right lane!');	
	} else if(incoming_text == '!vstb') {
			e.message.channel.sendMessage('I\'m returning to base!');	
	} else if(incoming_text == '!vstt') {
			e.message.channel.sendMessage('I have returned!');	
	// VT - Returned
	} else if(incoming_text == '!vt1') {
			e.message.channel.sendMessage('Enemies have returned left!');	
	} else if(incoming_text == '!vt2') {
			e.message.channel.sendMessage('Enemies have returned middle!');	
	} else if(incoming_text == '!vt3') {
			e.message.channel.sendMessage('Enemies have returned right!');	
	} else if(incoming_text == '!vtt') {
			e.message.channel.sendMessage('Enemies have returned!');	
	// VV - Other
	} else if(incoming_text == '!vva') {
			e.message.channel.sendMessage('Ok!');	
	} else if(incoming_text == '!vvb') {
			e.message.channel.sendMessage('Be right back!');	
	} else if(incoming_text == '!vvc') {
			e.message.channel.sendMessage('Completed!');	
	} else if(incoming_text == '!vvk') {
			e.message.channel.sendMessage('Stepping away for a moment.');	
	} else if(incoming_text == '!vvm') {
			e.message.channel.sendMessage('Out of mana!');	
	} else if(incoming_text == '!vvn') {
			e.message.channel.sendMessage('No!');	
	} else if(incoming_text == '!vvp') {
			e.message.channel.sendMessage('Please?');	
	} else if(incoming_text == '!vvs') {
			e.message.channel.sendMessage('Sorry!');	
	} else if(incoming_text == '!vvt') {
			e.message.channel.sendMessage('Thanks!');	
	} else if(incoming_text == '!vvw') {
			e.message.channel.sendMessage('Wait!');	
	} else if(incoming_text == '!vvx') {
			e.message.channel.sendMessage('Cancel that!');	
	} else if(incoming_text == '!vvy') {
			e.message.channel.sendMessage('Yes!');	
	// VVG - General
	} else if(incoming_text == '!vvgb') {
			e.message.channel.sendMessage('Bye!');	
	} else if(incoming_text == '!vvgf') {
			e.message.channel.sendMessage('Have fun!');	
	} else if(incoming_text == '!vvgg') {
			e.message.channel.sendMessage('Good game!');	
	} else if(incoming_text == '!vvgh') {
			e.message.channel.sendMessage('Hi!');	
	} else if(incoming_text == '!vvgl') {
			e.message.channel.sendMessage('Good luck!');	
	} else if(incoming_text == '!vvgn') {
			e.message.channel.sendMessage('Nice Job!');	
	} else if(incoming_text == '!vvgo') {
			e.message.channel.sendMessage('Oops!');	
	} else if(incoming_text == '!vvgq') {
			e.message.channel.sendMessage('Quiet!');	
	} else if(incoming_text == '!vvgr') {
			e.message.channel.sendMessage('No Problem!');	
	} else if(incoming_text == '!vvgs') {
			e.message.channel.sendMessage('Curses!');	
	} else if(incoming_text == '!vvgt') {
			e.message.channel.sendMessage('That\'s too bad!');	
	} else if(incoming_text == '!vvgw') {
			e.message.channel.sendMessage('You\'re welcome!');	
	// VVV - Position
	} else if(incoming_text == '!vvva') {
			e.message.channel.sendMessage('Set up an ambush here!');	
	} else if(incoming_text == '!vvvb') {
			e.message.channel.sendMessage('Behind us!');	
	} else if(incoming_text == '!vvvc') {
			e.message.channel.sendMessage('Chase the enemy!');	
	} else if(incoming_text == '!vvvd') {
			e.message.channel.sendMessage('Ultimate is down!');	
	} else if(incoming_text == '!vvve') {
			e.message.channel.sendMessage('On my way!');	
	} else if(incoming_text == '!vvvf') {
			e.message.channel.sendMessage('Follow me!');	
	} else if(incoming_text == '!vvvg') {
			e.message.channel.sendMessage('Group up!');	
	} else if(incoming_text == '!vvvj') {
			e.message.channel.sendMessage('Going into the jungle!');	
	} else if(incoming_text == '!vvvp') {
			e.message.channel.sendMessage('Split push!');	
	} else if(incoming_text == '!vvvr') {
			e.message.channel.sendMessage('Ultimate is ready!');	
	} else if(incoming_text == '!vvvs') {
			e.message.channel.sendMessage('Stay here!');	
	} else if(incoming_text == '!vvvt') {
			e.message.channel.sendMessage('It\'s a trap!');	
	} else if(incoming_text == '!vvvw') {
			e.message.channel.sendMessage('Place a Ward for teleport!');	
	} else if(incoming_text == '!vvvx') {
			e.message.channel.sendMessage('Spread Out!');
	// Snark inc
	} else if(incoming_text.substring(0,1) == '!') {
		var snark = [
		    'Don\'t tell me how to feel!',
		    'Don\'t tell me how to think!'
		];
		var rando_snark = Math.floor(Math.random()*snark.length);
		e.message.channel.sendMessage(snark[rando_snark]);
	}
});