// ============================================
// 07_ASSIGNMENT -> TOPIC : JS CONDITIONS ( if | if...else | else if | ternary | switch case )
// BASED ON : LECTURE/07_conditions.js  +  THEORY_NOTES/07_JS_Conditions.md
//
// HOW TO RUN : open terminal -> node 07_ASSIGNMENT_JS_CONDITIONS.js
// RULES -> prompt() works ONLY in the browser console -> we run files with node, so every
//          "user input" is SIMULATED with a variable -> change its value, run the file again,
//          and verify ALL the cases written in the question.
//          for every task FIRST write your plan as a comment, THEN write the code and test it.
// NOTE -> every answer must be verified by RUNNING the file, not by guessing.
// ============================================


/**
 * Exercises: Level 1
 */

// 1. Check if the user is old enough to drive.
//    age is 18 or above -> "You are old enough to drive."
//    age is below 18    -> "You are left with X years to drive."   ( X = 18 - age )
//    test with -> age = 30, 18, 15, 1
//    HINT -> this is either-or -> the perfect place for if...else.

// let age = 10
// // Answer:
// if (age >= 18) {
//     console.log("You are old enough to drive.");
// } else {
//     console.log(`You are left with ${18 - age} years to drive.`);
// }

/**
 * age = 30
 * You are old enough to drive.
 *
 * age = 15
 * You are left with 3 years to drive.
 */


// 2. Compare the values of myAge and yourAge using if...else and print who is older.
//    myAge is fixed ( 25 ) -> test with yourAge = 30, 20, 25
//    yourAge is bigger -> "You are X years older than me."
//    myAge is bigger   -> "I am X years older than you."
//    both are equal    -> "We are of the same age."
//    HINT -> the difference is a simple subtraction -> X = the difference.

// let myAge = 25
// let yourAge = 30
// // Answer:
// if (yourAge > myAge) {
//     console.log(`You are ${yourAge - myAge} years older than me.`);
// } else if (myAge > yourAge) {
//     console.log(`I am ${myAge - yourAge} years older than you.`);
// } else {
//     console.log("We are of the same age.");
// }

/**
 * yourAge = 30
 * You are 5 years older than me.
 *
 * yourAge = 20
 * I am 5 years older than you.
 *
 * yourAge = 25
 * We are of the same age.
 */


// 3. Compare if 'a' is greater than 'b'.
//    implement it in TWO ways -> (a) using if...else   (b) using the ternary operator
//    both ways must print the SAME lines.
//    a is greater -> "4 is greater than 3"    ( use the variables in a template literal )
//    b is greater -> "3 is greater than 4"
//    equal        -> "4 and 3 are equal"
//    HINT -> the ternary gives ONE value, so console.log( a > b ? ... : ... ) is enough.

// let a = 4;
// let b = 3;
// // Answer:

// // (a) using if...else
// if (a > b) {
//     console.log(`${a} is greater than ${b}`);
// } else if (b > a) {
//     console.log(`${b} is greater than ${a}`);
// } else {
//     console.log(`${a} and ${b} are equal`);
// }

// // (b) using ternary operator
// console.log(a > b ? `${a} is greater than ${b}` : b > a ? `${b} is greater than ${a}` : `${a} and ${b} are equal`);

/**
 * 4 is greater than 3
 */


// 4. Check if a number is even or odd.
//    test with -> number = 22, 99, 0
//    HINT -> even means the number divides by 2 with 0 remainder -> number % 2 === 0.
//    ( remember : % gives the remainder, a remainder of 0 means it divides perfectly )

// let number = 22
// // Answer:
// if (number % 2 === 0) {
//     console.log(`${number} is an even number.`);
// } else {
//     console.log(`${number} is an odd number.`);
// }
/**
 * number = 22
 * 22 is an even number.
 *
 * number = 99
 * 99 is an odd number.
 */


/**
 * Exercises: Level 2
 */

// 1. Write a code to give grades to students according to their scores :
//    80 - 100 -> grade A
//    70 - 79  -> grade B
//    60 - 69  -> grade C
//    50 - 59  -> grade D
//    0  - 49  -> grade F  ( failed )
//    anything else ( negative / undefined / NaN ) -> "Invalid score -> the student was not present for the exam."
//    test with -> score = 95, 80, 72, 50, 33, undefined
//    HINT -> in an else if ladder the FIRST true wins -> order the ladder from HIGHEST to lowest
//    ( score >= 80 first ) -> then the && checks are not even needed.
//    CAREFUL -> the ranges must never OVERLAP and never leave a GAP ( lecture 07 boundary lesson ).

