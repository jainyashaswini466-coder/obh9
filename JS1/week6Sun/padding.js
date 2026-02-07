// trim()

let str = `  january it is`

// console.log(str.trim())

//trimStart(), trimEnd()

let str1 = "   "

//validating non-empty inputs
// console.log(str1.trim().length)


//padding
// padStart()- 
let result = "5"

// console.log(result.padEnd(6,"0"))


// 9, 5 minutes         ->  09:05:00

function formaTime (h=0,m=0,s=0){
        let hour = h.toString().padStart(2,"0")
        let mins = m.toString().padStart(2,"0")
        let secs = s.toString().padStart(2,"0")

        return `${hour}:${mins}:${secs}`
}

// console.log(formaTime())  //09:05:00


//toFixed()

//only used for numbers and not for strings

let num = 90.65275

// console.log( num.toFixed(3))

console.log( Math.floor(num))

function toFixedCustom(int,places){

    //code

    return string
}