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

let strTen = "10"
let numTen = 10
console.log(typeof strTen === typeof numTen) // false
strTen = Number(strTen)
console.log(typeof strTen === typeof numTen) // true



//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number(""))
//       console.log(Number(null))
//       console.log(Number(undefined))
//       console.log(Number(true))
//       console.log(Number(false))
//       HINT -> empty string and null become 0, but undefined becomes NaN. why ?

console.log(Number(""))//0
console.log(Number(null))//0
console.log(Number(undefined))//NAN
console.log(Number(true))//1
console.log(Number(false))//0
//NAN means Not a Number. It is a special value that indicates that the result of a 
// mathematical operation is undefined or unrepresentable. In this case, 
// when we try to convert undefined to a number, it results in NaN because undefined does 
// not have a numeric representation.

//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(parseInt("53841.5135"))
//       console.log(parseFloat("53841.5135"))
//       console.log(parseInt("12.9abc"))
//       console.log(parseFloat("12.9abc"))
//       console.log(parseInt("abc12.9"))
//       HINT -> parseInt CUTS the decimal (no rounding), parseFloat keeps it,
//       BOTH stop reading at the first character that is not a number.

console.log(parseInt("53841.5135")) //
console.log(parseFloat("53841.5135"))//53841.5135
console.log(parseInt("12.9abc"))//12
console.log(parseFloat("12.9abc"))//12.9
console.log(parseInt("abc12.9")) //NaN

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number("ASDFGHJKMNBVC"))
//       console.log(typeof Number("ASDFGHJKMNBVC"))
//       HINT -> can letters become a number ? and what is the DATATYPE of that
//       failed result ? (this is a trick question)

console.log(Number("ASDFGHJKMNBVC"))//NAN
console.log(typeof Number("ASDFGHJKMNBVC"))// undefined

/*
because NaN is a special value that represents "Not a Number", it is still considered a number
in JavaScript. Therefore, the typeof NaN returns "number".
*/


//Q5 --> let number = 7020400749
//       a) convert it to a string using String() and print the typeof
//       b) convert it to a string using toString() and print the typeof
//       HINT -> both give "string". then answer in comments :
//       what happens with String(null) and null.toString() ? (run the first one,
//       the second one gives an ERROR -> write the error message in comments)

let number = 7020400749
console.log(String(number)) //7020400749
let number_Type = String(number)
console.log(typeof number_Type)//string

console.log(number.toString())//7020400749
console.log(typeof number.toString())//string

console.log(String(null))//"null"
console.log(typeof String(null))//string
// console.log(null.toString()) //TypeError: Cannot read properties of null (reading 'toString')



//Q6 --> Boolean() -> predict the output (write answer as comment, then run and verify)
//       console.log(Boolean("hello"))
//       console.log(Boolean(""))
//       console.log(Boolean(0))
//       console.log(Boolean(100))
//       THEN -> write the 6 falsy values of javascript in comments.
//       HINT -> everything that is NOT in your list is TRUTHY.

console.log(Boolean("hello")) //true //because non-empty string is truthy
console.log(Boolean(""))//false//because empty string is falsy
console.log(Boolean(0))//false//becsause 0 is falsy
console.log(Boolean(100))//true// because any non-zero number is truthy


// 6 falsy values in JavaScript are:
// 1. false
// 2. 0
// 3. -0
// 4. ""
// 5. null
// 6. undefined


// ------------------- SECTION B : PREDICT THE OUTPUT (COERCION) -------------------

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(5 + 5)
//       console.log(5 + "5")
//       console.log("5" - 5)
//       console.log(5 - "5")
//       console.log("5" * 5)
//       console.log("5" / 5)
//       HINT -> + with ANY string = CONCATENATION. - * / ALWAYS convert to number first.

console.log(5 + 5)//10
console.log(5 + "5")//55
console.log("5" - 5)//0
console.log(5 - "5")//0
console.log("5" * 5)//25
console.log("5" / 5)//1



//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("5" - true)
//       console.log("5" - false)
//       console.log("5" + true)
//       console.log("5" + false)
//       HINT -> true = 1 and false = 0 in maths.
//       but + with a string does CONCAT, not maths. think twice for each line.

console.log("5" - true)//1
console.log("5" - false)//5
console.log("5" + true)//5true
console.log("5" + false)//5false


//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("10" + "5")
//       console.log("10" - "5")
//       console.log(1 + "1")
//       console.log(1 - "1")
//       HINT -> same operators, different behaviour. explain EACH result in one line.

