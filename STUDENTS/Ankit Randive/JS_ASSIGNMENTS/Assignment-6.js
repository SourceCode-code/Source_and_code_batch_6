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
// Answer :
let a = 10
let b = 3
console.log(a + b) // 13
console.log(a - b) // 7
console.log(a * b) // 30
console.log(a / b) // 3.3333333333333335
console.log(a % b) // 1
console.log(a ** b) // 1000

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10 % 3)
//       console.log(15 % 2)
//       console.log(16 % 2)
//       console.log(2 ** 4)
//       HINT -> % gives the REMAINDER. remainder 0 means the number divides perfectly.
// Answer :
/* First output is 1
   Secound output is 1
   Thired output is 0
   Fourth output is 16
*/
console.log(10 % 3)
console.log(15 % 2)
console.log(16 % 2)
console.log(2 ** 4)

//Q3 --> Using % and the ternary operator, check EVEN or ODD for these numbers :
//       15, 22, 0
//       HINT -> (num % 2 === 0) ? "even" : "odd"
// Answer :
console.log((15 % 2 === 0) ? "even" : "odd") // odd
console.log((22 % 2 === 0) ? "even" : "odd") // even
console.log((0 % 2 === 0) ? "even" : "odd") // even


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
// Answer :
let score = 10
score += 5 // 15
score -= 3 // 12
score *= 2 // 24
score /= 4 // 6
score %= 3 // 0

console.log(score) // 0
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
// Answer :
// true
console.log(4 > 3) 
// true
console.log(4 >= 3) 
// false
console.log(4 < 3) 
// false
console.log(4 <= 3) 
// true
console.log(4 == 4) 
// true
console.log(4 === 4) 
// false
console.log(4 != 4) 
// false
console.log(4 !== 4) 
// false
console.log(4 != "4") 
// true
console.log(4 == "4") 
// false
console.log(4 === "4") 

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(4 > 3 && 10 < 12)
//       console.log(4 > 3 && 10 > 12)
//       console.log(4 > 3 || 10 > 12)
//       console.log(4 < 3 || 10 > 12)
//       console.log(!(4 > 3))
//       console.log(!(false))
//       console.log(!(4 === "4"))
//       HINT -> && needs BOTH true, || needs AT LEAST ONE true, ! flips.
// Answer :
// true
console.log(4 > 3 && 10 < 12)
// false
console.log(4 > 3 && 10 > 12)
// true
console.log(4 > 3 || 10 > 12)
// false
console.log(4 < 3 || 10 > 12)
// false
console.log(!(4 > 3))
// true
console.log(!(false))
// true
console.log(!(4 === "4")) 

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
// Answer :
// 6
let a1 = 5
console.log(++a1)
console.log(a1)
// 5
let b1 = 5
console.log(b1++)
console.log(b1) // 6
// 4
let c1 = 5
console.log(--c1)
console.log(c1)


//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let strTen = "10"
//       let numTen = 10
//       console.log(strTen == numTen)
//       console.log(strTen === numTen)
//       console.log(typeof strTen === typeof numTen)
//       HINT -> == triggers automatic CONVERSION (last lecture). === does NOT.
// Answer :
let strTen = "10"
let numTen = 10
// true
console.log(strTen == numTen)
// false
console.log(strTen === numTen)
// false
console.log(typeof strTen === typeof numTen)


//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("b" > "a")
//       console.log("apple" < "banana")
//       HINT -> comparison works on strings too -> alphabet order.
// Answer :
// true
console.log("b" > "a")     
console.log("apple" < "banana") 

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> let myAge = 21
//        let yourAge = 25
//        Calculate the age difference using a subtraction, and print it
//        with a template literal like "Age difference is : 4 years".
//        Then use a ternary to print WHO is older -> "I am older" or "You are older".
// Answer :
let myAge = 21
let yourAge = 25
let ageDifference = yourAge - myAge
console.log(`Age difference is : ${ageDifference} years`)
// Age difference is : 4 years

