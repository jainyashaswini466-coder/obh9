// 5x = 5;
// x = 5/5

// x^2 + 2x = 6

// Time Complexity - O(?)


// [3,6,2,9,7], target = 1  ->>> nth element of your array

// O(n)

let str = "January", target = 'k'

let flag = false
for(let char in str){
    if(char === target) {
        console.log(true) ;
        flag = true
    }
}
if(!flag) console.log(false)




// [[1,2],[2,3],[3,4]]

// for([1,2],[2,3],[3,4]){     //n

//     for(1,2,3,4)            //n
// }

// O(n^2)