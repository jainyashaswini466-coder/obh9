let list = [1,2,3,4,5,6,7,8,9]

// console.log(list.slice(3,5))

//second parameter of slice is exclusive

// console.log(list.slice(-5,-3))

//if you pass negetaive parameters, the iteration will start from
//end of your array counting from -1

// console.log(list.slice(0,3))

// console.log(list.slice(3,6))

// console.log(list.slice(6,9))

for(let i = 0; i<=list.length-1; i++){
    console.log(list.slice(i,i+3))
    if(i+3>=list.length){
        break
    }
}

