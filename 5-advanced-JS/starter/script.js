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
//function interviewQuestion(job) {
//    
//    return function(name) {
//        
//        if(job === 'designer') {
//            
//            console.log(name + ', Can you please explain what UX design is?');
//            
//        } else if(job === 'teacher') {
//            
//            console.log('What subject do you teach, ' + name + '?');
//            
//        } else {
//            
//            console.log(name + ', what do you do?');
//            
//        }
//        
//    }
//    
//}
//
//interviewQuestion('teacher')('John');


// Lecture: Bind, call and apply
//var john = {
//    
//    name: 'John',
//    age: 26,
//    job: 'teacher',
//    presentation: function(style, timeOfDay) {
//        
//        if(style === 'formal') {
//            
//            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//            
//        } else if(style === 'friendly') {
//            
//            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//            
//        }
//        
//    }
//    
//}
//
//var emily = {
//    
//    name: 'Emily',
//    age: 35,
//    job: 'designer'
//    
//}
//
//
//john.presentation('formal', 'morning');
//john.presentation.call(emily, 'friendly', 'afternoon'); // call / (method borrowing)
////john.presentation.apply(emily, ['friendly', 'afternoon']); // apply
//var johnFriendly = john.presentation.bind(john, 'friendly'); // bind / carrying - creating a function based on another function but with some pre-set parameters.
//johnFriendly('morning');
//johnFriendly('night');
//var emilyFormal = john.presentation.bind(emily, 'formal');
//emilyFormal('afternoon');
//
//
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
//function isFullAge(limit, el) {
//    
//    return el >= limit; // el is the age
//    
//}
//
//var ages = arrayCalc(years, calculateAge);
//var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); // 20 is the pre-set argument for the 'limit' parameter as the 'arrayCalc' callback function only takes one parameter
//
//console.log(ages);
//console.log(fullJapan);


// Coding challenge 7
/*
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code (Hint: we learned a special technique to do exactly that).
*/


// MY SOLUTION
//(function() {
//    
//    var choices = [], score = 0;
//    
//    //constructor function
//    var Question = function(questions,choices,answer) {
//
//        this.questions = questions;
//        this.choices = choices;
//        this.answer = answer;
//
//    }
//
//    //questions
//    var question1, question2, question3;
//    
//    question1 = new Question('Hi! Are you happy?', ['0 Yes', '1 No', '2 Maybe'], '0');
//    question2 = new Question('What is my passion?', ['0 Drawing', '1 Coding', '2 Workout', '3 All'], '3');
//    question3 = new Question('Where do you live?', ['0 US', '1 China', '2 Philippines'], '2');
//
//    var arrQuestions = [question1, question2, question3];
//
//    var randomize = function() {
//    
//        return Math.floor(Math.random() * 3);
//    
//    }
//    
//    selectQuestion(arrQuestions, randomize());
//
//    function selectQuestion(arr, selection) {
//
//        console.log(arr[selection].questions);
//        console.log(arr[selection].choices.join(', ').toString());
//
//        var textInput = prompt('Please select the correct answer.');
//
//        checkAnswer(textInput, arr[selection].answer);
//
//    }
//
//    function checkAnswer(textInput, correctAnswer) {
//        
//        if(textInput === 'c') {
//            
//            return;
//            
//        } else if(textInput === correctAnswer) {
//
//            console.log('Your answer is CORRECT.');
//            score += 1;
//            console.log('SCORE: ' + score);
//            selectQuestion(arrQuestions, randomize());
//
//        } else {
//
//            console.log('WRONG ANSWER! Try again.');
//            console.log('SCORE: ' + score);
//            selectQuestion(arrQuestions, randomize());
//
//        }
//        
//
//    }
//    
//})(); 


