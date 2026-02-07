//Template Literals with Function Calls

function getGreeting(hour){
    //in noon till 12, before 12 - Goodmorning
    //after twelve till 6 - Good Afternoon
    //Good evening
    if(hour < 12) return "Good morning"
    if(hour < 18) return "Good afternoon"
    return "Good evening"

}

let currentHour = 14
let userName = "Madhuri"

// console.log(`${getGreeting(currentHour)}, ${userName}`)

//toUpperCase()

// console.log(userName.toUpperCase())

// console.log(`Hello ${userName.toUpperCase()}`)


//Create a variable for product name, price and quantity,
Product = "Laptop"
Price = 50000
Quantity = 3 

// "Total cost for 3 Laptops : 150000"

console.log(`"Total cost for ${Quantity} ${Product} : ${Price * Quantity}`)