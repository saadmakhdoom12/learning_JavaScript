"use strict";

//****************************************** DATES **************************

let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(typeof(mydate));

// let mycreatedate = new Date(2023, 0, 23)
// let mycreatedate = new Date(2023, 0, 23, 5, 3)
// let mycreatedate = new Date("2023-01-14")
let mycreatedate = new Date("2023-01-14 05:03:00")
console.log(mycreatedate);
console.log(mycreatedate.toDateString());
console.log(mycreatedate.toLocaleString());
// console.log(mycreatedate.getTime());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);

console.log(Math.floor(Date.now() / 1000)); // seconds 
console.log(Math.floor(Date.now() / 1000 / 60)); // minutes
console.log(Math.floor(Date.now() / 1000 / 60 / 60)); // hours
console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24)); // days
console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 30)); // months

let newDate = new Date()
console.log(newDate.getMonth());   // in java month starts from 0
console.log(newDate.getMonth() + 1);
 


