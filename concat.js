const concat = require('concat-stream')

// buffer text and reverse it

process.stdin.pipe(concat(body => {
  const reversedBody = body.toString().split('').reverse().join('')
  console.log(reversedBody)
}))
