console.log('9999999999999999') // It's print 9999999999999999
console.log(9999999999999999n) // It's print 9999999999999999, but BigInt is not supported in most browsers (https://caniuse.com/?search=BigInt)
console.log(9999999999999999) // It's print 10000000000000000

/**
 * Check string is valid number.
 * @constructor
 * @param {string} number - The number want to validate.
 * @returns {boolean} is valid number
 */
function isNumber(number) {
    if (
      typeof number !== 'string' ||
      (
        !isNaN(number) &&
        number.indexOf('e') !== -1
      )
    ) {
        return false
    }
    return !isNaN(number)
}

console.log(isNumber('9999999999999999')) // true
console.log(isNumber('1e+2')) // false
console.log(isNumber(9999999999999999n)) // false
console.log(isNumber(9999999999999999)) // false
