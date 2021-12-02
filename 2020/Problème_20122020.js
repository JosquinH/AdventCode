const input_test =
[
`Tile 2311:
..##.#..#.
##..#.....
#...##..#.
####.#...#
##.##.###.
##...#.###
.#.#.#..##
..#....#..
###...#.#.
..###..###`,

`Tile 1951:
#.##...##.
#.####...#
.....#..##
#...######
.##.#....#
.###.#####
###.##.##.
.###....#.
..#.#..#.#
#...##.#..`,

`Tile 1171:
####...##.
#..##.#..#
##.#..#.#.
.###.####.
..###.####
.##....##.
.#...####.
#.##.####.
####..#...
.....##...`,

`Tile 1427:
###.##.#..
.#..#.##..
.#.##.#..#
#.#.#.##.#
....#...##
...##..##.
...#.#####
.#.####.#.
..#..###.#
..##.#..#.`,

`Tile 1489:
##.#.#....
..##...#..
.##..##...
..#...#...
#####...#.
#..#.#.#.#
...#.#.#..
##.#...##.
..##.##.##
###.##.#..`,

`Tile 2473:
#....####.
#..#.##...
#.##..#...
######.#.#
.#...#.#.#
.#########
.###.#..#.
########.#
##...##.#.
..###.#.#.`,

`Tile 2971:
..#.#....#
#...###...
#.#.###...
##.##..#..
.#####..##
.#..####.#
#..#.#..#.
..####.###
..#.#.###.
...#.#.#.#`,

`Tile 2729:
...#.#.#.#
####.#....
..#.#.....
....#..#.#
.##..##.#.
.#.####...
####.#.#..
##.####...
##..#.##..
#.##...##.`,

`Tile 3079:
#.#.#####.
.#..######
..#.......
######....
####.#..#.
.#...#.##.
#.#####.##
..#.###...
..#.......
..#.###...`
]

// Formatage

const format_obj = (input) => {
    const objRes = {}

    for (const curInput of input) {

        const list_input = curInput.split('\n')
        let curField = list_input[0]
        curField = curField.split(' ')[1]
        curField = curField.split(':')[0]

        const listObj = {
            up: list_input[1],
            down: list_input[list_input.length - 1]
        }

        let leftString = ''
        let rightString = ''

        for (let i = 1; i < list_input.length; ++i) {
            const curLine = list_input[i]
            leftString = `${leftString}${curLine.charAt(0)}`
            rightString = `${rightString}${curLine.charAt(curLine.length -1)}`
        }

        listObj.left = leftString
        listObj.right = rightString

        objRes[curField] = listObj
    }

    return objRes
}

const construct_obj_possibilities = (input) => {
    const objRes = {}

    for (const curField of Object.keys(input)) {
        const objToTest = input[curField]
        const curObj = {
            up: [],
            down: [],
            left: [],
            right: []
        }

        for (const fieldToTest of Object.keys(input)) {
            if (fieldToTest !== curField) {
                if (input[fieldToTest].down === objToTest.up) curObj.up.push(fieldToTest)
                if (input[fieldToTest].left === objToTest.right) curObj.right.push(fieldToTest)
                if (input[fieldToTest].up === objToTest.down) curObj.down.push(fieldToTest)
                if (input[fieldToTest].right === objToTest.left) curObj.left.push(fieldToTest)
            }
        }
        objRes[curField] = curObj
    }

    return objRes
}

const format_and_link = (input) => {
    const curObj = format_obj(input)
    return construct_obj_possibilities(curObj)
}


// 1 

const toto = format_and_link(input_test)

console.log(toto)