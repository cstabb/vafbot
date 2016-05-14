 module.exports = function(incoming_text) {
 	module = {};
 	
	// VA - Attack
	if(incoming_text == '!va1') {
			module.message = 'Attack left lane!';	
	} else if(incoming_text == '!va2') {
			module.message = 'Attack middle lane!';	
	} else if(incoming_text == '!va3') {
			module.message = 'Attack right lane!';	
	} else if(incoming_text == '!vaa') {
			module.message = 'Attack!';	
	} else if(incoming_text == '!vaf') {
			module.message = 'Attack Fire Giant!';	
	} else if(incoming_text == '!vag') {
			module.message = 'Attack the Gold Fury!';	
	} else if(incoming_text == '!vam') {
			module.message = 'Attack the Titan!';
	} else if(incoming_text == '!vat1') {
			module.message = 'Attack left tower!';	
	} else if(incoming_text == '!vat2') {
			module.message = 'Attack middle tower!';	
	} else if(incoming_text == '!vat3') {
			module.message = 'Attack right tower!';
	// VB - Enemy
	} else if(incoming_text == '!vb1') {
			module.message = 'Enemies in left lane!';	
	} else if(incoming_text == '!vb2') {
			module.message = 'Enemies in middle lane!';	
	} else if(incoming_text == '!vb3') {
			module.message = 'Enemies in right lane!';	
	} else if(incoming_text == '!vba') {
			module.message = 'Enemy ultimate incoming!';	
	} else if(incoming_text == '!vbb') {
			module.message = 'Enemies have module.message =ed to base.';	
	} else if(incoming_text == '!vbd') {
			module.message = 'Enemy ultimate down!';	
	} else if(incoming_text == '!vbe') {
			module.message = 'Enemies behind us!';	
	} else if(incoming_text == '!vbf') {
			module.message = 'Enemies at the Fire Giant!';	
	} else if(incoming_text == '!vbg') {
			module.message = 'Enemies at the Gold Fury!';	
	} else if(incoming_text == '!vbm') {
			module.message = 'Enemies at our Titan!';	
	} else if(incoming_text == '!vbs') {
			module.message = 'Enemy spotted!';
	} else if(incoming_text == '!vbj1') {
			module.message = 'Enemies in the Left Jungle!';	
	} else if(incoming_text == '!vbj2') {
			module.message = 'Enemies in the right jungle!';	
	} else if(incoming_text == '!vbjj') {
			module.message = 'Enemies in the jungle!';
	} else if(incoming_text == '!vc1') {
			module.message = 'Be careful left!';	
	} else if(incoming_text == '!vc2') {
			module.message = 'Be careful middle!';	
	} else if(incoming_text == '!vc3') {
			module.message = 'Be careful right!';	
	} else if(incoming_text == '!vcb') {
			module.message = 'module.message = to base!';	
	} else if(incoming_text == '!vcc') {
			module.message = 'Be careful!';	
	} else if(incoming_text == '!vcj') {
			module.message = 'Be careful in the jungle!';	
	// VD - Defend
	} else if(incoming_text == '!vd1') {
			module.message = 'Defend left lane!';	
	} else if(incoming_text == '!vd2') {
			module.message = 'Defend middle lane!';	
	} else if(incoming_text == '!vd3') {
			module.message = 'Defend right lane!';	
	} else if(incoming_text == '!vdd') {
			module.message = 'Defend!';	
	} else if(incoming_text == '!vdf') {
			module.message = 'Defend the Fire Giant!';	
	} else if(incoming_text == '!vdg') {
			module.message = 'Defend the Gold Fury!';	
	} else if(incoming_text == '!vdm') {
			module.message = 'Defend the Titan!';	
	} else if(incoming_text == '!vdm') {
			module.message = 'Defend the Portal!';
	// VE - Emote
	} else if(incoming_text == '!vea') {
			module.message = 'Awesome!';	
	} else if(incoming_text == '!veg') {
			module.message = 'I\'m the Greatest!';	
	} else if(incoming_text == '!ver') {
			module.message = 'You Rock!';	
	} else if(incoming_text == '!vew') {
			module.message = 'Woohoo!';	
	// VF - MIA
	} else if(incoming_text == '!vf1') {
			module.message = 'Enemy missing left!';	
	} else if(incoming_text == '!vf2') {
			module.message = 'Enemy missing middle!';	
	} else if(incoming_text == '!vf3') {
			module.message = 'Enemy missing right!';	
	} else if(incoming_text == '!vff') {
			module.message = 'Enemy missing!';	
	// VG - Gank
	} else if(incoming_text == '!vg1') {
			module.message = 'Gank left lane!';	
	} else if(incoming_text == '!vg2') {
			module.message = 'Gank middle lane!';	
	} else if(incoming_text == '!vg3') {
			module.message = 'Gank right lane!';	
	} else if(incoming_text == '!vgg') {
			module.message = 'Gank!';	
	// VH - Help
	} else if(incoming_text == '!vh1') {
			module.message = 'Help left lane!';	
	} else if(incoming_text == '!vh2') {
			module.message = 'Help middle lane!';	
	} else if(incoming_text == '!vh3') {
			module.message = 'Help right lane!';	
	} else if(incoming_text == '!vhh') {
			module.message = 'Help!';	
	} else if(incoming_text == '!vhs') {
			module.message = 'Need Healing!';	
	// VI - Incoming
	} else if(incoming_text == '!vi1') {
			module.message = 'Enemies incoming left!';	
	} else if(incoming_text == '!vi2') {
			module.message = 'Enemies incoming middle!';	
	} else if(incoming_text == '!vi3') {
			module.message = 'Enemies incoming right!';	
	} else if(incoming_text == '!vii') {
			module.message = 'Enemies incoming!';	
	// VQ - Ward
	} else if(incoming_text == '!vq1') {
			module.message = 'Ward Left!';	
	} else if(incoming_text == '!vq2') {
			module.message = 'Ward middle!';	
	} else if(incoming_text == '!vq3') {
			module.message = 'Ward Right!';	
	} else if(incoming_text == '!vqf') {
			module.message = 'Ward Fire Giant!';	
	} else if(incoming_text == '!vqg') {
			module.message = 'Ward Gold Fury!';	
	} else if(incoming_text == '!vqn') {
			module.message = 'Need Wards!';	
	} else if(incoming_text == '!vqq') {
			module.message = 'Ward Here!';	
	// VR - Retreat
	} else if(incoming_text == '!vr1') {
			module.message = 'Retreat left lane!';	
	} else if(incoming_text == '!vr2') {
			module.message = 'Retreat middle lane!';	
	} else if(incoming_text == '!vr3') {
			module.message = 'Retreat right lane!';	
	} else if(incoming_text == '!vrj') {
			module.message = 'Retreat from the Jungle!';	
	} else if(incoming_text == '!vrr') {
			module.message = 'Retreat!';	
	} else if(incoming_text == '!vrs') {
			module.message = 'Save yourself!';	
	// VS - Self
	} else if(incoming_text == '!vso') {
			module.message = 'I\'m on it!';	
	} else if(incoming_text == '!vsr') {
			module.message = 'Falling back!';	
	} else if(incoming_text == '!vss') {
			module.message = 'I\'m building Stacks!';	
	// VSA - Attack
	} else if(incoming_text == '!vsa1') {
			module.message = 'I\'ll Attack left lane!';	
	} else if(incoming_text == '!vsa2') {
			module.message = 'I\'ll Attack middle lane!';	
	} else if(incoming_text == '!vsa3') {
			module.message = 'I\'ll Attack right lane!';	
	} else if(incoming_text == '!vsaa') {
			module.message = 'I\'ll Attack!';	
	} else if(incoming_text == '!vsaf') {
			module.message = 'I\'ll Attack Fire Giant!';	
	} else if(incoming_text == '!vsag') {
			module.message = 'I\'ll Attack the Gold Fury!';	
	} else if(incoming_text == '!vsam') {
			module.message = 'I\'ll Attack the Titan!';	
	// VSB - Buff
	} else if(incoming_text == '!vsbb') {
			module.message = 'I\'m going for jungle buff!';	
	} else if(incoming_text == '!vsbn') {
			module.message = 'I need the jungle buff.';	
	} else if(incoming_text == '!vsbt') {
			module.message = 'Take this jungle buff.';	
	// VSD - Defend
	} else if(incoming_text == '!vsd1') {
			module.message = 'I\'ll defend left lane!';	
	} else if(incoming_text == '!vsd2') {
			module.message = 'I\'ll defend middle lane!';	
	} else if(incoming_text == '!vsd3') {
			module.message = 'I\'ll defend right lane!';	
	} else if(incoming_text == '!vsdd') {
			module.message = 'I\'ll defend!';	
	} else if(incoming_text == '!vsdf') {
			module.message = 'I\'ll defend the Fire Giant!';	
	} else if(incoming_text == '!vsdg') {
			module.message = 'I\'ll defend the Gold Fury!';	
	} else if(incoming_text == '!vsdm') {
			module.message = 'I\'ll defend the Titan!';	
	// VSG - Gank
	} else if(incoming_text == '!vsg1') {
			module.message = 'I\'ll gank left lane!';	
	} else if(incoming_text == '!vsg2') {
			module.message = 'I\'ll gank middle lane!';	
	} else if(incoming_text == '!vsg3') {
			module.message = 'I\'ll gank right lane!';	
	} else if(incoming_text == '!vsgg') {
			module.message = 'I\'ll gank!';	
	// VSQ - Ward
	} else if(incoming_text == '!vsq1') {
			module.message = 'I will ward left!';	
	} else if(incoming_text == '!vsq2') {
			module.message = 'I will ward middle!';	
	} else if(incoming_text == '!vsq3') {
			module.message = 'I will ward right!';	
	} else if(incoming_text == '!vsqq') {
			module.message = 'I will ward!';	
	// VST - module.message =ed
	} else if(incoming_text == '!vst1') {
			module.message = 'I\'m module.message =ing left lane!';	
	} else if(incoming_text == '!vst2') {
			module.message = 'I\'m module.message =ing middle lane!';	
	} else if(incoming_text == '!vst3') {
			module.message = 'I\'m module.message =ing right lane!';	
	} else if(incoming_text == '!vstb') {
			module.message = 'I\'m module.message =ing to base!';	
	} else if(incoming_text == '!vstt') {
			module.message = 'I have module.message =ed!';	
	// VT - module.message =ed
	} else if(incoming_text == '!vt1') {
			module.message = 'Enemies have module.message =ed left!';	
	} else if(incoming_text == '!vt2') {
			module.message = 'Enemies have module.message =ed middle!';	
	} else if(incoming_text == '!vt3') {
			module.message = 'Enemies have module.message =ed right!';	
	} else if(incoming_text == '!vtt') {
			module.message = 'Enemies have module.message =ed!';	
	// VV - Other
	} else if(incoming_text == '!vva') {
			module.message = 'Ok!';	
	} else if(incoming_text == '!vvb') {
			module.message = 'Be right back!';	
	} else if(incoming_text == '!vvc') {
			module.message = 'Completed!';	
	} else if(incoming_text == '!vvk') {
			module.message = 'Stepping away for a moment.';	
	} else if(incoming_text == '!vvm') {
			module.message = 'Out of mana!';	
	} else if(incoming_text == '!vvn') {
			module.message = 'No!';	
	} else if(incoming_text == '!vvp') {
			module.message = 'Please?';	
	} else if(incoming_text == '!vvs') {
			module.message = 'Sorry!';	
	} else if(incoming_text == '!vvt') {
			module.message = 'Thanks!';	
	} else if(incoming_text == '!vvw') {
			module.message = 'Wait!';	
	} else if(incoming_text == '!vvx') {
			module.message = 'Cancel that!';	
	} else if(incoming_text == '!vvy') {
			module.message = 'Yes!';	
	// VVG - General
	} else if(incoming_text == '!vvgb') {
			module.message = 'Bye!';	
	} else if(incoming_text == '!vvgf') {
			module.message = 'Have fun!';	
	} else if(incoming_text == '!vvgg') {
			module.message = 'Good game!';	
	} else if(incoming_text == '!vvgh') {
			module.message = 'Hi!';	
	} else if(incoming_text == '!vvgl') {
			module.message = 'Good luck!';	
	} else if(incoming_text == '!vvgn') {
			module.message = 'Nice Job!';	
	} else if(incoming_text == '!vvgo') {
			module.message = 'Oops!';	
	} else if(incoming_text == '!vvgq') {
			module.message = 'Quiet!';	
	} else if(incoming_text == '!vvgr') {
			module.message = 'No Problem!';	
	} else if(incoming_text == '!vvgs') {
			module.message = 'Curses!';	
	} else if(incoming_text == '!vvgt') {
			module.message = 'That\'s too bad!';	
	} else if(incoming_text == '!vvgw') {
			module.message = 'You\'re welcome!';	
	// VVV - Position
	} else if(incoming_text == '!vvva') {
			module.message = 'Set up an ambush here!';	
	} else if(incoming_text == '!vvvb') {
			module.message = 'Behind us!';	
	} else if(incoming_text == '!vvvc') {
			module.message = 'Chase the enemy!';	
	} else if(incoming_text == '!vvvd') {
			module.message = 'Ultimate is down!';	
	} else if(incoming_text == '!vvve') {
			module.message = 'On my way!';	
	} else if(incoming_text == '!vvvf') {
			module.message = 'Follow me!';	
	} else if(incoming_text == '!vvvg') {
			module.message = 'Group up!';	
	} else if(incoming_text == '!vvvj') {
			module.message = 'Going into the jungle!';	
	} else if(incoming_text == '!vvvp') {
			module.message = 'Split push!';	
	} else if(incoming_text == '!vvvr') {
			module.message = 'Ultimate is ready!';	
	} else if(incoming_text == '!vvvs') {
			module.message = 'Stay here!';	
	} else if(incoming_text == '!vvvt') {
			module.message = 'It\'s a trap!';	
	} else if(incoming_text == '!vvvw') {
			module.message = 'Place a Ward for teleport!';	
	} else if(incoming_text == '!vvvx') {
			module.message = 'Spread Out!';
	//VE - Self			
	} else if(incoming_text == '!vej') {
		var hun_batz = [
			'It is not good to point at a rainbow, or your finger will rot!',
			'It is not good to hit a dog, for he will no longer help you in case you need to pass the flames of a fire.',
			'It is not good to remove the first layer of the tortillas, or pimples will appear on your face.'
		];
		var rando_batz = Math.floor(Math.random()*hun_batz.length);
		module.message = hun_batz[rando_batz];
	} else if(incoming_text == '!vet') {
		var hun_batz = [
			'It is not wise to put a basket on your head or you will be eaten by a dog.',
			'One finger cannot remove lice from the head.',
			'Do not throw away your hair, fingernails or teeth because if you don\'t find them upon your death, you will regret it.'
		];
		var rando_batz = Math.floor(Math.random()*hun_batz.length);
		module.message = hun_batz[rando_batz];
	} else {
		module.message = false;
	}
	return module;
}