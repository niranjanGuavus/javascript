/**
 * Closures is a function that references to it's outer scope
 * from it's inner scope.
 * there are three type of scope in javascript
 * 1. Global scope
 * 2. module scope
 * 3. functional scope
 * 4. block scope
 */
//Lexical scope

//global scope
function subscribe() {
  //inner scope 2
  let name = "niranjan";
  function displayName() {
    //inner scope
    console.log(name);
  }
  displayName();
}
subscribe(); // it will print the name i.e is called closer

//Another example

function makeFunc() {
  var name = "litu";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

const callMakeFunc = makeFunc();
callMakeFunc(); // litu

// counter through Closures
function counter() {
  let counter = 0;
  return () => {
    ++counter;
    return counter;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

//loop with set time setTimeout by let scope
console.log("loop with set time setTimeout by let scope");
function iterateValues() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}
iterateValues();
//Output: 0 1 2 3 4
// Note: let is local scope so it hold the value.

//loop with set time setTimeout
console.log("loop with set time setTimeout by var scope");
function iterateValues1() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}

iterateValues1();
//Out put: 5 5 5 5 5
//here var is global scope then the last time out value will print in each iterataion.

//loop with set time setTimeout with closure
console.log("loop with set time setTimeout with closure");
function iterateValues2() {
  for (var i = 0; i < 3; i++) {
    setTimeout((j) => console.log(j), 1000, i);
    // ((value) => {
    //   setTimeout(() => console.log(value), 1000);
    // })(i);
  }
}

iterateValues2();
//Out put: 0 1 2
//here we pass the vale of i through closure so it get it's actual value.

//Sum of two numbers through closure

function sum(a) {
  return (b) => {
    return a + b; // here a is it's lexical scope so it access it.
  };
}
sum(4)(5); // output 9

// once function with closure function
console.log("once function with closure function");
function once(fun, context) {
  let ran;
  return (args) => {
    if (fun) {
      ran = fun.apply(context, args);
      fun = null;
    }
    return ran;
  };
}

const welcome = once((a) => console.log("Welcome", a));
welcome(["niranjan"]); // welcome niranjan
welcome(["swain"]); // no output because this function only call once

//memoize polyfills through closure
console.log("memoize polyfills through closure");
function memoize(func) {
  let cache = {};

  return (...args) => {
    let key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = func.apply(this, args);
    }
    return cache[key];
  };
}

const sumNumber = (a, b) => a + b;

const getName = (obj) => `${obj.fname}  ${obj.lname}`;

const sumMemoize = memoize(sumNumber);
console.log(sumMemoize(1, 2)); // it execute the function
console.log(sumMemoize(1, 2)); // it returns from the cache

const nameMemoize = memoize(getName);
console.log(nameMemoize({ fname: "niranjan", lname: "swain" })); // it execute the function
console.log(nameMemoize({ fname: "niranjan", lname: "swain" })); // it returns from the cache
