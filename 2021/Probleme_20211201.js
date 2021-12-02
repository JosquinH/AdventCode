const input = require('./Input_20211201')

// 1

let nbIncrease = 0

for (let i = 1; i < input.length; ++i) {
    if (input[i] - input[i-1] > 0) {
        ++ nbIncrease
    }
}

console.log(`1st question response : ${nbIncrease}`)

// 2

let nbIncrease2 = 0

for (let i = 1; i < input.length - 2; ++i) {
    const baseSum = input[i] + input[i+1]

    if ((baseSum + input[i + 2]) - (baseSum + input[i - 1]) > 0) {
        ++ nbIncrease2
    }
}

console.log(`2nd question response : ${nbIncrease2}`)
