const fs = require('fs');
const filename = "input/input_20231206.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const reg = /\d+/g

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
 */

const getInterval = (time,distance) => {
    const a = -1
    const b = time
    const c = -distance
    const deltaSqrt = Math.sqrt((b ** 2) - (4*a*c))
    
    let x1 = (-1 * b + deltaSqrt) / (2*a)
    x1 = Math.ceil(x1) === x1 ? x1 + 1 : Math.ceil(x1) // arrondi supérieur car valeur minimal
    
    let x2 = (-1 * b - deltaSqrt) / (2*a) 
    x2 = Math.floor(x2) === x2 ? x2 - 1 : Math.floor(x2) // arrondi inférieur car valeur max

    return x2 - x1 + 1
}

// Problème 1

const total = times.reduce((acc,x,idx) => acc * getInterval(x,distances[idx]), 1)

console.log(`Solution Problème 1 : ${total}`)

// Problème 2

const total1 = getInterval(parseInt(times.join('')),parseInt(distances.join('')))

console.log(`Solution Problème 2 : ${total1}`)