let arr1 = [1,2,3]

// let arr2 = arr1

let arr2 = []

for(let a of arr1){
    arr2.push(a)
}
console.log(arr2)


arr2[0] = 'one'


console.log('arr2',arr2)

console.log('arr1', arr1)


// let a = 'apple'

// let b = a

// console.log(b)