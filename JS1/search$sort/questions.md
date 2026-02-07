
//linear search will mostly be used to iterate over small arrays or unsorted data.


function linearSearch(arr, target) {

}

const numbers = [5, 3, 8, 1, 9, 2];
console.log(linearSearch(numbers, 8)); // Output: 2
console.log(linearSearch(numbers, 7)); // Output: -1

//----------------------Time Complexity - O(N)-----------------------------

Problem 1: Find First Occurrence
const fruits = ['apple', 'banana', 'mango', 'apple', 'orange'];

//--------------------------------------------------------------------------
Problem 2: Find All Occurrences

function findAllOccurrences(arr, target) {

}

const nums = [3, 7, 3, 9, 3, 2];
console.log(findAllOccurrences(nums, 3)); // Should return [0, 2, 4]

//---------------------------------------------------------------------------

Problem 3 : Find if a character exists in a string
function searchChar(str, char) {
    
}

console.log(searchChar('hello', 'e')); // true
console.log(searchChar('hello', 'z')); // false

//--------------------------------------------------------------------------

Problem 4: Find Student by Name

const students = [
    { name: 'Raj', age: 22 },
    { name: 'Priya', age: 20 },
    { name: 'Amit', age: 21 }
];

function findStudent(students, name) {
    
}

console.log(findStudent(students, 'Priya')); // { name: 'Priya', age: 20 }
console.log(findStudent(students, 'Karan')); // null

//---------------------------------------------------------------------------

