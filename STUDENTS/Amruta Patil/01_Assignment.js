// ============================================
// 01_ASSIGNMENT -> TOPIC : JS BASICS (variables, comments, console.log)
// BASED ON : LECTURE/01_JS_BASIC.js  +  THEORY_NOTES/01_JS_BASIC.md
// HOW TO RUN : open terminal -> node 01_ASSIGNMENT_JS_BASICS.js
// ============================================

// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal
//       HINT -> use console.log()
//       EXPECTED OUTPUT (example) -> siddhant
// Answer

let fullName = "Amruta Patil"
console.log(fullName)

//Q2 --> Write a single line comment which says, comments can make code readable
//       HINT -> single line comment starts with //
//Answer
//My name is Amruta 

//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript
//Answer
//welcome to 90 days javascript training

//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative
//       HINT -> multiline comment starts with /* and ends with */

/*
Comments can make code readable, 
easy to reuse and informative           
*/

// ------------------- SECTION B : VARIABLES -------------------

//Q5 --> Declare four variables without assigning values
//       HINT -> use let ; what value will they hold ? write the answer in a comment
//       BONUS -> print them using console.log and check what js gives by default
//Answer
let fullName1
let first_Name1
let middle_Name1
let last_Name1

console.log(fullName1)
console.log(first_Name1)
console.log(middle_Name1)
console.log(last_Name1)

//hold vale is undefined

//Q6 --> Declare four variables with assigned values
//       ( try one number, one string, one boolean and one decimal value )

let num = 27
let str = "Amruta"
let isresult = true
let price = 99.99

//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines
//       HINT -> one variable per line, use camelCase names
//       BONUS -> print all of them with a single console.log
//Answer

let first_Name = "Amruta"
let last_Name = "Patil"
let marital_Status = "married"
let country = "India"
let age = "28"

console.log(first_Name, last_Name, marital_Status, country, 28)

//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line
//       HINT -> separate each declaration with a comma
//       QUESTION -> which way is better, multiple lines or single line ? write answer in a comment
//Answer
let firstName2 = "Amruta", lastName2 = "patil", maritalstatus2 = "married", country2 = "India", age2= "28"
// multiline is better than single line

//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
//       HINT -> use let, then print both using console.log()
//       BONUS -> update myAge with a new value and print it again
//Answer
let myAge = "28"
let yourAge = "32"
console.log("my age" + myAge)
console.log("your age" + yourAge)

let myAge1 = 35

console.log("updated my age" + myAge1)

// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment
//        let 1num = 1
//Answer
// Invalid because of variable name can't start with number

//        let my name = "js"
//Answer
//Invalid because of variable name can't contaim spaces
//        let let = 2
//Answer
//Invalid because of let is reserved keyword


//Q11 --> Fix the below variables and rewrite them in correct camelCase
//        let first_name = "siddhant"
//        let LASTNAME = "gadakh"
//        let A = 10
//Answer
let first_Name3 = "siddant"
let lastName = "gadakh"
let a = 10

//Q12 --> Predict the output before running, then verify with node
//        let city = "Pune"
//        let City = "Mumbai"
//        console.log(city)
//        console.log(City)
//        HINT -> remember, JS is a case sensitive language
//Answer

let city = "Pune"
let City = "Mumbai"
console.log(city)
console.log(City)

//output
//Pune
//Mumbai

// city and City is different , JS is casesensitive langague

//Q13 --> Predict the output before running, then verify with node
//        const pi = 3.14
//        pi = 4
//        console.log(pi)
//        HINT -> check what happens when we update a const variable
//Answer
 const pi = 3.14
 console.log(pi)

//        pi = 4
//Error: Assignment to constant variable.

// A const variable cannot be reassigned