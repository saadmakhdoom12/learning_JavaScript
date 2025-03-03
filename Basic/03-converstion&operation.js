"use strict";

let score = "33abe"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => easy convert => 33
// "33abc" => NaN
// true => 1; false => 0;   
// null => 0; undefined => NaN

let isLoggedIn = undefined

let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenIsLoggedIn);

// 0 => false
// 1 => true
// "" => false
// "saad" => true
// null => false
// undefined => false

let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

// *************************** Operation *************************************

console.log("\n\tOperations");

let value = 3
let negvalue = -value

console.log(negvalue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);

console.log((1+2)+"3");
console.log(1 + "2" + 3);

console.log(+true);

console.log(+"");

// prefix and postfix
console.log("prefix and postfix");

let x = 3
++x
console.log(x);

// ******************* Comparison of datatype *********************************
console.log("Comparison of datatype");
//console.log(2 > 1)
//console.log(2 < 1)
//console.log(2 >= 1)
//console.log(2 <= 1)
//console.log(2 == 1)

console.log("1" > 2);

// strict check means ===

console.log("2" === 2); //false
console.log("2" !== 2); //true
console.log(2 === 2); //true

