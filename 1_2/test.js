const solutions = require('./solution')
const assert = require("assert");

const testCases = [
    {
        input: ['', ''],
        output: true
    },
    {
        input: ['abc', 'acb'],
        output: true
    },
    {
        input: ['abcd', 'abcde'],
        output: false
    },
    {
        input: ['pupupu', 'upupup'],
        output: true
    },
]
Object.values(solutions).forEach((f, idx) => {
    console.log(`Fuction number ${idx + 1}`)
    testCases.forEach(({ input, output }, testCaseIdx) => {
        assert.deepEqual(f(input), output)
        console.log(`test passed for input number ${testCaseIdx + 1}`)
    })
    console.log('all passed')
})