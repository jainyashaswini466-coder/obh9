// let n = 154

function checkArmstrong(n){
let numStr = String(n)

let sum = 0
let len = numStr.length

for(let i = 0; i<len; i++){
    sum+= numStr[i]**len
}
if(sum === n) return n
else return ''
}



let m =0, n = 1260



let output = ''

for(let i = m; i<=n; i++){
    if(typeof checkArmstrong(i) == 'number')
    output += checkArmstrong(i) + ' '

}
console.log(output)