// Question 1: Map vs forEach
/**
 * Map returns an new array with out changing it's original array. 
 * so it is called the pure function. we can use it chan operation.
 * arr.map(()=> {})
 * 
 * forEach , It doesn't return an array it can modify the existing array. 
 * arr.forEach(item=> {});
 */

// Question 2: null vs undefined
/**
 * null is a object type value. it is used to assign value to some variable.
 * undefined . this meas the variable declared not initializes.
 * null == undefined // true
 * null === undefined // false
 */

// Question 3: Explain Event Delegation
/**
 * In this process we just add the event listener on the parent instead of add all it's children's and track child item child on't parent event listener.
 */
//

//Question 4 : Infinite currying

function add(a) {
  return (b) => {
    if(b) 
      add(a+b);
    else
      return b;
  }
}