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
let x;
console.log(x)
console.log(typeof x)
// js will not assigne any value to x so it will be undefined and the type of x will also be undefined

console.log("==================================");
//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
let v1 = null;
console.log(typeof v1);


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 10
//       let b = a
//       a = 20
//       console.log(a)
//       console.log(b)
//       HINT -> primitives are copied by VALUE