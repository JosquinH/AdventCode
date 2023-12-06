const times = [42,89,91,89]
const distances = [308,1170,1291,1467]

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


