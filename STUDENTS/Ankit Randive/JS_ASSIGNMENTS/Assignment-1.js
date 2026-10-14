//--------------------------Assignemet 01 ------------------------------
// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal
//       HINT -> use console.log()
//       EXPECTED OUTPUT (example) -> siddhant
// Answer:
let mName = "Ankit Randive"
console.log(mName)

//Q2 --> Write a single line comment which says, comments can make code readable
//       HINT -> single line comment starts with //
// Answer:
// My name is Ankit Randive.


//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript
// Answer:
// Welcome to Js Assignments.

//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative
//       HINT -> multiline comment starts with /* and ends with */
// Answer:
/* My name is Ankit Randive. I am learning Javascript. And doing Assignments. */

// ------------------- SECTION B : VARIABLES -------------------

//Q5 --> Declare four variables without assigning values
//       HINT -> use let ; what value will they hold ? write the answer in a comment
//       BONUS -> print them using console.log and check what js gives by default
// Answer:
let a, b, c, d


//Q6 --> Declare four variables with assigned values
//       ( try one number, one string, one boolean and one decimal value )
// Answer:
let number = 20
let Name = "Ankit"
let Married = true
let decimal = 20.5

//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines
//       HINT -> one variable per line, use camelCase names
//       BONUS -> print all of them with a single console.log
// Answer:
let firstName1 = "Ankit"
let lastName1 = "Randive"
let maritalStatus1 = "Married"
let country1 = "India"
let age1 = 29

console.log(firstName1)
console.log(lastName1)
console.log(maritalStatus1)
console.log(country1)
console.log(age1)


//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line
//       HINT -> separate each declaration with a comma
//       QUESTION -> which way is better, multiple lines or single line ? write answer in a comment
// Answer:
let firstName2 = "Ankit", lastName2 = "Randive", maritalStatus2 = "Married", country2 = "India", age2 = 29
console.log(firstName2, lastName2, maritalStatus2, country2, age2)



//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
//       HINT -> use let, then print both using console.log()
//       BONUS -> update myAge with a new value and print it again
// Answer:
let myAge = 29
let yourAge = 30

console.log(myAge)
console.log(yourAge)





// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment
//        let 1num = 1
//        let my name = "js"
//        let let = 2
//        HINT -> check variable naming rules in theory notes
// Answer:
let num1 = 2
let myName = "Ankit"
let letVariable = 3

console.log(num1)
console.log(myName)
console.log(letVariable)




//Q11 --> Fix the below variables and rewrite them in correct camelCase
//        let first_name = "siddhant"
//        let LASTNAME = "gadakh"
//        let A = 10
// Answer:
let firstName = "Ankit"
let lastName = "Randive"
let A = 20



//Q12 --> Predict the output before running, then verify with node
//        let city = "Pune"
//        let City = "Mumbai"
//        console.log(city)
//        console.log(City)
//        HINT -> remember, JS is a case sensitive language
// Answer:
let city = "Dharashiv"
let City = "Tuljapur"
console.log(city)
console.log(City)



//Q13 --> Predict the output before running, then verify with node
//        const pi = 3.14
//        pi = 4
//        console.log(pi)
//       HINT -> check what happens when we update a const variable
// Answer:
const pi = 3.14
// pi = 4 // This will cause an error
console.log(pi)


