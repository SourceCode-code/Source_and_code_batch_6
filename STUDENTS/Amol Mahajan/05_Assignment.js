// ============================================
// 05_ASSIGNMENT -> TOPIC : JS DATA TYPE CONVERSION (+ revision of datatypes & numbers)
// BASED ON : LECTURE/05_JS_DataType_Conversion.js  +  THEORY_NOTES/05_JS_DataType_Conversion.md
//
// HOW TO RUN : open terminal -> node 05_ASSIGNMENT_JS_DATA_TYPE_CONVERSION.js
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

//Answer=
let strTen="10"
let numTen = 10
console.log( strTen)
console.log(numTen)
console.log(typeof  strTen)
console.log(typeof numTen)
strTen=Number(strTen)
console.log(strTen)
console.log(typeof strTen)

let bothNum= strTen==numTen
console.log(bothNum)
// strTen is now converted in number


//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number(""))
//       console.log(Number(null))
//       console.log(Number(undefined))
//       console.log(Number(true))
//       console.log(Number(false))
//       HINT -> empty string and null become 0, but undefined becomes NaN. why ?

//Answer= 0,0,NaN,1,0
// undefined is not a number and it becomes NaN because when is not defined the we get NaN

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


//Answer= 53841, 53841.5135, 12, 12.9, NaN
      console.log(parseInt("53841.5135"))
      console.log(parseFloat("53841.5135"))
      console.log(parseInt("12.9abc"))
      console.log(parseFloat("12.9abc"))
      console.log(parseInt("abc12.9"))

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number("ASDFGHJKMNBVC"))
//       console.log(typeof Number("ASDFGHJKMNBVC"))
//       HINT -> can letters become a number ? and what is the DATATYPE of that
//       failed result ? (this is a trick question)

//Answer= NaN, Number
// No we cannot convert letters or words into number
      console.log(Number("ASDFGHJKMNBVC"))
      console.log(typeof Number("ASDFGHJKMNBVC"))

//Q5 --> let number = 7020400749
//       a) convert it to a string using String() and print the typeof
//       b) convert it to a string using toString() and print the typeof
//       HINT -> both give "string". then answer in comments :
//       what happens with String(null) and null.toString() ? (run the first one,
//       the second one gives an ERROR -> write the error message in comments)

//Answer=
let number = 7020400749
console.log(String(number))
console.log(typeof String(number))
console.log(number.toString()) 
console.log(typeof number.toString()) 
//String(null) is null
console.log(String(null))

//console.log(null.toString())
//it will give error as cannot read properties



//Q6 --> Boolean() -> predict the output (write answer as comment, then run and verify)
//       console.log(Boolean("hello"))
//       console.log(Boolean(""))
//       console.log(Boolean(0))
//       console.log(Boolean(100))
//       THEN -> write the 6 falsy values of javascript in comments.
//       HINT -> everything that is NOT in your list is TRUTHY.

//Answers= true,faske, false, true
    console.log(Boolean("hello"))
    console.log(Boolean(""))
    console.log(Boolean(0))
    console.log(Boolean(100))
    console.log(Boolean(0.0))
    console.log(Boolean(null))
    console.log(Boolean(undefined))
    console.log(Boolean(NaN))
    console.log(Boolean(false))



// ------------------- SECTION B : PREDICT THE OUTPUT (COERCION) -------------------

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(5 + 5)
//       console.log(5 + "5")
//       console.log("5" - 5)
//       console.log(5 - "5")
//       console.log("5" * 5)
//       console.log("5" / 5)
//       HINT -> + with ANY string = CONCATENATION. - * / ALWAYS convert to number first.

//Answers= 10, 55,0,0,25,1
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

//Answers= 4,5,5true,5false
      console.log("5" - true)
      console.log("5" - false)
      console.log("5" + true)
      console.log("5" + false)

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("10" + "5")
//       console.log("10" - "5")
//       console.log(1 + "1")
//       console.log(1 - "1")
//       HINT -> same operators, different behaviour. explain EACH result in one line.

