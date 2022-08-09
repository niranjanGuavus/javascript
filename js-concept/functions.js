// Function example

//function declaration
function sum(a, b) {
  return a + b;
}
console.log(sum(4, 5));

//function expression
const add = (a, b) => a + b;
console.log(add(3, 5));

/**
 * hoistile:
 * In the javascript all the variable and
 * function declaration comes to top of it's define scope.
 * int a; a is declared
 * int a = 0; a is declared AND initialized to 0
 * Note: function expression don't take part in hoisting.
 */

var x = 20;
var displayValue = function () {
  console.log(x);
  var x = 10;
};
displayValue(); // undefined becasue for hoisting

/**
 *  Javascript support callback function , i mean a function can pass as argument and
 *  that function can call in the other place. This concept call 1st order function of higer order function.
 */

//Arrow function vs normal function
/**
 * It has major four difference
 * 1:-  syntax change. arrow function has more clean
 * 2:- for one line statement arrow function doesn't require return statement
 * 3:- arrow function doesn't support arguments however the normal function does.
 * 4:- this key word:- for arrow function this refer to where it's parent scope define however in normal functio it points to it's call object.
 */
// Arrow function this example
let userName = "litu";
let user = {
  userName: "Niranjan",
  getName: () => {
    const t = () => console.log(this);
    t(); // it will refer to window object
    return this.userName;
  },
  getName1() {
    return this.userName;
  }
};

console.log(user.getName()); // undefined
console.log(user.getName1()); // Niiranjan
