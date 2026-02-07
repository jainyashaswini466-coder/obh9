// Create a function that validates an email address
// Rules:
// - Must contain exactly one @
// - Must contain at least one dot after @
// - Username must be at least 3 characters
// - Domain must be at least 3 characters


function validateEmail(email){
    if(email.split("@").length !==2 ) return false;

    const [username, domainPart] = email.split("@") //['sourabh','gmail.com']

    if(username.length <3) return false;

    if(!domainPart.includes(".")) return false

    if(domainPart.split(".")[0].length <3) return false

    return true

}

// function validateEmail(email) {
//   let username = email.split("@")[0];
//   let domain = email.split("@")[1].split(".")[0];
//   let tail = email.split("@")[1].split(".")[1];

//   console.log(tail)

//   if (!tail) return false;
//   if (username.length < 3) return false;
//   if (domain.length < 3) return false;
//   return true;
// }

// function validateEmail(email){
//     let emailArr = email.split("@")

//     isValidEmail = true
//     let countdot = 0
//     if(emailArr[0].length < 3 && emailArr[1].length < 3) isValidEmail = false

//     if(email.includes(".")){
//         countdot++
//     }
//     if(countdot !== 1) isValidEmail = false

//     return isValidEmail
    
// }


console.log(validateEmail("sourabh@gmail.com"));

// Test cases
// console.log(validateEmail("user@gmas@il.com"));      // false
// console.log(validateEmail("ab@test.com"));         // false (username too short)
// console.log(validateEmail("user@gm"));             // false (no dot after @)