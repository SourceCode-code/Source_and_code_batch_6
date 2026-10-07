// ============================================
// 01_ASSIGNMENT -> TOPIC : JS BASICS (variables, comments, console.log)
// BASED ON : LECTURE/01_JS_BASIC.js  +  THEORY_NOTES/01_JS_BASIC.md
// HOW TO RUN : open terminal -> node 01_ASSIGNMENT_JS_BASICS.js
// ============================================

// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal

let fullName = "Shubham Chaudhari"
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

let name 
let full_name
let data 
let machine



//Q6 --> Declare four variables with assigned values


let roll_no = 11
let lang = "JS"
let is_student = true
let id=80


//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = "Shubham"
let lastName = "Chaudhari"
let maritalStatus = "Married"
let Country = "India"
let age = 29

console.log(firstName, lastName, maritalStatus, myCountry, age)


//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line

let firstName_1 = "Shubham", lastName_1 = "Chaudhari", maritalStatus_1 = "Married", country_1 = "India", age_1 = 29


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

let firstName11 = "Shubham"
let lastName11 = "Chaudhari"
let test = 10


//Q12 --> Predict the output before running, then verify with node

let city = "Pune"
let City = "Mumbai"

console.log(city)
console.log(City)

// Output:
// Pune
// Mumbai



//Q13 --> Predict the output before running, then verify with node

const pi = 3.14
console.log(pi)
// pi = 4
// console.log(pi)
// Error:  A const variable cannot be reassigned
