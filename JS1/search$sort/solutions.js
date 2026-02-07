const numbers = [5, 3, 8, 1, 9, 2];
function linearSearch(arr, target) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target)  return i
    }
    return -1
}

console.log(linearSearch(numbers, 8)); // Output: 2
console.log(linearSearch(numbers, 7)); // Output: -1



let arr = [9, 90, 99 , 5 , 50]

//second largest number 