// let score = undefined
// // Answer:
// if (score >= 80 && score <= 100) {
//     console.log("Grade : A");
// } else if (score >= 70 && score <= 79) {
//     console.log("Grade : B");
// } else if (score >= 60 && score <= 69) {
//     console.log("Grade : C");
// } else if (score >= 50 && score <= 59) {
//     console.log("Grade : D");
// } else if (score >= 0 && score <= 49) {
//     console.log("Grade : F ( failed )");
// } else {
//     console.log("Invalid score -> the student was not present for the exam.");
// }
/**
 * score = 95
 * Grade : A
 *
 * score = 33
 * Grade : F ( failed )
 *
 * score = undefined
 * Invalid score -> the student was not present for the exam.
 */


// 2. Check the season based on the user input month number ( 1 - 12 ).
//    12, 1, 2      -> Winter
//    3, 4, 5       -> Summer
//    6, 7, 8, 9    -> Rainy
//    10, 11        -> Autumn
//    anything else -> "Invalid month -> please enter a number between 1 and 12."
//    test with -> monthNum = 12, 7, 4, 15
//    HINT -> the cleanest tool here is switch -> group the month numbers with STACKED cases
//    ( fall-through ) -> all the cases above the console.log share the same output.

// let monthNum = 17
// // Answer:
// switch (monthNum) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Month " + monthNum + " is a Winter month.");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Month " + monthNum + " is a Summer month.");
//         break;
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//         console.log("Month " + monthNum + " is a Rainy month.");
//         break;
//     case 10:
//     case 11:
//         console.log("Month " + monthNum + " is an Autumn month.");
//         break;
//     default:
//         console.log("Invalid month -> please enter a number between 1 and 12.");
// }
/**
 * monthNum = 12
 * Month 12 is a Winter month.
 *
 * monthNum = 7
 * Month 7 is a Rainy month.
 *
 * monthNum = 15
 * Invalid month -> please enter a number between 1 and 12.
 */


// 3. Check if a day is a weekend or a working day.
//    take the day input and check it CASE INSENSITIVELY -> "Saturday", "SAturDay" and
//    "saturday" must all give the SAME result.
//    saturday / sunday -> "<day> is a weekend."        ( for example : Saturday is a weekend. )
//    monday to friday  -> "<day> is a working day."    ( for example : Friday is a working day. )
//    anything else     -> "Invalid day -> please check the spelling."
//    test with -> day = "Saturday", "FrIDAy", "Sunday", "abc"
//    HINT -> normalize first with toLowerCase() -> compare the CLEAN value, print the ORIGINAL one.
//    WARNING -> never write  case "sat" || "sun":  -> || returns only the FIRST TRUTHY value ("sat"),
//    so "sun" would NEVER match ( the famous mistake from lecture 07 )
//    -> to give the same output to several values, STACK the cases :
//       case "saturday":
//       case "sunday": console.log(...)   break
//    BONUS -> also accept the short names ( sat, sun, mon, tue, wed, thu, fri ).

// let day = "Monday"
// // Answer:
// switch (day.toLowerCase()) {
//     case "saturday":
//     case "sun":
//         console.log(day + " is a weekend.");
//         break;
//     case "monday":
//     case "mon":
//         console.log(day + " is a working day.");
//         break;
//     case "tuesday":
//     case "tue":
//         console.log(day + " is a working day.");
//         break;
//     case "wednesday":
//     case "wed":
//         console.log(day + " is a working day.");
//         break;
//     case "thursday":
//     case "thu":
//         console.log(day + " is a working day.");
//         break;
//     case "friday":
//     case "fri":
//         console.log(day + " is a working day.");
//         break;
//     default:
//         console.log("Invalid day -> please check the spelling.");
// }   

/**
 * day = "Saturday"
 * Saturday is a weekend.
 *
 * day = "FrIDAy"
 * Friday is a working day.
 */


/**
 * Exercises: Level 3
 */

