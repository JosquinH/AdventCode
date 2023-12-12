const fs = require('fs');
const filename = "input/input_20231212.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const cache = {}

const countNumberOfConf = (springs, indexDamaged) => {
    const key = `${springs};${indexDamaged.join(',')}`
    if (cache[key] === undefined){
        if (springs.length === 0) {
            if (indexDamaged.length === 0) {
                cache[key] = 1
                return 1
            } else {
                cache[key] = 0
                return 0
            }
        }
    
        if (indexDamaged.length === 0) {
            if (springs.search(/#/) === -1) {
                cache[key] = 1
                return 1
            } else {
                cache[key] = 0
                return 0
            }
        }
    
        let total = 0
    
        if (springs.charAt(0) === '.' || springs.charAt(0) === '?') {
            total += countNumberOfConf(springs.slice(1),indexDamaged)
        }
    
        if (springs.charAt(0) === '#' || springs.charAt(0) === '?') {
            if (indexDamaged[0] <= springs.length && springs.slice(0,indexDamaged[0]).search(/\./) === -1 && (indexDamaged[0] === springs.length || springs.charAt(indexDamaged[0]) !== '#')) {
                total += countNumberOfConf(springs.slice(indexDamaged[0] + 1), indexDamaged.slice(1))
            }
        }

        cache[key] = total
        return total
    } else {
        return cache[key]
    }
}

// Problème 1

let total = 0
for (const line of input) {
    let [springs,indexDamaged] = line.split(' ')
    indexDamaged = indexDamaged.split(',').map(x => parseInt(x))
    total += countNumberOfConf(springs,indexDamaged)
}

console.log(`Solution Problème 1 : ${total}`)

// Problème 2

let total1 = 0

for (const line of input) {
    let [springs,indexDamaged] = line.split(' ')
    springs = springs + '?' + springs + '?' + springs + '?' + springs + '?' + springs
    indexDamaged = indexDamaged + ',' + indexDamaged + ',' + indexDamaged + ',' + indexDamaged + ',' + indexDamaged
    indexDamaged = indexDamaged.split(',').map(x => parseInt(x))
    total1 += countNumberOfConf(springs,indexDamaged)
}

console.log(`Solution Problème 2 : ${total1}`)