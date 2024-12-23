
const first = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return true
            }
        }
    }
    return false
}

const second = (str) => {

    const charCounter = new Map()
    for (const char of str) {
        if (charCounter.get(char)) {
            return true
        }
        charCounter.set(char, 1)
    }
    return false
}

const third = (str) => {
    if (str.length > 128) {
        return true
    }
    const flags = Array(128).fill(false)
    for (let idx = 0; idx < str.length; idx++) {
        const charCode = str.charCodeAt(idx)
        if (flags[charCode]) {
            return true
        }
        flags[charCode] = true
    }
    return false
}

module.exports = {
    first, second, third
}