// ============================================
// 06_ASSIGNMENT -> TOPIC : JS OPERATORS (+ revision of datatypes, numbers & strings)
// BASED ON : LECTURE/06_JS_Operators.js  +  THEORY_NOTES/06_JS_Operators.md
//
// HOW TO RUN : open terminal -> node 06_ASSIGNMENT.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : ARITHMETIC + ASSIGNMENT -------------------

//Q1 --> let a = 10
//       let b = 3
//       Print the result of ALL 6 arithmetic operators on a and b :
//       + - * / % **  (one console.log each, with the expected answer in comments)
//       HINT -> remember : / does NOT cut decimals in JS.
console.log('Question1...')
let a =10
let b= 3
console.log(a+b)//addition
console.log(a-b)//subtraction
console.log(a*b)//multiplication
console.log(a/b)//division
console.log(a%b)//modulus
console.log(a**b)//exponentiation
/*output
13
7
30
3.3333333333333335
1
1000
*/

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10 % 3)
//       console.log(15 % 2)
//       console.log(16 % 2)
//       console.log(2 ** 4)
//       HINT -> % gives the REMAINDER. remainder 0 means the number divides perfectly.
console.log('Question2...')
console.log(10 % 3)//1000
console.log(15 % 2)//1
console.log(16 % 2)//0
console.log(2 ** 4)//16

//Q3 --> Using % and the ternary operator, check EVEN or ODD for these numbers :
//       15, 22, 0
//       HINT -> (num % 2 === 0) ? "even" : "odd"
console.log('Question3...')

let num = 15;
console.log((num % 2 === 0) ? "even" : "odd")

num = 22;
console.log((num % 2 === 0) ? "even" : "odd")

num = 0;
console.log((num % 2 === 0) ? "even" : "odd")

//Q4 --> let score = 10
//       Apply these ONE BY ONE, and predict the value of score AFTER EACH STEP
//       (write all predictions in comments BEFORE running) :
//       score += 5
//       score -= 3
//       score *= 2
//       score /= 4
//       score %= 3
//       Then run and confirm. If any prediction was wrong, write the reason.
//       HINT -> translate each shortcut to its long way, step by step.
//       (remember the lecture mistake : never apply the long way AND the shortcut together!)
console.log('Question4...')
let score = 10
console.log(score)
score += 5
console.log(score)
score -= 3
console.log(score)
score *= 2
console.log(score)
score /= 4
console.log(score)
score %= 3
console.log(score)
/* output
10
15
12
24
6
0
*/
// ------------------- SECTION B : PREDICT THE OUTPUT (COMPARISON + LOGICAL) -------------------

//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(4 > 3)
//       console.log(4 >= 3)
//       console.log(4 < 3)
//       console.log(4 <= 3)
//       console.log(4 == 4)
//       console.log(4 === 4)
//       console.log(4 != 4)
//       console.log(4 !== 4)
//       console.log(4 != "4")
//       console.log(4 == "4")
//       console.log(4 === "4")
//       HINT -> == compares only VALUE, === compares VALUE + DATATYPE.
//       != and !== are their opposites.

console.log('Question5...')
       console.log(4 > 3)
       console.log(4 >= 3)
       console.log(4 < 3)
       console.log(4 <= 3)
       console.log(4 == 4)
       console.log(4 === 4)
       console.log(4 != 4)
       console.log(4 !== 4)
       console.log(4 != "4")
       console.log(4 == "4")
       console.log(4 === "4")
/*
true
true
false
false
true
true
false
false
false
true
false
*/
//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(4 > 3 && 10 < 12)
//       console.log(4 > 3 && 10 > 12)
//       console.log(4 > 3 || 10 > 12)
//       console.log(4 < 3 || 10 > 12)
//       console.log(!(4 > 3))
//       console.log(!(false))
//       console.log(!(4 === "4"))
//       HINT -> && needs BOTH true, || needs AT LEAST ONE true, ! flips.
console.log('Question6...')
       console.log(4 > 3 && 10 < 12)
       console.log(4 > 3 && 10 > 12)
       console.log(4 > 3 || 10 > 12)
       console.log(4 < 3 || 10 > 12)
       console.log(!(4 > 3))
       console.log(!(false))
       console.log(!(4 === "4"))

/*
output-
true
false
true
false
false
true
true
*/

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 5
//       console.log(++a)
//       console.log(a)
//       let b = 5
//       console.log(b++)
//       console.log(b)
//       let c = 5
//       console.log(--c)
//       console.log(c)
//       HINT -> PRE changes the value BEFORE using it, POST uses the OLD value first.
console.log('Question7...')
       let a1 = 5
       console.log(++a1)
       console.log(a1)
       let b1 = 5
       console.log(b1++)
       console.log(b1)
       let c1 = 5
       console.log(--c1)
       console.log(c1)
/*
6
6
5
6
4
4
*/

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let strTen = "10"
//       let numTen = 10
//       console.log(strTen == numTen)
//       console.log(strTen === numTen)
//       console.log(typeof strTen === typeof numTen)
//       HINT -> == triggers automatic CONVERSION (last lecture). === does NOT.
console.log('Question8...')
      let strTen = "10"
       let numTen = 10
       console.log(strTen == numTen)
       console.log(strTen === numTen)
       console.log(typeof strTen === typeof numTen)

