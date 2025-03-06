const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map function
// it also a call back function

const newnum1 = mynum.map((num) => num + 10)

console.log(newnum1);

// chaining method

const newnum2 = mynum
    .map((num) => num * 10)  // in map perform operation on each element
    .map((num) => num + 1)
    .filter((num) => num >= 40) 

console.log(newnum2);
