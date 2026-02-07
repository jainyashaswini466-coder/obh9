let studentName = "Rahul"
let score = 65
let totalMarks = 100
let percentage = score*totalMarks /100

// console.log(`${'='.repeat(38)}`)

//-------------------
//STUDENT REPORT CARD
//--------------------
//Name :  
//Score :  _/_
//Percentage : _%
//Grade : >=90 - 'A', >=75 - 'B', else 'C'
//---------------------

let report = `${'='.repeat(38)}
STUDENT REPORT CARD
${'='.repeat(38)}
Name : ${studentName}
Score : ${score}/${totalMarks}
Percentage : ${percentage}%
Grade : ${percentage >=90 ? 'A' : percentage >=75 ? 'B' : 'C'}
${'='.repeat(38)}
`

console.log(report)