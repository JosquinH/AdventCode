const input = require('./input/input_test2')

// Reformattage
const hexaObj = {
    '0' : '0000','1' : '0001','2' : '0010','3' : '0011','4' : '0100','5' : '0101','6' : '0110','7' : '0111','8' : '1000','9' : '1001',
    'A' : '1010','B' : '1011','C' : '1100','D' : '1101','E' : '1110','F' : '1111',
}

let newInput = []

for (const curInput of input.split('')) {
    newInput.push(...hexaObj[curInput].split(''))
}

const fromBinToDec = x => x.split('').reduce((acc,y) => (acc * 2) + parseInt(y),0)

// 1

i = 0
let step = 'READ_V'
let sumOfVersion = 0
let curNumberOfBit = 0

while (i < newInput.length) {
    if (step === 'READ_V') {
        let curVersion = newInput.slice(i, i+3).join('')
        i += 3
        sumOfVersion += fromBinToDec(curVersion)
        step = 'READ_T'
        curNumberOfBit+=3
    } else if (step === 'READ_T') {
        let curType = newInput.slice(i, i+3).join('')
        i += 3
        curType = fromBinToDec(curType)
        curNumberOfBit+=3
        if (curType === 4) {
            step = 'READ_LITTERAL'
        } else {
            step = 'READ_OPERATOR'
        }
        
    } else if (step === 'READ_LITTERAL') {
        let litteral = newInput.slice(i, i+5)
        while (litteral[0] === '1') {
           i +=5
           litteral = newInput.slice(i, i+5)
           curNumberOfBit+=5
        }
        i +=5
        curNumberOfBit+=5

        let offsetToAdd = (4 - (curNumberOfBit%4)) % 4
        i += offsetToAdd
        curNumberOfBit = 0
        step = 'READ_V'
    } else if (step === 'READ_OPERATOR') {
        
    }
}

console.log(sumOfVersion)