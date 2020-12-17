const input_test = [
    '.#.',
    '..#',
    '###',
]

const NB_CYCLE = 6

const MAX_HEIGHT = input_test.length + (2 * NB_CYCLE) 
const MAX_WIDTH = input_test[0].length + (2 * NB_CYCLE) 
const MAX_DEPTH = 1 + (2 * NB_CYCLE) 

const Z_DEPART = 1 + NB_CYCLE

const CUBE_STATE = []

for (let i = 0; i <= MAX_DEPTH; ++i) {
    const current_plan = []
    for (let j = 0; j < MAX_HEIGHT; ++j) {
        const currentLine = []
        for (let k = 0; k < MAX_WIDTH; ++k) {
            currentLine.push('.')
        }
        current_plan.push(currentLine)
    }
    CUBE_STATE.push(current_plan)
}

let currentCycle = 1

while (currentCycle < 2) {
    
    // COPIE STATE PRECEDENT

    const precedentState = []
    for (let i = 0; i <= MAX_DEPTH; ++i) {
        const current_plan = []
        for (let j = 0; j < MAX_HEIGHT; ++j) {
            current_plan.push(...CUBE_STATE[i][j])
        }
        precedentState.push(current_plan)
    }

    for (let z = Z_DEPART - currentCycle; z <=  Z_DEPART + currentCycle; ++z) {
        for (let y = 1; y < MAX_HEIGHT - 1; ++ y) {
            for (let x = 1; y < MAX_WIDTH - 1; ++ x) {
                let numberOfActive = 0
                let numberOfInactive = 0

                // COUCHE -1

                if (precedentState[z-1][y-1][x-1] === '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }

                if (precedentState[z-1][y][x-1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z-1][y + 1][x -1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z-1][y + 1][x]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                            
                if (precedentState[z-1][y][x]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z-1][y-1][x]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z-1][y-1][x + 1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }

                if (precedentState[z-1][y][x + 1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z-1][y+1][x + 1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }

                // COUCHE 0
                
                if (precedentState[z][y-1][x-1] === '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }

                if (precedentState[z][y][x-1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z][y + 1][x -1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z][y + 1][x]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }                        
                
                if (precedentState[z][y-1][x]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z][y-1][x + 1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }

                if (precedentState[z][y][x + 1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z][y+1][x + 1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }

                // COUCHE 1 

                if (precedentState[z+1][y-1][x-1] === '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }

                if (precedentState[z+1][y][x-1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z+1][y + 1][x -1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z+1][y + 1][x]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                            
                if (precedentState[z+1][y][x]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z+1][y-1][x]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z+1][y-1][x + 1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }

                if (precedentState[z+1][y][x + 1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
                
                if (precedentState[z+1][y+1][x + 1]=== '#') {
                    numberOfActive += 1
                } else {
                    numberOfInactive += 1
                }
            } 
        }
    }
}
