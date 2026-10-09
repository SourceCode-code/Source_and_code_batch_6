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
//Answer:- 
let strTen = "10" // String
let numTen = 10   // number
// Check if the typeof strTen is EXACTLY equal to typeof numTen.
console.log(typeof strTen === typeof numTen)  // false

// convert strTen to a number and check again
strTen = Number(strTen)
console.log(typeof strTen === typeof numTen)  // True


//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number(""))
//       console.log(Number(null))
//       console.log(Number(undefined))
//       console.log(Number(true))
//       console.log(Number(false))
//       HINT -> empty string and null become 0, but undefined becomes NaN. why ?
//Answer:- 
console.log(Number(""))          //0 -Empty string represents no characters, so numeric conversion gives 0
console.log(Number(null))        //0 -null represents an intentional absence of a value and converts to 0
console.log(Number(undefined))   //NaN -undefined means the value has not been assigned, so it cannot be converted to a meaningful number
console.log(Number(true))        //1 - Boolean true converts to 1
console.log(Number(false))       //0 - Boolean false converts to 0


//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(parseInt("53841.5135"))
//       console.log(parseFloat("53841.5135"))
//       console.log(parseInt("12.9abc"))
//       console.log(parseFloat("12.9abc"))
//       console.log(parseInt("abc12.9"))
//       HINT -> parseInt CUTS the decimal (no rounding), parseFloat keeps it,
//       BOTH stop reading at the first character that is not a number.
//Answer:- 
console.log(parseInt("53841.5135"))   //53841
console.log(parseFloat("53841.5135")) //53841.5135 
console.log(parseInt("12.9abc"))      //12 character not print so stop
console.log(parseFloat("12.9abc"))    //12.9 
console.log(parseInt("abc12.9"))      //NaN - 
//parseInt()   → integer → removes decimal
//parseFloat() → decimal → keeps decimal
// "12.9abc"  → 12 / 12.9
// "abc12.9"  → NaN


//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number("ASDFGHJKMNBVC"))
//       console.log(typeof Number("ASDFGHJKMNBVC"))
//       HINT -> can letters become a number ? and what is the DATATYPE of that
//       failed result ? (this is a trick question)
//Answer:- 
console.log(Number("ASDFGHJKMNBVC")) // NaN -no
console.log(typeof Number("ASDFGHJKMNBVC")) // number


//Q5 --> let number = 7020400749
//       a) convert it to a string using String() and print the typeof
//       b) convert it to a string using toString() and print the typeof
//       HINT -> both give "string". then answer in comments :
//       what happens with String(null) and null.toString() ? (run the first one,
//       the second one gives an ERROR -> write the error message in comments)
//Answer:- 
 let number = 7020400749
//a) convert it to a string using String() and print the typeof
let str  = String(number)
console.log(str)        //7020400749
console.log(typeof str) // string

//b) convert it to a string using toString() and print the typeof
let str1 = number.toString()
console.log(str1)        //7020400749
console.log(typeof str1) // string

// What happens with null?
console.log(String(null)); // "null"
// null.toString();
// ERROR: TypeError: Cannot read properties of null (reading 'toString')


//Q6 --> Boolean() -> predict the output (write answer as comment, then run and verify)
//       console.log(Boolean("hello"))
//       console.log(Boolean(""))
//       console.log(Boolean(0))
//       console.log(Boolean(100))
//       THEN -> write the 6 falsy values of javascript in comments.
//       HINT -> everything that is NOT in your list is TRUTHY.
//Answer:- 
console.log(Boolean("hello")) //true
console.log(Boolean(""))      //false
console.log(Boolean(0))       //true
console.log(Boolean(100))     //false

