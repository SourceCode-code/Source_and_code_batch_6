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

let age = 25; // change this value to test other ages
let secondsInDay = 24 * 60 * 60; // calculate seconds in a day
let secondsInYear = 365 * secondsInDay; // calculate seconds in a year
let secondsLived = age * secondsInYear;

console.log(`${secondsLived} seconds.`); // print the result

// console.log(`A person of age ${age} has lived approximately ${secondsLived} seconds.`); // print the result

//Q1 --> PART B -> assume the maximum age of a person is 100 years
//        calculate the TOTAL seconds a person can live
//
//        expected -> 100 years = 3153600000 seconds
//
//        HINT -> same formula -> just use 100 instead of the age
let age1 = 100;
console.log(age1 * 365 * 24 * 60 * 60);

let age2 = 100;

let secondInDay = 24 * 60 * 60;
let secondInYear = 365 * secondInDay;
let totalSeconds = age2 * secondInYear;

// console.log(totalSeconds);
console.log(`${totalSeconds} seconds.`);

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

let today1 = new Date();
let day2 = today1.getDate();
let month2 = today1.getMonth() + 1;
let year3 = today1.getFullYear();
let hours = today1.getHours();
let minutes1 = today1.getMinutes();
let ampm1 = hours >= 12 ? "pm" : "am";
let hours12_1 = hours % 12 || 12; // convert to 12-hour format with 12 o'clock fix
let paddedDay1 = day2 < 10 ? `0${day2}` : day2;
let paddedMonth1 = month2 < 10 ? `0${month2}` : month2;
let paddedHours1 = hours < 10 ? `0${hours}` : hours;
let paddedMinutes1 = minutes1 < 10 ? `0${minutes1}` : minutes1;
let monthShort = today1
  .toLocaleString("en-gb", { month: "short" })
  .toLowerCase();
let monthLong = today1.toLocaleString("en-gb", { month: "long" }).toLowerCase();
console.log(
  `${paddedDay1}:${paddedMonth1}:${year3} ${paddedHours1}:${paddedMinutes1}`,
); // 24 hour format
console.log(
  `${paddedDay1}:${monthShort}:${year3} ${paddedHours1}:${paddedMinutes1} ${ampm1}`,
); // 12 hour format with short month
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

let currentDate = new Date();
let dayOfWeek = currentDate.toLocaleString("en-gb", { weekday: "long" });
let day1 = currentDate.getDate();
let month1 = currentDate.toLocaleString("en-gb", { month: "long" });
let year2 = currentDate.getFullYear();
let hours24 = currentDate.getHours();
let minutes = currentDate.getMinutes();
let hours12 = hours24 % 12 || 12;
const ampm = hours24 >= 12 ? "pm" : "am";
// pad the day and minutes with leading zeros if needed
let paddedDay = day1 < 10 ? `0${day1}` : day1;
let paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
console.log(
  `${dayOfWeek}, ${paddedDay} ${month1} ${year2} ${hours24}:${paddedMinutes}`,
); // 24 hour format
console.log(
  `${dayOfWeek}, ${paddedDay} ${month1} ${year2} ${hours12}:${paddedMinutes} ${ampm}`,
); // 12 hour format

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

let year1 = new Date().getFullYear(); // get the current year
let isLeapYear = (year1 % 4 === 0 && year1 % 100 !== 0) || year1 % 400 === 0; // check if it's a leap year
console.log(`${year1} is ${isLeapYear ? "" : "not "}a leap year.`); // print the result
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

let today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1); // set tomorrow's date by adding 1 to today's date
let month = tomorrow.getMonth() + 1; // getMonth() returns 0-11, so add 1
let day = tomorrow.getDate();
let year = tomorrow.getFullYear(); // getFullYear() returns the 4-digit year
console.log(
  `Tomorrow -> ${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`,
);

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

let target_date = "2026-12-31";
let targetDateObj = new Date(target_date);
let weekdayLong = targetDateObj.toLocaleString("en-gb", { weekday: "long" });
let weekdayShort = targetDateObj.toLocaleString("en-gb", { weekday: "short" });
console.log(`${target_date} is a ${weekdayLong}`);
console.log(`${target_date} is a ${weekdayShort}`);

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
