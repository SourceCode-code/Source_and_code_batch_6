// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal
console.log("Anurag Deshpande");


//Q2 --> Write a single line comment which says, comments can make code readable
console.log("comments can be readable");
//this line will print the above statment 

//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript
console.log("welcome to 30DaysOfJavaScript");

//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative
/* comments can make code readable, easy to reuse and informative */

// ------------------- SECTION B : VARIABLES -------------------

//Q5 --> Declare four variables without assigning values
let a;
let b;
let c;
let d;



//Q6 --> Declare four variables with assigned values
let e = 10;
let f = "anurag";
let g = true;
let h = 11;


//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstName2 = "Anurag";
let LastName2 = "Deshpande";
let maritalStatus2 = "Married";
let country2 = "India";
let age2 = 30;

//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line
let firstName1 = "Anurag", LastName1 = "Deshpande", maritalStatus1 = "Married", country1 = "India", age1 = 30;

//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
let myAge = 30;
let yourAge = 25;
console.log("My Age:", myAge);
console.log("Your Age:", yourAge);

// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------


//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment
//        let 1num = 1   // Variable names cannot start with a number.
//        let my name = "js"        // Variable names cannot contain spaces.
//        let let = 2       // 'let' is a reserved keyword and cannot be used as a variable name.


//Q11 --> Fix the below variables and rewrite them in correct camelCase
//        let first_name = "siddhant"
//        let LASTNAME = "gadakh"
//        let A = 10
let firstName = "siddhant";
//        let LASTNAME = "gadakh"
let lastName = "gadakh";
//        let A = 10
let number = 10;

//Q12 --> Predict the output before running, then verify with node
//        let city = "Pune"
//        let City = "Mumbai"
//        console.log(city)
//        console.log(City)
//        HINT -> remember, JS is a case sensitive language
let city = "Pune";
let City = "Mumbai";
console.log(city);
console.log(City);


//Q13 --> Predict the output before running, then verify with node
//        const pi = 3.14
//        pi = 4
//        console.log(pi)
//        HINT -> check what happens when we update a const variable
const pi = 3.14;
// pi = 4; // This will cause an error
console.log(pi);