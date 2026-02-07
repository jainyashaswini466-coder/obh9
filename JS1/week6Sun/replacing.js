
// String.replace(seacrhValue, replaceValue)

let text = "i love javascript, javascript is great"
        //    "i **** ------------------------------ "


// let updated = text.replaceAll("javascript",'python')

// console.log(updated)


function censorWord(text, badWord){
    let censored = "*".repeat(badWord.length)

    return text.replaceAll(badWord, censored)
}

// console.log(censorWord(text, "javascript"))




function formatPhone(phone){
    let number = ''
    for(let char of phone){
        // console.log(char.charCodeAt(0))
        // if(!(char>=0 && char<=9)){
        if(char.charCodeAt(0)>48 && char.charCodeAt(0)<57)
            // number =  phone.replaceAll(char,"")
            // console.log(number)
            number+=char
        }

    // let number = phone.replaceAll("(","").replaceAll(")","").replaceAll(" ","").replaceAll("-","")

    return number
}

console.log(formatPhone("(123) 456-7890"))    // 1234567890