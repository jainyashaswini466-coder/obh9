let arr = [1,2,3,4]

let copyArr = [...arr]

copyArr[2] = 30

// console.log(arr)


let nested = [[1,2],[3,4]]

let nestedCopy = [...nested]            //shallow copy 

// console.log(nestedCopy)

// nestedCopy[0][0] = 10

// console.log(nested)

let deepCopy = structuredClone(nested)

deepCopy[0][0] = 10

console.log(nested)




