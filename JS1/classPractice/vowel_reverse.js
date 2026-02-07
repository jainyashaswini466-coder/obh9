let str="hello how are you";

let arr=[];
str=str.toLowerCase().split("");
let v="aeiou";
for(i=0;i<str.length;i++){
    if(v.includes(str[i])){
        arr.push(str[i]);
        str[i]=-1;
    }
}

// arr = ['e','o','o','a','e','o','u']


// str = ['h',-1,'l','l',-1," ",'h',-1..]

for(i=0;i<str.length;i++){
    if(str[i]==-1) str[i]=arr.pop()
}
console.log(str.join(""))