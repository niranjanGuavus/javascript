/**
 * javascript execution context
 * 1:- creation phase. It has three phase.
 *    a. create a window object,
 *    b. define a heap memory to store the variable and function.
 *    c. initialize those with undefined.
 * 2:- Execution phase.
 */
// hoisting
/**
 * Temporal-dead-zone is a time between the variable declaration and initialization.
 * */

//var vs let vs const scoped

{
  let a = 5;
  var b = 10;
}

console.log(a); // reference error a is not define
console.log(b); // 10

function abc() {
  console.log("var scope", a); // undefined
  console.log(c); // Reference error c is not defines
  var a = 10;

  console.log("let scope", d); // ReferenceError: Cannot access 'd' before initialization
  let d = 30;
}

abc();
