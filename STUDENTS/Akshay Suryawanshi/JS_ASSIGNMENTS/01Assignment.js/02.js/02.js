// ============================================
// 02_ASSIGNMENT -> TOPIC : JS DATA TYPES (primitive, non-primitive, typeof)
// BASED ON : LECTURE/02_JS_Datatypes.js  +  THEORY_NOTES/02_JS_Datatypes.md
// HOW TO RUN : open terminal -> node 02_ASSIGNMENT.js
// ============================================

// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)

// Answer -->

let A = 55 //Number
let B = "Akshay"  //string
let C = true  //boolean
let D   // Undefined
let E = null // null

console.log(A,B,C,D,E)




//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
//       let city = "Pune"
//       let marks = 92.5
//       let isPass = true
//       let result
// Answer -->

let city = "Pune"
let marks = 92.5
let isPass = true
let result
// using "typeof" oprator
console.log(typeof city)
console.log(typeof marks)
console.log(typeof isPass)
console.log(typeof result)


//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let x;
//       console.log(x)
//       console.log(typeof x)
// Answer -->

let x 
console.log(x) 
// undefined
console.log(typeof x)
// undefined


//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let v1 = null
//       console.log(typeof v1)
// Answer -->

let v1 = null
console.log(typeof v1)
// output is object


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 10
//       let b = a
//       a = 20
//       console.log(a)
//       console.log(b)
// Answer-->

let a = 10
let b = a
a = 20
// lets take output
console.log(a) // a = 20
console.log(b) // b = 10

//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each
//        HINT -> who sets the value, JS or the programmer ?
// Answer -->

// undefined --> 1) A variable that is declared but no value is given 
//               2) the value is not exist
 let Z
console.log(Z) // undefined value of "Z"

// null --> 1)this variable has no value
//          2) null means intentionally empty

let AB = null
console.log(AB) // null


// ------------------- SECTION C : BONUS CHALLENGE -------------------

//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
//        let x;
//        let y = null;
//        let z = "25";
//        console.log(typeof x, typeof y, typeof z)

// Answer -->

let X 
let Y = null
let z = "25"
console.log(typeof X,typeof Y,typeof z)
// output
//let X  --> undefined
//let Y = null --> object
//let z = "25" --> string



// ============================================
// 03_ASSIGNMENT -> TOPIC : JS DATA TYPE - NUMBERS (Math.floor / ceil / round / toFixed / random)
// BASED ON : LECTURE/03_JS_DataType_Numbers.js  +  THEORY_NOTES/03_JS_DataType_Numbers.md

// HOW TO RUN : open terminal -> node 03_ASSIGNMENT.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : BASICS -------------------

//Q1 --> Declare one integer variable and one floating (decimal) variable of your choice.
//       Print both values AND their datatypes using typeof.
// Answer -->
 
let ABC = 300
let PQR = 25.639
console.log(typeof ABC) // output is number
console.log(typeof PQR) //output is number

//Q2 --> A shopkeeper wants to display a price in exact 2 decimal places.
//       let price = 499.5
//       Print the price in 2 decimal format, and ALSO print the datatype of that formatted value.
// Answer -->

let price = 499.5
console.log(price.toFixed(2)) //output is 499.50
console.log(typeof price.toFixed(2)) // output is string


//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2))
//       console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5))
//       console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9))
     
// Answer -->
console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2))
// output--> (Math.flore=10,Math.ceil=11,Math.round=10)

console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5))
// output-->(Math.flore=10,Math.ceil=11,Math.round=11) 

console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9))
// output-->(Math.flore=10,Math.ceil=11,Math.round=11)


//Q4 --> INTERVIEW QUESTION -> Math.round() and .toFixed() BOTH look like they "round".
//       Write the difference between them in comments (minimum 3 points).
//       Think about : prefix (Math. or not), return type, what each one is used for.

// Answer-->