/*
output...
true
false
false

*/

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("b" > "a")
//       console.log("apple" < "banana")
//       HINT -> comparison works on strings too -> alphabet order.
console.log('Question9...')
       console.log("b" > "a")
       console.log("apple" < "banana")
/*
Question9...
true
true
*/

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> let myAge = 21
//        let yourAge = 25
//        Calculate the age difference using a subtraction, and print it
//        with a template literal like "Age difference is : 4 years".
//        Then use a ternary to print WHO is older -> "I am older" or "You are older".
console.log('Question10...')
let myAge = 21
let yourAge = 25
let difference = yourAge - myAge
console.log(`Age difference is : ${difference} years`)
// Check who is older using a ternary operator
console.log((myAge > yourAge) ? "I am older" : "You are older")
/*
output-
Question10...
Age difference is : 4 years
You are older

*/

//Q11 --> let birthYear = 2004
//        Calculate the age (assume current year 2026, use arithmetic),
//        then use the TERNARY operator to print "can drive" or "cannot drive"
//        (driving age is 18).
//        HINT -> (age >= 18) ? ... : ...
console.log('Question11...')
let birthYear = 2004
let age = 2026 - birthYear
console.log(`Age is: ${age}`)
console.log((age >= 18) ? "can drive" : "cannot drive")
/*
output
Question11...
Age is: 22
can drive
*/

//Q12 --> Using the ternary operator, check if the year 2024 is EVEN or ODD.
//        HINT -> % 2 === 0
console.log('Question12...')
let year = 2024
console.log((year % 2 === 0) ? "EVEN" : "ODD")
/*
output
Question12...
EVEN

*/

//Q13 --> let firstName = "siddhant"
//        let lastName = "gadakh"
//        a) compare BOTH lengths using > and print the boolean
//        b) use the ternary to print which name is longer :
//           "first name is longer" / "last name is longer"
//        HINT -> .length (lecture 04) + comparison (this lecture).
console.log('Question13...')
let firstName = "siddhant"
let lastName = "gadakh"
console.log(firstName.length > lastName.length)
console.log((firstName.length > lastName.length)
    ? "first name is longer"
    : "last name is longer"
)
/**
 * output
true
first name is longer
 */

//Q14 --> let word1 = "python"
//        let word2 = "jargon"
//        Check if the word "on" is found in BOTH words using includes() and &&.
//        Print the final true/false.
//        HINT -> includes() (lecture 04) combined with && (this lecture).
console.log('Question14...')
let word1 = "python"
let word2 = "jargon"
console.log(word1.includes("on") && word2.includes("on"))
/*
output-
Question14...
true
*/

//Q15 --> let base = 10
//        let height = 6
//        Calculate the area of the triangle (formula -> (base * height) / 2)
//        and print it like "Area of triangle is : 30".
//        OPTIONAL -> try it with prompt() for user input (works in the BROWSER console only).
console.log('Question15...')
let base = 10
let height = 6
let area = (base * height) / 2
console.log(`Area of triangle is : ${area}`)

/*
Question15...
Area of triangle is : 30
*/

//Q16 --> let length = 12
//        let width = 8
//        Calculate the AREA (length * width) and PERIMETER (2 * (length + width))
//        of the rectangle. Print both in a readable format using template literals.
console.log('Question16...')
let length = 12
let width = 8

let area1 = length * width
let perimeter = 2 * (length + width)
console.log(`Area of rectangle is : ${area1}`)
console.log(`Perimeter of rectangle is : ${perimeter}`)
/*
output
Question16...
Area of rectangle is : 96
Perimeter of rectangle is : 40

*/

//Q17 --> let radius = 7
//        Calculate the AREA (Math.PI * radius ** 2) and CIRCUMFERENCE
//        (2 * Math.PI * radius) of the circle. Round both to 2 decimals with toFixed().
//        HINT -> Math.PI is a PROPERTY (no brackets) -> revision lecture 03.
console.log('Question17...')
let radius = 7
let area2 = Math.PI * radius ** 2

let circumference = 2 * Math.PI * radius
console.log(`Area of circle is : ${area2.toFixed(2)}`)
console.log(`Circumference of circle is : ${circumference.toFixed(2)}`)
/*
Question17...
Area of circle is : 153.94
Circumference of circle is : 43.98

*/

//Q18 --> let salary = 25000
//        Using ONLY assignment shortcuts, do these steps in order :
//        a) add a bonus of 5000        (+=)
//        b) deduct 10% tax             (*= 0.9)
//        c) add a random incentive between 500 and 1500   (+= with Math.random)
//        Print the final salary.
//        HINT -> golden formula (lecture 03) for the random part.
console.log('Question18...')
let salary = 25000
salary += 5000
salary *= 0.9
salary += Math.floor(Math.random() * (1500 - 500 + 1)) + 500
console.log(`Final salary is : ${salary}`)
/*
Question18...
Final salary is : 27532
*/

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between =, == and === ?
//        Write ONE line for each with a small example.
//        HINT -> assignment | loose comparison | strict comparison.
console.log('Question19...')
/*
= → Assign a value.
== → Compare values, allowing type conversion.
=== → Compare values and data types without type conversion.
*/
let number = 2
console.log(number)
console.log(10 == 10)    // true
console.log(10 === 10)   // true
/*
Question19...
2
true
true
*/ 

