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
//**********************************************Answer****************************************
let integer_Number = 20;               // integer number
let floating_Number = 50.122;          // decimal / floating point number

console.log(typeof integer_Number);          
console.log(typeof floating_Number);  

//Q2 --> A shopkeeper wants to display a price in exact 2 decimal places.
//       let price = 499.5
//       Print the price in 2 decimal format, and ALSO print the datatype of that formatted value.
//       HINT -> which method formats decimals ? and what datatype does it RETURN ?
//       (getting the datatype wrong here is the most common mistake students make)
//**********************************************Answer****************************************

let price1 = 499.5
console.log(typeof price1)


//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2))
//       console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5))
//       console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9))
//       HINT -> floor = down, ceil = up, round = nearest (.5 and above goes UP)
//**********************************************Answer****************************************

 console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2))  //10 11 10   //Math.floor(10.2)- will return 10 bcoz it will take floor value
                                                                                //Math.ceil(10.2)- will return 11 bcoz it will take ceil value
                                                                                //Math.round(10.2)- will return 10 bcoz it will take round_down value

console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5))  //10 11 11
console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9))  //10 11 11

//Q4 --> INTERVIEW QUESTION -> Math.round() and .toFixed() BOTH look like they "round".
//       Write the difference between them in comments (minimum 3 points).
//       Think about : prefix (Math. or not), return type, what each one is used for.
//**********************************************Answer****************************************

//1. While both Math.round() and .toFixed() handle rounding in JavaScript, their primary purpose, return types, and treatment of negative numbers differ significantly
//2. Math.round(x) - Rounds a number to the nearest integer.
//   x.toFixed(digits) - Formats a number to a fixed number of decimals.
//3. Math.round(x) - Return type is Number 
//   x.toFixed(digits) -  Return type is String

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(-4.2))
//       console.log(Math.ceil(-4.8))
//       console.log(Math.round(-4.5))
//       HINT -> floor and ceil do NOT care about "closeness". floor always goes to the LOWER
//       integer, ceil always goes to the HIGHER integer. Think on a number line, not by size.
//**********************************************Answer****************************************

console.log(" SECTION B : PREDICT THE OUTPUT")

console.log(Math.floor(-4.2))   //-5
 console.log(Math.ceil(-4.8))   //-4
console.log(Math.round(-4.5))   //-4

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let price = 99.99
//       console.log(Math.floor(price), Math.ceil(price), Math.round(price), price.toFixed(1))
//       HINT -> one of these four outputs is NOT a number. which one ? how can you tell from the console ?
//**********************************************Answer****************************************
 let price = 99.99
 console.log(Math.floor(price), Math.ceil(price), Math.round(price), price.toFixed(1))

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let x = 10.658912355
//       console.log(x.toFixed(2))
//       console.log(x)
//       HINT -> does toFixed() CHANGE the original variable or only give back a new value ?
//**********************************************Answer****************************************
let x = 10.658912355
    console.log(x.toFixed(2))
    console.log(x)

//Q8 --> A student writes this line to generate a random number between 1 and 10 :
//       console.log(Math.floor(Math.random() * 10) + 1)
//       Answer in comments :
//       a) what is the SMALLEST value it can ever print ?
//       b) what is the LARGEST value it can ever print ?
//       c) can Math.random() itself ever return exactly 1 ? why not ?
//       HINT -> Math.random() gives 0 to 0.999..., multiply by 10 -> 0 to 9.999...
//**********************************************Answer****************************************
console.log(Math.floor(Math.random() * 10) + 1)  //a)smallest value - 1 [Because Math.random() can be 0]   
                                                //b)Largest value - 10 [Because Math.random() can be 0] : Math.floor(9.999... ) + 1 = 9 + 1 = 10
                                                //c)can Math.random() itself ever return exactly 1 - No, because Math.random() always returns a value less than 1.

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))
//       HINT -> what does the + symbol do when BOTH sides are strings ?
//       (this one catches even experienced developers)
//**********************************************Answer****************************************
console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))    //10.6610.66

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> Write a program that simulates rolling TWO dice.
//        Print the value of each dice and the combined total.
//        If the total is 12, also print "DOUBLE SIX!".
//        HINT -> each dice = Math.floor(Math.random() * 6) + 1
//**********************************************Answer****************************************
console.log("--------- SECTION C : LOGIC BUILDING -------")

