// Write a program that takes a total number of seconds and converts it into minutes and 
// remaining seconds.

let seconds = 3600

// ()minutes and ()seconds
let min

// console.log(min," minutes and",seconds)


min = parseInt(seconds/60) 

seconds = seconds % 60   

let hours = parseInt(min/60)
min = min%60

// console.log(hours, "hours", min," minutes and",seconds, "seconds")




let days = 762

// 1 year , 2 months, 25 days
        // 450-365 = 85
let years = parseInt(days/365)

days = days - years*365     //85

let month = parseInt(days/30)   // 85/30 = 2.something

days = days - month*30      // 85 - 2*30 = 25


// console.log("no of years", years)

console.log(`no of years: ${years}, no of months: ${month}, no. of days: ${days}`)



// days = 762





let year = 2024

// 16, 64

// Most years that are divisible by 4 → leap years
// Some of those (divisible by 100) → NOT leap years
// Some of those (divisible by 400) → leap years again

// february = 29

if(year%400 == 0){
   console.log("Leap Year")
}

else if(year%100 == 0){         //7000
    console.log("Not a Leap Year")
}

else if(year%4 == 0){
    console.log("Leap year")
}



// year%400 ? "Leap Year" : "Not Leap"

// year%4 ? "Leap Year" : "Not Leap"


if((year%400 ==0) || (year % 4 ==0 && year % 100 !=0)){
    console.log("Leap Year")
}

else{
    console.log("Not a Leap Year")
}



