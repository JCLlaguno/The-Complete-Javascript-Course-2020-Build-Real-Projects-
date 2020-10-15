// Lecture: let and const

// ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

// ES6
const name6 = 'Jane Smith'; // name cannot be mutated
let age6 = 23;
name6 = 'Jane Miller';

console.log(name6);
*/

// const - is for values that we don't want to change, (constants) - variables that are immutable and cannot be changed
// var - for values that want to be changed or mutated later on
// variables declared with var in ES5 are function scoped but variables declared with let and const in ES6 are block scoped


// ES5
/*
function driversLicence5(passedTest) {
    
    if(passedTest) {
        
        console.log(firstName); // undefined - this is due to hoisting
        var firstName = 'John';
        var yearOfBirth = 1990;
        
    }
        
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
    
}

driversLicence5(true);

// in ES5, var can be accessed by the code if it's in the same function (function scope)


// ES6
function driversLicense6(passedTest) {
    
//    console.log(firstName); // error - temporal dead zone, a variable cannot be accessed unless assigned a value
    let firstName; // let variables should be declared first on the block({}) where it will be used
    const yearOfBirth = 1990; // const can be used only inside of the block ({})
    
    if(passedTest) {
        
        firstName = 'John'; // error - first name can only be accessed by the code inside the if block
//        const yearOfBirth = 1990;
        
    }
        
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
    
}

driversLicense6(true);

// variables let and const are blocked scoped


// example using a for loop block
//let i = 23; // this 'i' is completely different than the 'i' inside the for loop below
//
//for(let i = 0; i < 5; i++) {
//    
//    console.log(i);
//    
//}
//
//console.log(i);

var i = 23;

for(var i = 0; i < 5; i++) {
    
    console.log(i);
    
}

console.log(i);

// use let for variables that will change the value overtime
// use const for variables that cannot be reassigned
*/


// Lecture: Blocks and IIFEs

// ES6
/*
// a block
{
    const a = 1;
    let b = 2;
    var c = 3; // var is function scoped
}

//console.log(a + b);
console.log(c); // c prints out because it is function scoped not block scoped

// ES5
//(function() {
//    
//    var c = 3;
//    
//})();
//
//console.log(c);
*/


// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    
    return 2016 - year;
    
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;

//console.log(n.startsWith('J'));
//console.log(n.startsWith('n')); // false
console.log(n.startsWith('j'));
//console.log(n.endsWith('th'));
console.log(n.endsWith('Sm')); // false
//console.log(n.includes(' '));
console.log(n.includes('oh'));
//console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));













