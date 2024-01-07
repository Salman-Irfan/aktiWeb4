let firstLine = 123
let secondLine = 456
console.log("Start");

// Asynchronous operation (e.g., fetching data)
setTimeout(function () {
    console.log("Async operation completed");
}, 2000);

console.log("End");

// setTimeout(()=>{
//     console.log(firstLine)
// }, 3000)
// console.log(secondLine)

// set interval
// setInterval(()=>{
//     console.log(secondLine)
// }, 1000)

// Function to be executed
const logMessage = () => {
    console.log("Interval message - This message will be logged every 3 seconds.");
};

// Setting up the interval
const intervalId = setInterval(logMessage, 3000); // Interval is set to 3000 milliseconds (3 seconds)
// promises, future value
//  Promises are a feature introduced in ECMAScript 6(ES6) to handle asynchronous operations
let anyFutureValue = new Promise(function (resolve, reject){
    resolve(); // if promise resolved successfully
    reject(); // if promise rejected 
})

console.log(anyFutureValue)