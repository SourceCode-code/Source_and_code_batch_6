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


let secondIn_1_Day = 24 * 60 * 60
let secondIn_1_Year = 365 * secondIn_1_Day
let totalSeconds = 25 * secondIn_1_Year
console.log(`25 years = ${totalSeconds} seconds `) //25 years = 788400000 seconds



//Q1 --> PART B -> assume the maximum age of a person is 100 years
//        calculate the TOTAL seconds a person can live
//
//        expected -> 100 years = 3153600000 seconds
//
//        HINT -> same formula -> just use 100 instead of the age
let maxAge = 100
let secondsIn_1Day = 24 * 60 * 60
let secondsIn_1Year = 365 * secondsIn_1Day
let Total_seconds = maxAge * secondsIn_1Year
console.log(`100 years = ${Total_seconds} seconds `) //100 years = 3153600000 seconds  


//Q1 --> PART C -> print the CURRENT date + time in these 4 formats :
//
//        1) dd:mm:yyyy HH:mm        ( 24 hours )
//           e.g. ->  30:09:2026 21:51
let date = new Date
let current_date = date.getDate()
let current_month = date.getMonth() + 1
let current_Year = date.getFullYear()
let current_Hour = date.getHours()
let current_Minutes = date.getMinutes()
console.log(`${current_date}/${current_month}/${current_Year}  ${current_Hour}:${current_Minutes}`) //12/10/2026  16:23
//

//        2) dd:mmm:yyyy HH:mm       ( 12 hours + am/pm , month in SHORT word -> like "oct" )
//           e.g. ->  30:sept:2026 09:51 pm
let short_month = date.toLocaleString("en-gb", { month: "short" })
let cur_min = date.getMinutes()
let cur_hour = date.getHours()
let hours_12 = (cur_hour % 12 === 0) ? 12 : cur_hour % 12
let pad_hour = hours_12 < 10 ? `0${hours_12}` : hours_12
let pad_min = cur_min < 10 ? `0${cur_min}` : cur_min
let ampm = cur_hour < 12 ? "AM" : "PM"

console.log(`${current_date}:${short_month}:${current_Year} ${pad_hour}:${pad_min} ${ampm}`) //12:Oct:2026 09:03 PM
//        3) dd:mmmm:yyyy HH:mm      ( 12 hours + am/pm , month in LONG word -> like "october" )
//           e.g. ->  30:september:2026 09:51 pm
let cur_date = date.getDate()
let long_month = date.toLocaleString("en-gb", { month: "long" })
let cur_year = date.getFullYear()
let Hours_12 = cur_hour % 12 === 0 ? 12 : cur_hour % 12
let pad_hours = (Hours_12 < 12) ? `0${Hours_12}` : Hours_12
console.log(`${cur_date}:${long_month}:${cur_date} ${pad_hours}:${pad_min} ${ampm}`) //13:October:2026 12:14 AM
//        4) yyyy:mm:dd HH:mm        ( 24 hours , year comes first )
//           e.g. ->  2026:09:30 21:51
//
let cur_Date = date.getDate()
let cur_Month = date.getMonth() + 1
let pad_Month = cur_Month < 10 ? `0${cur_Month}` : cur_Month
console.log(`${cur_year}:${pad_Month}:${cur_Date} ${pad_hours}:${pad_min} `) //2026:10:13 12:27 
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
//


let date_1 = new Date
let weekday = date.getDay()
let long_weekday = date.toLocaleString("en-gb", { weekday: "long" })

let today_date = date_1.getDate()
let pad_today_date = today_date < 10 ? `0${today_date}` : today_date
let this_month = date.getMonth() + 1
let long_Month = date.toLocaleString("en-gb", { month: "long" })
let Year = date.getFullYear()

let hours = date.getHours()
let pad_hours_1 = hours < 10 ? `0${hours}` : hours
let min = date.getMinutes()
let pad_min_1 = min < 10 ? `0${min}` : min

console.log(`"${long_weekday}, ${pad_today_date} ${long_Month} ${Year}  ${pad_hours_1}:${pad_min_1}"`) //"Tuesday, 13 October 2026  01:00"

//        PART B -> 12 hour clock + am/pm
//           e.g. ->  "Monday, 02 October 2024 3:30 pm"
//
let dayOfWeek = date.getDay()
let formated_dayOfWeek = date.toLocaleString("en-gb", { weekday: "long" })

let todays_date = date.getDate()
let formated_todays_date = todays_date < 10 ? `0${todays_date}` : todays_date
let Month = date.getMonth()
let formated_Month = date.toLocaleString("en-gb", { month: "long" })
let Years = date.getFullYear()

let hours_1 = date.getHours()
let AM_PM = hours_1 < 12 ? "am" : "pm"
let pad_hours_2 = hours_1 < 10 ? `0${hours_1}` : hours_1

