//search & check methods

// indexOf("c",3), lastIndexOf()

let str = "ramesha"

// console.log(str.indexOf('a',2))


let text = "Javascript is awesone, Javascript is powerful"

// console.log(text.lastIndexOf("Javascript"))

//toUpperCase() and toLowerCase()




let sentence = "to be or to not to be, that to is the question to be"

let target = "to"   //return count = 3

// console.log(sentence.indexOf('to',41+1))

let position = sentence.indexOf(target)
let count = 0

while(position !== -1){
    count++
    position = sentence.indexOf(target, position + 1)
}

console.log(count)


