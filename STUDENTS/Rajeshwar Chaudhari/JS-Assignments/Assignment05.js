// ============================================
// 05_ASSIGNMENT -> TOPIC : JS DATA TYPE CONVERSION (+ revision of datatypes & numbers)
// BASED ON : LECTURE/05_JS_DataType_Conversion.js  +  THEORY_NOTES/05_JS_DataType_Conversion.md
//
// HOW TO RUN : open terminal -> node 05_ASSIGNMENT_JS_DATA_TYPE_CONVERSION.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : BASICS -------------------

//Q1 -->
     let strTen = "10"
     let numTen = 10
//       Check if the typeof strTen is EXACTLY equal to typeof numTen.
//       Then convert strTen to a number and check again. Print both results.
//       HINT -> typeof strTen === typeof numTen  -> what comes first time ?
//       after Number(strTen) what changes ?
console.log(typeof(strTen) === typeof(numTen)); //false
strTen = Number(strTen)
console.log(typeof(strTen) === typeof(numTen));


// Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//     console.log(Number(""))
//       console.log(Number(null))
//       console.log(Number(undefined))
//      console.log(Number(true))
//        console.log(Number(false))
//       HINT -> empty string and null become 0, but undefined becomes NaN. why ?
// Number("") -> 0  : the string EXISTS but simply has no digits inside.
//                    JS trims whitespace, finds nothing left, and by SPEC says
//                    "empty string = zero digits = 0".  ( even "   " whitespace-only -> 0 )
//
// Number(null) -> 0 : null means "deliberately empty" - an empty box.
//                    The SPEC rule is : ToNumber(null) = 0. Designers chose 0 so that
//                    math with an "empty but present" value still works.
//
// Number(undefined) -> NaN : undefined means "this value was NEVER SET / doesn't exist at all".
//                    There is no meaningful number for something that isn't there,
//                    so the SPEC rule is : ToNumber(undefined) = NaN.
//
// MEMORY TRICK : "" and null = "empty" ( emptiness can be counted as 0 )
//                undefined  = "missing" ( you cannot count what does not exist -> NaN )



//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(parseInt("53841.5135")) //53841
//       console.log(parseFloat("53841.5135")) //53841.5135
//       console.log(parseInt("12.9abc")) //12
//       console.log(parseFloat("12.9abc")) //12.9
//       console.log(parseInt("abc12.9")) //NaN
//       HINT -> parseInt CUTS the decimal (no rounding), parseFloat keeps it,
//       BOTH stop reading at the first character that is not a number.



//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Number("ASDFGHJKMNBVC")) //NaN
    //  console.log(typeof Number("ASDFGHJKMNBVC"))  //Number
//       HINT -> can letters become a number ? and what is the DATATYPE of that
//       failed result ? (this is a trick question)


//Q5 --> 
 let number = 7020400749
//       a) convert it to a string using String() and print the typeof
//       b) convert it to a string using toString() and print the typeof
//       HINT -> both give "string". then answer in comments :
//       what happens with String(null) and null.toString() ? (run the first one,
//       the second one gives an ERROR -> write the error message in comments)

console.log(typeof(String(number)));
console.log(typeof(number.toString()));
console.log(typeof(String(null)));
//console.log(typeof(null.toString())); //TypeError: Cannot read properties of null (reading 'toString')



//Q6 --> Boolean() -> predict the output (write answer as comment, then run and verify)
//       console.log(Boolean("hello")) //True
//       console.log(Boolean("")) //False
//       console.log(Boolean(0)) //False
//       console.log(Boolean(100)) //True
//       THEN -> write the 6 falsy values of javascript in comments.
//       HINT -> everything that is NOT in your list is TRUTHY.
// False, 0, "", null, undefined, NaN


// ------------------- SECTION B : PREDICT THE OUTPUT (COERCION) -------------------

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(5 + 5) 10
//       console.log(5 + "5") 55
//       console.log("5" - 5) 0
//       console.log(5 - "5") 0
//       console.log("5" * 5) 25
//       console.log("5" / 5) 1
//       HINT -> + with ANY string = CONCATENATION. - * / ALWAYS convert to number first.

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("5" - true)  4
//       console.log("5" - false)  5
//       console.log("5" + true)   6
//       console.log("5" + false)  5
//       HINT -> true = 1 and false = 0 in maths.
//       but + with a string does CONCAT, not maths. think twice for each line.

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
    //   console.log("10" + "5") //105
    //    console.log("10" - "5")   //5
    //    console.log(1 + "1")  //11
    //    console.log(1 - "1")  //  0
//       HINT -> same operators, different behaviour. explain EACH result in one line.


//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
    //     console.log(+"5") 5
    //     console.log(+"5.5") 5.5 
    //    console.log(+"abc")  NaN 
    //    console.log(typeof +"5") Number // Unary 
//        HINT -> UNARY + is the fastest string -> number conversion.

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
       console.log(isNaN(Number("hello"))) //True
       console.log(isNaN("123")) //False
       console.log(isNaN("hello123")) //True
       console.log(NaN === NaN) //True
//        HINT -> NaN is not equal to ANYTHING, not even itself. what do we use to detect it ?
// To identify the unknowns:
// `NaN` means "an unknown/failed number," and IEEE 754 says an unknown can never be *equal* to anything — not even another unknown, 
// not even itself. That's exactly why `isNaN()` / `Number.isNaN()` were created: equality checks are useless against NaN.


// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q12 --> 
let priceStr = "9.8";
//        Check if parseFloat(priceStr) is equal to 10. if NOT, round it
//        so the result becomes exactly 10, and print the result + its typeof.
//        HINT -> which method ROUNDS to nearest (revision -> lecture 03) ?
console.log(Math.round(parseFloat(priceStr))) //10
console.log(typeof(Math.round(parseFloat(priceStr)))) //Number 

//Q13 --> 
 let mobileStr = "  9876543210  ";
//        Clean the extra spaces, convert it to a NUMBER, and print the number + its typeof.
//        HINT -> chaining -> trim() first (lecture 04), then convert (this lecture).
console.log(Number(mobileStr.trim()))
console.log(typeof(Number(mobileStr.trim())))

//Q14 --> 
let amountStr = "199.99"
//        Convert it to a number, add 18% GST on it, and print the final amount
//        in exact 2 decimal format.
//        HINT -> Number() to convert, arithmetic to add tax,
//        .toFixed(2) to format (revision -> lecture 03).

let GSTAmount = Number(amountStr)*18/100
console.log((Number(amountStr)+GSTAmount).toFixed(2));
 


//Q15 -->
 let otp = 483920
//        Convert this NUMBER to a STRING and print it using a template literal
//        like -> "Your OTP is : 483920"
//        Then print the length of the OTP (how do you get length of a number ?)
//        HINT -> String(otp) first, then .length works.
console.log(String(otp).length);
console.log(`Your OTP is : ${String(otp)}`);



//Q16 --> 
 let email = "siddhant.gadakh@gmail.com";
//        a) check if the email contains "@" (print true/false)
//        b) find the index of "@"
//        c) extract the username part (everything BEFORE the @) using slice()
//        HINT -> includes() + indexOf() + slice() -> all from lecture 04,
//        and the conversion here is only mental : everything is already a string :)
console.log(email.includes('@'));
console.log(email.indexOf('@'));
console.log(email.slice(0,(email.indexOf('@'))));



//Q17 --> 
 let val1 = "5"
        let val2 = "10"
//        WITHOUT converting manually, what do these print ?
//        console.log(val1 + val2) //510
//        console.log(val1 - val2) //-5
//        Now CONVERT properly and print the CORRECT sum (15) and difference (-5).
//        HINT -> one line joins, the other line does maths. why ?
// - (Minus) converts the string to the right in number
console.log(Number(val1) + Number(val2));
console.log(Number(val1 - val2));


//Q18 --> WRITE 3 statements that give a TRUTHY value and 3 statements that give
//        a FALSY value. Prove each one using Boolean(...) in console.log.
//        HINT -> revise the falsy list from the lecture.
console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean("Truthy"));
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(NaN));

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION -> why is typeof NaN === "number" ?
//        Also : why is NaN === NaN false ? and what is the CORRECT way to detect NaN ?
//        HINT -> NaN means the result of FAILED number maths. it is still a number
//        that failed. comparison with NaN can never be true -> what method solves this ?
// isNaN()

//Q20 --> INTERVIEW QUESTION -> Number("") gives 0 but Number(undefined) gives NaN.
//        Explain the difference between an EMPTY STRING and UNDEFINED.
//        HINT -> "" is a real value (empty box), undefined means the box does not exist.
//the string EXISTS but simply has no digits inside.
// JS trims whitespace, finds nothing left, and by SPEC says
// "empty string = zero digits = 0".  ( even "   " whitespace-only -> 0 )
//undefined means "this value was NEVER SET / doesn't exist at all".
//  There is no meaningful number for something that isn't there,
//   so the SPEC rule is : ToNumber(undefined) = NaN.

//Q21 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between
//        parseInt("12.9") and Math.floor(12.9) ?
//        Both LOOK like they give 12. Now check these two and explain :
//        console.log(parseInt("-12.9")) -12
//        console.log(Math.floor(-12.9)) -13
//        HINT -> parseInt CUTS towards ZERO, Math.floor goes DOWN on the number line.
//        on negative numbers these are NOT the same !

//Q22 --> INTERVIEW QUESTION -> what is the difference between IMPLICIT and EXPLICIT conversion ?
//        Give one example of each from this lecture.
//        HINT -> implicit = JS converts automatically ("5" - 5), explicit = YOU convert (Number("5")).
// Unary - Implicit
// Number() / String() - Explicit

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q23 --> BONUS -> STRING CALCULATOR ->
       let numA = "10"
      let numB = "20"
//        Both are STRINGS. Calculate and print :
//        sum (30), difference (-10), product (200) -> all as NUMBERS, not "1020" !
//        Print using template literals like "Sum : 30".
//        HINT -> convert once, store in new variables, then do clean maths.
let convertedNumA = Number(numA);
let convertedNumB = Number(numB);
console.log(`Sum: ${convertedNumA+convertedNumB} | Difference: ${convertedNumA-convertedNumB} | Product: ${convertedNumA*convertedNumB}`);

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
let aString = "abc";
let aNum = 123;
let aBoolean = true;
let aUndefined = undefined;
let aNull = null;
console.log(`${aString} --> ${typeof(aString)}`);
console.log(`${aNum} --> ${typeof(aNum)}`);
console.log(`${aBoolean} --> ${typeof(aBoolean)}`);
console.log(`${aUndefined} --> ${typeof(aUndefined)}`);
console.log(`${aNull} --> ${typeof(aNull)}`);

// ===========================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 05_ASSIGNMENT_JS_DATA_TYPE_CONVERSION.js
// ============================================

