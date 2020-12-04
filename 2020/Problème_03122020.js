const input = [
'....#...#####..##.#..##..#....#',
'..##.#.#.........#.#......##...',
'#.#.#.##.##...#.......#...#..#.',
'..##.............#.#.##.....#..',
'##......#.............#....#...',
'.....##..#.....##.#.......##..#',
'.##.....#........##...##.#....#',
'.##......#.#......#.....#..##.#',
'##....#..#...#...#...##.#...##.',
'##........##.#...##......#.#.#.',
'..#.#........#...##.....#.....#',
'..#.......####.#....#..#####...',
'.##..#..#..##.#.....###.#..#...',
'......###..##.....#.#.#..###.#.',
'..#.#...#..##.....#....#.#.....',
'.....#.#...#.###.#..#..........',
'##.....#...#.#....#..#.#.......',
'..#...#...#.........##......#..',
'......#.#...#...#..#...##.#...#',
'....#.................##.##....',
'...#......#.............#....##',
'##..#..#..........#...##.#.#...',
'....#...##....#..#.#...........',
'##.#.#.#...#....#........#..#.#',
'...###..........#...#...#..##.#',
'..##.......###.#......##.##....',
'...........#.#....#.....#.#...#',
'..#......##.#...##.#.#......#.#',
'..........#.#....#.#..#....#...',
'##..##...##.......#.#....#.#.##',
'.##..#.#..#...........#.#...#.#',
'#......##......#....####.#....#',
'..###......##...#...#.#.......#',
'.#.##.##....##..#..##...#......',
'.#....#..#........#..#.##.#.#..',
'..#.........#.#.###....###.#...',
'..#..#.#.#..#..#.##.##...####..',
'#..#..#......#..#.#....#.#.#.##',
'..#.........#...#..#.#.#..#...#',
'#..#......###.....##....##.....',
'#..#.....#.#.#.##.....##...#.#.',
'##..#.#...#.........#.#........',
'#....#.......#.....#..#..#.#...',
'...###.##.###.###.#####..#...#.',
'.....#..#.#..##...............#',
'..#.....###.###.#.....#.#....##',
'###.#.........#..#.#.#..#.#..#.',
'.##.........#..#..##....#.#...#',
'.#...#........#...#.....#....#.',
'####..........###....#.#.#....#',
'....##..###....#....#.#...#....',
'..............##......##..#.###',
'.#...........###.#.#....#......',
'###.#..#..#...#.........##.....',
'..#.....##...#.#.....##...#.##.',
'.###.#........#..#.#...#.#..##.',
'.......##....##.........##.#..#',
'#....#...#...##...#.#..#..#..##',
'...#...##..#...#...#.#....#.#.#',
'#.#......#.#...##......#.#...##',
'.#.###..#.###.#.....#.##.##.#.#',
'#...#............#...#.##..##..',
'....#..###.......#.....##....#.',
'.#####..#.....#.....#...#.....#',
'..##..#..###.......##.#........',
'.#...##.##.....#.##...##...#..#',
'......###...#....#....#........',
'....#...#.#....#...#.#.#......#',
'....#..##...##.#..#....###.....',
'...#...#..#.#...#....#.#..#####',
'####....#.....#.........#.#....',
'...###.#.#..#.#..##............',
'.##..#####..#...#..#..#.......#',
'.###......#.#.#..#....#.....#..',
'#....##.##..#.#...............#',
'...#.#..#........#......#....#.',
'#.....#....###....#..#.#.#.....',
'.#..#....#...#.#.....##....#...',
'..#.##.#.##.#..#.##.#.....#.#..',
'.......#.......###..###..#...#.',
'.#.......#..#........#.#.......',
'.#.#...#.....#.##..##.....#....',
'#.......##....#......#.....##..',
'.#.....#...##...#..##.....#....',
'....#..#.#.......#.#.#.........',
'..#....#....##.##..#..##.##.#..',
'.#...#....##...#........#....#.',
'#.#......#...#....#...........#',
'.#....#..#..###.#.....#..#.....',
'..#..................#.....#...',
'..#...###..#..####.#..#.#.#.#..',
'...#........##...##..##..#....#',
'...#.....#........##..#.....#.#',
'#....#.....##.##......#...##...',
'...#####....#..##..##...#.#....',
'###.........#.#..#..#..##.#...#',
'##...#..##...#.##.#........#...',
'.#....#.#...#..#...#..#.#......',
'.#......##.#...#...#..#....#...',
'#..#.#.#......##.##.####..#....',
'.#...#.#.##...##.#...#...#.....',
'####.#.........#...##..##....##',
'.....###........###.##...#.#...',
'.##.....#.....#....##.....##...',
'.#.#...#####....##...##.....#..',
'....###..........#......##..#.#',
'..#.....#....#..#...#.....##..#',
'...##.##.#.######....#.#....##.',
'...#.#.#...#..#....##.........#',
'.#.#...##...#....#.#....##.....',
'...#..#.....#.....#.##.....#...',
'.#.#.#.....#.##.#....#.#....##.',
'#...#......###...#..###...#....',
'...##.#.#..#........##.......#.',
'.####.####......#........#.....',
'....#..#####....#......####....',
'#...##.#..#..#####.#...#......#',
'#.#....#..#.........###........',
'.##.........#....#......#.#....',
'...###.........####.#........##',
'..#..#........#.#..##......#..#',
'.##..#....#...##.####.#...#....',
'......#.......#..#..#.#.##.#...',
'.###....#.#...#.#.......##..#.#',
'#...#....#............#####....',
'...#.##......#####..#........#.',
'..#...##.....#...#..#.#........',
'...#.#...#...##...#..#....#....',
'..#..##.....#....#.#.###.......',
'.......##..#...#.............##',
'.....#.....#..##.##.....#......',
'.....##...#......#..##....#.###',
'.#...#.#.#.#.##.....##..###..#.',
'....##..........#.....###......',
'....#...#.#.#..#.......#....#..',
'..###...#...........##..###....',
'...#.##.......#....#....#.#....',
'##...#..##..#.##..........##..#',
'.##.....#..#......##..####.#.##',
'....##..#.#.###......#..#...#..',
'####..#.#....#...#....###.#.#..',
'###......#...##.##..#.##..#..#.',
'..#.#..#.#.#.....#...#..#.####.',
'.###.#...##...##....##......#.#',
'..#............#.##..#....#..#.',
'###.......#......###..#........',
'....##......###.....#.#..###...',
'..#...##...#......#..#.........',
'#..####.#....#.....###....#.#..',
'.#.#.#.......##....###.........',
'.......#.##.#####....#.#...####',
'.#...#....#....#.###..#.....#..',
'.###.#.#.###.###.#..####.##.#..',
'....#.........#.#.......##.....',
'#..#..#.#...........#.#.##..#.#',
'.#.....#..#...#.....#.##......#',
'..###.#............#.....####..',
'#.....##..##...#....####....#..',
'...#.....#..................#..',
'....#.###.#..#..#..##..#..##...',
'...##.#........#......#...##...',
'#................##....#...#...',
'..##......##.#.##..#....#.....#',
'.#..#.....#..........##.#.#....',
'.....#...####....#..#......#...',
'..#......###.#.#.#.#.......#..#',
'.##......#.......#....###.#....',
'#..#.#.#..#...#.#.##..##..#....',
'....#...##..#.#......#.##...#..',
'...###...#.##..#...#....#......',
'##......#.#...#.#.#.........#..',
'..#..........#...###.#.##....#.',
'...##.....#.....#...###..#.....',
'..####.#.....#.#.....#..#.#....',
'.#.....##...##.##.#.....#.####.',
'.......#.....#...##..........#.',
'.#...#.#....#####....###.#..#.#',
'.##.##....##...##.#.....#......',
'#......#.##..#..##.#.#.......#.',
'.#..#....###..#........##...#..',
'..#......##.......###..##...#..',
'.#..........#.#.......##.....#.',
'....##.....##.#.#.##........##.',
'..#.#..###..#..##...#.##...#...',
'.......#.....#..#...#...#.....#',
'##.#...#.#.#.##........#......#',
'..###.....##..#....#.......##..',
'#####..####...#.#..##.#...#..#.',
'#...####....#........#....#....',
'.#.#.#..#...##....#.......#.#..',
'...#....##..##..#..#..#####.###',
'...#......#.#..#......#...####.',
'.##.....##.##.#.####.#..##...#.',
'....#..#..##..##....#....#...##',
'##.###........#...##....#.....#',
'..#.#.#.......#....#..#....#...',
'......##.....##....#...#.....#.',
'#.#..#.#.......#....#.#.#......',
'.....###..#...#.....#..##..#...',
'......###.....#.#.#...#...##..#',
'.#..#.#....##...#...#........#.',
'#..###.#...####.#...#..........',
'.#.##.#..#..##..#..###..##...#.',
'.......#.#..........#.........#',
'#......###..##..#....###.......',
'..#............#.#........#...#',
'..##.#.............#......#..##',
'.#....#..#.#..#....###..#...#..',
'....##....#..##...###....#....#',
'.#....###.............#........',
'#..#...#..#....#.##.#.....##...',
'...........#.....#....#....#...',
'.##.##.#...#....##......##..##.',
'......#.#.##.#..##........#...#',
'....##...##...#...#...#.#......',
'.#...#....#...#......#.#...#..#',
'........##.....#.#..#...##..##.',
'##...#.....#.....####...#..#...',
'.#.#..##.##......#...#.#...#...',
'##...##.#......#....#.######.#.',
'##.....####.###......#.##.#....',
'.#.##....##........#...#..####.',
'.......#..#....##...#.#...#..#.',
'...##..........#..#........#..#',
'.##.....#...#...#.##.###.......',
'.##....#...#.#..#.....#...#....',
'..#...#.....#.####.#.........#.',
'#...#.##...#.#..#.#..#.###.#..#',
'.##..#.#.##.........####....###',
'.#..##........#..#.......#.....',
'......#.#####.#.........#.#...#',
'......#....#.#####...........#.',
'..##....##..#.#..#....#......##',
'#.#......#.##.#.##....#....#.#.',
'..#..##.#...#.......##.........',
'.....##.#...#..........#.......',
'...#........#..#...#.....##.###',
'....##.........#...#.#.....#...',
'.......#.#....#...#.......#...#',
'.#..#...##....#..#...........#.',
'.#....##.##.#..#..####.#.#.....',
'.##........#.....#..#......##..',
'.#..##......#......#..##..#....',
'###.....##.......#..##.#.......',
'.....##......#.#...##...##.....',
'.##....##..#..#####...#...#.##.',
'##...##.#....##.#.#.#....##....',
'.#.....#...#......#......##....',
'##.#............#...#....#.....',
'#..#.....#.....##.##.##..#..##.',
'......#..............#..#...#.#',
'....#.#....##......#..#...#....',
'.#...#..#...#......#..##....#.#',
'.....#......#..##...#.#....#...',
'#...............#.##..#......#.',
'.....#..##.#..#.#...###.....#..',
'...#..#..#...#....#..#..##.#...',
'.#...#...#..#......##...#......',
'....###............#.#.#....#..',
'#.#...#..#..#.#....#........#..',
'....#.#.#..#..#....#..#...##.#.',
'.#....#.#...#....#......#.#...#',
'##..#.#.#..#.....#...###....#.#',
'.##.....#.#...#..........#..#.#',
'#....#......#....#.#.#...#.....',
'#.#.....#.###.......#..#..#.#..',
'#.....##..#.###...#...##...#.##',
'.#.##....#.#.....##......###...',
'.#.......##................#...',
'.........#........####......#..',
'...##.###..#.....#.#.....##.#..',
'..#....#.#.#.##..........#.....',
'#..##.....#.............##.....',
'.##...#..#.......#.......#..#..',
'...#.................#......##.',
'....#....#.....#..###.#....###.',
'..#.#..#...#..#.....###....#.#.',
'.....###...#....#....#.#.##..##',
'...#...#.........####........#.',
'.......#..##.........#.........',
'.#......##.....#.#####...##....',
'....#.###...#.#....##..#......#',
'.##..#....#.#....#..#.###.....#',
'..#...#.#...#.##.....#.#....##.',
'#.#.#.#.....##...#.#..##..#....',
'.#............#.#.#..#...#...#.',
'...##.#..#..####.#.###..##.....',
'.##.....#.......#..##.#...##.#.',
'#.#...#..#.##...##...####..#..#',
'...##.......#.#.#.#.#.#...#..##',
'...#.#.##..##..............###.',
'.....#...#........#...#......#.',
'..#..#..##....#..##.#.....#....',
'#.....##........#.........##.#.',
'###..#....#.##..##.............',
'.#..#...#.#......#..#..##.....#',
'...#.#.#............##........#',
'..#.#....#..#....##....#...##.#',
'...##...#...#..........##.#####',
'....#..#.#.......##....#.#.###.',
'##..#..#..#...###.#.....#......',
'....###.#.#.#.##..##.#...#.....',
'.....####..#.#..#.#......#.#.#.',
'#.....#...#..#.#.........#..#..',
'.##....#.#.####......##..#..##.',
'......#.##.#.#..#..#....#.#....',
'.#..#...#...#...#..#.....#.....',
'..##.#..............#......#...',
'.....###.##.......#.....#..#...',
'..#.#..#..#.......#...##.##..#.',
'##.###......#......#.#..#..##..',
'..##.....#..#..#......#..#.....',
'...##.......#.#..#.........#.#.',
'......##.##.#.......#..#.#.....',
'#......#........##..#.......#.#',
'###....#...#...#.#...#..#..#...',
'#..###....#....####..#...#.....',
'....##..#.##.#....#..##...#.#..',
'#.##..#....##..#...#..#.#.#..#.',
'#.........#.....#...#.......#..',
'...#.....#.#.....#........##...',
'..#.##..#......#...#.....##.#..',
'...###....#.....#...#..#.##..#.'
]

// 1

const TREE = '#'
const SAFE = '.'

let nbTree = 0
let i = 0
let j = 0

const DEPTH = input.length
const WIDTH = input[0].length

const MOVE_RIGHT = 3
const MOVE_DOWN = 1

let parcours = input[0]
while (i < DEPTH) {
    
    i += MOVE_DOWN
    j = (j + MOVE_RIGHT) % WIDTH
    
    if (i < DEPTH) {
        if (input[i].charAt(j) === TREE) nbTree += 1
    
        // POUR FAIRE JOLIE
        const newInput = `${input[i].substring(0,j)}${input[i].charAt(j) === TREE ? 'X' : 'O'}${input[i].substring(j+1)}`
        parcours = `${parcours}\n${newInput}`
    }
    
}

console.log(parcours)
console.log(`Le nombre d'arbres rencontrés est de ${nbTree}`)