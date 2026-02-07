let student = {
    "student name" : "Amit",
    marks: 90,
    age : 19,
    "email@gmail" : "Google",   //Property

    add : function(a,b){    //method
        return a+b
    }
}

// student name : Amit
// marks : 90

// console.log(student.add(4,3))


//create a object Calculate, three methods - add, subtract and remainder finder

let calculate = {
    add: function(a,b){
            return a+b
    },
    sub: function(a,b){
        return a-b
    },

    
    remainder : function(a,b){
        return a%b
    }
}

// calculate (remainder 10 divided by 3)

let result = calculate.remainder(14,3)

console.log(result)