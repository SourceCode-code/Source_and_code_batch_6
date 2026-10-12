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
console.log(`Question1...`)
let strTen = "10"
let numTen = 10
console.log(typeof strTen === typeof numTen)
strTen = Number(strTen)
console.log(typeof strTen === typeof numTen)

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number(""))
//       console.log(Number(null))
//       console.log(Number(undefined))
//       console.log(Number(true))
//       console.log(Number(false))
//       HINT -> empty string and null become 0, but undefined becomes NaN. why ?
console.log(`Question2...`)
console.log(Number(""))
console.log(Number(null))
console.log(Number(undefined))
console.log(Number(true))
console.log(Number(false))
/*
Number("") → 0 because an empty string converts to zero.

Number(null) → 0 because JavaScript's numeric conversion rules convert null to zero.

Number(undefined) → NaN because undefined does not convert to a valid number
*/

//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(parseInt("53841.5135"))
//       console.log(parseFloat("53841.5135"))
//       console.log(parseInt("12.9abc"))
//       console.log(parseFloat("12.9abc"))
//       console.log(parseInt("abc12.9"))
//       HINT -> parseInt CUTS the decimal (no rounding), parseFloat keeps it,
//       BOTH stop reading at the first character that is not a number.


console.log(`Question3...`)
console.log(parseInt("53841.5135"))
console.log(parseFloat("53841.5135"))
console.log(parseInt("12.9abc"))
console.log(parseFloat("12.9abc"))
console.log(parseInt("abc12.9"))
/*output-
53841
53841.5135
12
12.9
NaN
*/

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number("ASDFGHJKMNBVC"))
//       console.log(typeof Number("ASDFGHJKMNBVC"))
//       HINT -> can letters become a number ? and what is the DATATYPE of that
//       failed result ? (this is a trick question)

console.log(`Question4...`)
console.log(Number("ASDFGHJKMNBVC"))
console.log(typeof Number("ASDFGHJKMNBVC"))

//Number("ASDFGHJKMNBVC") returns NaN because letters cannot be converted into a valid number.
//typeof Number("ASDFGHJKMNBVC") returns "number" because NaN has the data type number in JavaScript.


//Q5 --> let number = 7020400749
//       a) convert it to a string using String() and print the typeof
//       b) convert it to a string using toString() and print the typeof
//       HINT -> both give "string". then answer in comments :
//       what happens with String(null) and null.toString() ? (run the first one,
//       the second one gives an ERROR -> write the error message in comments)

console.log(`Question5...`)
let number = 7020400749
// a) Convert using String()
let str1 = String(number)
console.log(str1)
console.log(typeof str1)


// b) Convert using toString()
let str2 = number.toString()
console.log(str2)
console.log(typeof str2)

console.log(String(null))
//null.toString() 
//gives an ERROR-->TypeError: Cannot read properties of null (reading 'toString')

//Q6 --> Boolean() -> predict the output (write answer as comment, then run and verify)
//       console.log(Boolean("hello"))
//       console.log(Boolean(""))
//       console.log(Boolean(0))
//       console.log(Boolean(100))
//       THEN -> write the 6 falsy values of javascript in comments.
//       HINT -> everything that is NOT in your list is TRUTHY.

console.log(`Question6...`)
     console.log(Boolean("hello"))
     console.log(Boolean(""))
     console.log(Boolean(0))
     console.log(Boolean(100))
/*
output-
true
false
false
true
*/
     //false, 0, "" (empty string), null, undefined, NaN


// ------------------- SECTION B : PREDICT THE OUTPUT (COERCION) -------------------

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(5 + 5)
//       console.log(5 + "5")
//       console.log("5" - 5)
//       console.log(5 - "5")
//       console.log("5" * 5)
//       console.log("5" / 5)
//       HINT -> + with ANY string = CONCATENATION. - * / ALWAYS convert to number first.
console.log(`Question7...`)

       console.log(5 + 5)
       console.log(5 + "5")
       console.log("5" - 5)
       console.log(5 - "5")
       console.log("5" * 5)
       console.log("5" / 5)

