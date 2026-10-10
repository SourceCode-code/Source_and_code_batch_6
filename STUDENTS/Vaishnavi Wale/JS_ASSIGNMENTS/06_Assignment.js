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

//ANSWER:
let a = 10
let b = 3
console.log(a + b)      // 13
console.log(a -  b)     // 7 
console.log(a * b)      // 30
console.log(a / b)      // 3.3333333333333335
console.log(a % b)      // 1
console.log(a ** b)     // 1000

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10 % 3)
//       console.log(15 % 2)
//       console.log(16 % 2)
//       console.log(2 ** 4)
//       HINT -> % gives the REMAINDER. remainder 0 means the number divides perfectly.

//ANSWER:
console.log(10 % 3)     // 1
console.log(15 % 2)     // 1
console.log(16 % 2)     // 0
console.log(2 ** 4)     // 16

//Q3 --> Using % and the ternary operator, check EVEN or ODD for these numbers :
//       15, 22, 0
//       HINT -> (num % 2 === 0) ? "even" : "odd"

let num1 = 15
let num2 = 22 
let num3 = 0
 
console.log((num1 % 2 == 0) ? `${num1} is even no.` : `${num1} is even no.` )   // 15 is even no.
console.log((num2 % 2 == 0) ? `${num2} is even no.` : `${num2} is even no.` )   // 22 is even no.
console.log((num3 % 2 == 0) ? `${num3} is even no.` : `${num3} is even no.` )   // 0 is even no.

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

//ANSWER:
let score = 10
score += 5  //score = score + 5
score -= 3  // score = score - 3
score *= 2  // score = score * 2
score /= 4  // score = score / 4
score %= 3  // score = score % 3
console.log(score)      // 0

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

//ANSWER:
console.log(4 > 3)      // true
console.log(4 >= 3)     // true
console.log(4 < 3)      // false
console.log(4 <= 3)     // false
console.log(4 == 4)     // true
console.log(4 === 4)    // true
console.log(4 != 4)     // false
console.log(4 !== 4)    // false
console.log(4 != "4")   // false
console.log(4 == "4")   // true
console.log(4 === "4")  // false

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(4 > 3 && 10 < 12)
//       console.log(4 > 3 && 10 > 12)
//       console.log(4 > 3 || 10 > 12)
//       console.log(4 < 3 || 10 > 12)
//       console.log(!(4 > 3))
//       console.log(!(false))
//       console.log(!(4 === "4"))
//       HINT -> && needs BOTH true, || needs AT LEAST ONE true, ! flips.

//ANSWER:
console.log(4 > 3 && 10 < 12)   // true
console.log(4 > 3 && 10 > 12)   // false
console.log(4 > 3 || 10 > 12)   // true
console.log(4 < 3 || 10 > 12)   // false
console.log(!(4 > 3))           // false
console.log(!(false))           // true
console.log(!(4 === "4"))       // true

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

//ANSWER:
let A = 5
console.log(++A)    //6
console.log(A)      //6
let B = 5
console.log(B++)    //5
console.log(B)      //6
let c = 5
console.log(--c)    //4
console.log(c)      //4

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let strTen = "10"
//       let numTen = 10
//       console.log(strTen == numTen)
//       console.log(strTen === numTen)
//       console.log(typeof strTen === typeof numTen)
//       HINT -> == triggers automatic CONVERSION (last lecture). === does NOT.

//ANSWER:
let strTen = "10"
let numTen = 10
console.log(strTen == numTen)                   // true
console.log(strTen === numTen)                  // false
console.log(typeof strTen === typeof numTen)    // false

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("b" > "a")
//       console.log("apple" < "banana")
//       HINT -> comparison works on strings too -> alphabet order.

//ANSWER:

console.log("b" > "a")              // true
console.log("apple" < "banana")     // true

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> let myAge = 21
//        let yourAge = 25
//        Calculate the age difference using a subtraction, and print it
//        with a template literal like "Age difference is : 4 years".
//        Then use a ternary to print WHO is older -> "I am older" or "You are older".

//ANSWER:
let myAge = 21
let yourAge = 25
let diffAge = yourAge -  myAge
console.log(`Age difference is : ${diffAge} years`)                 // Age difference is : 4 years
console.log((myAge > yourAge) ? "I am older" : "You are older")     // You are older

//Q11 --> let birthYear = 2004
//        Calculate the age (assume current year 2026, use arithmetic),
//        then use the TERNARY operator to print "can drive" or "cannot drive"
//        (driving age is 18).
//        HINT -> (age >= 18) ? ... : ...

