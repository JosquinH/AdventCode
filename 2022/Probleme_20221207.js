const input = require('./input/input_20221207')

const newInput = input.map(x => x.split(" "))

const currPath = []
const currObjList = [{}]
let curIndex = 0

for (const command of newInput) {
    if (command[0] === "$") {
        if (command[1] === "cd") {
            if (command[2] === "..") {
                let ancientFolder = currPath.pop()
                let ancientObj = currObjList.pop()
                --curIndex
                currObjList[curIndex][ancientFolder] = ancientObj            
            } else {
                currPath.push(command[2])
                if (command[2] !== '/') {
                    currObjList.push(currObjList[curIndex][command[2]])
                    ++curIndex
                }
            }
        }
    } else if (command[0] === "dir") {
        currObjList[curIndex][command[1]] = {}
    } else {
        currObjList[curIndex][command[1]] = parseInt(command[0])
    }
} 

let treePath = currObjList[0]

// 1

let totalSize = 0

const computeFolderSize = (curObj) => {
    let currSize = 0
    for (const key of Object.keys(curObj)) {
        if (typeof curObj[key] === "number") {
            currSize += curObj[key]
        } else {
            currSize += computeFolderSize(curObj[key])
        }
    }
    if (currSize <= 100000) {
        totalSize += currSize
    }
    return currSize
}

computeFolderSize(treePath)
console.log(`1st question's answer : ${totalSize}`)

// 2

const sizeArray = []

const computeFolderSize2 = (curObj) => {
    let currSize = 0
    for (const key of Object.keys(curObj)) {
        if (typeof curObj[key] === "number") {
            currSize += curObj[key]
        } else {
            currSize += computeFolderSize2(curObj[key])
        }
    }
    sizeArray.push(currSize)
    return currSize
}

computeFolderSize2(treePath)

const remainingSpace = 30000000 - (70000000 - Math.max(...sizeArray))

console.log(`2nde question's answer : ${Math.min(...sizeArray.filter(x => x >= remainingSpace))}`)
