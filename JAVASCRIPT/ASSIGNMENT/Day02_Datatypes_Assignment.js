// ============================================
// 02_ASSIGNMENT -> TOPIC : JS DATA TYPES (primitive, non-primitive, typeof)
// BASED ON : LECTURE/02_JS_Datatypes.js  +  THEORY_NOTES/02_JS_Datatypes.md
// HOW TO RUN : open terminal -> node 02_ASSIGNMENT.js
// ============================================

// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()
//       HINT -> there are 5 primitive datatypes (check theory notes section 3)


let number_10 = 10;
let myName = "Akshay";
let isIndian  = true;
let token;
let value = null;

console.log(number_10);
console.log(myName);
console.log(isIndian);
console.log(token);
console.log(value);


//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
//       let city = "Pune"
//       let marks = 92.5
//       let isPass = true
//       let result
//       HINT -> typeof is an operator, example -> console.log(typeof city)


let city = "Pune";
let marks = 92.5;
let isPass = true;
let result;

console.log("Datatype of city is:- "+ typeof city); 
console.log("Datatype of marks is:- "+typeof marks); 
console.log("Datatype of isPass is:- "+typeof isPass); 
console.log("Datatype of result is:- "+typeof result); 

// Output:
// Datatype of city is:- string
// Datatype of marks is:- number 
// Datatype of isPass is:- boolean 
// Datatype of result is:- undefined


//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let x;
//       console.log(x)
//       console.log(typeof x)
//       HINT -> what value does JS give when we dont assign anything ?

let x;
console.log(x); 
console.log(typeof x); 

// Output:
// undefined
// undefined 


//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let v1 = null
//       console.log(typeof v1)
//       HINT -> this is a famous bug in js (check theory notes section 5)

let v1 = null;

console.log(typeof v1); // Object

// Output:
// object 
// typeof null returns object
// This is a famous historical bug in JavaScript.
//  object — this is a historical bug in JavaScript that can't be fixed because it would break old websites
// null is NOT actually an object (theory notes section 5)





// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 10
//       let b = a
//       a = 20
//       console.log(a)
//       console.log(b)
//       HINT -> primitives are copied by VALUE

let a = 10;
let b = a;
a = 20;

console.log(a);
console.log(b);

// Output:
// 20
// 10


//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each
//        HINT -> who sets the value, JS or the programmer ?

// Difference between undefined and null:
//
// 1. undefined means a variable has been declared but no value is assigned.
//    JavaScript automatically gives it the value undefined.
//
// 2. null is intentionally assigned by the programmer
//    to represent an empty or no value.


// Undefined example
let userName;
console.log(userName); // undefined

// Null example
let userData = null;
console.log(userData); // null




// ------------------- SECTION C : BONUS CHALLENGE -------------------

//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
//        let x;
//        let y = null;
//        let z = "25";
//        console.log(typeof x, typeof y, typeof z) 


let x1;
let y = null;
let z = "25";

console.log(typeof x1, typeof y, typeof z);

// Output:
// undefined object string

// x has no assigned value, so its type is undefined
// y contains null, and typeof null returns object due to
// a historical JavaScript bug
// z contains text 25 so its type is string
