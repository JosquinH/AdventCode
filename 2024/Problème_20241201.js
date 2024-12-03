const fs = require('fs');
const filename = "input/input_20241201.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const [inputLeft,inputRight] = input
.map(x => x
    .split(' ')
    .filter(y => y !=='')
    .map(y => parseInt(y))
)
.reduce((acc,x) => [[...acc[0],x[0]],[...acc[1],x[1]]], [[],[]])

// Problème 1

inputLeft.sort()
inputRight.sort()

const res1 = inputLeft.reduce((acc,x,k) => acc + Math.abs(x - inputRight[k]),0 )

console.log(`Solution Problème 1 : ${res1}`)

// Problème 2

const res2 = inputLeft.reduce((acc,x) => acc + x * inputRight.filter(y => y === x).length, 0)

console.log(`Solution Problème 2 : ${res2}`)