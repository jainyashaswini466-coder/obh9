// let filename = 'document.pdf'   //pdf
let file2 = 'archive.com'   //com
let file3 = 'readme'    //No extension
let file4 = "very.important.md"     //md

//getExtension => pdf

// console.log(file2.slice(file2.lastIndexOf(".")+1))


//includes() ---> boolean outputs ---- true/false


let filename = file2

let dotIndex = filename.lastIndexOf(".")

if( dotIndex === -1){
    return "No extension"
}

return filename.substring(dotIndex+1)