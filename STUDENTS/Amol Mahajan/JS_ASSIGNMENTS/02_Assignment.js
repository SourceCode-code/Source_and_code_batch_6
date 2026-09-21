//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()

let num = 10; // number
let num1= "Ten";
let selection = true; // boolean
let selection1 = false; // boolean
let password; // undefined
let login = null; // null

console.log(num);
console.log(num1);
console.log(selection);
console.log(selection1);
console.log(password);
console.log(login);

//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator

let city = "Pune";
let marks = 92.5;
let isPass = true;
let result;

console.log(typeof city)
console.log(typeof marks)
console.log(typeof isPass)
console.log(typeof result)

//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify

let x; // answer is undefined
console.log(x) // answer is undefined
console.log(typeof x) // answer is undefined

//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
      let v1 = null
      console.log(typeof v1) // output is object when we define null value


//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
      let a = 10
      let b = a
      a = 20
      console.log(a)
      console.log(b)
//Answer is 20 and 10


//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
// In undefined for declared variable value is not assigned
// Js automatically assigns value to undefined
//in null the value is empty means there is nothing
// progamer assign null value intentionally

//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
       let X;
       let Y = null;
       let Z = "25";
       console.log(typeof X, typeof Y, typeof Z)

// X is undefined because there is no valiue is assigned
// Y object  because it is a bug in JS when we give null value
// Z is string because it has string delcared in it.
