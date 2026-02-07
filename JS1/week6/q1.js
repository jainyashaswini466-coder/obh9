//Output :
//Name : "John"
//Age : 30
//Quote: "It's great!"

// let Output = `Name : "John"
// Age : 30
// Quote : "It's great!`

let up = 'Name : "John"\nAge : 30\nQuote : "It\'s great!"'
// console.log(up)


//template literals are much cleaner or readable

// console.log(`2 + 2 = ${2+"2"}`)

//string + anything => type-coersion

let price = 1000
let discount = 0.1
let F_name = "Yashaswini"
//Final price : 900
console.log(`Final price for ${F_name} : ${price - price*discount}`)