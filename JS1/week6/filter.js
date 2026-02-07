let mix = "Hello123World%$#"

let lettersOnly = ""        //HelloWorld

for(let char of mix){
    let placeholder = char.toLowerCase()
if(placeholder >= 'a' && placeholder <= 'z'){
    lettersOnly += char
}
// if(char>=0 && char<= 9){
//     continue
// }
// lettersOnly += char
}

// console.log(lettersOnly)



let text = "Mississippi"

let letter = 's'    //count ?

let count = 0


for(let char of text){
if(char == letter) count ++
}
// console.log(count)


//Pattern Checking

//write a function to check if string contains only digits

// let check = "123a5"

// function isAllDigits(str){

//     return true/false
// }


// function check(str){
//     isdigit = true
//     for(let char of str){
//         if(char >= 0 && char<=9)
//             isdigit = true
//         else{
//         isdigit = false
//         break
//         }
//     }
//     return isdigit
// }
// console.log(check("123&"))

function isAlldigits(str){
    for(let i of str){
        if(i>='a'&&i<='z') return false;
        
    }
    return true;
}
console.log(isAlldigits("123A5"))