/*
output
10
55
0
0
25
1
*/

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("5" - true)
//       console.log("5" - false)
//       console.log("5" + true)
//       console.log("5" + false)
//       HINT -> true = 1 and false = 0 in maths.
//       but + with a string does CONCAT, not maths. think twice for each line.

       console.log(`Question8...`)
       console.log("5" - true)
       console.log("5" - false)
       console.log("5" + true)
       console.log("5" + false)
/*
output-
4
5
5true
5false
*/

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("10" + "5")
//       console.log("10" - "5")
//       console.log(1 + "1")
//       console.log(1 - "1")
//       HINT -> same operators, different behaviour. explain EACH result in one line.
    console.log(`Question9...`)
       console.log("10" + "5")
       console.log("10" - "5")
       console.log(1 + "1")
       console.log(1 - "1")
//+ can perform string concatenation, while - performs numeric subtraction

//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(+"5")
//        console.log(+"5.5")
//        console.log(+"abc")
//        console.log(typeof +"5")
//        HINT -> UNARY + is the fastest string -> number conversion.
console.log(`Question10...`)
 console.log(+"5")
 console.log(+"5.5")
 console.log(+"abc")
 console.log(typeof +"5")
 /*
 output-
 5
5.5
NaN
number
 */

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(isNaN(Number("hello")))
//        console.log(isNaN("123"))
//        console.log(isNaN("hello123"))
//        console.log(NaN === NaN)
//        HINT -> NaN is not equal to ANYTHING, not even itself. what do we use to detect it ?
console.log(`Question11...`)
   console.log(isNaN(Number("hello")))
   console.log(isNaN("123"))
   console.log(isNaN("hello123"))
   console.log(NaN === NaN)
/*
output-
true
false
true
false
NaN is **not equal to anything**, not even to itself — that is why we use `isNaN()` to detect it.
*/

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q12 --> let priceStr = "9.8"
//        Check if parseFloat(priceStr) is equal to 10. if NOT, round it
//        so the result becomes exactly 10, and print the result + its typeof.
//        HINT -> which method ROUNDS to nearest (revision -> lecture 03) ?

console.log(`Question12...`)
let priceStr = "9.8"
let price = parseFloat(priceStr)

if (price !== 10) {
    price = Math.round(price)
}

console.log(price)
console.log(typeof price)


//Q13 --> let mobileStr = "  9876543210  "
//        Clean the extra spaces, convert it to a NUMBER, and print the number + its typeof.
//        HINT -> chaining -> trim() first (lecture 04), then convert (this lecture).
console.log(`Question13...`)
let mobileStr = "  9876543210  "
let mobileNum = Number(mobileStr.trim())
console.log(mobileNum)
console.log(typeof mobileNum)

//Q14 --> let amountStr = "199.99"
//        Convert it to a number, add 18% GST on it, and print the final amount
//        in exact 2 decimal format.
//        HINT -> Number() to convert, arithmetic to add tax,
//        .toFixed(2) to format (revision -> lecture 03).
console.log('Question14...')
let amountStr = "199.99";
let amount = Number(amountStr);
let finalAmount = amount + amount * 0.18;
console.log(finalAmount.toFixed(2));

//Q15 --> let otp = 483920
//        Convert this NUMBER to a STRING and print it using a template literal
//        like -> "Your OTP is : 483920"
//        Then print the length of the OTP (how do you get length of a number ?)
//        HINT -> String(otp) first, then .length works.
console.log('Question15...')
let otp = 483920
let otpStr = String(otp)
console.log(`Your OTP is : ${otpStr}`)
console.log(otpStr.length)

//Q16 --> let email = "siddhant.gadakh@gmail.com"
//        a) check if the email contains "@" (print true/false)
//        b) find the index of "@"
//        c) extract the username part (everything BEFORE the @) using slice()
//        HINT -> includes() + indexOf() + slice() -> all from lecture 04,
//        and the conversion here is only mental : everything is already a string :)
console.log('Question16..')
let email = "siddhant.gadakh@gmail.com"
console.log(email.includes("@"))
console.log(email.indexOf("@"))
let username = email.slice(0, email.indexOf("@"))
console.log(username)

//Q17 --> let val1 = "5"
//        let val2 = "10"
//        WITHOUT converting manually, what do these print ?
//        console.log(val1 + val2)
//        console.log(val1 - val2)
//        Now CONVERT properly and print the CORRECT sum (15) and difference (-5).
//        HINT -> one line joins, the other line does maths. why ?
console.log('Question17...')
let val1 = "5"
let val2 = "10"
console.log(val1 + val2)
console.log(val1 - val2)

