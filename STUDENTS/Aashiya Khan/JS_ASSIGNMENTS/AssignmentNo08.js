// ============================================
// 08_ASSIGNMENT -> TOPIC : JS DATE & TIME (+ revision of numbers, strings & conditions)
// BASED ON : LECTURE/08_date.js  +  THEORY_NOTES/08_JS_Date.md
//
// HOW TO RUN : open terminal -> node 08_ASSIGNMENT_JS_DATE_TIME.js
// RULES -> prompt() works ONLY in the browser console -> we run files with node, so every
//          "user input" is SIMULATED with a variable -> change its value, run the file again,
//          and verify ALL the cases written in the question.
//          for every task FIRST write your plan as a comment, THEN write the code and test it.
// NOTE -> date / time outputs change every minute -> the "e.g." values below are only samples.
// ============================================


// ------------------- SECTION A : SECONDS LIVED + TIME FORMATS -------------------

//Q1 --> PART A -> take the age in a variable ( starter -> let age = 25 )
//        calculate how many SECONDS the person has lived
//        ( assume 365 days per year -> ignore leap years in this question )
//
//        expected -> 25 years = 788400000 seconds
//
//        HINT -> break it down :
//                1 day  = 24 hours * 60 minutes * 60 seconds = 86400 seconds
//                1 year = 365 days -> 365 * 86400 = 31536000 seconds
//                then multiply by the age

let age = 25 // TEST with -> 15 , 40 , 100

let secondsInOneDay = 24 * 60 * 60;
let secondsInOneYear = 365 * secondsInOneDay;
let totalSeconds = age * secondsInOneYear;

console.log(`${age} years = ${totalSeconds} seconds`);

// Output: 25 years = 788400000 seconds

let age1 = 15 // TEST with -> 15 , 40 , 100

let secondsInOneDay1 = 24 * 60 * 60;
let secondsInOneYear1 = 365 * secondsInOneDay1;
let totalSeconds1 = age1 * secondsInOneYear1;

console.log(`${age1} years = ${totalSeconds1} seconds`);

let age3 = 100 // TEST with -> 15 , 40 , 100

let secondsInOneDay3 = 24 * 60 * 60;
let secondsInOneYear3 = 365 * secondsInOneDay3;
let totalSeconds3 = age3 * secondsInOneYear3;

console.log(`${age3} years = ${totalSeconds3} seconds`);

let age2 = 40 // TEST with -> 15 , 40 , 100

let secondsInOneDay2 = 24 * 60 * 60;
let secondsInOneYear2 = 365 * secondsInOneDay2;
let totalSeconds2 = age2 * secondsInOneYear2;

console.log(`${age2} years = ${totalSeconds2} seconds`);


//Q1 --> PART B -> assume the maximum age of a person is 100 years
//        calculate the TOTAL seconds a person can live
//
//        expected -> 100 years = 3153600000 seconds
//
//        HINT -> same formula -> just use 100 instead of the age

let secondsInOneDay3_ = 24 * 60 * 60;
let secondsInOneYear3_ = 365 * secondsInOneDay3_;
let totalSeconds3_ = 100 * secondsInOneYear3_;

console.log(`${100} years = ${totalSeconds3_} seconds`);

//Q1 --> PART C -> print the CURRENT date + time in these 4 formats :
//
//        1) dd:mm:yyyy HH:mm        ( 24 hours )
//           e.g. ->  30:09:2026 21:51
let date= new Date()
let yaer =date.getFullYear()
let month= date.getMonth()+1
let month_=month<10?`0${month}`:month
let dat_=date.getDate()
let hr=date.getHours()
let min=date.getMinutes()
let fomMin=min<10?`0${min}`:min
let sec=date.getSeconds()
console.log(`${dat_}:${month_}:${yaer} ${hr}:${fomMin}`)



//        2) dd:mmm:yyyy HH:mm       ( 12 hours + am/pm , month in SHORT word -> like "oct" )
//           e.g. ->  30:sept:2026 09:51 pm
let month1= date.toLocaleString("en-gb", { month: "short" })
let dat1=date.getDate()
let sec1=date.getSeconds()
let ampm=hr<12?"am":"pm"