let Min = date.getMinutes()
let formated_min = Min < 10 ? `0${Min}` : Min

console.log(`"${formated_dayOfWeek}, ${formated_dayOfWeek} ${formated_Month} ${Years}  ${pad_hours_2}:${formated_min} ${AM_PM}"`)
//"Tuesday, Tuesday October 2026  01:14 am"


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

/**
 * SAMPLE ( run on 30-09-2026 )
 *
 * Days left until 2026-12-31 : 92
 */
// let date_2=new Date()
let tadays_date = new Date("2026-10-01")
let target_date = new Date("2027-01-01")
let Remaining_days = Math.ceil((target_date - tadays_date) / (1000 * 60 * 60 * 24))

console.log(`${tadays_date}: ${Remaining_days}`)




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

let current_year = new Date().getFullYear()
let leap_year = ((current_year % 4 === 0 && current_year % 100 !== 0) || current_year % 400 === 0) ? `${current_year} is leap year` : `${current_year} is not a leap year`
console.log(leap_year) //2026 is not a leap year

let year = 2024
let leap_year_1 = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? `${year} is leap year` : `${year} is not a leap year`
console.log(leap_year_1) //2024 is leap year


let year_1 = 2025
let leap_year_2 = ((year_1 % 4 === 0 && year_1 % 100 !== 0) || year_1 % 400 === 0) ? `${year_1} is leap year` : `${year_1} is not a leap year`
console.log(leap_year_2) //2025 is not a leap year

let year_2 = 2000
let leap_year_3 = ((year_2 % 4 === 0 && year_2 % 100 !== 0) || year_2 % 400 === 0) ? `${year_2} is leap year` : `${year_2} is not a leap year`
console.log(leap_year_3) //2000 is leap year


let year_3 = 1900
let leap_year_4 = ((year_3 % 4 === 0 && year_3 % 100 !== 0) || year_3 % 400 === 0) ? `${year_3} is leap year` : `${year_3} is not a leap year`
console.log(leap_year_4) //1900 is not a leap year


/**
 * 
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

// // 1. Store today's date in a variable
// let today = new Date();

// // 2. Set the date to tomorrow (setDate handles the overflow automatically)
// today.setDate(today.getDate() + 1);

// // 3. Extract day, month, and year with proper padding
// let day = String(today.getDate()).padStart(2, '0');
// let month = String(today.getMonth() + 1).padStart(2, '0'); // +1 because January is 0
// let year = today.getFullYear();

// // 4. Print tomorrow's date in dd/mm/yyyy format
// console.log(`Tomorrow -> ${day}/${month}/${year}`);


let date_A = new Date()
// let todays_date_A = date_A.getDate()
let tomorrows_date = new Date()
tomorrows_date.setDate(date_A.getDate()+ 1)

let formated_todays_date_A = (tomorrows_date< 10) ? `0${tomorrows_date}`:tomorrows_date

let THIS_Month = date_A.getMonth() + 1
let formated_THIS_Month = (THIS_Month < 10) ? `0${THIS_Month}` : THIS_Month

let YEAr = date_A.getFullYear()
console.log(tomorrows_date)

console.log(`${formated_todays_date_A }/${formated_THIS_Month}/${YEAr}`)//13/10/2026
console.log(`${tomorrows_date}/${formated_THIS_Month}/${YEAr}`)

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
const targetDateStr = "2026-12-31"
const targetDate = new Date(targetDateStr);
const longWeekday = targetDate.toLocaleString("en-gb", { weekday: "long" });
const shortWeekday = targetDate.toLocaleString("en-gb", { weekday: "short" });

console.log(`${targetDateStr} is a ${longWeekday}`)//2026-12-31 is a Thursday
console.log(`${targetDateStr} is a ${shortWeekday}`)//2026-12-31 is a Thu

//==================================================
let TargetDate_new = "2026/11/25"
let target_date_new = new Date(TargetDate_new)
let long_weekDay = target_date_new .toLocaleString("en-gb", { weekday: "long" })
let short_weekDay = target_date_new.toLocaleString("en-gb", { weekday: "short" })

console.log(`${TargetDate_new} is a ${long_weekDay}`)//2026/11/25 is a Wednesday
console.log(`${TargetDate_new} is a ${short_weekDay}`)//2026/11/25 is a Wed
// ============================================
// SUBMISSION CHECKLIST
// 1. all 4 time formats ( Q1 ) print correct separators , padded numbers and am/pm
// 2. every value is tested with ALL the cases written in the question ( change the variable , run again )
// 3. leap year is tested for -> 2024 , 2025 , 2000 , 1900
// 4. every answer / observation is written in comments
// 5. file runs without any error -> node 08_ASSIGNMENT_JS_DATE_TIME.js
// ============================================

