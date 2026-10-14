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

/**
 * age = 30
 * You are old enough to drive.
 *
 * age = 15
 * You are left with 3 years to drive.
 */


//1 
let age = 30
if (age >= 18) {
    console.log("you are old enough to drive")
} else {
    console.log(`you are left with ${(18 - age)}`)
}//you are old enough to drive


//2
let age_1 = 18
if (age_1 >= 18) {
    console.log("you are old enough to drive")
} else {
    console.log(`you are left with ${(18 - age_1)}`)
}//you are old enough to drive

//3
let age_2 = 15
if (age_2 >= 18) {
    console.log("you are old enough to drive")
} else {
    console.log(`you are left with ${(18 - age_2)} years`)
}//you are left with 3 years


//4
let age_3 = 1
if (age_2 >= 18) {
    console.log("you are old enough to drive")
} else {
    console.log(`you are left with ${(18 - age_3)} years`)
}//you are left with 17 years




// 2. Compare the values of myAge and yourAge using if...else and print who is older.
//    myAge is fixed ( 25 ) -> test with yourAge = 30, 20, 25
//    yourAge is bigger -> "You are X years older than me."
//    myAge is bigger   -> "I am X years older than you."
//    both are equal    -> "We are of the same age."
//    HINT -> the difference is a simple subtraction -> X = the difference.


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


let myAge = 25
let yourAge = 30
let yourAge_greater = (yourAge - myAge)
let myAge_greater = (myAge - yourAge)
if (myAge < yourAge) {
    console.log(`You are ${yourAge_greater} years older than me.`)
} else if (myAge > yourAge) {
    console.log(`I am ${myAge_greater} years older than you.`)
} else if (myAge = yourAge) {
    console.log("We are of the same age.")
} else {
    console.log("invalid data ")
}//You are 5 years older than me.


let myAge_1 = 25
let yourAge_1 = 20
let yourAge_greater_1 = (yourAge_1 - myAge_1)
let myAge_greater_1 = (myAge_1 - yourAge_1)
if (myAge_1 < yourAge_1) {
    console.log(`You are ${yourAge_greater_1} years older than me.`)
} else if (myAge_1 > yourAge_1) {
    console.log(`I am ${myAge_greater_1} years older than you.`)
} else if (myAge_1 = yourAge_1) {
    console.log("We are of the same age.")
} else {
    console.log("invalid data ")
}//I am 5 years older than you.



let myAge_2 = 25
let yourAge_2 = 25
let yourAge_greater_2 = (yourAge_2 - myAge_2)
let myAge_greater_2 = (myAge_2 - yourAge_2)
if (myAge_2 < yourAge_2) {
    console.log(`You are ${yourAge_greater_2} years older than me.`)
} else if (myAge_2 > yourAge_2) {
    console.log(`I am ${myAge_greater_2} years older than you.`)
} else if (myAge_2 = yourAge_2) {
    console.log("We are of the same age.")
} else {
    console.log("invalid data ")
}//We are of the same age.




// 3. Compare if 'a' is greater than 'b'.
//    implement it in TWO ways -> (a) using if...else   (b) using the ternary operator
//    both ways must print the SAME lines.
//    a is greater -> "4 is greater than 3"    ( use the variables in a template literal )
//    b is greater -> "3 is greater than 4"
//    equal        -> "4 and 3 are equal"
//    HINT -> the ternary gives ONE value, so console.log( a > b ? ... : ... ) is enough.

let a = 4;
let b = 3;

// (a) using if...else
if (a > b) {
    console.log("4 is greater than 3")
} else if (a < b) {
    console.log(" 3 is greater than 4")
} else {
    console.log("4 and 3 are equal")
}//4 is greater than 3

// (b) using ternary operator-

let a_and_b = (a > b) ? "4 is greater than 3 " : " 4 and 3 are equal"
console.log(a_and_b) //4 is greater than 3 

let a_and_b_1 = (a < b) ? "3 is greater than 4" : "4 is greater than 3"
console.log(a_and_b_1)//4 is greater than 3

let a_and_b_2 = (a = b) ? "4 and 3 are equal " : " 4 and 3 are not equal"
console.log(a_and_b_2)//4 and 3 are equal 



