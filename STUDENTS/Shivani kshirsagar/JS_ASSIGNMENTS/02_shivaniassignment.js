// ============================================
// 02_ASSIGNMENT -> TOPIC : JS DATA TYPES (primitive, non-primitive, typeof)
// BASED ON : LECTURE/02_JS_Datatypes.js  +  THEORY_NOTES/02_JS_Datatypes.md
// HOW TO RUN : open terminal -> node 02_ASSIGNMENT.js
// ============================================

// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()
//       HINT -> there are 5 primitive datatypes (check theory notes section 3)

let num= 42
console.log(num) //42

let str ="hello"
console.log(str) //hello

let bool = true
console.log(bool)//true

let undef = undefined
console.log(undef) //undefined

let nl = null
console.log(nl) //null

//========================================================================================================

//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
//       let city = "Pune"
//       let marks = 92.5
//       let isPass = true
//       let result
//       HINT -> typeof is an operator, example -> console.log(typeof city)


 let city = "Pune"
 let marks = 92.5
 let isPass = true
 let result
console.log(typeof city) // string
console.log(typeof marks) // number
console.log(typeof isPass) // boolean
console.log(typeof result) // undefined

//========================================================================================================

//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let x;
//       console.log(x)
//       console.log(typeof x)
//       HINT -> what value does JS give when we dont assign anything ?
      let x;
      console.log(x) // undefined
      console.log(typeof x) // undefined
      
//========================================================================================================


//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let v1 = null
//       console.log(typeof v1)
//       HINT -> this is a famous bug in js (check theory notes section 5)

      let v1 = null
      console.log(typeof v1) // object    ( — this is a historical bug in JavaScript )
      
//========================================================================================================


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 10
//       let b = a
//       a = 20
//       console.log(a)
//       console.log(b)
//       HINT -> primitives are copied by VALUE

      let a = 10
      let b = a
      a = 20
      console.log(a) //20
      console.log(b) //10

      
//========================================================================================================


//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each
//        HINT -> who sets the value, JS or the programmer ?

/* undefined vs null
undefined and null both are primitive datatypes in js . and are not changeable that it is immutable .

1. undefined is a type itself, while null is an object.
2. undefined is set by JavaScript when a variable is declared but not assigned a value,
 while null is explicitly assigned by the programmer to indicate the absence of any object value.
 let a
 console.log(a) // undefined
 let b=null
 console.log(b) // null
*/
 let a1
 console.log(a1) // undefined
let b1=null
console.log(b1) // null


//========================================================================================================


// ------------------- SECTION C : BONUS CHALLENGE -------------------

//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
//        let x;
//        let y = null;
//        let z = "25";
//        console.log(typeof x, typeof y, typeof z)

       let x1
       let y = null;
       let z = "25";
       console.log(typeof x1, typeof y, typeof z) //undefined object string

       /*here 
       x1 is declared but not assigned any value, so its type is undefined.
       y is explicitly assigned null, but due to a historical bug in JavaScript, typeof null returns "object".
       z is a string containing the characters "25", so its type is "string".
        */