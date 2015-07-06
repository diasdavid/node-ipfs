var tcp = require('net')
var Select = require('multistream-select').Select
var spdy = require('spdy-transport');

exports = module.exports

var connections = {}
var openStreams = {}
var handles = {}
var peer // self

// set the listener
exports.listen = function (peerSelf) {
  peer = peerSelf
  tcp.createServer(function (socket) {
    ms.addHandler('/spdy/3.1.0', function (ds) {
      var spdyServer = spdy.connection.create(ds, {
        protocol: 'spdy',
        isServer: true
      }) 

      spdyServer.on('stream', function (stream) {
        // TODO(daviddias) Register all the handles 
      })

      // TODO(daviddias) pop a pushstream and ask this peer to identify itself, so I can add this connection to my pool

    })
    // 1. MultiStream Select
    // 2. Handle spdy
    // 3. For each spdy stream initiated, add MultiStream Select and register all of the handles

  }).listen(process.env.IPFS_PORT || 4001)

}

// interface

exports.openStream = function (peer, protocol, cb) {
  // if Connection already open, open a new stream, otherwise, create a new Connection
  // then negoatite the protocol and return the opened stream
}

exports.registerHandle = function (protocol, cb) {
  if (handles[protocol]) {
    return cb(new Error('handle for this protocol already exists'))
  }
  handles[protocol] = cb
}
