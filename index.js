const fs = require('fs')

let str = ''

for (let i = 0; i < 100000000; i++) {
  str += (e => '0'.repeat(8 - e.toString().length) + e)(i) + '\n'

  if (str.length > 100000) {
    fs.appendFileSync('numbers.txt', str)
    str = ''
  }
}

fs.appendFileSync('numbers.txt', str)
