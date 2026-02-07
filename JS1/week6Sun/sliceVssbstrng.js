//similar to slice() but it can't accept negative indices (treats as 0)
// start>end

let language = 'javascript'

// console.log(language.slice(-6)) //script

// console.log(language.substring(-6)) //assume index = 0

// console.log(language.slice(6,2))    // ""

// console.log(language.slice(-6,-2))      // scri

console.log(language.substring(6,2))       // swap if start>end
                            // 2,6         //   start<end