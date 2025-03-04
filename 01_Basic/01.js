// console.log("saad")

const accountId = 144553
let accountEmail = "saad@gmail.com" // let is used for block scope and new method
var accountpass = "12345"  // var is used for global scope and old method
accountCity = "Lahore"

// dont use var because of block scope and function scope
// use let because of block scope
// accountId = 2
accountEmail = "s@gmail.com"
accountpass = "321"
accountCity = "Karachi"

// console.log(accountId);

console.table([accountId, accountEmail, accountpass, accountCity])