// 4. Check if a number is even or odd.
//    test with -> number = 22, 99, 0
//    HINT -> even means the number divides by 2 with 0 remainder -> number % 2 === 0.
//    ( remember : % gives the remainder, a remainder of 0 means it divides perfectly )
/**
 * number = 22
 * 22 is an even number.
 *
 * number = 99
 * 99 is an odd number.
 */


let number = 22
let even_odd_num = (number % 2 == 0) ? "EVEN" : "ODD"
console.log(even_odd_num) //EVEN

let number_1 = 99
let even_odd_num_1 = (number_1 % 2 == 0) ? "EVEN" : "ODD"
console.log(even_odd_num_1) //ODD

let number_2 = 0
let even_odd_num_2 = (number_2 % 2 == 0) ? "EVEN" : "ODD"
console.log(even_odd_num_2) //EVEN



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

/*
 * score = 95
 * Grade : A
 *
 * score = 33
 * Grade : F ( failed )
 *
 * score = undefined
 * Invalid score -> the student was not present for the exam.
 */




let score = 95
if (score >= 80 && score <= 100) { console.log("He has received A grade") }
else if (score >= 70 && score <= 79) { console.log("He has received B grade") }
else if (score >= 60 && score <= 69) { console.log("He has received c grade") }
else if (score >= 50 && score <= 59) { console.log("He has received D grade") }
else if (score >= 0 && score <= 49) { console.log("He has received F grade - Failed") }
else {
    console.log("ther given output is ")
} //He has received A grade




let score_1 = 72
if (score_1 >= 80 && score_1 <= 100) { console.log("He has received A grade") }
else if (score_1 >= 70 && score_1 <= 79) { console.log("He has received B grade") }
else if (score_1 >= 60 && score_1 <= 69) { console.log("He has received c grade") }
else if (score_1 >= 50 && score_1 <= 59) { console.log("He has received D grade") }
else if (score_1 >= 0 && score_1 <= 49) { console.log("He has received F grade - Failed") }
else {
    console.log("ther given output is ")
} //He has received B grade




let score_2 = 80
if (score_2 >= 80 && score_2 <= 100) { console.log("He has received A grade") }
else if (score_2 >= 70 && score_2 <= 79) { console.log("He has received B grade") }
else if (score_2 >= 60 && score_2 <= 69) { console.log("He has received c grade") }
else if (score_2 >= 50 && score_2 <= 59) { console.log("He has received D grade") }
else if (score_2 = 0 && score_2 <= 49) { console.log("He has received F grade - Failed") }
else {
    console.log("ther given output is ")
} //He has received A grade



let score_3 = 50
if (score_3 >= 80 && score_3 <= 100) { console.log("He has received A grade") }
else if (score_3 >= 70 && score_3 <= 79) { console.log("He has received B grade") }
else if (score_3 >= 60 && score_3 <= 69) { console.log("He has received c grade") }
else if (score_3 >= 50 && score_3 <= 59) { console.log("He has received D grade") }
else if (score_3 = 0 && score_3 <= 49) { console.log("He has received F grade - Failed") }
else {
    console.log("ther given output is ")
} //He has received D grade




let score_4 = 33
if (score_4 >= 80 && score_4 <= 100) { console.log("He has received A grade") }
else if (score_4 >= 70 && score_4 <= 79) { console.log("He has received B grade") }
else if (score_4 >= 60 && score_4 <= 69) { console.log("He has received c grade") }
else if (score_4 >= 50 && score_4 <= 59) { console.log("He has received D grade") }
else if (score_4 = 0 && score_4 <= 49) { console.log("He has received F grade - Failed") }
else {
    console.log("ther given output is ")
} //ther given output is. 




// 2. Check the season based on the user input month number ( 1 - 12 ).
//    12, 1, 2      -> Winter
//    3, 4, 5       -> Summer
//    6, 7, 8, 9    -> Rainy
//    10, 11        -> Autumn
//    anything else -> "Invalid month -> please enter a number between 1 and 12."
//    test with -> monthNum = 12, 7, 4, 15
//    HINT -> the cleanest tool here is switch -> group the month numbers with STACKED cases
//    ( fall-through ) -> all the cases above the console.log share the same output.
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
// let monthNum = 12
// let monthNum = 7
let monthNum = 7

