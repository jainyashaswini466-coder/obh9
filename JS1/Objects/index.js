// let arr = [1,2,3,4,5]

let obj1 = {

    "a" : 10,
    name: "Yadav",
    5 : "ashwini@gmail.com",
    arr : [1,2,3,4],
    z: 100

}


{/* <obj_name>.<property_name> */}

// console.log(obj1.name)

// console.log(typeof obj1[5])



let fruits ={
    a : "apple",
    b : "banana",
    c : "cherry"
}

// console.log(fruits.c)

fruits.c = "cherries"       //updating the property

// console.log(fruits)

fruits.d = "dragon fruit"


// CRUD - create, read, update, delete

delete fruits.a

console.log(fruits)


