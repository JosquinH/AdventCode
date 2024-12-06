const fs = require('fs');
const filename = "input/input_20241206.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split(''))

const HEIGHT = input.length
const WIDTH = input[0].length
const INPUT_TURN = [[-1,0],[0,1],[1,0],[0,-1]]

// Recup position depart

let startPosition = undefined
let i = 0
while (i < HEIGHT && startPosition === undefined) {
    let indexStart = input[i].findIndex(x => x === '^')
    if (indexStart !== -1) {
        startPosition = [i,indexStart]
    }
    ++i
}

// Problème 1

const CASE_PASSEE_IDX = new Set()

let input_turn_idx = 0

let [ii,jj] = startPosition

while (ii >= 0 && ii < HEIGHT && jj >= 0 && jj < WIDTH) {

    CASE_PASSEE_IDX.add(`${ii},${jj}`)
    
    const proj_ii = ii + INPUT_TURN[input_turn_idx][0]
    const proj_jj = jj + INPUT_TURN[input_turn_idx][1]

    if (proj_ii >= 0 && proj_ii < HEIGHT && proj_jj >= 0 && proj_jj < WIDTH) {
        if (input[proj_ii][proj_jj] === '#') {
            input_turn_idx = (input_turn_idx + 1) % 4
        }
    }

    ii = ii + INPUT_TURN[input_turn_idx][0]
    jj = jj + INPUT_TURN[input_turn_idx][1]
}

const res1 = CASE_PASSEE_IDX.size

console.log(`Solution Problème 1 : ${res1}`)

// Problème 2

let res2 = 0

CASE_PASSEE_IDX.delete(startPosition.join(','))

for (const case_obstacle_idx of CASE_PASSEE_IDX) {

    const [obstacle_i,obstacle_j] = case_obstacle_idx.split(',').map(x => parseInt(x))

    input[obstacle_i][obstacle_j] = '#'

    let [ii,jj] = startPosition

    input_turn_idx = 0

    loop = false

    const casePasseeSens = {}

    while (ii >= 0 && ii < HEIGHT && jj >= 0 && jj < WIDTH && !loop) {

        const key = `${ii},${jj},${input_turn_idx}`

        if (casePasseeSens[key] === undefined) {
            casePasseeSens[key] = true
            const proj_ii = ii + INPUT_TURN[input_turn_idx][0]
            const proj_jj = jj + INPUT_TURN[input_turn_idx][1]
        
            if (proj_ii >= 0 && proj_ii < HEIGHT && proj_jj >= 0 && proj_jj < WIDTH) {
                if (input[proj_ii][proj_jj] === '#') {
                    input_turn_idx = (input_turn_idx + 1) % 4
                }
            }
        
            ii = ii + INPUT_TURN[input_turn_idx][0]
            jj = jj + INPUT_TURN[input_turn_idx][1]
            
        } else {
            loop = true
        }
    }

    input[obstacle_i][obstacle_j] = '.'

    
    res2 += loop ? 1 : 0 
}

console.log(`Solution Problème 2 : ${res2}`)
