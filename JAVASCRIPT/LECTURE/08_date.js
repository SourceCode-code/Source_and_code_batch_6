// ============================================================
// 08 - JAVASCRIPT : DATE
// ============================================================

// SECTION 1 -> WHAT IS THE DATE OBJECT ?

// Date -> a built-in JS object used to DISPLAY and MANIPULATE date and time

// NOTE -> the default output of a Date object is NOT human friendly :
// 2026-09-30T16:18:42.798Z -> this is the ISO format ( UTC time )
// -> the Z at the end means UTC ( zulu time ) -> NOT your local time

// in our programs / automation we always need the HUMAN format ->
// dd/mm/yyyy        mm/dd/yyyy        HH:MM:SS        HH:MM

// step 1 -> create ( store ) the date object into a variable

let date = new Date()

console.log(date) // e.g. 2026-09-30T16:18:42.798Z  ( sample run -> changes every run )

// ============================================================
// SECTION 2 -> GET METHODS ( read the parts )
// ============================================================

// getFullYear() -> returns the current year in 4 digits

console.log(date.getFullYear()) // e.g. 2026

// getMonth() -> returns the current month as an INDEX
// -> january = 0 , february = 1 ... december = 11 ( the month is stored in index )
// -> so for the HUMAN format always ADD + 1

console.log(date.getMonth())     // e.g. 8  ( september is stored as index 8 )
console.log(date.getMonth() + 1) // e.g. 9  ( september as humans read it )

// getDate() -> returns the date ( day of the month -> 1 to 31 )

console.log(date.getDate()) // e.g. 30

// getDay() -> returns the WEEKDAY as an index -> 0 = sunday , 1 = monday ... 6 = saturday

console.log(date.getDay()) // e.g. 3  ( wednesday )

// month / weekday as WORDS -> toLocaleString( locale , options )

let shortmonth = date.toLocaleString("en-gb", { month: "short" }) // e.g. Sept
let longmonth = date.toLocaleString("en-gb", { month: "long" })   // e.g. September

let dayname = date.toLocaleString("en-gb", { weekday: "long" })   // e.g. Wednesday

console.log(shortmonth)
console.log(longmonth)
console.log(dayname)

// ============================================================
// SECTION 3 -> HUMAN FORMAT DATE ( dd/mm/yyyy )
// ============================================================

// collect the parts first -> then join them using a template literal

let cur_year = date.getFullYear()
let cur_month = date.getMonth() + 1
let cur_date = date.getDate()

// human format -> DD/MM/YYYY

console.log(`${cur_date}/${cur_month}/${cur_year} - ${dayname}`) // e.g. 30/9/2026 - Wednesday
console.log(`${cur_date}/${shortmonth}/${cur_year}`)              // e.g. 30/Sept/2026
console.log(`${cur_date}/${longmonth}/${cur_year}`)               // e.g. 30/September/2026

// NOTE -> 30/9/2026 looks odd -> the normal format PADS single digits with a leading zero -> 30/09/2026
// padding rule -> "if the value is less than 10 -> put a 0 in front"

let format_month = cur_month < 10 ? `0${cur_month}` : cur_month
let format_date = cur_date < 10 ? `0${cur_date}` : cur_date

console.log(`${format_date}/${format_month}/${cur_year}`) // e.g. 30/09/2026

// ============================================================
// SECTION 4 -> TIME ( 24 hour format )
// ============================================================

// getHours()   -> hours   ( 0 - 23 )
// getMinutes() -> minutes ( 0 - 59 )
// getSeconds() -> seconds ( 0 - 59 )

let cur_hour = date.getHours()
let cur_min = date.getMinutes()
let cur_sec = date.getSeconds()

console.log(`${cur_hour}:${cur_min}:${cur_sec}`) // e.g. 21:48:42  ( 24 hour format )

// ============================================================
// SECTION 5 -> TIME ( 12 hour format + AM / PM )
// ============================================================

// 24 hour to 12 hour conversion -> hour % 12
// -> 21 % 12 = 9 ( 9 PM )   |   13 % 12 = 1 ( 1 PM )

let ampm = cur_hour < 12 ? "AM" : "PM" // hours before 12 -> AM , hours 12 and after -> PM

// MISTAKE TO AVOID -> 12 % 12 = 0 -> at 12 o'clock it would show 0 ( 0:xx PM )
// -> the fix -> when the remainder is 0 -> display 12

let hours_12 = cur_hour % 12 === 0 ? 12 : cur_hour % 12

console.log(`${hours_12}:${cur_min}:${cur_sec} ${ampm}`) // e.g. 9:48:42 PM  ( not padded )

// pad the time parts exactly like we padded the date

let pad_hour = hours_12 < 10 ? `0${hours_12}` : hours_12
let pad_min = cur_min < 10 ? `0${cur_min}` : cur_min
let pad_sec = cur_sec < 10 ? `0${cur_sec}` : cur_sec

console.log(`${pad_hour}:${pad_min}:${pad_sec} ${ampm}`) // e.g. 09:48:42 PM  ( padded )

// ============================================================
// SECTION 6 -> ALL OF THIS IN A SINGLE LINE ( options object )
// ============================================================

// toLocaleString() can build the whole format for us with an OPTIONS object
// -> "en-gb" locale -> day/month/year order   |   "en-us" -> month/day/year

