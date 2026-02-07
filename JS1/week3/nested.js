



// multiple ifs -> conditions were independent

// if-else

// multiple if-else

//nested ifs -> 


let num = 871


// Take a 3 digit Number, if number is postive , check if sum of digits is div by 3 or not, 
// if number is negative check if product of digits is div by 4 or not. 

let a = parseInt(num/100)
let b = parseInt(num/10) % 10
let c = num%10 

let sum = a + b + c
let product = a*b*c
if(num>=0){           //number even

    if(sum%3==0){
        console.log("number is positive and the sum of digits is divisible by 3")
    }
    else{
        console.log("number is positive and the sum of digits is NOT divisible by 3")
    }
}

else{
    if(product%4 == 0){
        console.log("number is negative and the PRODUCT of digits is divisible by 4")
    }

    else{
        console.log("number is negative and the product of digits is NOT divisible by 4")
    }
}