let num1 = Number(val1)
let num2 = Number(val2)

console.log(num1 + num2)
console.log(num1 - num2)
 
//Q18 --> WRITE 3 statements that give a TRUTHY value and 3 statements that give
//        a FALSY value. Prove each one using Boolean(...) in console.log.
//        HINT -> revise the falsy list from the lecture.
console.log('Question18...')

// 3 TRUTHY values
console.log(Boolean("hello")); // true
console.log(Boolean(100));     // true
console.log(Boolean("0"));     // true

// 3 FALSY values
console.log(Boolean(""));        // false
console.log(Boolean(0));         // false
console.log(Boolean(undefined)); // false

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION -> why is typeof NaN === "number" ?
//        Also : why is NaN === NaN false ? and what is the CORRECT way to detect NaN ?
//        HINT -> NaN means the result of FAILED number maths. it is still a number
//        that failed. comparison with NaN can never be true -> what method solves this ?

console.log('Question19...')
//typeof NaN === Number- Because Nan has '0' numeric value
//NaN === NaN--->false-->NaN is unequal to itself
//we use `isNaN()` to detect it.


//Q20 --> INTERVIEW QUESTION -> Number("") gives 0 but Number(undefined) gives NaN.
//        Explain the difference between an EMPTY STRING and UNDEFINED.
//        HINT -> "" is a real value (empty box), undefined means the box does not exist.

console.log('Question20...')
//Number("") → empty string as having no numeric content, which converts to 0.
//Number(undefined) → undefined as a number, so it returns NaN.

//Q21 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between
//        parseInt("12.9") and Math.floor(12.9) ?
//        Both LOOK like they give 12. Now check these two and explain :
//        console.log(parseInt("-12.9"))
//        console.log(Math.floor(-12.9))
//        HINT -> parseInt CUTS towards ZERO, Math.floor goes DOWN on the number line.
//        on negative numbers these are NOT the same !
console.log('Question21...')
// parseInt("12.9") and Math.floor(12.9) ?---> both returns 12
 console.log(parseInt("-12.9"))
 //It cuts off the decimal part, moving toward zero. The result is −12.
 console.log(Math.floor(-12.9))
//It moves down to the next integer on the number line. 
// Since −13 is less than −12.9, the result is −13.

//Q22 --> INTERVIEW QUESTION -> what is the difference between IMPLICIT and EXPLICIT conversion ?
//        Give one example of each from this lecture.
//        HINT -> implicit = JS converts automatically ("5" - 5), explicit = YOU convert (Number("5")).
console.log('Question22...')
//IMPLICIT conversion-JavaScript automatically converts a value from one type to another 
// when an operation is required
console.log("5" - 5) // 0
//Explicit conversion-- we tell JavaScript to convert a value using a function or method.
console.log(Number("5"))//5
//"5" is a string ,we explicitly call Number() and JavaScript converts the string into the number 5.


// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q23 --> BONUS -> STRING CALCULATOR ->
//        let numA = "10"
//        let numB = "20"
//        Both are STRINGS. Calculate and print :
//        sum (30), difference (-10), product (200) -> all as NUMBERS, not "1020" !
//        Print using template literals like "Sum : 30".
//        HINT -> convert once, store in new variables, then do clean maths.
console.log('Question23...')
let numA = "10"
let numB = "20"
let a = Number(numA)
let b = Number(numB)
let sum = a + b
let difference = a - b
let product = a * b
console.log(`Sum : ${sum}`)
console.log(`Difference : ${difference}`)
console.log(`Product : ${product}`)

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
console.log('Question24...')
let str = "abc"
let num = 123
let bool = true
let un
let empty = null
console.log(`${str} -> ${typeof str}`)
console.log(`${num} -> ${typeof num}`)
console.log(`${bool} -> ${typeof bool}`)
console.log(`${un} -> ${typeof un}`)
console.log(`${empty} -> ${typeof empty}`)

//typeof null returns "object", NOT "null".

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 05_ASSIGNMENT.js
// ============================================

