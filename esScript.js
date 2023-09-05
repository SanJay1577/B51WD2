console.log("es6 modules");

// var let const

// recap
//redeclartion  - not possible range
// const a = 15;
// const a = 20;
// console.log(a);
// let b = 15;
// let b = 25;
// console.log(b);
// possible range
// var c = 13;
// var c = 15;
// console.log(c);
// re initialization
// not possible range
// const a = 15;
// a = 20;
// console.log(a);

// possible range
// let a = 25;
// a = 30;
// console.log(a);

// var a = 25;
// a = 30;
// console.log(a);

// regarding hoisting
// console.log(a);
// let a = 20;
//is let and const hoisted or not?

// pername  // 1000 // debug
// pername // 1500

// let pername = "name" // 2000

//block scope

if (true) {
  let outblock = 30;
  // console.log(inBlock); // not accesible
  if (true) {
    let inBlock = 40;
    console.log(outblock);
  }
}

function scopingFunc() {
  let funcVar = 20;
  if (true) {
    //let funcVar = 20;
  }
  console.log(funcVar);
}
scopingFunc();

// shadowing property
if (true) {
  const shadow = "sx";
  if (true) {
    const shadow = "xy";
    console.log("xy block :", shadow);
  }
  console.log("sx block", shadow);
}
// template literals

const name = "sanjay";
const position = "mentor";

console.log("my name is " + name + " and I'm a " + position);
console.log(`
my name is ${name} and I'm a ${position}
my name is ${name} and I'm a ${position}
`);

// spread operator
let fruitItems = ["mango", "papaya", "orange"];
let vegItems = ["potato", "onion", "brinjal"];
let dairyItems = ["milk", "chcolate", "iceCreams"];

let FridgeTray = [
  "carrot",
  "cucumber",
  ...fruitItems,
  ...vegItems,
  ...dairyItems,
];
console.log(FridgeTray);

// Rest Operator
const [value1, value2, value3, ...rest] = FridgeTray;
console.log(value2);
console.log(value3);
console.log(rest);

0 - 10, 0 - 10, 0 - 10;

// function rotatingArray(arr, k){
//   //left part
//    left (0 index , 2 index) 1, 2
//    right remaining  3, 4
//    right +lef  =

// }
// ([1, 2,  3, 4], 2)
//  //  4, 1, 2, 3
