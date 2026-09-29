// ------------------- SECTION A : BASICS -------------------
console.log("section A")

//Q1 --> Declare one integer variable and one floating (decimal) variable of your choice.
//       Print both values AND their datatypes using typeof.
console.log("Q1")
// Integer variable 
let int = 25;
console.log(int, typeof int);

//Floating (decimal) variable 
let float = 25.33;
console.log(float, typeof float);
console.log("================================");

//Q2 --> A shopkeeper wants to display a price in exact 2 decimal places.
console.log("Q2")
let price = 499.5
let newPrice = price.toFixed(2);
console.log(price);
console.log(newPrice);
console.log(typeof newPrice);

console.log("==================================");
console.log("Q3")
//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2));
// OUTPUT : 10 11 10
// floor = rounds down, ceil = rounds up , round = rounds down as it is 10.2 

console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5));
//OUTPUT : 10 11 11 
// round = goes to nearest integer, .5 rounds up for the positive number 

console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9));
//OUTPUT : 10 11 11 
// round = goes to nearest integer, .5 rounds up for the positive number 

console.log("=================================");
console.log("Q4");
//Q4 --> INTERVIEW QUESTION -> Math.round() and .toFixed() BOTH look like they "round".
//============Math.round()==============
/**
 * 1. Math.round() method is called using Math.round().
 * 2. the number is rounded to the nearest integer 
 * 3. returns a NUMBER 
 */

//==============.toFixed()======================
/**
 * 1. it is called using number .toFixed()
 * 2. the number is fixed number of decimal places 
 * 3. returns a STRING 
 */
let num_1 = 10.6789
console.log(Math.round(num_1));
//OUTPUT : 11 
console.log(typeof Math.round(num_1));
//OUTPUT : NUMBER 

console.log(num_1.toFixed(2));
//OUTPUT : 10.68
console.log(typeof num_1.toFixed(2));
// OUTPUT : STRING 

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------
console.log("section B")
//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log(Math.floor(-4.2))   //OUTPUT : -5 
console.log(Math.ceil(-4.8))    //OUTPUT : -4
console.log(Math.round(-4.5))   //OUTPUT : -4

//REASON :
/**
 * 1. Math.floor(-4.2) : -5 
 * floor always goes to lower integer (towerds -infinity)
 * 
 * 2. Math.ceil(-4.8) : -4
 * ceil alweay goes to higher integer (towerds +infinity)
 * 
 * 3. Math.round(-4.5) : -4
 * for the negetive values round will rounds towerds to +infinity (towerds +infinity)
 */

console.log("================================================")
//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q6");
let price_1 = 99.99
console.log(Math.floor(price_1));
//OUTPUT :99  rounds down 
console.log(Math.ceil(price_1));
//OUTPUT : 100  rounds up 
console.log(Math.round(price_1));
//OUTPUT :  100 rounds to nearest integer 
console.log(price_1.toFixed(1));
//OUTPUT : 100.0 formates numnber to 1 decimal place.
// it returns as a string not a number 
console.log(typeof price_1.toFixed(1));

console.log("================================");
//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q7");

let x = 10.658912355
console.log(x.toFixed(2))   //OUTPUT : 10.66
// it will reduce the value to 2 decimal places 
console.log(x)  //OUTPUT : 10.658912355

console.log("================================");
//Q8 --> A student writes this line to generate a random number between 1 and 10 :
console.log("Q8");
console.log(Math.floor(Math.random() * 10) + 1);
//       Answer in comments :
//       a) what is the SMALLEST value it can ever print ?
//          SMALLEST value is = 1
//       b) what is the LARGEST value it can ever print ?
//          LARGEST value = 10
//       c) can Math.random() itself ever return exactly 1 ? why not ?
//          no Math.random() returns a value greater or equal to 0 and strictly less than 1 


console.log("================================");
//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q9");

console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))
//OUTPUT : 10.6610.66
//REASON : 
/**
 * the 1st and 2nd returns the string 
 * the + operator joins the 2 strings insted of adding them as number 
 * so result will be 10.66 + 10.66 = 10.6610.66 
 */
console.log("========================================");
console.log("Q10")
//Q10 --> Write a program that simulates rolling TWO dice.
//        Print the value of each dice and the combined total.
//        If the total is 12, also print "DOUBLE SIX!".
let dice_1 = Math.floor(Math.random()*6)+1 
console.log(dice_1)
let dice_2 = Math.floor(Math.random()*6)+1
console.log(dice_2)
console.log(dice_1 + dice_2)

