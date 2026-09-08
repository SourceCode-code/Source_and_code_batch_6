////Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()
//       HINT -> there are 5 primitive datatypes (check theory notes section 3)

//Variable declaration
let num = 42;
let str = "Hello";
let bool = true;
let undef = undefined;
let emptyVal = null;

// Print the variables
console.log(num);
console.log(str);
console.log(bool);
console.log(undef);
console.log(emptyVal);

//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
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
//       console.log(typeof x)

// let x;
console.log(x);
console.log(typeof x);

//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let v1 = null
//       console.log(typeof v1)

let v1 = null;
console.log(typeof v1);


//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 10
//       let b = a
//       a = 20
//       console.log(a)
//       console.log(b)

let a = 10;
let b = a;
a = 20;
console.log(a);
console.log(b);

/*
Q10 --> Difference between undefined and null
1.Meaning & Assignment:
-Undefined is a variable that has been declared but has not yet been assigned a value. It is the default value of uninitialized variables.
-Null is an assignment value that represents the intentional absence of any object value. It is used to indicate that a variable should have no value.
2.typeof Output:
-typeof undefined returns "undefined"
-typeof null returns "object" (this is a known bug in JavaScript)
*/

//example of undefined
let unssignedVar;
console.log(unssignedVar);

//example of null
let selecteduser = null;
console.log(selecteduser);

//Q13 -->

let x;
let y = null;
let z = "50";
console.log(typeof x, typeof y, typeof z);

/*
typeof x -> undefined
typeof y -> object
typeof z -> string
 because x is declared but not assigned, y is explicitly set to null, and z is a string value.
*/
