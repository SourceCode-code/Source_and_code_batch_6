// ============================================
// 05_ASSIGNMENT -> TOPIC : JS DATA TYPE CONVERSION (+ revision of datatypes & numbers)
// BASED ON : LECTURE/05_JS_DataType_Conversion.js  +  THEORY_NOTES/05_JS_DataType_Conversion.md
//
// HOW TO RUN : open terminal -> node 05_ASSIGNMENT.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : BASICS -------------------

//Q1 --> let strTen = "10"
//       let numTen = 10
//       Check if the typeof strTen is EXACTLY equal to typeof numTen.
//       Then convert strTen to a number and check again. Print both results.
//       HINT -> typeof strTen === typeof numTen  -> what comes first time ?
//       after Number(strTen) what changes ?
// Answer --->
let strTen = "10" // string
let numTen = 10 // number
console.log(typeof strTen ,typeof numTen)
let strTen1 = 10 // number
let numTen1 = 10 // number
console.log(typeof strTen1 === typeof numTen1)


//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number(""))
//       console.log(Number(null))
//       console.log(Number(undefined))
//       console.log(Number(true))
//       console.log(Number(false))
//       HINT -> empty string and null become 0, but undefined becomes NaN. why ?
// Answer -->
console.log(Number(""))
// output is "0"
console.log(Number(null))
// output is "0"
console.log(Number(undefined))
// output is "NaN"
console.log(Number(true))
// output is "true"
console.log(Number(false))
// output is "false"
// if the string is not a valid number, the result is NaN


//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(parseInt("53841.5135"))
//       console.log(parseFloat("53841.5135"))
//       console.log(parseInt("12.9abc"))
//       console.log(parseFloat("12.9abc"))
//       console.log(parseInt("abc12.9"))
//       HINT -> parseInt CUTS the decimal (no rounding), parseFloat keeps it,
//       BOTH stop reading at the first character that is not a number.
// Answer -->
console.log(parseInt("53841.5135"))
// output is "53841"
console.log(parseFloat("53841.5135"))
// output is "53841.5135"
console.log(parseInt("12.9abc"))
// output is "12"
console.log(parseFloat("12.9abc"))
// output is "12.9"
console.log(parseInt("abc12.9"))
// output is "NaN"

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number("ASDFGHJKMNBVC"))
//       console.log(typeof Number("ASDFGHJKMNBVC"))
//       HINT -> can letters become a number ? and what is the DATATYPE of that
//       failed result ? (this is a trick question)
// Answer -->
console.log(Number("ASDFGHJKMNBVC"))
// output is NaN 
// you CANNOT convert letters/words into a number.
console.log(typeof Number("ASDFGHJKMNBVC"))
// output is "number"


//Q5 --> let number = 7020400749
//       a) convert it to a string using String() and print the typeof
//       b) convert it to a string using toString() and print the typeof
//       HINT -> both give "string". then answer in comments :
//       what happens with String(null) and null.toString() ? (run the first one,
//       the second one gives an ERROR -> write the error message in comments)
// Answer -->
let number = 7020400749
console.log(String(number)) 
console.log(typeof String(number)) // "string"

console.log(number.toString()) 
console.log(typeof number.toString()) // "string"



//Q6 --> Boolean() -> predict the output (write answer as comment, then run and verify)
//       console.log(Boolean("hello"))
//       console.log(Boolean(""))
//       console.log(Boolean(0))
//       console.log(Boolean(100))
//       THEN -> write the 6 falsy values of javascript in comments.
//       HINT -> everything that is NOT in your list is TRUTHY.
// Answer -->
console.log(Boolean("hello")) // true
console.log(Boolean("")) // false
console.log(Boolean(0)) //false
console.log(Boolean(100)) // true

/* 6 falsy value 
1) false
2) 0
3) "" (empty string)
4) null 
5) undefinded
6) NaN
*/


// ------------------- SECTION B : PREDICT THE OUTPUT (COERCION) -------------------

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(5 + 5)
//       console.log(5 + "5")
//       console.log("5" - 5)
//       console.log(5 - "5")
//       console.log("5" * 5)
//       console.log("5" / 5)
//       HINT -> + with ANY string = CONCATENATION. - * / ALWAYS convert to number first.
// Answer -->
console.log(5 + 5)// output is 10
console.log(5 + "5") // output is 55
console.log("5" - 5)// output is 0
console.log(5 - "5")// output is 0
console.log("5" * 5) // output is 25
console.log("5" / 5) // output is 1

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("5" - true)
//       console.log("5" - false)
//       console.log("5" + true)
//       console.log("5" + false)
//       HINT -> true = 1 and false = 0 in maths.
//       but + with a string does CONCAT, not maths. think twice for each line.
// Answer -->
console.log("5" - true) // output is 4
console.log("5" - false) // output is 5
console.log("5" + true) // output is 5 true
console.log("5" + false) // output is 5false


