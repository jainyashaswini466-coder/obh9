// function greet(name="Shiva",age="21"){

// console.log("hey,",name,"your age is:", age)

// }

// greet()


// function sumOfDigits(N,p=2){

// let sum = 0

//     while(N>0){
//        let d =  N%10

//        sum+= d**p

//        N = parseInt(N/10)
//     }

//     return sum
// }

// console.log(sumOfDigits(123,3))

let  num = 34786;             //
let sum=0;

while(num>0){           //34    //3

    temp=num%10;        //7, 4

    sum=sum+temp;       // 0 => 0+7 = 7+4 = 11 + 3 = 14

    num=parseInt(num/10);       //34.7 -> 34 -> 3.4 -> 3

    
}


console.log(sum)

