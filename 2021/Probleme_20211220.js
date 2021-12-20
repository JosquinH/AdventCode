const {ehancementString, image} = require('./input/input_20211220')

const ORIGINAL_IMAGE_WIDTH = image.length
const ORIGINAL_IMAGE_HEIGHT = image[0].length
const NUMBER_OF_STEP = 2
const ehancementStringTable = ehancementString.split('')
let dotString = ''
let j = 0

while(j < ORIGINAL_IMAGE_WIDTH + 2 * (NUMBER_OF_STEP + 1)) {
    dotString += '.'
    ++j
}

const fromBinToDec = x => x.split('').reduce((acc,y) => (acc * 2) + parseInt(y),0)

// INITIALISATION

const newImage = []

// Haut DE l'image
for (let i = 0; i < NUMBER_OF_STEP + 1; ++ i) {
    newImage.push(dotString.split(''))
}

// Image
for (let i = 0; i < ORIGINAL_IMAGE_HEIGHT; ++ i) {
    const curLine = dotString.split('')
    const curLineImage =  image[i]
    const finalLine = (curLine.slice(0,NUMBER_OF_STEP + 1).join('') + curLineImage + curLine.slice(0,NUMBER_OF_STEP + 1).join('')).split('')
    newImage.push(finalLine)
}

// Bas de l'image

for (let i = 0; i < NUMBER_OF_STEP + 1; ++ i) {
    newImage.push(dotString.split(''))
}

/* for (const line of newImage) {
    console.log(line.join(''))
}

console.log('\n') */

const newImageStartHeight = NUMBER_OF_STEP + 1
const newImageEndHeight = NUMBER_OF_STEP + 1 + ORIGINAL_IMAGE_HEIGHT

const newImageStartWidth = NUMBER_OF_STEP + 1
const newImageEndWidth = NUMBER_OF_STEP + 1 + ORIGINAL_IMAGE_WIDTH

// 1

for (let step = 1; step <= NUMBER_OF_STEP; ++step) {
    // On créer la nouvelle image courrante
    const newCurImage = []
    for (let i = newImageStartHeight - step; i < newImageEndHeight + step; ++i ) {
        const curLine = []
        for (let j = newImageStartWidth - step; j < newImageEndWidth + step; ++j ) {
            let str = '' 
            str += newImage[i-1][j-1] === '#' ? '1' : '0'
            str += newImage[i-1][j] === '#' ? '1' : '0'
            str += newImage[i-1][j + 1] === '#' ? '1' : '0'
            str += newImage[i][j - 1] === '#' ? '1' : '0'
            str += newImage[i][j] === '#' ? '1' : '0'
            str += newImage[i][j+1] === '#' ? '1' : '0'
            str += newImage[i + 1][j - 1] === '#' ? '1' : '0'
            str += newImage[i + 1][j] === '#' ? '1' : '0'
            str += newImage[i + 1][j+1] === '#' ? '1' : '0'
            const curIndex = fromBinToDec(str)
            curLine.push(ehancementStringTable[curIndex])
           /*  for (let k = i - 1; k <= i + 1 ; ++k) {
                console.log (newImage[k].slice(j-1, j + 2).join(''))
            } */
            //console.log(curIndex)
        }
        newCurImage.push(curLine)
    }
    // On place curImage dans newImage

    for (let i = newImageStartHeight - step; i < newImageEndHeight + step; ++i ) {
        for (let j = newImageStartWidth - step; j < newImageEndWidth + step; ++j ) {
            newImage[i][j] = newCurImage[i - newImageStartHeight + step][j - newImageStartWidth + step]
        }
    }

    /* for (const l of newImage) {
        console.log(l.join(''))
    }

    console.log('\n') */
}

const res1 = newImage.reduce((acc,x) => acc + x.filter(y => y === '#').length ,0)

console.log(`1st question's answer : ${res1}`)