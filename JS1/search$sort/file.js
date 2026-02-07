

const nums = [5,2,8,1,9]


nums.sort((a,b)=>{
    // console.log(b)
    if(a < b) return -1      //ascending
    if(a > b) return 1        //change
    return 0
})

// nums.sort((a,b)=> a-b)

// console.log(nums)



const fruits = ["Apple",'apple','mango', 'Mango', 'Cherry'];

            //     2       1         5      3          4

            //     1        2        4       3         5

// fruits.sort((a,b)=>{
//     if(a<b) return 1
//     if(a>b) return -1
//     return 0
// })

fruits.sort((a,b)=> a.localeCompare(b))

// fruits.sort((a,b) => a.localeCompare(b,undefined, {sensitivity : 'case'}))

console.log(fruits)










const indexes = [1,10,2,100]

const code = ["v1","v10","v2","v100"]

const question = ["a21","a12", "z16","a19"]

// const code = ["v1","a10","b2","y100"]

// a.b => ascending 

// code.sort((a,b)=>a.localeCompare(b))

question.sort((a,b) => a.localeCompare(b,undefined,  {numeric : true}))

// console.log(question)