let num = [9,8,7,6,5]
     //    0 1 2 3 4

newArr = []

for(let i = 0; i<num.length; i++){

    if(i%2 == 0) newArr.push(num[i])

}

console.log(newArr)