const fs = require('fs')
const filename = "input/input_20231220.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n')

const [modulesObj,conjunctionModuleObj,flipflopModuleObj] = input.reduce((acc,line) => {
    const [key,value] = line.split('->').map(x => x.trim())
    if (key === 'broadcaster') {
        acc[0][key] = ['start',value.split(',').map(x => x.trim())]
    } else {
        acc[0][key.slice(1)] = [key.charAt(0),value.split(',').map(x => x.trim())]
        if (key.charAt(0)=== '&') {
            acc[1][key.slice(1)] = {}
        } else {
            acc[2][key.slice(1)] = 'off'
        }
    }  
    return acc
},[{},{},{}])

for (const [key,values] of Object.entries(modulesObj)) {
    for (const moduleDestination of values[1]) {
        if (Object.keys(conjunctionModuleObj).findIndex(x => x === moduleDestination) !== -1) {
            conjunctionModuleObj[moduleDestination][key] = 0
        }
    }
}

const PREC_RX = Object.keys(modulesObj).find(key => modulesObj[key][1].findIndex(x => x === 'rx') !== -1)

const cyclesObj = Object.keys(modulesObj).filter(key => modulesObj[key][1].findIndex(x => x === PREC_RX) !== -1).reduce((acc,x) => {acc[x] = 0;return acc;},{})

// Fonctions utilitaires

const computeNumberOfSignal = (checkModules,numberOfPush) => {
    const OPEN = [[0,'broadcaster','']]
    const total = [0,0]
    while (OPEN.length !== 0) {
        let [signal, destination,moduleFrom] = OPEN.shift()
        total[signal] = total[signal] + 1
        if (modulesObj[destination] !== undefined) {
            if(destination === 'broadcaster') {
                OPEN.push(...modulesObj[destination][1].map(x => [signal,x,destination]))
            } else if (modulesObj[destination][0] === '%' && signal === 0) {
                if (flipflopModuleObj[destination] === 'off') {
                    flipflopModuleObj[destination] = 'on'
                    signal = 1
                } else {
                    flipflopModuleObj[destination] = 'off'
                    signal = 0
                }
                OPEN.push(...modulesObj[destination][1].map(x => [signal,x,destination]))
            } else if (modulesObj[destination][0] === '&') {
                conjunctionModuleObj[destination][moduleFrom] = signal
                if (Object.values(conjunctionModuleObj[destination]).every(x => x === 1)) {
                    signal = 0
                } else {
                    signal = 1
                }
                OPEN.push(...modulesObj[destination][1].map(x => [signal,x,destination]))
            }        
        }
        if (checkModules) {
            if (signal === 1 && cyclesObj[destination] !== undefined) {
                cyclesObj[destination] = numberOfPush
            }
        }
    }
    return total
}

const PGCD = (a,b) => {
    let a1 = Math.max(a,b)
    let b1 = Math.min(a,b)
    
    while (b1 !== 0) {
        const r = a1 % b1
        a1 = b1
        b1 = r
    }

    return a1
}

// Problème 1

const total = [0,0]

for (let i=0;i < 1000; ++i) {
    const [lowNumber,highNumber] = computeNumberOfSignal(false,0)
    total[0] = total[0] + lowNumber
    total[1] = total[1] + highNumber
}

console.log(`Solution Problème 1 : ${total[0] * total[1]}`)

// Problème 2


for (const key of Object.keys(flipflopModuleObj)) {
    flipflopModuleObj[key] = 'off'
}

for (const key of Object.keys(conjunctionModuleObj)) {
    for (const key1 of Object.keys(conjunctionModuleObj[key])) {
        conjunctionModuleObj[key][key1] = 0
    }
}

let numberOfPush = 0

while (Object.values(cyclesObj).findIndex(x => x === 0) !== -1) {
    ++numberOfPush
    computeNumberOfSignal(true,numberOfPush)
}

const res = Object.values(cyclesObj)

while (res.length !== 1) {
    const a = res.pop()
    const b = res.pop()
    res.push((a*b)/PGCD(a,b))
}

console.log(`Solution Problème 2 : ${res[0]}`)