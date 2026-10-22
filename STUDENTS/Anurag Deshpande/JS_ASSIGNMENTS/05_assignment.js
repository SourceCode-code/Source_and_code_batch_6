console.log("=============================================")
console.log("Section A")
console.log("=============================================")
//Q1 --> let strTen = "10"
console.log("Q1")
//       let numTen = 10
let strTen = "10"
let numTen = 10
//       Check if the typeof strTen is EXACTLY equal to typeof numTen.
//       Then convert strTen to a number and check again. Print both results.
//       HINT -> typeof strTen === typeof numTen  -> what comes first time ?
//       after Number(strTen) what changes ?git add. 
console.log(typeof strTen) // string
console.log(typeof numTen) // number
console.log(typeof strTen === typeof numTen) // false
let strTen1 = Number(strTen) 
console.log(strTen1) // 10
console.log(typeof strTen1 === typeof numTen) // true

console.log("=============================================")

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q2") 
console.log(Number("")) //0 it shaows and empty string so converts to 0 
console.log(Number(null)) //0  null says no value, so it will shows 0
console.log(Number(undefined)) //naN undefined meaning has no values is assigned so it will show naN
console.log(Number(true)) // 1 
console.log(Number(false)) //0

//HINT -> empty string and null become 0, but undefined becomes NaN. why ?
console.log("==========================================")
//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q3")
console.log(parseInt("53841.5135")) //53841  parseInt keeps only the intger part 
console.log(parseFloat("53841.5135")) // 53840.5135  parseFloat keeps the decimal part 
console.log(parseInt("12.9abc")) //12 
console.log(parseFloat("12.9abc")) //12.9
console.log(parseInt("abc12.9")) //NaN
//HINT -> parseInt CUTS the decimal (no rounding), parseFloat keeps it,
//BOTH stop reading at the first character that is not a number.

console.log("===========================================")
//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q4")
console.log(Number("ASDFGHJKMNBVC")) //NaN  NaN means "Not a Number", but its datatype is still number.
console.log(typeof Number("ASDFGHJKMNBVC")) // number  
//       HINT -> can letters become a number ? and what is the DATATYPE of that
//       failed result ? (this is a trick question)

console.log("=================================================")

//Q5 --> let number = 7020400749
console.log("Q5")
let number = 7020400749
//       a) convert it to a string using String() and print the typeof
let stringNumber1 = String(number)

console.log(stringNumber1)         // "7020400749"
console.log(typeof stringNumber1)  // string

//       b) convert it to a string using toString() and print the typeof
let stringNumber2 = number.toString();

console.log(stringNumber2)         // "7020400749"
console.log(typeof stringNumber2);  // string
//       HINT -> both give "string". then answer in comments :
//       what happens with String(null) and null.toString() ? (run the first one,
console.log(String(null)) // "null"
// console.log(null.toString) // TypeError: Cannot read properties of null (reading 'toString')
//       the second one gives an ERROR -> write the error message in comments)
console.log("=================================================")
//Q6 --> Boolean() -> predict the output (write answer as comment, then run and verify)
console.log("Q6")
console.log(Boolean("hello")) //true
console.log(Boolean("")) //false
console.log(Boolean(0)) //false
console.log(Boolean(100)) //true
//       THEN -> write the 6 falsy values of javascript in comments.
//       HINT -> everything that is NOT in your list is TRUTHY.

// Six falsy values in JavaScript:
//
// 1. false
// 2. 0
// 3. -0
// 4. "" (empty string)
// 5. null
// 6. undefined
console.log("=================================================")
console.log("SECTION B : PREDICT THE OUTPUT")
console.log("=================================================")

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
cvonsole.log("Q7")
console.log(5 + 5) //10
console.log(5 + "5") //"55"
console.log("5" - 5) //0
console.log(5 - "5") //0
console.log("5" * 5) //25
console.log("5" / 5) //1 

// + with a string performs concatenation.
// -, *, / convert the string into a number and perform maths.

