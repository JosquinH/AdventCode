const input = require('./input/input_20221202')

const resObj = {
 AX : 4, 
 AY : 8,
 AZ : 3,
 BX : 1,
 BY : 5, 
 BZ : 9,
 CX : 7,
 CY : 2,
 CZ : 6 
}

// 1

const res = input.map(x => resObj[x]).reduce((acc,y) => acc + y, 0)

console.log(`1st question's answer : ${res}`)

// 2

const resObj2 = {
    AX : 3, 
    AY : 4,
    AZ : 8,
    BX : 1,
    BY : 5, 
    BZ : 9,
    CX : 2,
    CY : 6,
    CZ : 7 
}

const res2 = input.map(x => resObj2[x]).reduce((acc,y) => acc + y, 0)

console.log(`2nde question's answer : ${res2}`)