console.log("10" + "5")//105
console.log("10" - "5")//5
console.log(1 + "1")//11
console.log(1 - "1")//0


//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(+"5")
//        console.log(+"5.5")
//        console.log(+"abc")
//        console.log(typeof +"5")
//        HINT -> UNARY + is the fastest string -> number conversion.

console.log(+"5")//5
console.log(+"5.5")//5.5
console.log(+"abc")//NaN
console.log(typeof +"5")//number
/*because the unary plus operator (+) is used to convert a string to a number.
In the first two cases, the strings "5" and "5.5" are successfully converted to numbers 5 and 5.5 respectively.
In the third case, the string "abc" cannot be converted to a number, so it results in NaN (Not a Number).
The typeof operator returns "number" for the first case because the result of +"5" is a number.*/

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(isNaN(Number("hello")))
//        console.log(isNaN("123"))
//        console.log(isNaN("hello123"))
//        console.log(NaN === NaN)
//        HINT -> NaN is not equal to ANYTHING, not even itself. what do we use to detect it ?

console.log(isNaN(Number("hello")))//true
console.log(isNaN("123"))//false
console.log(isNaN("hello123"))//true
console.log(NaN === NaN)//false
/*because NaN is not equal to anything, not even itself.
 To detect NaN, we can use the isNaN() function or the Number.isNaN() method.
*/

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q12 --> let priceStr = "9.8"
//        Check if parseFloat(priceStr) is equal to 10. if NOT, round it
//        so the result becomes exactly 10, and print the result + its typeof.
//        HINT -> which method ROUNDS to nearest (revision -> lecture 03) ?
let priceStr = "9.8"
console.log(parseFloat(priceStr))//9.8
console.log(parseFloat(priceStr) === 10)//false
let round_priceStr = Math.round(parseFloat(priceStr))
console.log(round_priceStr)//10
console.log(typeof round_priceStr)//number


//Q13 --> let mobileStr = "  9876543210  "
//        Clean the extra spaces, convert it to a NUMBER, and print the number + its typeof.
//        HINT -> chaining -> trim() first (lecture 04), then convert (this lecture).
let mobileStr = "  9876543210  "
mobileStr = mobileStr.trim()
console.log(mobileStr)
console.log(typeof mobileStr)


//Q14 --> let amountStr = "199.99"
//        Convert it to a number, add 18% GST on it, and print the final amount
//        in exact 2 decimal format.
//        HINT -> Number() to convert, arithmetic to add tax,
//        .toFixed(2) to format (revision -> lecture 03).

let amountStr = "199.99"
let amountNum = Number(amountStr)
console.log(amountNum)//199.99
console.log((amountNum + (amountNum * 0.18)).toFixed(2))//235.99


//Q15 --> let otp = 483920
//        Convert this NUMBER to a STRING and print it using a template literal
//        like -> "Your OTP is : 483920"
//        Then print the length of the OTP (how do you get length of a number ?)
//        HINT -> String(otp) first, then .length works.

let otp = 483920
console.log(`Your OTP is : ${String(otp)}`)//Your OTP is : 483920
console.log(`Length Of OTP : ${String(otp).length}`)//Length Of OTP : 6



//Q16 --> let email = "siddhant.gadakh@gmail.com"
//        a) check if the email contains "@" (print true/false)
//        b) find the index of "@"
//        c) extract the username part (everything BEFORE the @) using slice()
//        HINT -> includes() + indexOf() + slice() -> all from lecture 04,
//        and the conversion here is only mental : everything is already a string :)

let email = "siddhant.gadakh@gmail.com"
console.log(email.includes("@"))//true
console.log(email.indexOf("@"))//15
console.log(email.slice(0, 15))//siddhant.gadakh
console.log(email.slice(0, email.indexOf("@")))//siddhant.gadakh


//Q17 --> let val1 = "5"
//        let val2 = "10"
//        WITHOUT converting manually, what do these print ?
//        console.log(val1 + val2)
//        console.log(val1 - val2)
//        Now CONVERT properly and print the CORRECT sum (15) and difference (-5).
//        HINT -> one line joins, the other line does maths. why ?

let val1 = "5"
let val2 = "10"
//without converting it--
console.log(val1 + val2) // "510"
console.log(val1 - val2) // -5


//converting string to number 

let num1 = Number(val1)
let num2 = Number(val2)
console.log(num1 + num2)//15
console.log(num1 - num2)//-5


