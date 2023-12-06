const fs = require('fs');
const filename = "input/input_20231206.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const reg = new RegExp('[0-9]+','g')

// Récupération times

const times = []
const timesIt = input[0].matchAll(reg)
let t = timesIt.next()
while (!t.done) {
    times.push(parseInt(t.value))
    t = timesIt.next()
}

// Récupération distances
const distances = []
const distancesIt = input[1].matchAll(reg)
let d = distancesIt.next()
while (!d.done) {
    distances.push(parseInt(d.value))
    d = distancesIt.next()
}

// Problème 1

let total = 1

for (let i = 0; i < times.length; ++i) {
    const time = times[i]
    const distance = distances[i]
    let curTotal = 0
    for (let j = 1; j < time; ++j) {
        if (j + Math.floor(distance/j) < time) {
            curTotal += 1
        }
    }
    total *= curTotal
}

console.log(`Solution Problème 1 : ${total}`)

// Problème 2

const time1 = parseInt(times.join(''))
const distance1 = parseInt(distances.join(''))

let total1 = 0
for (let j = 1; j < time1; ++j) {
    if (j + Math.floor(distance1/j) < time1) {
        total1 += 1
    }
}

console.log(`Solution Problème 2 : ${total1}`)


