
// ============================================
// 02_ASSIGNMENT -> TOPIC : JS DATA TYPES (primitive, non-primitive, typeof)
// BASED ON : LECTURE/02_JS_Datatypes.js  +  THEORY_NOTES/02_JS_Datatypes.md
// HOW TO RUN : open terminal -> node 02_ASSIGNMENT_JS_DATA_TYPES.js
// ============================================

// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()
//       HINT -> there are 5 primitive datatypes (check theory notes section 3)

let number = 12;
let string = "jit";
let isTrue = true;
let test;
let j = null;
console.log(number, string, isTrue, test, j);  //O/p- 12 jit true undefined null



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

console.log(typeof city);
console.log(typeof marks);
console.log(typeof isPass);
console.log(typeof result);



//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let x;
//       console.log(x)------------------------------------------------undefined--- as a value
//       console.log(typeof x)-----------------------------------------undefined--- as a variable type
//       HINT -> what value does JS give when we dont assign anything ?
let x;
console.log(x);
console.log(typeof x);

//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let v1 = null
//       console.log(typeof v1)----------------------------- object
//       HINT -> this is a famous bug in js (check theory notes section 5)
let v1 = null;
console.log(typeof v1);

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 10
//       let b = a
//       a = 20
//       console.log(a)--------------------20
//       console.log(b)--------------------10
//       HINT -> primitives are copied by VALUE
let a = 10
     let b = a
       a = 20
       console.log(a);
       console.log(b);

//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each
//        HINT -> who sets the value, JS or the programmer ?

/* 
1. for undefined variable js assign the value as undefined
2. the type of variable is undefined for undefined variable
 */
let k;
console.log(k);
console.log(typeof k);
/* 
1. for null variable programmer assign the value as null intentionally
2. the type of variable is object for null variable
 */
let N = null;
console.log(N);
console.log(typeof N);



// ------------------- SECTION C : BONUS CHALLENGE -------------------

//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
//        let x;
//        let y = null;
//        let z = "25";
//        console.log(typeof x, typeof y, typeof z)

/*
1. o/p of typeof x will be "undefined" as its a undefined variable
2. o/p of typeof y will be "object" as its a historical bug and it cant be fixed
3. o/p of typeof z will be "string" as its defined in double quotes
 */

let m;
    let y = null;
        let z = "25";
    console.log(typeof m, typeof y, typeof z);