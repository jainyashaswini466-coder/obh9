// n = 7
// sp = n-1

// for(let row = 1; row <= n; row++){
//     let str = ''

// // for(let j = 1; j<=n-row; j++){
// //     str+=' '
// // }

// let spaces = " ".repeat(n-row)

// for(let star = 1; star<=row; star++){
//     str+="*"+' '
// }



// console.log(spaces + str)
// }


// console.log("  *")              //spaces = n = 3-1 = 2
// console.log(" ***")             //spaces = n-2 = 1 space
// console.log("*****")            // spaces = n-n = 0spaces


// for(let i = 1; i<= n; i++){
//     let str = ''
//      let spaces = " ".repeat(n-i)

//      for(let j=1; j<= (2*i -1); j++){
//         str+='*'
//      }
//      console.log(spaces + str)
// }





		let mid = (n + 1) / 2;

    for (let i = 1; i <= n; i++) {

      // decide stars
      let stars;
      if (i <= mid) {
        stars = 2 * i - 1;
      } else {
        stars = 2 * (n - i) + 1;
      }

      // decide spaces (important trick)
      let spaces = (n - stars) / 2;

      // print spaces
      let row = "";
      for (let s = 1; s <= spaces; s++) {
        row += "  ";
      }

      // print stars
      for (let st = 1; st <= stars; st++) {
        row += "* ";
      }

      console.log(row);
    }
