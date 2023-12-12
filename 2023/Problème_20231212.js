const fs = require('fs');
const filename = "input/input_20231212.txt"
// input_20231212.txt
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const reg =/#+/g
// Calcul les combinaisons possibles d'indice du type 3 parmis p

const combinaison = (p,n) => {
    const liste_combinaison = []
    const indices = []
    for (let i = 0; i < p; ++ i) {
        indices.push(i)
    }
    liste_combinaison.push([...indices])
    if (p === n) {
        return liste_combinaison
    }
    let i = p - 1
    while (i !== -1) {
        indices[i] += 1
        for (let j = i+1; j < p; ++j) {
            indices[j] = indices[j - 1] + 1
        }
        if (indices[i] === (n  - p + i)) {
            --i
        } else {
            i = p - 1
        }
        liste_combinaison.push([...indices])
    }
    return liste_combinaison
}

// Indique si un spring est valide

const isValidSpring = (spring,indexDamaged) => {
    let index = 0
    const springDamagedIt = spring.matchAll(reg)
    let s = springDamagedIt.next()
    while (s.value !== undefined && index < indexDamaged.length) {
        if (s.value[0].length !== indexDamaged[index]) {
            return false
        }
        index += 1
        s = springDamagedIt.next()
    }
    if (s.value !== undefined || index !== indexDamaged.length) {
        return false
    }
    return true
}

// Problème 1

let numberOfCombinaison = 0
let k = 0
for (const line of input) {
    if (k % 100 === 0) {
        console.log(`${k+1}/${input.length}`)
    }
    k += 1
    // Traitement de la ligne
    let [springs,indexDamaged] = line.split(' ')
    indexDamaged = indexDamaged.split(',').map(x => parseInt(x))
    const totalNumberOfDamagedSprings = indexDamaged.reduce((acc,x) => acc +x,0)
    springs = springs.split('')

    // Récupération des index des cases inconnus et du nombre de #
    const interogationSpringIndex = []
    let numberOfDamagedSpring = 0
    for (let i = 0; i < springs.length; ++ i) {
        if (springs[i] === '?') {
            interogationSpringIndex.push(i)
        } else if (springs[i] === '#') {
            numberOfDamagedSpring += 1
        }
    }

    // Test combinaison
    const allCombinaison = combinaison(totalNumberOfDamagedSprings-numberOfDamagedSpring,interogationSpringIndex.length)
    for (const currentCombinaison of allCombinaison) {
        const newSprings = [...springs]
        for (let i = 0; i < currentCombinaison.length; ++i) {
            newSprings[interogationSpringIndex[currentCombinaison[i]]] = '#'
        }
        if (isValidSpring(newSprings.join(''),indexDamaged)) {
            numberOfCombinaison += 1
        }
    }   
}

console.log(`Solution Problème 1 : ${numberOfCombinaison}`)