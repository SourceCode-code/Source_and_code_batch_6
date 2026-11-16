// ============================================
// 06_ASSIGNMENT -> TOPIC : JS OPERATORS (+ revision of datatypes, numbers & strings)
// BASED ON : LECTURE/06_JS_Operators.js  +  THEORY_NOTES/06_JS_Operators.md
//
// HOW TO RUN : open terminal -> node 06_ASSIGNMENT_JS_OPERATORS.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : ARITHMETIC + ASSIGNMENT -------------------

//Q1 --> 
    //   let a = 10
    //   let b = 3
//       Print the result of ALL 6 arithmetic operators on a and b :
//       + - * / % **  (one console.log each, with the expected answer in comments)
//       HINT -> remember : / does NOT cut decimals in JS.
// console.log(`${a+b} | ${a-b} | ${a*b} | ${a/b} | ${a%b} | ${a**b}`);



//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
    //    console.log(10 % 3) //1
    //    console.log(15 % 2) //1
    //    console.log(16 % 2) //0
    //   console.log(2 ** 4) //16
//       HINT -> % gives the REMAINDER. remainder 0 means the number divides perfectly.

//Q3 --> Using % and the ternary operator, check EVEN or ODD for these numbers :
//       15, 22, 0
//       HINT -> (num % 2 === 0) ? "even" : "odd"

let num1 = 15;
let num2 = 22;
let num3 = 0;
console.log((num1 % 2 === 0)?"even":"odd");
console.log((num2 % 2 === 0)?"even":"odd");
console.log((num3 % 2 === 0)?"even":"odd");


//Q4 --> 
let score = 10
//       Apply these ONE BY ONE, and predict the value of score AFTER EACH STEP
//       (write all predictions in comments BEFORE running) :
console.log(score += 5) //15
console.log(score -= 3) //12
console.log(score *= 2) //24
console.log(score /= 4) //6
console.log(score %= 3)//0
//       Then run and confirm. If any prediction was wrong, write the reason.
//       HINT -> translate each shortcut to its long way, step by step.
//       (remember the lecture mistake : never apply the long way AND the shortcut together!)



// ------------------- SECTION B : PREDICT THE OUTPUT (COMPARISON + LOGICAL) -------------------

//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
// console.log(4 > 3) //true
// console.log(4 >= 3)  // true
// console.log(4 < 3) // false
// console.log(4 <= 3) //false
// console.log(4 == 4) // true
// console.log(4 === 4) //true
// console.log(4 != 4)  //false
// console.log(4 !== 4)  // false
// console.log(4 != "4")  //false
// console.log(4 == "4") //true
// console.log(4 === "4")  //false 
// //       HINT -> == compares only VALUE, === compares VALUE + DATATYPE.
// //       != and !== are their opposites.

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
// console.log(4 > 3 && 10 < 12) //true 
// console.log(4 > 3 && 10 > 12) // false 
// console.log(4 > 3 || 10 > 12) // true
// console.log(4 < 3 || 10 > 12) // false 
// console.log(!(4 > 3)) //false 
// console.log(!(false)) //true
// console.log(!(4 === "4")) //true
//       HINT -> && needs BOTH true, || needs AT LEAST ONE true, ! flips.

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
    //   let a = 5
    //   console.log(++a) //6
    //   console.log(a) //6
    //   let b = 5
    //   console.log(b++) //5
    //   console.log(b) //6
//       let c = 5
//       console.log(--c) //4
//       console.log(c) //4
//       HINT -> PRE changes the value BEFORE using it, POST uses the OLD value first.

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let strTen = "10"
//       let numTen = 10
//       console.log(strTen == numTen) // true
//       console.log(strTen === numTen) //false
//       console.log(typeof strTen === typeof numTen) //false 
//       HINT -> == triggers automatic CONVERSION (last lecture). === does NOT.



//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("b" > "a") // true
//       console.log("apple" < "banana") //true
//       HINT -> comparison works on strings too -> alphabet order.

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> 
let myAge = 21
        let yourAge = 25
//        Calculate the age difference using a subtraction, and print it
//        with a template literal like "Age difference is : 4 years".
//        Then use a ternary to print WHO is older -> "I am older" or "You are older".

console.log(`Differnce: ${yourAge - myAge} | ${(yourAge>myAge)? 'You are older' : 'I am older' }`);


//Q11 --> 
 let birthYear = 2004;
//        Calculate the age (assume current year 2026, use arithmetic),
//        then use the TERNARY operator to print "can drive" or "cannot drive"
//        (driving age is 18).
//        HINT -> (age >= 18) ? ... : ...

let date = new Date
let age = date.getFullYear() - birthYear;
console.log(`Age: ${age} | ${(age>=18)?'Can Drive':'Cannot Drive'}`);

//Q12 --> Using the ternary operator, check if the year 2024 is EVEN or ODD.
//        HINT -> % 2 === 0
let year2024 = date.getFullYear()-2;
console.log((year2024%2===0)?'even':'odd')


