// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

console.log("==================================");
//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)

let number = 52;
let string = "welcome to the JS"
let boolean = true
let uni = null 
let undefined 


console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof uni);
console.log(typeof undefined);

console.log(typeof(number));

console.log("==================================");
//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
let city = "Pune"
let marks = 92.5
let isPass = true
let result
//       HINT -> typeof is an operator, example -> console.log(typeof city)
console.log(typeof city);
console.log(typeof marks);
console.log(typeof isPass);
console.log(typeof result);

console.log("==================================");
//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
let xy;
console.log(xy)
console.log(typeof xy)
// js will not assigne any value to x so it will be undefined and the type of x will also be undefined

console.log("==================================");
//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
let v1 = null;
console.log(typeof v1);  //OUTPUT : object 


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------
console.log("==================================");
//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
let a = 10
console.log(a);
let b = a
a = 20
console.log(a);
console.log(b);

// a will be 20 and b will be 10 because primitives are copied by value

console.log("==================================");
//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each

//==============UNDEFINED ================
/**
 * 1. UNDEFINED is a value automatically assigned by javascript 
 *    when a variable is declared but value is not assigned 
 * 2. javascript will asign the value as undedefined 
 */
let q;
console.log(a);  //OUTPUT : undefined

//==============NULL=================
/**
 * 1. NULL is an international empty value assigned by the programmer 
 * 2. The programmer explicitly sets the value to null 
 *    when programmer wnat to represent an empty value 
 */
let w = null;
console.log(w);  //OUTPUT : null 

console.log("==================================");
//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
let x;      //OUTPUT : undefined
let y = null;   //OUTPUT : object
let z = "25";   //OUTPUT : string 
console.log(typeof x, typeof y, typeof z)
//OUTPUT : undefined object string
/**
 * UNDEFINED : X is declared but no value is assigned 
 *             JavaScript automatically assigns undefined value 
 * OBJECT : in JavaScript typesof null reutrns "object"
 *          this is historical bug in JavaScript
 * STRING : z contains "25" in double quotes.
 *          even though it is number but it is stored as a string 
 * 
 */