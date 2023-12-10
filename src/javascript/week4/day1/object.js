let obj1 = {
    name: 'talha'
}
// //console.log(obj1)
let obj2= {
    email: "abdullah@gmail.com",
    name: "abdullah",
    password: "passward123",
    friend: "hurrerah"
}
//console.log(obj2)
//console.log(obj2.password)

for(let i in obj2) {
    //console.log(i)
}

let obj3  = obj2
//console.log(obj3)
obj3.name = "kuch bhi kr do"
//console.log(obj3)
//console.log(obj2)


let arrForClone = [1,2,3]
let arrayToClone = [...arrForClone]
//console.log(arrayToClone)
arrayToClone[0]=99
//console.log(arrayToClone)
//console.log(arrForClone)

let obj4 = {...obj2}
//console.log(obj4)
obj4.email = 'test@example.com'
//console.log(obj4)
//console.log(obj2)