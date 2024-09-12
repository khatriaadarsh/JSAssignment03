//                   ----> Assignment 03 <----

// ===> Task 01: Write a program to take “city” name as input from user. If
// user enters“ Karachi”, welcome the user like this: “Welcome to city of lights”

var cityName = prompt("Enter your City Name: ");

if (cityName == "Karachi") {
    alert("Welcome to city of lights");
}

// ===> Task 02. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir.If the
// user is female, give the message: Good Morning Ma’am.

var genderCheck = prompt("Enter gender: ");

if (genderCheck == 'male') {
    alert("Good Morning Sir.");
}
if (genderCheck == "female") {
    alert("Good Morning Ma'am");
}

// ===> Task 03. Write a program to take input color of road traffic signal
// from the user & show the message according to Red Yellow and Green 

var checkColorOfSignal = prompt("Enter the color of the road traffic signal");

if (checkColorOfSignal == "Red") {
    alert("Must Stop!");
}
if (checkColorOfSignal == "Yellow ") {
    alert("Ready to Move...");
}
if (checkColorOfSignal == "Green") {
    alert("Move now_");
}

// ===> Task 04. Write a program to take input remaining fuel in car( in
//         litres) from user.If the current fuel is less than 0.25 litres,
//     show the message“ Please refill the fuel in your car”

var currentFuel = +prompt("Enter remaining Fuel: ");

if (currentFuel < 0.25) {
    alert("Please refill the Fuel in your car.");
}

// ===> Task 05. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

var a = 4;
if (++a === 5) {
    console.log("Given condtion variable a is true.");
}

var b = 83;

if (b++ === 84) {
    console.log("Given condtion variable b is false.");
}

var c = 12;

if (c++ === 13) {
    console.log("condition 1 is false.");
}

if (c === 13) {
    console.log("condition 2 is true");
}

if (++c < 14) {
    console.log("condition 3 is false.");
}

if (c === 14) {
    console.log("condition 4 is true");
}

var materialCost = 20000;

var laborCost = 2000;

var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    console.log("The cost equals");
}

if (true) {
    console.log("True");
}

if (false) {
    console.log("False");
}

if ("car" < "cat") {
    console.log("car is smaller than cat");
}

// ===> Task 06. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var totalMarks = 300;

document.write(`Total marks: ${totalMarks}`);

var markObtained = prompt("Exter total marks from 300: ");

document.write(`<br>Marks obtained: ${markObtained}`);

var percentage = (markObtained / totalMarks) * 100;

document.write(`<br>Percentage: ${percentage.toFixed(2)}%`);

if (percentage >= 80) {
    document.write(`<br>Grade: A <br> Excellent`);
} else if (percentage >= 70) {
    document.write(`<br>Grade: B <br> Very Good`);
} else if (percentage >= 60) {
    document.write(`<br>Grade: C <br> Good`);
} else if (percentage >= 50) {
    document.write(`<br>Grade: D <br>You Need Improve your progress`);
} else {
    document.write(`<br>Grade: F <br> Your are Fail better luck!`);
}


// ===>Task 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 6;

var userGuess = +prompt("Enter your secret number between 1 to 10");

if (userGuess == secretNumber) {
    alert("Bingo! Correct answer");
} else {
    alert(`Close enough to the correct answer. The correct number is ${secretNumber}`);
}


//===> Task 08. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var checkNumberType = +prompt("Enter number to check weather the divisible by 3 or not?");

if (checkNumberType % 3 == 0) {
    alert(`${checkNumberType} is divisible by 3`);
} else {
    alert(`${checkNumberType} is not divisible by 3`);
}


//===> Task 09. Write a program that checks whether the given input is an
// even number or an odd number.

var numEvenOrOdd = +prompt("Enter number to check even or odd");
if (numEvenOrOdd % 2 == 0) {
    alert(`{numEvenOrOdd} is an even number`);
} else {
    alert(`${numEvenOrOdd} is an odd number`);
}


// ===> Task 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a.T > 40 then“ It is too hot outside.”
// b.T > 30 then“ The Weather today is Normal.”
// c.T > 20 then“ Today’ s Weather is cool.”
// d.T > 10 then“ OMG!Today’ s weather is so Cool.”

var temperature = prompt("Enter temperature 10 to 40: ");
if (temperature > 40) {
    alert("It's to Hot Outside!");
} else if (temperature > 30) {
    alert("The weather today is Normal");
} else if (temperature > 20) {
    alert("Today weather is Cool..");
} else if (temperature > 10) {
    alert("OMG! Today weather is so Cool");
}


// ===> 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

alert("Welcome to Calculator...");
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var operator = prompt("Enter one operator from these + - * / %");
if (operator == "+") {
    var sum = num1 + num2;
    alert(`Sum: ${sum}`);
} else if (operator == "-") {
    alert(`Subraction: ${num1 - num2}`);
} else if (operator == "*") {
    alert(`Multiply: ${num1 * num2}`);
} else if (operator == "/") {
    alert(`Divide: ${num1 / num2}`);
} else if (operator == "%") {
    alert(`Reminder: ${num1 % num2}`);
} else {
    alert("Invalid operator! Please use +, -, *, / or %");
}