// Math.round() --> 1) it gives a nearest whole value
//                2) rounds the factual number
//                3) Ex--> 6.825 after using Math.round() it give 7
let num = 6.825
console.log(Math.round(num)) // output is 7

//.tofixed --> 1)it rounds the decimal value
//             2)it rounds value after (.)
//             3)Ex --> 6.825 after use .toFixed(2) it give 6.83

let num_2 = 6.825
console.log(num_2.toFixed(2)) 
 // output is 6.83
console.log(num_2.toFixed(3)) 
 // output is 6.825


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(-4.2))
//       console.log(Math.ceil(-4.8))
//       console.log(Math.round(-4.5))
// Answer-->

console.log(Math.floor(-4.2))
 // output is -5 (-4.2 is flore value) 
console.log(Math.ceil(-4.8)) 
// output is -4  (-4.8 is ceil value)
console.log(Math.round(-4.5)) 
// output is -4 
console.log(Math.round(-4.6))
 // output is -5 (because the value after (.) is upper value)

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let price = 99.99
//       console.log(Math.floor(price), Math.ceil(price), Math.round(price), price.toFixed(1))
//       HINT -> one of these four outputs is NOT a number. which one ? how can you tell from the console ?

// Answer -->

let Price = 99.99
console.log(Math.floor(Price), Math.ceil(Price), Math.round(Price), Price.toFixed(1))
// .toFixed is string
console.log(typeof Price.toFixed(2)) 
//output is string

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let x = 10.658912355
//       console.log(x.toFixed(2))
//       console.log(x)
//       HINT -> does toFixed() CHANGE the original variable or only give back a new value ?

// Answer -->

let x1 = 10.658912355
console.log(x1.toFixed(2)) 
//output is 10.66 (changed original value)
console.log(x1)
// output is 10.658912355 


//Q8 --> A student writes this line to generate a random number between 1 and 10 :
//       console.log(Math.floor(Math.random() * 10) + 1)
//       Answer in comments :
//       a) what is the SMALLEST value it can ever print ?
//       b) what is the LARGEST value it can ever print ?
//       c) can Math.random() itself ever return exactly 1 ? why not ?
//       HINT -> Math.random() gives 0 to 0.999..., multiply by 10 -> 0 to 9.999...
// Answer -->

console.log(Math.floor(Math.random() * 10) + 1)
// output  SMALLEST value --> 1
// output  LARGEST value --> 10


//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))
//       HINT -> what does the + symbol do when BOTH sides are strings ?
//       (this one catches even experienced developers)

// Answer -->

console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))
//  adding two string togather this is called CONCATENETION
// output is 10.66 10.66

// EX-->

let XYZ = 45.6231
let XyZ = 44.12965
console.log(XYZ.toFixed(2) + XyZ.toFixed(3))
//output is 45.62 44.130

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> Write a program that simulates rolling TWO dice.
//        Print the value of each dice and the combined total.
//        If the total is 12, also print "DOUBLE SIX!".
//        HINT -> each dice = Math.floor(Math.random() * 6) + 1

// Answer -->

let dice1 = Math.floor(Math.random()*6)+1
let dice2 = Math.floor(Math.random()*6)+1

let total = dice1+dice2



//Q11 --> Write a function randomBetween(min, max) that returns a random INTEGER
//        between min and max (both included). Test it 3 times with (10, 20).
//        HINT -> lecture golden formula -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> explain in comments WHY we use (max - min + 1) and not (max - min) ?
//        (what would go wrong at the highest end if we removed the +1 ?)

//Q12 --> Write a function randomFloat(min, max) that returns a random FLOAT between min and max,
//        rounded to 1 decimal place.
//        Example -> randomFloat(5.5, 9.3) can give 6.7, 8.2, etc.
//        HINT -> here you do NOT need Math.floor... think WHY floats must stay as they are,
//        and which method is used at the END to fix the decimal places.

