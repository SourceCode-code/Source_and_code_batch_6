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
let num = 23
console.log(num) //23
console.log(typeof num) //number

let num2 = 23.5
console.log(num2) //23.5
console.log(typeof num2) // number

//----------------------------------------------------==================--------------------------------------------------
//Q2 --> A shopkeeper wants to display a price in exact 2 decimal places.
//       let price = 499.5
//       Print the price in 2 decimal format, and ALSO print the datatype of that formatted value.
//       HINT -> which method formats decimals ? and what datatype does it RETURN ?
//       (getting the datatype wrong here is the most common mistake students make)

let price = 499.5
console.log(price.toFixed(2)) //499.50
console.log(typeof (price.toFixed(2))) // string
console.log(typeof 499.50) //number


//----------------------------------------------------==================--------------------------------------------------
//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2))
//       console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5))
//       console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9))
//       HINT -> floor = down, ceil = up, round = nearest (.5 and above goes UP)


console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2)) //10 11 10
console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5)) //10 11 11
console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9)) //10 11 11

//----------------------------------------------------==================--------------------------------------------------
//Q4 --> INTERVIEW QUESTION -> Math.round() and .toFixed() BOTH look like they "round".
//       Write the difference between them in comments (minimum 3 points).
//       Think about : prefix (Math. or not), return type, what each one is used for.

/* Math.round() and .toFixed()

Math.round() =>
      1) return type - number
      2) Rounds the number to the nearest integer 
         .5 – .9 → rounds UP (behaves like ceil)
         .0 – .4 → rounds DOWN (behaves like floor)
      example-
      console.log(Math.round(24.6)) //25
      console.log(Math.round(24.4)) //24
      3) 

.toFixed() =>
      1) return type - string
      2) Allows you to specify the exact number of decimal places (0 to 100)
       example-
       let num3 = 52.3 
       let num4 = 23.876376
       let num5 = 10

      console.log(num3.toFixed(2)) //52.30
      console.log(num4.toFixed(3)) //23.876
      console.log(num5.toFixed(2)) //10.00

       */

//----------------------------------------------------==================--------------------------------------------------


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(-4.2))
//       console.log(Math.ceil(-4.8))
//       console.log(Math.round(-4.5))
//       HINT -> floor and ceil do NOT care about "closeness". floor always goes to the LOWER
//       integer, ceil always goes to the HIGHER integer. Think on a number line, not by size.

console.log(Math.floor(-4.2)) //-5
console.log(Math.ceil(-4.8))  //-4
console.log(Math.round(-4.5))  //-4

//----------------------------------------------------==================--------------------------------------------------
//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let price = 99.99
//       console.log(Math.floor(price), Math.ceil(price), Math.round(price), price.toFixed(1))
//       HINT -> one of these four outputs is NOT a number. which one ? how can you tell from the console ?

let price1 = 99.99

console.log(Math.floor(price1), Math.ceil(price1), Math.round(price1), price1.toFixed(1))  //99 100 100 100.0

// when we take output of console.log(price1.toFixed(1)) is string .
//it identify by using type of  like  console.log(typeof (price1.toFixed(1))) //string


//----------------------------------------------------==================--------------------------------------------------
//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let x = 10.658912355
//       console.log(x.toFixed(2)) //10.66
//       console.log(x)
//       HINT -> does toFixed() CHANGE the original variable or only give back a new value ?

let x = 10.658912355
console.log(x.toFixed(2)) //10.66
console.log(x) //10.658912355

// NO  toFixed() does not change the orignal variable.

//----------------------------------------------------==================--------------------------------------------------
//Q8 --> A student writes this line to generate a random number between 1 and 10 :
//       console.log(Math.floor(Math.random() * 10) + 1)
//       Answer in comments :
//       a) what is the SMALLEST value it can ever print ?  == ans-> 1
//       b) what is the LARGEST value it can ever print ?    == ans-> 10
// c) can Math.random() itself ever return exactly 1 ? why not ? == ans-> No, Math.random() can never return exactly 1.
//                                                                  The Specification: According to the  JavaScript standard, 
//                                                                  Math.random() is designed to return a floating-point number in the range (0, 1). 
//                                                                  This means it is inclusive of 0 (it can theoretically return 0),
//                                                                   but exclusive of 1 (it is always strictly less than 1)
//       HINT -> Math.random() gives 0 to 0.999..., multiply by 10 -> 0 to 9.999...
console.log(Math.floor(Math.random() * 10) + 1)


//----------------------------------------------------==================--------------------------------------------------
//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))
//       HINT -> what does the + symbol do when BOTH sides are strings ?
//       (this one catches even experienced developers)
console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2)) //10.66 +10.66=  10.6610.66
//here we use toFixed() which output datatype is string and we cant add the the two string omly we connect to string together and get the output.

