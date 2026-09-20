              
              //section A answers-------Q2
               //Welcome to 30DaysOfJavaScript  ------Q3

let fName= "Jitendra";
let mName= "Ishwar";
let lName= "Waghulde";
console.log(fName + " " + mName + " " + lName); //-------Q1

/* this is for multiple linew comment
for the code----------Q4*/

              //Section B answers
////Q5 --> Declare four variables without assigning values

let oneNum; // if use let oneNum= ; then SyntaxError: Unexpected token ';'
let className= ""; 
let isStudent;   
let testPrint= null;  
console.log(oneNum);
console.log(className); //Showing blank space in a row
console.log(isStudent);  // showing "undefined" text in a row
console.log(testPrint);  // showing "null" text in a row

//Q6 --> Declare four variables with assigned values

let Num = 1001;
let str = `Hello`;
let isCorrect = true;
let DecimalNum = 0.000000000005;
console.log(Num);
console.log(str);
console.log(isCorrect);
console.log(DecimalNum);

//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line

let firstName = "Jitendra";
let lastName = "Waghulde";
let maritalStatus = "Married";
let myCountry = "Bharat";
let myAge1 = 33;
console.log(firstName, lastName, maritalStatus, myCountry, myAge1); //multiple ligne print is better than single line print

//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName1 = "Jitendra";
let lastName1 = "Waghulde";
let maritalStatus1 = "Married";
let myCountry1 = "Bharat";
let myAge2 = 33;
console.log("");
console.log(firstName1);
console.log(lastName1);
console.log(maritalStatus1);
console.log(myCountry1);
console.log(myAge2);

//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
let myAge= 33;
let yourAge = 25;
console.log("");
console.log(myAge);
console.log(yourAge);
myAge= 50;
console.log(myAge);
console.log("");
// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment
//let 1num = 1;  //An identifier or keyword cannot immediately follow a numeric literal.
   //  let my name = "js"; // There is a space in the variable name which is not allowed
     //  let let = 2; // "let" is a reserved keyword in JavaScript and cannot be used as a variable name


     //Q11 --> Fix the below variables and rewrite them in correct camelCase
//        let first_name = "siddhant"
//        let LASTNAME = "gadakh"
//        let A = 10

//let firstName = "siddhant";
//        let lastName = "gadakh";
//        let age = 10;

//Q12 --> Predict the output before running, then verify with node
//        let city = "Pune"
//        let City = "Mumbai"
//        console.log(city)  // Output: Pune
//        console.log(City)  // Output: Mumbai
//        HINT -> remember, JS is a case sensitive language

//Q13 --> Predict the output before running, then verify with node
//        const pi = 3.14
//        pi = 4
//        console.log(pi)  // Output: 3.14
//        HINT -> check what happens when we update a const variable