//Q20 --> INTERVIEW QUESTION -> why do JS developers ALWAYS prefer === over == ?
//        Give one real example where == gives a SURPRISING result.
//        HINT -> "0" == 0, "" == 0, null == undefined -> try these in the console,
//        write the results, and explain the surprise.
console.log('Question20...')
console.log("0" == 0)         // true
console.log("" == 0)           // true
console.log(null == undefined) // true

console.log("0" === 0)       // false
console.log("" === 0)           // false
console.log(null === undefined)// fals


//all three results are false because strict equality does not perform type conversion.


//Q21 --> INTERVIEW QUESTION -> what is the output of the below code ? explain step by step.
//        let x = 5
//        let y = x++ + ++x
//        console.log(y)
//        console.log(x)
//        HINT -> solve LEFT to RIGHT : x++ gives the OLD value first,
//        then ++x increases BEFORE using. track x at every step.
console.log('Question21...')
let x = 5
let y = x++ + ++x
console.log(y)
console.log(x)
//old value is 5 then its increemented by 1 as x++ so X value is 6 then preincrement is there so its get 7

//Q22 --> INTERVIEW QUESTION -> what does the % (modulus) operator do ?
//        Write 3 real-world uses of % (from the lecture + your own thinking).
//        HINT -> even/odd check is one. what about checking divisibility by 5 ? or cycles ?
console.log('Question22...')
console.log(10 % 3) // 1  
console.log(15 % 2) // 1 
console.log(16 % 2) // 0

//check even/odd
let num1 = 21
console.log(num1 % 2 == 0 ? "Even" : "Odd")//odd

//divisibility by 5 
let num2= 25
console.log(num2 % 5 === 0)//true

//Q23 --> INTERVIEW QUESTION -> what is operator precedence ?
//        Predict WITHOUT running, then confirm :
//        console.log(2 + 3 * 4)
//        console.log((2 + 3) * 4)
//        console.log(10 - 4 % 3)
//        HINT -> * / % are calculated BEFORE + - (like BODMAS maths).
//        brackets () always win.
console.log('Question23...')
        console.log(2 + 3 * 4)//14
        console.log((2 + 3) * 4)//20
        console.log(10 - 4 % 3)//9

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q24 --> BONUS -> SWAP TWO VARIABLES WITHOUT A THIRD VARIABLE ->
//        let a = 3
//        let b = 8
//        Swap their values using ONLY arithmetic operators (+ and -),
//        so at the end a is 8 and b is 3. Print before AND after.
//        NO third variable, NO re-declaring directly.
//        HINT -> a = a + b  ->  b = a - b  ->  a = a - b
//        track the values on paper step by step, then explain WHY it works in comments.
console.log('Question 24...')
let a2 = 3
let b2 = 8
// Before Swap
console.log("Before: a =", a2, "b =", b2)
a2 = a2 + b2//a2=11
b2 = a2 - b2// b2 = 11 - 8 = 3
a2 = a2 - b2 // a2 = 11 - 3 = 8
// After Swap
console.log("After: a =", a2, "b =", b2)
/*
output
Question 24...
Before: a = 3 b = 8
After: a = 8 b = 3
*/

//Q25 --> BONUS (MINI PROJECT - SHOPPING BILL) ->
//        let price = 499
//        let quantity = 3
//        a) calculate the total (use *= on a total variable)
//        b) apply a 10% discount ONLY IF the total is more than 1000
//           (use a ternary to decide, then arithmetic to apply)
//        c) print the receipt in EXACTLY this format :
//           Price     : Rs. 499
//           Quantity  : 3
//           Total     : Rs. 1497.00
//           Discount  : Rs. 149.70
//           Final Bill: Rs. 1347.30
//        HINT -> ternary gives you the discount AMOUNT (0 or total * 0.1),
//        toFixed(2) for the money format (revision lecture 03).
console.log('Question25...')
let price = 499
let quantity = 3
// a) Calculate the total using *=
let total = price
total *= quantity
// b) Calculate discount using a ternary operator
let discount = (total > 1000) ? total * 0.1 : 0
// Calculate the final bill
let finalBill = total - discount;

// c) Print the receipt in the exact format
console.log(`Price     : Rs. ${price}`)
console.log(`Quantity  : ${quantity}`)
console.log(`Total     : Rs. ${total.toFixed(2)}`)
console.log(`Discount  : Rs. ${discount.toFixed(2)}`)
console.log(`Final Bill: Rs. ${finalBill.toFixed(2)}`)
// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 06_ASSIGNMENT.js
// ============================================

