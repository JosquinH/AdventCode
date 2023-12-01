const fs = require('fs');
const filename = "input/input_20231201.txt"
const input = fs.readFileSync(filename, 'utf8').split('\n')

const compTab = ['1','2','3','4','5','6','7','8','9','one','two','three','four','five','six','seven','eight','nine']

/**
 * Partie 1
 */

let total = 0

for (const line of input) {
    let i = 0
    let leftDigit = line.charAt(i)
    while(compTab.findIndex(x => x === leftDigit) === -1 && i < line.length) {
        ++i
        leftDigit = line.charAt(i)
    }

    i = line.length - 1
    let rightDigit = line.charAt(i)
    while(compTab.findIndex(x => x === rightDigit) === -1 && i > 0) {
        --i
        rightDigit = line.charAt(i)
    }

    total += parseInt(`${leftDigit}${rightDigit}`)
}

console.log(`Solution Problème 1 : ${total}`)

/**
 * Partie 2
 */

let total2 = 0

for (const line of input) {
    let minIndex = line.length
    let maxIndex = -1
    let leftDigit,rightDigit = ''
    for (const digitCompare of compTab) {
        let firstIndex = line.indexOf(digitCompare)
        let lastIndex = line.lastIndexOf(digitCompare)

        if (firstIndex !== -1 && firstIndex < minIndex) {
            minIndex = firstIndex
            leftDigit = digitCompare
        }

        if (lastIndex > maxIndex) {
            maxIndex = lastIndex
            rightDigit = digitCompare
        }
    }

    leftDigit = (compTab.findIndex(x => x === leftDigit) % 9) + 1
    rightDigit = (compTab.findIndex(x => x === rightDigit) % 9) + 1

    total2 += (leftDigit * 10) + rightDigit

}

console.log(`Solution Problème 2 : ${total2}`)