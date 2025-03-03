"use strict";

// singleton 
// object literals

// Object.create // constructor method and singleton made here

const mySym = Symbol("key1")

// declaring symbol in the object

const jsuser = {    //object literal
    name: "saad",    
    age: 18,
    [mySym]: "myKey1",  // syntax of declaring symbol in the object
    location: "Lahore",
    email: "saad@gmail.com",
    isloggedin: false,
}

console.log(jsuser.email);  // this is not a preferable method
console.log(jsuser["email"]);
console.log(jsuser[mySym]);

jsuser.email = "saadmakhdoom@gmail.com" // change the value of the object
// Object.freeze(jsuser)   // does not allow to change values of the object

console.log(jsuser);


jsuser.greeting = function () {
    console.log(`hello js users ${this.name}`);
    
}

console.log(jsuser.greeting());

//
const tinderuser = new Object()  // singleton object
const tinderusers = {}  // noon-singleton object

tinderusers.id = "123abc"
tinderusers.name = "saad"
tinderusers.loggedin = false

// console.log(tinderusers);
// nested objects
const regularuser = {
    email: "saad@gmail.com",
    fullname: {
        username: {
            firstname: "Saad",
            lastname: "ahmed"
        }
    }
}

//console.log(regularuser.fullname.username.lastname);

//object combining

const obj1 = {1:"A", 2:"B"}
const obj2 = { 3: "A", 4: "B" }

// const obj3 = Object.assign(obj1, obj2) // this is also correct but in document
const obj3 = Object.assign({}, obj1, obj2) // this is used
console.log(obj3);


// used spread method for combining is the best

const obj4 = { ...obj1, ...obj2 }
console.log(obj4);

console.log(Object.keys(tinderusers)); // output in array
console.log(Object.values(tinderusers));
console.log(Object.entries(tinderusers));

console.log(tinderusers.hasOwnProperty("name"));


// De structering

const course = {
    coursname: "js",
    price: "free",
    CourseInstructor: "saad",
}

//course.CourseInstructor // this is not a preferable method

// const {CourseInstructor} = course
// console.log(CourseInstructor);

const { CourseInstructor: sir } = course  // we can also give name like sir
console.log(sir);







