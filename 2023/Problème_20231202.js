const fs = require('fs');
const filename = "input/input_20231202.txt"
const input = fs.readFileSync(filename, 'utf8').split('\n')

const games = []

for (const line of input) {
    const gameSet = line.split(':')[1].split(';').map(
        game => game.split(',').reduce((acc,cube) => {
            const [numberOfCube, cubeColor] = cube.trim().split(' ')
            acc[cubeColor] = parseInt(numberOfCube)
            return acc
        },{})
    )
    games.push(gameSet)
}

console.log(games[0])
/**
 * Problème 1
 */

const testObj = { red: 12, green: 13, blue: 14 }
let total = 0

for (let i=0;i<games.length;++i) {
    const game = games[i]
    let j = 0
    let validGame = true
    while (j < game.length && validGame) {
        validGame = Object.keys(game[j]).every(color => game[j][color] <= testObj[color])
        ++j
    }
    if (validGame) {
        total += i + 1
    }
}

console.log(`Solution Problème 1 : ${total}`)

/**
 * Problème 2
 */

let minObj = {red: 0, green: 0, blue: 0}

let total1 = 0

for (const game of games) {
    const res = {...minObj}
    for (const cubes of game) {
        for(const color of Object.keys(cubes)) {
            if (cubes[color] > res[color]) {
                res[color] = cubes[color]
            }
        }
    }
    total1 += Object.keys(res).reduce((acc,color) => acc * res[color],1)
}

console.log(`Solution Problème 2 : ${total1}`)