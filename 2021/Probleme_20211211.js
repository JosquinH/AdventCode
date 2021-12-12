const input = require('./input/input_20211211')

// REFORMATTAGE

const newInput = []

for (const curInput of input) {
    newInput.push(curInput.split('').map(x => parseInt(x)))
}

const INPUT_HEIGHT = newInput.length
const INPUT_WIDTH = newInput[0].length

// 1

const NUMBER_OF_STEP = 100
let step = 0
let numberOfFlash = 0

while (step < NUMBER_OF_STEP) {
    
    // On Incrémente tout de 1

    const currentFlashTable = []
    for (let i = 0; i < INPUT_HEIGHT; ++i) {
        for (let j = 0; j < INPUT_WIDTH; ++j) {
            newInput[i][j]  = newInput[i][j] + 1
            if (newInput[i][j] > 9) {
                currentFlashTable.push([i,j])
            }
        }
    }
    let alreadyFlashList = []
    while (currentFlashTable.length !== 0) {
        const curFlash = currentFlashTable.shift()
        const [i,j] = curFlash
        const strCoord = `${i},${j}`
        if (alreadyFlashList.findIndex(x => x === strCoord) === -1) {
            newInput[i][j] = 0
            alreadyFlashList.push(strCoord)

            // On regarde en haut
            if (i > 0 && alreadyFlashList.findIndex(x => x === `${i-1},${j}`) === -1) {
                newInput[i-1][j] = newInput[i-1][j] + 1
                if (newInput[i-1][j] > 9) {
                    currentFlashTable.push([i-1,j])
                }
            }

            // On regarde en haut à droite
            if (i > 0 && j < INPUT_WIDTH - 1 && alreadyFlashList.findIndex(x => x === `${i-1},${j + 1}`) === -1) {
                newInput[i-1][j + 1] = newInput[i-1][j + 1] + 1
                if (newInput[i-1][j + 1] > 9) {
                    currentFlashTable.push([i-1,j + 1])
                }
            }

            // On regarde à droite
            if (j < INPUT_WIDTH - 1 && alreadyFlashList.findIndex(x => x === `${i},${j + 1}`) === -1) {
                newInput[i][j + 1] = newInput[i][j + 1] + 1
                if (newInput[i][j+1] > 9) {
                    currentFlashTable.push([i,j+1])
                }
            }

            // On regarde en bas à droite
            if (i < INPUT_HEIGHT - 1 && j < INPUT_WIDTH - 1 && alreadyFlashList.findIndex(x => x === `${i + 1},${j + 1}`) === -1) {
                newInput[i + 1][j + 1] = newInput[i + 1][j + 1] + 1
                if (newInput[i + 1][j+1] > 9) {
                    currentFlashTable.push([i + 1,j+1])
                }
            }

            // On regarde en bas
            if (i < INPUT_HEIGHT - 1 && alreadyFlashList.findIndex(x => x === `${i + 1},${j}`) === -1) {
                newInput[i + 1][j] = newInput[i + 1][j] + 1
                if (newInput[i + 1][j] > 9) {
                    currentFlashTable.push([i + 1,j])
                }
            }

            // On regarde en bas à gauche
            if (i < INPUT_HEIGHT - 1 && j > 0 && alreadyFlashList.findIndex(x => x === `${i + 1},${j - 1}`) === -1) {
                newInput[i + 1][j - 1] = newInput[i + 1][j - 1] + 1
                if (newInput[i + 1][j - 1] > 9) {
                    currentFlashTable.push([i + 1,j - 1])
                }
            }

            // On regarde à gauche
            if (j > 0 && alreadyFlashList.findIndex(x => x === `${i},${j - 1}`) === -1) {
                newInput[i][j - 1] = newInput[i][j - 1] + 1
                if (newInput[i][j - 1] > 9) {
                    currentFlashTable.push([i,j - 1])
                }
            }

            // On regardeen haut  à gauche
            if ( i > 0 && j > 0 && alreadyFlashList.findIndex(x => x === `${i - 1},${j - 1}`) === -1) {
                newInput[i - 1][j - 1] = newInput[i - 1][j - 1] + 1
                if (newInput[i - 1][j - 1] > 9) {
                    currentFlashTable.push([i - 1,j - 1])
                }
            }
        }
    }
    numberOfFlash += alreadyFlashList.length
    step += 1
}

