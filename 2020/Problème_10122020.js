const input = [
    84,60,10,23,126,2,128,63,59,69,127,73,140,55,154,133,36,139,4,70,110,97,153,105,41,106,79,145,35,134,146,148,13,77,49,107,46,138,88,152,83,120,52,114,159,
    158,53,76,16,28,89,25,42,66,119,3,17,67,94,99,7,56,85,122,18,20,43,160,54,113,29,130,19,135,30,80,116,91,161,115,141,102,37,157,129,34,147,142,151,68,78,24,
    90,121,123,33,98,1,40
]



const CHARGE_INPUT = 0
const DELTA_CHARGE = 3

input.sort((a,b) => a - b)

let numberOfOneDifference = 0 + (input[0] === 1 ? 1 : 0)
let numberOfThreeDifference = (input[0] === 3 ? 1 : 0) + 1 // Celle de la fin

for (let i = 0; i < input.length - 1; ++i) {
    const first_charge = input[i] 
    const second_charge = input[i + 1]
    
    if (second_charge - first_charge > 3) console.error('Problème')

    if (second_charge - first_charge === 1) numberOfOneDifference += 1

    if (second_charge - first_charge === 3) numberOfThreeDifference += 1
}

console.log(`Différence de 1 : ${numberOfOneDifference}`)
console.log(`Différence de 3 : ${numberOfThreeDifference}`)
console.log(`Total : ${numberOfOneDifference * numberOfThreeDifference}`)

// 2

const MAX_LENGTH = input.length
const numberOfCombinaisonObject = {}

const calculateNumberOfCombinaison = (curIndex, numberOfCombinaisonObject) => {
    let currNumberOfCombinaisonObject = numberOfCombinaisonObject
    if (curIndex === MAX_LENGTH - 1) return {res: 1, numberOfCombinaisonObject: currNumberOfCombinaisonObject}

    const curVal = input[curIndex]
    let curNb = 0
    if (curIndex + 1 <= MAX_LENGTH - 1) {
        if (input[curIndex + 1] - curVal <= 3) {
            if (!currNumberOfCombinaisonObject[curIndex + 1]) {
                const {res, numberOfCombinaisonObject: currNumberObject} = calculateNumberOfCombinaison(curIndex + 1, currNumberOfCombinaisonObject)
                currNumberOfCombinaisonObject = currNumberObject
                currNumberOfCombinaisonObject[curIndex + 1] = res
                curNb += res
            } else {
                curNb += currNumberOfCombinaisonObject[curIndex + 1]
            }    
        }  
    } 
    if (curIndex + 2 <= MAX_LENGTH - 1) {
        if (input[curIndex + 2] - curVal <= 3) {
            if (!currNumberOfCombinaisonObject[curIndex + 2]) {
                const {res, numberOfCombinaisonObject: currNumberObject} = calculateNumberOfCombinaison(curIndex + 2, currNumberOfCombinaisonObject)
                currNumberOfCombinaisonObject = currNumberObject
                currNumberOfCombinaisonObject[curIndex + 2] = res
                curNb += res
                
            } else {
                curNb += currNumberOfCombinaisonObject[curIndex + 2]
            } 
        }  
    } 
    if (curIndex + 3 <= MAX_LENGTH - 1) {
        if (input[curIndex + 3] - curVal <= 3) {
            if (!currNumberOfCombinaisonObject[curIndex + 3]) {
                const {res, numberOfCombinaisonObject: currNumberObject} = calculateNumberOfCombinaison(curIndex + 2, currNumberOfCombinaisonObject)
                currNumberOfCombinaisonObject = currNumberObject
                currNumberOfCombinaisonObject[curIndex + 3] = res
                curNb += res
            } else {
                curNb += currNumberOfCombinaisonObject[curIndex + 3]
            }    
        }  
    }
    return {res: curNb, numberOfCombinaisonObject: currNumberOfCombinaisonObject}
}

let curRes = 0
let curObj = {}

if (input[0] <= 3) {
    const result = calculateNumberOfCombinaison(0, curObj)
    curRes += result.res
    curObj = result.numberOfCombinaisonObject
    curObj[0] = result.res
}
console.log(1)
if (input[1] <= 3) {
    const result = calculateNumberOfCombinaison(1, curObj)
    curRes += result.res
    curObj = result.numberOfCombinaisonObject
    curObj[1] = result.res
}
console.log(2)
if (input[2] <= 3) {
    const result = calculateNumberOfCombinaison(2, curObj)
    curRes += result.res
    curObj = result.numberOfCombinaisonObject
    curObj[2] = result.res
}

console.log(curObj)
console.log(`Nombre total de combinaison : ${curRes} `)


// 18512297918464