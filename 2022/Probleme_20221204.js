const input = require('./input/input_20221204')

let numberOfOverlaps = 0
let numberOfAllOverlaps = 0

// 1


for (sectionPairs of input) {
    
    let [section1, section2] = sectionPairs.split(',')

    let [s1Start,s1End] = section1.split('-').map(x => parseInt(x))
    let [s2Start,s2End] = section2.split('-').map(x => parseInt(x))
    
    if ((s1Start >= s2Start && s1End <= s2End) || (s2Start >= s1Start && s2End <= s1End)) {
        numberOfOverlaps += 1
        numberOfAllOverlaps += 1
    } else if (
        (s1Start >= s2Start && s1Start <= s2End) || (s1End >= s2Start && s1End <= s2End) || 
        (s2Start >= s1Start && s2Start <= s1End) || (s2End >= s1Start && s2End <= s1End)) {
            numberOfAllOverlaps += 1
    }
}

console.log(`1st question's answer : ${numberOfOverlaps}`)

// 2

console.log(`2nde question's answer : ${numberOfAllOverlaps}`)