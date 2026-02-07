
//dot notation and big bracket notation

let user = {
    "first name": "Salman",
    "last-name" : "khan",
    age : 55,
    7: "deer",
    "aswini@gmail.com" : "registered"
}

let age = 7
// console.log(user.last-name)
// console.log(user["last-name"])
// console.log(user[7])

console.log(user["age"])        //55

console.log(user[age])          //deer

//big bracket notation is used in case of variable search
//and inconventional variable-names