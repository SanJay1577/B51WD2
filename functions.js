// console.log("working good");

// const obj1 = {
//   age: 5,
//   name: "Person 1",
// };

// const obj2 = {
//   age: 5,
//   name: "Person 1",
// };

// const newString1 = "sanjay";
// const newString2 = "sanjay";
// console.log(newString1 === newString2);
// console.log(JSON.stringify(obj1));
// console.log(JSON.stringify(obj2));
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
// console.log(obj1 === obj2);

// function deepComparision(obj1, obj2){

// check for object type
// null
// object.key

//}

// functions
// verb
console.log(a);
var a = 15;
console.log(a);

b();

// function declaration
function b() {
  console.log(c);
  var c = 25;
}

// javascript function first citizen

function askMyName() {
  console.log("sanjay");
}

askMyName();

function giveYourName(name, name2) {
  //name -> parameters
  console.log(
    `
  Hi ${name} and ${name2}, nice knowing you....😉
  I hope ${name} and ${name2} are friends
  `
  );
}

giveYourName("vijay", "parshanth");
// vijay , parashanth-> arguments

var studentName = "vijay"; //khajhs21

// first class functions
// we can use it as a common data type

function returnMyName(name) {
  return name;
}

const myname = returnMyName("vijay"); // sanjay
console.log(myname);

function myAge(age) {
  return age;
}
console.log(myAge(30)); // 30

function executeFunc(func, age) {
  myAge, 25;
  //console.log(myAge(30)); // 25
  func(age);
  myAge(25);
  console.log(myAge(25));
  console.log(func(age));
}

executeFunc(myAge, 25);

// I want a function which return a message "hey {name} welcome to guvi"
// greetme(name)
// executeFunc(func, arguments) // console.log()
//
function greetme(name) {
  return `Hey ${name} welcome to guvi`;
}

function funcExecuteGreetFuc(fn, args) {
  // fn -> greetme , args -sanjay
  // fn() -> greetme()
  // fn(args) -> greetme("sanjay")
  console.log(fn(args));
}

funcExecuteGreetFuc(greetme, "sanjay");

// pure function

// any function that returns same out for same input

function add(num1, num2) {
  console.log("value is ", num1 + num2);
}

add(5, 10);
add(5, 10);
add(5, 10);

// Higher order functions
// higher order
function multipleBy(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multipleBy(2);
console.log(double(15));

const demoObject = {
  name: "person1",
  age: 5,
};

const demoObject2 = {
  age: 5,
  name: "person1",
  operation: "Full stack",
};
function returnableFunction() {
  return 5;
}

var a = 5; //a = 5
returnableFunction(); // 5
console.log(a);
console.log(returnableFunction());
const valuesOfFunc = returnableFunction();
console.log(valuesOfFunc);

// var objectKey1 = Object.keys(demoObject).sort();
// var objectKey2 = Object.keys(demoObject2).sort();

// // length
// console.log(objectKey1);
// console.log(objectKey2);

// // console.log(Object.values(demoObject));

function anotherFunction(age) {
  return age;
}

const another = anotherFunction;
console.log(another);

function higherOrder(factor) {
  //3
  return function (number) {
    //5
    console.log(number * factor);
  };
}

const factorNumber = higherOrder(3);
console.log(factorNumber);
factorNumber(5);

// normal returnable function
function sumTwoNumbers(num1, num2) {
  return num1 + num2;
}
const normalResult = sumTwoNumbers(10, 10);
console.log(normalResult);

// arrow function
// no return statement
// varible
var arrowResult = (num1, num2) => num1 + num2;
var value = arrowResult(5, 10);
console.log(value);

// anonymous function
const sayHello = function () {
  console.log(5 * 5);
};
sayHello();

//IIFE
//()()
//"function bracket"("call bracket")

// (function () {
//   console.log("IIFE in anonymous");
// })();

(() => console.log("calling IIfE in arow"))();

const argArr = [1, 2, 3, 4, 5, 6, 7];

function printOdd(arr) {
  //
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
}

printOdd(argArr);
// anonoyms
const printOddAn = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
};

printOddAn(argArr);
// arrow
const printOddARR = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
};
printOddARR(argArr);

//()()IIFE
//
((arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
})(argArr);

const yourName = "manoj";

function printName(name) {
  console.log(name);
}
printName(yourName);
const demoValue = "manoj";

var sampleOne = "mom";
const reversable = sampleOne.split("").reverse().join("");
console.log(sampleOne === reversable);

// higher order function

function TopLayerFunc(value1) {
  return function (value2) {
    return value1 + value2;
  };
}

const returnStore = TopLayerFunc(10); // function
const result = returnStore(10);
console.log(result);
