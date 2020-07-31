//console.log('Hello World!!!');


/****************************************************
* Variables and data types
*/

// Bad practice!!
//var x = 'John';
//var a = 'John';
// Always use descriptive names

/*
// STRING 
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';

// NUMBER
var age = 26;

// BOOLEAN
var fullAge = true;
console.log(fullAge);

// UNDEFINED
var job;
console.log(job);

var job = 'Teacher';
console.log(job);

//Variable naming rules
// variables cannot start with numbers or symbols except $ and _
//var 3years = 3;
//var &3years = 3;
var $3years = 3;
var _3years = 3;
//var john/mark = 'John and Mark';
var johnMark = 'John and Mark';

// Variables cannot use reserved keywords as variable names
//var function = 23;
//var delete = 23;
var if = 23;
*/

/****************************************************
* Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 26;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty six';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his Last Name?');

console.log(firstName + ' ' + lastName);
*/

/****************************************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;

now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;

console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');

var x;

console.log(typeof x);
*/

/****************************************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;

var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;

x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2
console.log(x);

x += 10;
console.log(x);

//x++;
x--;
console.log(x);
*/

/****************************************************
* Coding challenge 1
*/
/*
// My Solution
var massMark, heightMark, bmiMark, massJohn, heightJohn, bmiJohn;

// Mass
massMark = 66;
massJohn = 58;

// Height
heightMark = 1.7;
heightJohn = 1.8;

// BMI
bmiMark = massMark / (heightMark * heightMark);
console.log('Mark\'s BMI ' + bmiMark);

bmiJohn = massJohn / (heightJohn * heightJohn);
console.log('John\'s BMI ' + bmiJohn);


var hasHigherBMI = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s?: ' + hasHigherBMI);
*/
/*
// Instructor's solution
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

/****************************************************
* If / Else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married') {
    
    console.log(firstName + ' is married!');
    
} else {
    
    console.log(firstName + ' will hopefully marry soon :)');
    
}

var isMarried = true;

if(isMarried) {
    
    console.log(firstName + ' is married!');
    
} else {
    
    console.log(firstName + ' will hopefully marry soon :)');
    
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if(BMIMark > BMIJohn) {
    
    console.log('Mark\'s BMI is higher than John\'s.');
    
} else {
    
    console.log('John\'s BMI is higher than Mark\'s.');
    
}
*/


/****************************************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;

if(age < 13) {
    
    console.log(firstName + ' is a boy.');

} else if(age >= 13 && age < 20) { // Between 13 and 20 === age >= 13 AND < 20
    
    console.log(firstName + ' is a teenager.');
    
} else if(age >= 20 && age < 30) {
    
    console.log(firstName + ' is a young man.');

} else {
    
    console.log(firstName + ' is a man.');
    
}
*/


/****************************************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


// using If / Else statement

//if(age >= 18) {
//    
//    var drink = 'beer';
//    
//} else {
//    
//    var drink = 'juice';
//    
//}


//Switch statement

var job = 'instructor';

switch(job) {
        
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
        
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
        
    case 'designer': 
        console.log(firstName + ' designs beautiful websites.');
        break;
    
    default:
        console.log(firstName + ' does something else.');
        
}

//// Example 2 (Switch statements)
var age = 56;

switch(true) {
        
    case (age < 13):
        console.log(firstName + ' is a boy.');
        break;
    
    case (age >= 13 && age < 20):
        console.log(firstName + ' is a teenager.');
        break;
        
    case (age >= 20 && age < 30):
        console.log(firstName + ' is a young man.');
        break;
        
    default: 
        console.log(firstName + ' is a man');
        
}
*/

/****************************************************
* Truthy and Falsy values and Equality Operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
/*
var height;
height = 23;

if(height || height === 0) {
    
    console.log('Variable is defined');
    
} else {
    
    console.log('Variable has NOT been defined');
    
}

// Equality operators
// === used for strict equality comparisons (the datatype and value must match)
// == does type coercion (the datatypes of both variables do not have to match)

if(height == '23') {
    
    console.log('The == operator does type coercion!');
    
}
*/

