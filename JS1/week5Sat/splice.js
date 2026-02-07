// let cities = ["Mumbai", "Delhi", "Pune",'m','d','p']

// cities.splice(2,1)

// console.log(cities)



let numbers = [18,19,20,'twenty one', 22,23,24,25]
// console.log(numbers[0])
//splice    
//1 - index where the modification is needed to be done
//2 - no.of elements to be deleted
//3 - to be added elements

// numbers.splice(3,1, 21,21.5)

// console.log(numbers)


// Manual Deletion at Index 3:
// Move all elements from index 4 to left
// Set arr.length = arr.length - 1

delete numbers[3]

// console.log(numbers[3])
let deletionIndex = 3
for(let i = deletionIndex; i<=numbers.length-1; i++){
    numbers[i] = numbers[i+1]
}
numbers.pop()
console.log(numbers)
