const input = require('./input/input_test')

const newInput = input.map(x => x.split(" "))

// 1

const tailPositionSet = new Set()

let headX = 0
let headY = 0

let tailX = 0
let tailY = 0

for (const curCommand of newInput) {
    const direction = curCommand[0]
    const step = parseInt(curCommand[1])

    let curHeadX = headX
    let curHeadY = headY

    let curTailX = tailX
    let curTailY = tailY
    
    /** Position
     *  T . .
     *  . H .
     *  . . .
     */

    if (curTailX < curHeadX && curTailY > curHeadY) {
        console.log("yoyo1")
        if (direction === 'U') {
            headY += step
            if (step > 2) {
                headX += 1
                for (let i = 3; i <= step; ++i) {
                    headY += 1
                    tailPositionSet.add(`${headX},${headY}`)
                }
            }

        } else if (direction === 'R') {
            headX += step
            headY -= 1
                for (let i = 1; i <= step; ++i) {
                    headX += 1
                    tailPositionSet.add(`${headX},${headY}`)
                }
        } else if (direction === 'D') {
            headY -= step
            headX += 1
                for (let i = 1; i <= step; ++i) {
                    headY -= 1
                    tailPositionSet.add(`${headX},${headY}`)
                }
        } else {
            headX -= step
        }
    }
    
    /** Position
     *  . T .
     *  . H .
     *  . . .
     */

    if (curTailX === curHeadX && curTailY > curHeadY) {
        console.log("yoyo2")
        if (direction === 'U') {
            headY += step

        } else if (direction === 'R') {
            headX += step
        } else if (direction === 'D') {
            headY -= step
        } else {
            headX -= step
        }
    }

    /** Position
     *  . . T
     *  . H .
     *  . . .
     */

    if (curTailX > curHeadX && curTailY > curHeadY) {
        console.log("yoyo3")
        if (direction === 'U') {
            headY += step

        } else if (direction === 'R') {
            headX += step
        } else if (direction === 'D') {
            headY -= step
        } else {
            headX -= step
        }
    }

    /** Position
     *  . . .
     *  T H .
     *  . . .
     */

    if (curTailX < curHeadX && curTailY === curHeadY) {
        console.log("yoyo4")
        if (direction === 'U') {
            headY += step

        } else if (direction === 'R') {
            headX += step
        } else if (direction === 'D') {
            headY -= step
        } else {
            headX -= step
        }
    }

    /** Position superposé
     *  . . .
     *  . H .
     *  . . .
     */

    if (curTailX === curHeadX && curTailY === curHeadY) {
        console.log("yoyo5")
        if (direction === 'U') {
            headY += step

        } else if (direction === 'R') {
            headX += step
        } else if (direction === 'D') {
            headY -= step
        } else {
            headX -= step
        }
    }

    /** Position
     *  . . .
     *  . H T
     *  . . .
     */

    if (curTailX > curHeadX && curTailY === curHeadY) {
        console.log("yoyo6")
        if (direction === 'U') {
            headY += step

        } else if (direction === 'R') {
            headX += step
        } else if (direction === 'D') {
            headY -= step
        } else {
            headX -= step
        }
    }

    /** Position
     *  . . .
     *  . H .
     *  T . .
     */

    if (curTailX < curHeadX && curTailY < curHeadY) {
        console.log("yoyo7")
        if (direction === 'U') {
            headY += step

        } else if (direction === 'R') {
            headX += step
        } else if (direction === 'D') {
            headY -= step
        } else {
            headX -= step
        }
    }

    /** Position
     *  . . .
     *  . H .
     *  . T .
     */

    if (curTailX === curHeadX && curTailY < curHeadY) {
        console.log("yoyo8")
        if (direction === 'U') {
            headY += step

        } else if (direction === 'R') {
            headX += step
        } else if (direction === 'D') {
            headY -= step
        } else {
            headX -= step
        }
    }

    /** Position
     *  . . .
     *  . H .
     *  . . T
     */

    if (curTailX > curHeadX && curTailY < curHeadY) {
        console.log("yoyo9")
        if (direction === 'U') {
            headY += step

        } else if (direction === 'R') {
            headX += step
        } else if (direction === 'D') {
            headY -= step
        } else {
            headX -= step
        }
    }

    console.log(headX, headY)
}
console.log(`1st question's answer : `)

console.log(`2nde question's answer : `)