/****************************************************
* Coding challenge 2
*/

// MY SOLUTION 1
/*
//var averageJohn = (89 + 120 + 103) / 3;// 104
//var averageMike = (116 + 94 + 123) / 3;// 111
//var averageMary = (97 + 134 + 105) / 3;// 112

var averageJohn = 200;
var averageMike = 500;
var averageMary = 300;
 
console.log('Average score of John\'s team: ' + averageJohn);
console.log('Average score of Mike\'s team: ' + averageMike);
console.log('Average score of Mary\'s team: ' + averageMary);

//averageJohn > averageMike ? console.log('John\'s team wins with the average of: ' + averageJohn) : console.log('Mike\'s team wins with the average of: ' + averageMike);

if(averageJohn > averageMike && averageJohn > averageMary) {
    
    console.log('John\'s team is the winner with an average of: ' + averageJohn);
    
} else if(averageMike > averageJohn && averageMike > averageMary) {
    
    console.log('Mike\'s team is the winner with an average of: ' + averageMike);

} else if(averageMary > averageJohn && averageMary > averageMike) {
    
    console.log('Mary\'s team is the winner with an average of: ' + averageMary); 
    
} else if(averageJohn === averageMike && averageJohn === averageMary && averageMike === averageMary) {
    
    console.log('John\'s, Mike\'s, and Mary\'s team was a tie.');
    
} else if(averageJohn === averageMike) {
    
    console.log('John\'s and Mike\'s team is a tie with an average of: ' + averageJohn + ' points for John\'s team' + ' and ' + averageMike + ' points for Mike\'s team.');

} else if(averageJohn === averageMary) {

    console.log('John\'s team and Mary\'s team was a tie with an average of: ' + averageJohn + ' points for John\'s team' + ' and ' + averageMary + ' points for Mary\'s team.');
    
} else if(averageMike === averageMary) {
    
    console.log('Mike\'s team and Mary\'s team was a tie with an average of: ' + averageMike + ' points for Mike\'s team' + ' and ' + averageMary + ' points for Mary\'s team.');
}
*/


// MY SOLUTION 2
//var averageJohn = (89 + 120 + 103) / 3; // 104
//var averageMike = (116 + 94 + 123) / 3; // 111
//var averageMary = (97 + 134 + 105) / 3; // 112

//var John = 104;
//var Mike = 111;
//var Mary = 112;

//if(John > Mike && John > Mary) {
//    
//    console.log('John\'s team won. Average: ' + John);
//    
//} else if(Mike > John && Mike > Mary) {
//    
//    console.log('Mike\'s team won. Average: ' + Mike);
//    
//} else if(Mary > John && Mary > Mike) {
//    
//    console.log('Mary\'s team won. Average: ' + Mary); 
//    
//} 
//
//if(John === Mike && John === Mary) {
//    
//    console.log('John, Mike and Mary\'s team was a tie.');
//
//} else if(John === Mike) {
//    
//    console.log('John and Mike\'s team was a tie.');
//    
//} else if(John === Mary) {
//    
//    console.log('John and Mary\'s team was a tie.');
//    
//} else if(Mike === Mary) {
//    
//    console.log('Mike and Mary\'s team was a tie.');
//    
//}

//switch(true) {
//        
//    case (John > Mike && John > Mary) :
//        console.log('John\'s team won. Average: ' + John);
//        break;
//        
//    case (Mike > John && Mike > Mary) :
//        console.log('Mike\'s team won. Average: ' + Mike);
//        break;
//        
//    case (Mary > John && Mary > Mike) :
//        console.log('Mary\'s team won. Average: ' + Mary); 
//}
//
//switch(true) {
//    
//    case (John === Mike && John === Mary) :
//        console.log('John, Mike and Mary\'s team was a tie.');
//        break;
//        
//    case (John === Mike) :
//        console.log('John and Mike\'s team was a tie.');
//        break;
//        
//    case (John === Mary) :
//        console.log('John and Mary\'s team was a tie.');
//        
//}

