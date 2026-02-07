Write a program that takes a total number of seconds and converts it into minutes and remaining seconds.


Write a program that takes a number of days as input and converts it into years, months, and remaining days. Assume:
1 year = 365 days
1 month = 30 days


# Check for leap years 
Conditions:
Most years that are divisible by 4 → leap years
Some of those (divisible by 100) → NOT leap years
Some of those (divisible by 400) → leap years again

for example last year was 2024, it's not divisible by 400 or 100 but divisible by 4

let year = 2023

if (year % 400 === 0) {
    console.log("Leap Year")
} else if (year % 100 === 0) {
    console.log("Not a Leap Year")
} else if (year % 4 === 0) {
    console.log("Leap Year")
} else {
    console.log("Not a Leap Year")
}


