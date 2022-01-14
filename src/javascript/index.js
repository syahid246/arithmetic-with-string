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

/**
 * Number, is Greater than.
 * @constructor
 * @param {string} a - The number want to compare.
 * @param {string} b - Number to compare from "a".
 * @returns {boolean} "a" is greater than "b"
 */
function isGreater(a, b) {
    if ( isNumber(a) && isNumber(b) ) {
        if ( a.length > b.length ) return true
    }
    return false
}

console.log(isGreater('12', '1') === true) // true
console.log(isGreater('1', '1') === false) // true
console.log(isGreater('2', '2') === false) // true
console.log(isGreater('1', '2') === false) // true
console.log(isGreater('2', '1') === true) // false
