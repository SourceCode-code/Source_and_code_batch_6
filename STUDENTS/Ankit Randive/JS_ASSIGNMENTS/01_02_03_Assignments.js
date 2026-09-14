//--------------------------Assignemet 01 ------------------------------
// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal
//       HINT -> use console.log()
//       EXPECTED OUTPUT (example) -> siddhant
// Answer:
let mName = "Ankit Randive"
console.log(mName)

//Q2 --> Write a single line comment which says, comments can make code readable
//       HINT -> single line comment starts with //
// Answer:
// My name is Ankit Randive.


//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript
// Answer:
// Welcome to Js Assignments.

//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative
//       HINT -> multiline comment starts with /* and ends with */
// Answer:
/* My name is Ankit Randive. I am learning Javascript. And doing Assignments. */

// ------------------- SECTION B : VARIABLES -------------------

//Q5 --> Declare four variables without assigning values
//       HINT -> use let ; what value will they hold ? write the answer in a comment
//       BONUS -> print them using console.log and check what js gives by default
// Answer:
let a, b, c, d


//Q6 --> Declare four variables with assigned values
//       ( try one number, one string, one boolean and one decimal value )
// Answer:
let number = 20
let Name = "Ankit"
let Married = true
let decimal = 20.5

//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines
//       HINT -> one variable per line, use camelCase names
//       BONUS -> print all of them with a single console.log
// Answer:
let firstName1 = "Ankit"
let lastName1 = "Randive"
let maritalStatus1 = "Married"
let country1 = "India"
let age1 = 29

console.log(firstName1)
console.log(lastName1)
console.log(maritalStatus1)
console.log(country1)
console.log(age1)


//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line
//       HINT -> separate each declaration with a comma
//       QUESTION -> which way is better, multiple lines or single line ? write answer in a comment
// Answer:
let firstName2 = "Ankit", lastName2 = "Randive", maritalStatus2 = "Married", country2 = "India", age2 = 29
console.log(firstName2, lastName2, maritalStatus2, country2, age2)



//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
//       HINT -> use let, then print both using console.log()
//       BONUS -> update myAge with a new value and print it again
// Answer:
let myAge = 29
let yourAge = 30

console.log(myAge)
console.log(yourAge)





// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment
//        let 1num = 1
//        let my name = "js"
//        let let = 2
//        HINT -> check variable naming rules in theory notes
// Answer:
let num1 = 2
let myName = "Ankit"
let letVariable = 3

console.log(num1)
console.log(myName)
console.log(letVariable)




//Q11 --> Fix the below variables and rewrite them in correct camelCase
//        let first_name = "siddhant"
//        let LASTNAME = "gadakh"
//        let A = 10
// Answer:
let firstName = "Ankit"
let lastName = "Randive"
let A = 20



//Q12 --> Predict the output before running, then verify with node
//        let city = "Pune"
//        let City = "Mumbai"
//        console.log(city)
//        console.log(City)
//        HINT -> remember, JS is a case sensitive language
// Answer:
let city = "Dharashiv"
let City = "Tuljapur"
console.log(city)
console.log(City)



//Q13 --> Predict the output before running, then verify with node
//        const pi = 3.14
//        pi = 4
//        console.log(pi)
//       HINT -> check what happens when we update a const variable
// Answer:
const pi = 3.14
// pi = 4 // This will cause an error
console.log(pi)


//-------------------- Assignment 02 ------------------------------
// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()
//       HINT -> there are 5 primitive datatypes (check theory notes section 3)
// Answer:
let num = 20
let str = "Ankit"
let isPass = true
let result
let v1 = null

console.log(num)
console.log(str)
console.log(isPass)
console.log(result)
console.log(v1)

//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
//       let city = "Pune"
//       let marks = 92.5
//       let isPass = true
//       let result
//       HINT -> typeof is an operator, example -> console.log(typeof city)
// Answer:
let cityQ2 = "Tuljapur"
let Marks = 70.5
let Ispass = true
let Result

console.log(typeof cityQ2)
console.log(typeof Marks)
console.log(typeof Ispass)
console.log(typeof Result)


//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let x;
//       console.log(x)
//       console.log(typeof x)
//       HINT -> what value does JS give when we dont assign anything ?
// Answer:
let x;
console.log(x) // Output: undefined
console.log(typeof x) // Output: undefined


//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let v1 = null
//       console.log(typeof v1)
//       HINT -> this is a famous bug in js (check theory notes section 5)
// Answer:
let v2 = null
console.log(typeof v2) // Output: object


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 10
//       let b = a
//       a = 20
//       console.log(a)
//       console.log(b)
//       HINT -> primitives are copied by VALUE
// Answer:
let firstValue = 30
console.log(firstValue) // Output: 30
let copiedValue = firstValue
firstValue = 40
console.log(copiedValue) // Output: 30