switch (monthNum) {
    case 12:
    case 1:
    case 2: console.log("its a WINTER season.")
        break

    case 3:
    case 4:
    case 5: console.log("its a SUMMER season.")
        break

    case 6:
    case 7:
    case 8:
    case 9: console.log("its a RAINY season.")
        break


    case 10:
    case 11: console.log("its a AUTHUMN season.")
        break


    default:
        console.log("Invalid month -please enter vlide month number between  1 to 12 ")
}// Invalid month -please enter vlide month number between  1 to 12 

// monthNum = 12-> ts a WINTER season.
// monthNum = 7-> its a RAINY season.
//monthNum = 15-> Invalid month -please enter vlide month number between  1 to 12 




// 3. Check if a day is a weekend or a working day.
//    ta the day input and check it CASE INSENSITIVELY -> "Saturday", "SAturDay" and
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

let day = "Saturday"
let formated_day = day.toLowerCase()

switch (formated_day) {
    case "saturday":
    case "sunday": console.log(`${day} is a weakend `)
        break;

    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday": console.log(`${day} is a working day `)
        break;

    default:
        console.log("Invalid day -> please check the spelling.")

}//Saturday is a weakend 



let day_1 = "FrIDAy"
let formated_day_1 = day_1.toLowerCase()

switch (formated_day_1) {
    case "saturday":
    case "sunday": console.log(`${day_1} is a weakend `)
        break;

    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday": console.log(`${day_1} is a working day `)
        break;

    default:
        console.log("Invalid day -> please check the spelling.")

}//FrIDAy is a working day 


let day_2 = "Sunday"
let formated_day_2 = day_2.toLowerCase()

switch (formated_day_2) {
    case "saturday":
    case "sunday": console.log(`${day_2} is a weakend `)
        break;

    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday": console.log(`${day_2} is a working day `)
        break;

    default:
        console.log("Invalid day -> please check the spelling.")

}//Sunday is a weakend 


let day_3 = "abcd"
let formated_day_3 = day_3.toLowerCase()

switch (formated_day_3) {
    case "saturday":
    case "sunday": console.log(`${day_3} is a weakend `)
        break;

    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday": console.log(`${day_3} is a working day `)
        break;

    default:
        console.log("Invalid day -> please check the spelling.")

}//Invalid day -> please check the spelling.


/*Saturday is a weakend 
FrIDAy is a working day 
Sunday is a weakend 
Invalid day -> please check the spelling.
*/
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

let month = "January"
let formated_month = month.toLowerCase()

switch (formated_month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case " august":
    case "octomber":
    case "december": console.log(`${month}--it is 31 days month.`)
        break;

    case "april":
    case "june":
    case "september":
    case "november": console.log(`${month}--it is 30 days month.`)
        break;

    case "february": console.log(`${month}--it is 28 days month.`)
        break;

    default:
        console.log("Invalid month -> please check the spelling.")
}//January--it is 31 days month.


let month_1 = "February"
let formated_month_1 = month_1.toLowerCase()

switch (formated_month_1) {
    case "january":
    case "march":
    case "may":
    case "july":
    case " august":
    case "octomber":
    case "december": console.log(`${month_1}--it is 31 days month.`)
        break;

    case "april":
    case "june":
    case "september":
    case "november": console.log(`${month_1}--it is 30 days month.`)
        break;

    case "february": console.log(`${month_1}--it is 28 days month.`)
        break;

    default:
        console.log("Invalid month -> please check the spelling.")
}//February--it is 28 days month.

let month_2 = "february"
let formated_month_2 = month_2.toLowerCase()

switch (formated_month_2) {
    case "january":
    case "march":
    case "may":
    case "july":
    case " august":
    case "octomber":
    case "december": console.log(`${month_2}--it is 31 days month.`)
        break;

    case "april":
    case "june":
    case "september":
    case "november": console.log(`${month_2}--it is 30 days month.`)
        break;

    case "february": console.log(`${month_2}--it is 28 days month.`)
        break;

    default:
        console.log("Invalid month -> please check the spelling.")
}//february--it is 28 days month.

let month_3 = "JuNE"
let formated_month_3 = month_3.toLowerCase()

switch (formated_month_3) {
    case "january":
    case "march":
    case "may":
    case "july":
    case " august":
    case "octomber":
    case "december": console.log(`${month_3}--it is 31 days month.`)
        break;

    case "april":
    case "june":
    case "september":
    case "november": console.log(`${month_3}--it is 30 days month.`)
        break;

    case "february": console.log(`${month_3}--it is 28 days month.`)
        break;

    default:
        console.log("Invalid month -> please check the spelling.")
}//JuNE--it is 30 days month.



