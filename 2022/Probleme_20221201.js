const input = require('./input/input_20221201')

// 1

let max = 0

for (let elf of input) {
    let totalCalories = elf.reduce((acc,x) => acc + x,0)
    if (totalCalories > max) {
        max = totalCalories
    }
}

console.log(`1st question's answer : ${max}`)

// 2

let caloriesElf = input.map(cal => cal.reduce((acc,x) => acc + x,0))
caloriesElf.sort((a,b) => b - a)

console.log(`2nde question's answer : ${caloriesElf[0] + caloriesElf[1] + caloriesElf[2]}`)