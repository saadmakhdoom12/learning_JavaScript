// Reduce Method
const mynum = [1, 2, 3]

const mytotal = mynum.reduce(function (acc, currval) {
    console.log(`acc is ${acc} and currval is ${currval}`);
    
    return acc + currval
}, 0) // 0 is the initial value of acc

console.log(mytotal);

// writing in arrow function

mynum2 = [1, 2, 3]

const mytotal2 = mynum2.reduce((acc, currval) => acc + currval, 0)

console.log(mytotal2);

const shoppingcart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "python course",
        price: 1999
    },
    {
        itemname: "java course",
        price: 3999
    }
]

const totalprice = shoppingcart.reduce((acc, currval) => {
    return acc + currval.price
}
    , 0)

console.log(totalprice);

