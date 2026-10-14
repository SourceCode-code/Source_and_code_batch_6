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

let age = 30

if (age >= 18) {
    console.log("You are old enough to drive.")
} else {
    let x = 18 - age
    console.log(`You are left with ${x} years to drive.`)
}

let age1 = 1

if (age1 >= 18) {
    console.log("You are old enough to drive.")
} else {
    let x = 18 - age1
    console.log(`You are left with ${x} years to drive.`)
}


// 2. Compare the values of myAge and yourAge using if...else and print who is older.
//    myAge is fixed ( 25 ) -> test with yourAge = 30, 20, 25
//    yourAge is bigger -> "You are X years older than me."
//    myAge is bigger   -> "I am X years older than you."
//    both are equal    -> "We are of the same age."
//    HINT -> the difference is a simple subtraction -> X = the difference.

//Answers=
let myAge = 25
let yourAge = 25
if (yourAge > myAge) {
    let x = yourAge - myAge
    console.log(`You are ${x} years older than me.`)
} 
else if (myAge > yourAge) {
    let x = myAge - yourAge
    console.log(`I am ${x} years older than you.`)
} 
else {
    console.log("We are of the same age.")
}



// 3. Compare if 'a' is greater than 'b'.
//    implement it in TWO ways -> (a) using if...else   (b) using the ternary operator
//    both ways must print the SAME lines.
//    a is greater -> "4 is greater than 3"    ( use the variables in a template literal )
//    b is greater -> "3 is greater than 4"
//    equal        -> "4 and 3 are equal"
//    HINT -> the ternary gives ONE value, so console.log( a > b ? ... : ... ) is enough.

// (a) using if...else
let a = 5;
let b = 4;
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else if (b > a) {
    console.log(`${b} is greater than ${a}`);
} else {
    console.log(`${a} and ${b} are equal`);
}


// (b) using ternary operator
console.log(a>b)?"a is greater than b":"b is greater than a"


// 4. Check if a number is even or odd.
//    test with -> number = 22, 99, 0
//    HINT -> even means the number divides by 2 with 0 remainder -> number % 2 === 0.
//    ( remember : % gives the remainder, a remainder of 0 means it divides perfectly )


//* number = 22
// * 22 is an even number.
let number = 22
console.log(number%2===0? "Even":"ODD")

// * number = 99
// 99 is an odd number.

let number1 = 99
console.log(number1%2===0? "Even":"ODD")


// * Exercises: Level 2
 //*/

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

let score = 72
if (score >= 80 && score <= 100) {
    console.log("Grade A");
} 
else if (score >= 70) {
    console.log("Grade B");
} 
else if (score >= 60) {
    console.log("Grade C");
} 
else if (score >= 50) {
    console.log("Grade D");
} 
else if (score >= 0) {
    console.log("Grade F (failed)");
} 
else {
    console.log("Invalid score -> the student was not present for the exam.");
}

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

// 
let  monthNum = 11
switch (monthNum) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break

    case 3:
    case 4:
    case 5:
        console.log("summer");
        break

    case 6:
    case 7:
    case 8:
    case 9: 
    console.log("Rainy")
    break

    case 10:
    case 11:
    console.log("Autumn")
    break
 
    default: console.log("Invalid month- please enter a number between 1 and 12")

}


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

let day = "sun"
let changeDay= day.toLowerCase()
switch(changeDay)
{
case "saturday":
case "sat" :
case "sunday":
case "sun":
    console.log("It is Weekend")
    break

case  "monday":
case "mon":
case "tuesday":
case "tue":
case "wednesday":
case "wed":
case "thursday":
case "thu":
case "friday":
case "fri":
    console.log("It is Working Day")
break
    default: console.log("Invalid day -> please check the spelling.")

}

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

let month = "jul"
let upMonth= month.toLowerCase()

switch(upMonth){

case "january":
case "jan":
case "march":
case "mar":
case "may":
case "july":
case "jul":
case "august":
case "aug":
case "october":
case "oct":
case "december":
case "dec":
    console.log("It has 31 Days")
    break
case "april":
case"apr":
case"june":
case"jun":
case "september":
case "sept":
case "november":
case "nov":
    console.log("It has 30 days")
    break

case "february":
case "feb":
    console.log("It has 28 Days")

    break
default:console.log("Invalid month -> please check the spelling.")

}

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

let birthYear = 1980
if 
(birthYear > 1981 && birthYear <= 1990) {
    console.log("You belongs to the boomer generation")
}
else if(birthYear >1991 && birthYear <=2000)
    {
        console.log("You belong to the Millennial generation")
    }

else if(birthYear >2000)
    {
        console.log("You belong to the Gen Z generation.")
    }

    else{
        console.log("Invalid birth year")
    }


    //   PART B -> rewrite the SAME program with  switch ( true )  -> every case becomes a condition.
    
    let birthYears = 2004
    switch(true)
    {
        case (birthYears >= 1981 && birthYears <= 1990):
        console.log("You belong to the Boomer generation.");
        break

        case (birthYears >= 1991 && birthYears <= 2000):
        console.log("You belong to the Millennial generation.");
        break

        case (birthYears > 2000):
        console.log("You belong to the Gen Z generation.");
        break

        default:
        console.log("Invalid birth year.")

    }


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

//Answer= 
// || returns only the first truthy value hence "mon" will never match
//      correct way to give same output is stack the cases


//    b) when should you choose a switch over the else if ladder ? give one use case for each.

//Answer= when we have multiple codition we will use else if ladder and switch is used when ONE parameter is compared against MANY FIXED values
// else if is best for RANGES and complex conditions 
//switch is best for one parameter checked against fiexed values


//    c) what happens when you FORGET the break inside a switch ? what is this behaviour called ?
//       write a small example in comments.
// Answer=
// when we forgot break inside switch then the code after the switch still runs
// this behabioru is called fall though
// let val1= 1
// switch(val1)
// {
//     case 1:
//          console.log("One")
//     case 2:
//          console.log("two")
//          break

// }


//    d) what does the  switch ( true ) { case condition: ... }  pattern do ?
//       when do you NEED it ( what can a normal case value NOT do ) ?
//      Answer: switch(true) is used when ranges has to be checked inside a switch and passing true shows boolean condition and check true conditions


// ============================================
// SUBMISSION CHECKLIST
// 1. every task is tested with ALL the values written in the question ( change the variable, run again )
// 2. every else if ladder is GAP free and OVERLAP free
// 3. every switch -> stacked cases for shared output | break wherever needed | default last
// 4. every answer/observation is written in comments
// 5. file runs without any error -> node 07_ASSIGNMENT_JS_CONDITIONS.js
// ============================================