// 6 FALSY VALUES IN JAVASCRIPT:
// 1. false
// 2. 0
// 3. -0
// 4. 0n
// 5. ""
// 6. null
// 7. undefined
// 8. NaN
/*
Boolean("hello") // true
Boolean("0")     // true  ← string is not empty
Boolean(100)     // true
Boolean([])      // true
Boolean({})      // true
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
//Answer:- 
console.log(5 + 5)   //10
console.log(5 + "5") //55
console.log("5" - 5) //0
console.log(5 - "5") //0
console.log("5" * 5) //25
console.log("5" / 5) //1

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("5" - true)
//       console.log("5" - false)
//       console.log("5" + true)
//       console.log("5" + false)
//       HINT -> true = 1 and false = 0 in maths.
//       but + with a string does CONCAT, not maths. think twice for each line.
//Answer:- 
console.log("5" - true) //4 - 5-1 =4
console.log("5" - false)//5 - 5-0 =1
console.log("5" + true) //5true concate
console.log("5" + false)//5false

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("10" + "5")
//       console.log("10" - "5")
//       console.log(1 + "1")
//       console.log(1 - "1")
//       HINT -> same operators, different behaviour. explain EACH result in one line.
//Answer:- 
console.log("10" + "5") //105 string concatination
console.log("10" - "5") //5 → numeric conversion
console.log(1 + "1")    //11+ with a string → concatenation
console.log(1 - "1")    //0 → numeric conversion


//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(+"5")
//        console.log(+"5.5")
//        console.log(+"abc")
//        console.log(typeof +"5")
//        HINT -> UNARY + is the fastest string -> number conversion.
//Answer:- 
console.log(+"5") //5
console.log(+"5.5") // 5.5
console.log(+"abc") //NaN
console.log(typeof +"5") //number

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log(isNaN(Number("hello")))
//        console.log(isNaN("123"))
//        console.log(isNaN("hello123"))
//        console.log(NaN === NaN)
//        HINT -> NaN is not equal to ANYTHING, not even itself. what do we use to detect it ?
//Answer:- 
console.log(isNaN(Number("hello"))) // True Number("hello") returns NaN because "hello" cannot be converted to a valid number.
console.log(isNaN("123"))           // False The global isNaN() converts "123" to the number 123 before checking it.
console.log(isNaN("hello123"))      // true "hello123" cannot be converted into a valid number.
console.log(NaN === NaN)            // false NaN means Not a Number.It is not equal to itself, even when using strict equality (===).
/*
Note:- 
Use Number.isNaN() when you want to check whether a value is specifically NaN.
isNaN() converts the value to a number before checking.
Number.isNaN() does not convert the value; it returns true only if the value is actually NaN.
*/

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q12 --> let priceStr = "9.8"
//        Check if parseFloat(priceStr) is equal to 10. if NOT, round it
//        so the result becomes exactly 10, and print the result + its typeof.
//        HINT -> which method ROUNDS to nearest (revision -> lecture 03) ?
//Answer:- 
let priceStr = "9.8"
if (parseFloat(priceStr) !== 10){
        priceStr = Math.round(parseFloat(priceStr))
}
console.log(priceStr)        // 10
console.log(typeof priceStr) // number


//Q13 --> let mobileStr = "  9876543210  "
//        Clean the extra spaces, convert it to a NUMBER, and print the number + its typeof.
//        HINT -> chaining -> trim() first (lecture 04), then convert (this lecture).
//Answer:- 
let mobileStr = "  9876543210  "
mobileStr = Number(mobileStr.trim()) //Clean the extra spaces
console.log(mobileStr)          // 9876543210
console.log(typeof mobileStr)   // number
/*
Note:-
1. trim() removes extra spaces from the beginning and end of the string.
2. Number() converts the cleaned string into a number.
3. console.log() prints the number and its data type.
*/

//Q14 --> let amountStr = "199.99"
//        Convert it to a number, add 18% GST on it, and print the final amount
//        in exact 2 decimal format.
//        HINT -> Number() to convert, arithmetic to add tax,
//        .toFixed(2) to format (revision -> lecture 03).
//Answer:- 
 let amountStr = "199.99"

//Convert it to a number
 let amount = Number(amountStr) //Number(amountStr) converts "199.99" into the number 199.99.

//add 18% GST on it
let finalAmount = amount+(amount*18/100) //amount * 18 / 100 calculates 18% GST, which is approximately 36.00.

//print the final amount
console.log(finalAmount.toFixed(2)) //amount + GST gives the final amount of 235.9882.

//Q15 --> let otp = 483920
//        Convert this NUMBER to a STRING and print it using a template literal
//        like -> "Your OTP is : 483920"
//        Then print the length of the OTP (how do you get length of a number ?)
//        HINT -> String(otp) first, then .length works.
//Answer:- 
let otp = 483920

//Convert this NUMBER to a STRING 
let otpStr = String(otp)

//print it using a template literal
console.log(`Your OTP is : ${otpStr}`);  // template literal:- Your OTP is : 483920

//print lenght
console.log(otpStr.length) // lenght:- 6

//Q16 --> let email = "siddhant.gadakh@gmail.com"
//        a) check if the email contains "@" (print true/false)
//        b) find the index of "@"
//        c) extract the username part (everything BEFORE the @) using slice()
//        HINT -> includes() + indexOf() + slice() -> all from lecture 04,
//        and the conversion here is only mental : everything is already a string :)
//Answer:- 
let email = "siddhant.gadakh@gmail.com"

//a) check if the email contains "@" (print true/false)
console.log(email.includes("@"))  // Output:- true
//Checks whether the email contains the @ symbol. It returns true if found and false otherwise.

//b) find the index of "@"
console.log(email.indexOf("@"))  //output :-index 15
//Returns the index (position) of the first @ symbol. JavaScript string indexes start at 0, so the index is 16.

//c) extract the username part (everything BEFORE the @) using slice()
let username = email.slice(0 , email.indexOf("@"))
// 0 is the starting index. email.indexOf("@") gives the ending index, 16. slice() extracts characters from index 0 up to, but not including, index 16. 

//print
console.log(username) // output:- siddhant.gadakh


