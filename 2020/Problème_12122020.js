const input = [
    'S1', 'F17', 'S3', 'F56', 'W5', 'F11', 'N4', 'F94', 'W4', 'S1', 'L180', 'E2', 'F38', 'S3', 'F46', 'L90', 'N2', 'S3', 'W3', 'L90', 'E1', 'L180', 'F73', 'L90', 'E1', 'N3', 'R90', 'S5', 'E5',
    'L90', 'W2', 'F1', 'E5', 'R270', 'W3', 'S4', 'W5', 'F55', 'E2', 'L90', 'W5', 'L90', 'E1', 'L90', 'F9', 'W5', 'F21', 'E4', 'F63', 'E1', 'F48', 'N1', 'F80', 'E5', 'L90', 'N1', 'E1', 'S4', 'R180', 'F48', 'F87',
    'N5', 'W2', 'F90', 'S4', 'E5', 'F76', 'F37', 'R180', 'E5', 'F51', 'S3', 'R90', 'F79', 'F25', 'L90', 'W1', 'F100', 'S2', 'E3', 'L90', 'N1', 'W4', 'F41', 'S5', 'L90', 'W5', 'L90', 'W2', 'S4', 'W3', 'F75', 'L90',
    'F20', 'E5', 'N5', 'R90', 'F99', 'N4', 'N1', 'L90', 'N5', 'N2', 'E2', 'S4', 'F29', 'L180', 'N1', 'W3', 'L90', 'W3', 'L180', 'F84', 'F25', 'E1', 'S3', 'R90', 'F64', 'L90', 'E1', 'F40', 'N3', 'R90', 'N3', 'F67',
    'F37', 'L90', 'F17', 'E4', 'F87', 'N3', 'W5', 'S2', 'R90', 'E4', 'N1', 'W4', 'F75', 'E2', 'F18', 'R90', 'F6', 'S4', 'F13', 'E1', 'L270', 'F50', 'W2', 'R90', 'W4', 'S5', 'R90', 'F14', 'L180', 'N5', 'L180', 'F78',
    'E1', 'S3', 'R90', 'E2', 'R270', 'E4', 'S1', 'L90', 'L180', 'F91', 'W3', 'W5', 'F45', 'N4', 'F44', 'L90', 'N3', 'L90', 'S2', 'L90', 'F76', 'W3', 'R90', 'F3', 'W3', 'F24', 'L90', 'F83', 'W2', 'F19', 'S4', 'L90',
    'N4', 'E5', 'L180', 'N5', 'W5', 'F67', 'S3', 'R90', 'E4', 'F51', 'L90', 'E5', 'L90', 'F79', 'E2', 'N2', 'W4', 'E2', 'L90', 'F41', 'E4', 'N2', 'L90', 'N2', 'L90', 'N3', 'F51', 'F79', 'N2', 'W2', 'N5', 'W4', 'F60',
    'N3', 'R90', 'W4', 'S1', 'F59', 'W1', 'F3', 'N5', 'L180', 'N5', 'F23', 'N4', 'E3', 'R90', 'F14', 'W4', 'F86', 'L90', 'N2', 'S1', 'W3', 'R90', 'N1', 'F25', 'L90', 'F22', 'E5', 'F88', 'L270', 'F14', 'N5', 'F32',
    'N1', 'F98', 'S1', 'W2', 'E5', 'L180', 'E4', 'S2', 'F46', 'L180', 'W4', 'F87', 'E2', 'F83', 'R90', 'S5', 'F68', 'E5', 'F95', 'N1', 'F43', 'E2', 'F64', 'S3', 'F5', 'S1', 'W3', 'L90', 'E4', 'L90', 'F63', 'S3', 'F44',
    'N4', 'R90', 'F95', 'S5', 'W1', 'N4', 'W4', 'F87', 'W3', 'N3', 'L180', 'W4', 'R180', 'N2', 'E2', 'N2', 'L90', 'W5', 'R90', 'W1', 'F22', 'L180', 'N4', 'W1', 'S1', 'R90', 'N3', 'R180', 'S5', 'W4', 'R90', 'E3', 'S1',
    'E3', 'N1', 'L270', 'F96', 'E2', 'N1', 'F98', 'W4', 'L90', 'W1', 'W4', 'R90', 'W2', 'S3', 'F64', 'S3', 'F67', 'N2', 'R180', 'S5', 'F13', 'N4', 'F53', 'W1', 'N1', 'L90', 'F54', 'S1', 'E2', 'F28', 'R90', 'W3', 'L90',
    'E3', 'N4', 'F34', 'R90', 'F51', 'L90', 'F24', 'R180', 'W4', 'N2', 'F88', 'F78', 'S2', 'E1', 'N2', 'L180', 'F58', 'E4', 'R90', 'N4', 'L90', 'N5', 'R180', 'N5', 'R270', 'W3', 'F41', 'S4', 'F61', 'R90', 'F71', 'S1',
    'F9', 'R90', 'F47', 'W2', 'N4', 'L180', 'W5', 'F52', 'L90', 'N4', 'F11', 'W3', 'L90', 'W5', 'N4', 'F10', 'S1', 'F75', 'S5', 'L90', 'S2', 'F28', 'L90', 'F80', 'E3', 'R180', 'E4', 'F42', 'E4', 'F85', 'N1', 'W4',
    'R90', 'E2', 'F38', 'R90', 'F77', 'F95', 'L90', 'S5', 'F86', 'R90', 'N1', 'E2', 'R90', 'N3', 'F28', 'R180', 'N5', 'F25', 'E3', 'F52', 'N4', 'E3', 'N4', 'E3', 'F37', 'L180', 'N1', 'E2', 'L180', 'E5', 'F82', 'N4',
    'F100', 'N3', 'E3', 'L90', 'W3', 'S1', 'R270', 'E5', 'W5', 'R90', 'F44', 'F15', 'R180', 'S3', 'L90', 'E4', 'F44', 'R90', 'N1', 'E4', 'N4', 'F62', 'R90', 'S4', 'L180', 'S1', 'F13', 'E3', 'F70', 'L270', 'F52',
    'L270', 'F80', 'L90', 'F89', 'N4', 'F79', 'W5', 'F55', 'R90', 'F62', 'E4', 'F91', 'R180', 'E2', 'F74', 'R90', 'F18', 'L90', 'E3', 'N5', 'E2', 'R90', 'W2', 'R180', 'N3', 'F69', 'W3', 'R90', 'F92', 'E2', 'F48',
    'N2', 'L90', 'S3', 'F49', 'E3', 'L180', 'F6', 'R90', 'S5', 'F58', 'F67', 'E5', 'S2', 'L90', 'W5', 'F3', 'S1', 'F73', 'W1', 'E4', 'R180', 'N3', 'E2', 'F72', 'L90', 'S1', 'F31', 'W1', 'F44', 'L180', 'F100', 'W3',
    'N1', 'W5', 'L90', 'S2', 'N3', 'R90', 'W4', 'S5', 'F62', 'E5', 'F55', 'L180', 'W2', 'L90', 'E1', 'F45', 'S3', 'W2', 'F49', 'N4', 'L90', 'E3', 'N2', 'R180', 'E5', 'N1', 'N5', 'E5', 'R90', 'W3', 'F73', 'E3', 'F66',
    'L90', 'S2', 'E3', 'F100', 'S3', 'W2', 'S4', 'W5', 'R180', 'E4', 'S3', 'S1', 'W2', 'R90', 'F22', 'R90', 'F76', 'L270', 'S5', 'F95', 'L90', 'N3', 'F16', 'R270', 'S3', 'N5', 'F66', 'R90', 'F63', 'W5', 'F37', 'N2',
    'L90', 'W1', 'F68', 'R90', 'F98', 'E4', 'S3', 'R90', 'E2', 'S1', 'F91', 'E1', 'F42', 'E1', 'F13', 'S4', 'F10', 'R180', 'E4', 'R90', 'N2', 'W4', 'L180', 'N5', 'R90', 'N3', 'F26', 'R90', 'F42', 'L180', 'E5', 'S3',
    'L90', 'S3', 'E3', 'F79', 'R270', 'E4', 'F54', 'N5', 'W3', 'F16', 'W1', 'S3', 'R90', 'F100', 'S1', 'W3', 'N2', 'E1', 'S4', 'F1', 'R180', 'F66', 'W2', 'R90', 'W2', 'F27', 'E2', 'F16', 'R90', 'S3', 'F61', 'E1', 'F4',
    'L90', 'N5', 'F45', 'L90', 'N1', 'L90', 'F50', 'W1', 'R90', 'N1', 'F44', 'S2', 'F53', 'S5', 'F59', 'E4', 'S3', 'E2', 'N5', 'E2', 'L90', 'E4', 'L90', 'N1', 'L90', 'N5', 'F31', 'R180', 'N2', 'F18', 'E2', 'F27', 'L90',
    'F57', 'R90', 'F40', 'R180', 'E2', 'F94', 'S3', 'E2', 'S4', 'E4', 'R90', 'L90', 'E5', 'N5', 'E1', 'N3', 'F97', 'S3', 'F16', 'E3', 'W5', 'F80', 'S1', 'W2', 'S4', 'F18', 'N4', 'E5', 'R90', 'N1', 'F43', 'N4', 'E4',
    'N1', 'E2', 'W1', 'F99', 'W4', 'F79', 'F20', 'E3', 'F63', 'W4', 'F21', 'E1', 'F82', 'E3', 'R90', 'F8', 'N5', 'W2', 'L180', 'W5', 'F13', 'S2', 'L90', 'N3', 'R180', 'N4', 'F9', 'L90', 'F39'
]

