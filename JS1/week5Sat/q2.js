
let arr = [4,5,3,2,6]

//print the index of largest number

let max = -Infinity
let secondMax = -Infinity

for(let i=0; i<=arr.length - 1; i++){

    if(arr[i]>max) {        
        secondMax = max
        max = arr[i]
    }
    else if(arr[i]>secondMax && arr[i] != max){
        secondMax = arr[i]
    }
    console.log(max,secondMax)
}




// console.log(max, maxIndex)