//Answer:
let birthYear = 2004
let currentYear = 2026
let calAge = currentYear - birthYear
console.log(calAge)                                                      // 22
console.log((calAge >= 18 ) ? "You can drive" : "You cannot drive")      // You can drive

//Q12 --> Using the ternary operator, check if the year 2024 is EVEN or ODD.
//        HINT -> % 2 === 0

//ANSWER:
let year = 2024
console.log((year % 2 == 0) ? `${year} is even` : `${year} is odd`)     // 2024 is even

//Q13 --> let firstName = "siddhant"
//        let lastName = "gadakh"
//        a) compare BOTH lengths using > and print the boolean
//        b) use the ternary to print which name is longer :
//           "first name is longer" / "last name is longer"
//        HINT -> .length (lecture 04) + comparison (this lecture).

//ANSWER:
let firstName = "siddhant"
let lastName = "gadakh"
// a) compare BOTH lengths using > and print the boolean
console.log(firstName.length > lastName.length )            // true
// b) use the ternary to print which name is longer :
//    "first name is longer" / "last name is longer"
console.log((firstName.length > lastName.length )? `firstName is longer` : `lastName is longer`)     // firstName is longer

//Q14 --> let word1 = "python"
//        let word2 = "jargon"
//        Check if the word "on" is found in BOTH words using includes() and &&.
//        Print the final true/false.
//        HINT -> includes() (lecture 04) combined with && (this lecture).

//ANSWER:
let word1 = "python"
let word2 = "jargon"
console.log(word1.includes("on") && word2.includes("on"))   // true

//Q15 --> let base = 10
//        let height = 6
//        Calculate the area of the triangle (formula -> (base * height) / 2)
//        and print it like "Area of triangle is : 30".
//        OPTIONAL -> try it with prompt() for user input (works in the BROWSER console only).

//ANSWER:
let base = 10
let height = 6
let area = (base * height) / 2
console.log(`Area of triangle is : ${area}`)    // Area of triangle is : 30

//Q16 --> let length = 12
//        let width = 8
//        Calculate the AREA (length * width) and PERIMETER (2 * (length + width))
//        of the rectangle. Print both in a readable format using template literals.

//ANSWER:
let length = 12
let width = 8
let totArea = length * width 
let perimeter = 2 * (length + width )
console.log(`Area of rectangle is : ${totArea}`)            // Area of rectangle is : 96
console.log(`Perimeter of rectangle is : ${perimeter}`)     // Perimeter of rectangle is : 40

//Q17 --> let radius = 7
//        Calculate the AREA (Math.PI * radius ** 2) and CIRCUMFERENCE
//        (2 * Math.PI * radius) of the circle. Round both to 2 decimals with toFixed().
//        HINT -> Math.PI is a PROPERTY (no brackets) -> revision lecture 03.

//ANSWER:
let radius = 7
let circleArea = Math.PI * radius ** 2
let circumference = 2 * Math.PI * radius
console.log(`Area of circle is : ${circleArea.toFixed(2)}`)              // Area of circle is : 153.94
console.log(`Circumference of circle is :${circumference.toFixed(2)}`)   // Circumference of circle is :43.98

//Q18 --> let salary = 25000
//        Using ONLY assignment shortcuts, do these steps in order :
//        a) add a bonus of 5000        (+=)
//        b) deduct 10% tax             (*= 0.9)
//        c) add a random incentive between 500 and 1500   (+= with Math.random)
//        Print the final salary.
//        HINT -> golden formula (lecture 03) for the random part.

//ANSWER:
let salary = 25000
// a) add a bonus of 5000        (+=)
salary += 5000
// b) deduct 10% tax             (*= 0.9)
salary *= 0.9
// c) add a random incentive between 500 and 1500   (+= with Math.random)
let incSalary = Math.random() * (1500 - 500 + 1) + 500
console.log(incSalary)
salary += incSalary
//    Print the final salary.
console.log(`Salary : ${salary.toFixed(2)}`)      // 28157.18

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between =, == and === ?
//        Write ONE line for each with a small example.
//        HINT -> assignment | loose comparison | strict comparison.

//ANSWER:
// what is the difference between =, == and === ?
/**
 * = is used for assign the value
 * == is used for checking the value is same or not 
 * === is used for check both value and datatype
 */ 

// Write ONE line for each with a small example.
let myname = "Vaishnavi"
let surname = "Wale"
console.log(myname)             // Vaishnavi

