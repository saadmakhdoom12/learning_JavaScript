"use strict";

// While Loop

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index +2
}

let myarr = ['flash', 'batman', 'superman'] 
let arr = 0
while (arr < myarr.length) {
    console.log(`Value is ${myarr[arr]}`);
    arr = arr + 1
}

// D0-While Loop
// alway run one time without checking condition
let score = 11
do {
    console.log(`score is ${score}`);
    score++
    
} while (score<=10);