//       HINT -> + with ANY string = CONCATENATION. - * / ALWAYS convert to number first.
console.log("=================================================")
//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q8")
console.log("5" - true) //4
console.log("5" - false) //5
console.log("5" + true) // "5true"
console.log("5" + false) // "5false"
// In mathematical operations:
// true = 1
// false = 0
//
// But + with a string performs concatenation.
//       HINT -> true = 1 and false = 0 in maths.
//       but + with a string does CONCAT, not maths. think twice for each line.
console.log("=================================================")
//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q9")
console.log("10" + "5") // "105"
console.log("10" - "5") //5
console.log(1 + "1") //"11"
console.log(1 - "1") //0

// + with strings -> concatenation.
// - -> numeric conversion and subtraction.
//       HINT -> same operators, different behaviour. explain EACH result in one line.
console.log("=================================================")
//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q10")
console.log(+"5") //5
console.log(+"5.5") //5.5
console.log(+"abc") ///Nan
console.log(typeof +"5") //"number"
//        HINT -> UNARY + is the fastest string -> number conversion.
console.log("=================================================")
//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q11")
console.log(isNaN(Number("hello"))) // true
console.log(isNaN("123")) //false
console.log(isNaN("hello123")) //true
console.log(NaN === NaN) //false  // NaN is not equal to itself.
//        HINT -> NaN is not equal to ANYTHING, not even itself. what do we use to detect it ?

console.log("=================================================")
console.log("SECTION C : LOGIC BUILDING ")
console.log("=================================================")

//Q12 --> let priceStr = "9.8"
console.log("Q12")
//        Check if parseFloat(priceStr) is equal to 10. if NOT, round it
//        so the result becomes exactly 10, and print the result + its typeof.
//        HINT -> which method ROUNDS to nearest (revision -> lecture 03) ?

let price = parseFloat(priceStr)

if (price == 10) {
    console.log(price)
} else {
    price = Math.round(price)
    console.log(price) // 10
}

console.log(typeof price) // number

// Math.round(9.8) gives 10.
console.log("=================================================")

//Q13 --> let mobileStr = "  9876543210  "
console.log("Q13")
//        Clean the extra spaces, convert it to a NUMBER, and print the number + its typeof.
//        HINT -> chaining -> trim() first (lecture 04), then convert (this lecture).
let mobileStr = "  9876543210  "

let mobileNumber = Number(mobileStr.trim())

console.log(mobileNumber);        // 9876543210
console.log(typeof mobileNumber); // number

// trim() removes the extra spaces.
// Number() converts the cleaned string into a number.
console.log("=================================================")

//Q14 --> let amountStr = "199.99"
console.log("Q14")
//        Convert it to a number, add 18% GST on it, and print the final amount
//        in exact 2 decimal format.
//        HINT -> Number() to convert, arithmetic to add tax,
//        .toFixed(2) to format (revision -> lecture 03).
let amountStr = "199.99"

let amount = Number(amountStr)

let gst = amount * 18 / 100
let finalAmount = amount + gst

console.log(finalAmount.toFixed(2)) // 235.99

// Number() converts the string into a number.
// 18% GST is added.
// toFixed(2) keeps exactly 2 decimal places.
console.log("=================================================")

//Q15 --> let otp = 483920
console.log("Q15")
//        Convert this NUMBER to a STRING and print it using a template literal
//        like -> "Your OTP is : 483920"
//        Then print the length of the OTP (how do you get length of a number ?)
//        HINT -> String(otp) first, then .length works.
let otp = 483920

let otpString = String(otp)

console.log(`Your OTP is : ${otpString}`)
// Your OTP is : 483920

console.log(otpString.length) // 6
console.log("=================================================")

//Q16 --> let email = "siddhant.gadakh@gmail.com"
console.log("Q16")
//        HINT -> includes() + indexOf() + slice() -> all from lecture 04,
//        and the conversion here is only mental : everything is already a string :)

let email = "siddhant.gadakh@gmail.com"

//        a) check if the email contains "@" (print true/false)
console.log(email.includes("@")) // true

//        b) find the index of "@"
console.log(email.indexOf("@")) // 15

//        c) extract the username part (everything BEFORE the @) using slice()
let atIndex = email.indexOf("@")

console.log(email.slice(0, atIndex))
// siddhant.gadakh

