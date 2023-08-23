/// Basic of language
//; //line breaker // not necessary

// commnet out lines

console.log("first line of code");

//console.log("second line of code");

console.log("third line of code");

////////creation of variable
//syntax -> variablekeyword variableName = value
var a = 20;
console.log(a);

// declaring a varible
var b;
b = 30;
console.log(b);

// differt types of variable declaration
//var let const

//var
var xyz = 35;
xyz = 40; // we can reassign a value
var xyz = 4550; // we can redeclare
console.log(xyz);

//let
let abc = 50;
abc = 55; // we can reassign a value
//let abc = 60; // we cannt redeclartion
console.log(abc);

//const
//camleCasing
//elephant casing  ALL caps
const studentName = "Eshwar";
//studentName = "Sanjay"; // we cannot re assign
//const studentName = "Vijay"; // we cannot redeclare
console.log(studentName);

// data types
// primtive
// string  -> "" or ''
// Boolean -> true or false
// Number -> 012121
// null -
// undefined
// float -> 565.978298

// non primtive
// array
// object

// const name = "sanjay";
// const name2 = "guvi";
// console.log(name, name2);

// let value = null; // nothing
// console.log(value);

// undefined
// let value2;
// console.log(value2);

// let sampleValue = null;
// console.log(sampleValue);
// sampleValue = 55;
// console.log(sampleValue);
///let name = sanjay;
//array
const arr = [0, "sanjay", true, null, 76.97];
console.log(arr);
// accesing array
console.log(arr[2]);
// objects
//key : values
const sampleObj = {
  name: "sanjay",
  education: "B.E",
  age: 25,
};
console.log(sampleObj);
// accesing object
console.log(sampleObj.age, sampleObj.education);

// operators
console.log("----------------------------------------------");
console.log("Operators------------");
// two differnt values compare and give a result
// arthimetic operators
// + - * / % ++ --
let val1 = 90;
let val2 = 99;
console.log("Arthmetic operators------------");
console.log("Add ", val1 + val2);
console.log("Sub ", val1 - val2);
console.log("Div ", val1 / val2);
console.log("Mul ", val1 * val2);
console.log("Reminder ", val1 % val2);
console.log("Before inc val1 ", val1);
val1++;
console.log("after inc :", val1);
console.log("Before dec val1 ", val1);
val1--;
console.log("after dec :", val1);
console.log("---------------------------------------");

console.log("assignment opertor");
console.log(val1);
val1 += 50; // val1 = val1 + 50 // -=, *=, /= %=
console.log(val1);
console.log("---------------------------------------");

console.log("comparison  opertor");
const comVal = 10;
const comVal2 = "10";
console.log("Non strict comparison", comVal == comVal2);
console.log("strict comparision", comVal === comVal2);
console.log("Not eqaul", comVal != comVal2);
console.log(" Not equal comparision", comVal !== comVal2);
console.log("greater than", val1 > val2);
console.log("lesser than", val1 < val2);
const eqlVal = 10;
const eqlVal2 = 10;
console.log("greater than eqaul", eqlVal >= eqlVal2);
console.log("lesser than eqaul", eqlVal2 <= eqlVal2);

// Logical Operators
console.log("---------------------------------------");
console.log("logical operators");
// && || !
const task = 80;
const attendence = 75;
const score = 77;

console.log(score > task && score > attendence);
console.log(score > task || score > attendence);
console.log(!(score > task && score > attendence));
console.log(!(score > task || score > attendence));

// loops
console.log("-------------------------------");
console.log("-------- forloop-------");
/// let i(variable) = 0 , 0 1 2 3 4
// condition i <= 5
// defining skip values
// value update agum
// day = 1 -> day <=5 (true), day++ = 2
// day = 2 -> day <=5 (true) , day ++ = 3
//day =3 -> day<=5 (true), day ++ = 4
// day =4 -> day <=5(true), day ++ = 5
// day = 5 -> day<=5 (true), day ++ = 6
// day 6 -> day<=5 (false);

for (let day = 5; day >= 1; day--) {
  console.log("Buyed milk for day", day);
}
// conditions
console.log("-------------------------------------------");
console.log("conditions----------------");

let average = 35;
let good = 60;
let excellence = 90;
let yourMark = 68;

if (yourMark >= excellence) {
  console.log("You are excellent");
} else if (yourMark >= good) {
  console.log("you scored good mark ");
} else if (yourMark >= average) {
  console.log("You have just passed");
} else {
  console.log("You have failed");
}

// switch case ( results)
const day = 6;
switch (day) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;
  default:
    console.log("you have not entered a date");
}

// function with return keyword
// function functionName (){
// logic of a function
//}

function add(num1, num2) {
  console.log(num1 + num2);
}

function sub(num1, num2) {
  console.log(num1 - num2);
}

function mul(num1, num2) {
  return num1 * num2;
}
sub(60, 5);

function calulator(type, num1, num2) {
  switch (type) {
    case "add":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "mul":
      return num1 * num2;
    default:
      return "please check you inputs";
  }
}

const result = calulator("mul", 40, 5);
console.log(result);
