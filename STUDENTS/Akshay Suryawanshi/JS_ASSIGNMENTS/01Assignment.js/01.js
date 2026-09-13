// ============================================
// 01_ASSIGNMENT -> TOPIC : JS BASICS (variables, comments, console.log)
// BASED ON : LECTURE/01_JS_BASIC.js  +  THEORY_NOTES/01_JS_BASIC.md
// HOW TO RUN : open terminal -> node 01_ASSIGNMENT.js
// ============================================

// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal
// Answer 

console.log("Akshay")


//Q2 --> Write a single line comment which says, comments can make code readable
//Answer

// My name is akshay


//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript
// Answer 

// Welcome to 30 days of JavaScript


//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative
// Answer 
/*
Welcome to 
30 days of 
JavaScript
*/


// ------------------- SECTION B : VARIABLES -------------------

//Q5 --> Declare four variables without assigning values
// Answer
let firstname 
let lastname
let cell_no
let maritalstatus

console.log(firstname,lastname,cell_no,maritalstatus)

//Q6 --> Declare four variables with assigned values
// Answer 

let name = "akshay"
let lastName = "suryawanshi"
let age = 32
let Maritalstatus = false



//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines
// Answer

let first_name = "Akshay"
let last_name = "Suryawanshi"
let marital_status = "single"
let state = "Maharashtra"
let Age = 32
console.log(first_name,last_name,marital_status,state,Age)



//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line
//Answer

let First_name = "Akshay",Last_name ="Suryawanshi",Merital_status ="single",AGE =32

// i think multiline is easy to understand
//single line is very confusing

//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
//Answer 
let myAge = 32
let yourAge = 30

console.log("my age is"+myAge)
console.log("your age is"+yourAge)

// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment
//        let 1num = 1
//        let my name = "js"
//        let let = 2

// Answer

// let 1num = 1 --> INVALID
// because veriables are not starting with numbers
// let my name = "js" --> INVALID
// we can not use space in two variabels
// let let = 2
// we use only once in a single line because "let"is reserved keyword in JS


//Q11 --> Fix the below variables and rewrite them in correct camelCase
//Answer

let first_Name = "Akshay"
let last_Name = "Suryawanshi"
let a = 10

console.log (first_Name)
console.log (last_Name)
console.log (a)


//Q12 --> Predict the output before running, then verify with node
// Answer 

let country = "India"
let Country = "USA"
console.log (country)
console.log (Country)


//Q13 --> Predict the output before running, then verify with node
// Answer

const h = 5.65
 console.log (h)
