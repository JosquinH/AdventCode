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

/**
 * Le problème à résoudre est (time - x) * x > distance où x est le temps où l'on appuie sur le bouton
 * Cela se rammène à -(x**2) + time * x - distance > 0
 * 
 */

const getInterval = (time,distance) => {
    const delta = (time ** 2) - (4*distance)
    const x1 = Math.ceil(((-1 * time) + Math.sqrt(delta)) / -2)
    const x2 = Math.floor(((-1 * time) - Math.sqrt(delta)) / -2)
    let res = x2 - x1 + 1

    if ((time - x1) * x1 === distance) {
        --res
    }

    if ((time - x2) * x2 === distance) {
        --res
    }

    return res
}

// Problème 1

let total = 1

for (let i = 0; i < times.length; ++i) {
    total *= getInterval(times[i],distances[i])
}

console.log(`Solution Problème 1 : ${total}`)

// Problème 2

const total1 = getInterval(parseInt(times.join('')),parseInt(distances.join('')))

console.log(`Solution Problème 2 : ${total1}`)