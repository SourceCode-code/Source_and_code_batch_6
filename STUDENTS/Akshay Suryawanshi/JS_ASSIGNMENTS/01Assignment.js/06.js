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

// Answer -->
let a = 10
let b = 3
console.log(a+b) // 13
console.log(a-b) // 7
console.log(a*b) // 30
console.log(a/b) // 3.3333333333333335
console.log(a%b) // 1
console.log(a**b) // 1000


//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10 % 3)
//       console.log(15 % 2)
//       console.log(16 % 2)
//       console.log(2 ** 4)
//       HINT -> % gives the REMAINDER. remainder 0 means the number divides perfectly.
// Answer -->

console.log(10 % 3)
// output is "1"
console.log(15 % 2)
// output is "1"
console.log(16 % 2)
// output is "0"
console.log(2 ** 4)
// output is "16"


//Q3 --> Using % and the ternary operator, check EVEN or ODD for these numbers :
//       15, 22, 0
//       HINT -> (num % 2 === 0) ? "even" : "odd"
// Answer -->
console.log(15 % 2===0? "even":"odd")
// output is odd
console.log(22 % 2===0? "even":"odd")
// output is even
console.log(0%2===0? "even":"odd")
// output is even 

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

// Answer-->
let score = 10
score += 5
console.log(score) // output is 15
score -= 3
console.log(score)// output is 12
score *= 2
console.log(score) // output is 24
score /= 4
console.log(score) // output is 




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

// Answer -->
console.log(4 > 3) // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 != "4") // false
console.log(4 == "4") // true
console.log(4 === "4") // false

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(4 > 3 && 10 < 12)
//       console.log(4 > 3 && 10 > 12)
//       console.log(4 > 3 || 10 > 12)
//       console.log(4 < 3 || 10 > 12)
//       console.log(!(4 > 3))
//       console.log(!(false))
//       console.log(!(4 === "4"))
//       HINT -> && needs BOTH true, || needs AT LEAST ONE true, ! flips.
// Answer -->

console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 > 12)  // true
console.log(4 < 3 || 10 > 12) //  false
console.log(!(4 > 3)) // false
console.log(!(false)) // true
console.log(!(4 === "4")) // true


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

// Answer -->
let A = 5
console.log(++A) // output is "6"
console.log(A)  // output is  "6"

let B = 5
console.log(B++) // output is "5"
console.log(B)  // output is "6"

let C = 5
console.log(--C) // output is "4"
console.log(C) // output is "4"


//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let strTen = "10"
//       let numTen = 10
//       console.log(strTen == numTen)
//       console.log(strTen === numTen)
//       console.log(typeof strTen === typeof numTen)
//       HINT -> == triggers automatic CONVERSION (last lecture). === does NOT.

// Answer -->
let strTen = "10"
let numTen = 10
console.log(strTen == numTen) // output is "true"
console.log(strTen === numTen) // output is "false"
console.log(typeof strTen === typeof numTen) // output is "false"
//           strimg      ===   number 


//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("b" > "a")
//       console.log("apple" < "banana")
//       HINT -> comparison works on strings too -> alphabet order.

// Answer -->

console.log("b" > "a") // output is "true"

console.log("apple" < "banana") // output is "true"


// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> let myAge = 21
//        let yourAge = 25
//        Calculate the age difference using a subtraction, and print it
//        with a template literal like "Age difference is : 4 years".
//        Then use a ternary to print WHO is older -> "I am older" or "You are older".

// Answer -->
let myAge = 21
let yourAge = 25

console.log(yourAge -myAge) // output is "4"
// using template
console.log(`Age difference is :${yourAge-myAge} years`)
// output is "Age difference is :4 years"

// using ternary 
console.log(myAge> yourAge?"I am older" :"You are older")
// output is "You are older"

