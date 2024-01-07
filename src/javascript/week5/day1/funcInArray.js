// Function in array java script: -
let funcArr = [
    "a", 
    function arr (a) { return a}, 
    "second index"
]

let indexOne = funcArr[1](8)
console.log(indexOne) // 8 will be printed

// array destructuring
const [alphabet, func, ...rest] = funcArr
console.log(rest)