const input_test = ['F10', 'N3', 'F7', 'R90', 'F11']

const DIRECTIONS = ['E', 'S', 'W', 'N']
const DIRECTIONS_INDEX = { E: 0, N: 1, W: 2, S: 3 }


// 1

let curMove = 'E'
let curIndex = 0
let curX = 0 // E + / W -
let curY = 0 // N + / W -

for (const instruction of input) {
    const curDirection = instruction.charAt(0)
    const nbMove = parseInt(instruction.substring(1))

    if (curDirection === 'F') {
        switch (curMove) {
            case 'E': curX += nbMove; break;
            case 'W': curX -= nbMove; break;
            case 'N': curY += nbMove; break;
            case 'S': curY -= nbMove; break;
        }
        // console.log(instruction, curX, curY)
    } else if (!(curDirection === 'R' || curDirection === 'L')) {
        switch (curDirection) {
            case 'E': curX += nbMove; break;
            case 'W': curX -= nbMove; break;
            case 'N': curY += nbMove; break;
            case 'S': curY -= nbMove; break;
        }
        // console.log(instruction, curX, curY)
    } else {
        if (curDirection === 'R') {
            curIndex = (curIndex + (nbMove / 90)) % 4
        } else {
            curIndex = (4 + curIndex - (nbMove / 90)) % 4
        }
        curMove = DIRECTIONS[curIndex]
        // console.log(instruction, curX, curY , `newCurMove ${curMove}`)
    }

}

