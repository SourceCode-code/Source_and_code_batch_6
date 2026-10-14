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

let year = console.log(date.getFullYear()) // 2026
let month = console.log(date.getMonth()) + 1 //
let todays_date = console.log(date.getDate) 
let hours = console.log(date.getHours())
let minute = console.log(date.getMinutes())