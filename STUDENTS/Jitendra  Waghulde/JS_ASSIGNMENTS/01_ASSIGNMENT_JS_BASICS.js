// ============================================
// 01_ASSIGNMENT -> TOPIC : JS BASICS (variables, comments, console.log)
// BASED ON : LECTURE/01_JS_BASIC.js  +  THEORY_NOTES/01_JS_BASIC.md
// HOW TO RUN : open terminal -> node 01_ASSIGNMENT_JS_BASICS.js
// ============================================

// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal
//       HINT -> use console.log()
//       EXPECTED OUTPUT (example) -> siddhant

let myName = "Jitendra";
console.log(myName);


//Q2 --> Write a single line comment which says, comments can make code readable
//       HINT -> single line comment starts with //

//comments can make code readable


//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript

//Welcome to 30DaysOfJavaScript


//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative
//       HINT -> multiline comment starts with /* and ends with */

/*comments can make code readable, 
easy to reuse and informative*/


// ------------------- SECTION B : VARIABLES -------------------

//Q5 --> Declare four variables without assigning values
//       HINT -> use let ; what value will they hold ? write the answer in a comment
//       BONUS -> print them using console.log and check what js gives by default

let project, x, isCorrect, Value;
console.log(project, x, isCorrect, Value); //O/p- undefined undefined undefined undefined


//Q6 --> Declare four variables with assigned values
//       ( try one number, one string, one boolean and one decimal value )

let serialNo, studentName, isPresent, percentage;
serialNo = 10;
studentName = "pradeep";
isPresent = true;
percentage = 99.99;

console.log(serialNo, "", studentName, "", isPresent,"",percentage ); //O/p- 10  pradeep  true  99.99



//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines
//       HINT -> one variable per line, use camelCase names
//       BONUS -> print all of them with a single console.log

let firstName = "Jitendra";
let lastName = "Waghulde";
let maritalStatus = "Married"; 
let country = "Bharat"; 
let age = 33;

console.log (firstName, "", lastName,"",maritalStatus,"", country,"",age); // O/P-Jitendra  Waghulde  Married  Bharat  33


//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line
//       HINT -> separate each declaration with a comma
//       QUESTION -> which way is better, multiple lines or single line ? write answer in a comment

let Firstname = "charulata", Lastname = "Waghulde", Maritalstatus= "married", Country = "Bharat", Age= "32";

console.log(Firstname, Lastname, Maritalstatus, Country, Age); //O/P-charulata Waghulde married Bharat 32



//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
//       HINT -> use let, then print both using console.log()
//       BONUS -> update myAge with a new value and print it again

let myAge = 33;
let yourAge = 32;
console.log(myAge, yourAge); //o/p- 33 32
myAge = 34;
console.log(myAge);  //O/p- 34


// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment
//        let 1num = 1  --- veriable name should not start with number or symbol
//        let my name = "js" ---- there should be no space allowed in variable name
//        let let = 2 -----variable name should not be a reserved keyword ex. var let const
//        HINT -> check variable naming rules in theory notes


//Q11 --> Fix the below variables and rewrite them in correct camelCase
//        let first_name = "siddhant"
//        let LASTNAME = "gadakh"
//        let A = 10

let firstName2 = "siddhant";
let lastName2 = "gadakh";
let A = 10;


//Q12 --> Predict the output before running, then verify with node
//        let city = "Pune"
//        let City = "Mumbai"
//        console.log(city)  --------------- Pune
//        console.log(City)  --------------- Mumbai
//        HINT -> remember, JS is a case sensitive language

let city = "Pune"
        let City = "Mumbai"
        console.log(city) 
        console.log(City) 


//Q13 --> Predict the output before running, then verify with node
//        const pi = 3.14
//        pi = 4
//        console.log(pi)  --------------- TypeError: Assignment to constant variable.
//        HINT -> check what happens when we update a const variable
const pi = 3.14
 //  pi = 4
        console.log(pi) 