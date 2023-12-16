// Function in array java script: -
let funcArr = [
    "a", 
    function arr (a) { return a}, 
    "asd"
]

let indexOne = funcArr[1](8)
console.log(indexOne)

// array destructuring
const [alphabet, func, ...rest] = funcArr
console.log(rest)