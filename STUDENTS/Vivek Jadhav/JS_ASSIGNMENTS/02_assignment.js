// ============================================
// 02_ASSIGNMENT -> TOPIC : JS DATA TYPES (primitive, non-primitive, typeof)
// BASED ON : LECTURE/02_JS_Datatypes.js  +  THEORY_NOTES/02_JS_Datatypes.md
// HOW TO RUN : open terminal -> node 02_ASSIGNMENT.js
// ============================================

// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

// Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()

let rollNo = 101;            // 1. number
let studentName = "Siddhant"; // 2. string
let isEnrolled = true;       // 3. boolean
let finalScore;              // 4. undefined (variable declared without any value)
let scholarship = null;      // 5. null (intentionally set to empty)

console.log("--- Q1: Primitive Datatypes ---");
console.log("Number    :", rollNo);
console.log("String    :", studentName);
console.log("Boolean   :", isEnrolled);
console.log("Undefined :", finalScore);
console.log("Null      :", scholarship);


// Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
let city = "Pune";
let marks = 92.5;
let isPass = true;
let result;

console.log("\n--- Q2: Using typeof operator ---");
console.log("Datatype of city   :", typeof city);   // string
console.log("Datatype of marks  :", typeof marks);  // number (decimals are also numbers in JS)
console.log("Datatype of isPass :", typeof isPass); // boolean
console.log("Datatype of result :", typeof result); // undefined


// Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
/*
 * MY PREDICTION (written before running):
 * console.log(x)        -> undefined
 * console.log(typeof x) -> undefined
 */

let x;
console.log("\n--- Q3: Unassigned Variable ---");
console.log(x);
console.log(typeof x);

// REASON: When we declare a variable in JavaScript using 'let' or 'var' but do NOT give it a value,
// JavaScript automatically gives it a default value of undefined, and its type is also "undefined".


// Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
/*
 * MY PREDICTION (written before running):
 * console.log(typeof v1) -> "object"
 */

let v1 = null;
console.log("\n--- Q4: typeof null Bug ---");
console.log(typeof v1);

// REASON: In JavaScript, typeof null returns "object".
// This is a famous bug from the original 1995 implementation of JavaScript.
// It has never been fixed because changing it would break millions of existing websites.


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

// Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
/*
 * MY PREDICTION:
 * console.log(a) -> 20
 * console.log(b) -> 10
 */

let a = 10;
let b = a; // b gets a copy of the value 10
a = 20;    // only 'a' is changed to 20

console.log("\n--- Q9: Primitive Copy by Value ---");
console.log(a); // 20
console.log(b); // 10

// REASON: Numbers are primitive datatypes in JavaScript.
// Primitives are copied by VALUE. That means 'b' gets its own independent copy.
// Modifying 'a' afterwards has no effect on 'b'.


// Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments
/*
 * DIFFERENCE BETWEEN undefined AND null:
 *
 * 1. MEANING:
 *    - undefined: Variable is created, but NO value has been assigned yet.
 *    - null: An intentional, explicit empty value assigned by the programmer.
 *
 * 2. WHO SETS IT:
 *    - undefined is assigned automatically by JavaScript by default.
 *    - null is assigned deliberately by the developer.
 *
 * 3. TYPEOF OPERATOR:
 *    - typeof undefined -> "undefined"
 *    - typeof null      -> "object" (legacy JS bug)
 */

// Example code for Q10:
let marksObtained;         // JS sets this to undefined
let discountCoupon = null; // Programmer intentionally assigns null (no coupon right now)

console.log("\n--- Q10: undefined vs null Example ---");
console.log("marksObtained  :", marksObtained, "| typeof:", typeof marksObtained);
console.log("discountCoupon :", discountCoupon, "| typeof:", typeof discountCoupon);


// ------------------- SECTION C : BONUS CHALLENGE -------------------

// Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
/*
 * MY PREDICTION:
 * console.log(typeof x, typeof y, typeof z) -> undefined object string
 */

let varX;
let varY = null;
let varZ = "25";

console.log(typeof varX, typeof varY, typeof varZ);

/*
 * EXPLANATION:
 * 1. typeof varX gives "undefined" because varX has no value assigned to it.
 * 2. typeof varY gives "object" due to the historical JavaScript typeof null bug.
 * 3. typeof varZ gives "string" because 25 is wrapped in quotes ("25").
 */