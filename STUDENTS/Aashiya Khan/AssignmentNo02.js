// ============================================
// 02_ASSIGNMENT -> TOPIC : JS DATA TYPES (primitive, non-primitive, typeof)
// BASED ON : LECTURE/02_JS_Datatypes.js  +  THEORY_NOTES/02_JS_Datatypes.md
// HOW TO RUN : open terminal -> node 02_ASSIGNMENT_JS_DATA_TYPES.js
// ============================================

// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()
//       HINT -> there are 5 primitive datatypes (check theory notes section 3)
let num = 25;                    // Number
let name = "Aashiya";            // String
let isStudent = true;            // Boolean
let value;                       // Undefined
let data = null;                 // Null

console.log(num);
console.log(name);
console.log(isStudent);
console.log(value);
console.log(data);

//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
//       let city = "Pune"
//       let marks = 92.5
//       let isPass = true
//       let result
//       HINT -> typeof is an operator, example -> console.log(typeof city)
// Q2: Check datatype using typeof operator

let city = "Pune";
let marks = 92.5;
let isPass = true;
let result;

console.log(typeof city);
console.log(typeof marks);
console.log(typeof isPass);
console.log(typeof result);

//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let x;
//       console.log(x)
//       console.log(typeof x)//undefined
//       HINT -> what value does JS give when we dont assign anything ?//it gives value as undefined


//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let v1 = null
//       console.log(typeof v1)//object
//       HINT -> this is a famous bug in js (check theory notes section 5)//type of will show object 


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 10
//       let b = a
//       a = 20
//       console.log(a)//20
//       console.log(b)//10
//       HINT -> primitives are copied by VALUE


//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each
//        HINT -> who sets the value, JS or the programmer ?


// 1. Undefined:
//    - JavaScript automatically assigns undefined when a variable is declared
//      but no value is assigned.
//    - The value is set by JavaScript.

// Example:
let result1;
console.log(result1);        // undefined
console.log(typeof result); // undefined


// 2. Null:
//    - Null is an intentional empty value.
//    - The programmer explicitly assigns null to a variable.

// Example:
let data1 = null;
console.log(data1);          // null
console.log(typeof data);   // object


// ------------------- SECTION C : BONUS CHALLENGE -------------------

//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
//        let x;//undefine
//        let y = null;//object
//        let z = "25";//string
//        console.log(typeof x, typeof y, typeof z)

