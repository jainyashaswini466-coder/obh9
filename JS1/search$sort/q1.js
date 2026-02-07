let arr = [2,6,1]       //[1,2,6]

let min = arr[0]
for(let a of arr){
        if(a< min) min = a
}

// console.log(min)

let i = arr.indexOf(min)

// console.log(i)

[arr[0], arr[1]] = [arr[1],arr[0]]

console.log(arr)