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

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10 % 3)
//       console.log(15 % 2)
//       console.log(16 % 2)
//       console.log(2 ** 4)
//       HINT -> % gives the REMAINDER. remainder 0 means the number divides perfectly.

//Q3 --> Using % and the ternary operator, check EVEN or ODD for these numbers :
//       15, 22, 0
//       HINT -> (num % 2 === 0) ? "even" : "odd"

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

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(4 > 3 && 10 < 12)
//       console.log(4 > 3 && 10 > 12)
//       console.log(4 > 3 || 10 > 12)
//       console.log(4 < 3 || 10 > 12)
//       console.log(!(4 > 3))
//       console.log(!(false))
//       console.log(!(4 === "4"))
//       HINT -> && needs BOTH true, || needs AT LEAST ONE true, ! flips.

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

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let strTen = "10"
//       let numTen = 10
//       console.log(strTen == numTen)
//       console.log(strTen === numTen)
//       console.log(typeof strTen === typeof numTen)
//       HINT -> == triggers automatic CONVERSION (last lecture). === does NOT.

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("b" > "a")
//       console.log("apple" < "banana")
//       HINT -> comparison works on strings too -> alphabet order.

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> let myAge = 21
//        let yourAge = 25
//        Calculate the age difference using a subtraction, and print it
//        with a template literal like "Age difference is : 4 years".
//        Then use a ternary to print WHO is older -> "I am older" or "You are older".

//Q11 --> let birthYear = 2004
//        Calculate the age (assume current year 2026, use arithmetic),
//        then use the TERNARY operator to print "can drive" or "cannot drive"
//        (driving age is 18).
//        HINT -> (age >= 18) ? ... : ...

//Q12 --> Using the ternary operator, check if the year 2024 is EVEN or ODD.
//        HINT -> % 2 === 0

//Q13 --> let firstName = "siddhant"
//        let lastName = "gadakh"
//        a) compare BOTH lengths using > and print the boolean
//        b) use the ternary to print which name is longer :
//           "first name is longer" / "last name is longer"
//        HINT -> .length (lecture 04) + comparison (this lecture).

//Q14 --> let word1 = "python"
//        let word2 = "jargon"
//        Check if the word "on" is found in BOTH words using includes() and &&.
//        Print the final true/false.
//        HINT -> includes() (lecture 04) combined with && (this lecture).

//Q15 --> let base = 10
//        let height = 6
//        Calculate the area of the triangle (formula -> (base * height) / 2)
//        and print it like "Area of triangle is : 30".
//        OPTIONAL -> try it with prompt() for user input (works in the BROWSER console only).

//Q16 --> let length = 12
//        let width = 8
//        Calculate the AREA (length * width) and PERIMETER (2 * (length + width))
//        of the rectangle. Print both in a readable format using template literals.

//Q17 --> let radius = 7
//        Calculate the AREA (Math.PI * radius ** 2) and CIRCUMFERENCE
//        (2 * Math.PI * radius) of the circle. Round both to 2 decimals with toFixed().
//        HINT -> Math.PI is a PROPERTY (no brackets) -> revision lecture 03.

//Q18 --> let salary = 25000
//        Using ONLY assignment shortcuts, do these steps in order :
//        a) add a bonus of 5000        (+=)
//        b) deduct 10% tax             (*= 0.9)
//        c) add a random incentive between 500 and 1500   (+= with Math.random)
//        Print the final salary.
//        HINT -> golden formula (lecture 03) for the random part.

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between =, == and === ?
//        Write ONE line for each with a small example.
//        HINT -> assignment | loose comparison | strict comparison.

//Q20 --> INTERVIEW QUESTION -> why do JS developers ALWAYS prefer === over == ?
//        Give one real example where == gives a SURPRISING result.
//        HINT -> "0" == 0, "" == 0, null == undefined -> try these in the console,
//        write the results, and explain the surprise.

//Q21 --> INTERVIEW QUESTION -> what is the output of the below code ? explain step by step.
//        let x = 5
//        let y = x++ + ++x
//        console.log(y)
//        console.log(x)
//        HINT -> solve LEFT to RIGHT : x++ gives the OLD value first,
//        then ++x increases BEFORE using. track x at every step.

//Q22 --> INTERVIEW QUESTION -> what does the % (modulus) operator do ?
//        Write 3 real-world uses of % (from the lecture + your own thinking).
//        HINT -> even/odd check is one. what about checking divisibility by 5 ? or cycles ?

//Q23 --> INTERVIEW QUESTION -> what is operator precedence ?
//        Predict WITHOUT running, then confirm :
//        console.log(2 + 3 * 4)
//        console.log((2 + 3) * 4)
//        console.log(10 - 4 % 3)
//        HINT -> * / % are calculated BEFORE + - (like BODMAS maths).
//        brackets () always win.

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q24 --> BONUS -> SWAP TWO VARIABLES WITHOUT A THIRD VARIABLE ->
//        let a = 3
//        let b = 8
//        Swap their values using ONLY arithmetic operators (+ and -),
//        so at the end a is 8 and b is 3. Print before AND after.
//        NO third variable, NO re-declaring directly.
//        HINT -> a = a + b  ->  b = a - b  ->  a = a - b
//        track the values on paper step by step, then explain WHY it works in comments.

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

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 06_ASSIGNMENT.js
// ============================================

