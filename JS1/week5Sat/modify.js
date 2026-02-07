// let arr1 = [1,3,5,4]


// let sum = 0
// for(let a of arr1){
//     if(a%2 != 0) {
//         sum+=a
//     }
// }

// console.log("odd elements sum is ", sum)



let names = ['a','b','c',7]         //4

//pop() , push()            //later extreme
// console.log(names)

// let deleted = names.pop()     //contain the removed element

// console.log(deleted)      //['a','b','c']
names.pop()     //3
names.pop()     //2

// // console.log(names)          //['a','b']

// let test = names.push("c")

console.log(names.push("c"))


// let numbers = [18,19,20,'twenty one', 22,23,24,25]

//shift and unshift

// numbers.shift()         //remove from index 0

// console.log(numbers)

// numbers.unshift(21)

// console.log(numbers)


let numbers = [18,19,20,'twenty one', 22,23,24,25]

//splice    
//1 - index where the modification is needed to be done
//2 - no.of elements to be deleted
//3 - to be added elements

// numbers.splice(3,1, 21,21.5)

// console.log(numbers)


let arr2 = ["HTML", "CSS", "JavaScript"]

// arr2.splice(1,0,"React")

// console.log(arr2)


let newArr = []

for(let a of arr2){
    newArr.push(a)

    // console.log(newArr)
}

