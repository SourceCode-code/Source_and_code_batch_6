console.log("===========================================")
console.log("assignment 6")
console.log("SECTION A : ARITHMETIC + ASSIGNMENT")
console.log("===========================================")

//Q1 --> let a = 10
console.log("Q1")
//       let b = 3
//       Print the result of ALL 6 arithmetic operators on a and b :
//       + - * / % ** (one console.log each, with the expected answer in comments)

// Answer:
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333333333333335
console.log(a % b);  // 1
console.log(a ** b); // 1000

// + adds, - subtracts, * multiplies, / divides,
// % gives the remainder, and ** calculates the power.

console.log("===========================================")
//Q2 --> Predict the output of the below code
console.log("Q2")

console.log(10 % 3); // 1
console.log(15 % 2); // 1
console.log(16 % 2); // 0
console.log(2 ** 4); // 16

// % gives the remainder. Even numbers divide by 2 with remainder 0.

console.log("===========================================")
//Q3 --> Using % and the ternary operator, check EVEN or ODD for these numbers :
//       15, 22, 0
console.log("Q3")
let num1 = 15;
let num2 = 22;
let num3 = 0;

console.log((num1 % 2 === 0) ? "even" : "odd"); // odd
console.log((num2 % 2 === 0) ? "even" : "odd"); // even
console.log((num3 % 2 === 0) ? "even" : "odd"); // even

// If the remainder after dividing by 2 is 0, the number is even.

console.log("===========================================")
//Q4 --> let score = 10
//       Apply these ONE BY ONE, and predict the value of score AFTER EACH STEP
console.log("Q4")

let score = 10;

score += 5;
console.log(score); // 15

score -= 3;
console.log(score); // 12

score *= 2;
console.log(score); // 24

score /= 4;
console.log(score); // 6

score %= 3;
console.log(score); // 0

// Each shortcut updates the current value of score.

console.log("===========================================")
console.log("SECTION B : PREDICT THE OUTPUT (COMPARISON + LOGICAL)")
console.log("===========================================")

//Q5 --> Predict the output of the below code
console.log("Q5")

console.log(4 > 3);    // true
console.log(4 >= 3);   // true
console.log(4 < 3);    // false
console.log(4 <= 3);   // false
console.log(4 == 4);   // true
console.log(4 === 4);  // true
console.log(4 != 4);   // false
console.log(4 !== 4);  // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4");// false

// == compares values after possible type conversion.
// === compares value and datatype.

console.log("===========================================")
//Q6 --> Predict the output of the below code
console.log("Q6")

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 > 12); // true
console.log(4 < 3 || 10 > 12); // false
console.log(!(4 > 3));         // false
console.log(!(false));         // true
console.log(!(4 === "4"));     // true

// && requires both conditions to be true.
// || requires at least one condition to be true.
// ! reverses a boolean result.

console.log("===========================================")
//Q7 --> Predict the output of the below code
console.log("Q7")
// Prediction:
// 6
// 6
// 5
// 6
// 4
// 4

let ab = 5;
console.log(++ab); // 6
console.log(ab);   // 6

let ba = 5;
console.log(ba++); // 5
console.log(ba);   // 6

let c = 5;
console.log(--c); // 4
console.log(c);   // 4

// ++a increments before printing.
// b++ prints the old value and increments afterward.
// --c decrements before printing.

console.log("===========================================")
//Q8 --> Predict the output of the below code
console.log("Q8")
// Prediction:
// true
// false
// false

let strTen = "10";
let numTen = 10;

console.log(strTen == numTen); // true
console.log(strTen === numTen); // false
console.log(typeof strTen === typeof numTen); // false

// == allows type conversion.
// === checks the value and datatype.
// typeof strTen is "string"; typeof numTen is "number".

console.log("===========================================")
//Q9 --> Predict the output of the below code
console.log("Q9")
// Prediction:
// true
// true

console.log("b" > "a");          // true
console.log("apple" < "banana"); // true

// Strings are compared character by character.
// Here, b comes after a, and a comes before b.

console.log("===========================================")
console.log("SECTION C : LOGIC BUILDING")
console.log("===========================================")


//Q10 --> let myAge = 21
console.log("Q10")
//        let yourAge = 25
//        Calculate the age difference and print it with a template literal.
//        Then use a ternary to print WHO is older.

let myAge = 21;
let yourAge = 25;

let ageDifference = yourAge - myAge;

console.log(`Age difference is : ${ageDifference} years`); // Age difference is : 4 years

console.log((myAge > yourAge) ? "I am older" : "You are older"); // You are older

console.log("===========================================")
//Q11 --> let birthYear = 2004
console.log("Q11")
//        Calculate the age (assume current year 2026), then check driving age.

let birthYear = 2004;
let age = 2026 - birthYear;

console.log(age); // 22
console.log((age >= 18) ? "can drive" : "cannot drive"); // can drive

