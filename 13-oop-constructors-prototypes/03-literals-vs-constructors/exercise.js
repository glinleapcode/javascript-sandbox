// 1-10-24

// strLit is literal
const strLit = "Hello";
// strObj is an object
const strObj = new String("Hello");

console.log(strLit, typeof strLit); // hello string
console.log(strObj, typeof strObj); // [String: 'Hello'] object

// Boxing: literal to object
console.log(strLit.toUpperCase()); // HELLO
console.log(strLit[0]); // H

// Unboxing: object to literal
console.log(strObj.valueOf(), typeof strObj.valueOf()); // valueOf is the Object's prototype(inherited)

// constructor
console.log(strLit.constructor); // same constructor function return
console.log(strObj.constructor); // same constructor function return

// instance
console.log(strLit instanceof String); // false
console.log(strObj instanceof String); // true

// Other types Number, Boolean, Array

const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit); // 20 number
console.log(numObj, typeof numObj); //[Number: 20] object

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit); // true boolean
console.log(boolObj, typeof boolObj); // [Boolean: true] object

const arrLit = [1, 2, 3, 4, 5]; // object
const arrObj = new Array(1, 2, 3, 4, 5); //object
console.log(arrLit, typeof arrLit); // same
console.log(arrObj, typeof arrObj); //same

// weird stuff

const funcLit = function (x) {
  return x * x;
};

console.log(funcLit, typeof funcLit); // [Function: funcLit] function
console.log(funcLit(10)); // 100

const funcObj = new Function("x", "return x * x"); // create a function
console.log(funcObj(8)); // 64

// both ways are the same to create a Object instance
const obj1 = {};
const obj2 = new Object();
console.log(obj1, typeof obj1); // {} object
console.log(obj2, typeof obj2); // {} object
