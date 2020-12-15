const input_test = [0,3,6]
const input = [6,3,15,13,1,0]

let curTurn = 0
const objectLastIndex = {}
const objectNbAppear = {}

let curNumber
let isNew = false
while (curTurn < 30000000) {
    if (curTurn < input.length) {
        curNumber = input[curTurn]
        if (curTurn < input.length - 1) {
            objectLastIndex[input[curTurn]] = curTurn + 1
            objectNbAppear[input[curTurn]] = 1
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
    if (curTurn %100000 === 0 || curTurn === 29999999) {
        console.log(curTurn,curNumber)
    }
    
    ++ curTurn

}

//