console.log("==============================")
console.log("Q11")
//Q11 --> Write a function randomBetween(min, max) that returns a random INTEGER
//        between min and max (both included). Test it 3 times with (10, 20).
//        HINT -> lecture golden formula -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> explain in comments WHY we use (max - min + 1) and not (max - min) ?
//        (what would go wrong at the highest end if we removed the +1 ?)
let min = 10 
let max = 20 
let new_number = Math.floor(Math.random()* (max - min + 1)) + min 
console.log(new_number)
// REASON:
// We use (max - min + 1) because both 10 and 20 must be included.
//
// If we used only (max - min):
// 20 - 10 = 10
//
// Math.random() * 10 gives values from 0 to less than 10.
// Math.floor() would give only 0 to 9.
//
// After adding 10:
// 10 to 19
//
// Therefore 20 would NEVER be generated.
//
// +1 makes the range 11 numbers:
// 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
console.log("============================================")
//Q12 --> Write a function randomFloat(min, max) that returns a random FLOAT between min and max,
console.log("Q12")
//        rounded to 1 decimal place.
//        Example -> randomFloat(5.5, 9.3) can give 6.7, 8.2, etc.
//        HINT -> here you do NOT need Math.floor... think WHY floats must stay as they are,
//        and which method is used at the END to fix the decimal places.
let minFloat = 5.5 
let maxFloat = 9.3

let new_float = Math.random() * (maxFloat - minFloat) + minFloat
console.log(new_float.toFixed(1));

console.log("=======================================")
//Q13 --> Write a function roundTo5(num) that rounds ANY number to the NEAREST multiple of 5.
console.log("Q13")
//        Example -> roundTo5(28) -> 30 | roundTo5(32) -> 30 | roundTo5(37) -> 35
//        HINT -> Math.round() rounds to the nearest INTEGER. how do you make 5 behave like 1 ?
//        (divide by 5 first, round, then ...?)
let num1 = 28
let num2 = 32 
let num3 = 37
console.log(Math.round(num1 / 5) *5);
console.log(Math.round(num2/5) *5);
console.log(Math.round(num3/5) *5);
//REASON 
/**
 * 28/5 = 5.6 
 * math.round = 6
 * 6 * 5 = 30
 */

console.log("===================================");
//Q14 --> Write a program to generate a random 4-digit OTP.
console.log("Q14")
//        Rules -> OTP must be between 1000 and 9999 (never 3 digits).
//        Print it as "Your OTP is : XXXX"
//        HINT -> use the golden formula from Q11 with min = 1000, max = 9999
let otp = Math.floor(Math.random()*(9999 - 1000 +1 ) +1000)
console.log("your OTP is: " +otp)

console.log("===========================")
//Q15 --> Write a program to generate a random INDIAN mobile number.
console.log("Q15")
//        Rules -> total 10 digits, first digit must be 6, 7, 8 or 9.
//        Print it as a single readable string like "9876543210"
let firstDigit = Math.floor(Math.random()*4) + 6;
console.log(firstDigit)
let reamining_Digits = Math.floor(Math.random()*10000000000)
console.log(firstDigit,reamining_Digits)

console.log("======================================")
//Q16 --> Given the number below, write code to round it to 2 decimal places
console.log("Q16")
//        and store the RESULT as an actual NUMBER (not a string).
//        let amount = 1234.56789    // expected output -> 1234.57
//        HINT -> one way : multiply by 100, round it, then divide by 100.
//        Then compare your result with amount.toFixed(2) using typeof - what is the difference ?
let amount = 1234.56789
let roundedNumber = Math.round(amount *100) /100;
console.log(roundedNumber)
console.log(typeof roundedNumber)
console.log(amount.toFixed(2));
console.log(typeof amount.toFixed(2))

console.log("====================================")
//Q17 --> INTERVIEW QUESTION -> predict and explain (do NOT guess, reason on a number line) :
console.log("Q17")

console.log(Math.floor(-4.2)) //OUTPUT : -5
console.log(Math.ceil(-4.8)) //OUTPUT : -4
console.log(Math.round(-4.5)) //OUTPUT : -4
//REASON : 
/**
 * number line 
 * -5---------- -4.2--------- -4----------- 0 
 * Math.floor goes to the lower integer so -4.2 goes to -5 
 * Math.ceil goes to higher integer so -4.8 goes to -4  
 */

console.log("===================================")
//Q18 --> INTERVIEW QUESTION -> what is the output range of Math.random() ?
console.log("Q18")

console.log(Math.random());
//RANGE : 0<= Math.random() <1
//REAL-WORLD USES 
/**
 * 1. generate the random OTP
 * 2. generate the random mobile number 
 * 3. generate the random values for UI 
 */

console.log("===============================")
//Q19 --> INTERVIEW QUESTION (CLASSIC) -> predict the output of the below code and explain why :
console.log("Q19");
console.log(0.1 + 0.2) //OUTPUT : 0.30000000000000004
console.log(0.1 + 0.2 === 0.3) //OUTPUT : false
//JavaScript uses IEEE-754 binary floating-point numbers.