/*
// Instructor's solution
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

//if(scoreJohn > scoreMike) {
//    
//    console.log('John\'s team wins with ' + scoreJohn + ' points');
//    
//} else if(scoreMike > scoreJohn) {
//    
//    console.log('Mike\'s team wins with ' + scoreMike + ' points');
//    
//} else {
//    
//    console.log('There is a draw');
//    
//}

if(scoreJohn >scoreMike && scoreJohn > scoreMary) {
    
    console.log('John\'s team wins with ' + scoreJohn + ' points');
    
} else if(scoreMike > scoreJohn && scoreMike > scoreMary) {

    console.log('Mike\'s team wins with ' + scoreMike + ' points');

} else if(scoreMary > scoreJohn && scoreMary > scoreMike) {
    
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    
    console.log('There is a draw');
}
*/


/****************************************************
* Functions
*/
/*
function calculateAge(birthYear) {
    
    return 2018 - birthYear;
    
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement > 0) {
        
        console.log(firstName + ' retires in ' + retirement + ' years.');
    
    } else {
        
        console.log(firstName + ' is already retired.');
        
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/* Function Statements and Expressions */

// Function declaration
//function whatDoYouDo(job, firstName) {}

// Function expression
/*
var whatDoYouDo = function(job, firstName) {
    
   switch(job) {
           
       case 'teacher' : 
           return firstName + ' teaches kids how to code.';
           
       case 'driver' :
           return firstName + ' drives a cab in Lisbon.';
           
       case 'designer' :
           return firstName + ' designs beautiful websites.';
           
       default: 
           return firstName + ' does something else.';
           
   } 
    
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/


/****************************************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
//console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
//names[5] = 'Mary';
console.log(names);
//console.log(names.length);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); // add an element at the end of an array
//console.log(john);

john.unshift('Mr.'); //
console.log(john);


john.pop(); // remove the last element of an array
john.pop();
//console.log(john);
john.shift(); // remove the first element of an array
console.log(john);

console.log(john.indexOf(23)); // returns the position inside the array of the passed argument. Will return -1 if not present

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/


/****************************************************
* Coding challenge 3
*/

// MY SOLUTION
/*
function tipCalculator(amount) {
    var percentage;
    
    if(amount < 50) {
        
        percentage = 20 / 100;
        
    } else if(amount >= 50 && amount <= 200) {
        
        percentage = 15 / 100;
        
    } else {
        
        percentage = 10 / 100;
    }
    
    return amount * percentage;
    
}
var bill1 = 124;
var bill2 = 48;
var bill3 = 268;

var tip1 = tipCalculator(bill1);
var tip2 = tipCalculator(bill2);
var tip3 = tipCalculator(bill3);

var tip = [tip1, tip2, tip3];
console.log('Tip: ' + tip);

var finalPaidAmount1 = bill1 + tip1;
var finalPaidAmount2 = bill2 + tip2;
var finalPaidAmount3 = bill3 + tip3;

var total = [finalPaidAmount1, finalPaidAmount2, finalPaidAmount3];
console.log('Total: ' + total);
*/

//Instructor's solution
/*
function tipCalculator(bill) {
    
    var percentage;
    
    if(bill < 50) {
        
        percentage = .2;
        
    } else if(bill >= 50 && bill < 200) {
        
        percentage = .15;
        
    } else {
        
        percentage = .1;
        
    }
    
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
    
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
    
];

var finalValues = [
    
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
    
];

console.log(tips, finalValues);
*/


/****************************************************
* Objects and Properties
*/

// Object literal
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

// using dot notation to mutate the data
john.job = 'designer';

