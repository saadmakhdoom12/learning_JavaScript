"use strict";
// IIFE (Immediately Invoked Function Expression)
// IIFE is a function that is executed right after it is created.

// simple function
function conn() {
    console.log(`DB connection`);
}

// IIFE
(function con() {   // name IIFE
    console.log(`DB connection`);
})();


// also can be written as

(() => {   // unnamed IIFE
    console.log(`DB connection Two`);
})();

// IIFE with parameters
(function (name) {  
    console.log(`Hello ${name}`);
})("Saad");