const input = require('./input/input_20211208')

// Reformattage

const newInput = []

for (const curInput of input) {
    const splitInput = curInput.split('|')
    const wires = splitInput[0].trim().split(' ').map(x => x.trim())
    const digits = splitInput[1].trim().split(' ').map(x => x.trim())
    newInput.push({ wires, digits })
}

const NUMBER_WIRE_1 = 2
const NUMBER_WIRE_4 = 4
const NUMBER_WIRE_7 = 3
const NUMBER_WIRE_8 = 7

// 1

let counterEasyDigit = 0

for (const curInput of newInput) {
    counterEasyDigit += curInput.digits.filter(x => x.length === NUMBER_WIRE_1 || x.length === NUMBER_WIRE_4 || x.length === NUMBER_WIRE_7 || x.length === NUMBER_WIRE_8).length
}

console.log(`1st question's answer : ${counterEasyDigit}`)

// 2

let sumValue = 0

for (const curInput of newInput) {

    const newWireObj = {}
    let otherWires = []
    let wire1
    let wire4
    let wire9

    // On place 1,4,7 et 8
    for (const wire of curInput.wires) {
        let newWire = wire.split('')
        newWire.sort()
        newWire = newWire.join('')
        if (wire.length === NUMBER_WIRE_1) {
            newWireObj[newWire] = 1
            wire1 = newWire.split('')
        } else if (wire.length === NUMBER_WIRE_4) {
            newWireObj[newWire] = 4
            wire4 = newWire.split('')
        } else if (wire.length === NUMBER_WIRE_7) {
            newWireObj[newWire] = 7
        } else if (wire.length === NUMBER_WIRE_8) {
            newWireObj[newWire] = 8
        } else if (otherWires.findIndex(x => x === newWire) === -1) {
            otherWires.push(newWire)
        }
    }

    for (const otherWire of otherWires) {
        // 3 est le seul de taille 5 à contenir 1
        if (otherWire.length === 5 && wire1.every(x => otherWire.split('').findIndex(y => y === x) !== -1)) {
            newWireObj[otherWire] = 3
        }
        // 3 est le seul de taille 6 à ne pas contenir 1
        if (otherWire.length === 6 && ! wire1.every(x => otherWire.split('').findIndex(y => y === x) !== -1)) {
            newWireObj[otherWire] = 6
        }
        // 9 est le seul de taille 6 à contenir 4
        if (otherWire.length === 6 && wire4.every(x => otherWire.split('').findIndex(y => y === x) !== -1)) {
            newWireObj[otherWire] = 9
            wire9 = otherWire.split('')
        }
    }

    otherWires = otherWires.filter(x => Object.keys(newWireObj).findIndex(y => y === x) === -1)

    for (const otherWire of otherWires) {
        // 0 est le seul de taille 6 à ce stade
        if (otherWire.length === 6) {
            newWireObj[otherWire] = 0
        }
    }

    otherWires = otherWires.filter(x => Object.keys(newWireObj).findIndex(y => y === x) === -1)
    // Il reste 2 et 5 que l'on compare avec 9
    for (const otherWire of otherWires) {
        const diff = wire9.filter(x => otherWire.split('').findIndex(y => y === x) === -1)
        // 9 a 1 segment de diff avec 5
        if (diff.length === 1) {
            newWireObj[otherWire] = 5
        } else {
            // 9 a 2 segment de diff avec 5
            newWireObj[otherWire] = 2
        }
    }

    let res = 0

    for (const digit of curInput.digits) {
        let newDigit = digit.split('')
        newDigit.sort()
        res = (res * 10) + newWireObj[newDigit.join('')]
    }

    sumValue += res
}

console.log(`2nd question's answer : ${sumValue}`)