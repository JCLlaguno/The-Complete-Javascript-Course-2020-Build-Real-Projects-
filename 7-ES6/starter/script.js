//--------------------------------------------------------------------------------------------------------------------------
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


//--------------------------------------------------------------------------------------------------------------------------
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


//--------------------------------------------------------------------------------------------------------------------------
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


//--------------------------------------------------------------------------------------------------------------------------
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


//--------------------------------------------------------------------------------------------------------------------------
// Lecture: Arrow functions 2
// ES5
// using regular callback function
/*
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
*/


//--------------------------------------------------------------------------------------------------------------------------
// Lecture: Destructuring 
/*
// ES5
var john = ['John', 26];

//var name = john[0];
//var age = john[1];


// ES6 - destructuring
const [name, age] = ['John', 26];

console.log(name);
console.log(age);

// destructuring with objects
const obj = {
    
    firstName: 'John',
    lastName: 'Smith'
    
}

const {firstName, lastName} = obj;

console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


// function that returns the age of a person as well as the remaining time before retirement
function calcAgeRetirement(year) {
    
    const age = new Date().getFullYear() - year; // gets the person's current age
    return [age, 65 - age]; // return an array with the current age and years before retirement
    
}

const [age2, retirement] = calcAgeRetirement(1990); // use destructuring to store the returned values into different variables

console.log(age2);
console.log(retirement);
*/


//--------------------------------------------------------------------------------------------------------------------------
// Lecture: Arrays 
/*
const boxes = document.querySelectorAll('.box');

// ES5
// using slice
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
    
    cur.style.backgroundColor = 'dodgerBlue';
    
});


// ES6
// using from method
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerBlue');


// LOOPS
// Usually when we want to loop over an array, we use the 'foreach' and the 'map' method and they usually work just fine, but the problem with them is that we actually cannot 'break' from them and we cannot also use the 'continue' statement, so if you want to use the 'break' or the 'continue' statements in a loop, we cannot use 'foreach' and we cannot also use 'map', so a simple 'for' loop is used in ES5.


// ES5 for loop
// change the text inside the boxes
//for(var i = 0; i < boxesArr5.length; i++) {
//    
//    if(boxesArr5[i].className === 'box blue') {
//        
//        continue;
//        
//    }
//    
//    boxesArr5[i].textContent = 'I changed to blue!';
//    
//}

// ES6 'for/of' statement
// combination of foreach/map methods with the for loop 
// 'continue' and 'break' statements can be used here
for(const cur of boxesArr6) {
    
    // if the class name of the current element = 'box blue', skip it
//    if(cur.className === 'box blue') {
//        
//        continue;
//        
//    }
    
    // using string methods (includes) - determines whether a string contains the characters of a specified string.
    // if the class name of the current element contains 'blue', skip it
    if(cur.className.includes('blue')) {
        
        continue;
        
    }
    
    cur.textContent = "I changed to blue";
    
}


// ES5 get the oldest
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    
    return cur >= 18;
    
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6 findIndex
// this has a callback function that has access to the current element, current index, and the entire array
// return the index for the element in which the expression / callback function returns the value 'true'
console.log(ages.findIndex(cur => cur >= 18)); // 3

// ES6 find
// retrieve only the element
console.log(ages.find(cur => cur >= 18)); // 21
*/


//--------------------------------------------------------------------------------------------------------------------------
// Lecture: Spread operator
/*
function addFourAges(a, b, c, d) {
    
    return a + b + c + d;
    
}

var sum1 = addFourAges(18, 30, 12, 21);

console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];

// apply method - recieves an array that calls the function that the 'apply' method is used on and uses the elements of the array as the arguments
var sum2 = addFourAges.apply(null, ages); 

console.log(sum2);

// ES6
// the '...' expands the array into components / single values
// (...ages) is the same as writing (18, 30, 12, 21)
const sum3 = addFourAges(...ages);

console.log(sum3);


// using spread operator to join arrays
const familySmith = ['John', 'Jane', 'Mark'];

const familyMiller = ['Mary', 'Bob', 'Ann'];

// expand the arrays into single elements
// takes them out of the array
const bigFamily = [...familySmith, 'Lily', ...familyMiller];

console.log(bigFamily);


// using spread operator on a node list
const h = document.querySelector('h1'); // returns a node

const boxes = document.querySelectorAll('.box'); // returns a node list

const all = [h, ...boxes];

// from() converts the node list from the all variable to an array
// use the forEach method to set the current element's text color to purple
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/


//--------------------------------------------------------------------------------------------------------------------------
// Lecture: Rest parameters
// Rest parameters recieves a couple of single values and transforms them into an array when we call a function with multiple parameters (The opposite of spread operator)
// The spread operator is used in the function call, while the rest operator is used in the function declaration to accept an arbitrary number of parameters

//// ES5
//function isFullAge5() {
//    
////    console.log(arguments); // 'arguments' is a special variable that is present in all functions
//    var argsArr = Array.prototype.slice.call(arguments);
//    
////    console.log(argsArr);
//    
//    argsArr.forEach(function(cur) {
//        
//       console.log((2016 - cur) >= 18); 
//        
//    });
//    
//}
//
////isFullAge5(1990, 1999, 1965);
////isFullAge5(1990, 1999, 1965, 2016, 1987);
//
//
//// ES6
//// using the rest parameter operator
//// rest parameter - transforms the arguments into an array, and passes it into the function
//function isFullAge6(...years) {
//    
////    console.log(years); // display the years array
//    years.forEach(cur => console.log((2016 - cur) >= 18));
//    
//}
//
//isFullAge6(1990, 1999, 1965, 2016, 1987);


// example 2
// ES5
/*
function isFullAge5(limit) {
    
//    console.log(arguments);
    
    // slice in this case, copies the array starting from position 1, excluding the first argument '16'
    var argsArr = Array.prototype.slice.call(arguments, 1);
    
    console.log(argsArr);
    
    argsArr.forEach(function(cur) {
        
       console.log((2016 - cur) >= limit); 
        
    });
    
}

//isFullAge5(16, 1990, 1999, 1965);
//isFullAge5(16, 1990, 1999, 1965, 2016, 1987);


// ES6
function isFullAge6(limit, ...argsArr) {
    
//    console.log(argsArr);
    argsArr.forEach(cur => console.log((2016 - cur) >= limit));
    
}

isFullAge5(16, 1990, 1999, 1965, 2016, 1987);
*/


