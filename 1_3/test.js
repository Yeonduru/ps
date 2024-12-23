const solutions = require('./solution')
const assert = require("assert");

const testCases = [
    {
        input: ['Mr John Smith', 13],
        output: 'Mr%20John%20Smith'
    },
    {
        input: ['', 0],
        output: ''
    },
    {
        input: [' ', 1],
        output: '%20'
    },
    {
        input: [' John Smith ', 12],
        output: '%20John%20Smith%20'
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