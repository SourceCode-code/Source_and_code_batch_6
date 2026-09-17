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
//       HINT -> in JS there is NO separate int/float. what does typeof give for BOTH ?

//ANSWER:

let integer_value = 14
let floating_value = 11.2

console.log(typeof integer_value)   // output --> number
console.log(typeof floating_value)   // output --> number

//Q2 --> A shopkeeper wants to display a price in exact 2 decimal places.
//       let price = 499.5
//       Print the price in 2 decimal format, and ALSO print the datatype of that formatted value.
//       HINT -> which method formats decimals ? and what datatype does it RETURN ?
//       (getting the datatype wrong here is the most common mistake students make)

//ANSWER:

let price = 499.5
console.log(price.toFixed(2))          //Output --> 499.50
console.log(typeof price.toFixed(2))   //Output --> String

//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2))
//       console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5))
//       console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9))
//       HINT -> floor = down, ceil = up, round = nearest (.5 and above goes UP)

//ANSWER:

console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2))   // 10 11 10
console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5))   // 10 11 11
console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9))   // 10 11 11

//Q4 --> INTERVIEW QUESTION -> Math.round() and .toFixed() BOTH look like they "round".
//       Write the difference between them in comments (minimum 3 points).
//       Think about : prefix (Math. or not), return type, what each one is used for.

//ANSWER:  

//  Math.round() is a method object of math class and it is used to round the nearest integer and it return type is number.
//  .toFixed() is a method of number class and it is used to round the number to given decimal point and it return type is string. here Math. prefix is not used.

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(-4.2))
//       console.log(Math.ceil(-4.8))
//       console.log(Math.round(-4.5))
//       HINT -> floor and ceil do NOT care about "closeness". floor always goes to the LOWER
//       integer, ceil always goes to the HIGHER integer. Think on a number line, not by size.

//ANSWER :

console.log(Math.floor(-4.2))     // -5
console.log(Math.ceil(-4.8))      // -4
console.log(Math.round(-4.5))     // -4

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let price = 99.99
//       console.log(Math.floor(price), Math.ceil(price), Math.round(price), price.toFixed(1))
//       HINT -> one of these four outputs is NOT a number. which one ? how can you tell from the console ?

//ANSWER: 

console.log(Math.floor(price), Math.ceil(price), Math.round(price), price.toFixed(1))     // OUTPUT: 99 , 100 , 100, "99.9"

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let x = 10.658912355
//       console.log(x.toFixed(2))
//       console.log(x)
//       HINT -> does toFixed() CHANGE the original variable or only give back a new value ?

//ANWER: 

let x = 10.658912355
console.log(x.toFixed(2))  // OUTPUT: 10.66
console.log(x)             // OUTPUT: 10.658912355

//Q8 --> A student writes this line to generate a random number between 1 and 10 :
//       console.log(Math.floor(Math.random() * 10) + 1)
//       Answer in comments :
//       a) what is the SMALLEST value it can ever print ?
//       b) what is the LARGEST value it can ever print ?
//       c) can Math.random() itself ever return exactly 1 ? why not ?
//       HINT -> Math.random() gives 0 to 0.999..., multiply by 10 -> 0 to 9.999...

// ANSWER:

console.log(Math.floor(Math.random() * 10) + 1)
//       Answer in comments :
//       a) what is the SMALLEST value it can ever print ?               // ANSWER : 1
//       b) what is the LARGEST value it can ever print ?                // ANSWER: 10
//       c) can Math.random() itself ever return exactly 1 ? why not ?   
          // No, because math.random() generates a floating point number between o to 0.9999 and it never reachs to 1.



//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))
//       HINT -> what does the + symbol do when BOTH sides are strings ?
//       (this one catches even experienced developers)

// ANSWER: 

console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))    //OUTPUT : 10.6610.66. 

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> Write a program that simulates rolling TWO dice.
//        Print the value of each dice and the combined total.
//        If the total is 12, also print "DOUBLE SIX!".
//        HINT -> each dice = Math.floor(Math.random() * 6) + 1

// ANSWER :

