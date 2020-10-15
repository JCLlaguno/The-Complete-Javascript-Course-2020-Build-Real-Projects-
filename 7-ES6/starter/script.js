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
/*
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
*/


// Lecture: Arrow functions
/* 

there are three ways of writing arrow functions:
1. with an argument and one line of code (simplest form).
2. with more than one arguments (must use parentheses ()).
3. with more than one arguments and lines of code (must use parentheses for the argument, curly braces for the code and a return keyword at the end);
    
*/

/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    
    return 2016 - el;                  
                      
});
                      
console.log(ages5);

// ES6
// example of arrow functions
// array map has access to the current element, current index, and the array itself
// one line of code
let ages6 = years.map(el => 2016 - el);

console.log(ages6);


// more than one argument, one line of code
// arrow functions with more than one argument must use parentheses ()
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);

console.log(ages6);


// more than one argument and line of code

// if the return part of the arrow function has more than one line of code (ended by ';'), you need to use curly braces '{}' and a return keyword

ages6 = years.map((el, index) => {
    
    const now = new Date().getFullYear(); // 1 line
    const age = now - el; // 2 lines
    return `Age element ${index + 1}: ${age}.`; // 3 lines (a return was used)
    
});

console.log(ages6);
*/


// Lecture: Arrow functions 2
// ES5
// using regular callback function
var box5 = {
    color: 'green',
    position: 1,
    
    // clickMe is a method attached to an object so, 'this' points to box5
    clickMe: function() {
        
        var self = this; // this is used to point 'this' to box5 (object) and not the window object (this enables access to the color and position property)
        
        document.querySelector('.green').addEventListener('click', function() {
            
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
            
        });
    }
}

//box5.clickMe();


// ES6
// using an arrow function shares the 'this' keyword (lexical this) from the object 'box6'
// in ES6, use arrow functions if you want to preserve the value of the 'this' keyword
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        // when using arrow functions, use parentheses '()' when there is no parameter or more than one parameter
        document.querySelector('.green').addEventListener('click', () => {
            
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
            
        });
    }
}

//box6.clickMe();


// ES6
// using arrow function on a method of an object
//const box66 = {
//    color: 'green',
//    position: 1,
//    
//    // using an arrow function here points the 'this' to the window object and not the box66 object
//    // will result in undefined for 'position' and 'color' because both properties are not present in the window object
//    clickMe: () => {
//        
//        document.querySelector('.green').addEventListener('click', () => {
//            
//            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//            alert(str);
//            
//        });
//    }
//}
//
//box66.clickMe();


// example using a function constructor
function Person(name) {
    
    this.name = name;
    
}

// ES5 example using callback and bind method
// the objects created through the Person function constructor inherit this method
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
        
        return this.name + ' is friends with ' + el;
        
    }.bind(this)); // bind() creates a copy of the function with the 'this' variable set to 'this' (Person), replacing the window object
    
    console.log(arr);
    
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
// example using arrow function and template string
Person.prototype.myFriends6 = function(friends) {
    
    // this arrow function shares the lexical 'this' from the surroundings, in this case the myFriends6 function, which contains the 'this' that points to the instance of the Person (Mike)
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    
    console.log(arr);
    
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);











