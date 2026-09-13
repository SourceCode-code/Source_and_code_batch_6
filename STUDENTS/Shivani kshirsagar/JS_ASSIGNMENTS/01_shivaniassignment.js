// ============================================
// 01_ASSIGNMENT -> TOPIC : JS BASICS (variables, comments, console.log)
// BASED ON : LECTURE/01_JS_BASIC.js  +  THEORY_NOTES/01_JS_BASIC.md
// HOW TO RUN : open terminal -> node 01_ASSIGNMENT.js
// ============================================

// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal
//       HINT -> use console.log()
//       EXPECTED OUTPUT (example) -> siddhant
let name ="shivani kshirsagar"

console.log(name) //shivani kshirsagar

//==============================================================================================================

//Q2 --> Write a single line comment which says, comments can make code readable
//       HINT -> single line comment starts with //

//this is a single line comment which make code readable.


//==============================================================================================================


//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript

//welcome to 30DaysOfJavaScript


//==============================================================================================================


//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative
//       HINT -> multiline comment starts with /* and ends with */

/* hello,
this is a multiline comment 
which make code easy to read and resuse.
*/


//==============================================================================================================


// ------------------- SECTION B : VARIABLES -------------------

//Q5 --> Declare four variables without assigning values
//       HINT -> use let ; what value will they hold ? write the answer in a comment
//       BONUS -> print them using console.log and check what js gives by default
let animal
let country
let city
let age

console.log(animal) //undefined
console.log(country) //undefined
console.log(city) //undefined
console.log(age) //undefined


//==============================================================================================================


//Q6 --> Declare four variables with assigned values
//       ( try one number, one string, one boolean and one decimal value )
let num = 23
let str = "hello"
let bool = true
let decimal = 3.1

console.log(num) //23
console.log(str) //hello
console.log(bool) //true
console.log(decimal) //3.1


//==============================================================================================================


//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines
//       HINT -> one variable per line, use camelCase names
//       BONUS -> print all of them with a single console.log

let firstName ="shivani"
let LastName ="kshirsagar"
let marital_status ="married"
let my_country ="India"
let my_age =23

console.log(firstName,LastName,marital_status,my_country,my_age)  //shivani kshirsagar married India 23


//==============================================================================================================


//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line
//       HINT -> separate each declaration with a comma
//       QUESTION -> which way is better, multiple lines or single line ? write answer in a comment

let firstName1 = "shivani", lastName1 = "kshirsagar", maritalStatus1 = "married", country1 = "India", age1 = 23

console.log(firstName1,lastName1,maritalStatus1,country1,age1) //shivani kshirsagar married India 23

//i think multiline is better beaacuse it is easy to read and understand the code than single line from my point of view


//==============================================================================================================


//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
//       HINT -> use let, then print both using console.log()
//       BONUS -> update myAge with a new value and print it again

let myAge = 27
console.log(myAge) //27
myAge =30
console.log(myAge) //30
let yourAge = 32
console.log(yourAge) //32


//==============================================================================================================



// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment

//        let 1num = 1          
//it is invide beacause variable name cannot start with number

//        let my name = "js"
// it is invalide beacause variable name cannot have space in between declaire variable name.

//        let let = 2
// it is invalide because let is a reserved keyword in javascript and cannot be used as variable name means resvered keywords cannot use as a variable name.

//        HINT -> check variable naming rules in theory notes

//==============================================================================================================

//Q11 --> Fix the below variables and rewrite them in correct camelCase
//        let first_name = "siddhant"
//        let LASTNAME = "gadakh"
//        let A = 10

       let first_Name = "siddhant"
       let last_Name = "gadakh"
       let A = 10


//==============================================================================================================


//Q12 --> Predict the output before running, then verify with node
//        let city = "Pune"
//        let City = "Mumbai"
//        console.log(city)
//        console.log(City)
//        HINT -> remember, JS is a case sensitive language

       let city1 = "Pune"
       let City = "Mumbai"
       console.log(city1)   // Pune
       console.log(City)   // Mumbai

       
//==============================================================================================================


//Q13 --> Predict the output before running, then verify with node
//        const pi = 3.14
//        pi = 4
//        console.log(pi)
//        HINT -> check what happens when we update a const variable

       const pi = 3.14
       pi = 4
       console.log(pi)
       //TypeError: Assignment to constant variable.

       
//==============================================================================================================