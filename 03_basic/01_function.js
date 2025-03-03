"use strict";

function saymyname() {
    console.log("s");
    console.log("a");
    console.log("A");
    console.log("D");
}


saymyname()

// function addnumber(no1, no2) {
//     console.log(no1 + no2);
// }

// const result = addnumber(1,10)
// console.log("Result: ", result);

function addnumber(no1, no2) {
    // let result = no1 + no2;
    // return result  
    return no1 + no2    // also we can write like this
}

const result = addnumber(1, 10)
console.log("Result: ", result);


function loginUserMessage(username = "Saad") { // default value after equal
    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return
    // }
    if (!username) {  // also same condion
        console.log("Please enter a username");
        return
    }
    return `Welcome ${username} just logged in`
}

// const msg = loginUserMessage("saad")
// console.log(msg);
console.log(loginUserMessage());


// if we dont know how many arguments we will pass
function calculateCartPrice(...num1) {  // rest operator(...)
    return num1
}

console.log(calculateCartPrice(1,2,3,4));

const user = {
    name: "saad",
    price: 100
}

function handleObject(anyobject) {
    console.log(`USername is ${anyobject.name} and price is ${anyobject.price}`);
}

// handleObject(user)
// also we can direct pass object
handleObject({name: "saad", price: 100})

// take array in function
const myarr = [100, 200, 300, 400]

function returnSecondValue(getarray) { //paramter getarray
    return getarray[1]
}

// console.log(returnSecondValue(myarr)); // argument myarr
// also we can pass array direct like:
console.log(returnSecondValue([100, 200, 300, 400]));








