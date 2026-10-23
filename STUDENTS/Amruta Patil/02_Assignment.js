// ============================================
// 02_ASSIGNMENT -> TOPIC : JS DATA TYPES (primitive, non-primitive, typeof)
// BASED ON : LECTURE/02_JS_Datatypes.js  +  THEORY_NOTES/02_JS_Datatypes.md
// HOW TO RUN : open terminal -> node 02_ASSIGNMENT_JS_DATA_TYPES.js
// ============================================

// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()
//       HINT -> there are 5 primitive datatypes (check theory notes section 3)
//Answer
let num = 10;
let str = "Amruta";
let isStudent = true;
let token;
let value = "null";

console.log(num)
console.log(str)
console.log(isStudent)
console.log(token)
console.log(value)


//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
//       let city = "Pune"
//       let marks = 92.5
//       let isPass = true
//       let result
//       HINT -> typeof is an operator, example -> console.log(typeof city)
//Answer
let city = "Pune"
let marks = 92.5
let isPass = true
let result

console.log("Datatype of city is:- "+ typeof city); 
console.log("Datatype of marks is:- "+ typeof marks); 
console.log("Datatype of isPass is:- "+ typeof isPass); 
console.log("Datatype of result is:- "+ typeof result); 
//output
//Datatype of city is:- string
//Datatype of marks is:- number
//Datatype of isPass is:- boolean
//Datatype of result is:- undefined

//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let x;
//       console.log(x)
//       console.log(typeof x)
//       HINT -> what value does JS give when we dont assign anything ?
//Answer
let x;
console.log(x)
console.log(typeof x)
// output is undefined value
//undefined
//undefined

//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let v1 = null
//       console.log(typeof v1)
//       HINT -> this is a famous bug in js (check theory notes section 5)

let v1 = null
console.log(typeof v1)
//Output
//Object
// typeof null returns object
// This is a famous historical bug in JavaScript.
//  object — this is a historical bug in JavaScript that can't be fixed because it would break old websites

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 10
//       let b = a
//       a = 20
//       console.log(a)
//       console.log(b)
//       HINT -> primitives are copied by VALUE
//Answer
let a = 10
let b = a
a = 20
console.log(a)
console.log(b)
//Output
//20
//10


//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each
//        HINT -> who sets the value, JS or the programmer ?

//Diffrence
//undefined
// A variable that is **declared but no value is given** → its value is `undefined`.
//JS automatically gives `undefined` — you usually don't assign it yourself.

//null
 //`null` means **intentionally empty** / "nothing".
//It is assigned **by the programmer on purpose**, to say "this variable has no value".

// ------------------- SECTION C : BONUS CHALLENGE -------------------

//Q11 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
//        let x;
//        let y = null;
//        let z = "25";
//        console.log(typeof x, typeof y, typeof z)
//Answer
let x1;
let y1 = null;
let z1 = "25";
console.log(typeof x1, typeof y1, typeof z1)

//Output
//undefined object string
//X1 not declare any value that's it is undefined.
//y1 contains null that's why it is object, because it is historical bug in JS
//Z1 it contains text, that's why it is sring