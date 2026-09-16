//Q1 --> Write a code to print your name in the terminal
//       HINT -> use console.log()
//       EXPECTED OUTPUT (example) -> Parmeshwar

// Answer-->> 

let name="Parmeshwar"
console.log(name) // Parmeshwar

//--------------------------------------------------------------------------------------------------------------//

//Q2 --> Write a single line comment which says, comments can make code readable
//       HINT -> single line comment starts with //

// Answer-->> 

// comments can make code readable

//---------------------------------------------------------------------------------------------------------------//

//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript

// Answer-->>  

// Welcome to 30DaysOfJavaScript

//--------------------------------------------------------------------------------------------------------------//

//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative
//       HINT -> multiline comment starts with /* and ends with */

// Answer-->>  

/*
comments can make code readable, 
easy to reuse and informative
*/

//---------------------------------------------------------------------------------------------------------------//

//Q5 --> Declare four variables without assigning values
//       HINT -> use let ; what value will they hold ? write the answer in a comment
//       BONUS -> print them using console.log and check what js gives by default

// Answer-->> 

let a;
let b;
let c;
let d;

console.log(a) //undefined
console.log(b) //undefined
console.log(c) //undefined
console.log(d) //undefined

//------------------------------------------------------------------------------------------------------------//

//Q6 --> Declare four variables with assigned values
// ( try one number, one string, one boolean and one decimal value )

// Answer-->> 

let age = 34;                // Number
let name1 = "Parmeshwar";    // String
let checkbox = true;         // Boolean
let decimal = 450.50;        // Decimal value

console.log(age);      // 34
console.log(name1);    // Parmeshwar
console.log(checkbox); // true
console.log(decimal);  // 450.50

//-----------------------------------------------------------------------------------------------------------//

//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines
//       HINT -> one variable per line, use camelCase names
//       BONUS -> print all of them with a single console.log

// Answer-->> 

let first_Name = "Parmeshwar";
let last_Name = "More";
let marital_Status = "Married";
let country = "India";
let age_Latest = 34;

// Print all of them with a single console.log
console.log(first_Name, last_Name, marital_Status, country, age_Latest); // Parmeshwar More Married India 34

//----------------------------------------------------------------------------------------------------------//

//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line
//       HINT -> separate each declaration with a comma
//       QUESTION -> which way is better, multiple lines or single line ? write answer in a comment

// Answer-->> multiple lines is better because it is easy to read and good practise

let firstName = "Param", lastName = "More", maritalStatus = "Married", countryA = "India", ageA = 34;

console.log(firstName, lastName, maritalStatus, countryA, ageA); // Param More Married India 34

//----------------------------------------------------------------------------------------------------------//

//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
//       HINT -> use let, then print both using console.log()
//       BONUS -> update myAge with a new value and print it again

// Answer-->>

let myAge=34
let yourAge=40
console.log(myAge)   // 34
console.log(yourAge) // 40

myAge= 35
console.log(myAge) // 35

//-----------------------------------------------------------------------------------------------------------//

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment
//        let 1num = 1
//        let my name = "js"
//        let let = 2
//        HINT -> check variable naming rules in theory notes

// Answer-->>

//let 1num = 1;        // Invalid because a variable name cannot start with a number
//let my name = "js";  // Invalid because spaces are not allowed in variable names
//let let = 2;         // Invalid because "let" is a reserved keyword in JS

//----------------------------------------------------------------------------------------------------------//

//Q11 --> Fix the below variables and rewrite them in correct camelCase
//        let first_name = "siddhant"
//        let LASTNAME = "gadakh"
//        let A = 10

// Answer-->>

//        let firstName = "siddhant"
//        let lastName = "gadakh"
//        let a = 10

//---------------------------------------------------------------------------------------------------------//


//Q12 --> Predict the output before running, then verify with node
//        let city = "Pune"
//        let City = "Mumbai"
//        console.log(city)
//        console.log(City)
//        HINT -> remember, JS is a case sensitive language

// Answer-->>

let city = "Pune"
let City = "Mumbai"
console.log(city) // Pune
console.log(City) // Mumbai

//-----------------------------------------------------------------------------------------------------------//

//Q13 --> Predict the output before running, then verify with node
//        const pi = 3.14
//        pi = 4
//        console.log(pi)
//        HINT -> check what happens when we update a const variable

// Answer-->>

const pi = 3.14
pi = 4
console.log(pi)    //Assignment to constant variable.

//------------------------completed assignment-----------------------------------------------------------//



