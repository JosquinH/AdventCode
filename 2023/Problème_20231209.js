const fs = require('fs');
const filename = "input/input_20231209.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

// Problème 1 et 2

let total = 0
let total1 = 0

for (const line of input) {
    let numberSuite = line.split(' ').map(x => parseInt(x))
    const lastNumberList = []
    const firstNumberList = []
    while (!numberSuite.every(x => x === 0)) {
        lastNumberList.push(numberSuite[numberSuite.length - 1])
        firstNumberList.unshift(numberSuite[0])
        numberSuite = numberSuite.reduce((acc,x,idx,tab) => {
            if (idx < tab.length - 1) {
                acc.push(tab[idx + 1] -x)
            }
            return acc
        },[])
    }

    total += lastNumberList.reduce((acc,x) => acc+ x,0 )
    total1 += firstNumberList.reduce((acc,x) => x - acc,0 )
}

console.log(`Solution Problème 1 : ${total}`)
console.log(`Solution Problème 2 : ${total1}`)
