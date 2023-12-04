const fs = require('fs');
const filename = "input/input_20231204.txt"
const input = fs.readFileSync(filename, 'utf8').split('\n')

const cardOccurence = []
const nbCard = []

// Problème 1

let total = 0

for (const card of input) {
    const [winningNumber, myNumbers] = card.split(':')[1].split('|').map((numberSuite) => {
        const tab = []
        for (let i = 0; i < numberSuite.length - 1; i+=3) {
            tab.push(parseInt(numberSuite.slice(i,i+3)))
        }
        return tab
    })

    let n = 0

    for (const number of myNumbers) {
        if (winningNumber.findIndex(x => x === number) !== -1) {
            ++n
        }
    }

    if (n > 0) {
        total += 2 ** (n - 1)
    }

    // Pour Problème 2

    cardOccurence.push(n)
    nbCard.push(1)
    
}

console.log(`Solution Problème 1 : ${total}`)

// Problème 2

for (let i = 0; i < nbCard.length;++i) {
    let j = i+1
    let jmax = i + cardOccurence[i]

    while (j <= jmax && j < nbCard.length) {
        nbCard[j] = nbCard[j] + nbCard[i]
        ++j
    }
}

const total1 = nbCard.reduce((acc,x) => acc + x, 0)

console.log(`Solution Problème 2 : ${total1}`)
