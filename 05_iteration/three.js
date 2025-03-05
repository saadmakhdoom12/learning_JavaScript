"use strict";

// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greeting = "hello world!"

for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

// datatype  MAPs:

const map = new Map()
map.set('PK', "Pakistan")
map.set('USA', "America")
map.set('FR', "France")

console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key, value] of map) {
    console.log(key, ":-", value);   // print key value separately
}


// const myObj = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }

// for (const [key, value] of myObj) {  // object is not iterable just like map
//     console.log(key, ":-", value); 
// }






