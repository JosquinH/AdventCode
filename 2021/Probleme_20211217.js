const input = require('./input/input_20211217')

// 1

const possibleX = []

let i = 1
let curResult = 1

while (curResult < input.xmax) {
    ++i
    curResult = (i * (i + 1)) / 2
    if (curResult >= input.xmin && curResult <= input.xmax) {
        possibleX.push(i)
    }
}

let maxY = 0

for (let possibleY = Math.abs(input.ymax) + 1; possibleY < Math.abs(input.ymin); ++possibleY) {
    for (const curX of possibleX) {
        if (possibleY >= curX && possibleY > maxY) {
            maxY = possibleY
        }
    }
}

const maxHeight = (maxY * (maxY + 1)) / 2

console.log(`1st question's answer : ${maxHeight}`)

// 2

const MIN_Y = input.ymin
const MAX_Y = Math.abs(input.ymin)

const MIN_X = Math.min(...possibleX)
const MAX_X = input.xmax

let goodVelocityList = []

for (let startVx = MIN_X; startVx <= MAX_X; ++ startVx) {
    for (let startVy = MIN_Y; startVy <= MAX_Y; ++ startVy) {
        let x = 0
        let y = 0
        let vx = startVx
        let vy = startVy 

        isInTarget = false

        while (!isInTarget && y >= input.ymin) {
            x += vx
            y += vy
            if (vx > 0) {
                --vx   
            } else if (vx < 0) {
                ++vx
            }
            --vy

            if (x >= input.xmin && x <= input.xmax && y >= input.ymin && y <= input.ymax) {
                isInTarget = true
                goodVelocityList.push(`${startVx},${startVy}`)
            }
        }
    }
}

console.log(`2nd question's answer : ${goodVelocityList.length}`)
