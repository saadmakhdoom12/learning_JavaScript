"use strict";

// if statement syntax:
// if (condition) {
//     // code block
// }

if (true) {
    console.log(`This is true`);   
}

// <,> <=, >=, ==, !=, ==== (strict checking), !==

const temp = 41
if (temp === 50) {
    console.log("Tempetere less then 50");
} else {
    console.log("Temperature greater then 50");
    
}

// short hand 
const balance = 1000

// if(balance > 500) console.log("test"); // implicit scope

// nesting

if (balance < 500) {
    console.log("LEss than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

// Logical Operator
// AND (&&) OR (||)

if (2 == 2 && 3 == 3) {
    console.log("ALL condition true");  
}

if (2 == 2 || 2 == 3) {
    console.log("One condition is true");
    
}