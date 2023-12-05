const fs = require('fs');
const filename = "input/test.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n').filter(x => x !== '')

const seeds = input.shift().split(': ')[1].split(' ').map(x => parseInt(x))

const seedsPath = seeds.map(x => [x])

let newMap = false
for (const line of input) {
    if (line !== '' || line.charAt(line.length - 1) === ':') {
        newMap = true
    } else {
        if (newMap)
    }
}