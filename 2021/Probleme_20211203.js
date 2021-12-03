const input = require('./input/input_20211203')

const NUMBER_LENGTH = input[0].length
const NUMBER_OF_INPUT = input.length

// 1 

const newInput1 = []

for (let i = 0; i < NUMBER_LENGTH; ++i) {
    newInput1.push([])
}

for (let curInput of input) {
    for (let i = 0; i < NUMBER_LENGTH; ++i) {
        newInput1[i].push(curInput.charAt(i))
    }
}

let gammaRate = 0
let epsilonRate = 0

for (let tableBytes of newInput1) {
    const numberOfOne = tableBytes.filter( x => x === '1').length
    if (numberOfOne >= Math.ceil(NUMBER_OF_INPUT/2)) {
        gammaRate = gammaRate * 2 + 1
        epsilonRate = epsilonRate * 2
    } else {
        gammaRate = gammaRate * 2
        epsilonRate = epsilonRate * 2 + 1 
    }
}

console.log(`1st question's answer : ${gammaRate * epsilonRate}`)

// 2

let O2GeneratorRatingList = [...input]

let i = 0

while (O2GeneratorRatingList.length !== 1) {
    let nbofOne = O2GeneratorRatingList.filter(x => x.charAt(i) === '1').length
    let bitCriteria = nbofOne >= O2GeneratorRatingList.length / 2 ? '1' : '0'
    O2GeneratorRatingList = O2GeneratorRatingList.filter(x => x.charAt(i) === bitCriteria)
    ++i
}

const O2GeneratorRating = O2GeneratorRatingList[0].split('').reduce((acc, x) => x === '1' ? acc*2 + 1 : acc * 2, 0)

let CO2GeneratorRatingList = [...input]

i = 0

while (CO2GeneratorRatingList.length !== 1) {
    let nbofOne = CO2GeneratorRatingList.filter(x => x.charAt(i) === '1').length
    let bitCriteria = nbofOne >= CO2GeneratorRatingList.length / 2 ? '0' : '1'
    CO2GeneratorRatingList = CO2GeneratorRatingList.filter(x => x.charAt(i) === bitCriteria)
    ++i
}

const CO2GeneratorRating = CO2GeneratorRatingList[0].split('').reduce((acc, x) => x === '1' ? acc*2 + 1 : acc * 2, 0)

console.log(`2nd question's answer : ${O2GeneratorRating * CO2GeneratorRating}`)



