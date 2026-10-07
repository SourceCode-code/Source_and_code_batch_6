// ============================================
// 01_ASSIGNMENT -> TOPIC : JS BASICS (variables, comments, console.log)
// BASED ON : LECTURE/01_JS_BASIC.js  +  THEORY_NOTES/01_JS_BASIC.md
// HOW TO RUN : open terminal -> node 01_ASSIGNMENT.js
// ============================================

// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal
//       HINT -> use console.log()
//       EXPECTED OUTPUT (example) -> siddhant

console.log('Aashiya')
//Q2 --> Write a single line comment which says, comments can make code readable
//       HINT -> single line comment starts with //
//comments can make code readable

//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript
// Welcome to 30DaysOfJavaScript


//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative
//       HINT -> multiline comment starts with /* and ends with */

/*
comments can make code readable, easy to reuse and informative
*/ 


// ------------------- SECTION B : VARIABLES -------------------

//Q5 --> Declare four variables without assigning values
//       HINT -> use let ; what value will they hold ? write the answer in a comment
//       BONUS -> print them using console.log and check what js gives by default
let A
console.log(A)//output-undefine
var age
console.log(age)
let name
console.log(name)

let cab
console.log(cab)

//Q6 --> Declare four variables with assigned values
//       ( try one number, one string, one boolean and one decimal value )
let num=14
console.log(num)

let str="Aashiya"
console.log(str)

let bl=true
console.log(bl)

let dv= 23.93
console.log(dv)


//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines
//       HINT -> one variable per line, use camelCase names
//       BONUS -> print all of them with a single console.log
let firstName="Aashiya"
let lastName="khan"
let maritialStatus="Married"
let country ="India"
let age2=30


//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line
//       HINT -> separate each declaration with a comma
//       QUESTION -> which way is better, multiple lines or single line ? write answer in a comment
let firstName1="aashu" , lastName1="kahn" ,maritialStatus1="Married",country1 ="India",age1=30

//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
//       HINT -> use let, then print both using console.log()
//       BONUS -> update myAge with a new value and print it again

let myAge=30
let yourAge=40
console.log(myAge)
console.log(yourAge)


// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment
//        let 1num = 1 //invalid start with number
//        let my name = "js" //invalid space between variabe name
//        let let = 2//invalid let is the keyword in js
//        HINT -> check variable naming rules in theory notes


//Q11 --> Fix the below variables and rewrite them in correct camelCase
//        let first_name = "siddhant"
//        let LASTNAME = "gadakh"
//        let A = 10
let firstNamee="Aashia"
let lastNamee="khan"
let a=10

//Q12 --> Predict the output before running, then verify with node
//        let city = "Pune"
//        let City = "Mumbai"
//        console.log(city)
//        console.log(City)
//        HINT -> remember, JS is a case sensitive language
/* Ans-:
output will be pune and Mumbai because java is case sensitive and both city and City are consider as different keywords
 */

//Q13 --> Predict the output before running, then verify with node
//        const pi = 3.14
//        pi = 4
//        console.log(pi)
//        HINT -> check what happens when we update a const variable
/* Ans-:
the first output will be 3.14 only when we rewrite it will give us an error because we cannot reassign const value 
 */