//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each
//        HINT -> who sets the value, JS or the programmer ?
// Answer:
/*
Difference between undefined and null:
Undefined:
1. Undefined is a primitive value that is automatically assigned to variables that have been declared but not yet assigned a value.
2. It indicates the absence of a value or an uninitialized variable.
Null:
1. Null is a primitive value that represents the intentional absence of any object value.
2. It is explicitly assigned by the programmer to indicate that a variable should have no value.
*/
// Example of undefined:
let username;
console.log(username); // Output: undefined

// Example of null:
let user = null;
console.log(user); // Output: null


// ------------------- SECTION C : BONUS CHALLENGE -------------------

//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
//        let x;
//        let y = null;
//        let z = "25";
//        console.log(typeof x, typeof y, typeof z)
// Answer:
let u;
let v = null;
let w = "55";
console.log(typeof u, typeof v, typeof w)

//-------------------------- Assignemet 03 ------------------------------
// ------------------- SECTION A : BASICS -------------------

//Q1 --> Declare one integer variable and one floating (decimal) variable of your choice.
//       Print both values AND their datatypes using typeof.
//       HINT -> in JS there is NO separate int/float. what does typeof give for BOTH ?
// Answer:
let mAge = 29
let myHeight = 5.9
console.log(mAge, typeof mAge)
console.log(myHeight, typeof myHeight)

//Q2 --> A shopkeeper wants to display a price in exact 2 decimal places.
//       let price = 499.5
//       Print the price in 2 decimal format, and ALSO print the datatype of that formatted value.
//       HINT -> which method formats decimals ? and what datatype does it RETURN ?
//       (getting the datatype wrong here is the most common mistake students make)
// Answer:
let price = 499.5
console.log(price.toFixed(2), typeof price.toFixed(2)) 
// Output is "499.50" "string."

//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2))
//       console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5))
//       console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9))
//       HINT -> floor = down, ceil = up, round = nearest (.5 and above goes UP)
// Answer:
console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2)) 
// Output: 10 11 10


//Q4 --> INTERVIEW QUESTION -> Math.round() and .toFixed() BOTH look like they "round".
//       Write the difference between them in comments (minimum 3 points).
//       Think about : prefix (Math. or not), return type, what each one is used for.





// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(-4.2))
//       console.log(Math.ceil(-4.8))
//       console.log(Math.round(-4.5))
//       HINT -> floor and ceil do NOT care about "closeness". floor always goes to the LOWER
//       integer, ceil always goes to the HIGHER integer. Think on a number line, not by size.
// Answer:
console.log(Math.floor(-4.2))
console.log(Math.ceil(-4.8))
console.log(Math.round(-4.5))


//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let price = 99.99
//       console.log(Math.floor(price), Math.ceil(price), Math.round(price), price.toFixed(1))
//       HINT -> one of these four outputs is NOT a number. which one ? how can you tell from the console ?
// Answer:
let price1 = 99.99
console.log(Math.floor(price1), Math.ceil(price1), Math.round(price1), price1.toFixed(1))


//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let x = 10.658912355
//       console.log(x.toFixed(2))
//       console.log(x)
//       HINT -> does toFixed() CHANGE the original variable or only give back a new value ?
// Answer:
let T = 10.658912355
console.log(T.toFixed(2))
console.log(T)


//Q8 --> A student writes this line to generate a random number between 1 and 10 :
//       console.log(Math.floor(Math.random() * 10) + 1)
//       Answer in comments :
//       a) what is the SMALLEST value it can ever print ?
//       b) what is the LARGEST value it can ever print ?
//       c) can Math.random() itself ever return exactly 1 ? why not ?
//       HINT -> Math.random() gives 0 to 0.999..., multiply by 10 -> 0 to 9.999...
// Answer:
console.log(Math.floor(Math.random() * 10) + 1)
// a) what is the SMALLWST value it can ever printc?
// -- 1
// b) what is the LARGEST value it can ever print ?
// -- 10
// c) can Math.random() itself ever return exactly 1 ? why not ?
// -- not becose number between 1 to 10

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))
//       HINT -> what does the + symbol do when BOTH sides are strings ?
//       (this one catches even experienced developers)
// Answer:
console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))
// Ans :- 10.6610.66
// + sign makes equal to



// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> Write a program that simulates rolling TWO dice.
//        Print the value of each dice and the combined total.
//        If the total is 12, also print "DOUBLE SIX!".
//        HINT -> each dice = Math.floor(Math.random() * 6) + 1
// Answer:
let dice1 = Math.floor(Math.random() * 6) + 1
let dice2 = Math.floor(Math.random() * 6) + 1
let total = dice1 + dice2

console.log("dice1: " + dice1);
console.log("dice2: " + dice2);
console.log("total: " + total);

// total = 12
console.log("DOUBLE SIX!");



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
