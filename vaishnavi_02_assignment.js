//ASSIGNMENT NO : 02

// ------ SECTION A : PRIMITIVE DATA TYPES --------

// Q1   

let age = 21
let name = "Vaishnavi Wale"
let isValid = false
let value
let score = null

console.log(age)     // 21
console.log(name)    // Vaishnavi Wale
console.log(isValid) // false
console.log(value)   // undefined
console.log(score)   // null



// Q2

let city = "Pune"
let marks = 92.5
let isPass = true
let result

console.log(typeof city)      // string
console.log(typeof marks)     // number
console.log(typeof isPass)    // boolean
console.log(typeof result)    // undefined


// Q3 

let x;
console.log(x)              // undefined
console.log(typeof x)       // undefined

// ANSWER: When we declare a varable but do not assign any value to it , then the value of that variable and its type is undefined

// Q4

let v1 = null
console.log(typeof v1)      //OUTPUT : object


// -------- SECTION B : PREDICT THE OUTPUT --------

//Q9

let a = 10
let b = a
a = 20
console.log(a)   // OUTPUT : 20
console.log(b)   // OUTPUT : 10

// ANSWER : Primitive are copied by value , so when we change the value of a , it does not affect the value of b


// Q10

// INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)

//ANSWER:
// 1. undefined is a value that is assigned by JS when we declare a variable but do not assign any value to it . 
// 2. null is a value that is assigned by programmer 


// ---------------- SECTION C : BONUS CHALLENGE ---------

//Q13

let w;
let y = null;
let z = "25";

console.log(typeof w)       //undefined
console.log(typeof y)      //object
console.log(typeof z)      //string

// w is undefined beacuase we have declared it but not assigned any value to it 
// y contain null value which is assigned by programmer
// z is a string beacause it is enclosed with double quotes. 



