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

// Destructuring

//we can destructure Obj and array

// Array Destructuring

const studentArray = ["Abdulla", "Arun", "Balaji", "meenatchi"];
console.log("Before destructuring .............................");
// before destructuring
console.log(studentArray[0]);
console.log(studentArray[1]);
console.log(studentArray[2]);
console.log(studentArray[3]);
console.log("After destructuring .............................");
const [stud1, stud2, stud3, stud4] = studentArray;
// after destructuring
console.log(stud1);
console.log(stud2);
console.log(stud3);
console.log(stud4);

// skipping values
console.log("skipping valuesss-------------------");
const [studVal1, , studVal2] = studentArray;
console.log(studVal1);
console.log(studVal2);

// rest operator in destructuring
const weeks = [1, 2, 3, 4];
const [firstweek, secondweek, ...restweeks] = weeks;
console.log(firstweek);
console.log(secondweek);
console.log(restweeks);
// nested destructuring
const [restparam1, restparam2] = restweeks;
console.log(restparam1);
// task -5min
const testArray = [1, 2, 5, 7, ["sanjay", 25], 6];
//nested destructuring
const [, , , , [mentorname, mentorage]] = testArray;
//console.log(value);
console.log(mentorname);
console.log(mentorage);

// Object destructing
const personObj = {
  firstName: "sanjay",
  lastName: "guvi",
  pos: "mentor",
  location1: "chennai",
  address: {
    state: "Tamil Nadu",
    country: "India",
  },
};
console.log("Before object destucturing ------------");
console.log(personObj.firstName);
console.log(personObj.lastName);
console.log(personObj.pos);
console.log("After object destucturing ------------");
const { firstName, pos, lastName } = personObj;
console.log(firstName);
console.log(pos);
console.log("Renaming the objcet........");
const { location1: city } = personObj;
console.log(city);
// Nested Object
const {
  address: { state, country },
} = personObj;
console.log(state);
console.log(country);