//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("10" + "5")
//       console.log("10" - "5")
//       console.log(1 + "1")
//       console.log(1 - "1")
//       HINT -> same operators, different behaviour. explain EACH result in one line.
// Answer -->
console.log("10" + "5") // output is 105
console.log("10" - "5") // output is 5
console.log(1 + "1") // output is 11
console.log(1 - "1") // output is 0


//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(+"5")
//        console.log(+"5.5")
//        console.log(+"abc")
//        console.log(typeof +"5")
//        HINT -> UNARY + is the fastest string -> number conversion.
// Answer -->
console.log(+"5") // output is 5
console.log(+"5.5") // output is 5.5
console.log(+"abc") // output is NaN
console.log(typeof +"5") // output is  number

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(isNaN(Number("hello")))
//        console.log(isNaN("123"))
//        console.log(isNaN("hello123"))
//        console.log(NaN === NaN)
//        HINT -> NaN is not equal to ANYTHING, not even itself. what do we use to detect it ?
// Answer -->

console.log(isNaN(Number("hello"))) // true
console.log(isNaN("123")) // false
console.log(isNaN("hello123")) // true
console.log(NaN === NaN) // false
// we use isNaN() to detect it

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q12 --> let priceStr = "9.8"
//        Check if parseFloat(priceStr) is equal to 10. if NOT, round it
//        so the result becomes exactly 10, and print the result + its typeof.
//        HINT -> which method ROUNDS to nearest (revision -> lecture 03) ?
// Answer -->
let priceStr = "9.8"
console.log(parseFloat(priceStr)) // output is "9.8"
console.log(Math.round(priceStr)) // output is "10"
console.log(typeof Math.round(priceStr)) // output is "number"


//Q13 --> let mobileStr = "  9876543210  "
//        Clean the extra spaces, convert it to a NUMBER, and print the number + its typeof.
//        HINT -> chaining -> trim() first (lecture 04), then convert (this lecture).
// Answer -->
let mobileStr = "  9876543210  "
console.log(mobileStr .trim()) // clean extra spaces
console.log(Number(mobileStr)) // after convert output is "let mobileStr = "9876543210"" 
console.log(typeof Number(mobileStr))  // output is "number"


//Q14 --> let amountStr = "199.99"
//        Convert it to a number, add 18% GST on it, and print the final amount
//        in exact 2 decimal format.
//        HINT -> Number() to convert, arithmetic to add tax,
//        .toFixed(2) to format (revision -> lecture 03).
// Answer -->
let amountStr = "199.99"
console.log(parseFloat(amountStr))
console.log(amountStr*0.18) // arithmetic operation
let Add_gst = 199.99+35.9982 // adding main amount+gst amount
console.log(Add_gst)  // after adding gst amount output is 235.9882
let final_amount = 235.9882
console.log(final_amount.toFixed(2)) // output is "235.99"

//Q15 --> let otp = 483920
//        Convert this NUMBER to a STRING and print it using a template literal
//        like -> "Your OTP is : 483920"
//        Then print the length of the OTP (how do you get length of a number ?)
//        HINT -> String(otp) first, then .length works.
// Answer -->
let otp = 483920
console.log(`Your otp is : ${String(otp)}`)
// output is "Your otp is : 483920"
console.log(toString(otp).length)
// output is "18"

//Q16 --> let email = "siddhant.gadakh@gmail.com"
//        a) check if the email contains "@" (print true/false)
//        b) find the index of "@"
//        c) extract the username part (everything BEFORE the @) using slice()
//        HINT -> includes() + indexOf() + slice() -> all from lecture 04,
//        and the conversion here is only mental : everything is already a string :)
// Answer -->
let email = "siddhant.gadakh@gmail.com"

//a) check if the email contains "@" (print true/false)
console.log(email.includes("@"))
// output is "true"
console.log(email.indexOf("@"))
//output is "15"
console.log(email.slice(0,15))
// output is "siddhant.gadakh"


//Q17 --> let val1 = "5"
//        let val2 = "10"
//        WITHOUT converting manually, what do these print ?
//        console.log(val1 + val2)
//        console.log(val1 - val2)
//        Now CONVERT properly and print the CORRECT sum (15) and difference (-5).
//        HINT -> one line joins, the other line does maths. why ?
// Answer -->
let val1 = "5"
let val2 = "10"

