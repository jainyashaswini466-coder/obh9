const a = 10


let b = 30

// console.log(a)


b = "string"

// console.log(b)


// BODMAS
let exp = 2* 3 + 4 - 5 *(2*4)
        // = 2* 3 + 4 - 5 * 8
        // = 6    + 4 - 40
        // = 10 - 40
        // = -30

// console.log(exp)








let value = 40.4 

let round_value = Math.round(value)

// console.log(round_value)

let floor_value = Math.floor(value)

// console.log(Math.up(value))



fund = 5.12//number ->>>>>>> 5.1
fund += 1   //6.12

// console.log(typeof fund)

final = fund.toFixed(1) //"6.1"

// console.log(typeof final)   //string

// final += 1                       // "6.1" + 1 ->>>> 6.11
// concatenating to the string   -? 2301.71


let num = +final        //6.1
num+= 1                 //7.1
// console.log(num) 


let mins = 5    //secs?

let sec = 7200 // hours?

let hours = sec /3600
// console.log(hours)





let nums = 123.456

let decimal_part = nums - Math.floor(nums) 



// console.log(decimal_part.toFixed(3))



let digit = 234

// let reverse = 32

let last_digit = digit%10       //4
let tens_digit = Math.floor(digit/10) %10           //3
let hundreds_digit = Math.floor(digit/100)          //2

// console.log(last_digit)

let reverse = last_digit*100 + tens_digit * 10 + hundreds_digit

console.log(reverse)




// >,<,>=,<=,==,!=

// == & ===