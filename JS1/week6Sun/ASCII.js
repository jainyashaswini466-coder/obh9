// numbers to characters - american standard code

// A-Z : 65-90
// a-z : 97-122
//difference b/t uc and lw = 32
// 0-9 : 48-57

// charCodeAt(index)

// console.log("a".charCodeAt(0))


// console.log(Math.abs("A".charCodeAt(0) - "a".charCodeAt(0)))

let firstName = 'maya' //---> "MAYA"
let FIRSTNAME = ''

for(let i = 0; i<= firstName.length - 1; i++){
    let lowerCharCode = firstName.charCodeAt(i)-32
    let UpperChar = String.fromCharCode(lowerCharCode)
    FIRSTNAME += UpperChar
}

// console.log(FIRSTNAME)

// console.log('a'.charCodeAt(0)-32)


// 65 -> char        fromCharCode

// console.log(String.fromCharCode(65))

// console.log(String.fromCharCode(91,92,93,94,95,96))



function customToLowerCase(alphabet){       // 'A', 'K'
    let code = alphabet.charCodeAt(0)       // 65
    
    return String.fromCharCode(code + 32)
}

console.log(customToLowerCase('U'))

// function lowerCase(char) {
//   return String.fromCharCode(char.charCodeAt(0) + 32);
// }

// console.log(lowerCase("Y"));  // ✅