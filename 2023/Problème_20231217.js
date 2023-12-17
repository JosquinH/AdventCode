const fs = require('fs')
const PriorityQueue = require('priorityqueue/SkewHeap').default
const filename = "input/input_20231217.txt"

const input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split('').map(y => parseInt(y)))

const HEIGHT = input.length
const WIDTH = input[0].length

const tableDirection = [[1,0],[-1,0],[0,1],[0,-1]]

const comparator  = (a,b) => b[0] - a[0]

// Problème 1

const computeHeat = () => {
    const nodeVisits = {}
    const pq = new PriorityQueue({comparator })
    
    pq.push([0,0,0,0,0,0])
    while (!pq.isEmpty()) {

        const [curLen, curI, curJ, dirI, dirJ, curIt ] = pq.pop()
        
        if (curI === HEIGHT - 1 && curJ === WIDTH -1) {
            return curLen
        }

        const key = `${curI},${curJ},${dirI},${dirJ},${curIt}`

        if (nodeVisits[key] === undefined) {
            nodeVisits[key] = 1
            if (curIt < 3 && (dirI !== 0 || dirJ !== 0)) {
                const newI = curI + dirI
                const newJ = curJ + dirJ
                if (newI >= 0 && newI < HEIGHT && newJ >= 0 && newJ < WIDTH) {
                    pq.push([curLen + input[newI][newJ],newI,newJ,dirI,dirJ,curIt + 1])
                }
            }
            for (const [newDirI, newDirJ] of tableDirection) {
                if ((newDirI !== dirI || newDirJ !== dirJ) && (newDirI !== -dirI || newDirJ !== -dirJ)) {
                    const newI = curI + newDirI
                    const newJ = curJ + newDirJ
                    if (newI >= 0 && newI < HEIGHT && newJ >= 0 && newJ < WIDTH) {
                        pq.push([curLen + input[newI][newJ],newI,newJ,newDirI,newDirJ,1])
                    }
                }
            }
        }
    }
}


console.log(`Solution Problème 1 : ${computeHeat()}`)

// Problème 2

const computeHeat2 = () => {
    const nodeVisits = {}
    const pq = new PriorityQueue({comparator })
    pq.push([0,0,0,0,0,0])
    while (!pq.isEmpty()) {
        const [curLen, curI, curJ, dirI, dirJ, curIt ] = pq.pop()
        if (curI === HEIGHT - 1 && curJ === WIDTH -1 && curIt >= 4) {
            return curLen
        }

        const key = `${curI},${curJ},${dirI},${dirJ},${curIt}`

        if (nodeVisits[key] === undefined) {
            nodeVisits[key] = 1
            if (curIt < 10 && (dirI !== 0 || dirJ !== 0)) {
                const newI = curI + dirI
                const newJ = curJ + dirJ
                if (newI >= 0 && newI < HEIGHT && newJ >= 0 && newJ < WIDTH) {
                    pq.push([curLen + input[newI][newJ],newI,newJ,dirI,dirJ,curIt + 1])
                }
            }

            if (curIt >= 4 || (dirI === 0 && dirJ === 0)) {
                for (const [newDirI, newDirJ] of tableDirection) {
                    if ((newDirI !== dirI || newDirJ !== dirJ) && (newDirI !== -dirI || newDirJ !== -dirJ)) {
                        const newI = curI + newDirI
                        const newJ = curJ + newDirJ
                        if (newI >= 0 && newI < HEIGHT && newJ >= 0 && newJ < WIDTH) {
                            pq.push([curLen + input[newI][newJ],newI,newJ,newDirI,newDirJ,1])
                        }
                    }
                }
            }
        }
    }
}

console.log(`Solution Problème 2 : ${computeHeat2()}`)