//Q11 --> let birthYear = 2004
//        Calculate the age (assume current year 2026, use arithmetic),
//        then use the TERNARY operator to print "can drive" or "cannot drive"
//        (driving age is 18).
//        HINT -> (age >= 18) ? ... : ...
// Answer :
let birthYear = 2004
let currentYear = 2026
let age = currentYear - birthYear
console.log((age >= 18) ? "can drive" : "cannot drive")
// can drive

//Q12 --> Using the ternary operator, check if the year 2024 is EVEN or ODD.
//        HINT -> % 2 === 0
// Answer :
let year = 2024
console.log((year % 2 === 0) ? "even" : "odd")
// even

//Q13 --> let firstName = "siddhant"
//        let lastName = "gadakh"
//        a) compare BOTH lengths using > and print the boolean
//        b) use the ternary to print which name is longer :
//           "first name is longer" / "last name is longer"
//        HINT -> .length (lecture 04) + comparison (this lecture).
// Answer :
let firstName = "siddhant"
let LastName = "gadakh"
console.log(firstName.length > LastName.length)
// true
console.log((firstName.length > LastName.length) ? "first name is Longer" : "Last name is Longer")
// first name is Longer


//Q14 --> let word1 = "python"
//        let word2 = "jargon"
//        Check if the word "on" is found in BOTH words using includes() and &&.
//        Print the final true/false.
//        HINT -> includes() (lecture 04) combined with && (this lecture).
// Answer :
let word1 = "python"
let word2 = "jargon"
console.log(word1.includes("on") && word2.includes("on"))
// true

//Q15 --> let base = 10
//        let height = 6
//        Calculate the area of the triangle (formula -> (base * height) / 2)
//        and print it like "Area of triangle is : 30".
//        OPTIONAL -> try it with prompt() for user input (works in the BROWSER console only).
// Answer :
let base = 10
let height = 6
let areaofTriangle = (base * height) / 2
console.log(`Area of triangle is : ${areaofTriangle}`)
// Area of triangle is = 30


//Q16 --> let length = 12
//        let width = 8
//        Calculate the AREA (length * width) and PERIMETER (2 * (length + width))
//        of the rectangle. Print both in a readable format using template literals.
// Answer :
let Length = 12
let Width = 8
let areaofRectangle = Length * Width
let perimeterofRectangle = 2 * (Length + Width)
console.log(`Area of rectangle is : ${areaofRectangle}`)
console.log(`Perimeter of rectangle is : ${perimeterofRectangle}`)
// Area of rectangle is : 96
// Perimeter of rectangle is : 40

//Q17 --> let radius = 7
//        Calculate the AREA (Math.PI * radius ** 2) and CIRCUMFERENCE
//        (2 * Math.PI * radius) of the circle. Round both to 2 decimals with toFixed().
//        HINT -> Math.PI is a PROPERTY (no brackets) -> revision lecture 03.
// Answer :
let radius = 7
let areaofcircle = Math.PI * radius ** 2
let circumferenceofcircle = 2*Math.PI * radius
console.log(`Area of circle is : ${areaofcircle.toFixed(2)}`)
console.log(`Circumference of circle is : ${circumferenceofcircle.toFixed(2)}`)
// Area of circle is : 153.94
// Circumference of circle is : 43.98

//Q18 --> let salary = 25000
//        Using ONLY assignment shortcuts, do these steps in order :
//        a) add a bonus of 5000        (+=)
//        b) deduct 10% tax             (*= 0.9)
//        c) add a random incentive between 500 and 1500   (+= with Math.random)
//        Print the final salary.
//        HINT -> golden formula (lecture 03) for the random part.
// Answer :
let salary = 25000
// a) add a bonus of 5000
console.log(salary += 5000)
// 30000
// b) deduct 10% tax
console.log(salary *= 0.9)
// 27000
// c) add a random incentive between 500 and 1500
let randomeIncentive = Math.floor(Math.random() * (1500 - 500 + 1)) + 500
console.log(salary += randomeIncentive)
// 27000 + random incentive between 500 and 1500


// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between =, == and === ?
//        Write ONE line for each with a small example.
//        HINT -> assignment | loose comparison | strict comparison.
// Answer :
/*
Difference between =, == and === is as follows :
1. = is an operator used for assigns a value to variable. example : let a = 30
2. == is an operator used for compares the value of two variables. example : 30 == "30" // true
3. === is an operator used for compares both the value and the type of two variables. example : 30 === "30" // false
*/