//Q13 --> 
let firstName = "siddhant"
let lastName = "gadakh"
//        a) compare BOTH lengths using > and print the boolean
//        b) use the ternary to print which name is longer :
//           "first name is longer" / "last name is longer"
//        HINT -> .length (lecture 04) + comparison (this lecture).
console.log((firstName.length)>(lastName.length));
console.log(((firstName.length)>(lastName.length))?'First Name is longer':'Last Name is longer');

//Q14 --> 
let word1 = "python"
let word2 = "jargon"
//        Check if the word "on" is found in BOTH words using includes() and &&.
//        Print the final true/false.
//        HINT -> includes() (lecture 04) combined with && (this lecture).

console.log((word1.includes('on') && word2.includes('on')));

//Q15 --> 
let base = 10
let height = 6
//        Calculate the area of the triangle (formula -> (base * height) / 2)
//        and print it like "Area of triangle is : 30".
//        OPTIONAL -> try it with prompt() for user input (works in the BROWSER console only).
let area = ((base*height)/2)
console.log(`Area of triagle is : ${area}`);


//Q16 --> 
 let length = 12
        let width = 8
//        Calculate the AREA (length * width) and PERIMETER (2 * (length + width))
//        of the rectangle. Print both in a readable format using template literals.
console.log(`AREA : ${(length*width)} | PERIMETER : ${(2*(length*width))}`);

//Q17 --> 
 let radius = 7
//        Calculate the AREA (Math.PI * radius ** 2) and CIRCUMFERENCE
//        (2 * Math.PI * radius) of the circle. Round both to 2 decimals with toFixed().
//        HINT -> Math.PI is a PROPERTY (no brackets) -> revision lecture 03.
console.log(`AREA : ${(Math.PI * radius ** 2).toFixed(2)} | CIRCUMFERENCE ${(2 * Math.PI * radius).toFixed(2)}`);

//Q18 --> 
 let salary = 72000
//        Using ONLY assignment shortcuts, do these steps in order :
//        a) add a bonus of 5000        (+=)
//        b) deduct 10% tax             (*= 0.9)
//        c) add a random incentive between 500 and 1500   (+= with Math.random)
//        Print the final salary.
//        HINT -> golden formula (lecture 03) for the random part.

console.log(salary+=5000);
console.log(salary*=0.9);
console.log(salary+=(Math.floor(Math.random()*(1500-500+1)+500)));

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between =, == and === ?
//        Write ONE line for each with a small example.
//        HINT -> assignment | loose comparison | strict comparison.
// = is assignment operator which assigns data/value to a variable 
// == checking operator checks only value
// === strict equality operator checks the value and data type

//Q20 --> INTERVIEW QUESTION -> why do JS developers ALWAYS prefer === over == ?
//        Give one real example where == gives a SURPRISING result.
//        HINT -> "0" == 0, "" == 0, null == undefined -> try these in the console,
//        write the results, and explain the surprise.

// ==  ( loose equality ) : compares VALUES, and if the TYPES differ, it silently
//                          CONVERTS them using the coercion rules before comparing.
// === ( strict equality ): compares VALUE and TYPE together. No conversion, ever.
//                          5 === "5" is false simply because number is not string.
//
// Developers prefer === because == is UNPREDICTABLE. The conversion rules are a long,
// weird spec ( null only equals undefined, booleans become numbers, strings become
// numbers, arrays become strings become numbers... ). You cannot hold it in your head,
// so bugs appear silently. === always behaves like common sense -> type must match too.

// Even more absurd : null == 0 is FALSE, but "" == 0 is TRUE, and null == undefined
// is TRUE. == has a special exception table just for null/undefined. Nobody memorizes
// this safely -> that is exactly why teams ban == ( ESLint rule "eqeqeq" ) .


//Q21 --> INTERVIEW QUESTION -> what is the output of the below code ? explain step by step.
//        let x = 5
//        let y = x++ + ++x
//        console.log(y) //12
//        console.log(x) //7
//        HINT -> solve LEFT to RIGHT : x++ gives the OLD value first,
//        then ++x increases BEFORE using. track x at every step.

//Q22 --> INTERVIEW QUESTION -> what does the % (modulus) operator do ?
//        Write 3 real-world uses of % (from the lecture + your own thinking).
//        HINT -> even/odd check is one. what about checking divisibility by 5 ? or cycles ?



//Q23 --> INTERVIEW QUESTION -> what is operator precedence ?
//        Predict WITHOUT running, then confirm :
//        console.log(2 + 3 * 4) //14
//        console.log((2 + 3) * 4) //20
//        console.log(10 - 4 % 3) //9
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
        let price = 499
        let quantity = 3
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

let total = (price * quantity).toFixed(2);
let discount = ((total>1000)?total*0.1:total*0).toFixed(2);
let finalBill = (total - discount).toFixed(2);
console.log(`Price : Rs. ${price}`);
console.log(`Quantity : ${quantity} Piece`);
console.log(`Total : Rs. ${total}`);
console.log(`Discount : Rs. ${discount}`);
console.log(`Final Bill : Rs. ${finalBill}`);

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 06_ASSIGNMENT_JS_OPERATORS.js
// ============================================