//// Instructor's solution
//
//// 7. IIFE
//// Code privacy
//// To avoid this code from interfering with other code
//// Creates a new scope
//(function() {
//    
//    // 1. Function Constructor
//    function Question(question, answers, correct) {
//
//        this.question = question; // question (str)
//        this.answers = answers; // answers (array)
//        this.correct = correct; // correct answer (int)
//
//    }
//
//    // Method in the Constructor's prototype
//    // Display the questions and possible answers
//    Question.prototype.displayQuestion = function() {
//
//        // question
//        console.log(this.question);
//
//        // answers
//        for(var i = 0; i < this.answers.length; i++) {
//
//            console.log(i + ': ' + this.answers[i]);
//
//        }
//
//    }
//
//    // Method in the Constructor's prototype
//    // Check if answer = correct answer
//    // Compare the answer that the user gives with the correct answer
//    Question.prototype.checkAnswer = function(ans) {
//
//        if(ans === this.correct) {
//
//            console.log('Correct answer!');
//
//        } else {
//
//            console.log('Wrong answer. Try again :)');
//
//        }
//
//    }
//
//    // 2. Questions using the constructor
//    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
//    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
//    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
//
//    // 3. Store the questions in an array
//    var questions = [q1, q2, q3];
//
//    // Random number between (0) and the number of questions (3)
//    // Give numbers from 0 - 2.
//    var n = Math.floor(Math.random() * Question.length);
//
//    // 4. Random Question
//    // Call the method displayQuestion()
//    questions[n].displayQuestion();
//
//    // 5. Display a prompt to ask the user for the correct answer
//    var answer = parseInt(prompt('Please select the correct answer.'));
//
//    // 6. Check the answer
//    // Call the method checkAnswer()
//    questions[n].checkAnswer(answer);
//
//})();


/*
-- Expert Level --
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

// Instructor's solution -- Expert Level --

// 7. IIFE
// Code privacy
// To avoid this code from interfering with other code
// Creates a new scope
(function() {
    
    // 1. Function Constructor
    function Question(question, answers, correct) {

        this.question = question; // question (str)
        this.answers = answers; // answers (array)
        this.correct = correct; // correct answer (int)

    }

    // Method in the Constructor's prototype
    // Display the questions and possible answers
    Question.prototype.displayQuestion = function() {

        // question
        console.log(this.question);

        // answers
        for(var i = 0; i < this.answers.length; i++) {

            console.log(i + ': ' + this.answers[i]);

        }

    }

    // Method in the Constructor's prototype
    // Check if answer = correct answer
    // Compare the answer that the user gives with the correct answer
    Question.prototype.checkAnswer = function(ans, callback) {

        var sc;
        
        if(ans === this.correct) {

            console.log('Correct answer!');
            sc = callback(true);

        } else {

            console.log('Wrong answer. Try again :)');
            sc = callback(false);

        }
        
        this.displayScore(sc);

    }
    
    Question.prototype.displayScore = function(score) {
        
        console.log('Your current score is: ' + score);
        console.log('-------------------------------');
        
    }

    // 2. Questions using the constructor
    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    // 3. Store the questions in an array
    var questions = [q1, q2, q3];
    
    function score() {
        
        var sc = 0;
        return function(correct) {
            
            if(correct) {
                
                sc++;
                
            }
            
            return sc;
            
        }
        
    }
    
    var keepScore = score();

    function nextQuestion() {
        
        // Random number between (0) and the number of questions (3)
        // Give numbers from 0 - 2.
        var n = Math.floor(Math.random() * Question.length);

        // 4. Random Question
        // Call the method displayQuestion()
        questions[n].displayQuestion();

        // 5. Display a prompt to ask the user for the correct answer
        var answer = prompt('Please select the correct answer.');

        // If the user doesn't choose to exit the game
        if(answer !== 'exit') {
           
            // 6. Check the answer
            // Call the method checkAnswer()
            // Convert the answer (str) inputted by the user to int
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        
        }
        
    }
 
    nextQuestion();
    
})();





















































































