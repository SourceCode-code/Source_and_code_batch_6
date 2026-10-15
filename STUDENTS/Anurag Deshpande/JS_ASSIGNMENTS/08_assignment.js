
console.log("==========================================")
console.log("assignment 08")
console.log("section A ")
console.log("==========================================")

//Q1 --> PART A -> take the age in a variable ( starter -> let age = 25 )
console.log("Q1")
//        calculate how many SECONDS the person has lived
//        ( assume 365 days per year -> ignore leap years in this question )
//        expected -> 25 years = 788400000 seconds
let age = 25
let secondsInOneDay = 24* 60 * 60 
let secondesInOneYear = 365 * secondsInOneDay
let secondsLived = age * secondesInOneYear
console.log(`${age} years = ${secondsLived} seconds`)

//other Output: 
// For age = 25 -> 788400000 seconds
// For age = 15 -> 473040000 seconds
// For age = 40 -> 1261440000 seconds
// For age = 100 -> 3153600000 seconds

console.log("==========================================")

//Q1 --> PART C -> print the CURRENT date + time in these 4 formats :
//        1) dd:mm:yyyy HH:mm        ( 24 hours )
//           e.g. ->  30:09:2026 21:51
//        2) dd:mmm:yyyy HH:mm       ( 12 hours + am/pm , month in SHORT word -> like "oct" )
//           e.g. ->  30:sept:2026 09:51 pm
//        3) dd:mmmm:yyyy HH:mm      ( 12 hours + am/pm , month in LONG word -> like "october" )
//           e.g. ->  30:september:2026 09:51 pm
//        4) yyyy:mm:dd HH:mm        ( 24 hours , year comes first )
//           e.g. ->  2026:09:30 21:51

let date = new Date()
console.log(date)

// Store the values in variables
let year = date.getFullYear() 
let month = date.getMonth() + 1
let todays_date = date.getDate()  //() bracket is necessary if not then we get this output : [Function: getDate]
let hours = date.getHours()
let minute = date.getMinutes()

console.log(`${year}`, `${month}`, `${todays_date}`, `${hours}`, `${minute}`)

// Add 0 in front of values less than 10
let dd = todays_date < 10 ? `0${todays_date}` : todays_date
let mm = month < 10 ? `0${month}` : month
let hh = hours < 10 ? `0${hours}` : hours
let min = minute < 10 ? `0${minute}` : minute

// Convert to 12-hour format
let hour12 = hours % 12
hour12 = hour12 === 0 ? 12 : hour12

let hh12 = hour12 < 10 ? `0${hour12}` : hour12
let ampm = hours >= 12 ? "pm" : "am"

let shortMonth = date.toLocaleString("en-GB", { month: "short" })
let longMonth = date.toLocaleString("en-GB", { month: "long" })

// Format 1: dd:mm:yyyy HH:mm
console.log(`${dd}:${mm}:${year} ${hh}:${min}`)

// Format 2: dd:mmm:yyyy hh:mm am/pm
console.log(`${dd}:${shortMonth}:${year} ${hh12}:${min} ${ampm}`)

// Format 3: dd:mmmm:yyyy hh:mm am/pm
console.log(`${dd}:${longMonth}:${year} ${hh12}:${min} ${ampm}`)

// Format 4: yyyy:mm:dd HH:mm
console.log(`${year}:${mm}:${dd} ${hh}:${min}`)

console.log("=================================")

console.log("Section B ")
console.log("Q2")

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

/**
 * SAMPLE ( run on 30-09-2026 at 21:51 )
 *
 * Wednesday, 30 September 2026 21:51
 * Wednesday, 30 September 2026 9:51 pm
 */

let currentDate = new Date();

let weekday = currentDate.toLocaleString("en-gb", {
    weekday: "long"
});

let monthName = currentDate.toLocaleString("en-gb", {
    month: "long"
});

let currentDay = currentDate.getDate()
let currentMonth = currentDate.getMonth() + 1
let currentYear = currentDate.getFullYear()

let currentHours = currentDate.getHours()
let currentMinutes = currentDate.getMinutes()

let formattedDay = currentDay < 10 ? `0${currentDay}` : currentDay
let formattedMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes

// PART A -> 24-hour clock
let time24 = `${currentHours < 10 ? `0${currentHours}` : currentHours}:${formattedMinutes}`

console.log(`${weekday}, ${formattedDay} ${monthName} ${currentYear} ${time24}`)
//Thursday, 15 October 2026 15:39

// PART B -> 12-hour clock + am/pm
let timeHours12 = currentHours % 12
timeHours12 = timeHours12 === 0 ? 12 : timeHours12

let timeAmPm = currentHours >= 12 ? "pm" : "am"

console.log(`${weekday}, ${formattedDay} ${monthName} ${currentYear} ${timeHours12}:${formattedMinutes} ${timeAmPm}`)
//Thursday, 15 October 2026 3:39 pm

console.log("=================================")
console.log("Section C")
console.log("Q3")


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

let target_date = "2026-12-31";

let targetDateObj = new Date(target_date + "T00:00:00");
let todayDateObj = new Date();

todayDateObj.setHours(0, 0, 0, 0);

let difference = targetDateObj - todayDateObj;
let daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

console.log(`Days left until ${target_date} : ${daysLeft}`); //Days left until 2026-12-31 : 77

console.log("=================================")
console.log("Section D")
console.log("Q4")


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

let checkYear = new Date().getFullYear()


let isLeapYear = (checkYear % 4 === 0 && checkYear % 100 !== 0) ||checkYear % 400 === 0

console.log(isLeapYear? `${checkYear} is a leap year`: `${checkYear} is not a leap year`)

// checkYear = 2026 -> 2026 is not a leap year
// checkYear = 2024 -> 2024 is a leap year
// checkYear = 2025 -> 2025 is not a leap year
// checkYear = 2000 -> 2000 is a leap year
// checkYear = 1900 -> 1900 is not a leap year
