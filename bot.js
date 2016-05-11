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
	}
});