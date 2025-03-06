"use strict";

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach((item) => {
    console.log(item);
})

// for each loop does not return any value. it just iterate over the array and print the value.

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filter operation
// it return value based on condition

const newnum = mynum.filter((num) => num > 4)
// also
// const newnum = mynum.filter((num) => {
//     return num > 4
// })
console.log(newnum);

// how to implement this in the for each loop:

const myNum2 = []

mynum.forEach((num) => {
    if (num > 4) {
        myNum2.push(num)
    }
})

console.log(myNum2);