console.log("=================================================")

//Q17 --> let val1 = "5"
console.log("Q17")
//        let val2 = "10"
//        WITHOUT converting manually, what do these print ?
//        Now CONVERT properly and print the CORRECT sum (15) and difference (-5).
//        HINT -> one line joins, the other line does maths. why ?
let val1 = "5"
let val2 = "10"

// WITHOUT conversion:

console.log(val1 + val2) // "510"
console.log(val1 - val2) // -5

// + joins the two strings.
// - converts both strings to numbers.

// Correct conversion:

let number1 = Number(val1)
let number2 = Number(val2)

console.log(number1 + number2) // 15
console.log(number1 - number2) // -5

console.log("=================================================")

//Q18 --> WRITE 3 statements that give a TRUTHY value and 3 statements that give
console.log("Q18")
//        a FALSY value. Prove each one using Boolean(...) in console.log.
//        HINT -> revise the falsy list from the lecture.
// TRUTHY values:

console.log(Boolean("hello")) // true
console.log(Boolean(100))     // true
console.log(Boolean(true))    // true

// FALSY values:

console.log(Boolean(""))  // false
console.log(Boolean(0))   // false
console.log(Boolean(null)) // false

// Other falsy values include undefined and NaN.

console.log("=================================================")
console.log("SECTION D : INTERVIEW QUESTIONS")
console.log("=================================================")

//Q19 --> INTERVIEW QUESTION -> why is typeof NaN === "number" ?
console.log("Q19")
//        Also : why is NaN === NaN false ? and what is the CORRECT way to detect NaN ?
//        HINT -> NaN means the result of FAILED number maths. it is still a number
//        that failed. comparison with NaN can never be true -> what method solves this ?

console.log(typeof NaN); // "number"

// NaN === NaN is false because NaN is not equal to itself.

console.log(NaN === NaN); // false

// Correct way to detect the actual NaN value:

console.log(Number.isNaN(NaN)); // true

// Number.isNaN() is preferred when checking specifically for NaN.

console.log("=================================================")

//Q20 --> INTERVIEW QUESTION -> Number("") gives 0 but Number(undefined) gives NaN.
console.log("Q20")
//        Explain the difference between an EMPTY STRING and UNDEFINED.
//        HINT -> "" is a real value (empty box), undefined means the box does not exist.
// Number("") gives 0:

// "" is an empty string.
// It is a real string value containing zero characters.
// JavaScript converts an empty string to 0 when using Number().

// Number(undefined) gives NaN:

// undefined means that a value has not been assigned.
// JavaScript cannot convert undefined into a meaningful number,
// so the result is NaN.

console.log(Number(""));         // 0
console.log(Number(undefined));  // NaN

console.log("=================================================")


//Q21 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between
console.log("Q21")
//        parseInt("12.9") and Math.floor(12.9) ?
//        Both LOOK like they give 12. Now check these two and explain :

//        HINT -> parseInt CUTS towards ZERO, Math.floor goes DOWN on the number line.
//        on negative numbers these are NOT the same !
// parseInt("12.9") -> 12
// Math.floor(12.9) -> 12

// They look the same for positive numbers,
// but they behave differently with negative numbers.

console.log(parseInt("-12.9"));  // -12
console.log(Math.floor(-12.9));  // -13

// parseInt() removes the decimal part and moves toward ZERO.

// -12.9 -> -12

// Math.floor() moves DOWN toward negative infinity.

// -12.9 -> -13

// Therefore parseInt() and Math.floor() are NOT the same.

console.log("=================================================")

//Q22 --> INTERVIEW QUESTION -> what is the difference between IMPLICIT and EXPLICIT conversion ?
console.log("Q22")
//        Give one example of each from this lecture.
//        HINT -> implicit = JS converts automatically ("5" - 5), explicit = YOU convert (Number("5")).

// IMPLICIT conversion:
// JavaScript automatically converts the datatype.

console.log("5" - 5); // 0

// JavaScript automatically converts "5" into 5.

// EXPLICIT conversion:
// We manually convert the datatype.
console.log(Number("5")); // 5

// Here, we explicitly told JavaScript to convert "5" to a number.