console.log("===========================================")
//Q12 --> Using the ternary operator, check if the year 2024 is EVEN or ODD.
console.log("Q12")
let year = 2024;

console.log((year % 2 === 0) ? "even" : "odd"); // even


//Q13 --> let firstName = "siddhant"
console.log("Q13")
//        let lastName = "gadakh"
//        a) compare BOTH lengths using >
//        b) use the ternary to print which name is longer

let firstName = "siddhant";
let lastName = "gadakh";

console.log(firstName.length > lastName.length); // true

console.log((firstName.length > lastName.length) ? "first name is longer" : "last name is longer"); // first name is longer

console.log("===========================================")
//Q14 --> let word1 = "python"
console.log("Q14")
//        let word2 = "jargon"
//        Check if "on" is found in BOTH words using includes() and &&.

let word1 = "python";
let word2 = "jargon";

console.log(word1.includes("on") && word2.includes("on")); // true

console.log("===========================================")
//Q15 --> let base = 10
console.log("Q15")
//        let height = 6
//        Calculate the area of the triangle.
let base = 10;
let height = 6;

let triangleArea = (base * height) / 2;

console.log(`Area of triangle is : ${triangleArea}`);
// Area of triangle is : 30

console.log("===========================================")
//Q16 --> let length = 12
console.log("Q16")
//        let width = 8
//        Calculate the AREA and PERIMETER of the rectangle.

let length = 12;
let width = 8;

let area = length * width;
let perimeter = 2 * (length + width);

console.log(`Area of rectangle is : ${area}`); // Area of rectangle is : 96
console.log(`Perimeter of rectangle is : ${perimeter}`); // Perimeter of rectangle is : 40

console.log("===========================================")
//Q17 --> let radius = 7
console.log("Q17")
//        Calculate AREA and CIRCUMFERENCE of the circle.
//        Round both to 2 decimals with toFixed().

let radius = 7;

let circleArea = Math.PI * radius ** 2;
let circumference = 2 * Math.PI * radius;

console.log(`Area of circle is : ${circleArea.toFixed(2)}`); // 153.94
console.log(`Circumference of circle is : ${circumference.toFixed(2)}`); // 43.98

// Math.PI is a property, so it does not need parentheses.
// toFixed(2) formats the result to two decimal places.

console.log("===========================================")
//Q18 --> let salary = 25000
console.log("Q18")
//        Using ONLY assignment shortcuts:
//        a) add a bonus of 5000
//        b) deduct 10% tax
//        c) add a random incentive between 500 and 1500

let salary = 25000;

salary += 5000;
salary *= 0.9;

let incentive = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
salary += incentive;

console.log(salary);

// The incentive is a random integer from 500 through 1500.
// += and *= update the salary value.

console.log("===========================================")
console.log("SECTION D : INTERVIEW QUESTIONS")
console.log("===========================================")

//Q19 --> What is the difference between =, == and === ?
console.log("Q19")

// =  -> Assignment operator.
// == -> Compares values after possible type conversion.
// === -> Strictly compares value and datatype.


console.log("===========================================")
//Q20 --> Why do JS developers prefer === over == ?
console.log("Q20")
//        Give an example where == gives a surprising result.

// === is preferred because it checks both value and datatype
// without automatically converting one datatype into another.
console.log("0" == 0);        // true
console.log("" == 0);         // true
console.log(null == undefined); // true

// These results can be surprising because different values
// can compare as equal after type conversion.
// Using === avoids these particular unexpected conversions.

console.log("===========================================")
//Q21 --> Predict and explain the output
console.log("Q21")
// Prediction:
// y = 12
// x = 7

let x = 5;
let y = x++ + ++x;

console.log(y); // 12
console.log(x); // 7

// Step 1: x++ returns the old value 5, then x becomes 6.
// Step 2: ++x increases x from 6 to 7, then returns 7.
// Step 3: 5 + 7 = 12.
// Final value of x is 7.

console.log("===========================================")
//Q22 --> What does the % (modulus) operator do?
console.log("Q22")
//        Write 3 real-world uses.

// % returns the remainder after division.

// 1. Check whether a number is even or odd.
console.log(10 % 2); // 0 -> even

// 2. Check whether a number is divisible by 5.
console.log(25 % 5); // 0 -> divisible by 5

// 3. Repeat an action in a cycle, such as rotating through
//    3 positions: 0, 1, 2, 0, 1, 2.

console.log("===========================================")
//Q23 --> What is operator precedence?
console.log("Q23")
//        Predict and confirm the outputs.

console.log(2 + 3 * 4);   // 14
console.log((2 + 3) * 4); // 20
console.log(10 - 4 % 3);  // 8

// Operator precedence determines which operation runs first.
// Multiplication and modulus happen before addition/subtraction.
// Parentheses are evaluated first.
