// let marks = [20,40,[1,2,3,4],89]

// console.log(marks[2])

let student = {
    name : "Priya",
    age : 21,
    address: {
        city : "Sonipat",
        pincode : 131001
    },
    marks : [78,87,69,89]
}

// console.log(student.address.pincode)
// console.log(student.marks[student.marks.length-1])


//Array of Objects-

let data = { 
    obj1: {name:"Anjali", marks:98},
    obj2 : {name: "Pratyush", marks:67},
    obj3 : {name: "Katyayni", marks:99}
}
// let sum = 0

// for(let obj in data){
//     // console.log(data[obj])

//     sum = sum + data[obj].marks
// }

// console.log(sum)



let data1 = [
    {name:"Anjali", marks:98},
    {name: "Pratyush", marks:67},
    {name: "Katyayni", marks:99}
]
let sum = 0

for(let obj in data1){
    // console.log(obj)

    sum = sum + data1[obj].marks
}

// console.log(typeof data1)
// console.log(Array.isArray(data1), Array.isArray(data))


let Arrey = {
    isArray : function(obj){
        if(obj.length) return true
    }
}

// console.log(Arrey.isArray(data1))


//264
// let sum = 0
// for(let student in data){

//     let name = data[student].name

//     console.log(name)

//     // sum+= student.marks
// }

// console.log(data)