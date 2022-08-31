/**
 * Ques 1:
 * Ans:- it will go for a nifite loop because while run infite times.
 * the call stack is busy alwasy so it won't get any change to print "world"
 */
function print() {
  setTimeout(() => console.log("world"), 0);

  while (true) {
    console.log("hello");
  }
}

/**
 * Ques 2: wite a clone method to deep clone a object
 * Ans:- There is a way to deep clone like JSON.stingfy() then JSON.parse()
 * here we do a function to do it manually upto ndepth
 */
function deepClone(obj, newObj) {
  if (!newObj) {
    newObj = {};
  }

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      newObj[key] = {};
      deepClone(obj[key], newObj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let person1 = {
  name: "niranjan",
  age: 30,
  addres: {
    city: "gurgaon",
    country: "india"
  }
};
console.log(deepClone(person1));

/**
 * Ques 3: wite a pollyfill function of array reduce method
 */
Array.prototype.reducer = function (fun, initialValue) {
  let values = this;
  for (const item of values) {
    initialValue = initialValue !== undefined ? fun(initialValue, item) : item;
  }
  return initialValue;
};

/**
 * Ques 3: wite a pollyfill of bind function of function
 */
Function.prototype.bind = function (context, ...args1) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.func = this;

  return (...args2) => {
    let arg = args1.length > 0 ? args1 : args2;
    return context.func(...arg);
  };
};

Function.prototype.call = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  let func = this;
  context.func = this;
  return context.func(...args);
};

/**
 * Ques 4: the way one object use other object function without prototype
 */
let obj1 = {
  age: 10,
  showAge() {
    return this.age;
  },
  showName(name) {
    return name;
  }
};

let obj2 = {
  age: 100
};
console.log("age of ob2 is", obj1.showAge.call(obj2));
//output:  age of ob2 is 100