console.log(`${dat_}:${month1}:${yaer} ${hr}:${fomMin}:${ampm}`)
//
//        3) dd:mmmm:yyyy HH:mm      ( 12 hours + am/pm , month in LONG word -> like "october" )
//           e.g. ->  30:september:2026 09:51 pm
let month2= date.toLocaleString("en-gb", { month: "long" })
console.log(`${dat_}:${month2}:${yaer} ${hr}:${fomMin}:${ampm}`)

//
//        4) yyyy:mm:dd HH:mm        ( 24 hours , year comes first )
//           e.g. ->  2026:09:30 21:51
console.log(`${yaer}:${month}:${dat_} ${hr}:${fomMin}`)

//        HINTS ->
//        - date parts      -> getDate() , getMonth() + 1 , getFullYear()   ( notes -> section 2 )
//        - month words     -> toLocaleString("en-gb", { month: "short" })  -> "Sept"
//                             -> add .toLowerCase() -> "sept"              ( notes -> section 3 )
//        - pad the numbers -> value < 10 ? `0${value}` : value             ( notes -> section 4 )
//        - 12 hour time    -> hour % 12 with the 12 o'clock fix + AM / PM  ( notes -> section 5 )
//
//        NOTES ->
//        - pad the hours and minutes -> "9:5 pm" is wrong -> "09:05 pm"
//        - use ONE date object and reuse it ( do not create a new Date() for every line )

/**
 * SAMPLE ( run on 30-09-2026 at 21:51 )
 *
 * 30:09:2026 21:51
 * 30:sept:2026 09:51 pm
 * 30:september:2026 09:51 pm
 * 2026:09:30 21:51
 */

// ------------------- SECTION B : FULL DATE STRING -------------------

//Q2 --> return the date in this format ->  "Day of the Week, DD Month YYYY HH:mm"
//
//        PART A -> 24 hour clock
//           e.g. ->  "Monday, 02 October 2024 15:30"
let day=date.getDay()
console.log(`"${dat_} ${month2} ${yaer}  ${hr}:${min}"`)
//
//        PART B -> 12 hour clock + am/pm
//           e.g. ->  "Monday, 02 October 2024 3:30 pm"
//
//        HINTS ->
//        - weekday word -> toLocaleString("en-gb", { weekday: "long" })  -> "Monday"
//        - month word   -> toLocaleString("en-gb", { month: "long" })    -> "October"
//        - DD -> pad the date with the ternary -> 02 ( pad ONLY the date here )
//        - time -> build it like exercise 1 -> and remember -> minutes stay padded -> "3:05 pm"
//        - join everything with a template literal ( lecture 04 )
//
//        NOTE -> in PART B the hour does NOT need a leading zero -> "3:30 pm" ( like the example )

/**
 * SAMPLE ( run on 30-09-2026 at 21:51 )
 *
 * Wednesday, 30 September 2026 21:51
 * Wednesday, 30 September 2026 9:51 pm
 */


// ------------------- SECTION C : DAYS LEFT UNTIL A SPECIFIC DATE -------------------

//Q3 --> take a target date -> let target_date = "2026-12-31"    ( input format -> YYYY-MM-DD )
//
//        calculate HOW MANY DAYS are left BETWEEN TODAY and the target date
//        and print ->  "Days left until 2026-12-31 : 92"
//
//        HINTS ->
//        - new Date("2026-12-31") -> creates a date object from a string
//        - subtracting two dates -> ( target_date_obj - today ) -> the result is in MILLISECONDS
//        - convert ms -> days -> divide by ( 1000 * 60 * 60 * 24 )   ( ms in one day )
//        - wrap it with Math.ceil() -> so a partially started day counts as a full day ( lecture 03 )
//        - print the result with a template literal
//        - TEST with -> "2027-01-01" and "2026-10-01" and check the numbers
//
//        THINK -> what will the answer be when the target date is IN THE PAST ?
//Q3 --> take a target date -> let target_date = "2026-12-31"    ( input format -> YYYY-MM-DD )
//
//        calculate HOW MANY DAYS are left BETWEEN TODAY and the target date
//        and print ->  "Days left until 2026-12-31 : 92"
//
//        HINTS ->
//        - new Date("2026-12-31") -> creates a date object from a string
//        - subtracting two dates -> ( target_date_obj - today ) -> the result is in MILLISECONDS
//        - convert ms -> days -> divide by ( 1000 * 60 * 60 * 24 )   ( ms in one day )
//        - wrap it with Math.ceil() -> so a partially started day counts as a full day ( lecture 03 )
//        - print the result with a template literal
//        - TEST with -> "2027-01-01" and "2026-10-01" and check the numbers
//
//        THINK -> what will the answer be when the target date is IN THE PAST ?


