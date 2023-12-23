let firstLine = 123
let secondLine = 456
// setTimeout(()=>{
//     console.log(firstLine)
// }, 3000)
// console.log(secondLine)

// set interval
// setInterval(()=>{
//     console.log(secondLine)
// }, 1000)

// promises, future value
// idr us ko kisii ne koi promise kia
let anyFutureValue = new Promise(function (resolve, reject){
    resolve();
    reject();
})

console.log(anyFutureValue)