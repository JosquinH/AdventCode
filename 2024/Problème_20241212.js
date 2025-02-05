const fs = require('fs');

const filename = "input/input_20241212.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n').map(x => x.split(''))

const HEIGHT = input.length

const WIDTH = input[0].length

const regionList = []

const pointPlaceObj = {}

for (let i = 0; i < HEIGHT; ++i) {
    for (let j = 0; j < WIDTH; ++j) {
        if (pointPlaceObj[`${i};${j}`] === undefined) {
            const region = {flower: input[i][j], pointList: []}
            const FIL = [[i,j]]
            while (FIL.length > 0) {

                const [curI,curJ] = FIL.shift()
                pointPlaceObj[`${i};${j}`] = true
                let nbContour = 0

                // Verif Haut

                if (curI - 1 >= 0 && input[curI - 1][curJ] === region.flower) {
                    if (pointPlaceObj[`${curI - 1};${curJ}`] === undefined) {
                        pointPlaceObj[`${curI - 1};${curJ}`] = true
                        FIL.push([curI -1,curJ])
                    }
                } else {
                    ++nbContour
                }

                // Verif Bas

                if (curI + 1 < HEIGHT && input[curI + 1][curJ] === region.flower) {
                    if (pointPlaceObj[`${curI + 1};${curJ}`] === undefined) {
                        pointPlaceObj[`${curI + 1};${curJ}`] = true
                        FIL.push([curI +1,curJ])
                    } 
                } else {
                    ++nbContour
                }

                // Verif Gauche

                if (curJ - 1 >= 0 && input[curI][curJ - 1] === region.flower) {
                    if (pointPlaceObj[`${curI};${curJ - 1}`] === undefined) {
                        pointPlaceObj[`${curI};${curJ - 1}`] = true
                        FIL.push([curI,curJ - 1])
                    }
                } else {
                    ++nbContour
                }

                // Verif Droite

                if (curJ + 1 < WIDTH && input[curI][curJ + 1] === region.flower) {
                    if (pointPlaceObj[`${curI};${curJ + 1}`] === undefined) {
                        pointPlaceObj[`${curI};${curJ + 1}`] = true
                        FIL.push([curI,curJ + 1])
                    }
                } else {
                    ++nbContour
                }

                region.pointList.push({i : curI, j: curJ, nbContour : nbContour})
            }
            regionList.push(region)
        }
    }
}

// Problème 1

const res1 = regionList.reduce((acc,region) => {
    const area = region.pointList.length
    const perimetre = region.pointList.reduce((acc1,x) => acc1 + x.nbContour,0)
    return acc + (area * perimetre)
},0)

console.log(`Solution Problème 1 : ${res1}`)