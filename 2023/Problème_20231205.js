const fs = require('fs');
const filename = "input/input_20231205.txt"
const input = fs.readFileSync(filename, 'utf8').split('\r\n').filter(x => x !== '')

const seeds = input.shift().split(': ')[1].split(' ').map(x => parseInt(x))
const seedsPath = seeds.map(x => [x])

// Ajout pour faire le traitement des sources non mappées

input.push('Fin:')

// Problème 1

let step = 0

for (const line of input) {
    if (line.charAt(line.length - 1) === ':') {
        step += 1
        for (let i = 0; i < seedsPath.length; ++i) {
            const l = seedsPath[i].length
            if (l < step) {
                seedsPath[i].push(seedsPath[i][l-1])
            }
        }
    } else {
        const [destinationStart, sourceStart, rangeLength] = line.split(' ').map(x => parseInt(x))
        for (let i = 0; i < seedsPath.length; ++i) {
            const source = seedsPath[i][seedsPath[i].length - 1]
            if (seedsPath[i].length === step) {
                const delta =  source - sourceStart
                if (delta >= 0 && delta < rangeLength ) {
                    seedsPath[i].push(destinationStart + delta)
                }
            }           
        } 
    } 
}

const res = Math.min(... seedsPath.map(x => x[x.length - 1]))

console.log(`Solution Problème 1 : ${res}`)

// Problème 2

let ancientRangeSet = []
let newRangeSet = []

for (let i = 0; i < seeds.length; i+=2) {
    newRangeSet.push([seeds[i],seeds[i] + seeds[i+1] - 1])
}

for (const line of input) {
    if (line.charAt(line.length - 1) === ':') {
        ancientRangeSet.push(...newRangeSet)
        newRangeSet = []
    } else {
        const [destinationStart, sourceStart, rangeLength] = line.split(' ').map(x => parseInt(x))
        const sourceEnd = sourceStart + rangeLength - 1
        const newInterval = []
        while (ancientRangeSet.length !== 0) {
            const interval = ancientRangeSet.shift()       
            const intervalMin = Math.max(interval[0], sourceStart)
            const intervalMax = Math.min(interval[1],sourceEnd)
            if (intervalMax - intervalMin >= 0) {
                newRangeSet.push([destinationStart + intervalMin - sourceStart,destinationStart + intervalMax - sourceStart])
                if (interval[0] < sourceStart) {
                    newInterval.push([interval[0],sourceStart - 1])
                }
                if (interval[1] > sourceEnd) {
                    newInterval.push([sourceEnd + 1,interval[1]])
                }
            } else {
                newInterval.push(interval)
            }         
        }
        ancientRangeSet = [...newInterval]
    }
}

const res1 = Math.min(... ancientRangeSet.map(x => x[0]))

console.log(`Solution Problème 2 : ${res1}`)