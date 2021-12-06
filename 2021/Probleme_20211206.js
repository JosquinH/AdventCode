const input = require('./input/input_20211206')

const lanternfishTab = [0,0,0,0,0,0,0,0,0]

for (let i = 0; i < input.length; ++i ) {
    lanternfishTab[input[i]] += 1
}

// 1

let day = 0

while (day < 80) {
    const numberOfZeroFish = lanternfishTab[0]
    lanternfishTab[0] = lanternfishTab[1]
    lanternfishTab[1] = lanternfishTab[2]
    lanternfishTab[2] = lanternfishTab[3]
    lanternfishTab[3] = lanternfishTab[4]
    lanternfishTab[4] = lanternfishTab[5]
    lanternfishTab[5] = lanternfishTab[6]
    lanternfishTab[6] = lanternfishTab[7]
    lanternfishTab[7] = lanternfishTab[8]

    lanternfishTab[6] += numberOfZeroFish
    lanternfishTab[8] = numberOfZeroFish
    ++day
}

const res1 = lanternfishTab.reduce((acc,x) => acc + x, 0)

console.log(`1st question's answer : ${res1}`)

// 2

while (day < 256) {
    const numberOfZeroFish = lanternfishTab[0]
    lanternfishTab[0] = lanternfishTab[1]
    lanternfishTab[1] = lanternfishTab[2]
    lanternfishTab[2] = lanternfishTab[3]
    lanternfishTab[3] = lanternfishTab[4]
    lanternfishTab[4] = lanternfishTab[5]
    lanternfishTab[5] = lanternfishTab[6]
    lanternfishTab[6] = lanternfishTab[7]
    lanternfishTab[7] = lanternfishTab[8]

    lanternfishTab[6] += numberOfZeroFish
    lanternfishTab[8] = numberOfZeroFish
    ++day
}

const res2 = lanternfishTab.reduce((acc,x) => acc + x, 0)

console.log(`2nd question's answer : ${res2}`)