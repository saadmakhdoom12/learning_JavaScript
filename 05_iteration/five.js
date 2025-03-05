"use strict";

// For each Loop

const coding = ["js","ruby","java","python","cpp"]
// console.log(coding.length);
coding.forEach(function (item) {
    // console.log(item);
})

// we can also write it in arrow function

coding.forEach((item) => {
    // console.log(item);
})

// also we can on function
//like
function printME(item) {
    // console.log(item);
}

coding.forEach(printME)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
    
const mycoding = [
    {
        Languagename: "javascript",
        languagefile: "js"
    },
    {
        Languagename: "Python",
        languagefile: "py"
    },
    {
        Languagename: "java",
        languagefile: "java"
    }
]


mycoding.forEach((item) => {
    console.log(item.Languagename);
})