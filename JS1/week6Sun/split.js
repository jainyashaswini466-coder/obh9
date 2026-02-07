// ""   -> []

// String.split(seperator,limit)
// array.join(seperator)


let str = "Y1as2h"

let arr = str.split("",3)

// console.log(arr)




// []  -> ""       -> join()

let arr1 = [ 'Y', '1', 'a', 's', '2', 'h' ]   // "Y-1-a-s-2-h"

let str1 = arr1.join("-")

// console.log(str1)




let fruits = ['apple','banana','orange']

// console.log(fruits.join(","))  // "apple,banana,orange"

// console.log(fruits.reverse())

let fruitStr = "apple"      //e-l-p-p-a

// console.log(fruitStr.reverse())

console.log(fruitStr.split("").reverse().join(""))

// str -> arr -> reverse() -> str

