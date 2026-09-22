// ============================================
// 01_ASSIGNMENT -> TOPIC : JS BASICS (variables, comments, console.log)
// BASED ON : LECTURE/01_JS_BASIC.js  +  THEORY_NOTES/01_JS_BASIC.md
// HOW TO RUN : open terminal -> node 01_ASSIGNMENT.js
// ============================================

// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal

let fullName = "Akshay Pawar"
console.log(fullName)


//Q2 --> Write a single line comment which says, comments can make code readable

// Comments can make code readable


//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript

// Welcome to 30DaysOfJavaScript


//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative

/*
Comments can make code readable,
easy to reuse and informative
*/


// ------------------- SECTION B : VARIABLES -------------------

//Q5 --> Declare four variables without assigning values
//       HINT -> use let ; what value will they hold ? write the answer in a comment
//       BONUS -> print them using console.log and check what js gives by default

let x
let time
let speed
let email

// Variables without assigning values hold undefined.


//Q6 --> Declare four variables with assigned values
//       ( try one number, one string, one boolean and one decimal value )

let batchNo = 6
let language = "JavaScript"
let isStudent = true
let gstRate = 18


//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = "Akshay"
let lastName = "Pawar"
let maritalStatus = "Single"
let myCountry = "India"
let age = 32

console.log(firstName, lastName, maritalStatus, myCountry, age)


//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line

let firstName1 = "Akshay", lastName1 = "Pawar", maritalStatus1 = "Single", country1 = "India", age1 = 32

// Multiple lines are better because they are easier to read and understand.


//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console.

let myAge = 32
let yourAge = 28

console.log("My age:-", myAge)
console.log("Your age:-", yourAge)

myAge = 33

console.log("Updated My age:-", myAge)


// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment

// let 1num = 1
// Invalid because variable name cannot start with a number

// let my name = "js"
// Invalid because variable name cannot contain spaces

// let let = 2
// Invalid because let is a reserved keyword


//Q11 --> Fix the below variables and rewrite them in correct camelCase

let firstName2 = "Akshay"
let lastName2 = "Pawar"
let a = 10


//Q12 --> Predict the output before running, then verify with node

let city = "Pune"
let City = "Mumbai"

console.log(city)
console.log(City)

// Output:
// Pune
// Mumbai

// city and City are different variables because JavaScript is case sensitive.


//Q13 --> Predict the output before running, then verify with node

const pi = 3.14
console.log(pi)
// pi = 4
// console.log(pi)
// Error: Assignment to constant variable.

// A const variable cannot be reassigned