let dice1 = Math.floor(Math.random() * 6) + 1
let dice2 = Math.floor(Math.random() * 6) + 1

console.log("dice 1 :" + dice1)
console.log("dice 2 :" + dice2)
console.log( `combined total : ${dice1 + dice2}` )
if (dice1 + dice2 == 12) {
    console.log("DOUBLE SIX!")
}

//Q11 --> Write a function randomBetween(min, max) that returns a random INTEGER
//        between min and max (both included). Test it 3 times with (10, 20).
//        HINT -> lecture golden formula -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> explain in comments WHY we use (max - min + 1) and not (max - min) ?
//        (what would go wrong at the highest end if we removed the +1 ?)

//ANSWER: 
function randomBetween(min , max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomFunction = randomBetween(10, 20);
console.log(randomFunction);

//Challenge -> explain in comments WHY we use (max - min + 1) and not (max - min) ?

// Answer: We use (max - min +1) because we want to include the max value in the range of random numbers generated. 
// If we only used (max - min), the maximum value would never be included, as Math.random() generates a number from 0 to 0.999... By adding 1, we ensure that the maximum value is included in the possible outcomes.



//Q12 --> Write a function randomFloat(min, max) that returns a random FLOAT between min and max,
//        rounded to 1 decimal place.
//        Example -> randomFloat(5.5, 9.3) can give 6.7, 8.2, etc.
//        HINT -> here you do NOT need Math.floor... think WHY floats must stay as they are,
//        and which method is used at the END to fix the decimal places.

// ANSWER:

function randomFloat(min , max){
    return  Math.random() * (max - min+1) + min
}
let randomFloatValue = randomFloat(5.5, 9.3)
console.log(randomFloatValue.toFixed(1))


//Q13 --> Write a function roundTo5(num) that rounds ANY number to the NEAREST multiple of 5.
//        Example -> roundTo5(28) -> 30 | roundTo5(32) -> 30 | roundTo5(37) -> 35
//        HINT -> Math.round() rounds to the nearest INTEGER. how do you make 5 behave like 1 ?
//        (divide by 5 first, round, then ...?)

//ANSWER: 

function roundTo5(num){
    return Math.round(num / 5)* 5
}
let roundTo5Value = roundTo5(37)
console.log(roundTo5Value)            // OUTPUT : 30

//Q14 --> Write a program to generate a random 4-digit OTP.
//        Rules -> OTP must be between 1000 and 9999 (never 3 digits).
//        Print it as "Your OTP is : XXXX"
//        HINT -> use the golden formula from Q11 with min = 1000, max = 9999 

//ANSWER:

let OTP = Math.floor(Math.random() * (9999 - 1000 + 1) +1000)
console.log(`Your OTP is : ${OTP}`)

//Q15 --> Write a program to generate a random INDIAN mobile number.
//        Rules -> total 10 digits, first digit must be 6, 7, 8 or 9.
//        Print it as a single readable string like "9876543210"
//        HINT -> split in 2 parts like the lecture : firstDigit (6-9) + remaining 9 digits.
//        Challenge -> how do you JOIN two numbers so they print as ONE string, not "6 987654321" ?

//ANSWER:

let firstDigit = Math.floor(Math.random() * 4) + 6
let remainingNumbers = Math.floor(Math.random()*1000000000)
console.log(`${firstDigit}${remainingNumbers}`)

//Q16 --> Given the number below, write code to round it to 2 decimal places
//        and store the RESULT as an actual NUMBER (not a string).
//        let amount = 1234.56789    // expected output -> 1234.57
//        HINT -> one way : multiply by 100, round it, then divide by 100.
//        Then compare your result with amount.toFixed(2) using typeof - what is the difference ?

//ANSWER:

let amount = 1234.56789
let roundAmount = Math.round(amount *100)/100
console.log(roundAmount)

//Then compare your result with amount.toFixed(2) using typeof - what is the difference ?
console.log(typeof roundAmount)         //Output : number because we have rounded the number and stored it in roundAmount variable.
console.log(typeof amount.toFixed(2))   //Output : string beccause toFixed() method returns a string. 

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q17 --> INTERVIEW QUESTION -> predict and explain (do NOT guess, reason on a number line) :
//        Math.floor(-4.2) , Math.ceil(-4.8) , Math.round(-4.5)
//        Then answer : why is Math.floor(-4.2) NOT -4 ?
//        HINT -> "-4.2 rounded down" means moving AWAY from zero, not towards it.

//ANSWER:
Math.floor(-4.2) // -5  --> Math.floor() always rounds down to the nearest integer, which means it moves away from zero. -4.2 is between -4 and -5 so it round down to -5
Math.ceil(-4.8)  // -4 --> Math.ceil() always rounds up to the nearest integer, which means it moves towards zero. -4.8 is between -4 and -5 so it round up to -4
Math.round(-4.5) // -4 --> Math.round() rounds to the nearest integer. When exactly halfway, it rounds away from zero. -4.5 is exactly halfway between -4 and -5, so it rounds away from zero to -5.

//Then answer : why is Math.floor(-4.2) NOT -4 ?
//Answer: Math.floor(-4.2) is NOT -4 because Math.floor() always rounds down to the nearest integer, which means it moves away from zero. -4.2 is between -4 and -5 so it round down to -5

//Q18 --> INTERVIEW QUESTION -> what is the output range of Math.random() ?
//        Write in comments : minimum value, maximum value, and whether it can ever reach the maximum.
//        Also mention any 3 real-world uses of Math.random() (from the lecture).

//ANSWER:

// The output range of Math.random is from 0 to 0.9999...
// minimum value = 0 , Maximum value = 0.9999... , it can never reach the maximum value because Math.random() generates a floating point number between 0 and 1, but it never includes 1.

// 3. real-world uses of Math.random() are:
// 1. Generating random numbers for games.
// 2. Generating a random test data for testing purposes.
// 3. Generating random passwords or OTPs for security purposes.


//Q19 --> INTERVIEW QUESTION (CLASSIC) -> predict the output of the below code and explain why :
//        console.log(0.1 + 0.2)
//        console.log(0.1 + 0.2 === 0.3)
//        HINT -> JS follows IEEE-754 (binary floating point). some decimal numbers CANNOT be
//        stored exactly in binary. How would you FIX the comparison ? (one line, use a method
//        you learned in this lecture)

//ANSWER:

console.log(0.1 + 0.2)  // OUTPUT : 0.30000000000000004
console.log(0.1 + 0.2 === 0.3)  // OUTPUT : false

// Explanation: The output of 0.1 + 0.2 is not exactly 0.3 due to the way floating-point numbers are represented in binary. Some decimal numbers cannot be stored exactly in binary, leading to small rounding errors. Therefore, the comparison 0.1 + 0.2 === 0.3 evaluates to false.

// To fix the comparison, we can use the toFixed() method to round the result to a certain number of decimal places before comparing:

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q20 --> BONUS -> generate a random Aadhaar number in the EXACT format "XXXX XXXX XXXX".
//        Rules -> 12 digits total, grouped in 3 blocks of 4 digits with a space between blocks.
//        Print it as one single string. Example -> "4821 9057 3364"
//        HINT -> each block must be a 4-DIGIT number (1000 to 9999) so it never shows 3 digits,
//        then JOIN the 3 blocks with spaces.

// ANSWER:

let block1 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let block2 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let block3 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)

console.log(`${block1} ${block2} ${block3}` )

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

// ANSWER:

let item1 = 199.99
let item2 = 449.50
let item3 = 89.75
let total = item1 + item2 + item3
console.log(`Rs. ${total}`)                                      

let randomPercent = Math.floor(Math.random()* (15 - 5 +1) + 5) 
console.log(`Discount : ${randomPercent}%`)

let discount = total * (randomPercent / 100)
let finalBill = total - discount
console.log(`Final Bill : Rs. ${finalBill.toFixed(2)}`)

// OUTPUT:
 
// 1. Rs. 739.24
//    Discount : 10%
//    Final Bill : Rs. 665.32

/** 2.
 * Rs. 739.24
 * Discount : 15%
 * Final Bill : Rs. 628.35
 */




// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 03_ASSIGNMENT.js
// ============================================