//Write a function to determine if a number is armstrong or not

// function isArmstrong(num) {
//     let original = num;
//     let sum = 0;
//     let digits = num.toString().length;

//     while (num > 0) {
//         let digit = num % 10;
//         sum += digit ** digits;
//         num = Math.floor(num / 10);
//     }

//     return sum === original;
// }



// Now determine all the armstrong numbers in a range
// https://course.acciojob.com/idle?question=620db89b-bcf4-4913-be13-64da3b4ddbeb



// 1 
// 2 3 
// 3 4 5 
// 4 5 6 7 
// 5 6 7 8 9 

// for (let i = 1; i <= input; i++) {
//   let num = i;
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += num + " ";                       //1 
//                                             //2 3
//     num++;      //2     //3
//   }
// }
let n = 5

for(let i = 1; i<= n; i++){
    let str = ''
    // let num = i
    for(let j = i; j<= (2*i-1); j++){
        // str+= num + " "
        // num++
        str += j+ " "
    }
console.log(str)
}

