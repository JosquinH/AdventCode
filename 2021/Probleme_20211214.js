const {template, pairInsertions} = require('./input/input_20211214')

// Reformattage

const pairInsertionsObj = {}

for (const pair of pairInsertions) {
    const [key,value] = pair.split('->').map(x => x.trim())
    pairInsertionsObj[key] = value
}

/**
 * Le but est de faire un objet qui va contenir le nombre d'occurence de chaque doublet de lettre à chaque étape :
 * 
 * Par exemple  si on reprend le test : 
 * 
 * CH -> B
 * CB -> H
 * BH -> H
 * 
 * On aura CH;1 = {C: 1, B: 1, H: 1} CBH
 * On aura CB;1 = {C: 1, B: 1, H: 1} CHB
 * On aura BH;1 = {B: 1, H: 2} BHH
 * 
 * On aura CH;2 = CB;1 + BH;1 - {B : 1} = {C: 1, B: 1, H: 3} car on ne compte pas le B 2 fois CHBHH
 */

const allPairs = Object.keys(pairInsertionsObj)

const allPairsAtStepObj = {}

// initialisation step = 1

let letters = []

for (const pair of allPairs) {
    const ocObj = {}
    const str = pair + pairInsertionsObj[pair]
    for (let i = 0; i < str.length; ++i) {
        const c = str.charAt(i)
        if (ocObj[c]) {
            ocObj[c] += 1
        } else {
            ocObj[c] = 1
        }
    }
    allPairsAtStepObj[`${pair};1`] = ocObj
    letters.push(...str.split(''))
}

letters = [... new Set(letters)]

// Ajout pour step >= 2

const stepNumber = 40

for (let step = 2; step <= stepNumber; ++step) {
    for (const pair of allPairs) {
        const [x1,x3] = pair.split('')
        const x2 = pairInsertionsObj[pair]
        const oc1 = allPairsAtStepObj[`${x1}${x2};${step-1}`]
        const oc2 = allPairsAtStepObj[`${x2}${x3};${step-1}`]

        const newOc = {}

        for (const letter of letters) {
            const res1 = oc1[letter]
            const res2 = oc2[letter]
            if (res1 !== undefined && res2 !== undefined) {
                newOc[letter] = res1 + res2
            } else if (res1 === undefined && res2 !== undefined) {
                newOc[letter] = res2
            } else if (res1 !== undefined && res2 === undefined) {
                newOc[letter] = res1
            }
        }
        newOc[x2] = newOc[x2] - 1
        allPairsAtStepObj[`${pair};${step}`] = newOc
    }
}

// 1

const objOccur = {}

for (let i = 0; i < template.length - 1; ++ i) {
    const curOc = allPairsAtStepObj[`${template.charAt(i)}${template.charAt(i+1)};10`]
    for (const letter of letters) {
        const res1 = objOccur[letter]
        const res2 = curOc[letter]
        if (res1 !== undefined && res2 !== undefined) {
            objOccur[letter] = res1 + res2
        } else if (res1 === undefined && res2 !== undefined) {
            objOccur[letter] = res2
        } else if (res1 !== undefined && res2 === undefined) {
            objOccur[letter] = res1
        }
    }
}

const res1 = Object.values(objOccur)
res1.sort((a,b) => a - b)

console.log(`1st question's answer : ${res1[res1.length - 1] - res1[0]}`)

// 2

const objOccur2 = {}

for (let i = 0; i < template.length - 1; ++ i) {
    const curOc = allPairsAtStepObj[`${template.charAt(i)}${template.charAt(i+1)};40`]
    for (const letter of letters) {
        const res1 = objOccur2[letter]
        const res2 = curOc[letter]
        if (res1 !== undefined && res2 !== undefined) {
            objOccur2[letter] = res1 + res2
        } else if (res1 === undefined && res2 !== undefined) {
            objOccur2[letter] = res2
        } else if (res1 !== undefined && res2 === undefined) {
            objOccur2[letter] = res1
        }
    }
}

const res2 = Object.values(objOccur2)

res2.sort((a,b) => a - b)

console.log(`2nd question's answer : ${res2[res2.length - 1] - res2[0]}`)