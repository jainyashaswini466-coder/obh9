let data = [
    {"name": "John", "id": 123, "marks": 98},
    // {"name": "yaga", "id": 200, "marks": 45},
  {"name": "Baba", "id": 101, "marks": 23},
  {"name": "Wick", "id": 115, "marks": 75}
]

for(let s = 0; s<data.length; s++){
    if(data[s].marks<50) {
        data.splice(s,1)
        s--
        // s=0, l=3, s=1
    }
}

console.log(data)
// data.splice(1,1)
// console.log(data)

// let finalData = []

// for(let student of data){
//     if(student.marks>50){
//         finalData.push(student)
//     }
// }

// console.log(finalData)
let len = data.length       //4

// for(let s=data.length-1; s>=0; s--){
//     if(data[s].marks<50){
//         data.splice(s,1)
//     } 
// }

// console.log(data)