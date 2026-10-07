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
// Answer :
let strTen = "10"
let numTen = 10
console.log(typeof(strTen)) // string
console.log(typeof(numTen)) // number


//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number(""))
//       console.log(Number(null))
//       console.log(Number(undefined))
//       console.log(Number(true))
//       console.log(Number(false))
//       HINT -> empty string and null become 0, but undefined becomes NaN. why ?
// Answer:
// 0
// 0
// NaN
// 1
// 0
console.log(Number(""))
console.log(Number(null))
console.log(Number(undefined))
console.log(Number(true))
console.log(Number(false))

//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(parseInt("53841.5135"))
//       console.log(parseFloat("53841.5135"))
//       console.log(parseInt("12.9abc"))
//       console.log(parseFloat("12.9abc"))
//       console.log(parseInt("abc12.9"))
//       HINT -> parseInt CUTS the decimal (no rounding), parseFloat keeps it,
//       BOTH stop reading at the first character that is not a number.
// Answer:
console.log(parseInt("53841.5135")) // 53841
console.log(parseFloat("53841.5135")) // 53841.5135
console.log(parseInt("12.9abc"))  // 12
console.log(parseFloat("12.9abc")) //12.9
console.log(parseInt("abc12.9")) // NaN


//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number("ASDFGHJKMNBVC"))
//       console.log(typeof Number("ASDFGHJKMNBVC"))
//       HINT -> can letters become a number ? and what is the DATATYPE of that
//       failed result ? (this is a trick question)
// NaN and number
console.log(Number("ASDFGHJKMNBVC")) 
console.log(typeof Number("ASDFGHJKMNBVC"))

//Q5 --> let number = 7020400749
//       a) convert it to a string using String() and print the typeof
//       b) convert it to a string using toString() and print the typeof
//       HINT -> both give "string". then answer in comments :
//       what happens with String(null) and null.toString() ? (run the first one,
//       the second one gives an ERROR -> write the error message in comments)
// Answer :
let number = 7020400749
// a) convert it to a string using String() and print the typeof
let str1 = String(number)
console.log(typeof str1)
// Output is String
// b) convert it to a string using toString() and print the typeof
let str2 = number.toString()
console.log(typeof str2)
// Output is string
// what happens with String(null) and null.toString()
// 1.String(null)
console.log(String(null))
// null.toString()
// console.log(null.toString())
// Output TypeError: Cannot read properties of null (reading 'toString')

//Q6 --> Boolean() -> predict the output (write answer as comment, then run and verify)
//       console.log(Boolean("hello"))
//       console.log(Boolean(""))
//       console.log(Boolean(0))
//       console.log(Boolean(100))
//       THEN -> write the 6 falsy values of javascript in comments.
//       HINT -> everything that is NOT in your list is TRUTHY.
// Answer :
console.log(Boolean("hello")) // true
console.log(Boolean("")) // false
console.log(Boolean(0))  // false
console.log(Boolean(100))  // true

// ------------------- SECTION B : PREDICT THE OUTPUT (COERCION) -------------------

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(5 + 5)
//       console.log(5 + "5")
//       console.log("5" - 5)
//       console.log(5 - "5")
//       console.log("5" * 5)
//       console.log("5" / 5)
//       HINT -> + with ANY string = CONCATENATION. - * / ALWAYS convert to number first.
// Answer :
// 10,55,0,0,25,1
console.log(5 + 5)
console.log(5 + "5")
console.log("5" - 5)
console.log(5 - "5")
console.log("5" * 5)
console.log("5" / 5)


//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("5" - true)
//       console.log("5" - false)
//       console.log("5" + true)
//       console.log("5" + false)
//       HINT -> true = 1 and false = 0 in maths.
//       but + with a string does CONCAT, not maths. think twice for each line.
// Answer :
console.log("5" - true) // 4
console.log("5" - false) // 5
console.log("5" + true) // 5true
console.log("5" + false) // sfalse


