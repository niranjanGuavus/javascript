/**
 * Ques:1
 */
let a = { y: 10 };
a.x = a;
console.log(JSON.stringify(a));
//Output: Uncaught TypeError: Converting circular structure to JSON

/**
 * Ques:2
 */
let a1 = [1, 2, 3];
delete a1[0];
console.log(a.length, a1);
//output: 3, [empty,2,3]

/**
 * Ques:3
 * it stores -1 index a object and it won't include in the length.
 */
let a2 = [1, 2, 3];
a2[-1] = 10;
console.log(a2, a[-1], a.length);
//output: [1,2,3, -1:10], 10, 3
