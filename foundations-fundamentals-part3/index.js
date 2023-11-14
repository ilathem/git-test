// 1 
function add7(num) {
    return num + 7
}

// 2
function multiply(num1, num2) {
    return num1 * num2
}

// 3
function capitalize(str) {
    return `${String(str[0]).toUpperCase()}${String(str).slice(1).toLowerCase()}`
}

// 4
function lastLetter(str) {
    return String(str).slice(-1)
}

// Tests
console.log(add7(3))
console.log(multiply(2, 3))
console.log(capitalize('lowercase'))
console.log(capitalize('UPPERCASE'))
console.log(capitalize('BoTh'))
console.log((lastLetter("abcd")))