// 1. Write a program that tells the number of days in a month.
//    input is the month NAME ( in any case ) :
//    31 days -> january, march, may, july, august, october, december
//    30 days -> april, june, september, november
//    28 days -> february   ( ignore leap years )
//    anything else -> "Invalid month -> please check the spelling."
//    test with -> month = "January", "february", "JuNe", "Febuary", "abc"
//    HINT -> keep the original month in one variable and make a cleaned copy with
//    toLowerCase() -> compare the copy, but print the ORIGINAL in the message.
//    use a switch with STACKED cases -> all 31-day months under ONE output,
//    all 30-day months under another one -> do not forget break and the default.

// let month = "Febuary"
// // Answer:
// switch (month.toLowerCase()) {
//     case "january":
//     case "march":
//     case "may":
//     case "july":
//     case "august":
//     case "october":
//     case "december":
//         console.log(month + " has 31 days.");
//         break;
//     case "april":
//     case "june":
//     case "september":
//     case "november":
//         console.log(month + " has 30 days.");
//         break;
//     case "february":
//         console.log(month + " has 28 days.");
//         break;
//     default:
//         console.log("Invalid month -> please check the spelling.");
// }

/**
 * month = "January"
 * January has 31 days.
 *
 * month = "february"
 * february has 28 days.
 *
 * month = "Febuary"
 * Invalid month -> please check the spelling.
 */


/**
 * Exercises: Level 3 ( BONUS CHALLENGE )
 */

// 2. BONUS -> check the generation of a person by the birth year :
//    1981 - 1990 -> "You belong to the Boomer generation."
//    1991 - 2000 -> "You belong to the Millennial generation."
//    above 2000  -> "You belong to the Gen Z generation."
//    anything else ( 1980 or below / undefined ) -> "Invalid birth year."
//    test with -> birthYear = 1985, 1995, 2010, 1975, undefined
//    PART A -> write it with the else if ladder.
//    HINT -> the first true wins -> make sure the year 1991 falls in EXACTLY ONE range
//    ( remember the lecture bug where 1991 matched NOTHING -> that is called a GAP ).
//    PART B -> rewrite the SAME program with  switch ( true )  -> every case becomes a condition.
//    HINT -> case birthYear > 1980 && birthYear <= 1990: ...

// let birthYear = 2022
// // Answer ( PART A -> else if ladder ) :
// if (birthYear > 1980 && birthYear <= 1990) {
//     console.log("You belong to the Boomer generation.");
// } else if (birthYear > 1990 && birthYear <= 2000) {
//     console.log("You belong to the Millennial generation.");
// } else if (birthYear > 2000) {
//     console.log("You belong to the Gen Z generation.");
// } else {
//     console.log("Invalid birth year.");
// }

/**
 * birthYear = 1985
 * You belong to the Boomer generation.
 *
 * birthYear = 1995
 * You belong to the Millennial generation.
 *
 * birthYear = 2010
 * You belong to the Gen Z generation.
 */


// 3. BONUS -> INTERVIEW CHECK ( answer in comments ) :
//    a) why does  case "monday" || "mon":  never work as expected ? what does || really return ?
//       what is the correct way to give the SAME output to several case values ?
//    b) when should you choose a switch over the else if ladder ? give one use case for each.
//    c) what happens when you FORGET the break inside a switch ? what is this behaviour called ?
//       write a small example in comments.
//    d) what does the  switch ( true ) { case condition: ... }  pattern do ?
//       when do you NEED it ( what can a normal case value NOT do ) ?
// Answer ( in comments ) :
// a) the || operator returns only the FIRST TRUTHY value, so "mon" would never match.
//    the correct way is to stack the cases : case "monday": case "mon": console.log(...) break
// b) switch is cleaner when you have ONE variable to compare against MANY values ( month, day, grade ).
//    else if is better when you have MANY variables to compare against MANY values ( age, score, year ).
// c) if you forget the break, the program will "fall through" and execute the next case(s) as well.


// ============================================
// SUBMISSION CHECKLIST
// 1. every task is tested with ALL the values written in the question ( change the variable, run again )
// 2. every else if ladder is GAP free and OVERLAP free
// 3. every switch -> stacked cases for shared output | break wherever needed | default last
// 4. every answer/observation is written in comments
// 5. file runs without any error -> node 07_ASSIGNMENT_JS_CONDITIONS.js
// ============================================


