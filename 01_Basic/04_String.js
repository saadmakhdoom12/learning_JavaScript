"use strict";

let name = "Saad"
let repocount = 20

console.log(`My name is ${name} and i have repo of ${repocount}`);

const gameName = new String("pubG-mobile")

console.log(gameName[3]); // Assesing G through index
console.log(gameName.__proto__); // String prototype

// Strings objects

// 1. length
console.log(gameName.length);

// 2. toUpperCase
console.log(gameName.toUpperCase());

// 3. toLowerCase
console.log(gameName.toLowerCase());

//4. charAt
console.log(gameName.charAt(2));

//5. indexOf
console.log(gameName.indexOf("G"));

// substring
const newstring = gameName.substring(0, 4)  // here we dont give negative value
console.log(newstring);

// slicing
const anothermethod = gameName.slice(0, 4) // but here we can give negative value
console.log(anothermethod);

// trim
const trimstring = "    saad    "
console.log(trimstring);
console.log(trimstring.trim());  //here is difference

// replace
const namemy = "saad makhdoom"
console.log(namemy);

console.log(namemy.replace("makhdoom", "ahmed"))
console.log(namemy.includes("makhdoom"));

// split
console.log(gameName.split("-"));

