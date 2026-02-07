let str = "Java"

str[5] = 'S'

// console.log(str)

// console.log(str)
// console.log(str.slice(0,1))
// console.log(str.slice(2))
// slice(0,3)     // 0,1,2

// let corrected = str[0] + 'a' + str.slice(2)

// let str = str[0] + 'a' + str.slice(2)

// console.log(str)


let full_name = "Arjun Singh"

//extract the initials
// AS
for(let i = 0; i<=full_name.length-1; i++){
    if(full_name[i]==' '){

        // console.log(`${full_name[0]}${full_name[i+1]}`)
        break;
    }
}


let greeting = "hello world we're learning js"
            //    ['hello','world',"we're","learning","js"]
            //  Hello World We're Learning Js


greeting[0] = 'H'

greeting[6] = 'W'

// console.log(greeting)   // Hello World


let one = 'hello'  // -> Hello

one = one[0].toUpperCase() + one.slice(1)

// console.log(one)


//split() -> convert your string into a array based on special character

let array = greeting.split(' ')
// array = ['hello','world',"we're","learning","js"]

for(let i = 0; i<= array.length-1; i++){
  array[i] = array[i][0].toUpperCase() + array[i].slice(1) 
//    console.log(a)
}

console.log(array)

console.log(array.join(' '))