const through = require('through2')
const trumpet = require('trumpet')

const tr = trumpet()

const trumpetStream = tr.select('.loud').createStream()
trumpetStream.pipe(through(function (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
})).pipe(trumpetStream)

process.stdin.pipe(tr).pipe(process.stdout)

// Here's the reference solution:

// var trumpet = require('trumpet');
// var through = require('through2');
// var tr = trumpet();

// var loud = tr.select('.loud').createStream();
// loud.pipe(through(function (buf, _, next) {
//     this.push(buf.toString().toUpperCase());
//     next();
// })).pipe(loud);

// process.stdin.pipe(tr).pipe(process.stdout);