//Q17 --> let val1 = "5"
//        let val2 = "10"
//        WITHOUT converting manually, what do these print ?
//        console.log(val1 + val2)
//        console.log(val1 - val2)
//        Now CONVERT properly and print the CORRECT sum (15) and difference (-5).
//        HINT -> one line joins, the other line does maths. why ?
//Answer:- 
let val1 = "5"
let val2 = "10"
//WITHOUT converting manually, what do these print ?
// consol.log(val1 + val2)  // output:- 510
// consol.log(val1 - val2)  // output:- -5

//Now CONVERT string to number properly 
let numA = Number(val1)
let numB = Number(val2)

//print covert value
console.log(numA + numB)
console.log(numA - numB)


//Q18 --> WRITE 3 statements that give a TRUTHY value and 3 statements that give
//        a FALSY value. Prove each one using Boolean(...) in console.log.
//        HINT -> revise the falsy list from the lecture.
//Answer:- 
// true value
console.log(Boolean("Hello"))
console.log(Boolean(10))
console.log(Boolean([]))

//false value
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(""))
//false, 0, -0, 0n, "", null, undefined, and NaN.
//Empty arrays [] and empty objects {} are truthy in JavaScript, even though they contain no elements or properties.

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION -> why is typeof NaN === "number" ?
//        Also : why is NaN === NaN false ? and what is the CORRECT way to detect NaN ?
//        HINT -> NaN means the result of FAILED number maths. it is still a number
//        that failed. comparison with NaN can never be true -> what method solves this ?
//Answer:- 
console.log(typeof NaN);           // "number"
console.log(typeof NaN === "number"); // true
//NaN stands for Not-a-Number. It is a special numeric value that represents an invalid or unrepresentable numerical result. That is why JavaScript considers its data type to be "number".
//In JavaScript, NaN is not equal to any value, including itself. Therefore, even strict equality (===) returns false.

//Q20 --> INTERVIEW QUESTION -> Number("") gives 0 but Number(undefined) gives NaN.
//        Explain the difference between an EMPTY STRING and UNDEFINED.
//        HINT -> "" is a real value (empty box), undefined means the box does not exist.
//Answer:- 
console.log(typeof "");     // "string"
console.log(Number(""));    // 0
//Empty string: ""
//Think of a box that exists but contains nothing.
//Number("") → 0

//An empty string ("") is a valid string value containing zero characters.
//undefined indicates a missing or unassigned value. Since it does not represent a valid numeric value, Number(undefined) returns NaN.


//Q21 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between
//        parseInt("12.9") and Math.floor(12.9) ?
//        Both LOOK like they give 12. Now check these two and explain :
//        console.log(parseInt("-12.9"))
//        console.log(Math.floor(-12.9))
//        HINT -> parseInt CUTS towards ZERO, Math.floor goes DOWN on the number line.
//        on negative numbers these are NOT the same !
//Answer:- 
console.log(parseInt("12.9"));    // 12 extracts an integer from a string
console.log(Math.floor(12.9));    // 12 Math.floor() — rounds down to the nearest integer

console.log(parseInt("-12.9"));   // -12
console.log(Math.floor(-12.9));   // -13


//Q22 --> INTERVIEW QUESTION -> what is the difference between IMPLICIT and EXPLICIT conversion ?
//        Give one example of each from this lecture.
//        HINT -> implicit = JS converts automatically ("5" - 5), explicit = YOU convert (Number("5")).
//Answer:- 
//Implicit Definition: Implicit conversion happens when JavaScript automatically converts a value from one data type to another without you explicitly asking it to.
console.log("5" - 5); // 0


//EXPLICIT Definition: Explicit conversion happens when the programmer manually converts a value into another data type using a function such as Number(), String(), or Boolean().
console.log(Number("5")); // 5

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q23 --> BONUS -> STRING CALCULATOR ->
//        let numA = "10"
//        let numB = "20"
//        Both are STRINGS. Calculate and print :
//        sum (30), difference (-10), product (200) -> all as NUMBERS, not "1020" !
//        Print using template literals like "Sum : 30".
//        HINT -> convert once, store in new variables, then do clean maths.
//Answer:- 
let num_A = "10"
let num_B = "20"

// Convert strings to numbers once
let a = Number(num_A);
let b = Number(num_B);

// Perform mathematical operations
let sum = a + b
let difference = a - b
let product = a * b

//Print using template literals like "Sum : 30".
console.log(`Sum : ${sum}`)
console.log(`difference: ${difference}`)
console.log(`product : ${product}`)

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
//Answer:- 
let str_1 = "Farheen";
let num = 8459053694;
let bool = true;
let value;
let emptyValue = null;

// Print report using template literals and typeof
console.log(`${str_1} -> ${typeof str_1}`);
console.log(`${num} -> ${typeof num}`);
console.log(`${bool} -> ${typeof bool}`);
console.log(`${value} -> ${typeof value}`);
console.log(`${emptyValue} -> ${typeof emptyValue}`);

// Explanation:
// typeof null returns "object", not "null".
// This is a famous historical quirk in JavaScript. 




// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 05_ASSIGNMENT.js
// ============================================

