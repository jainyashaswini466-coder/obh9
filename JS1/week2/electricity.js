


// let unit = 60 -> 50*1 = 50, 10*2 = 20     => 70

// let unit = 60
// let balance_units = 0
// let bill = 0

// if(unit>50){
// balance_units = unit-50
// bill = bill + 50*1
// }

// if(balance_units>0 && balance_units<=100){
// bill = bill + balance_units* 2
// }

// console.log(bill)


// Problem Statement: Enter number of electricity units consumed and calculate amount to pay, based on the rules below:

// First 50 units: ₹1/unit
// Next 100 units: ₹2/unit
// Next 100 units: ₹3/unit
// Above 250 units: ₹4/unit
// For bills above ₹150, add surcharge of 20%
// Constraints: 0 <= units <= 1000
// Input: Integer/float – number of units consumed
// Output: Final bill amount


let unit =290
let bill = 0

if(unit<=50){
    bill = unit
}
else if(unit<=150){
    bill = 50 + (unit-50)*2
}
else if(unit<=250){             //230
    bill = 50*1 + 100*2 + (unit-150)*3
                //   230-150 = 80
}
else {      //290-250 = 40
    bill = 50 + 100*2 + 100*3 +(unit-250)*4
            // 550+160 = 710
}

console.log(bill)