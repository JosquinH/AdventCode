const {crates, moves} = require('./input/input_20221205')

let newCrates = crates.map(x => x.split(''))
const newMoves = moves.map(x => x.split(",").map(y => parseInt(y)))

//1

for (const move of newMoves) {
    for (let i = 0; i < move[0]; ++i) {
        newCrates[move[2]-1].unshift(newCrates[move[1]-1].shift())
    }
}

const res1 = newCrates.reduce((acc,x) => x.length === 0 ? acc + " " : acc + x[0], "")


console.log(`1st question's answer : ${res1}`)

// 2

newCrates = crates.map(x => x.split(''))

for (const move of newMoves) {
    const curStack = []
    for (let i = 0; i < move[0]; ++i) {
        curStack.push(newCrates[move[1]-1].shift())
    }
    newCrates[move[2]-1].unshift(...curStack)
}

const res2 = newCrates.reduce((acc,x) => x.length === 0 ? acc + " " : acc + x[0], "")

console.log(`2nde question's answer : ${res2}`)