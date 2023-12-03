const fs = require('fs');
const filename = "input/input_20231203.txt"
const input = fs.readFileSync(filename, 'utf8').split('\n')


const numberRegex = new RegExp('[0-9]+','g')
const symboleRegex = /[^0123456789\.]/

const gearCoordNumber = {}

let total = 0

// Problème 1

for (let i=0; i < input.length; ++i) {
    // Récupération des nombres de la ligne
   
    const numberIterator = input[i].matchAll(numberRegex)
    let curNumber = numberIterator.next()
    
    while (curNumber.value !== undefined) {
        
        const number = parseInt(curNumber.value[0])
        
        // On cherche si un symbole est adjacent au nombre
        
        const minIndex = curNumber.value['index']
        const maxIndex = minIndex + curNumber.value[0].length - 1

        let findSymbole = false
        
        for (let ii = i -1; ii <= i +1; ++ii) {
            if (ii >= 0 && ii < input.length) {
                for (let jj = minIndex - 1; jj <= maxIndex + 1; ++jj) {
                    if (jj >= 0 && jj < input[ii].length - 1) {
                        findSymbole = findSymbole | (input[ii].charAt(jj).match(symboleRegex) !== null)
                        // Partie gear, problème 2
                        if (input[ii].charAt(jj) === '*') {
                            const str = `${ii};${jj}`
                            if (gearCoordNumber[str] === undefined) {
                                gearCoordNumber[str] = [number]
                            } else {
                                gearCoordNumber[str].push(number)
                            }
                        }
                    }
                }
            } 
        }
  
        // Test pour total

        if (findSymbole) {
            total += number            
        }

        // Itération
        curNumber = numberIterator.next()
   }
}

console.log(`Solution Problème 1 : ${total}`)

// Problème 2

const total1 = Object.keys(gearCoordNumber).reduce((acc,x) => gearCoordNumber[x].length === 2 ? acc + (gearCoordNumber[x][0] * gearCoordNumber[x][1]) : acc,0)

console.log(`Solution Problème 2 : ${total1}`)
