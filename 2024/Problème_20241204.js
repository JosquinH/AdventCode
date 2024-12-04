const fs = require('fs');
const filename = "input/input_20241204.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const HEIGHT = input.length
const WIDTH = input[0].length

verifyMASForCouple = (couple1,couple2,couple3) => {
    return input[couple1[0]].charAt(couple1[1]) === 'M' 
    && input[couple2[0]].charAt(couple2[1]) === 'A' 
    && input[couple3[0]].charAt(couple3[1]) === 'S'
}



// Problème 1

let res1 = 0;

for (let i = 0; i < HEIGHT; ++i) {

    const deplacementHautOk = (i - 3) >= 0
    const deplacementBasOk = (i + 3) < HEIGHT

    for (let j = 0; j < input.length; ++ j) {
        if (input[i].charAt(j) === 'X') {

            const deplacementGaucheOk = (j - 3) >= 0
            const deplacementDroiteOk = (j - 3) < WIDTH

            // Gauche

            if (deplacementGaucheOk) {
                res1 += verifyMASForCouple([i,j-1],[i,j-2],[i,j-3]) ? 1 : 0
            }

            // Diagonale Haut Gauche

            if (deplacementGaucheOk && deplacementHautOk) {
                res1 += verifyMASForCouple([i-1,j-1],[i-2,j-2],[i-3,j-3]) ? 1 : 0
            }

            // Haut

            if (deplacementHautOk) {
                res1 += verifyMASForCouple([i-1,j],[i-2,j],[i-3,j]) ? 1 : 0
            }

            // Diagonale Haut Droite

            if (deplacementHautOk && deplacementDroiteOk) {
                res1 += verifyMASForCouple([i-1,j+1],[i-2,j+2],[i-3,j+3]) ? 1 : 0
            }

            // Droite

            if (deplacementDroiteOk) {
                res1 += verifyMASForCouple([i,j+1],[i,j+2],[i,j+3]) ? 1 : 0
            }

            // Diagonale Bas Droite

            if (deplacementBasOk && deplacementDroiteOk) {
                res1 += verifyMASForCouple([i+1,j+1],[i+2,j+2],[i+3,j+3]) ? 1 : 0
            }

            // Bas

            if (deplacementBasOk) {
                res1 += verifyMASForCouple([i+1,j],[i+2,j],[i+3,j]) ? 1 : 0
            }

            // Diagonale Bas Gauche

            if (deplacementBasOk && deplacementGaucheOk) {
                res1 += verifyMASForCouple([i+1,j-1],[i+2,j-2],[i+3,j-3]) ? 1 : 0
            }

        }
    }
}

console.log(`Solution Problème 1 : ${res1}`)

// Problème 2

let res2 = 0;

for (let i = 1; i < HEIGHT - 1; ++i) {
    for (let j = 1; j < WIDTH -1; ++j) {
        if (input[i].charAt(j) === 'A') {
            const lettreHautGauche = input[i-1].charAt(j-1)
            const lettreHautDroite = input[i-1].charAt(j+1)
            const lettreBasDroite = input[i+1].charAt(j+1)
            const lettreBasGauche = input[i+1].charAt(j-1)

            const matchMAS = ((lettreHautGauche === 'M' && lettreBasDroite === 'S') || (lettreHautGauche === 'S' && lettreBasDroite === 'M'))
            &&  ((lettreHautDroite === 'M' && lettreBasGauche === 'S') || (lettreHautDroite === 'S' && lettreBasGauche === 'M'))

            res2 += matchMAS ? 1 : 0
        }
    }
}

console.log(`Solution Problème 2 : ${res2}`)







