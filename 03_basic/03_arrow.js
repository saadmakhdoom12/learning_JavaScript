"use strict";
// Arrow function is a new way to write function in ES6.
// Arrow function is a short hand way to write function.
// Arrow function is not hoisted.
// Arrow function does not have its own this.
// Arrow function does not have arguments object.
// Arrow function does not have prototype property.
// Arrow function can't be used as constructor.
// Arrow function can't be used with new.
// Arrow function can't be used with call, apply and bind.
// Arrow function can't be used with super.
// Arrow function can't be used with this.
// Arrow function can't be used with arguments.
// Arrow function can't be used with prototype.

const user = {
    username: "Saad",
    price: 100,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to Website`);
        // console.log(this);  // display the current context   
    }   
}
user.welcomeMessage();
user.username = "Saad Ahmed";  // context changed
user.welcomeMessage();

// Arrow function

// function test() {
//     let username = "Saad";
// }
// test();  // window object

const one = () => {   // arrow function
    let username = "Saad";
    console.log(this); // give empty object
}
one()

// basic arrow function syntex
// const one = () => {
//     console.log("Hello World");
// }
// one();

// Explicit return

const addtwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addtwo(5, 10));


// implicit return

const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2)  // same as above
console.log(addTwo(5, 10));

const objreturn = () => ({ username: "Saad", price: 100 }); // must be wrap in ()
console.log(objreturn());










