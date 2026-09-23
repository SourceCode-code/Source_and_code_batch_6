// ------------------- SECTION A : BASICS -------------------

//Q1 --> Declare one integer variable and one floating (decimal) variable of your choice.
//       Print both values AND their datatypes using typeof.
console.log("Q1")
// Integer variable 
let int = 25;
console.log(int, typeof int);

//Floating (decimal) variable 
let float = 25.33;
console.log(float, typeof float);
console.log("================================");

//Q2 --> A shopkeeper wants to display a price in exact 2 decimal places.
console.log("Q2")
let price = 499.5
let newPrice = price.toFixed(2);
console.log(price);
console.log(newPrice);
console.log(typeof newPrice);

console.log("==================================");
console.log("Q3")
//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2));
// OUTPUT : 10 11 10
// floor = rounds down, ceil = rounds up , round = rounds down as it is 10.2 

console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5));
//OUTPUT : 10 11 11 
// round = goes to nearest integer, .5 rounds up for the positive number 

console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9));
//OUTPUT : 10 11 11 
// round = goes to nearest integer, .5 rounds up for the positive number 

console.log("=================================");
console.log("Q4");
//Q4 --> INTERVIEW QUESTION -> Math.round() and .toFixed() BOTH look like they "round".
//============Math.round()==============
/**
 * 1. Math.round() is a method of the math object 
 */