//Answers= 105, 5, 11, 0
      console.log("10" + "5")
      console.log("10" - "5")
      console.log(1 + "1")
      console.log(1 - "1")

//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(+"5")
//        console.log(+"5.5")
//        console.log(+"abc")
//        console.log(typeof +"5")
//        HINT -> UNARY + is the fastest string -> number conversion.

//Answers= 5, 5.5, NaN, 5
       console.log(+"5")
       console.log(+"5.5")
       console.log(+"abc")
       console.log(typeof +"5")

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(isNaN(Number("hello")))
//        console.log(isNaN("123"))
//        console.log(isNaN("hello123"))
//        console.log(NaN === NaN)
//        HINT -> NaN is not equal to ANYTHING, not even itself. what do we use to detect it ?

//Answers= true, false, true, false

       console.log(isNaN(Number("hello")))
       console.log(isNaN("123"))
       console.log(isNaN("hello123"))
       console.log(NaN === NaN)

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q12 --> let priceStr = "9.8"
//        Check if parseFloat(priceStr) is equal to 10. if NOT, round it
//        so the result becomes exactly 10, and print the result + its typeof.
//        HINT -> which method ROUNDS to nearest (revision -> lecture 03) ?

//Amswers=
let pricestr = "9.8"
let parsedPrice = parseFloat(pricestr)
console.log(parsedPrice)
console.log(Math.ceil(parsedPrice))
console.log(typeof Math.ceil(parsedPrice))


//Q13 --> let mobileStr = "  9876543210  "
//        Clean the extra spaces, convert it to a NUMBER, and print the number + its typeof.
//        HINT -> chaining -> trim() first (lecture 04), then convert (this lecture).

let mobileStr = "  9876543210  "
let mobileNumber = Number(mobileStr.trim())
console.log(mobileNumber)
console.log(typeof mobileNumber)


//Q14 --> let amountStr = "199.99"
//        Convert it to a number, add 18% GST on it, and print the final amount
//        in exact 2 decimal format.
//        HINT -> Number() to convert, arithmetic to add tax,
//        .toFixed(2) to format (revision -> lecture 03).


//Answers= 
let amountStr = "199.99"
let amountStr1= Number(amountStr.trim())
console.log(amountStr1)

let gstPer= amountStr1*0.18
let totalBill= amountStr1+gstPer
console.log(totalBill)

//Q15 --> let otp = 483920
//        Convert this NUMBER to a STRING and print it using a template literal
//        like -> "Your OTP is : 483920"
//        Then print the length of the OTP (how do you get length of a number ?)
//        HINT -> String(otp) first, then .length works.

//Answers=
let otp = 483920
console.log(otp.toString()) 
console.log(typeof otp.toString()) 
console.log("Your OTP is : 483920")
console.log(otp.toString().length)


//Q16 --> let email = "siddhant.gadakh@gmail.com"
//        a) check if the email contains "@" (print true/false)
//        b) find the index of "@"
//        c) extract the username part (everything BEFORE the @) using slice()
//        HINT -> includes() + indexOf() + slice() -> all from lecture 04,
//        and the conversion here is only mental : everything is already a string :)

//Answers=

 let email = "siddhant.gadakh@gmail.com"
 console.log(email.includes("@"))
 console.log(email.indexOf("@"))
 console.log(email.slice(0,15))

//Q17 --> let val1 = "5"
//        let val2 = "10"
//        WITHOUT converting manually, what do these print ?
//        console.log(val1 + val2)
//        console.log(val1 - val2)
//        Now CONVERT properly and print the CORRECT sum (15) and difference (-5).
//        HINT -> one line joins, the other line does maths. why ?

//Answer= 510, -5,  first answer is 510 because string has been concatnated and -5 because (-, *, / does not work with string and they will perform mth ops)
let val1 = "5"
let val2 = "10"
console.log(val1 + val2)
console.log(val1 - val2)