//Q13 --> Write a function roundTo5(num) that rounds ANY number to the NEAREST multiple of 5.
//        Example -> roundTo5(28) -> 30 | roundTo5(32) -> 30 | roundTo5(37) -> 35
//        HINT -> Math.round() rounds to the nearest INTEGER. how do you make 5 behave like 1 ?
//        (divide by 5 first, round, then ...?)

//Q14 --> Write a program to generate a random 4-digit OTP.
//        Rules -> OTP must be between 1000 and 9999 (never 3 digits).
//        Print it as "Your OTP is : XXXX"
//        HINT -> use the golden formula from Q11 with min = 1000, max = 9999

//Q15 --> Write a program to generate a random INDIAN mobile number.
//        Rules -> total 10 digits, first digit must be 6, 7, 8 or 9.
//        Print it as a single readable string like "9876543210"
//        HINT -> split in 2 parts like the lecture : firstDigit (6-9) + remaining 9 digits.
//        Challenge -> how do you JOIN two numbers so they print as ONE string, not "6 987654321" ?

// Answer -->

let firstDigit = Math.floor(Math.random()*4)+6

console.log(firstDigit)
// first digit is 7
// lets take other 9 numbers
let remaining_Number = Math.floor(Math.random()*1000000000)


console.log(firstDigit,remaining_Number)
// mobile number is 7711437337

//Q16 --> Given the number below, write code to round it to 2 decimal places
//        and store the RESULT as an actual NUMBER (not a string).
//        let amount = 1234.56789    // expected output -> 1234.57
//        HINT -> one way : multiply by 100, round it, then divide by 100.
//        Then compare your result with amount.toFixed(2) using typeof - what is the difference ?

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q17 --> INTERVIEW QUESTION -> predict and explain (do NOT guess, reason on a number line) :
//        Math.floor(-4.2) , Math.ceil(-4.8) , Math.round(-4.5)
//        Then answer : why is Math.floor(-4.2) NOT -4 ?
//        HINT -> "-4.2 rounded down" means moving AWAY from zero, not towards it.

//Q18 --> INTERVIEW QUESTION -> what is the output range of Math.random() ?
//        Write in comments : minimum value, maximum value, and whether it can ever reach the maximum.
//        Also mention any 3 real-world uses of Math.random() (from the lecture).


//Q19 --> INTERVIEW QUESTION (CLASSIC) -> predict the output of the below code and explain why :
//        console.log(0.1 + 0.2)
//        console.log(0.1 + 0.2 === 0.3)
//        HINT -> JS follows IEEE-754 (binary floating point). some decimal numbers CANNOT be
//        stored exactly in binary. How would you FIX the comparison ? (one line, use a method
//        you learned in this lecture)

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q20 --> BONUS -> generate a random Aadhaar number in the EXACT format "XXXX XXXX XXXX".
//        Rules -> 12 digits total, grouped in 3 blocks of 4 digits with a space between blocks.
//        Print it as one single string. Example -> "4821 9057 3364"
//        HINT -> each block must be a 4-DIGIT number (1000 to 9999) so it never shows 3 digits,
//        then JOIN the 3 blocks with spaces.

// Answer-->

let digit_1 = Math.floor(Math.random()*(10000-1000)+1000)
let digit_2 = Math.floor(Math.random()*(10000-1000)+1000)
let digit_3 = Math.floor(Math.random()*(10000-1000)+1000)

console.log(digit_1,"",digit_2,"",digit_3)

// Aadhar number genrated ---> 5655 3707 1909 

//Q21 --> BONUS (MINI PROJECT - BILLING RECEIPT) ->
//        A customer buys 3 items with these prices : 199.99, 449.50, 89.75
//        a) calculate the total bill
//        b) apply a random discount between 5% and 15% on the total (use randomBetween logic)
//        c) calculate the final amount after discount
//        d) print the receipt in EXACTLY this format (use toFixed) :
//           Total      : Rs. 739.24
//           Discount   : 10.0%
//           Final Bill : Rs. 665.32
//        HINT -> discount = total * (randomPercent / 100). Round at the END, not in between.

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 03_ASSIGNMENT.js
// ============================================