console.log(5 == "5")  // true

console.log(5 === "5")   // false

//Q20 --> INTERVIEW QUESTION -> why do JS developers ALWAYS prefer === over == ?
//        Give one real example where == gives a SURPRISING result.
//        HINT -> "0" == 0, "" == 0, null == undefined -> try these in the console,
//        write the results, and explain the surprise.

//ANSWER:
// JavaScript developers generally prefer === because it does not perform automatic type conversion. 
// This makes comparisons more predictable and helps avoid unexpected results.

console.log(0 == "0")           // true
console.log("" == 0)            // true
console.log(null == undefined)  // true

console.log("0" === 0);          // false
console.log("" === 0);           // false
console.log(null === undefined); // false

//Q21 --> INTERVIEW QUESTION -> what is the output of the below code ? explain step by step.
//        let x = 5
//        let y = x++ + ++x
//        console.log(y)
//        console.log(x)
//        HINT -> solve LEFT to RIGHT : x++ gives the OLD value first,
//        then ++x increases BEFORE using. track x at every step.

//ANSWER
let x = 5
let y = x++ + ++x   // 5 + 7
console.log(y)      // 12
console.log(x)      // 7

//Q22 --> INTERVIEW QUESTION -> what does the % (modulus) operator do ?
//        Write 3 real-world uses of % (from the lecture + your own thinking).
//        HINT -> even/odd check is one. what about checking divisibility by 5 ? or cycles ?

//ANSWER:
// what does the % (modulus) operator do ?
// ANS: % operator gives reminder 

// Write 3 real-world uses of % 
/**
 * 1. check number is even or odd
 * 2. check number whether it is divisible by 10
 * 3. check number is prime or not with the help of number is not divisible by 2 
 */

//Q23 --> INTERVIEW QUESTION -> what is operator precedence ?
//        Predict WITHOUT running, then confirm :
//        console.log(2 + 3 * 4)
//        console.log((2 + 3) * 4)
//        console.log(10 - 4 % 3)
//        HINT -> * / % are calculated BEFORE + - (like BODMAS maths).
//        brackets () always win.

//ANSWER:
// what is operator precedence ? --> OPERATOR PRFCEDENCE : * / % + -
console.log(2 + 3 * 4)      // 14
console.log((2 + 3) * 4)    // 20
console.log(10 - 4 % 3)     // 9

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q24 --> BONUS -> SWAP TWO VARIABLES WITHOUT A THIRD VARIABLE ->
//        let a = 3
//        let b = 8
//        Swap their values using ONLY arithmetic operators (+ and -),
//        so at the end a is 8 and b is 3. Print before AND after.
//        NO third variable, NO re-declaring directly.
//        HINT -> a = a + b  ->  b = a - b  ->  a = a - b
//        track the values on paper step by step, then explain WHY it works in comments.

//ANSWER:
let v = 3
let w = 8
console.log(v)      // 3
console.log(w)      // 8
v += w
w = v - w
console.log(w)      // 8
v = v - w
console.log(v)      // 3


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

//ANSWER:
let price = 499
let quantity = 3

// a) calculate the total (use *= on a total variable)
let total = price * quantity
console.log(total.toFixed(2))                          // 1497.00
                                          
// b) apply a 10% discount ONLY IF the total is more than 1000
//    (use a ternary to decide, then arithmetic to apply)
let discount = total * 10 / 100
console.log(discount.toFixed(2))                  //    149.70
let finalBill = total - discount
console.log(finalBill.toFixed(2))                 //    1347.30
console.log((total > 1000) ? `${finalBill.toFixed(2)}` : `${total}`)     // 1347.30

// c) print the receipt in EXACTLY this format :
//           Price     : Rs. 499
//           Quantity  : 3
//           Total     : Rs. 1497.00
//           Discount  : Rs. 149.70
//           Final Bill: Rs. 1347.30
console.log(`Price      : Rs. ${price}`)
console.log(`Quantity   : ${quantity}`)
console.log(`Total      : Rs. ${total.toFixed(2)}`)
console.log(`Discount   : Rs. ${discount.toFixed(2)}`)
console.log(`Final Bill : Rs. ${finalBill.toFixed(2)}`)

/**
 * 
 * Price      : Rs. 499
 * Quantity   : 3
 * Total      : Rs. 1497.00
 * Discount   : Rs. 149.70
 * Final Bill : Rs. 1347.30
 */

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 06_ASSIGNMENT.js
// ============================================

