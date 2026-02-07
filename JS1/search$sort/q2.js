let arr = [2,50,81,10,100]

    //    [2, 10, 50 , 81, 100]
    //    [ 10, 100, 2, 50, 81 ]


// let sorted = []

//ascending order


// .sort()
// console.log(arr.sort())

// console.log(arr.sort((a,b)=>b-a))   //descending            

// a-b > 0 //    return -1          b placed before a
// a-b <0  // return 1       a placed before b
// a-b = 0  // order stay same










// sort(strings in lexigraphical order)

// console.log('2'<'10')


const fruits = ['apple', 'banana', 'mango', 'cherry', 'orange'];

// console.log(fruits.sort())              //Array

//localeCompare()


// let desc = fruits.sort((a,b)=> b.localeCompare(a))          //descreasing 

let desc = fruits.sort((a,b)=> a.localeCompare(b))          //descreasing 

// console.log(fruits)

//Shortsomings - not compatible with numbers, no way to change the sort order

//Custom compare function

//number sort
// sort((a,b)=> a-b)



let nums = [4,40,5,50,6,60] 
//arrange in ascending and descending order

//a-b and b-a



let words = ["bat", "catterpillar","hi","mango"]
//arrange in ascending and descending order

//localeCompare()

words.sort((a,b)=> b.length - a.length)

console.log(words)











