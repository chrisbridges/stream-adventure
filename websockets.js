const socket = require('websocket-stream')

const stream = socket('ws://localhost:8099')

stream.end('hello\n')

// this follows official solution
