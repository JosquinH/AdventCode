const fs = require('fs');
const filename = "input/input_20241205.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const PAGE_ORDERING_REG = /\d+\|\d+/
const G = {}
const PAGE_TO_PRODUCE = []

for (const line of input) {
    if (line.match(PAGE_ORDERING_REG)) {
        const [n1,n2] = line.split('|')
        if (G[n1] !== undefined) {
            G[n1].push(n2)
        } else {
            G[n1] = [n2]
        }
        if (G[n2] === undefined) {
            G[n2] = []
        }
    } else if (line !== '') {
        PAGE_TO_PRODUCE.push(line.split(','))
    }
}

const testOrder = (l) => {
    const size = l.length
    let orderOk = true; 
    for (let i = 1; i < size ; ++i) {
        orderOk = orderOk && G[l[i-1]].findIndex(x => x === l[i]) !== -1
    }
    if (orderOk) {
        console.log(l)
    }
    return orderOk
}

// Problème 1

let res1 = 0

for (const curPageToProduce of PAGE_TO_PRODUCE) {
    if (testOrder(curPageToProduce)) {
       res1 += (parseInt(curPageToProduce[Math.floor(curPageToProduce.length / 2)]))
    }
}

console.log(`Solution Problème 1 : ${res1}`)

// Problème 2

let res2 = 0

for (const curPageToProduce of PAGE_TO_PRODUCE) {
    if (!testOrder(curPageToProduce)) {
        let i = 0
        while (!testOrder([...curPageToProduce.slice(0,i),...curPageToProduce.slice(i+1)]) && i <= curPageToProduce.length) {
            ++i
        }
        console.log(parseInt(curPageToProduce[i]))
        res2 += parseInt(curPageToProduce[i])
    }
}

console.log(`Solution Problème 2 : ${res2}`)