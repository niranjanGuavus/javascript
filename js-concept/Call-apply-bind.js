
/**
 * call() vs apply() vs bind()
 * These are function prototype methods. it executes the function in a different  context by providing this.
 * call and apply has a minimal difference . call take arguments in comma separated however in apply it expects an array.
 * the call vs apply examples are given below
 */

function getName(greeting) {
  return ` ${greeting} to ${this.fName} ${this.lName}`;
}

const obj = {
  fName:'Niranjan',
  lName: 'swain'
}

const obj1 = {
  fName:'Litu',
  lName: 'swain'
}

console.log(getName.call(obj, 'hello')); // hello to Niranjan swain
console.log(getName.apply(obj1, ['welcome'])); // welcome to Litu swain

/**
 * Bind() method creates a new function that, 
 * when called has it's this keyword set to the provided value,
 * with a given sequence of arguments and provided when the new function called. 
 */
this.x = 9;
const module = {
  x: 81,
  getX: function () { return this.x;}
}

module.getX(); // it will give 81 because it will pick the value from it's local scope.

const retrieveX = module.getX;
retrieveX() // it will give 9 because it will pick the value from global scope.


const boundGetX = retrieveX.bind(module);
boundGetX(); // it will give 81 because it bind with the module object