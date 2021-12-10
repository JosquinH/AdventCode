const input = require('./input/input_20211210')

// 1

let sumOfErrors = 0

for (const curInput of input) {
    const stack = []
    let haveError = false
    let i = 0
    while (!haveError && i < curInput.length) {
        const c = curInput.charAt(i)
        if (c === '(' || c === '[' || c === '{' || c === '<') {
            stack.push(c)
        } else {
            const c1 = stack.pop()
            if (c === ')' && c1 !== '(') {
                haveError = true
                sumOfErrors += 3 
            } else if (c === ']' && c1 !== '[') {
                haveError = true
                sumOfErrors += 57 
            } else if (c === '}' && c1 !== '{') {
                haveError = true
                sumOfErrors += 1197
            } else if (c === '>' && c1 !== '<') {
                haveError = true
                sumOfErrors += 25137
            }
        }
        ++i
    }
}

console.log(`1st question's answer : ${sumOfErrors}`)

// 2

const sumOfCompletionsTable = []

for (const curInput of input) {
    
    const stack = []
    let haveError = false
    let i = 0

    while (!haveError && i < curInput.length) {
        const c = curInput.charAt(i)
        if (c === '(' || c === '[' || c === '{' || c === '<') {
            stack.push(c)
        } else {
            const c1 = stack.pop()
            if (c === ')' && c1 !== '(') haveError = true
            if (c === ']' && c1 !== '[') haveError = true
            if (c === '}' && c1 !== '{') haveError = true 
            if (c === '>' && c1 !== '<') haveError = true
        }
        ++i
    }

    if (!haveError) {
        let curSum = 0
        while (stack.length !== 0) {
            const c = stack.pop()
            if (c === '(') curSum = (curSum * 5) + 1
            if (c === '[') curSum = (curSum * 5) + 2
            if (c === '{') curSum = (curSum * 5) + 3
            if (c === '<') curSum = (curSum * 5) + 4
        }
        sumOfCompletionsTable.push(curSum)
    }
}

sumOfCompletionsTable.sort((a,b) => a - b)

console.log(`2nd question's answer : ${sumOfCompletionsTable[(sumOfCompletionsTable.length - 1)/ 2]}`)