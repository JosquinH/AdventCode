const fs = require('fs');
const filename = "input/input_20231207.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const cardHexa = {'2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','T':'A','J':'B','Q':'C','K':'D','A':'E'}

// Problème 1

const handTable = []

for (const handBet of input) {
    let [hand,bet] = handBet.split(' ')
    bet = parseInt(bet)
    handCard = hand.split('')
    const handObj = handCard.reduce((acc,x)=>{
        if (acc[x] === undefined) {
            acc[x] = 1
        } else {
            acc[x] = acc[x] + 1  
        }
        return acc
    },{})

    const handCardNumber = Object.keys(handObj).map(x => handObj[x]).sort((a,b) => b - a).filter(x => x > 1)
    
    let handPower = 0

    if (handCardNumber.length === 0) {
        handPower = 0
    } else if (handCardNumber.length === 1) {
        handPower = handCardNumber[0] * 10
    } else if (handCardNumber.length === 2) {
        handPower = parseInt(handCardNumber.join(''))
    }

    const handNumber = parseInt(handCard.map(x => cardHexa[x]).join(''),16)

    handTable.push({handPower,handNumber,bet})
}

const res = handTable.sort((a,b) => {
    const delta1 =  a.handPower - b.handPower
    if (delta1 === 0) {
        return a.handNumber - b.handNumber
    } else {
        return delta1
    }
}).reduce((acc,x,idx) => acc + x.bet * (idx + 1),0)

console.log(res)