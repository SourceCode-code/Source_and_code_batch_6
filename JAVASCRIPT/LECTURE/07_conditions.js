// ============================================================
// 07 - JAVASCRIPT : CONDITIONS
// ============================================================

// SECTION 1 -> WHAT ARE CONDITIONS ?

// A CONDITION is a decision in the code -> "run this block ONLY IF something is true"
// making decisions based on conditions is called CONDITIONAL PROGRAMMING

// the condition is written with the COMPARISON operators ( > < >= <= == === != !== )
// and the LOGICAL operators ( && || ! ) from lecture 06 -> so the result is always a boolean

/**
 * THE CONDITIONAL STRUCTURES IN JS
 *
 * 1 IF()          -> used for a SINGLE condition        -> block runs or is skipped
 * 2 IF ELSE()     -> used for EITHER-OR ( 2 options )   -> exactly one block runs ( ternary shortcut )
 * 3 ELSE IF()     -> used for MULTIPLE conditions (2+)  -> first true wins -> else = default
 * 4 SWITCH CASE() -> used for MULTIPLE FIXED VALUES     -> one parameter compared with ===
 *
 */


// ============================================================
// SECTION 2 -> IF ( SINGLE CONDITION )
// ============================================================

// if() -> checks a SINGLE condition
// -> condition true  -> the block runs
// -> condition false -> the block is SKIPPED ( no error -> the code just continues )

/**
 * syntax
 *
 * if (condition) { output }
 *
 */

// example -> write a program which will only take input number greater than 0

let num = -100

if (num > 0) { console.log(` enter input number as ${num}`) } // -100 > 0 -> false -> skipped -> nothing prints

// NOTE -> change num to 50 -> 50 > 0 is true -> it prints "enter input number as 50"

// NOTE -> a condition does not always need a comparison
// -> JS converts whatever is inside if(...) into a boolean ( truthy / falsy )
// -> falsy  -> false, 0, "", null, undefined, NaN        ( work like false )
// -> truthy -> every other value, e.g. "0", " ", 123     ( work like true )

// extra -> truthy / falsy demo ( run and see which line prints )

if ("0") { console.log("non-empty string -> truthy -> this RUNS") } // "0" is NOT an empty string
if (0) { console.log("number 0 is falsy -> this NEVER prints") }   // skipped -> nothing prints

// NOTE -> this is why undefined / NaN land in the default branch later
// -> every comparison with undefined / NaN is false


// ============================================================
// SECTION 3 -> IF...ELSE ( EITHER-OR )
// ============================================================

// if() else() -> used for either-or
// -> exactly ONE of the two blocks always runs ( there is no way to skip both )

/**
 * syntax
 *
 * if (condition) { output }
 * else { output for condition 2 }
 *
 */

// example -> check if the given number is even or odd

let even_odd_num = 555

if (even_odd_num % 2 === 0) { console.log(` the given number ${even_odd_num} is an even number`) }
else { console.log(` the given number ${even_odd_num} is an odd number`) } // 555 % 2 = 1 -> else runs

// NOTE -> we compare with === ( strict ) -> the safe habit from lecture 06

// NOTE -> the SAME output is possible with two separate if blocks ( without else )
// if (even_odd_num % 2 === 0) { console.log(` the given number ${even_odd_num} is an even number`) }
// if (even_odd_num % 2 !== 0) { console.log(` the given number ${even_odd_num} is an odd number`) }
// -> but if...else is cleaner -> here only ONE check is needed instead of two

// TERNARY ( shortcut for if...else -> lecture 06, SECTION 7 )
// -> when each side is a single output, if...else can be written in one line :
// console.log(even_odd_num % 2 === 0 ? "even" : "odd")


// ============================================================
// SECTION 4 -> ELSE IF ( MULTIPLE CONDITIONS -> LADDER )
// ============================================================

// else if() -> used for MORE THAN 2 possibilities ( 2 or more conditions )
// -> conditions are checked TOP to BOTTOM -> the FIRST true wins
// -> the remaining else if / else are SKIPPED after a match
// -> the last else is the DEFAULT -> runs only when NOTHING matched

/**
 * syntax
 *
 * if (condition) { output }
 *
 * else if (condition 2) { output 2 }
 *
 * else if (condition 3) { output 3 }
 *
 * else { output when nothing matched }   // default
 *
 */

