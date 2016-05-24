var ogg = require("ogg");
var vorbis = require('vorbis');

exports.playRandom = (event, client, rando) => playRandom(event, client, rando);
exports.play = (info, client, filename) => play(info, client, filename);

function playRandom(event, client, rando) {
  guild = event.message.channel.guild;
  if (!client.VoiceConnections.length) {
    return event.message.reply("Not connected to any channel");
  }
  var info = client.VoiceConnections.getForGuild(guild);
  var rando_key = Math.floor(Math.random()*rando.length);
  play(info, client, "/resources/snd/VGS/"+rando[rando_key])
}

function play(info, client, filename) {
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