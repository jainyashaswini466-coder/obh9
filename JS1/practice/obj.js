

// iteration, for..in ---> []
//notations, . , []

//convert a array into an object --> map

// [1,2,2,2,3,3,4]


// ...

let user = {
  name: "Kamal",
  age: 23,
  isStudent: true
};

let course = {
  title: "MERN Stack",
  duration: "6 months",
  level: "Beginner"
};

// console.log(Object.entries(course))

function entriesCustom(obj){

    let res = []

    
    for(let key in obj){
        let pair = []

        pair.push(key)

        let value = obj[key]
        pair.push(value)

        res.push(pair)
    }

    return res
}

let enteries = entriesCustom(course)

console.log(enteries)


// const newObj = {...user, ...course}

// console.log(newObj)

// course = {...user, ...course}

// console.log(course)

// console.log('line 31',user)

let merged = Object.assign({},user,course)

// console.log(merged)
// console.log(user)



// const names = "Amit"

// names = "Kamal"