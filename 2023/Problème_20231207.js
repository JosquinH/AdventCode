const fs = require('fs');
const filename = "input/input_20231207.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

/**
 * Fonction pour calculer la puissance d'une main en fonction du nombre de carte commune
 * 5 : 50
 * 4 : 40
 * 3 et 2 : 32
 * 3 : 30
 * 2 et 2 : 22
 * 2 : 20
 * rien : 0
 */

const getPower = (handCardNumber) => {
    let handPower = 0
    if (handCardNumber.length === 1) {
        handPower = handCardNumber[0] * 10
    } else if (handCardNumber.length === 2) {
        handPower = parseInt(handCardNumber.join(''))
    }
    return handPower
}

/**
 * fonction pour calculer le résultat final à partir de handTable ou handTable2
 */
const getResult = (handTable) => {
    return handTable.sort((a,b) => {
        const delta1 =  a.handPower - b.handPower
        if (delta1 === 0) {
            return a.handNumber - b.handNumber
        } else {
            return delta1
        }
    }).reduce((acc,x,idx) => acc + x.bet * (idx + 1),0)
}

// Problème 1 et 2

const cardHexa = {'2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','T':'A','J':'B','Q':'C','K':'D','A':'E'}
const cardHexa2 = {'J':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','T':'A','Q':'B','K':'C','A':'D'}

const handTable = []
const handTable2 = []

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
    
    // Partie Problème 1

    const handCardNumber1 = Object.values(handObj).filter(x => x > 1).sort((a,b) => b - a)

    const handNumber1 = parseInt(handCard.map(x => cardHexa[x]).join(''),16)

    handTable.push({handPower:getPower(handCardNumber1),handNumber: handNumber1,bet})

    // Partie Problème 2

    const jokerNumber = handObj['J']

    if (jokerNumber !== undefined && jokerNumber !== 5) {
        handObj['J'] = 0
        const maxKey = Object.entries(handObj).sort((a,b) => b[1] - a[1])[0][0]
        handObj[maxKey] = handObj[maxKey] + jokerNumber
    }

    const handCardNumber2 = Object.values(handObj).filter(x => x > 1).sort((a,b) => b - a)
    const handNumber2 = parseInt(handCard.map(x => cardHexa2[x]).join(''),16)

    handTable2.push({handPower:getPower(handCardNumber2),handNumber: handNumber2,bet})
}

// Problème 1

console.log(`Solution Problème 1 : ${getResult(handTable)}`)

// Problème 2

console.log(`Solution Problème 2 : ${getResult(handTable2)}`)