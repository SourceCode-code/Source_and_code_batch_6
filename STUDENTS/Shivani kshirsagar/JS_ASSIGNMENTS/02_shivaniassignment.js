// ============================================
// 02_ASSIGNMENT -> TOPIC : JS DATA TYPES (primitive, non-primitive, typeof)
// BASED ON : LECTURE/02_JS_Datatypes.js  +  THEORY_NOTES/02_JS_Datatypes.md
// HOW TO RUN : open terminal -> node 02_ASSIGNMENT.js
// ============================================

// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()
//       HINT -> there are 5 primitive datatypes (check theory notes section 3)

let num = 42
let str = "shivani kshirsagar"
let bool = true
let country
let city2 = null

console.log(num) // 42
console.log(str)  // shivani kshirsagar
console.log(bool)  // true
console.log(country)  // undefined
console.log(city2)  // null

//--------------------------------------------------------------------------------------------------------------

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

console.log(typeof city) //string
console.log(typeof marks) //number
console.log(typeof isPass) //boolean
console.log(typeof result) //undefined


//--------------------------------------------------------------------------------------------------------------


//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let x;
//       console.log(x)
//       console.log(typeof x)
//       HINT -> what value does JS give when we dont assign anything ?


let x;
console.log(x) // undefined beacuse we declare the variable but not assign any value to t it is bug in js .
console.log(typeof x) // undefined we here we can check the type of veriable x whivh is undefined

//when we dont assign the value JS automatically gives `undefined` — you usually don't assign it yourself. 

//--------------------------------------------------------------------------------------------------------------



//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let v1 = null
//       console.log(typeof v1)
//       HINT -> this is a famous bug in js (check theory notes section 5)

let v1 = null
console.log(typeof v1) // NULL because here we declare veriable and value is  initially empty .


//--------------------------------------------------------------------------------------------------------------


//------------------- SECTION B : PREDICT THE OUTPUT -------------------


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
console.log(b)  //10


//--------------------------------------------------------------------------------------------------------------


//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each
//        HINT -> who sets the value, JS or the programmer ?

/* undefind vs null

undefined =>
      A variable that is declared but no value is given → its value is undefined.
      JS automatically gives undefined — you usually don't assign it yourself.
 null=>
      this is a historical bug in JavaScript
      null means intentionally empty / "nothing".
      It is assigned by the programmer on purpose, to say "this variable has no value".
*/



//--------------------------------------------------------------------------------------------------------------



// ------------------- SECTION C : BONUS CHALLENGE -------------------

//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
//        let x;
//        let y = null;
//        let z = "25";
//        console.log(typeof x, typeof y, typeof z)

       let x1;  // here we declare veriable but value not assign 
       let y = null; //here declare veriable and value represint null means initially it is a emplty that is nothingness.
       let z = "25";// here we declare variable and the value wraped in between "" (double quates)
       console.log(typeof x1, typeof y, typeof z)   //   undefined object string



//--------------------------------------------------------------------------------------------------------------