let target_date = "2026-12-31";

// Convert target date string into a Date object
let target_date_obj = new Date(target_date);

// Get today's date
let today = new Date();

// Calculate difference in milliseconds
let difference = target_date_obj - today;

// Convert milliseconds into days
let days_left = Math.ceil(difference / (1000 * 60 * 60 * 24));

// Print the result
console.log(`Days left until ${target_date} : ${days_left}`);


/**
 * SAMPLE ( run on 30-09-2026 )
 *
 * Days left until 2026-12-31 : 92
 */


// ------------------- SECTION D : LEAP YEAR -------------------

//Q4 --> check if a year is a LEAP YEAR -> print -> "2026 is not a leap year"
//
//        RULES of a leap year ( write them in a comment first ) :
//        1) the year is divisible by 4          -> year % 4 === 0
//        2) century years ( like 1900 , 2100 ) are NOT leap years
//           -> UNLESS the year is divisible by 400
//
//        the final formula -> ( year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0
//
//        HINTS ->
//        - start with the CURRENT year -> new Date().getFullYear()
//        - print the message with a TERNARY ( lectures 06 + 07 )
//        - TEST by changing the year variable -> 2024 ( leap ) , 2025 ( not ) ,
//          2000 ( leap ) , 1900 ( NOT leap -> century rule )

/*
Leap Year Rules:
1) The year must be divisible by 4.
2) Century years (like 1900 and 2100) are NOT leap years.
3) Century years are leap years ONLY if divisible by 400.

Final Formula:
(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
*/

let year = new Date().getFullYear();

let result = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? `${year} is a leap year`
    : `${year} is not a leap year`;

console.log(result);


/**
 * SAMPLE ( run in 2026 )
 *
 * 2026 is not a leap year
 */


// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q5 --> BONUS -> TOMORROW'S DATE ->
//        print TOMORROW's date in dd/mm/yyyy format ->  e.g.  "Tomorrow -> 01/10/2026"
//
//        HINT -> store today's date in a variable , then setDate( getDate() + 1 )
//                ( lecture 08 -> SECTION 7 , set methods )
//        THINK -> what happens when today is the LAST day of the month ?
//                 does setDate() handle the overflow by itself ?

/**
 * SAMPLE ( run on 30-09-2026 )
 *
 * Tomorrow -> 01/10/2026
 */

//Q6 --> BONUS -> WEEKDAY OF THE TARGET DATE ->
//        take the target date from exercise 3 -> "2026-12-31"
//        print which weekday it is ->  "2026-12-31 is a Thursday"
//
//        HINTS ->
//        - toLocaleString("en-gb", { weekday: "long" }) works on ANY date object
//        - EXTRA -> also print the SHORT weekday -> "Thu" -> { weekday: "short" }

/**
 * SAMPLE
 *
 * 2026-12-31 is a Thursday
 * 2026-12-31 is a Thu
 */


// ============================================
// SUBMISSION CHECKLIST
// 1. all 4 time formats ( Q1 ) print correct separators , padded numbers and am/pm
// 2. every value is tested with ALL the cases written in the question ( change the variable , run again )
// 3. leap year is tested for -> 2024 , 2025 , 2000 , 1900
// 4. every answer / observation is written in comments
// 5. file runs without any error -> node 08_ASSIGNMENT_JS_DATE_TIME.js
// ============================================

