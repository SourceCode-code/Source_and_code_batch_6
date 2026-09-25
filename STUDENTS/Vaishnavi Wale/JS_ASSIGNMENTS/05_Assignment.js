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

//ANSWER:
let strTen = "10"
let numTen = 10

console.log(typeof strTen == typeof numTen)         // false because strTen is a String datatype and numTen is a number datatype
 let newTen = Number(strTen)
console.log(typeof newTen == typeof numTen)         // true --> Number(strTen) it convert the string into number datatype


//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number(""))
//       console.log(Number(null))
//       console.log(Number(undefined))
//       console.log(Number(true))
//       console.log(Number(false))
//       HINT -> empty string and null become 0, but undefined becomes NaN. why ?

//ANSWER:

console.log(Number(""))         // 0
console.log(Number(null))       // 0
console.log(Number(undefined))  // NaN because it cannot convert into number.
console.log(Number(true))       // 1
console.log(Number(false))      // 0

//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(parseInt("53841.5135"))
//       console.log(parseFloat("53841.5135"))
//       console.log(parseInt("12.9abc"))
//       console.log(parseFloat("12.9abc"))
//       console.log(parseInt("abc12.9"))
//       HINT -> parseInt CUTS the decimal (no rounding), parseFloat keeps it,
//       BOTH stop reading at the first character that is not a number.

//ANSWER:
console.log(parseInt("53841.5135"))     // 53841
console.log(parseFloat("53841.5135"))   // 53841.5135
console.log(parseInt("12.9abc"))        // 12
console.log(parseFloat("12.9abc"))      // 12.9
console.log(parseInt("abc12.9"))        // NaN

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number("ASDFGHJKMNBVC"))
//       console.log(typeof Number("ASDFGHJKMNBVC"))
//       HINT -> can letters become a number ? and what is the DATATYPE of that
//       failed result ? (this is a trick question)

//ANSWER:

console.log(Number("ASDFGHJKMNBVC"))        // NaN -> if the string is not a valid number, the result is NaN
console.log(typeof Number("ASDFGHJKMNBVC")) // number-> NaN means the result is not a valid number, but its data type in JavaScript is still number

//Q5 --> let number = 7020400749
//       a) convert it to a string using String() and print the typeof
//       b) convert it to a string using toString() and print the typeof
//       HINT -> both give "string". then answer in comments :
//       what happens with String(null) and null.toString() ? (run the first one,
//       the second one gives an ERROR -> write the error message in comments)

//ANSWER:

let number = 7020400749

// a) convert it to a string using String() and print the typeof
let numStr = String(number)
console.log(numStr)            // 7020400749
console.log(typeof numStr)     // string

// b) convert it to a string using toString() and print the typeof
let numStr2 = number.toString()
console.log(numStr2)            // 7020400749          
console.log(typeof numStr2)     // string

//Q6 --> Boolean() -> predict the output (write answer as comment, then run and verify)
//       console.log(Boolean("hello"))
//       console.log(Boolean(""))
//       console.log(Boolean(0))
//       console.log(Boolean(100))
//       THEN -> write the 6 falsy values of javascript in comments.
//       HINT -> everything that is NOT in your list is TRUTHY.

// ANSWER:

console.log(Boolean("hello"))   // true  --> non-empty string -> true
console.log(Boolean(""))        // false --> empty string -> false
console.log(Boolean(0))         // false  
console.log(Boolean(100))       // true  --> any non-zero number -> true

// Q write the 6 falsy values of javascript in comments.
// Answer: false, 0, "" (empty string), null, undefined, NaN. --> it returns False

// ------------------- SECTION B : PREDICT THE OUTPUT (COERCION) -------------------

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(5 + 5)
//       console.log(5 + "5")
//       console.log("5" - 5)
//       console.log(5 - "5")
//       console.log("5" * 5)
//       console.log("5" / 5)
//       HINT -> + with ANY string = CONCATENATION. - * / ALWAYS convert to number first.

//ANSWER:

console.log(5 + 5)      // 10
console.log(5 + "5")    // 55
console.log("5" - 5)    // 0
console.log(5 - "5")    // 0
console.log("5" * 5)    // 25
console.log("5" / 5)    // 1

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("5" - true)
//       console.log("5" - false)
//       console.log("5" + true)
//       console.log("5" + false)
//       HINT -> true = 1 and false = 0 in maths.
//       but + with a string does CONCAT, not maths. think twice for each line.

//ANSWER:
console.log("5" - true)     // 4
console.log("5" - false)    // 5
console.log("5" + true)     // 5true
console.log("5" + false)    // 5false

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("10" + "5")
//       console.log("10" - "5")
//       console.log(1 + "1")
//       console.log(1 - "1")
//       HINT -> same operators, different behaviour. explain EACH result in one line.

// ANSWER:
console.log("10" + "5")     // 105  --> IF both side of + is a STRING -> + acts as CONCATENATION (joins them)
console.log("10" - "5")     // 5    --> string - string -> - acts as minus 
console.log(1 + "1")        // 11   --> number + string --> CONCATE
console.log(1 - "1")        // 0    --> number - String --> - acts as minus 

//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(+"5")
//        console.log(+"5.5")
//        console.log(+"abc")
//        console.log(typeof +"5")
//        HINT -> UNARY + is the fastest string -> number conversion.

