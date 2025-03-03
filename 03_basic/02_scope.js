"use strict";

let a = 10  // let is block scoped
const b = 20  // const is block scoped
var c = 30  // var is not block scoped so mostly avoid it.

if (true) {  // this curly braces are block/scope
    let a = 100;
    const b = 200;
    var c = 300;
    console.log("INNER: ", a);  // block scoped
    console.log("INNER: ", b);  // block scoped 
    console.log("INNER: ", c);  // not block scoped
    
}

console.log(a);
console.log(b);
console.log(c);

// ********************************* Nested Scope *****************************

function one() {
    const username = "Saad"

    function two() {
        const website = "saad.com"
        console.log("two: ", username);
    }
    // console.log(website); //inner function can access outer function but,
    // outer function can't access inner function.
    two();
}

one();

// same as in if else

if (true) {
    const username = "Saad";
    if (username === "Saad") {
        const website = " saad.com";
        console.log(username + website);  
    }
    // console.log(website); // inner block can access outer block but,
    // outer block can't access inner block.
    
}
// console.log(username); // outer block can't access inner block.


// ********************************* Interesting *****************************


console.log("Call before function ", addone(5));
function addone(num) {
    return num + 1
}
// addone(5)

const addtwo = function (num) {
    return num + 2
}

addtwo(5) // in this type function we can't call function before it's declaration.