//Q11 --> let birthYear = 2004
//        Calculate the age (assume current year 2026, use arithmetic),
//        then use the TERNARY operator to print "can drive" or "cannot drive"
//        (driving age is 18).
//        HINT -> (age >= 18) ? ... : ...

// Answer -->

let birthYear = 2004
let current_year = 2026
let current_Age = current_year- birthYear
console.log(current_Age) // Output is "22"
// using ternery operator
console.log(current_Age>18?"can drive":"cannot drive")
// output is "can drive"



//Q12 --> Using the ternary operator, check if the year 2024 is EVEN or ODD.
//        HINT -> % 2 === 0

// Answer -->

console.log(2024 % 2 === 0 ? "even" :"odd")
// output is "even"

//Q13 --> let firstName = "siddhant"
//        let lastName = "gadakh"
//        a) compare BOTH lengths using > and print the boolean
//        b) use the ternary to print which name is longer :
//           "first name is longer" / "last name is longer"
//        HINT -> .length (lecture 04) + comparison (this lecture).

// Answer -->
let firstName = "siddhant"
let lastName = "gadakh"

//a) compare BOTH lengths using > and print the boolean
console.log(firstName.length >lastName.length)
// output is "true"
// using ternery 
console.log(firstName.length > lastName.length ?"first name is longer":"last name is longer")


//Q14 --> let word1 = "python"
//        let word2 = "jargon"
//        Check if the word "on" is found in BOTH words using includes() and &&.
//        Print the final true/false.
//        HINT -> includes() (lecture 04) combined with && (this lecture).

// Answer -->
let word1 = "python"
let word2 = "jargon"

console.log(word1.includes("on")&& word2.includes("on"))
// true


//Q15 --> let base = 10
//        let height = 6
//        Calculate the area of the triangle (formula -> (base * height) / 2)
//        and print it like "Area of triangle is : 30".
//        OPTIONAL -> try it with prompt() for user input (works in the BROWSER console only).

// Answer-->
let base = 10
let height = 6
let area_tri = base*height/2

console.log(area_tri) // output is "30"
// using template
console.log(`Area of triangle is :${area_tri}`)
// Area of triangle is :30


//Q16 --> let length = 12
//        let width = 8
//        Calculate the AREA (length * width) and PERIMETER (2 * (length + width))
//        of the rectangle. Print both in a readable format using template literals.

// Answer-->

let length = 12
let width = 8
let Area = length*width // 96
let Perimeter = (2*(length+width)) // 40

console.log(`AREA :${Area}`) // AREA :96
console.log(`PERIMETER :${Perimeter}`) // PERIMETER :40


//Q17 --> let radius = 7
//        Calculate the AREA (Math.PI * radius ** 2) and CIRCUMFERENCE
//        (2 * Math.PI * radius) of the circle. Round both to 2 decimals with toFixed().
//        HINT -> Math.PI is a PROPERTY (no brackets) -> revision lecture 03.

// Answer -->
let radius = 7

let Area_Circle = Math.PI*radius**2
console.log(Area_Circle) // 153.93804002589985

let CIRCUMFERENCE = 2*Math.PI*radius
console.log(CIRCUMFERENCE) // 43.982297150257104

console.log(Area_Circle.toFixed(2)) // 153.94
console.log(CIRCUMFERENCE.toFixed(2)) // 43.98


//Q18 --> let salary = 25000
//        Using ONLY assignment shortcuts, do these steps in order :
//        a) add a bonus of 5000        (+=)
//        b) deduct 10% tax             (*= 0.9)
//        c) add a random incentive between 500 and 1500   (+= with Math.random)
//        Print the final salary.
//        HINT -> golden formula (lecture 03) for the random part.
// Answer -->

let salary = 25000
// a) add a bonus of 5000  
salary += 5000
//b) deduct 10% tax 
salary *= 0.9
//c) add a random incentive between 500 and 1500
let Salary = Math.random()*(1500-500+1)+500
console.log(Salary)
salary += Salary
// Final Salary
console.log(`Final Salary ${salary.toFixed(2)}`)
// Final Salary 28037.06


// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between =, == and === ?
//        Write ONE line for each with a small example.
//        HINT -> assignment | loose comparison | strict comparison.
// Answer -->
// "=" is used for assign value
let X = 5
console.log(X) // "5"
// Assinning "X" value is 5

// "==" is used for comapre value
console.log(5 == "5") // "true"
//compairing value of 5 with "5"

// "===" is used for check value and datatype
console.log(5 === "5") // false
// number vs string --> datatype mismatch


//Q20 --> INTERVIEW QUESTION -> why do JS developers ALWAYS prefer === over == ?
//        Give one real example where == gives a SURPRISING result.
//        HINT -> "0" == 0, "" == 0, null == undefined -> try these in the console,
//        write the results, and explain the surprise.

// JS devlopers always use === because it give strict comparison
console.log(10 === 10) // true (number vs number)
console.log(10 === "10") // false (number vs string)

console.log("0"==0) // true
console.log(""==0) // true
console.log(null==undefined) // true



//Q21 --> INTERVIEW QUESTION -> what is the output of the below code ? explain step by step.
//        let x = 5
//        let y = x++ + ++x
//        console.log(y)
//        console.log(x)
//        HINT -> solve LEFT to RIGHT : x++ gives the OLD value first,
//        then ++x increases BEFORE using. track x at every step.

// Answer -->
let x = 5
let y = x++ + ++x

console.log(y) // 12 --> 5++ value then incease value 
console.log(x) // 5 --> ++5 increase first then add value


//Q22 --> INTERVIEW QUESTION -> what does the % (modulus) operator do ?
//        Write 3 real-world uses of % (from the lecture + your own thinking).
//        HINT -> even/odd check is one. what about checking divisibility by 5 ? or cycles ?

// Answer -->
// "%" opearator gives the remainder

console.log(53%5) // output is "3 is remainder" and this is odd number
console.log(65%5) // output is "0 is remainder" and this is even number
console.log(0%0) // output is "0 is remainder" and this is even number




//Q23 --> INTERVIEW QUESTION -> what is operator precedence ?
//        Predict WITHOUT running, then confirm :
//        console.log(2 + 3 * 4)
//        console.log((2 + 3) * 4)
//        console.log(10 - 4 % 3)
//        HINT -> * / % are calculated BEFORE + - (like BODMAS maths).
//        brackets () always win.

// Answer -->

console.log(2 + 3 * 4) // 14
// first multiply value then adding value this is arithmatic rule
console.log((2 + 3) * 4) // 20
// in arithmatic operation brackets () always win. then multiply rest value
console.log(10 - 4 % 3) // 9
// * / % are calculated BEFORE + - 
// first operation is 4%3 and gives remainder as "1" then arithmatic operation rest


// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q24 --> BONUS -> SWAP TWO VARIABLES WITHOUT A THIRD VARIABLE ->
//        let a = 3
//        let b = 8
//        Swap their values using ONLY arithmetic operators (+ and -),
//        so at the end a is 8 and b is 3. Print before AND after.
//        NO third variable, NO re-declaring directly.
//        HINT -> a = a + b  ->  b = a - b  ->  a = a - b
//        track the values on paper step by step, then explain WHY it works in comments.

// Answer -->
let P = 3
let Q = 8
// Before
console.log(P) // 3
console.log(Q) // 8


// After 
P = P+Q
Q = P-Q
P = P-Q

console.log(P,Q)
// P = 8 and Q = 3 

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

// Answer -->
let price = 499
let quantity = 3
// a) calculate the total (use *= on a total variable)
let Total = price
price*=quantity
console.log(price.toFixed(2)) // 1497.00
// b) apply a 10% discount ONLY IF the total is more than 1000
let discount = Total
console.log(discount.toFixed(2)) // 49.90
















// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 06_ASSIGNMENT.js
// ============================================