//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("10" + "5")
//       console.log("10" - "5")
//       console.log(1 + "1")
//       console.log(1 - "1")
//       HINT -> same operators, different behaviour. explain EACH result in one line.
// Answer :
console.log("10" + "5")
//105
// Explaination : The ' + ' operator concatenation when both are strings
console.log("10" - "5")
//5
// Explaination : The ' - ' operator triggers numeric type coerction, converting both strings into numbers.
console.log(1 + "1")
//11
// Exp : If either operand is a strin, the '+' operator coerces the number into a string and concatenates them.
console.log(1 - "1")
//0
// Exp : the '-' operator converts the string operand to a number and perform numeric subtraction.


//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(+"5")
//        console.log(+"5.5")
//        console.log(+"abc")
//        console.log(typeof +"5")
//        HINT -> UNARY + is the fastest string -> number conversion.
// Answer :
console.log(+"5")
//5
// Unary '+' converts string into the number 5.
console.log(+"5.5")
//5.5
// Unary '+' converts the decimal string into the floating-point number 5.5.
console.log(+"abc")
// NaN
// Unary '+' fails to parse "abc" as a valid numeric valu returning NaN (Not a Number)
console.log(typeof +"5")
// number
// Unary '+' executes "5" into the number 5, and typeof returns "number"


//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(isNaN(Number("hello")))
//        console.log(isNaN("123"))
//        console.log(isNaN("hello123"))
//        console.log(NaN === NaN)
//        HINT -> NaN is not equal to ANYTHING, not even itself. what do we use to detect it ?
// Answer :
console.log(isNaN(Number("hello")))
//true
console.log(isNaN("123"))
//false
console.log(isNaN("hello123"))
//true
console.log(NaN === NaN)
//false

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q12 --> let priceStr = "9.8"
//        Check if parseFloat(priceStr) is equal to 10. if NOT, round it
//        so the result becomes exactly 10, and print the result + its typeof.
//        HINT -> which method ROUNDS to nearest (revision -> lecture 03) ?
// Answer :
let priceStr = "9.8";
let price = parseFloat(priceStr);
if (price !== 10) {price = Math.round(price)}
console.log(price, typeof price)

//Q13 --> let mobileStr = "  9876543210  "
//        Clean the extra spaces, convert it to a NUMBER, and print the number + its typeof.
//        HINT -> chaining -> trim() first (lecture 04), then convert (this lecture).
// Answer :
let mobileStr = "  9876543210  "
let mobileNum = Number(mobileStr.trim())
console.log(mobileNum, typeof mobileNum)

//Q14 --> let amountStr = "199.99"
//        Convert it to a number, add 18% GST on it, and print the final amount
//        in exact 2 decimal format.
//        HINT -> Number() to convert, arithmetic to add tax,
//        .toFixed(2) to format (revision -> lecture 03).
// Answer :
let amountStr = "199.99"
let baseAmount = Number(amountStr)
let totalAmount = (baseAmount * 1.18).toFixed(2)
console.log(totalAmount)


//Q15 --> let otp = 483920
//        Convert this NUMBER to a STRING and print it using a template literal
//        like -> "Your OTP is : 483920"
//        Then print the length of the OTP (how do you get length of a number ?)
//        HINT -> String(otp) first, then .length works.
// Answer :
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
// Answer :
let email = "siddhant.gadakh@gmail.com"
// a) check if the email contains "@" (print true/false)
let hasAtSymbol = email.includes("@")
console.log(hasAtSymbol)
// b) find the index of "@"
let atIndex = email.indexOf("@")
console.log(atIndex)
// c) extract the username part (everything BEFORE the @) using slice()
let username = email.slice(0, atIndex)
console.log(username)

