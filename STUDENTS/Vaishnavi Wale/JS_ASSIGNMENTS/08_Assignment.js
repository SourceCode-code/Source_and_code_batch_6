// ============================================
// 08_ASSIGNMENT -> TOPIC : JS DATE & TIME (+ revision of numbers, strings & conditions)
// BASED ON : LECTURE/08_date.js  +  THEORY_NOTES/08_JS_Date.md
//
// HOW TO RUN : open terminal -> node 08_ASSIGNMENT.js
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

let age = 100 // TEST with -> 15 , 40 , 100
let one_day = 24 * 60 * 60                         // seconds in one day
let one_year = 365 * one_day
let seconds_lived = age * one_year

console.log(`Age : ${age} years -> Seconds lived : ${seconds_lived}`)

/**
 * Age : 25 years -> Seconds lived : 788400000
 * 
 * Age : 15 years -> Seconds lived : 473040000
 * 
 * Age : 40 years -> Seconds lived : 1261440000
 * 
 * Age : 100 years -> Seconds lived : 3153600000
 */



//Q1 --> PART B -> assume the maximum age of a person is 100 years
//        calculate the TOTAL seconds a person can live
//
//        expected -> 100 years = 3153600000 seconds
//
//        HINT -> same formula -> just use 100 instead of the age 

let max_age = 100
let total_seconds= max_age * one_year

console.log(`Age : ${max_age} years -> Seconds lived : ${total_seconds}`)

// OUTPUT : Age : 100 years -> Seconds lived : 3153600000


//Q1 --> PART C -> print the CURRENT date + time in these 4 formats :
//
//        1) dd:mm:yyyy HH:mm        ( 24 hours )
//           e.g. ->  30:09:2026 21:51
//
//        2) dd:mmm:yyyy HH:mm       ( 12 hours + am/pm , month in SHORT word -> like "oct" )
//           e.g. ->  30:sept:2026 09:51 pm
//
//        3) dd:mmmm:yyyy HH:mm      ( 12 hours + am/pm , month in LONG word -> like "october" )
//           e.g. ->  30:september:2026 09:51 pm
//
//        4) yyyy:mm:dd HH:mm        ( 24 hours , year comes first )
//           e.g. ->  2026:09:30 21:51
//
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

// ANSWER:

// 1) dd:mm:yyyy HH:mm        ( 24 hours )
let date1 = new Date()
let current_year1 = date1.getFullYear()
let current_month1 = date1.getMonth() + 1 
let current_date1 = date1.getDate()
let current_hours1 = date1.getHours()
let current_minutes1 = date1.getMinutes()

console.log(`0${current_date1}:${current_month1}:${current_year1} ${current_hours1}:${current_minutes1}`)

//  2) dd:mmm:yyyy HH:mm       ( 12 hours + am/pm , month in SHORT word -> like "oct" )
//           e.g. ->  30:sept:2026 09:51 pm

let shortmonth = date1.toLocaleString("en-gb", { month: "short" })

let am_pm = current_hours1 < 12 ? "AM" : "PM"

let hours_12 = current_hours1 % 12 == 0 ? 12 : current_hours1 % 12

console.log(`0${current_date1}:${shortmonth}:${current_year1} ${hours_12}:${current_minutes1} ${am_pm}`)

//  3) dd:mmmm:yyyy HH:mm      ( 12 hours + am/pm , month in LONG word -> like "october" )
//           e.g. ->  30:september:2026 09:51 pm

let longMonth = date1.toLocaleString("en-gb", {month: "long"})

console.log(`0${current_date1}:${longMonth}:${current_year1} ${hours_12}:${current_minutes1} ${am_pm}`)

//  4) yyyy:mm:dd HH:mm        ( 24 hours , year comes first )

console.log(`${current_year1}:${current_month1}:0${current_date1} ${current_hours1}:${current_minutes1}`)

/**
 * SAMPLE ( run on 04:10:2026 13:32)
 *
 * 04:10:2026 13:32
 * 04:Oct:2026 1:42 PM
 * 04:October:2026 1:44 PM
 * 2026:10:04 13:46
 */

// ------------------- SECTION B : FULL DATE STRING -------------------

//Q2 --> return the date in this format ->  "Day of the Week, DD Month YYYY HH:mm"
//
//        PART A -> 24 hour clock
//           e.g. ->  "Monday, 02 October 2024 15:30"

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

//ANSWER:

let changed_time = new Date()

let change_Date = changed_time.getDate()
let change_Month = changed_time.getMonth() + 1
let change_Year = changed_time.getFullYear()
let change_Day = changed_time.getDay()
let change_Hour = changed_time.getHours()
let change_Minutes = changed_time.getMinutes()

console.log(change_Date)
console.log(change_Month)
console.log(change_Year )
console.log(change_Day)

let DayName = changed_time.toLocaleString("en-gb" ,{ weekday: "long" })
let FullMonth = changed_time.toLocaleString("en-gb", {month : "long"})

changed_time.setDate(change_Date - 4)
changed_time.setMonth(change_Month)
changed_time.setFullYear(change_Year - 2)
changed_time.setHours(change_Hour - 4)
changed_time.setMinutes(change_Minutes + 1)


let hours_ = change_Hour % 12 === 0 ? 12 : change_Hour % 12

console.log(`${DayName},${changed_time.getDate()} ${FullMonth} ${changed_time.getFullYear()} ${changed_time.getHours()}:${changed_time.getMinutes()}`)

console.log(`${DayName},${changed_time.getDate()} ${FullMonth} ${changed_time.getFullYear()} ${hours_}:${changed_time.getMinutes()}`)


/**
 * Part A Ans: 
 * 
 * Tuesday,2 October 2024 15:30
 * 
 * Part B Ans: 
 * 
 * Tuesday,2 October 2024 7:30
 * 
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
// 5. file runs without any error -> node 08_ASSIGNMENT.js
// ============================================