console.log(val1+val2) // output is 510
console.log(val1-val2)  // output is -5

console.log(Number(val1)+Number(val2)) 
// output is "15" --> converting from string to numbers
console.log(Number(val1)-Number(val2))
// output is "-5" 


//Q18 --> WRITE 3 statements that give a TRUTHY value and 3 statements that give
//        a FALSY value. Prove each one using Boolean(...) in console.log.
//        HINT -> revise the falsy list from the lecture.
// Answer -->
// TRUTHY Values

console.log(Boolean ("Akshay")) // value in string is truthy value
console.log(Boolean("True"))
console.log(Boolean ("2552"))

// FALSY Values
console.log(Boolean(0)) // 0 is falsy value
console.log(Boolean()) // empty string means falsy value
console.log(Boolean(false)) 


// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION -> why is typeof NaN === "number" ?
//        Also : why is NaN === NaN false ? and what is the CORRECT way to detect NaN ?
//        HINT -> NaN means the result of FAILED number maths. it is still a number
//        that failed. comparison with NaN can never be true -> what method solves this ?
// Answer -->
console.log(typeof NaN) // output is "number"
// in NaN shows valid & invalid both value  
console.log(NaN===NaN) // output is "false"
// NaN is NOT equal to anything, not even to itself
// correct way to detect NaN
console.log(isNaN(NaN)) // output is "true"
// in isNaN the return in "boolean" 


//Q20 --> INTERVIEW QUESTION -> Number("") gives 0 but Number(undefined) gives NaN.
//        Explain the difference between an EMPTY STRING and UNDEFINED.
//        HINT -> "" is a real value (empty box), undefined means the box does not exist.
// Answer -->
//
//Q21 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between
//        parseInt("12.9") and Math.floor(12.9) ?
//        Both LOOK like they give 12. Now check these two and explain :
//        console.log(parseInt("-12.9"))
//        console.log(Math.floor(-12.9))
//        HINT -> parseInt CUTS towards ZERO, Math.floor goes DOWN on the number line.
//        on negative numbers these are NOT the same !
// Answer -->
/* parseInt("12.9")
*parseInt() cuts the decimal part (no rounding)
*Math.floor(12.9)
*Rounds a floating number down to its nearest lower integer
*/
console.log(parseInt("-12.9")) 
// output is -12.9
console.log(Math.floor(-12.9))
// output is -13  
// on nigative value its always moves to the lower side


//Q22 --> INTERVIEW QUESTION -> what is the difference between IMPLICIT and EXPLICIT conversion ?
//        Give one example of each from this lecture.
//        HINT -> implicit = JS converts automatically ("5" - 5), explicit = YOU convert (Number("5")).

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q23 --> BONUS -> STRING CALCULATOR ->
//        let numA = "10"
//        let numB = "20"
//        Both are STRINGS. Calculate and print :
//        sum (30), difference (-10), product (200) -> all as NUMBERS, not "1020" !
//        Print using template literals like "Sum : 30".
//        HINT -> convert once, store in new variables, then do clean maths.
// Answer -->
let numA = "10"
let numB = "20"
// convert in string to number
let num_A = Number(numA)
let num_B = Number(numB)
// calculate the values with template
console.log("Sum :", num_A + num_B)
// Sum : 30
console.log("difference :",num_A-num_B)
// difference : -10
console.log("product",num_A*num_B)
// product 200


//Q24 --> BONUS (MINI PROJECT - TYPE INSPECTOR REPORT) ->
//        Declare one value of each type :
//        a string, a number, a boolean, undefined, and null.
//        Print a report in EXACTLY this format (use template literals + typeof) :
//           "abc"      -> string
//           123        -> number
//           true       -> boolean
//           undefined  -> undefined
//           null       -> ???
//        HINT -> one line will SURPRISE you. typeof null is NOT "null".
//        write the real output + explain in comments (famous JS interview quirk!).

// Answer -->
let str = "abc" // string
let num = 123 // number
let Male = true // boolean
let und     // undefined
let null_value = null // object

// with template
console.log(`"${str}"    -> ${typeof str}
${num}    -> ${typeof num}
${Male}   ->${typeof Male}
${und}    ->${typeof und}
${null_value}    ->${typeof null_value}`)
// output is 
/*
"abc"    -> string
123    -> number
true   ->boolean
undefined    ->undefined
null    ->object
*/
// null means intentionally empty / "nothing"
// typeof "null" this variable has no value

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 05_ASSIGNMENT.js
// ============================================