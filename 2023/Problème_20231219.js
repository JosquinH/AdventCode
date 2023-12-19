const fs = require('fs')
const filename = "input/input_20231219.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

let line = input.shift()

// Préparation des workflows

const WORKFLOWS = {}
while (line !== '') {
    let [name,obj] = line.split('{')
    obj = obj.slice(0,obj.length - 1)
    const tableCondition = []
    for (const condition of obj.split(',')) {
        if (condition.match(':')) {
            const [rule,destination] = condition.split(':')
            const comparator = rule.match('<') ? '<' : '>'
            const idxComparator = rule.split('').findIndex(x => x === comparator)
            tableCondition.push([rule.slice(0,idxComparator),comparator,parseInt(rule.slice(idxComparator+1)),destination])
        } else {
            tableCondition.push([condition])
        }
    }
    WORKFLOWS[name] = tableCondition
    line = input.shift()
}

// Fonction utilitaire qui test une ligne avec le workflow

const objComparator = {'<' : (a,b) => a < b, '>': (a,b) => a > b}

const acceptedByWorkflow = (partsObj) => {
    let destination = 'in'
    while (destination !== 'A' && destination !== 'R') {
        const curWorkflow = WORKFLOWS[destination]
        destination = ''
        let i = 0
        while (destination === '') {
            if (curWorkflow[i].length === 1) {
                destination = curWorkflow[i][0]
            } else {
                const valueToCompare = partsObj[curWorkflow[i][0]]
                const comparator = curWorkflow[i][1]
                if (objComparator[comparator](valueToCompare,curWorkflow[i][2])) {
                    destination = curWorkflow[i][3]
                }
            }
            ++i
        }
    }
    return destination === 'A'
}


// Problème 1

let total = 0

for (let line of input) {
    line = line.slice(1,line.length - 1)
    const lineObj = {}
    for (const variables of line.split(',')) {
        const [key,value] = variables.split('=')
        lineObj[key] = parseInt(value)
    }
    if (acceptedByWorkflow(lineObj)) {
        total += Object.values(lineObj).reduce((acc,x) => acc + x,0)
    }
}

console.log(`Solution Problème 1 : ${total}`)

// Problème 2

const countNumberOfCombinaison = (rangesObj,destination) => {

    if (destination === 'R') {
        return 0
    }
    
    if (destination === 'A') {
        return Object.values(rangesObj).reduce((acc,[lowerBound,upperBound]) => acc * (upperBound - lowerBound + 1),1)
    }

    let total = 0

    const rules = WORKFLOWS[destination]
    
    const finalDestination = rules.pop()[0]

    let isBreak = false

    for (const [key,comparator, value, curDestination] of rules) {
        const [lowerBound,upperBound] = rangesObj[key]
        let trueRange,falseRange
        if (comparator === '<') {
            trueRange = [lowerBound, value - 1]
            falseRange = [value, upperBound]
        } else {
            trueRange = [value + 1, upperBound]
            falseRange = [lowerBound, value]
        }
        if (trueRange[0] <= trueRange[1]) {
            const curRanges = Object.entries(rangesObj).reduce((acc,[key,value]) => {acc[key] = [...value];return acc;},{})
            curRanges[key] = trueRange
            total += countNumberOfCombinaison(curRanges,curDestination)
        }
        if (falseRange[0] <= falseRange[1]) {
            rangesObj[key] = falseRange
        } else {
            isBreak = true
            break
        }
    }

    if (!isBreak) {
        total += countNumberOfCombinaison(rangesObj,finalDestination)
    }  

    return total
}

const rangesObj = 'xmas'.split('').reduce((acc,key) => {
    acc[key] = [1,4000]
    return acc
},{})

console.log(`Solution Problème 2 : ${countNumberOfCombinaison(rangesObj,'in')}`)