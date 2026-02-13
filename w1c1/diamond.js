n = 7

//       * 
//      * * 
//     * * * 
//    * * * * 
//     * * * 
//      * *  
//       * 

let mid = (n+1)/2       //4

for(let row = 1; row<=mid; row++){
    let str = ''

let spaces = " ".repeat(n-row)

for(let star = 1; star<=row; star++){
    str+="*"+' '
}

console.log(spaces + str)
}

//lower pyramid
mid = n-mid

for(let row = mid; row>=1; row--){
    let str = ''

let spaces = " ".repeat(n-row)

for(let star = 1; star<=row; star++){
    str+="*"+' '
}

console.log(spaces + str)
}


// 4 for loops are involved     = O(n^2)


// n = 3

// * * *
//  * *
//   *

// for(let row = n; row>= 1; row--){
//     let str = ''

// let spaces = " ".repeat(n-row)

// for(let star = 1; star<=row; star++){
//     str+="*"+' '
// }

// console.log(spaces + str)
// }