let month_4 = "abcd"
let formated_month_4 = month_4.toLowerCase()

switch (formated_month_4) {
    case "january":
    case "march":
    case "may":
    case "july":
    case " august":
    case "octomber":
    case "december": console.log(`${month_4}--it is 31 days month.`)
        break;

    case "april":
    case "june":
    case "september":
    case "november": console.log(`${month_4}--it is 30 days month.`)
        break;

    case "february": console.log(`${month_4}--it is 28 days month.`)
        break;

    default:
        console.log("Invalid month -> please check the spelling.")
}//Invalid month -> please check the spelling.



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

let birthYear = 1985

switch (true) {
    case birthYear >= 1981 && birthYear <= 1990: console.log("You belong to the Boomer generation.")
        break;
    case birthYear >= 1991 && birthYear <= 2000: console.log("You belong to the Millennial generation.")
        break;

case birthYear>2000:console.log("You belong to the Gen Z generation.")

default:
    console.log("Invalid birth year.")

}//You belong to the Boomer generation.


let birthYear_1= 2001

switch (true) {
    case birthYear_1>= 1981 && birthYear_1 <= 1990: console.log("You belong to the Boomer generation.")
        break;

    case birthYear_1 >= 1991 && birthYear_1<= 2000: console.log("You belong to the Millennial generation.")
        break;

case birthYear_1>2000:console.log("You belong to the Gen Z generation.")

default:
    console.log("Invalid birth year.")

}//You belong to the Gen Z generation.


//    test with -> birthYear = 1985, 1995, 2010, 1975, undefined
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


// Answer:
// The || operator returns the first truthy value.
// "monday" is a non-empty string, so it is truthy.
// Therefore, "monday" || "mon" returns "monday".

// Correct way: Use stacked cases.
let day_A = "monday"
switch (day_A) {
    case "monday":
    case "mon":
        console.log("It's Monday");
        break;
}//It's Monday

let day_B= "mon"
switch (day_B) {
    case "monday":
    case "mon":
        console.log("It's Monday");
        break;
}//It's Monday


//    b) when should you choose a switch over the else if ladder ? give one use case for each.

// Answer:
// Use switch when comparing one variable with several fixed values.
// Example: Checking a day, month, or menu option.

// Use an else-if ladder when checking different conditions or ranges.
// Example: Checking marks to assign grades.
let marks=85
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}//Grade B
//    c) what happens when you FORGET the break inside a switch ? what is this behaviour called ?
//       write a small example in comments.

// Answer:
// When break is missing, execution continues into the next case,
// even when that case does not match.
// This behaviour is called fall-through.

// Example:

let num = 1

switch (num) {
    case 1:
        console.log("One")
    case 2:
        console.log("Two")
        break;
}

// Output:
// One
// Two

// Here, both messages are printed because break keyword is missing after case 1.
 //with break
 let num_new = 1

switch (num_new ) {
    case 1:
        console.log("One")
        break;

    case 2:
        console.log("Two")
        break;
} //One 



//    d) what does the  switch ( true ) { case condition: ... }  pattern do ?
//       when do you NEED it ( what can a normal case value NOT do ) ?



// Answer:
// switch (true) is a pattern used to check multiple conditions.
// Each case condition is evaluated, and its result is compared with true.

// Example:

let marks_A= 85;

switch (true) {
    case marks_A >= 90:
        console.log("Grade A");
        break;

    case marks_A >= 75:
        console.log("Grade B");
        break;

    case marks_A >= 50:
        console.log("Grade C");
        break;

    default:
        console.log("Fail");
}

// Output:
// Grade B

// We use this pattern when checking ranges or conditions.

// A normal case value cannot directly act as a condition.
// For example, case marks >= 75: evaluates the expression and compares
// its result with the switch expression's value.
// With switch (marks), the Boolean result true will not match the number 85.
// With switch (true), it can match.


// ============================================
// SUBMISSION CHECKLIST
// 1. every task is tested with ALL the values written in the question ( change the variable, run again )
// 2. every else if ladder is GAP free and OVERLAP free
// 3. every switch -> stacked cases for shared output | break wherever needed | default last
// 4. every answer/observation is written in comments
// 5. file runs without any error -> node 07_ASSIGNMENT_JS_CONDITIONS.js
// ============================================


