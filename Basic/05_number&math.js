"use strict";

//****************************************** NUMBER **************************

const score = 400
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const othernum = 23.91
console.log(othernum.toPrecision(2));

const number = 10000000
console.log(number.toLocaleString('en-PK'));

// ********************************** MATH OBJECT *****************************

console.log(Math);
console.log(Math.abs(-100)); // 100

console.log(Math.round(2.4)); // 2
console.log(Math.ceil(4.2)); // little greater then 4 then it choose 5

console.log(Math.floor(4.9)); // 4 always choose the lower value

console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200

console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

console.log(Math.random()); //values from 0 to 1 
console.log(Math.random() * 10 + 1); //values from 0 to 10 and +1 is for starting from 1
console.log((Math.random() * 10) + 1); //values from 0 to 10 and +1 is for starting from 1


const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min +1) + min)); // values from 10 to 20