console.log(`1st question's answer : ${numberOfFlash}`)

// 2

const numberOfFish = newInput.length * newInput[0].length
let allsync = false

while (!allsync) {
    
    // On Incrémente tout de 1

    const currentFlashTable = []
    for (let i = 0; i < INPUT_HEIGHT; ++i) {
        for (let j = 0; j < INPUT_WIDTH; ++j) {
            newInput[i][j]  = newInput[i][j] + 1
            if (newInput[i][j] > 9) {
                currentFlashTable.push([i,j])
            }
        }
    }
    let alreadyFlashList = []
    while (currentFlashTable.length !== 0) {
        const curFlash = currentFlashTable.shift()
        const [i,j] = curFlash
        const strCoord = `${i},${j}`
        if (alreadyFlashList.findIndex(x => x === strCoord) === -1) {
            newInput[i][j] = 0
            alreadyFlashList.push(strCoord)

            // On regarde en haut
            if (i > 0 && alreadyFlashList.findIndex(x => x === `${i-1},${j}`) === -1) {
                newInput[i-1][j] = newInput[i-1][j] + 1
                if (newInput[i-1][j] > 9) {
                    currentFlashTable.push([i-1,j])
                }
            }

            // On regarde en haut à droite
            if (i > 0 && j < INPUT_WIDTH - 1 && alreadyFlashList.findIndex(x => x === `${i-1},${j + 1}`) === -1) {
                newInput[i-1][j + 1] = newInput[i-1][j + 1] + 1
                if (newInput[i-1][j + 1] > 9) {
                    currentFlashTable.push([i-1,j + 1])
                }
            }

            // On regarde à droite
            if (j < INPUT_WIDTH - 1 && alreadyFlashList.findIndex(x => x === `${i},${j + 1}`) === -1) {
                newInput[i][j + 1] = newInput[i][j + 1] + 1
                if (newInput[i][j+1] > 9) {
                    currentFlashTable.push([i,j+1])
                }
            }

            // On regarde en bas à droite
            if (i < INPUT_HEIGHT - 1 && j < INPUT_WIDTH - 1 && alreadyFlashList.findIndex(x => x === `${i + 1},${j + 1}`) === -1) {
                newInput[i + 1][j + 1] = newInput[i + 1][j + 1] + 1
                if (newInput[i + 1][j+1] > 9) {
                    currentFlashTable.push([i + 1,j+1])
                }
            }

            // On regarde en bas
            if (i < INPUT_HEIGHT - 1 && alreadyFlashList.findIndex(x => x === `${i + 1},${j}`) === -1) {
                newInput[i + 1][j] = newInput[i + 1][j] + 1
                if (newInput[i + 1][j] > 9) {
                    currentFlashTable.push([i + 1,j])
                }
            }

            // On regarde en bas à gauche
            if (i < INPUT_HEIGHT - 1 && j > 0 && alreadyFlashList.findIndex(x => x === `${i + 1},${j - 1}`) === -1) {
                newInput[i + 1][j - 1] = newInput[i + 1][j - 1] + 1
                if (newInput[i + 1][j - 1] > 9) {
                    currentFlashTable.push([i + 1,j - 1])
                }
            }

            // On regarde à gauche
            if (j > 0 && alreadyFlashList.findIndex(x => x === `${i},${j - 1}`) === -1) {
                newInput[i][j - 1] = newInput[i][j - 1] + 1
                if (newInput[i][j - 1] > 9) {
                    currentFlashTable.push([i,j - 1])
                }
            }

            // On regardeen haut  à gauche
            if ( i > 0 && j > 0 && alreadyFlashList.findIndex(x => x === `${i - 1},${j - 1}`) === -1) {
                newInput[i - 1][j - 1] = newInput[i - 1][j - 1] + 1
                if (newInput[i - 1][j - 1] > 9) {
                    currentFlashTable.push([i - 1,j - 1])
                }
            }
        }
    }
    if (alreadyFlashList.length === numberOfFish) {
        allsync = true
    }
    step += 1
}

console.log(`2nd question's answer : ${step}`)