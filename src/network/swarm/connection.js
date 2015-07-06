var tcp = require('net')
var multiaddr = require('multiaddr')

exports = module.exports = Connection

function Connection (peer) {
  var self = this

  self.socket

  self.dial = function (cb) {
    // 1. Dial to all the addresses, see what sticks

    self.socket = tcp.createConnection({}, cb)
  }

  self.newStream = function () {}
}
