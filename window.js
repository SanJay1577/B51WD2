// Introduction to Array
// Array and JSON iteration
// XMLHttpRequest
// Hoisting & scope

const arr = [4, "string", true, [0, 1, "s"], { a: "aaa" }];

//methods

console.log(arr);
// lookup [0]
console.log(arr[0]);
console.log(arr[3][2]);
console.log(arr[4].a);

// json iterations
// javascript object notations
// key : value

const Data = {
  string: "sanjay",
  number: 7,
  array: ["sanjay", 7, { nestedObj: "nestedValue" }],
  obj: {
    batch: "B51wd2",
    mentor: "sanjay",
    stack: ["javascript", "html", "css"],
  },
  isStudent: true,
};
// array means [index] , object - dot operator
console.log(Data);
console.log(Data.array[2].nestedObj);
console.log(Data.obj.stack[1]);
console.log(Data.obj.mentor);

const samArr = [1, 2, 3, 4];

console.log("before", samArr);
// push // last add
samArr.push(5);
console.log("after", samArr);

console.log("before", samArr);
// pop //last  remove
samArr.pop();
console.log("after", samArr);

console.log("before", samArr);
// unshift // frist add
samArr.unshift(0);
console.log("after", samArr);

console.log("before", samArr);
// shift // first remove
samArr.shift();
console.log("after", samArr);

//hoisting
