const input = require('./input/input_20211207')

// 1

const minFuel = Math.min(...input)
const maxFuel = Math.max(...input)

let leastFuel = Number.MAX_SAFE_INTEGER

for (let i = 0; i <= maxFuel; ++i ) {
    const curLeast = input.reduce((acc,x) => acc + Math.abs(x - i), 0)
    if (curLeast < leastFuel) leastFuel = curLeast
}

console.log(`1st question's answer : ${leastFuel}`)

// 2

leastFuel = Number.MAX_SAFE_INTEGER

for (let i = 0; i <= maxFuel; ++i ) {
    const curLeast = input.reduce((acc,x) => acc + (Math.abs(x - i) *(Math.abs(x - i) +1)) / 2, 0) // Formule 1 + 2 + 3 + .... + n = (n * (n + 1)) / 2
    if (curLeast < leastFuel) leastFuel = curLeast
}


console.log(`2nd question's answer : ${leastFuel}`)


