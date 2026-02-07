function sum(a,b){

    let add = a+b
    // console.log(result)

    return add


    console.log("after return")
}

// sum(20,30)

// console.log(sum(20,30))

// let result = sum(12,20)

// console.log(5 + result)


// nPr = n!/(n-r)!

let n = 5       //120
let r = 2       // 5-2 = 3! = 6
                //120/6 = 20

function factorialCalculator(n){
    let fact = 1
    for(let i=1; i<=n; i++){
        fact *= i
    }

    return fact
}


let result = factorialCalculator(n) / factorialCalculator(n-r)

console.log(result)


// 5C2     //10
// nCr = n! / r!(n-r)!




