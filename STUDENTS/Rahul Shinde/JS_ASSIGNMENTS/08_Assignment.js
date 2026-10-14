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

let age = 100 // TEST with -> 15 , 40 , 100
// Answer:
let seconds_lived = age * 31536000;
console.log(`A person of age ${age} has lived for ${seconds_lived} seconds.`); 

//Q1 --> PART B -> assume the maximum age of a person is 100 years
//        calculate the TOTAL seconds a person can live
//
//        expected -> 100 years = 3153600000 seconds
//
//        HINT -> same formula -> just use 100 instead of the age
// Answer:
let max_age = 100;
let total_seconds = max_age * 31536000;
console.log(`A person can live for a maximum of ${total_seconds} seconds.`);


//Q1 --> PART C -> print the CURRENT date + time in these 4 formats :
//
//        1) dd:mm:yyyy HH:mm        ( 24 hours )
//           e.g. ->  30:09:2026 21:51
// Answer:
let currentDate = new Date();
console.log(`Current date and time in format 1: ${currentDate.getDate().toString().padStart(2, '0')}:${(currentDate.getMonth() + 1).toString().padStart(2, '0')}:${currentDate.getFullYear()} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`);  
//
//        2) dd:mmm:yyyy HH:mm       ( 12 hours + am/pm , month in SHORT word -> like "oct" )
//           e.g. ->  30:sept:2026 09:51 pm
// Answer:
let monthShort = currentDate.toLocaleString("en-gb", { month: "short" }).toLowerCase();
let hours12 = currentDate.getHours() % 12 || 12;
let ampm = currentDate.getHours() >= 12 ? "pm" : "am";
currentDate.getMinutes().toString().padStart(2, '0');
console.log(`Current date and time in format 2: ${currentDate.getDate().toString().padStart(2, '0')}:${monthShort}:${currentDate.getFullYear()} ${hours12.toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')} ${ampm}`);
//
//        3) dd:mmmm:yyyy HH:mm      ( 12 hours + am/pm , month in LONG word -> like "october" )
//           e.g. ->  30:september:2026 09:51 pm
// Answer:
let monthLong = currentDate.toLocaleString("en-gb", { month: "long" }).toLowerCase();
console.log(`Current date and time in format 3: ${currentDate.getDate().toString().padStart(2, '0')}:${monthLong}:${currentDate.getFullYear()} ${hours12.toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')} ${ampm}`);
//
//        4) yyyy:mm:dd HH:mm        ( 24 hours , year comes first )
//           e.g. ->  2026:09:30 21:51
// Answer:
console.log(`Current date and time in format 4: ${currentDate.getFullYear()}:${(currentDate.getMonth() + 1).toString().padStart(2, '0')}:${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`);
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
// Answer:
let weekday = currentDate.toLocaleString("en-gb", { weekday: "long" });
let day = currentDate.getDate().toString().padStart(2, '0');
let month = currentDate.toLocaleString("en-gb", { month: "long" });
let year = currentDate.getFullYear();
let hours24 = currentDate.getHours().toString().padStart(2, '0');
let minutes = currentDate.getMinutes().toString().padStart(2, '0');
console.log(`${weekday}, ${day} ${month} ${year} ${hours24}:${minutes}`);
//
//        PART B -> 12 hour clock + am/pm
//           e.g. ->  "Monday, 02 October 2024 3:30 pm"
// Answer:
console.log(`${weekday}, ${day} ${month} ${year} ${hours12}:${minutes} ${ampm}`);
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
// Answer:
let target_date = "2026-12-31";
let targetDateObj = new Date(target_date);
let today = new Date();
let daysLeft = Math.ceil((targetDateObj - today) / (1000 * 60 * 60 * 24));
console.log(`Days left until ${target_date} : ${daysLeft}`);

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

// Answer:
let yearToCheck = new Date().getFullYear();
let isLeapYear = (yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) || yearToCheck % 400 === 0;
console.log(`${yearToCheck} is ${isLeapYear ? '' : 'not '}a leap year.`);   


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

// Answer:
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let tomorrowFormatted = `${tomorrow.getDate().toString().padStart(2, '0')}/${(tomorrow.getMonth() + 1).toString().padStart(2, '0')}/${tomorrow.getFullYear()}`;
console.log(`Tomorrow -> ${tomorrowFormatted}`);

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
// Answer:
let targetWeekdayLong = targetDateObj.toLocaleString("en-gb", { weekday: "long" });
let targetWeekdayShort = targetDateObj.toLocaleString("en-gb", { weekday: "short" });
console.log(`${target_date} is a ${targetWeekdayLong}`);
console.log(`${target_date} is a ${targetWeekdayShort}`);

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