//--------------------------------------------------------------------------------------------------------------------------
// Lecture: Default parameters
/*
// ES5 - default parameters
//function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//    
//    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//    nationality === undefined ? nationality = 'American' : nationality = nationality;
//    
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.yearOfBirth = yearOfBirth;
//    this.nationality = nationality;
//    
//}


// ES6 - default parameters
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
    
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1996, 'Diaz', 'Spanish');
*/


//--------------------------------------------------------------------------------------------------------------------------
// Lecture: Maps
/*
const question = new Map(); // create a new empty map

// syntax: question.*('key', 'value');
// works like a property in an object in ES5
// set, get, has, delete and clear are the most basic methods that we can use to manipulate maps
// maps are iterable (can be looped like an array)

// assign values as key value pairs
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');


console.log(question.get('question')); // get data from the map
//console.log(question.size); // same as .length in arrays

// check if a certain key is present inside a map
// if there's a key number 4 in the question, then we can delete that element
if(question.has(4)) {
    
//    question.delete(4); // delete a data from the map
//    console.log('Answer 4 is here');
    
}

//question.clear(); // clear everything from the map

// loop through a map using forEach method
// forEach is also in the prototype property of the map function constructor
//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));


// loop through a map using for/of statement
// use destructuring to store the key - value pairs into two separate variables 
// this syntax also works for arrays
for(let [key, value] of question.entries()) {
    
//    console.log(`This is ${key}, and it's set to ${value}`);
    
    // print the key and value only if the key is a number
    if(typeof(key) === 'number') {
        
        console.log(`Answer ${key}: ${value}`);
        
    }
    
}

// get the correct answer
const ans = parseInt(prompt('Write the correct answer'));

// ans === question.get('correct') - if the input is the same as the correct answer, the expression will be 'true' else 'false'
// question.get(ans === question.get('correct')); is the same as question.get(true / false)

// is the same as console.log(question.get(true / false))
console.log(question.get(ans === question.get('correct'))); // if 3 === 3 console.log(true / false)

// summary: 
// in maps, we can use anything as keys
// maps are iterable, making it very easy to loop through them and to manipulate data
// its really easy to get the size of a map using the size property
// we can easily add and remove data from a map
*/


//--------------------------------------------------------------------------------------------------------------------------
// Lecture: Classes
// 1. class definitions are not hoisted unlike function constructors
// we need to first implement a class and only later in our code we can start using it
// 2. we can only add methods to classes but not properties

// ES5
// using a blueprint (function constructor)
var Person5 = function(name, yearOfBirth, job) {
    
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

// will be inherited by instances of Person5
Person5.prototype.calculateAge = function() {
    
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
    
}

var john5 = new Person5('John', 1990, 'Teacher');


// ES6
// using classes
// all classes must have a constructor method
class Person6 {
    
    // constructor
    // () - this is where we define the initial properties that we want in our object
    constructor(name, yearOfBirth, job) {
        
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
        
    }
    
    // method
    calculateAge() {
        
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
        
    }
    
    // static method - a method that is attached to the class, but not inherited by the class instances (objects that are created through the class)
    static greeting() {
        
        console.log('Hey there!');
        
    }
    
}

// an instance of the Person6 class
const john6 = new Person6('John', 1990, 'Teacher');

// calling a static method
Person6.greeting();













