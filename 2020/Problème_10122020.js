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