//Q20 --> INTERVIEW QUESTION -> why do JS developers ALWAYS prefer === over == ?
//        Give one real example where == gives a SURPRISING result.
//        HINT -> "0" == 0, "" == 0, null == undefined -> try these in the console,
//        write the results, and explain the surprise.
// Answer :
/*
Js developers always prefer === over == because == does type coercion and can give unexpected results. For example, "0" == 0 returns true because the string "0" is coerced to a number before comparison. However, "0" === 0 returns false because the types are different (string vs number). This can lead to bugs if developers are not careful with type comparisons.
console.log("0" == 0) // true
console.log("0" === 0) // false
*/
console.log("" == 0) // true
console.log("" === 0) // false


//Q21 --> INTERVIEW QUESTION -> what is the output of the below code ? explain step by step.
//        let x = 5
//        let y = x++ + ++x
//        console.log(y)
//        console.log(x)
//        HINT -> solve LEFT to RIGHT : x++ gives the OLD value first,
//        then ++x increases BEFORE using. track x at every step.
// Answer :
/*
let x = 5
let y = x++ + ++x
console.log(y) // 12
console.log(x) // 7

Explanation:
1. x++ uses the old value 5, then x becomes 6.
2. ++x increments x to 7 before using it.
3. y = 5 + 7 => 12
4. Final x value is 7
*/
let x = 5
let y = x++ + ++x
console.log(y) // 12
console.log(x) // 7

//Q22 --> INTERVIEW QUESTION -> what does the % (modulus) operator do ?
//        Write 3 real-world uses of % (from the lecture + your own thinking).
//        HINT -> even/odd check is one. what about checking divisibility by 5 ? or cycles ?
// Answer :
/*
% gives the remainder after division.
Real-world uses:
1. Even/odd check -> number % 2 === 0
2. Divisibility check -> number % 5 === 0
3. Cycles/repeating patterns -> time, weekdays, arrays, etc.
*/
console.log(10 % 3) // 1
console.log(15 % 5) // 0
console.log(7 % 2) // 1

//Q23 --> INTERVIEW QUESTION -> what is operator precedence ?
//        Predict WITHOUT running, then confirm :
//        console.log(2 + 3 * 4)
//        console.log((2 + 3) * 4)
//        console.log(10 - 4 % 3)
//        HINT -> * / % are calculated BEFORE + - (like BODMAS maths).
//        brackets () always win.
// Answer :
/*
Prediction:
console.log(2 + 3 * 4) // 14
console.log((2 + 3) * 4) // 20
console.log(10 - 4 % 3) // 8
Explanation:
- * and % happen before + and -
- (2 + 3) * 4 uses brackets first
*/
console.log(2 + 3 * 4) // 14
console.log((2 + 3) * 4) // 20
console.log(10 - 4 % 3) // 8

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q24 --> BONUS -> SWAP TWO VARIABLES WITHOUT A THIRD VARIABLE ->
//        let a = 3
//        let b = 8
//        Swap their values using ONLY arithmetic operators (+ and -),
//        so at the end a is 8 and b is 3. Print before AND after.
//        NO third variable, NO re-declaring directly.
//        HINT -> a = a + b  ->  b = a - b  ->  a = a - b
//        track the values on paper step by step, then explain WHY it works in comments.
// Answer :
{
  let a = 3
  let b = 8
  console.log(`Before swap -> a = ${a}, b = ${b}`)

  /*
  a = a + b   -> 3 + 8 = 11  (a holds sum)
  b = a - b   -> 11 - 8 = 3  (b gets old a)
  a = a - b   -> 11 - 3 = 8  (a gets old b)
  This works because the sum is stored in a and then reused to recover both original values.
  */

  a = a + b
  b = a - b
  a = a - b

  console.log(`After swap -> a = ${a}, b = ${b}`)
}

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
// Answer :
let price = 499
let quantity = 3
let total = 0

total *= price * quantity
let discount = total > 1000 ? total * 0.1 : 0
let finalBill = total - discount

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