// using brackets notation to mutate the data
john['isMarried'] = true;
console.log(john);


// New object syntax
var jane = new Object();

    jane.firstName = 'Jane',
    jane.birthYear = 1969,
    jane['lastName'] = 'Smith'

console.log(jane);
*/


/****************************************************
* Objects and Methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    
//    calcAge: function(birthYear) {
//        
//       return 2018 - birthYear; 
//        
//    }
    
//    calcAge: function() {
//        
//       return 2018 - this.birthYear; 
//        
//    }
    
    // BEST SOLUTION
    calcAge: function() {
        
        this.age = 2018 - this.birthYear;
        
    }
    
};

//console.log(john.calcAge(1990));
//console.log(john.calcAge());

//john.age = john.calcAge();
john.calcAge();

console.log(john);
*/


/****************************************************
* Coding challenge 4
*/

// MY SOLUTION
/*
var john = { 
    fullName: 'John Smith', 
    mass: 110, // kg 
    height: 1.95, // meters 
    BMI: function() { 
        
        return this.johnBMI = this.mass / (this.height * this.height); 
    
    }
}; 

var mark = new Object(); 
    mark.fullName = 'Mark Miller', 
    mark.mass = 78,
    mark.height = 1.69,
    mark.BMI = function () { 
        
        return this.markBMI = this.mass / (this.height * this.height); 
        
    }
john.BMI();
mark.BMI();
console.log(john);
console.log(mark);
//console.log('John\'s BMI: ' + john.johnBMI);
//console.log('Mark\'s BMI: ' + mark['markBMI']);


if(john.johnBMI > mark.markBMI) { 
    
    console.log(john.fullName + ' has higher BMI of: ' + john.johnBMI); 
    
} else if(mark.markBMI > john.johnBMI) {
    
    console.log(mark.fullName + ' has higher BMI of: ' + mark.markBMI); 

} else { 
    
    console.log('Their BMI\'s are the same'); 

}
*/


// Instructor's solution
/*
var john = {
    
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
    
        this.bmi = this.mass / (this.height * this.height);
    
        return this.bmi;
    
    }
    
}

var mark = {
    
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
    
        this.bmi = this.mass / (this.height * this.height);
    
        return this.bmi;
    
    }
    
}

//john.calcBMI();
//mark.calcBMI();

console.log(john, mark);

if(john.calcBMI() > mark.calcBMI()) {
    
    console.log(john.fullName + ' has a higher BMI of: ' + john.bmi);
    
} else if(mark.bmi > john.bmi) {
    
    console.log(mark.fullName + ' has a higher BMI of: ' + mark.bmi);
    
} else {
    
    console.log('They have the same BMI');
    
}
*/


/****************************************************
* Loops and iteration
*/

// for loop
//for(var i = 0; i < 10; i++) {
//    
//    console.log(i);
//    
//}

// i = 0, 0 < 10 true, log i to the console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the conosole, i++
// i = 10, 10 < 10 FALSE, exit the loop!


//for(var i = 1; i <= 20; i++) {
//    
//    console.log(i);
//    
//}

//for(var i = 1; i <= 20; i += 2) {
//    
//    console.log(i);
//    
//}

//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//
//for(var i = 0; i < john.length; i++) {
//    
//    console.log(john[i]);
//    
//}

// while loop
//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//
//var i = 0;
//
//while(i < john.length) {
//    
//    console.log(john[i]);
//    
//    i++;
//    
//}

// continue and break statements

//var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

//for(var i = 0; i < john.length; i++) {
//    
//    if(typeof john[i] !== 'string') continue;
//    
//    console.log(john[i]);
//    
//}

//for(var i = 0; i < john.length; i++) {
//    
//    if(typeof john[i] !== 'string') break;
//    
//    console.log(john[i]);
//    
//}

//for(var i = john.length - 1; i >= 0; i--) {
//    
//    console.log(john[i]);
//    
//}


