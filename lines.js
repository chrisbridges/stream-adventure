const through = require('through2')
const split = require('split')

let counter = 1

process.stdin.pipe(split()).pipe(through(function (line, _, next) {
  const lineString = line.toString()
  if (counter % 2 === 1) {
    this.push(lineString.toLowerCase() + '\n')
  } else {
    this.push(lineString.toUpperCase() + '\n')
  }
  counter++
  next()
})).pipe(process.stdout)

// Official way (very good)

// var through = require('through2');
// var split = require('split');
// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout)
