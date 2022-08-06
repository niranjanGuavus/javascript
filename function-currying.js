/**
 * The function curring is a concept tha a unary function takes multiple argument
 *  one after another and return the result
 */

//Generic code for sum n
function multiSum(a) {
  return (b) => {
    if (b) multiSum(a + b);
    return a;
  };
}

console.log(multiSum(3)(4)(5)());

//generic code to handel any functionargument types in curring manner type

function sum(a, b, c) {
  return a + b + c;
}

function curry(func) {
  function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...more) {
        return curried(...args, ...more);
      };
    }
  }
  return curried;
}

let sumCurryingFunc = curry(sum);

console.log(sumCurryingFunc(3)(4)(5));
