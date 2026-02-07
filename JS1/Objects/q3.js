var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

console.log(obj.flat)

function findPath(obj,str){
    let result = ''
    let pathPoints = str.split('.') //[a,b,c]
    for(let point in pathPoints){
        // result = obj[]
    }

    console.log(result)
}

findPath(obj,"a.b.c")   