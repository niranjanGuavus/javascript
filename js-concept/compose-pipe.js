
/**
 * Compose do the operation from right to left order.
 * @param  {...any} funcs list of functions
 */
 const compose = (...funcs) => {
    return (x) => funcs.reduceRight( (v, f) => f(v), x);
}

/**
  * Pipe do the operation from let to right order.
 * @param  {...any} funcs list of functions
 */
const pipe = (...funcs) => {
    return (x) => funcs.reduce( (v, f) => f(v), x);
}

const double = x => x * 2
const square = x => x * x

console.log("Compose ==>", compose(double, square)(2));
console.log("Pipe ==>", pipe(double, square)(2));