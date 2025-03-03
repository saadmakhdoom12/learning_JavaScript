"use strict";

const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr[2]); // 2
console.log(myArr[5]); // 5

const myArr2 = new Array(1, 2, 3, 4, 5);

// ******************************** Array Methods ********************************

myArr.push(6); // [0, 1, 2, 3, 4, 5, 6]
myArr.push(7, 8); // [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(myArr);

myArr.pop(); // [0, 1, 2, 3, 4, 5, 6, 7]
console.log(myArr);

myArr.unshift(9); // [9, 0, 1, 2, 3, 4, 5, 6, 7]
console.log(myArr);
myArr.shift(); // [0, 1, 2, 3, 4, 5, 6, 7]
console.log(myArr);

console.log(myArr.includes(5)); // true

console.log(myArr.indexOf(9)); // -1 means no exists

const newarr = myArr.join(); // "0,1,2,3,4,5,6,7"
console.log(newarr); // string
console.log(myArr);

// slice, splice
console.log("\t slice & splice");

console.log("A ",myArr);

const myn1 = myArr.slice(1, 4);
console.log("B ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 4); // The difference from slice is include range but also change original array
console.log("C ", myArr);
console.log(myn2);

console.log("\n\n\t");


const x = [1, 2, 3]
const y = [4, 5, 6]

// x.push(y)
// console.log(x[3][1]); // this push include y array as a single element
// this solution concat

const z = x.concat(y)
console.log(z);

// Spread 

const all_new = [...x, ...y]  // This is a preferable method we can also increase array in this
console.log(all_new);

// flat combine all inner array and make one array

const anotherarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = anotherarray.flat(Infinity)

console.log(real_another_array);

// Array Methods
// This is mostly used when are data scraping

console.log(Array.isArray("saad"))

console.log(Array.from("saad")); // Make Arrray

console.log(Array.from({name:"saad"}));  // interesting because it give empty[]


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
