let num1 = 10
let num2 = 11
let ans = num1+num2*num1/num2%(num1*num2)
// console.log(ans)

// hoisting

// let ans4 = complexCalculation(2,4)
// console.log(ans4)

function complexCalculation (num1, num2){
    return(num1 + num2 * num1 / num2 % (num1 * num2)) 
}
// let ans2 = complexCalculation(20,15)
// console.log(ans2+3/4)
// let ans3 = complexCalculation(30,40)
// console.log(ans3)


// function complexCalculation (num1, num2){
    // return (num1 + num2 * num1 / num2 % (num1 * num2)) 
    // }

// annonymous function / unknown



const complexArrowFunction = (num1, num2) => {
    return (num1 + num2 * num1 / num2 % (num1 * num2))
}

let arrowAns = complexArrowFunction(55,60)
console.log(arrowAns)