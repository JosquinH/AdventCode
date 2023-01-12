const input = require('./input/input_20221208')

const newInput = input.map(x => x.split("").map(x => parseInt(x)))

const left_visibility_table = [] // carte de la visibilité de la gauche
const top_visibility_table = [] // carte de la visibilité du haut
const right_visibility_table = [] // carte de la visibilité de la droite
let bottom_visibility_table = [] // carte de la visibilité du bas

const HEIGHT = newInput.length
const WIDTH = newInput[0].length

for (let i = 0; i < HEIGHT; ++i) {
    const left_visibility_line = []
    const top_visibility_line = []
    const bottom_visibility_line = []
    let right_visibility_line = []
    for (let j = 0; j < WIDTH; ++j ) {
        top_visibility_line.push(i === 0 ? newInput[i][j] : Math.max(top_visibility_table[i - 1][j],newInput[i][j]))
        left_visibility_line.push((j === 0 ? newInput[i][j] : Math.max(left_visibility_line[j -1],newInput[i][j])))
        bottom_visibility_line.push(i === 0 ? newInput[HEIGHT - i -1][j] : Math.max(bottom_visibility_table[i - 1][j],newInput[HEIGHT - i -1][j]))
        right_visibility_line.push((j === 0 ? newInput[i][WIDTH - j - 1] : Math.max(right_visibility_line[j - 1],newInput[i][WIDTH - j - 1])))
    }
    top_visibility_table.push(top_visibility_line)
    left_visibility_table.push(left_visibility_line)
    bottom_visibility_table.push(bottom_visibility_line)
    right_visibility_table.push(right_visibility_line.reverse())
}

bottom_visibility_table = bottom_visibility_table.reverse()

// 1

let number_of_visible_tree = 2 * HEIGHT + 2 * WIDTH - 4

for (let i = 1; i < HEIGHT - 1; ++i) {
    for (let j = 1; j < WIDTH - 1; ++j) {
        const curTreeSize = newInput[i][j]
        if (curTreeSize > Math.min(left_visibility_table[i][j-1],right_visibility_table[i][j+1],top_visibility_table[i-1][j],bottom_visibility_table[i+1][j])) {
            number_of_visible_tree += 1
        }
    }
}

console.log(`1st question's answer : ${number_of_visible_tree}`)

// 2

let max_distance = 0

for (let i = 1; i < HEIGHT - 1; ++i) {
    for (let j = 1; j < WIDTH - 1; ++j) {
        const curTreeSize = newInput[i][j]
        let current_total_distance = 1
        // top
        let cur_dist = 0
        let ii = 0
        do {
            ++ cur_dist
            ++ ii
        } while (i- ii > 0 && newInput[i - ii][j] < curTreeSize)
        current_total_distance *= cur_dist
        // bottom
        cur_dist = 0
        ii = 0
        do {
            ++ cur_dist
            ++ ii
        }  while (i + ii < HEIGHT - 1 && newInput[i + ii][j] < curTreeSize)
        current_total_distance *= cur_dist
        // left
        cur_dist = 0
        let jj = 0
        do {
            ++ cur_dist
            ++ jj
        } while (j- jj > 0 && newInput[i][j - jj] < curTreeSize)
        current_total_distance *= cur_dist
        // right
        cur_dist = 0
        jj = 0
        do {
            ++ cur_dist
            ++ jj
        } while (j + jj < WIDTH - 1 && newInput[i][j + jj] < curTreeSize)
        current_total_distance *= cur_dist
        max_distance = Math.max(max_distance,current_total_distance)
    }
}

console.log(`2nde question's answer : ${max_distance}`)