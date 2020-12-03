const input = [
    1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,5,23,1,23,5,27,2,27,10,31,1,31,9,35,1,35,5,39,1,6,39,43,2,9,43,47,1,5,47,51,2,6,51,55,1,5,55,59,2,10,59,63,1,63,6,67,2,67,6,71,2,
    10,71,75,1,6,75,79,2,79,9,83,1,83,5,87,1,87,9,91,1,91,9,95,1,10,95,99,1,99,13,103,2,6,103,107,1,107,5,111,1,6,111,115,1,9,115,119,1,119,9,123,2,123,10,127,1,6,127,131,2,131,13,
    135,1,13,135,139,1,9,139,143,1,9,143,147,1,147,13,151,1,151,9,155,1,155,13,159,1,6,159,163,1,13,163,167,1,2,167,171,1,171,13,0,99,2,0,14,0
]

const END_CODE = 99
const LENGTH = input.length

const getInput = (enterInput, pos1Number, pos2Number) => {
    const currentInput = [...input]

    currentInput[1] = pos1Number
    currentInput[2] = pos2Number
    
    let i = 0

    while (currentInput[i] !== END_CODE && i < LENGTH - 4) {
        const operation_code = currentInput[i]
        const first_number_index = currentInput[i+1]
        const second_number_index = currentInput[i+2]
        const result_index = currentInput[i+3]

        if (!(operation_code === 1 || operation_code === 2)) {
            console.error(`BAD OPERATION CODE${error}`)
        } else if  (first_number_index >= LENGTH || second_number_index >= LENGTH || result_index >= LENGTH) {
            console.error('BAD INDEX')
        } else {
            if (operation_code === 1) {
                currentInput[result_index] = currentInput[first_number_index] + currentInput[second_number_index]
            } else {
                currentInput[result_index] = currentInput[first_number_index] * currentInput[second_number_index]
            }
        }
        i += 4
    }

    return currentInput
}
// 1

const currentInput = getInput(input,12,2)
console.log('First Result')
console.log(currentInput.join(' '))

// 2

const RES_TO_FIND = 19690720

let i = 0
let j = 0
let currentInput1 = []
let finish = false

while (!finish && i < 100) {
    currentInput1 = getInput(input,i,j)
    if (currentInput1[0] === RES_TO_FIND) {
        finish = true
    } else {
        i += Math.floor(j/99)
        j = (j+1) % 100
    }
}
console.log('\n')
console.log('Second Result')
console.log(`${i} ; ${j} ; ${100*i + j} ; ${currentInput1.join(' ')}`)
