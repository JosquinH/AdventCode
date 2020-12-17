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
