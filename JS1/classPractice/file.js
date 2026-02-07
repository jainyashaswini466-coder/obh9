// let arr = [1,2,3];

// [arr[0],arr[1]] = [arr[1],arr[0]]

// console.log(arr)



// // hellohi ---> eoi  ----> ioe ----> hillohe

//sort array without sort method

let arr=[6,5,8,4]       //[4,5,6,8]

for(let i=0;i<arr.length;i++){
    let temp=0;
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
      }
    }

}
    console.log(arr)