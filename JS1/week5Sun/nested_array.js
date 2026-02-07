
            //  convert [10, 20, 30, 30.5, 40, 50, 60]

// let table2 = [...table]

// console.log(table2)

// table2[2] = 
// table.flat(2)

// console.log(table)

// console.log(typeof [30,30.5])

let table = [10, 20, [30,30.5], 40, 50, 60]

// console.log(typeof table[0])

let result = []
function flattenArray(arr){

    for(let a of arr ){
        if(typeof a != 'number'){
            for(let ele of a){
                result.push(ele)
            }
        }
        else{
        result.push(a)
        }
    }

    return result
}

console.log(flattenArray(table))