//----------------------------------------------------==================--------------------------------------------------
// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> Write a program that simulates rolling TWO dice.
//        Print the value of each dice and the combined total.
//        If the total is 12, also print "DOUBLE SIX!".
//        HINT -> each dice = Math.floor(Math.random() * 6) + 1
let dice_1 = Math.floor(Math.random() * 6) + 1
let dice_2 = Math.floor(Math.random() * 6) + 1


// console.log(dice_1) //4
// console.log(dice_2) //6
// let total =  dice_1 + dice_2
// console.log(total) //10


console.log(dice_1) //6
console.log(dice_2) //6
let total = dice_1 + dice_2
console.log(total) //12

if (total === 12) {
      console.log("DOUBLE SIX!")
}
//DOUBLE SIX!   ===  here when we got total 12 then it will print 'DOUBLE SIX!'



//----------------------------------------------------==================--------------------------------------------------
//Q11 --> Write a function randomBetween(min, max) that returns a random INTEGER
//        between min and max (both included). Test it 3 times with (10, 20).
//        HINT -> lecture golden formula -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> explain in comments WHY we use (max - min + 1) and not (max - min) ?
//        (what would go wrong at the highest end if we removed the +1 ?)

function randomBetween(min, max) {
      console.log(Math.floor(Math.random() * (max - min + 1)) + min)
}

randomBetween(10, 20)//16   18   12

//or

let randomBetween_10_20 = Math.floor(Math.random() * (20 - 10 + 1)) + 10
console.log(randomBetween_10_20) //20    17     16

//----------------------------------------------------==================--------------------------------------------------
//Q12 --> Write a function randomFloat(min, max) that returns a random FLOAT between min and max,
//        rounded to 1 decimal place.
//        Example -> randomFloat(5.5, 9.3) can give 6.7, 8.2, etc.
//        HINT -> here you do NOT need Math.floor... think WHY floats must stay as they are,
//        and which method is used at the END to fix the decimal places.

let randomFloat = (Math.random() * (9.3 - 5.5) + 5.5)  //(Math.random() * (max- min)+ min)
console.log(randomFloat) //6.209302455229512
console.log(randomFloat.toFixed(2))  //6.21
// to fixe the decimal we use .toFixed() method

//----------------------------------------------------==================--------------------------------------------------
//Q13 --> Write a function roundTo5(num) that rounds ANY number to the NEAREST multiple of 5.
//        Example -> roundTo5(28) -> 30 | roundTo5(32) -> 30 | roundTo5(37) -> 35
//        HINT -> Math.round() rounds to the nearest INTEGER. how do you make 5 behave like 1 ?
//        (divide by 5 first, round, then ...?)
let num1 = 32
let roundTo5 = (Math.round(num1 / 5)) * 5
console.log(roundTo5) //30

let num3 = 28
let roundTo5_1 = (Math.round(num3 / 5)) * 5
console.log(roundTo5_1)//30

let num4 = 37
let roundTo5_2 = (Math.round(num4 / 5)) * 5
console.log(roundTo5_2)//35

//----------------------------------------------------==================--------------------------------------------------
//Q14 --> Write a program to generate a random 4-digit OTP.
//        Rules -> OTP must be between 1000 and 9999 (never 3 digits).
//        Print it as "Your OTP is : XXXX"
//        HINT -> use the golden formula from Q11 with min = 1000, max = 9999


//  Math.floor(Math.random() * (max - min + 1)) + min

let otp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000

console.log(otp) //3201

//----------------------------------------------------==================--------------------------------------------------
//Q15 --> Write a program to generate a random INDIAN mobile number.
//        Rules -> total 10 digits, first digit must be 6, 7, 8 or 9.
//        Print it as a single readable string like "9876543210"
//        HINT -> split in 2 parts like the lecture : firstDigit (6-9) + remaining 9 digits.
//        Challenge -> how do you JOIN two numbers so they print as ONE string, not "6 987654321" ?

let firstDigit = Math.floor(Math.random() * 4) + 6
console.log(firstDigit)
let Reamining_Numbers = Math.floor(Math.random() * 1000000000)
console.log(Reamining_Numbers)

console.log(firstDigit + "" + Reamining_Numbers) //8388242850

//----------------------------------------------------==================--------------------------------------------------
//Q16 --> Given the number below, write code to round it to 2 decimal places
//        and store the RESULT as an actual NUMBER (not a string).
//        let amount = 1234.56789    // expected output -> 1234.57
//        HINT -> one way : multiply by 100, round it, then divide by 100.
//        Then compare your result with amount.toFixed(2) using typeof - what is the difference ?
let amount = 1234.56789
let amount_2decimal = Math.round(amount * 100) / 100
console.log(amount_2decimal) //1234.57
console.log(typeof (amount_2decimal))  //number

