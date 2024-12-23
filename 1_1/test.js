const hasDuplicate = require('./solution')
const assert = require("assert");

const answers = {
    'abcdefga': true, 'bcbcd': true, 'zouewoitu': true,
    'abcdefg': false
}

Object.values(hasDuplicate).forEach((f, idx) => {
    console.log(`Fuction number ${idx + 1}`)
    Object.entries(answers).forEach(([input, output]) => {
        assert.deepEqual(f(input), output)
        console.log(`test passed for input ${input}`)
    })
})