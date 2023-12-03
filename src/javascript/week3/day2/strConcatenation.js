let str1 = "shizuka"
let str2 = "nobita"
// let doraemon= str1+ " " + str2
let doraemon = `${str1}   ${str2} ` // string literals

console.log(doraemon)


// logical gates
let x = 6;
let y = 3;

console.log(x == 6 && y == 3)
// and gate
if (x == 6 && y == 4) {
    console.log("and condition goees true")
} else {
    console.log("and goes false")
}

// or gate
if (x == 6 || y == 4) {
    console.log("or condition goees true")
} else {
    console.log("or goes false")
}

// not gate
let condition = true
if (!condition) {
    console.log("cond is true")
} else {
    console.log("cond is false")
}

let age = 20
let voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable)

// switch statements jab hamry case values defined hu
let z = 1;
switch (z) {
    case 0:
        text = "Off";
        console.log(text)
        break;
    case 1:
        text = "On";
        console.log(text)
        break;
    default:
        text = "No value found";
        console.log(text)
}
console.log(z)

// nested if else
let a = 20;
let b = 20;

if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is equal to b");
}

