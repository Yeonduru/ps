const convertToURL = ([str, length]) => {
    const charArray = str.split('')
    return charArray.map(char => char === ' ' ? '%20' : char).join('')
}
module.exports = {
    convertToURL
}