//----------------------------------------------------==================--------------------------------------------------
// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q17 --> INTERVIEW QUESTION -> predict and explain (do NOT guess, reason on a number line) :
//        Math.floor(-4.2) , Math.ceil(-4.8) , Math.round(-4.5)
//        Then answer : why is Math.floor(-4.2) NOT -4 ?
//        HINT -> "-4.2 rounded down" means moving AWAY from zero, not towards it.
console.log(Math.floor(-4.2)) //-5  (because towods negative direction the hightest is the -4 and lowest is -5  and here we use math.floor means lower value i.e -5)
console.log(Math.ceil(-4.8)) //-4  (because towods negative direction the hightest is the -4 and lowest is -5 and here we use math.ceil means higher value i.e -4)
console.log(Math.round(-4.5)) //-4  (because towods negative direction the hightest is the -4 and lowest is -5 and here we use math.round means we round it nearest value i.e -4)

//----------------------------------------------------==================--------------------------------------------------
//Q18 --> INTERVIEW QUESTION -> what is the output range of Math.random() ?
//        Write in comments : minimum value, maximum value, and whether it can ever reach the maximum.
//        Also mention any 3 real-world uses of Math.random() (from the lecture).

/* Math.random() ==> it Generates a random decimal number from 0 to 0.9999
minimum value=0
maximum value=0.99


HUMANS -->
METHOD -> operations (A DAY JOB , WALKING , CODING)
PROPERTY -> NAME GIVEN US ,  HEIGHT , WEIGHT


CAR->
METHOD - > OPERATIONS ( DRIVE, STARTED , SPEED RATIO)
PROTERY -> inhereted value (CARTYPE , ENGINE TYPE , FUEL TYPE , color )
*/
console.log(Math.random())//0.6054618708026337
console.log(Math.random())//0.8090576418640233
console.log(Math.random())//0.9462361519707951


//----------------------------------------------------==================--------------------------------------------------
//Q19 --> INTERVIEW QUESTION (CLASSIC) -> predict the output of the below code and explain why :
//        console.log(0.1 + 0.2)
//        console.log(0.1 + 0.2 === 0.3)
//        HINT -> JS follows IEEE-754 (binary floating point). some decimal numbers CANNOT be
//        stored exactly in binary. How would you FIX the comparison ? (one line, use a method
//        you learned in this lecture)
console.log(0.1 + 0.2) //  0.30000000000000004
console.log(0.1 + 0.2 === 0.3)// false
console.log((0.1 + 0.2).toFixed(1) === (0.3).toFixed(1)) //true 



//----------------------------------------------------==================--------------------------------------------------
// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q20 --> BONUS -> generate a random Aadhaar number in the EXACT format "XXXX XXXX XXXX".
//        Rules -> 12 digits total, grouped in 3 blocks of 4 digits with a space between blocks.
//        Print it as one single string. Example -> "4821 9057 3364"
//        HINT -> each block must be a 4-DIGIT number (1000 to 9999) so it never shows 3 digits,
//        then JOIN the 3 blocks with spaces.

let one = Math.floor(Math.random() * (9999 - 1000) + 1000)
let two = Math.floor(Math.random() * (9999 - 1000) + 1000)
let three = Math.floor(Math.random() * (9999 - 1000) + 1000)

console.log(one)
console.log(one, "", two, "", three)  //5527  5155  2497

//----------------------------------------------------==================--------------------------------------------------
//Q21 --> BONUS (MINI PROJECT - BILLING RECEIPT) ->
//        A customer buys 3 items with these prices : 199.99, 449.50, 89.75
//        a) calculate the total bill
let total_amount = Math.round(199.99 + 449.50 + 89.75)
console.log(total_amount) //739
//        b) apply a random discount between 5% and 15% on the total (use randomBetween logic)
let discount_percentage = Math.random() * (15 - 5) + 5
console.log(discount_percentage) //11.65699921458007
console.log(discount_percentage.toFixed(2)) //11.66
//        c) calculate the final amount after discount
let discount_amount = total_amount * (discount_percentage / 100)
let final_amount = total_amount - discount_percentage
console.log(final_amount)//727.3430007854199
console.log(final_amount.toFixed(2)) //727.34
//        d) print the receipt in EXACTLY this format (use toFixed) :
//           Total      : Rs. 739.24
//           Discount   : 10.0%
//           Final Bill : Rs. 665.32

console.log(`TOTAL        :Rs. ${total_amount}`)
console.log(`Discount     :${discount_percentage.toFixed(2)}%`)
console.log(`Final Bill   :Rs. ${final_amount.toFixed(2)}`)

/*
TOTAL        :Rs. 739
Discount     :13.50%
Final Bill   :Rs. 725.50
*/
//        HINT -> discount = total * (randomPercent / 100). Round at the END, not in between.

//----------------------------------------------------==================--------------------------------------------------
// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 03_ASSIGNMENT.js
// ============================================