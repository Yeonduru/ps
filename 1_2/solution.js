const isPermutation = ([str1, str2]) => {
    if (str1.length !== str2.length) {
        return false
    }
    const str1Counter = [...str1].reduce((accum, curr) => {
        accum[curr] = (accum[curr] || 0) + 1
        return accum
    }, {})
    
    for (const char of str2) {
        if (!str1Counter[char]) {
            return false
        }
        str1Counter[char] -= 1
    }
    return true
}

module.exports = {
    isPermutation
}