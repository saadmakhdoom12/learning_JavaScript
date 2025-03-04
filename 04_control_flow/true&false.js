"use strict";

const userEmail = "saad@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user Email");
}

// Truthy or falsy value

//1.falsy value:

// false, 0, -0, BigInt (0n), "", null, undefined, NaN

//2.truthy value
// "0", "false", " ", [], {}, function(){} empty funciton

// check empty array condition
const arr = []
if (arr.length === 0) {
    console.log("Array is empty"); 
}

// check obj condition

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");   
}

// Nullish Coalescing Operator (??): Null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// terniary operator

// conditon ? true: false

const incTeaPrice = 100
incTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");
;

