"use strict";

// For Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

for (let i = 0; i < 10; i++) {
    console.log(`outer loop; ${i}`);  
    for (let j = 0; j <= 10; j++) {
        console.log(`inner loop: ${j} and inner loop ${i}`);   
    }
}

let myarr = ['flash', 'batman', 'superman']  // array lenght "3"
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(`${index}: ${element}`);
}

// break and continue keywords

// break keyword
for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

// continue keyword

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log(`Detected 5`);
        continue; // here 5 is not printed
    }
    console.log(`Value of i is ${i}`);
}
