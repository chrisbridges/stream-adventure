const concat = require('concat-stream')

// buffer text and reverse it

process.stdin.pipe(concat(body => {
  const reversedBody = body.toString().split('').reverse().join('')
  console.log(reversedBody)
}))

// Official solution

// Here's the reference solution:

// var concat = require('concat-stream');
  
// process.stdin.pipe(concat(function (src) {
//     var s = src.toString().split('').reverse().join('');
//     console.log(s);
// }))
