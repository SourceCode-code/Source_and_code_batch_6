// ------------------- SECTION A : BASICS -------------------
console.log("section A")

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
 * 1. Math.round() method is called using Math.round().
 * 2. the number is rounded to the nearest integer 
 * 3. returns a NUMBER 
 */

//==============.toFixed()======================
/**
 * 1. it is called using number .toFixed()
 * 2. the number is fixed number of decimal places 
 * 3. returns a STRING 
 */
let num_1 = 10.6789
console.log(Math.round(num_1));
//OUTPUT : 11 
console.log(typeof Math.round(num_1));
//OUTPUT : NUMBER 

console.log(num_1.toFixed(2));
//OUTPUT : 10.68
console.log(typeof num_1.toFixed(2));
// OUTPUT : STRING 

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------
console.log("section B")
//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log(Math.floor(-4.2))   //OUTPUT : -5 
console.log(Math.ceil(-4.8))    //OUTPUT : -4
console.log(Math.round(-4.5))   //OUTPUT : -4

//REASON :
/**
 * 1. Math.floor(-4.2) : -5 
 * floor always goes to lower integer (towerds -infinity)
 * 
 * 2. Math.ceil(-4.8) : -4
 * ceil alweay goes to higher integer (towerds +infinity)
 * 
 * 3. Math.round(-4.5) : -4
 * for the negetive values round will rounds towerds to +infinity (towerds +infinity)
 */

console.log("================================================")
//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q6");
let price_1 = 99.99
console.log(Math.floor(price_1));
//OUTPUT :99  rounds down 
console.log(Math.ceil(price_1));
//OUTPUT : 100  rounds up 
console.log(Math.round(price_1));
//OUTPUT :  100 rounds to nearest integer 
console.log(price_1.toFixed(1));
//OUTPUT : 100.0 formates numnber to 1 decimal place.
// it returns as a string not a number 
console.log(typeof price_1.toFixed(1));

console.log("================================");
//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q7");

let x = 10.658912355
console.log(x.toFixed(2))   //OUTPUT : 10.66
// it will reduce the value to 2 decimal places 
console.log(x)  //OUTPUT : 10.658912355