let current_date_time = date.toLocaleString("en-gb", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit", // NOTE -> the key is second ( SINGULAR ) -> "seconds" is silently IGNORED
    hour12: true
})

console.log(current_date_time) // e.g. 30/09/2026, 09:48:42 pm

// ============================================================
// SECTION 7 -> SET METHODS ( manipulate / change the date )
// ============================================================

// get methods -> READ the parts of the date   |   set methods -> CHANGE the parts

// NOTE -> the set methods MUTATE the original object ( they change it directly )
// -> they also RETURN a number -> a timestamp ( milliseconds since 1 jan 1970 ) , NOT the date object
// -> so never store a set method inside a date variable ( the classic mistake )

// setDate() -> change the day of the month
// -> JS handles the OVERFLOW automatically -> 30 + 5 = 35 -> rolls into the next month !

let change_date = new Date()

let todays_date = change_date.getDate() // e.g. 30 ( sample run )

let ts = change_date.setDate(todays_date + 5) // 30 + 5 = 35 -> day 5 of the next month

console.log(ts, typeof ts) // e.g. 179121... "number" -> NOT a date object

console.log(change_date.getDate()) // e.g. 5  ( the object itself was changed )

console.log(`${change_date.getDate()}/${change_date.getMonth() + 1}/${change_date.getFullYear()}`) // e.g. 5/10/2026

// setMonth() -> change the month ( index based -> 0 = january -> same overflow rule )

let this_month = change_date.getMonth() // e.g. 9 ( october -> the +5 days moved us there )

change_date.setMonth(this_month + 4) // 9 + 4 = 13 -> rolls into february of the next year

console.log(change_date.getMonth() + 1) // e.g. 2  ( february )
console.log(change_date.getFullYear())  // e.g. 2027

// setFullYear() -> change the year
// NOTE -> there is no setYear() in modern JS -> the correct method is setFullYear()

let year_obj = new Date()
let this_year = year_obj.getFullYear()

console.log(this_year) // e.g. 2026

year_obj.setFullYear(this_year - 28) // 28 years back

console.log(year_obj.getFullYear()) // e.g. 1998

console.log(`${year_obj.getDate()}/${year_obj.getMonth() + 1}/${year_obj.getFullYear()}`) // e.g. 30/9/1998

// setHours() / setMinutes() / setSeconds() -> change the time parts

let changed_time = new Date()

let current_hour = changed_time.getHours()     // e.g. 21
let current_minute = changed_time.getMinutes() // e.g. 48

changed_time.setHours(current_hour + 5)      // 5 hours later
changed_time.setMinutes(current_minute + 30) // 30 minutes later -> overflow rolls into the hour

console.log(`${changed_time.getHours()}:${changed_time.getMinutes()}`) // e.g. 3:20  ( next day ! )

console.log(`${changed_time.getDate()}/${changed_time.getMonth() + 1}/${changed_time.getFullYear()}`) // e.g. 1/10/2026

// ============================================================
// SECTION 8 -> PRACTICAL EXAMPLE ( date arithmetic )
// ============================================================

// example -> 2 days from today is a holiday -> print the holiday date

let cutoff = new Date()

let current_date_ = cutoff.getDate()

console.log(current_date_) // e.g. 30

cutoff.setDate(current_date_ + 2) // 30 + 2 = 32 -> overflow -> day 2 of the next month

console.log(cutoff.getDate()) // e.g. 2

// the same idea for the year

let year_cur = cutoff.getFullYear()

console.log(year_cur) // e.g. 2026

cutoff.setFullYear(year_cur + 1)

console.log(cutoff.getFullYear()) // e.g. 2027

// ============================================================
// COMMON MISTAKES TO AVOID
// ============================================================

/**
 * 1 getMonth()      -> 0 - 11 ( january = 0 ) -> ALWAYS add + 1 for humans
 * 2 overflow        -> setDate( 30 + 5 ) / setMonth( 9 + 4 ) -> JS rolls into the next month / year on its own
 * 3 hour % 12       -> gives 0 at 12 o'clock -> fix -> hour % 12 === 0 ? 12 : hour % 12
 * 4 "seconds" key   -> in toLocaleString options the key is "second" ( singular ) -> "seconds" is IGNORED
 * 5 set methods     -> MUTATE the original object + RETURN a timestamp number -> do not store them
 * 6 setYear()       -> legacy / old -> use setFullYear()
 * 7 padding         -> 9/9/2026 -> pad with -> value < 10 ? `0${value}` : value
 *
 */

// ============================================================
// QUICK SUMMARY
// ============================================================

/**
 * new Date()      -> creates the date object ( current date + time )
 * getFullYear()   -> 4 digit year
 * getMonth()      -> month index ( 0 - 11 ) -> add + 1 for humans
 * getDate()       -> day of the month ( 1 - 31 )
 * getDay()        -> weekday index ( 0 = sunday ... 6 = saturday )
 * getHours() / getMinutes() / getSeconds()  -> time parts ( 24 hour )
 * toLocaleString( locale , options )        -> month / weekday words + full custom format in one line
 * setDate() / setMonth() / setFullYear()    -> change the date parts ( mutates + overflow handled )
 * setHours() / setMinutes() / setSeconds()  -> change the time parts
 *
 */

