// let i = 1

// do{
//     console.log(`${2*i}`)
//     i++
// }
// while(i<=10)


// for(let i = 1; i<=10; i++){

//     if(i==5) continue;

//     console.log(i)
// }


// let num = 1

// while(num<=10){
//     if(num==5) {
//         num++;
//         continue
//     }
    
//     console.log(num)
//     num++
// }

// 0 - false
// 1 - true

// let i = 1

// while(i){

//     console.log("false")
    
// }

// if(0){
// console.log('true')
// }






let num = 324               //num>0

// console.log(num % 10)


//Print all the digits of num

// let last = num%10           

// num = parseInt(num/10)      //32.4

// let mid = num%10            //2

// num = parseInt(num/10)      //3.2

// let first = num

// num/10 = 0.3


// console.log(last)
// console.log(mid)
// console.log(first)


// for(let i =num; i>0; parseInt(i/10))

let  num1 = 342

// console.log(rev)    //243

// while(num1>0){

//     console.log(num1%10)

//     num1 = parseInt(num1/10)    //34
 
// }

let rev = 0 //2
            //24            20+4        2*10 + 4
            //243
while(num1>0){

    let d = num1%10
    rev = rev*10 + d 
    num1 = parseInt(num1/10)    //3
}

console.log(rev)


// let str = ''
// while(num1>0){
//     str+= num1%10       //2   //24     //243
//     num1 = parseInt(num1/10)    //34    //3
// }
