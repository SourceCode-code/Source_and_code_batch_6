 //01_ASSIGNMENT -> TOPIC : JS BASICS (variables, comments, console.log)

 
// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal
//       HINT -> use console.log()
//       EXPECTED OUTPUT (example) -> siddhant


//*****************Answer: -> *******************
const my_Name = "Vidya"
console.log(my_Name)

//Q2 --> Write a single line comment which says, comments can make code readable
//       HINT -> single line comment starts with //

//*****************Answer: -> *******************
//What I learn in Today's Lecture is single and multiline comment

//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript
//*****************Answer: -> *******************
//Welcome to 30DaysOfJavaScript

//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative
//       HINT -> multiline comment starts with /* and ends with */

//*****************Answer: -> *******************
 /* This is a multiline comment
  Comments can make code readable,
  easy to reuse and informative
*/

// ------------------- SECTION B : VARIABLES -------------------

//Q5 --> Declare four variables without assigning values
//       HINT -> use let ; what value will they hold ? write the answer in a comment
//       BONUS -> print them using console.log and check what js gives by default

//*****************Answer: -> *******************
//let firstName
// let lastName
// let age
// let isMarried
// Console.log(firstName, lastName, age, isMarried);


//Q6 --> Declare four variables with assigned values
//       ( try one number, one string, one boolean and one decimal value )

//*****************Answer: -> *******************
let num1 = 10
let name = "Vidya"
let result = true
let floatVal = 12.45
console.log(num1, name, result, floatVal)


//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines
//       HINT -> one variable per line, use camelCase names
//       BONUS -> print all of them with a single console.log

//*****************Answer: -> *******************
let firstName = "Vidya"
let lastName = "Shitole"
let maritalStatus = true
let countryName = "India"
let runningAge = 24                //age is undefined

console.log(firstName, lastName, maritalStatus, countryName, runningAge);

//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line
//       HINT -> separate each declaration with a comma
//       QUESTION -> which way is better, multiple lines or single line ? write answer in a comment

//*****************Answer: -> *******************
let first_Name = "Vidya", last_Name = "Shitole", marital_Status = "Married", country_Name = "India", age = 36


/*Multiple lines (one variable declaration per line) is generally considered the better and safer practice 
in modern software engineering. While single-line declarations make the code shorter and save vertical space*/

//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
//       HINT -> use let, then print both using console.log()
//       BONUS -> update myAge with a new value and print it again

//*****************Answer: -> *******************
 let myAge = 36;
 let yourAge = 29;
 console.log("My age is " + myAge);
 console.log("Your age is " + yourAge);  
// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment
//        let 1num = 1
//        let my name = "js"
//        let let = 2
//        HINT -> check variable naming rules in theory notes
//*****************Answer: -> *******************
// let 1num = 1 // Invalid because variable names cannot start with a number
//  let my name = "js" // Invalid because variable names cannot contain spaces
// let let = 2 // Invalid because 'let' is a reserved keyword in JavaScript


//Q11 --> Fix the below variables and rewrite them in correct camelCase
//        let first_name = "siddhant"
//        let LASTNAME = "gadakh"
//        let A = 10

//*****************Answer: -> *******************
let first_Name1 = "Vidya"
let last_Name1 = "Shitole"
let A = 10

//Q12 --> Predict the output before running, then verify with node
//        let city = "Pune"
//        let City = "Mumbai"
//        console.log(city)
//        console.log(City)
//        HINT -> remember, JS is a case sensitive language

//*****************Answer: -> *******************
 let city = "Pune";
 let City = "Mumbai";
 console.log(city)
 console.log(City) 

//Q13 --> Predict the output before running, then verify with node
//        const pi = 3.14
//        pi = 4
//        console.log(pi)
//        HINT -> check what happens when we update a const variable

//*****************Answer: -> *******************
const marks = 9.87
//marks = 10
console.log(marks)
//It will give an error because we cannot reassign a value to a constant variable.