/****************************************************
* Coding challenge 5 (Final challenge for section 2)
*/

// MY SOLUTION
//var john = {
//    
//    bills: [124, 48, 268, 180, 42],
//    tips: [],
//    total: [],
//    tipCalc: function() {
//        
//        for(var i = 0; i < this.bills.length; i++) {
//            
//            var bill = this.bills[i];
//            var percentage;
//            
//            if(bill < 50) {
//                
//                percentage = .2;
//                
//            } else if(bill >= 50 && bill < 200) {
//                
//                percentage = .15;
//                
//            } else {
//                
//                percentage = .1
//                
//            }
//            
//            this.tips[i] = percentage * bill;
//            this.total[i] = bill + this.tips[i];
//            
//        }
//        
//    }
//    
//}
//
//john.tipCalc();
//
//console.log('John\'s total tips:');
//console.log(john.tips);
//
//console.log('John\'s total paid amount: ');
//console.log(john.total);
//
//
//
//
//var mark = {
//    
//    bills: [77, 475, 110, 45],
//    tips: [],
//    total: [],
//    tipCalc: function() {
//        
//        for(var i = 0; i < this.bills.length; i++) {
//            
//            var bill = this.bills[i];
//            var percentage;
//            
//            if(bill < 100) {
//                
//                percentage = .2;
//                
//            } else if(bill >= 100 && bill < 300) {
//                
//                percentage = .1;
//                
//            } else {
//                
//                percentage = .25
//                
//            }
//            
//            this.tips[i] = percentage * bill;
//            this.total[i] = bill + this.tips[i];
//            
//        }
//        
//    }
//    
//}
//
//mark.tipCalc();
//
//console.log('');
//console.log('Mark\'s total tips:');
//console.log(mark.tips);
//
//console.log('Mark\'s total paid amount: ');
//console.log(mark.total);
//
//
//// Fuction to calculate tip average
//function getAverageTip(customerTip) {
//    
//    let sum = 0;
//    
//    for(i = 0; i < customerTip.length; i++) {
//        
//        sum += customerTip[i];
//        
////        var sum = customerTip.reduce(function (a, b) {
////           
////            return a + b;
////           
////        }, 0);
//        
//    }
//        
//    return sum / customerTip.length;
//    
//}
//
//console.log('');
//console.log('John\s total average of tips: ' + getAverageTip(john.tips));
//console.log('Mark\s total average of tips: ' + getAverageTip(mark.tips));
//console.log('');
//
//
//// Get the highest tip average
//getAverageTip(john.tips) > getAverageTip(mark.tips) ?
//    
//    console.log('John has the highest tips average of: ' + getAverageTip(john.tips)) :
//    console.log('Mark has a highest tips average of: ' + getAverageTip(mark.tips));


// Instructors solution
/*
var john = {
    
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0; i < this.bills.length; i++) {
            
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if(bill < 50) {
                
                percentage = .2;
                
            } else if(bill >= 50 && bill < 200) {
                
                percentage = .15;
                
            } else {
                
                percentage = .1;
                
            }
            
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
            
        }
        
    }
       
}


var mark = {
    
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0; i < this.bills.length; i++) {
            
            // Determine percentage based on tipping values
            var percentage;
            var bill = this.bills[i];
            
            if(bill < 100) {
                
                percentage = .2;
                
            } else if(bill >= 100 && bill < 300) {
                
                percentage = .1;
                
            } else {
                
                percentage = .25;
                
            }
            
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
            
        }
        
    }
    
}

function calcAverage(tips) {
    
    var sum = 0;
    
    for(var i = 0; i < tips.length; i++) {
        
        sum = sum + tips[i];
        
    }
    
    return averageTips = sum / tips.length;
    
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);


if(john.average > mark.average) {
    
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
    
} else if(mark.average > john.average) {
    
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
    
}
*/




     




















































