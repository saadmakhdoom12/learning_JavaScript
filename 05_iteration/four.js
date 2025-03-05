"use strict";

// For in Loop
// it not only used for object

const myobj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:'swift'
}

for (const key in myobj) {
    console.log(`${key} Shortcut is for ${myobj[key]}`);    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);   
}

// const map = new Map()
// map.set('PK', "Pakistan")
// map.set('USA', "America")
// map.set('FR', "France")

// for (const key in map) { //this does not work on map because map is not iterable
//     console.log(key);   
// }


