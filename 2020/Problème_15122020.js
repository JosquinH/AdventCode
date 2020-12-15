const input_test = [0,3,6]
const input = [6,3,15,13,1,0]

let curTurn = 0
const objectLastIndex = {}
const objectNbAppear = {}

let curNumber
let isNew = false
while (curTurn <= 10) {
    if (curTurn < input_test.length) {
        curNumber = input_test[curTurn]
        if (curTurn < input_test.length - 1) {
            objectLastIndex[input_test[curTurn]] = curTurn
            objectNbAppear[input_test[curTurn]] = 1
        }
        
    } else {
        if (typeof objectNbAppear[curNumber] === 'number') {
            objectNbAppear[curNumber] += 1
            const newNumber =  curTurn - objectLastIndex[curNumber]
            objectLastIndex[curNumber] = curTurn
            curNumber = newNumber
        } else {
            objectNbAppear[curNumber] = 1
            objectLastIndex[curNumber] = curTurn
            curNumber = 0
        }
    }
    console.log(curNumber)
    ++ curTurn

}

//