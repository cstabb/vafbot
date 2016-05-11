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
	if(e.message.content == '!vvvc') {
		e.message.channel.sendMessage('COOL!');
	// VA - Attack
	} else if(e.message.content == '!va1') {
			e.message.channel.sendMessage('Attack left lane!');	
	} else if(e.message.content == '!va2') {
			e.message.channel.sendMessage('Attack middle lane!');	
	} else if(e.message.content == '!va3') {
			e.message.channel.sendMessage('Attack right lane!');	
	} else if(e.message.content == '!vaa') {
			e.message.channel.sendMessage('Attack!');	
	} else if(e.message.content == '!vaf') {
			e.message.channel.sendMessage('Attack Fire Giant!');	
	} else if(e.message.content == '!vag') {
			e.message.channel.sendMessage('Attack the Gold Fury!');	
	} else if(e.message.content == '!vam') {
			e.message.channel.sendMessage('Attack the Titan!');
	} else if(e.message.content == '!vat1') {
			e.message.channel.sendMessage('Attack left tower!');	
	} else if(e.message.content == '!vat2') {
			e.message.channel.sendMessage('Attack middle tower!');	
	} else if(e.message.content == '!vat3') {
			e.message.channel.sendMessage('Attack right tower!');
	// VB - Enemy
	} else if(e.message.content == '!vb1') {
			e.message.channel.sendMessage('Enemies in left lane!');	
	} else if(e.message.content == '!vb2') {
			e.message.channel.sendMessage('Enemies in middle lane!');	
	} else if(e.message.content == '!vb3') {
			e.message.channel.sendMessage('Enemies in right lane!');	
	} else if(e.message.content == '!vba') {
			e.message.channel.sendMessage('Enemy ultimate incoming!');	
	} else if(e.message.content == '!vbb') {
			e.message.channel.sendMessage('Enemies have returned to base.');	
	} else if(e.message.content == '!vbd') {
			e.message.channel.sendMessage('Enemy ultimate down!');	
	} else if(e.message.content == '!vbe') {
			e.message.channel.sendMessage('Enemies behind us!');	
	} else if(e.message.content == '!vbf') {
			e.message.channel.sendMessage('Enemies at the Fire Giant!');	
	} else if(e.message.content == '!vbg') {
			e.message.channel.sendMessage('Enemies at the Gold Fury!');	
	} else if(e.message.content == '!vbm') {
			e.message.channel.sendMessage('Enemies at our Titan!');	
	} else if(e.message.content == '!vbs') {
			e.message.channel.sendMessage('Enemy spotted!');
	} else if(e.message.content == '!vbj1') {
			e.message.channel.sendMessage('Enemies in the Left Jungle!');	
	} else if(e.message.content == '!vbj2') {
			e.message.channel.sendMessage('Enemies in the right jungle!');	
	} else if(e.message.content == '!vbjj') {
			e.message.channel.sendMessage('Enemies in the jungle!');
	} else if(e.message.content == '!vc1') {
			e.message.channel.sendMessage('Be careful left!');	
	} else if(e.message.content == '!vc2') {
			e.message.channel.sendMessage('Be careful middle!');	
	} else if(e.message.content == '!vc3') {
			e.message.channel.sendMessage('Be careful right!');	
	} else if(e.message.content == '!vcb') {
			e.message.channel.sendMessage('Return to base!');	
	} else if(e.message.content == '!vcc') {
			e.message.channel.sendMessage('Be careful!');	
	} else if(e.message.content == '!vcj') {
			e.message.channel.sendMessage('Be careful in the jungle!');	
	// VD - Defend
	} else if(e.message.content == '!vd1') {
			e.message.channel.sendMessage('Defend left lane!');	
	} else if(e.message.content == '!vd2') {
			e.message.channel.sendMessage('Defend middle lane!');	
	} else if(e.message.content == '!vd3') {
			e.message.channel.sendMessage('Defend right lane!');	
	} else if(e.message.content == '!vdd') {
			e.message.channel.sendMessage('Defend!');	
	} else if(e.message.content == '!vdf') {
			e.message.channel.sendMessage('Defend the Fire Giant!');	
	} else if(e.message.content == '!vdg') {
			e.message.channel.sendMessage('Defend the Gold Fury!');	
	} else if(e.message.content == '!vdm') {
			e.message.channel.sendMessage('Defend the Titan!');	
	} else if(e.message.content == '!vdm') {
			e.message.channel.sendMessage('Defend the Portal!');
	// VE - Emote
	} else if(e.message.content == '!vea') {
			e.message.channel.sendMessage('Awesome!');	
	} else if(e.message.content == '!veg') {
			e.message.channel.sendMessage('I\'m the Greatest!');	
	} else if(e.message.content == '!ver') {
			e.message.channel.sendMessage('You Rock!');	
	} else if(e.message.content == '!vew') {
			e.message.channel.sendMessage('Woohoo!');	
	// VF - MIA
	} else if(e.message.content == '!vf1') {
			e.message.channel.sendMessage('Enemy missing left!');	
	} else if(e.message.content == '!vf2') {
			e.message.channel.sendMessage('Enemy missing middle!');	
	} else if(e.message.content == '!vf3') {
			e.message.channel.sendMessage('Enemy missing right!');	
	} else if(e.message.content == '!vff') {
			e.message.channel.sendMessage('Enemy missing!');	
	// VG - Gank
	} else if(e.message.content == '!vg1') {
			e.message.channel.sendMessage('Gank left lane!');	
	} else if(e.message.content == '!vg2') {
			e.message.channel.sendMessage('Gank middle lane!');	
	} else if(e.message.content == '!vg3') {
			e.message.channel.sendMessage('Gank right lane!');	
	} else if(e.message.content == '!vgg') {
			e.message.channel.sendMessage('Gank!');	
	// VH - Help
	} else if(e.message.content == '!vh1') {
			e.message.channel.sendMessage('Help left lane!');	
	} else if(e.message.content == '!vh2') {
			e.message.channel.sendMessage('Help middle lane!');	
	} else if(e.message.content == '!vh3') {
			e.message.channel.sendMessage('Help right lane!');	
	} else if(e.message.content == '!vhh') {
			e.message.channel.sendMessage('Help!');	
	} else if(e.message.content == '!vhs') {
			e.message.channel.sendMessage('Need Healing!');	
	// VI - Incoming
	} else if(e.message.content == '!vi1') {
			e.message.channel.sendMessage('Enemies incoming left!');	
	} else if(e.message.content == '!vi2') {
			e.message.channel.sendMessage('Enemies incoming middle!');	
	} else if(e.message.content == '!vi3') {
			e.message.channel.sendMessage('Enemies incoming right!');	
	} else if(e.message.content == '!vii') {
			e.message.channel.sendMessage('Enemies incoming!');	
	// VQ - Ward
	} else if(e.message.content == '!vq1') {
			e.message.channel.sendMessage('Ward Left!');	
	} else if(e.message.content == '!vq2') {
			e.message.channel.sendMessage('Ward middle!');	
	} else if(e.message.content == '!vq3') {
			e.message.channel.sendMessage('Ward Right!');	
	} else if(e.message.content == '!vqf') {
			e.message.channel.sendMessage('Ward Fire Giant!');	
	} else if(e.message.content == '!vqg') {
			e.message.channel.sendMessage('Ward Gold Fury!');	
	} else if(e.message.content == '!vqn') {
			e.message.channel.sendMessage('Need Wards!');	
	} else if(e.message.content == '!vqq') {
			e.message.channel.sendMessage('Ward Here!');	
	// VR - Retreat
	} else if(e.message.content == '!vr1') {
			e.message.channel.sendMessage('Retreat left lane!');	
	} else if(e.message.content == '!vr2') {
			e.message.channel.sendMessage('Retreat middle lane!');	
	} else if(e.message.content == '!vr3') {
			e.message.channel.sendMessage('Retreat right lane!');	
	} else if(e.message.content == '!vrj') {
			e.message.channel.sendMessage('Retreat from the Jungle!');	
	} else if(e.message.content == '!vrr') {
			e.message.channel.sendMessage('Retreat!');	
	} else if(e.message.content == '!vrs') {
			e.message.channel.sendMessage('Save yourself!');	
	// VS - Self
	} else if(e.message.content == '!vso') {
			e.message.channel.sendMessage('I\'m on it!');	
	} else if(e.message.content == '!vsr') {
			e.message.channel.sendMessage('Falling back!');	
	} else if(e.message.content == '!vss') {
			e.message.channel.sendMessage('I\'m building Stacks!');	
	// VSA - Attack
	} else if(e.message.content == '!vsa1') {
			e.message.channel.sendMessage('I\'ll Attack left lane!');	
	} else if(e.message.content == '!vsa2') {
			e.message.channel.sendMessage('I\'ll Attack middle lane!');	
	} else if(e.message.content == '!vsa3') {
			e.message.channel.sendMessage('I\'ll Attack right lane!');	
	} else if(e.message.content == '!vsaa') {
			e.message.channel.sendMessage('I\'ll Attack!');	
	} else if(e.message.content == '!vsaf') {
			e.message.channel.sendMessage('I\'ll Attack Fire Giant!');	
	} else if(e.message.content == '!vsag') {
			e.message.channel.sendMessage('I\'ll Attack the Gold Fury!');	
	} else if(e.message.content == '!vsam') {
			e.message.channel.sendMessage('I\'ll Attack the Titan!');	
	// VSB - Buff
	} else if(e.message.content == '!vsbb') {
			e.message.channel.sendMessage('I\'m going for jungle buff!');	
	} else if(e.message.content == '!vsbn') {
			e.message.channel.sendMessage('I need the jungle buff.');	
	} else if(e.message.content == '!vsbt') {
			e.message.channel.sendMessage('Take this jungle buff.');	
	// VSD - Defend
	} else if(e.message.content == '!vsd1') {
			e.message.channel.sendMessage('I\'ll defend left lane!');	
	} else if(e.message.content == '!vsd2') {
			e.message.channel.sendMessage('I\'ll defend middle lane!');	
	} else if(e.message.content == '!vsd3') {
			e.message.channel.sendMessage('I\'ll defend right lane!');	
	} else if(e.message.content == '!vsdd') {
			e.message.channel.sendMessage('I\'ll defend!');	
	} else if(e.message.content == '!vsdf') {
			e.message.channel.sendMessage('I\'ll defend the Fire Giant!');	
	} else if(e.message.content == '!vsdg') {
			e.message.channel.sendMessage('I\'ll defend the Gold Fury!');	
	} else if(e.message.content == '!vsdm') {
			e.message.channel.sendMessage('I\'ll defend the Titan!');	
	// VSG - Gank
	} else if(e.message.content == '!vsg1') {
			e.message.channel.sendMessage('I\'ll gank left lane!');	
	} else if(e.message.content == '!vsg2') {
			e.message.channel.sendMessage('I\'ll gank middle lane!');	
	} else if(e.message.content == '!vsg3') {
			e.message.channel.sendMessage('I\'ll gank right lane!');	
	} else if(e.message.content == '!vsgg') {
			e.message.channel.sendMessage('I\'ll gank!');	
	// VSQ - Ward
	} else if(e.message.content == '!vsq1') {
			e.message.channel.sendMessage('I will ward left!');	
	} else if(e.message.content == '!vsq2') {
			e.message.channel.sendMessage('I will ward middle!');	
	} else if(e.message.content == '!vsq3') {
			e.message.channel.sendMessage('I will ward right!');	
	} else if(e.message.content == '!vsqq') {
			e.message.channel.sendMessage('I will ward!');	
	// VST - Returned
	} else if(e.message.content == '!vst1') {
			e.message.channel.sendMessage('I\'m returning left lane!');	
	} else if(e.message.content == '!vst2') {
			e.message.channel.sendMessage('I\'m returning middle lane!');	
	} else if(e.message.content == '!vst3') {
			e.message.channel.sendMessage('I\'m returning right lane!');	
	} else if(e.message.content == '!vstb') {
			e.message.channel.sendMessage('I\'m returning to base!');	
	} else if(e.message.content == '!vstt') {
			e.message.channel.sendMessage('I have returned!');	
	// VT - Returned
	} else if(e.message.content == '!vt1') {
			e.message.channel.sendMessage('Enemies have returned left!');	
	} else if(e.message.content == '!vt2') {
			e.message.channel.sendMessage('Enemies have returned middle!');	
	} else if(e.message.content == '!vt3') {
			e.message.channel.sendMessage('Enemies have returned right!');	
	} else if(e.message.content == '!vtt') {
			e.message.channel.sendMessage('Enemies have returned!');	
	// VV - Other
	} else if(e.message.content == '!vva') {
			e.message.channel.sendMessage('Ok!');	
	} else if(e.message.content == '!vvb') {
			e.message.channel.sendMessage('Be right back!');	
	} else if(e.message.content == '!vvc') {
			e.message.channel.sendMessage('Completed!');	
	} else if(e.message.content == '!vvk') {
			e.message.channel.sendMessage('Stepping away for a moment.');	
	} else if(e.message.content == '!vvm') {
			e.message.channel.sendMessage('Out of mana!');	
	} else if(e.message.content == '!vvn') {
			e.message.channel.sendMessage('No!');	
	} else if(e.message.content == '!vvp') {
			e.message.channel.sendMessage('Please?');	
	} else if(e.message.content == '!vvs') {
			e.message.channel.sendMessage('Sorry!');	
	} else if(e.message.content == '!vvt') {
			e.message.channel.sendMessage('Thanks!');	
	} else if(e.message.content == '!vvw') {
			e.message.channel.sendMessage('Wait!');	
	} else if(e.message.content == '!vvx') {
			e.message.channel.sendMessage('Cancel that!');	
	} else if(e.message.content == '!vvy') {
			e.message.channel.sendMessage('Yes!');	
	// VVG - General
	} else if(e.message.content == '!vvgb') {
			e.message.channel.sendMessage('Bye!');	
	} else if(e.message.content == '!vvgf') {
			e.message.channel.sendMessage('Have fun!');	
	} else if(e.message.content == '!vvgg') {
			e.message.channel.sendMessage('Good game!');	
	} else if(e.message.content == '!vvgh') {
			e.message.channel.sendMessage('Hi!');	
	} else if(e.message.content == '!vvgl') {
			e.message.channel.sendMessage('Good luck!');	
	} else if(e.message.content == '!vvgn') {
			e.message.channel.sendMessage('Nice Job!');	
	} else if(e.message.content == '!vvgo') {
			e.message.channel.sendMessage('Oops!');	
	} else if(e.message.content == '!vvgq') {
			e.message.channel.sendMessage('Quiet!');	
	} else if(e.message.content == '!vvgr') {
			e.message.channel.sendMessage('No Problem!');	
	} else if(e.message.content == '!vvgs') {
			e.message.channel.sendMessage('Curses!');	
	} else if(e.message.content == '!vvgt') {
			e.message.channel.sendMessage('That\'s too bad!');	
	} else if(e.message.content == '!vvgw') {
			e.message.channel.sendMessage('You\'re welcome!');	
	// VVV - Position
	} else if(e.message.content == '!vvva') {
			e.message.channel.sendMessage('Set up an ambush here!');	
	} else if(e.message.content == '!vvvb') {
			e.message.channel.sendMessage('Behind us!');	
	} else if(e.message.content == '!vvvc') {
			e.message.channel.sendMessage('Chase the enemy!');	
	} else if(e.message.content == '!vvvd') {
			e.message.channel.sendMessage('Ultimate is down!');	
	} else if(e.message.content == '!vvve') {
			e.message.channel.sendMessage('On my way!');	
	} else if(e.message.content == '!vvvf') {
			e.message.channel.sendMessage('Follow me!');	
	} else if(e.message.content == '!vvvg') {
			e.message.channel.sendMessage('Group up!');	
	} else if(e.message.content == '!vvvj') {
			e.message.channel.sendMessage('Going into the jungle!');	
	} else if(e.message.content == '!vvvp') {
			e.message.channel.sendMessage('Split push!');	
	} else if(e.message.content == '!vvvr') {
			e.message.channel.sendMessage('Ultimate is ready!');	
	} else if(e.message.content == '!vvvs') {
			e.message.channel.sendMessage('Stay here!');	
	} else if(e.message.content == '!vvvt') {
			e.message.channel.sendMessage('It\'s a trap!');	
	} else if(e.message.content == '!vvvw') {
			e.message.channel.sendMessage('Place a Ward for teleport!');	
	} else if(e.message.content == '!vvvx') {
			e.message.channel.sendMessage('Spread Out!');
	// Snark inc
	} else if(e.message.content.substring(0,1) == '!') {
		var snark = [
		    'Don\'t tell me how to feel!',
		    'Don\'t tell me how to think!'
		];
		var rando_snark = Math.floor(Math.random()*snark.length);
		e.message.channel.sendMessage(snark[rando_snark]);
	}
});