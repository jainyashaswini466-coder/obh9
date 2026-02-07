// forEach(), map(), filter(), find(), reduce()

// function add(){

//     //base condition
//     //
//     //
//     //
//     add()       //recurssion
// }

// let player = {
//     name: 'Virat',
//     country: 'India',
//     role: 'Batsman'
// }

// let role = "country"
// console.log(player.role)

// console.log(player["role"])     //existing key

// console.log(player[role])       //variable


let player = {
    name: 'Virat',
    country: 'India',
    role: 'Batsman',
    x: "Football"
}


function deleteProperty(obj, x ) {
    //Write your code here

    // delete obj["x"]
    delete obj[x]

    // return obj
}

// console.log(player)

deleteProperty(player, "role")

console.log(player)


// console.log(deleteProperty(player, "role"))
// let a = 23
// console.log(typeof String(a))