//ANSWER:
console.log(+"5")       // 5
console.log(+"5.5")     // 5.5
console.log(+"abc")     // NaN
console.log(typeof +"5")    // number

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(isNaN(Number("hello")))
//        console.log(isNaN("123"))
//        console.log(isNaN("hello123"))
//        console.log(NaN === NaN)
//        HINT -> NaN is not equal to ANYTHING, not even itself. what do we use to detect it ?

//ANSWER:
console.log(isNaN(Number("hello"))) // true
console.log(isNaN("123"))           // false
console.log(isNaN("hello123"))      // true
console.log(NaN === NaN)            // false



// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q12 --> let priceStr = "9.8"
//        Check if parseFloat(priceStr) is equal to 10. if NOT, round it
//        so the result becomes exactly 10, and print the result + its typeof.
//        HINT -> which method ROUNDS to nearest (revision -> lecture 03) ?

//ANSWER:
let priceStr = "9.8"
console.log(parseFloat(priceStr))
let roundPrice = Math.round(priceStr)
console.log(roundPrice)                 // 10
console.log(typeof roundPrice)          // number

//Q13 --> let mobileStr = "  9876543210  "
//        Clean the extra spaces, convert it to a NUMBER, and print the number + its typeof.
//        HINT -> chaining -> trim() first (lecture 04), then convert (this lecture).

//ANSWER:
let mobileStr = "  9876543210  "
console.log(mobileStr.trim())
let mobileNum = Number(mobileStr)   
console.log(mobileNum)              // 9876543210
console.log(mobileNum)              // 9876543210
console.log(typeof mobileNum)       // number

//Q14 --> let amountStr = "199.99"
//        Convert it to a number, add 18% GST on it, and print the final amount
//        in exact 2 decimal format.
//        HINT -> Number() to convert, arithmetic to add tax,
//        .toFixed(2) to format (revision -> lecture 03).

//Answer:                                     

let amountStr = "199.99"
let amountNum = Number(amountStr)
console.log(amountNum)                  // 199.99
let gstAmount = amountNum * 18/ 100
let finalAmount = gstAmount + amountNum
console.log(finalAmount.toFixed(2))     // 235.99

//Q15 --> let otp = 483920
//        Convert this NUMBER to a STRING and print it using a template literal
//        like -> "Your OTP is : 483920"
//        Then print the length of the OTP (how do you get length of a number ?)
//        HINT -> String(otp) first, then .length works.

//Answer:
let otp = 483920
let otpStr = String(otp)
console.log(`Your OTP is: ${otpStr}`)   // Your OTP is: 483920
console.log(otpStr.length)              // 6

//Q16 --> let email = "siddhant.gadakh@gmail.com"
//        a) check if the email contains "@" (print true/false)
//        b) find the index of "@"
//        c) extract the username part (everything BEFORE the @) using slice()
//        HINT -> includes() + indexOf() + slice() -> all from lecture 04,
//        and the conversion here is only mental : everything is already a string :)

//ANSWER:
let email = "siddhant.gadakh@gmail.com"
// a) check if the email contains "@" (print true/false)
console.log(email.includes("@")? "True" : "False")          //True
// b) find the index of "@"
console.log(email.indexOf("@"))                             // 15
// c) extract the username part (everything BEFORE the @) using slice()
console.log(email.slice(0, -10 ))                           // siddhant.gadakh

//Q17 --> let val1 = "5"
//        let val2 = "10"
//        WITHOUT converting manually, what do these print ?
//        console.log(val1 + val2)
//        console.log(val1 - val2)
//        Now CONVERT properly and print the CORRECT sum (15) and difference (-5).
//        HINT -> one line joins, the other line does maths. why ?

//Answer:
let val1 = "5"
let val2 = "10"
console.log(val1 + val2)        // 510
console.log(val1 - val2)        // -5

let val1Num = Number(val1)
let val2Num = Number(val2)
let addVal = val1Num + val2Num
let subVal = val1Num - val2Num 
console.log(addVal)             // 15
console.log(subVal)             // -5

//Q18 --> WRITE 3 statements that give a TRUTHY value and 3 statements that give
//        a FALSY value. Prove each one using Boolean(...) in console.log.
//        HINT -> revise the falsy list from the lecture.

//ANSWER:
console.log(Boolean("Hello")); // true
console.log(Boolean(100));     // true
console.log(Boolean([]));      // true

console.log(Boolean(false));   // false
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false


// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION -> why is typeof NaN === "number" ?
//        Also : why is NaN === NaN false ? and what is the CORRECT way to detect NaN ?
//        HINT -> NaN means the result of FAILED number maths. it is still a number
//        that failed. comparison with NaN can never be true -> what method solves this ?

//Q20 --> INTERVIEW QUESTION -> Number("") gives 0 but Number(undefined) gives NaN.
//        Explain the difference between an EMPTY STRING and UNDEFINED.
//        HINT -> "" is a real value (empty box), undefined means the box does not exist.

//Q21 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between
//        parseInt("12.9") and Math.floor(12.9) ?
//        Both LOOK like they give 12. Now check these two and explain :
//        console.log(parseInt("-12.9"))
//        console.log(Math.floor(-12.9))
//        HINT -> parseInt CUTS towards ZERO, Math.floor goes DOWN on the number line.
//        on negative numbers these are NOT the same !

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

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 05_ASSIGNMENT.js
// ============================================