//Q17 --> let val1 = "5"
//        let val2 = "10"
//        WITHOUT converting manually, what do these print ?
//        console.log(val1 + val2)
//        console.log(val1 - val2)
//        Now CONVERT properly and print the CORRECT sum (15) and difference (-5).
//        HINT -> one line joins, the other line does maths. why ?
// Answer :
let val1 = "5"
let val2 = "10"
console.log(val1 + val2)
console.log(val1 - val2)
//510,Both operands are strings.
//-5,js coerces both string into numbers substracting.
//Proper Convarting :
let num1 = Number(val1)
let num2 = Number(val2)
console.log(num1 + num2)//15
console.log(num1 - num2)//-5

//Q18 --> WRITE 3 statements that give a TRUTHY value and 3 statements that give
//        a FALSY value. Prove each one using Boolean(...) in console.log.
//        HINT -> revise the falsy list from the lecture.
// Answer :
//  TRUTHY Statements
console.log(Boolean("hello")) //true - non empty string.
console.log(Boolean(25)) // true - non zero number.
console.log(Boolean([]))  // true - empty array is truthy
// FAlSY Statement
console.log(Boolean(""))// false - empty string
console.log(Boolean(0)) // false - Zero
console.log(Boolean(null)) // false - Null value

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION -> why is typeof NaN === "number" ?
//        Also : why is NaN === NaN false ? and what is the CORRECT way to detect NaN ?
//        HINT -> NaN means the result of FAILED number maths. it is still a number
//        that failed. comparison with NaN can never be true -> what method solves this ?
// Answer :
console.log(typeof NaN) // number
console.log(NaN === NaN) //false
console.log(Number.isNaN(NaN)) //true


//Q20 --> INTERVIEW QUESTION -> Number("") gives 0 but Number(undefined) gives NaN.
//        Explain the difference between an EMPTY STRING and UNDEFINED.
//        HINT -> "" is a real value (empty box), undefined means the box does not exist.
// Answer :
console.log(Number("")) // 0 - An empty string representing zero
console.log(Number(undefined)) // NaN - indicates complete absence of a defined value
 
//Q21 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between
//        parseInt("12.9") and Math.floor(12.9) ?
//        Both LOOK like they give 12. Now check these two and explain :
//        console.log(parseInt("-12.9"))
//        console.log(Math.floor(-12.9))
//        HINT -> parseInt CUTS towards ZERO, Math.floor goes DOWN on the number line.
//        on negative numbers these are NOT the same !
// Answer :
console.log(parseInt("12.9")) // 12
console.log(Math.floor(12.9)) // 12
console.log(parseInt("-12.9"))// -12
console.log(Math.floor(-12.9))// -13

//Q22 --> INTERVIEW QUESTION -> what is the difference between IMPLICIT and EXPLICIT conversion ?
//        Give one example of each from this lecture.
//        HINT -> implicit = JS converts automatically ("5" - 5), explicit = YOU convert (Number("5")).
// Answer :
/* Implicit Convesion :
   Js automaticcally converts data types.
   Explicit Convesion :
   Developer manually converts a value from one data type to another.
*/
// examples :
let resultImlicit = "5" - 5
console.log(resultImlicit) // 0
let resuktExplicit = Number("5") + 5
console.log(resuktExplicit) // 10

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q23 --> BONUS -> STRING CALCULATOR ->
//        let numA = "10"
//        let numB = "20"
//        Both are STRINGS. Calculate and print :
//        sum (30), difference (-10), product (200) -> all as NUMBERS, not "1020" !
//        Print using template literals like "Sum : 30".
//        HINT -> convert once, store in new variables, then do clean maths.
// Answer :
let numA = "10"
let numB = "20"
// Convert and Store in new variables
let a = Number(numA)
let b = Number(numB)
// Calculate results
let sum = a + b
let diff = a - b
let prod = a * b
// print
console.log(`Sum : ${sum}`) //30
console.log(`Difference : ${diff}`) // -10
console.log(`Product : ${prod}`) // 200


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
// Answer :



// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 05_ASSIGNMENT.js
// ============================================
