// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal
//       HINT -> use console.log()
//       EXPECTED OUTPUT (example) -> siddhant

console.log("Rajeshwar")


//Q2 --> Write a single line comment which says, comments can make code readable
//       HINT -> single line comment starts with //

//Comment#1


//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript

//30DaysOfJavaScript

//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative
//       HINT -> multiline comment starts with /* and ends with */

/**
 * Comment#2
 *
 */

// ------------------- SECTION B : VARIABLES -------------------

//Q5 --> Declare four variables without assigning values
//       HINT -> use let ; what value will they hold ? write the answer in a comment
//       BONUS -> print them using console.log and check what js gives by default

let varOne;
let varTwo;
const varThree = " ";
var varFour;
console.log(`${varOne}, ${varTwo}, ${varThree}, ${varFour}`);


//Q6 --> Declare four variables with assigned values
//       ( try one number, one string, one boolean and one decimal value )

let variableOne = 1;
let variableTwo = true;
const variableThree = " ";
var variableFour = null;
console.log(`${variableOne}, ${variableTwo}, ${variableThree}, ${variableFour}`);


//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines
//       HINT -> one variable per line, use camelCase names
//       BONUS -> print all of them with a single console.log

let firstName = 'Rajeshwar';
let lastName = 'Chaudhari';
const maritalStatus = 'Married';
let country = 'India';
let age = 29;

console.log(`${firstName} ${lastName} | ${maritalStatus} | ${country} | ${age} `);



//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line
//       HINT -> separate each declaration with a comma
//       QUESTION -> which way is better, multiple lines or single line ? write answer in a comment

let firstNameAgain = 'Rajeshwar', lastNameAgain = 'Chaudhari',  maritalStatusAgain = 'Married', countryAgain = 'India', ageAgain = 29;
//Multiple lines gives us more options to store like constants


//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
//       HINT -> use let, then print both using console.log()
//       BONUS -> update myAge with a new value and print it again

let myAge = 29;
let yourAge = 26;

myAge = 30;
console.log(`My Age- ${myAge} | Your Age- ${yourAge}`);



// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment
//        let 1num = 1
//        let my name = "js"
//        let let = 2
//        HINT -> check variable naming rules in theory notes


//let let = 2;


//Q11 --> Fix the below variables and rewrite them in correct camelCase
//        let first_name = "siddhant"
//        let LASTNAME = "gadakh"
//        let A = 10




//Q12 --> Predict the output before running, then verify with node
//        let city = "Pune"
//        let City = "Mumbai"
//        console.log(city)
//        console.log(City)
//        HINT -> remember, JS is a case sensitive language




//Q13 --> Predict the output before running, then verify with node
//        const pi = 3.14
//        pi = 4
//        console.log(pi)
//        HINT -> check what happens when we update a const variable

