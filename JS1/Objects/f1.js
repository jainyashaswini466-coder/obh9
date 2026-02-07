input = 'yzthrhytrjr'

// result = 'c'

// console.log('y'.charCodeAt(0))

function ReturnDesiredCharacter(input){

    let code = input.charCodeAt(0) + 2

    if(code==123) code = 97
    else if(code==124) code= 98

return String.fromCharCode(code)
}


let result = ''
for(let char of input){
    result += ReturnDesiredCharacter(char)
}
// console.log(ReturnDesiredCharacter(input))

console.log(result)