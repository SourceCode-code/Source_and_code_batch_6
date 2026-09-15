// ============================================
// 02_ASSIGNMENT -> TOPIC : JS DATA TYPES (primitive, non-primitive, typeof)
// BASED ON : LECTURE/02_JS_Datatypes.js  +  THEORY_NOTES/02_JS_Datatypes.md
// HOW TO RUN : open terminal -> node 02_ASSIGNMENT.js
// ============================================

// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()
//       HINT -> there are 5 primitive datatypes (check theory notes section 3)
//******************************Answer*****************************************
let number = 10
let my_Name = "Vidya"
let isMarried = true
let abc;
let y = ""

console.log(number, my_Name, isMarried, abc, y)


//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
//       let city = "Pune"
//       let marks = 92.5
//       let isPass = true
//       let result
//       HINT -> typeof is an operator, example -> console.log(typeof city)
//******************************Answer*****************************************
let city = "Pune"
let marks = 92.5
let isPass = true
let result
console.log("_____________________")
console.log(typeof city)
console.log(typeof marks)
console.log(typeof isPass)
console.log(typeof result)
console.log("_____________________")

//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let x;
//       console.log(x)
//       console.log(typeof x)
//       HINT -> what value does JS give when we dont assign anything ?
//******************************Answer*****************************************
 let x;
console.log(x)          //undefined
console.log(typeof x)   //undefined
console.log("_____________________")

//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let v1 = null
//       console.log(typeof v1)
//       HINT -> this is a famous bug in js (check theory notes section 5)
//******************************Answer*****************************************
let v1 = null
console.log(typeof v1)          //object
console.log("_____________________")

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 10
//       let b = a
//       a = 20
//       console.log(a)
//       console.log(b)
//       HINT -> primitives are copied by VALUE
//******************************Answer*****************************************
   let a = 10
     let b = a
     a = 20
 console.log(a)     //20
 console.log(b)     //10
 console.log("_____________________")

//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each
//        HINT -> who sets the value, JS or the programmer ?
//******************************Answer*****************************************
// Both represent an absence of value, but they have distinct meanings and behaviors.
/* 
1. undefined: Means a variable has been declared but has not yet been assigned a value. 
2. It is JavaScript's default fallback value for "not defined yet".
3. Example:
let declaredButEmpty; 
console.log(declaredButEmpty); // Output: undefined
*/

/*
1. null: An intentional, explicitly assigned value representing "nothingness" or an empty object.
2.  The developer purposefully sets this to show a variable has no value.
3. Example:
let explicitlyEmpty = null; 
console.log(explicitlyEmpty); // Output: null
*/

// ------------------- SECTION C : BONUS CHALLENGE -------------------

//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
//        let x;
//        let y = null;
//        let z = "25";
//        console.log(typeof x, typeof y, typeof z)
//******************************Answer*****************************************
 let x1;
 let y1 = null;
let z1 = "25";
console.log(typeof x1, typeof y1, typeof z1)   //undefined object string
console.log("_____________________")