//Q11 --> Write a function randomBetween(min, max) that returns a random INTEGER
//        between min and max (both included). Test it 3 times with (10, 20).
//        HINT -> lecture golden formula -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> explain in comments WHY we use (max - min + 1) and not (max - min) ?
//        (what would go wrong at the highest end if we removed the +1 ?)
//**********************************************Answer****************************************
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

                                                // Testing the function 3 times with (10, 20)
console.log("Test_1:", randomBetween(10, 20));
console.log("Test_2:", randomBetween(10, 20));
console.log("Test_3:", randomBetween(10, 20));


// Example-genrate a number between 50 - 175 
//let Partical_number = Math.floor(Math.random()*(175-50+1)+50)
//console.log(Partical_number)


//Q12 --> Write a function randomFloat(min, max) that returns a random FLOAT between min and max,
//        rounded to 1 decimal place.
//        Example -> randomFloat(5.5, 9.3) can give 6.7, 8.2, etc.
//        HINT -> here you do NOT need Math.floor... think WHY floats must stay as they are,
//        and which method is used at the END to fix the decimal places.
//**********************************************Answer****************************************
console.log(" Example of randomFloat(min, max)")
function randomFloat(min, max) {
    //const random = Math.random() * (max - min) + min;
    //const random = Math.random() * (9.3 - 5.5) + 5.5
    return Math.round(random * 10) / 10;
   console.log("Test:", randomFloat(5.5, 9.3));
}

//Q13 --> Write a function roundTo5(num) that rounds ANY number to the NEAREST multiple of 5.
//        Example -> roundTo5(28) -> 30 | roundTo5(32) -> 30 | roundTo5(37) -> 35
//        HINT -> Math.round() rounds to the nearest INTEGER. how do you make 5 behave like 1 ?
//        (divide by 5 first, round, then ...?)
//**********************************************Answer****************************************
let num = 28
function roundTo5(num) {
  return Math.round(num / 5) * 5;
  //console.log(roundTo5(num))
}

// let num_1 = 20.2
// let num_2 = 20.5
// console.log(Math.round(num_1)) // 20 --> rounds down
// console.log(Math.round(num_2)) // 21 --> round up 

//Q14 --> Write a program to generate a random 4-digit OTP.
//        Rules -> OTP must be between 1000 and 9999 (never 3 digits).
//        Print it as "Your OTP is : XXXX"
//        HINT -> use the golden formula from Q11 with min = 1000, max = 9999
//**********************************************Answer****************************************

console.log("####### Generate OTP ##########")
function generateOTP() {
                // Generate a random number between 0 and 9999, then pad with leading zeros
    return Math.floor(1000 + Math.random() * 9000).toString();
}
console.log("Your OTP is:", generateOTP());

//Q15 --> Write a program to generate a random INDIAN mobile number.
//        Rules -> total 10 digits, first digit must be 6, 7, 8 or 9.
//        Print it as a single readable string like "9876543210"
//        HINT -> split in 2 parts like the lecture : firstDigit (6-9) + remaining 9 digits.
//        Challenge -> how do you JOIN two numbers so they print as ONE string, not "6 987654321" ?
//**********************************************Answer****************************************

let firstDigit = Math.floor(Math.random()*4) + 6 
console.log(firstDigit)
let Reamining_Numbers = Math.floor(Math.random()*1000000000)
console.log(firstDigit,Reamining_Numbers)
console.log(`${firstDigit}${Reamining_Numbers}`)

