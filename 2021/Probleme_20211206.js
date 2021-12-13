const input = require('./input/input_20211206')

const lanternfishTab = [0,0,0,0,0,0,0,0,0]

for (let i = 0; i < input.length; ++i ) {
    lanternfishTab[input[i]] += 1
}

// 1

let day = 0

let res1 = 0

while (day < 256) {
    const numberOfZeroFish = lanternfishTab[0]
    for (let i = 0; i < 8; ++i) {
        lanternfishTab[i] = lanternfishTab[i+1]
    }
    lanternfishTab[6] += numberOfZeroFish
    lanternfishTab[8] = numberOfZeroFish
    ++day
    if (day === 80) {
        res1 = lanternfishTab.reduce((acc,x) => acc + x, 0)
    }
} 

console.log(`1st question's answer : ${res1}`)

// 2

const res2 = lanternfishTab.reduce((acc,x) => acc + x, 0)

console.log(`2nd question's answer : ${res2}`)