// example 1 -> find the grade of the student based upon the marks received

/**
 * MARKS        GRADE     CONDITION USED
 * 91 - 100     A         marks > 90
 * 81 - 90      B         marks > 80 && marks <= 90
 * 71 - 80      C         marks > 70 && marks <= 80
 * 40 - 70      D         marks >= 40 && marks <= 70
 * 0  - 39      F         marks < 40
 * not a number ( undefined / NaN ) -> absent -> the final else ( default )
 *
 */

let student_marks_1 = undefined // undefined -> every comparison is false -> the last else ( default ) runs

if (student_marks_1 > 90) { console.log(`He has received A grade`) }

else if (student_marks_1 > 80 && student_marks_1 <= 90) { console.log(`He has received B grade`) }

else if (student_marks_1 > 70 && student_marks_1 <= 80) { console.log(`He has received C grade`) }

else if (student_marks_1 >= 40 && student_marks_1 <= 70) { console.log(`He has received D grade`) }

else if (student_marks_1 < 40) { console.log(`He has failed the exam`) }

else { console.log("the student was not present for the exam") } // -> absent

// TRY -> change student_marks_1 to 95 / 85 / 75 / 55 / 25 -> run again -> each branch prints

// NOTE -> BOUNDARY thinking -> the ranges must never OVERLAP and never leave a GAP
// -> 70 belongs to D ( marks <= 70 ) and 71 is the first C value ( marks > 70 ) -> full coverage

// example 2 -> suggest an accessory according to the weather

// NOTE -> the user can type the season in ANY case -> "SUmmER", "Summer", "summer" ...
// -> normalize the input with .toLowerCase() BEFORE comparing

let season = "SUmmER"

if (season.toLowerCase() === "summer") { console.log("carry cap and water bottle") }

else if (season.toLowerCase() === "rainy") { console.log("carry raincoat / umbrella") }

else if (season.toLowerCase() === "winter") { console.log("carry warm clothes / gloves") }

else { console.log("enter correct input") } // "SUmmER" -> "summer" -> first condition true

// example 3 -> check the person's generation by birth year

let birthyear = 1995

if (birthyear > 1980 && birthyear <= 1990) {
    console.log("person belongs to the boomer generation")
}
else if (birthyear > 1990 && birthyear <= 2000) { // NOTE -> fixed a bug here : it was "> 1991"
    console.log("person belongs to the millennial generation") // -> the year 1991 matched NOTHING ( a gap )
}
else if (birthyear > 2000) {
    console.log("person belongs to generation Z")
}
else { console.log("check your inputs") } // 1995 -> millennial | 1991 -> now also matches


// ============================================================
// SECTION 5 -> SWITCH CASE ( ONE PARAMETER vs MANY FIXED VALUES )
// ============================================================

// switch case() -> used when ONE parameter is compared against MANY FIXED values
// -> switch is NOT an es6 addition -> it has existed in JS from the beginning
// -> switch compares with STRICT equality ( === ) -> "10" never matches 10
// -> each case ends with break -> without it the code FALLS THROUGH into the next case
// -> default is the "else" of a switch -> runs when nothing matched

/**
 * syntax
 *
 * switch (parameter) {
 *
 *     case value1: output 1
 *         break
 *     case value2: output 2
 *         break
 *     case value3: output 3
 *         break
 *
 *     default: default output
 * }
 *
 */

// example -> inform the employee to work from office / home / week off

let day = "sun" // try -> "SUN", "Monday", "fri", "abc"

let format_day = day.toLowerCase() // normalize first -> "SUN" / "Sun" -> "sun"

switch (format_day) {
    // MISTAKE TO AVOID -> case "monday" || "mon" :
    // || returns only the FIRST truthy value ( "monday" ) -> so "mon" / "tue" / "wed" ... would NEVER match
    // -> to give the same output to several values -> STACK the cases ( fall-through used on purpose )

    case "monday":
    case "mon": console.log("work from office")
        break
    case "tuesday":
    case "tue": console.log("work from office")
        break
    case "wednesday":
    case "wed": console.log("work from home")
        break
    case "thursday":
    case "thu": console.log("work from home")
        break
    case "friday":
    case "fri": console.log("work from home")
        break
    case "sat": console.log("week off")
        break
    case "sun": console.log("week off") // "sun" -> week off
        break
    default: console.log("enter correct input")
}