//Q16 --> Given the number below, write code to round it to 2 decimal places
//        and store the RESULT as an actual NUMBER (not a string).
//        let amount = 1234.56789    // expected output -> 1234.57
//        HINT -> one way : multiply by 100, round it, then divide by 100.
//        Then compare your result with amount.toFixed(2) using typeof - what is the difference ?
//**********************************************Answer****************************************
let amount = 1234.56789
console.log(`Round 2 decimal places: $${amount.toFixed(2)}`);
console.log(typeof amount)


// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q17 --> INTERVIEW QUESTION -> predict and explain (do NOT guess, reason on a number line) :
//        Math.floor(-4.2) , Math.ceil(-4.8) , Math.round(-4.5)
//        Then answer : why is Math.floor(-4.2) NOT -4 ?
//        HINT -> "-4.2 rounded down" means moving AWAY from zero, not towards it.
//**********************************************Answer****************************************
//-4.2 rounded down" means moving AWAY from zero, not towards it

//Q18 --> INTERVIEW QUESTION -> what is the output range of Math.random() ?
//        Write in comments : minimum value, maximum value, and whether it can ever reach the maximum.
//        Also mention any 3 real-world uses of Math.random() (from the lecture).
//**********************************************Answer****************************************
//Rounds the number to the nearest integer
//.5 – .9 → rounds UP (behaves like ceil)
//.0 – .4 → rounds DOWN (behaves like floor)

//Q19 --> INTERVIEW QUESTION (CLASSIC) -> predict the output of the below code and explain why :
//        console.log(0.1 + 0.2)
//        console.log(0.1 + 0.2 === 0.3)
//        HINT -> JS follows IEEE-754 (binary floating point). some decimal numbers CANNOT be
//        stored exactly in binary. How would you FIX the comparison ? (one line, use a method
//        you learned in this lecture)
//**********************************************Answer****************************************
console.log(0.1 + 0.2)           //output - 0.30000000000000000004
console.log(0.1 + 0.2 === 0.3)   //output - false
//To fix decimal comparison issues caused by binary floating-point rounding errors (like 0.1 + 0.2 === 0.3 evaluating to false)


// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q20 --> BONUS -> generate a random Aadhaar number in the EXACT format "XXXX XXXX XXXX".
//        Rules -> 12 digits total, grouped in 3 blocks of 4 digits with a space between blocks.
//        Print it as one single string. Example -> "4821 9057 3364"
//        HINT -> each block must be a 4-DIGIT number (1000 to 9999) so it never shows 3 digits,
//        then JOIN the 3 blocks with spaces.
//**********************************************Answer****************************************
//Math.floor(Math.random()*(max-min+1)+min)
console.log("############ Generate a random Aadhaar number ############")
let digit_1 = Math.floor(Math.random()*(10000-1000)+1000)  //xxxx digit_1
let digit_2 = Math.floor(Math.random()*(10000-1000)+1000)  //xxxx digit_2
let digit_3 = Math.floor(Math.random()*(10000-1000)+1000)  //xxxx digit_3

console.log(digit_1, " " ,digit_2, " ", digit_3)


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
//**********************************************Answer****************************************

console.log("##############  MINI PROJECT - BILLING RECEIPT ##############")
// Function to generate a random number between a minimum and maximum value
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

// 1. Define the item prices
const item1 = 199.99;
const item2 = 449.50;
const item3 = 89.75;

// a. Calculate the total bill
const totalBill = item1 + item2 + item3;

// b. Apply a random discount between 5% and 15%
const discountPercent = randomBetween(5, 15);
const discountAmount = totalBill * (discountPercent / 100);

// c. Calculate the final amount after discount
const finalAmount = totalBill - discountAmount;

// Output the results formatted to 2 decimal places
console.log(`Original Total Bill: $${totalBill.toFixed(2)}`);
console.log(`Random Discount Applied: ${discountPercent.toFixed(2)}% (-$${discountAmount.toFixed(2)})`);
console.log(`Final Amount Due: $${finalAmount.toFixed(2)}`);

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 03_ASSIGNMENT.js
// ============================================