// 5. Spread Operator (...)
// Problem 11 – Copy and Modify

// Given:

const nums = [1, 2, 3];


// Create a new array that adds 4 at the end
// without changing nums.



let arr1 = [1,2,3]

let arr2 = [...arr1]

arr2[0] = 'one'

console.log(arr1)

let arr3 = [...arr1, ...arr2]


console.log(arr3)

