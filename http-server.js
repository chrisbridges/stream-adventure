const http = require('http')
const through = require('through2')

const port = process.argv[2]
const stream = through(write, end)

function write (buffer, encoding, next) {
  buffer = buffer.toString().toUpperCase()
  this.push(buffer)
  next()
}

function end (done) {
  done()
}

http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(stream).pipe(res)
  } else {
    res.end()
  }
}).listen(port)

// Here's the reference solution:

// var http = require('http');
// var through = require('through2');

// var server = http.createServer(function (req, res) {
//     if (req.method === 'POST') {
//         req.pipe(through(function (buf, _, next) {
//             this.push(buf.toString().toUpperCase());
//             next();
//         })).pipe(res);
//     }
//     else res.end('send me a POST\n');
// });
// server.listen(parseInt(process.argv[2]));
