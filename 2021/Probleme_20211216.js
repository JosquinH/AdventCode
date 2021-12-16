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

const getVersionsOfPacket = (packet) => {
    const INPUT_LENGTH = packet.length
    let sumOfVersion = 0
    let step = 'READ_V'
    let i = 0
    while (i < INPUT_LENGTH) {
        if (step === 'READ_V') {
            let curVersion = packet.slice(i, i+3).join('')
            i += 3
            const version = fromBinToDec(curVersion)
            sumOfVersion += version
            step = 'READ_T'
        } else if (step === 'READ_T') {
            let curType = packet.slice(i, i+3).join('')
            i += 3
            curType = fromBinToDec(curType)
            if (curType === 4) {
                step = 'READ_LITTERAL'
            } else {
                step = 'READ_OPERATOR'
            }
            
        } else if (step === 'READ_LITTERAL') {
            let litteral = packet.slice(i, i+5)
            while (litteral[0] === '1') {
               i +=5
               litteral = packet.slice(i, i+5)
            }
            i +=5
            if (INPUT_LENGTH - i < 4) {
                i += 5
            } else {
                step = 'READ_V'
            }   
        } else if (step === 'READ_OPERATOR') {
            const lengthID = packet[i]
            i += 1
            if (lengthID === '0') {
                let subPacketLength = packet.slice(i,i+15).join('')
                i += 15
                subPacketLength = fromBinToDec(subPacketLength)
                let curSumOfVersion = getVersionsOfPacket(packet.slice(i,i+subPacketLength))
                i += subPacketLength
                sumOfVersion += curSumOfVersion
                step = 'READ_V'
            } else if (lengthID === '1') {
                i += 11
                step = 'READ_V'
            }
        }
    }
    return sumOfVersion
}

const sumOfVersion = getVersionsOfPacket(newInput)


console.log(`1st question's answer : ${sumOfVersion}`)

// 2

const getResultsOfPacket = (packet) => {
    const INPUT_LENGTH = packet.length
    console.log(packet.length)
    let step = 'READ_V'
    let i = 0
    let cur_OP = ''
    let curRes = 0
    while (i < INPUT_LENGTH) {
        if (step === 'READ_V') {
            i += 3
            step = 'READ_T'
        } else if (step === 'READ_T') {
            let curType = packet.slice(i, i+3).join('')
            i += 3
            curType = fromBinToDec(curType)
            console.log(curType)
            if (curType === 4) {
                step = 'READ_LITTERAL'
            } else {
                step = 'READ_OPERATOR'
            }
            
        } else if (step === 'READ_LITTERAL') {
            let litteral = packet.slice(i, i+5)
            let num = packet.slice(1,i+5).join('')
            while (litteral[0] === '1') {
               i +=5
               litteral = packet.slice(i, i+5)
               num += packet.slice(1,i+5).join('')
            }
            i += 5
            num = fromBinToDec(num)
            if (INPUT_LENGTH - i < 4) {
                i += 5
            } else {
                step = 'READ_V'
            }   
        } else if (step === 'READ_OPERATOR') {
            const lengthID = packet[i]
            i += 1
            console.log('yooyo', lengthID)
            if (lengthID === '0') {
                let subPacketLength = packet.slice(i,i+15).join('')
                i += 15
                subPacketLength = fromBinToDec(subPacketLength)
                let curSumOfVersion = getVersionsOfPacket(packet.slice(i,i+subPacketLength))
                i += subPacketLength
                step = 'READ_V'
            } else if (lengthID === '1') {
                i += 11
                step = 'READ_V'
            }
        }
    }
    return curRes
}

const res = getResultsOfPacket(newInput)

