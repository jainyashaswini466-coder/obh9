let count = 0

for(let i = 1; i<=5; i++){

// count = 0

    if(i>0){
        count++     //1
    }
}

// console.log(count)



//factorial => 5 => 5*4*3*2

// 9
let fact=1

for(let i = 5; i>=2; i--){
    fact = fact*i
    // i=9    fact = 1*9 = 9
    // i--, i=8    fact = 9*8 = 72
    // i--, i=7    fact = 72*7
    // ....till i is 2

}

console.log(fact)