//Q18 --> WRITE 3 statements that give a TRUTHY value and 3 statements that give
//        a FALSY value. Prove each one using Boolean(...) in console.log.
//        HINT -> revise the falsy list from the lecture.
// false, 0, "" (empty string), null, undefined, NaN
let truthy1 = "hello"
let truthy2 = 100
let truthy3 = true
let truthy4 = "name234"

// console.log(Boolean(truthy1))//true
// console.log(Boolean(truthy2))//true
// console.log(Boolean(truthy3))//true
// console.log(Boolean(truthy4))//true

let falsy1 = "false"
let falsy2 = 0
let falsy3 = "NAN"
let falsy4 = undefined
let falsy5 = null
let falsy6 = ""


console.log(Boolean(falsy1))//true
console.log(Boolean(falsy2))//false
console.log(Boolean(falsy3))//true
console.log(Boolean(falsy4))//false
console.log(Boolean(falsy5))//false
console.log(Boolean(falsy6))//false


// // ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION -> why is typeof NaN === "number" ?
//        Also : why is NaN === NaN false ? and what is the CORRECT way to detect NaN ?
//        HINT -> NaN means the result of FAILED number maths. it is still a number
//        that failed. comparison with NaN can never be true -> what method solves this ?

// why is typeof NaN === "number" ?
//the typeOf NAN ==="number" because returns true beacause javascript classifies NaN as a special numeric value.


//  why is NaN === NaN false ? 
// In Javascripts ,NaN returns false beacause Javascripts defines NaN as unequal to every value ,including itself.

// what is the CORRECT way to detect NaN ?
// the correct way to detect NaN is Number.isNaN()
//  let value =NaN
console.log(Number.isNaN(NaN)) //true




//Q20 --> INTERVIEW QUESTION -> Number("") gives 0 but Number(undefined) gives NaN.
//        Explain the difference between an EMPTY STRING and UNDEFINED.
//        HINT -> "" is a real value (empty box), undefined means the box does not exist.


/* EMPTY STRING-- ("") A string value that contains zero characters.


 UNDEFINED.-- A value that usually indicates a variable has been declared but has not been assigned a value.


*/

//Q21 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between
//        parseInt("12.9") and Math.floor(12.9) ?
//        Both LOOK like they give 12. Now check these two and explain :
//        console.log(parseInt("-12.9"))
//        console.log(Math.floor(-12.9))
//        HINT -> parseInt CUTS towards ZERO, Math.floor goes DOWN on the number line.
//        on negative numbers these are NOT the same !


console.log(parseInt("12.9"))//12
//here the parseInt() extracts a whole number from a string. 

console.log(Math.floor(12.9))//12
// here the math.floor() this method round the number down to nearest integer .


//Q22 --> INTERVIEW QUESTION -> what is the difference between IMPLICIT and EXPLICIT conversion ?
//        Give one example of each from this lecture.
//        HINT -> implicit = JS converts automatically ("5" - 5), explicit = YOU convert (Number("5")).

/* 
IMPLICIT--> implicite conversion means Javascripts automatically converts a value  from one data type to another.
              let a ="10"
              let b=5 
              console.log(a+b) //105
EXPLICIT--> explicite conversion means the programer manually convert a number from one data type to another.
         using functions such as Number(),String().
         let c ="10"
         let d=Number(c)
         console.log(d)//10
         console.log(typeof d) //number
*/
let c = "10"
let d = Number(c)
console.log(d)//10
console.log(typeof (d))


// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q23 --> BONUS -> STRING CALCULATOR ->
//        let numA = "10"
//        let numB = "20"
//        Both are STRINGS. Calculate and print :
//        sum (30), difference (-10), product (200) -> all as NUMBERS, not "1020" !
//        Print using template literals like "Sum : 30".
//        HINT -> convert once, store in new variables, then do clean maths.

let numA = "10"
let numB = "20"

console.log(Number(numA) + Number(numB)) //30
console.log(Number(numA) - Number(numB))//-10
console.log(Number(numA) * Number(numB))//200


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

let str = "hello"
let num_new=1233
let bool = true
let undef =undefined
let null_1 = null
console.log(typeof(str)) //string
console.log(typeof(num_new))//number
console.log(typeof(bool))//boolean
console.log(typeof(undef) )//undefined
console.log(typeof(null_1) )//object



// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 05_ASSIGNMENT_JS_DATA_TYPE_CONVERSION.js
// ============================================

