var tcp = require('net')
var lpm = require('length-prefixed-message')

var client = tcp.connect({port: 8765}, connected)

function connected () { // 'connect' listener
   
  console.log('connected to server!')
 
  lpm.read(client, function(msgBuffer) {
    console.log('1- ', msgBuffer.toString());

    lpm.write(client, "/cats");

    lpm.read(client, function(msgBuffer) {
        console.log('2- ', msgBuffer.toString());
    });

  });

}

client.on('end', function () {
  console.log('disconnected from server')
})