// break -> ends ( exits ) ONLY the switch block when a case has matched
// -> the code after the switch still runs ( break does NOT stop the whole program )
// -> forget break -> after a match the cases below also run -> this is called FALL-THROUGH


// small fall-through demo -> run it and see BOTH lines print

let demo_num = 2

switch (demo_num) {
    case 2: console.log("two") // no break -> falls through -> "three" also prints
    case 3: console.log("three")
}

// optimized example -> the same day program with the cases grouped by output -> fewer breaks

let day_1 = "monday"

let format_day_1 = day_1.toLowerCase()

switch (format_day_1) {
    case "monday":
    case "mon":
    case "tuesday":
    case "tue": console.log("work from office")
        break
    case "wednesday":
    case "wed":
    case "thursday":
    case "thu":
    case "friday":
    case "fri": console.log("work from home")
        break
    case "sat":
    case "sun": console.log("week off")
        break
    default: console.log("enter correct input")
} // "monday" -> work from office


// ============================================================
// SECTION 6 -> SWITCH ( true ) -> CONDITIONS AS CASES
// ============================================================

// a case can NOT hold a condition directly ( a case needs a VALUE )
// -> but when the parameter is true, every case EXPRESSION becomes a condition
// -> the first case that evaluates to true is the one that matches
// -> useful when RANGES have to be checked inside a switch

// example 1 -> check if a number is positive / negative / zero

let num_1 = 10

switch (true) {

    case num_1 > 0: console.log(`the given number ${num_1} is a positive number`) // 10 > 0 -> first case -> positive
        break
    case num_1 < 0: console.log(`the given number ${num_1} is a negative number`)
        break
    case num_1 === 0: console.log(`the given number is zero`)
        break
    default: console.log(`the given input is NaN`)
}

// NOTE -> if the input is NaN / undefined -> every comparison is false -> default runs

// example 2 -> the grade program from SECTION 4 -> same output, now with switch ( true )

let marks = 91

switch (true) {
    case marks > 90: console.log(`He has received A grade`) // 91 -> A grade
        break
    case marks > 80 && marks <= 90: console.log(`He has received B grade`)
        break
    case marks > 70 && marks <= 80: console.log(`He has received C grade`)
        break
    case marks >= 40 && marks <= 70: console.log(`He has received D grade`)
        break
    case marks < 40: console.log(`He has failed the exam`)
        break
    default: console.log("the student was not present for the exam")
}


// ============================================================
// SECTION 7 -> WHEN TO USE WHICH ?
// ============================================================

/**
 * if / else if  -> best for RANGES and complex conditions ( && , || , % ... )
 * switch case   -> best for ONE parameter checked against FIXED values
 *                  ( cleaner list than many else if )
 * switch (true) -> conditions inside a switch -> use only when it reads better than an if ladder
 *
 */


// ============================================================
// COMMON MISTAKES TO AVOID
// ============================================================

/**
 * 1 if ( x = 5 )         -> "=" assigns, it does NOT compare -> use === ( lecture 06 )
 * 2 gaps / overlaps      -> "> 1991" while the previous range ended at "<= 1990" -> 1991 matched NOTHING
 * 3 missing break        -> fall-through -> the next cases also run
 * 4 case "mon" || "tue"  -> || collapses to the FIRST truthy value -> STACK the cases instead
 * 5 no .toLowerCase()    -> "Summer" / "SUMMER" would never match "summer"
 * 6 wrong order          -> in an else if ladder / switch(true) the FIRST true wins
 *                          -> start the ladder from the narrowest range
 *
 */


// ============================================================
// QUICK SUMMARY
// ============================================================

/**
 * if             -> single condition       -> runs when true, otherwise the block is skipped
 * if...else      -> either-or              -> exactly one of the two blocks runs
 * else if        -> multiple conditions    -> first true wins -> final else = default
 * ternary ? :    -> one-line if...else     -> condition ? value_if_true : value_if_false
 * switch case    -> many fixed values      -> parameter compared with === ( strict )
 * switch (true)  -> ranges / conditions    -> every case is a condition
 * break          -> ends the switch block  -> without it -> fall-through
 * default        -> the "else" of switch   -> runs when nothing matched
 *
 */


