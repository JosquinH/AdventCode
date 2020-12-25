const input_test = [
    '0: 4 1 5',
    '1: 2 3 | 3 2',
    '2: 4 4 | 5 5',
    '3: 4 5 | 5 4',
    '4: "a"',
    '5: "b"'
]

const messages = [
    'ababbb',
    'bababa',
    'abbbab',
    'aaabbb',
    'aaaabbb'
]



const regLetter = /a|b/

// On formate l'input

const format_input = (input) => {
    const new_input = {}
    for (const curInput of input_test) {
        const input_without_quote = curInput.split('"').join('')
        const splitField = input_without_quote.split(':')

        const field = splitField[0]
        const ruleList = splitField[1].split('|')

        if (ruleList.length === 1 && regLetter.test(ruleList[0].trim())) {
            new_input[field] = ruleList[0].trim()
        } else {
            const curValue = []
            for (const current_rule of ruleList) {
                curValue.push(current_rule.trim().split(' '))
            }
            new_input[field] = curValue
        }

    }

    return new_input
}

// On forme les regexString

const getValueRule = (resObject, fieldToFind, objectRule) => {
    const ruleList = objectRule[fieldToFind]
    let finalString = ''
    for (const or_rule_list of ruleList) {
        let curString = ''
        for (const and_rule of or_rule_list) {
            if (resObject[and_rule]) {
                let str = resObject[and_rule]
                if (str.match(/\|/)) str = `(${str})`
                curString = `${curString}${str}`
            } else {
                const curRes = getValueRule(resObject, and_rule, objectRule)
                let str = curRes
                if (str.match(/\|/)) str = `(${str})`
                curString = `${curString}${str}`
            }
        }
        finalString = finalString.length === 0 ? `(${curString})` : `${finalString}|(${curString})`
    }
    resObject[fieldToFind] = finalString
    return finalString
}

// Récupération règle

const createRegexString_from_rule = (objectRule) => {
    const resObject = {}

    for (const curField of Object.keys(objectRule)) {
        if (typeof objectRule[curField] === 'string') {
            resObject[curField] = objectRule[curField]
        }
    }

    for (const curField of Object.keys(objectRule)) {
        if (!resObject[curField]) {
            getValueRule(resObject, curField, objectRule)
        }
    }
    return resObject
}

// fonction plus haut niveau : formate + objReg

const getObjectRegEx = (input) => {
    const objectRule = format_input(input)
    const regExObj = createRegexString_from_rule(objectRule)
    return regExObj
}

// Match les messages

const test_messages = (messages, regexString) => {
    const curRegEx = new RegExp(regexString)
    let messages_match = []

    for (const message of messages) {
        if (curRegEx.test(message)) messages_match.push(message)
    }

    return messages_match
}

// Fonction final 1

const part1Func = (input,messages) => {
    const objReg = getObjectRegEx(input)
    console.log(objReg)
    const messages_match = test_messages(messages, objReg['0'] )
    return messages_match
}

console.log(part1Func(input_test, messages))