console.log(`Résultat : ${Math.abs(curX) + Math.abs(curY)}`)

// 2

const DIRECTIONS_MULTIPLE = ['NE', 'SE', 'SW', 'NW']

curX = 0
curY = 0

let curMulitpleIndex = 0

curMoveX = 'E'
curDistanceX = 10

curMoveY = 'N'
curDistanceY = 1

for (const instruction of input) {
    const curDirection = instruction.charAt(0)
    const nbMove = parseInt(instruction.substring(1))
    if (curDirection === 'F') {
        switch (curMoveX) {
            case 'E': curX = curX + (curDistanceX * nbMove); break;
            case 'W': curX = curX - (curDistanceX * nbMove); break;
        }

        switch (curMoveY) {
            case 'N': curY = curY + (curDistanceY * nbMove); break;
            case 'S': curY = curY - (curDistanceY * nbMove); break;
        }

        console.log(instruction, `Position : (${curX},${curY}), Waypoint: (${curDistanceX},${curDistanceY})`)
    } else if (!(curDirection === 'R' || curDirection === 'L')) {
        switch (curDirection) {
            case 'E': curDistanceX = curMoveX === 'E' ? curDistanceX + nbMove : curDistanceX - nbMove; break;
            case 'W': curDistanceX = curMoveX === 'E' ? curDistanceX - nbMove : curDistanceX + nbMove; break;
            case 'N': curDistanceY = curMoveY === 'N' ? curDistanceY + nbMove : curDistanceY - nbMove; break;
            case 'S': curDistanceY = curMoveY === 'N' ? curDistanceY - nbMove : curDistanceY + nbMove; break;
        }
        console.log(instruction, `Position : (${curX},${curY}), Waypoint: (${curDistanceX},${curDistanceY})`)
    } else {
        if (curDirection === 'R') {
            curMulitpleIndex = (curMulitpleIndex + (nbMove / 90)) % 4
        } else {
            curMulitpleIndex = (4 + curMulitpleIndex - (nbMove / 90)) % 4
        }

        if (nbMove % 180 !== 0) {
            let temp = curDistanceY
            curDistanceY = curDistanceX
            curDistanceX = temp
        }

        const curMultipleDirection = DIRECTIONS_MULTIPLE[curMulitpleIndex].split('')
        curMoveY = curMultipleDirection[0]
        curMoveX = curMultipleDirection[1]
        console.log(instruction, `Position : (${curX},${curY}), newCurMove : (${curMoveX}:${curDistanceX}, ${curMoveY}:${curDistanceY})`)
    }
}

console.log(`Résultat : ${Math.abs(curX) + Math.abs(curY)}`)