let number1= Number(val1)
let number2= Number(val2)
console.log(number1)
console.log(number2)
console.log(number1+number2)
console.log(number1-number2)


//Q18 --> WRITE 3 statements that give a TRUTHY value and 3 statements that give
//        a FALSY value. Prove each one using Boolean(...) in console.log.
//        HINT -> revise the falsy list from the lecture.

let falseStatement1= "My Name is Amol"
console.log(falseStatement1.includes("amol"))
console.log(falseStatement1.includes(null))
console.log(falseStatement1.includes(NaN))
console.log(falseStatement1.includes(0))

let truStatement= "I am a QA Engineer working @MNC"
console.log(truStatement.includes("QA"))
console.log(truStatement.includes("@"))
console.log(truStatement.includes("MNC"))


// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION -> why is typeof NaN === "number" ?
//        Also : why is NaN === NaN false ? and what is the CORRECT way to detect NaN ?
//        HINT -> NaN means the result of FAILED number maths. it is still a number
//        that failed. comparison with NaN can never be true -> what method solves this ?

//Answers=
// typeof NaN === "number" because it is speacial value given by IEEE 754
//  NaN === NaN false because NaN is NOT equal to anything and not even to itself
//to detect NaN we use isNaN()


//Q20 --> INTERVIEW QUESTION -> Number("") gives 0 but Number(undefined) gives NaN.
//        Explain the difference between an EMPTY STRING and UNDEFINED.
//        HINT -> "" is a real value (empty box), undefined means the box does not exist.

//Answer= Number("") gives 0 because its an empty string and in number(undefined ) as there is no value if defined hence it will result undefined



//Q21 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between
//        parseInt("12.9") and Math.floor(12.9) ?
//        Both LOOK like they give 12. Now check these two and explain :
//        console.log(parseInt("-12.9"))
//        console.log(Math.floor(-12.9))
//        HINT -> parseInt CUTS towards ZERO, Math.floor goes DOWN on the number line.
//        on negative numbers these are NOT the same !

//Answers= parseInt("12.9") will give output as 12 and earse decimal part
//            Math.floor(12.9) will give output as 12 as well
//       console.log(parseInt("-12.9")) it will result as -12
//       console.log(Math.floor(-12.9)) it will rsult as -13
       console.log(parseInt("-12.9"))
       console.log(Math.floor(-12.9))

//Q22 --> INTERVIEW QUESTION -> what is the difference between IMPLICIT and EXPLICIT conversion ?
//        Give one example of each from this lecture.
//        HINT -> implicit = JS converts automatically ("5" - 5), explicit = YOU convert (Number("5")).

//Answer=
// implicit converts the value automatically and in explicit we will convert the number
// eg:  
let value1 = "5"
let value2 = "10"
console.log(value1 + value2)
console.log(value1 - value2)

let velues1= Number(value1)
let velues2= Number(value2)
let result = (velues1+ velues2)

console.log(typeof result)



// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q23 --> BONUS -> STRING CALCULATOR ->
//        let numA = "10"
//        let numB = "20"
//        Both are STRINGS. Calculate and print :
//        sum (30), difference (-10), product (200) -> all as NUMBERS, not "1020" !
//        Print using template literals like "Sum : 30".
//        HINT -> convert once, store in new variables, then do clean maths.

//Answers= 

       let numA = "10"
       let numB = "20"
let numA1= Number(numA)
let numB1= Number(numB)
let sum= (numA1+numB1)
console.log("Sum of number is "+sum)

let diff= (numA1-numB1)
console.log("Difference of number is "+diff)

let product= (numA1*numB1)
console.log("Product of number is "+product)



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

//Answers=  for null the type of result is object brcause because it is a bug in JS when we give null value
let str= "abc"
let num= 123
let boolean= 1
let unDef= undefined
let nul= null

console.log(typeof str)
console.log(typeof 123)
console.log(typeof boolean)
console.log(typeof undefined)
console.log(typeof null)



// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 05_ASSIGNMENT_JS_DATA_TYPE_CONVERSION.js
// ============================================

