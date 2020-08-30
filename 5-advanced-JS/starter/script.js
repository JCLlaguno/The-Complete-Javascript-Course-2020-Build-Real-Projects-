// Function constructor

// Using the object literal {}
//var john = {
//    
//    name: 'John',
//    yearOfBirth: 1990,
//    job: 'teacher'
//    
//}
//
//
//// Function constructor
//// A pattern for writing a blueprint
//var Person = function(name, yearOfBirth, job) {
//    
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//    /*this.calculateAge = function() {
//        
//        console.log(2016 - this.yearOfBirth);
//        
//    }*/
//    
//}
//
//
//// Inheritance
//// Contructor's prototype property
//
//// Attaching a method to the Constructor's prototype property
//Person.prototype.calculateAge = function() {
//    
//    console.log(2016 - this.yearOfBirth);
//    
//}
//
//// Attaching a property to the Constructor's prototype property
//Person.prototype.lastName = 'Smith';
//
//
//// Instantiation
////1. The keyword "new" creates an empty object that points the "this" variable from the global object to the newly created object.
////2. The "Person" function is called and creates a new execution context that also has a "this" variable.
//
//var john = new Person('John', 1990, 'teacher');
//var jane = new Person('Jane', 1969, 'designer');
//var mark = new Person('Mark', 1948, 'retired');
//
//john.calculateAge();
//jane.calculateAge();
//mark.calculateAge();
//
//console.log(john.lastName);
//console.log(jane.lastName);
//console.log(mark.lastName);




// Create your own type of objects to play around with
// Constructors and Prototypes

//var Fruits = function(name, color, price) {
//    
//    this.name = name;
//    this.color = color;
//    this.price = price;
//    
//}
//
//Fruits.prototype.taste = 'Sweet';
//
//Fruits.prototype.totalPrice = function() {
//    
//    return(this.price + 1);
//    
//}
//
//var apple = new Fruits('Apple', 'Red', 10);
//var banana = new Fruits('Banana', 'Yellow', 15);
//var grape = new Fruits('Grape', 'Purple', 20);
//
//console.log(apple.color);
//console.log(banana.color);
//console.log(grape.color);
//
//console.log(apple.taste);
//console.log(banana.taste);
//console.log(grape.taste);
//
//console.log(apple.totalPrice());
//console.log(banana.totalPrice());
//console.log(grape.totalPrice());


// Object.create
/*
var personProto = {
    
    calculateAge: function() {
        
        console.log(2016 - this.yearOfBirth);
        
    }
    
}

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto, {
    
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
    
});
*/

// Primitives vs objects

// Primitives
//var a = 23;
//var b = a;
//a = 46;
//
//console.log(a);
//console.log(b);
//
//
//// Objects
//var obj1 = {
//    
//    name: 'John',
//    age: 26
//    
//}
//
//var obj2 = obj1;
//obj1.age = 30;
//
//console.log(obj1.age);
//console.log(obj2.age);
//
//
//// Functions
//var age = 26;
//var obj = {
//    
//    name: 'JC',
//    city: 'Legazpi'
//    
//}
//
//function change(a, b) {
//    
//    // Mutate the data of the age as 'a' and obj as 'b'
//    a = 30;
//    b.city = 'North Pole';
//    
//}
//
//change(age, obj); // age as 'a' and obj as 'b' argument
//
//console.log(age);
//console.log(obj.city);


// First Class Functions
//var years = [1990, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    
//    var arrRes = [];
//    
//    for(var i = 0; i < arr.length; i++) {
//        
//        arrRes.push(fn(arr[i]));
//        
//    }
//    
//    return arrRes;
//    
//}
//
//function calculateAge(el) {
//    
//    return 2016 - el; // el is the years
//    
//}
//
//function isFullAge(el) {
//    
//    return el >= 18; // el is the age
//    
//}
//
//function maxHeartRate(el) {
//    
//    if(el >= 18 && el <= 81) {
//        
//        return Math.round(206.9 - (0.67 * el)); // el is the age  
//        
//    } else {
//        
//        return -1;
//        
//    }
//    
//}
//
//var ages = arrayCalc(years, calculateAge);
//var fullAges = arrayCalc(ages, isFullAge);
//var rates = arrayCalc(ages, maxHeartRate);
//
//console.log(ages);
////console.log(fullAges);
//console.log(rates);


// Lecture: Functions returning functions
//function interviewQuestion(job) {
//    
//    if(job === 'designer') {
//        
//        return function(name) {
//            
//            console.log(name + ', Can you please explain what UX design is?');
//            
//        }
//        
//    } else if(job === 'teacher') {
//        
//        return function(name) {
//            
//            console.log('What subject do you teach, ' + name + '?');
//            
//        }
//        
//    } else {
//        
//        return function(name) {
//            
//            console.log('Hello' + name + ', what do you do?');
//            
//        }
//        
//    }
//    
//}
//
//var teacherQuestion = interviewQuestion('teacher');
//var designerQuestion = interviewQuestion('designer');
//
//teacherQuestion('John');
//designerQuestion('John');
//designerQuestion('Jane');
//designerQuestion('Mark');
//designerQuestion('Mike');
//
//interviewQuestion('teacher')('Mark');


// Practice with FCF - Returning functions using switch statement
//function interviewQuestion(job) {
//    
//    switch(job) {
//
//        case 'teacher':
//
//            return function(name) {
//
//                console.log(name + ' teaches coding.');
//
//            }
//
//            break;
//
//        case 'designer':
//
//            return function(name) {
//
//                console.log(name + 'designs beautiful websites.');
//
//            }
//
//            break;
//
//        default:
//
//            return function(name) {
//
//                console.log(name + ' doesn\'t have a life.');
//
//            }
//    }    
//    
//}
//
//interviewQuestion('robber')('Billy');


// Lecture: IIFE
//function game() {
//    
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//    
//}
//
//game();

//(function() {
//    
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//    
//}) ();
//
////console.log(score);
//
//(function(goodLuck) {
//    
//    var score = Math.random() * 10;
//    console.log(score >= 5 - goodLuck);
//    
//}) (5);


// Lecture: Closures
//function retirement(retirementAge) {
//    
//    var a = ' years left until retirement.';
//        
//    return function(yearOfBirth) {
//        
//        var age = 2016 - yearOfBirth;
//        console.log((retirementAge - age) + a);
//        
//    }
//    
//}
//
//
//var retirementUS = retirement(66);
//var retirementGermany = retirement(65);
//var retirementIceland = retirement(67);
//
//retirementGermany(1990);
//retirementUS(1990);
//retirementIceland(1990);
//
////retirement(66)(1990);


// Closures Activity
function interviewQuestion(job) {
    
    return function(name) {
        
        if(job === 'designer') {
            
            console.log(name + ', Can you please explain what UX design is?');
            
        } else if(job === 'teacher') {
            
            console.log('What subject do you teach, ' + name + '?');
            
        } else {
            
            console.log(name + ', what do you do?');
            
        }
        
    }
    
}

interviewQuestion('teacher')('John');






















































































