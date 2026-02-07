// for(i)
//while()
//do-while()

//Arrays, strings - for of loop

let obj = {
    a:1,
    b:2,
    c:3
   
}

// let arr = [1,2]
// arr.push(3,4)
// console.log(arr)

// console.log(Object.entries(obj))

function getAllKeys(object){
    let result = []
    for(let key in object){
        // result.push(key)
        let pair = []
        pair.push(key, object[key])
        result.push(pair)
    }

    return result
}

console.log(getAllKeys(obj))

// Object.keys(), Object.values(), Object.entries()
// console.log(Object.entries(obj))

// function getKeys(obj){
//     return
// }

// ['a','b','c']

    //  console.log(obj.o)

// console.log(obj[o])

// console.log(obj)


//for..in loop
// for(let o in obj ){
//     // console.log(o)

//     // console.log(obj.o)

//     //  console.log(obj["o"])
//     //  console.log(obj.o)

// }

