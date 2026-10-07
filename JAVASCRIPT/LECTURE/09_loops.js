// ============================================================
// 09 - JAVASCRIPT : LOOPS
// ============================================================

// SECTION 1 -> WHY LOOPS ?

// a program / software is always created to PERFORM an action
// -> AUTOMATION means : the program performs the repetitive action for us
// -> MANUAL -> we repeat the same steps ourselves ( typing the same test case again and again )
// -> AUTOMATIC -> we write the program ONCE, it repeats the action every time

// LOOPS -> the syntax used to perform a REPEATING action
// -> instead of writing the same line again and again, the loop runs it for us

// NOTE -> in interviews the logical problem given is usually NOT solved until you use loops
// ( patterns, series, counting, searching ... all of them need loops )

/**
 * IN JS THERE ARE 3 BASIC LOOP TYPES
 *
 * 1 FOR        -> used when the END POINT is known      ( FINITE -> runs from 0 to n )   ~95 %
 * 2 WHILE      -> used when the END POINT is NOT known  ( runs until a condition changes )
 *
 * ( later -> for...of / for...in -> loops for arrays & objects )
 *
 * IMPORTANT -> a loop whose condition NEVER becomes false = INFINITE LOOP -> the program hangs
 *             stop a running program in the terminal with Ctrl + C
 */


// ============================================================
// SECTION 2 -> FOR LOOP
// ============================================================

// FOR -> used when we KNOW the end point / when the output is DEFINITE and FINITE

/* syntax

for (initialization ; condition for the loop to end ; increment / decrement) {
    // code
}

-> initialization  -> runs ONCE before the loop starts      ( usually let i = 0 )
-> condition       -> checked BEFORE every turn -> false -> the loop ends
-> increment       -> runs AFTER every turn                  ( i++ / i-- )

*/

// example 1 -> write a program to print numbers from 0 - 10

// without a loop ( the hard way -> the same line written again and again )
// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// ... -> for 1000 numbers we would write 1000 lines -> THIS is why we need loops

for (let i = 0; i <= 10; i++) {
    console.log(i)
} // 0 1 2 3 4 5 6 7 8 9 10

// this is called FORWARD ( incremental ) looping -> the counter moves towards the end point

// example 2 -> write a loop to print numbers from 10 - 0

for (let i = 10; i >= 0; i--) {
    console.log(i)
} // 10 9 8 7 6 5 4 3 2 1 0

// this is called DECREMENTAL looping -> the counter again moves towards its end point ( 0 )

// NOTE -> the direction must move towards the condition becoming FALSE
//         i >= 0 together with i++ -> the condition never becomes false -> INFINITE LOOP


// ============================================================
// SECTION 3 -> LOOP ON A STRING
// ============================================================

// loop on a string -> print each character on a new line

let name_str = " hello i am learning javascript and i am currently focusing on loops"

for (let i = 0; i < name_str.length; i++) {
    console.log(name_str[i])
}

// NOTE -> name_str.length -> the number of characters in the string
//         the loop stops at length - 1 -> write i < length and NOT i <= length
//         ( at name_str[name_str.length] there is nothing -> index out of range )


// ============================================================
// SECTION 4 -> PRACTICE PROGRAMS
// ============================================================

// program 1 -> solve the following program to print the output ( multiplication table of 2 )

/**
 * 2 x 1 = 2
 * 2 x 2 = 4
 * 2 x 3 = 6
 * 2 x 4 = 8
 * 2 x 5 = 10
 * 2 x 6 = 12
 * 2 x 7 = 14
 * 2 x 8 = 16
 * 2 x 9 = 18
 * 2 x 10 = 20
 *
 */

let num_1 = 2

for (let i = 1; i <= 10; i++) {
    console.log(`${num_1} x ${i} = ${num_1 * i}`)
} // 2 x 1 = 2  -> ... -> 2 x 10 = 20

// NOTE -> we print ${num_1} instead of typing 2 -> now the SAME program works for any number
//         ( change let num_1 = 7 -> the table of 7 prints without touching the loop )


// program 2 -> find the number of words in the string WITHOUT using any method

let count_str = "hello my name is siddhant and i am a mentor for automation"

let word_count = 1 // words = number of spaces + 1 -> so the count starts from 1

for (let i = 0; i < count_str.length; i++) {
    if (count_str[i] === " ") {
        word_count++ // every space means one more word starts after it
    }
    // console.log(word_count)
}
console.log(word_count) // 12

// NOTE -> this trick works when the string has no leading / trailing / double spaces
//         ( " a  b " would break it -> in the real world use .split(" ") -> string lecture )


// program 3 -> count the number of vowels in any given string ( "aeiou" )

let norm_str = "hello my name is anurag"

let v_count = 0

for (let i = 0; i < norm_str.length; i++) {
    let v_words = norm_str[i].toLowerCase() // one CHARACTER -> lowercase so that "A" / "E" also match
    if (v_words === "a" || v_words === "e" || v_words === "i" || v_words === "o" || v_words === "u") {
        v_count++
    }
}

console.log(v_count) // 8

// NOTE -> .toLowerCase() is important -> without it the uppercase vowels ( "A" "E" ... ) would be missed


// ============================================================
// SECTION 5 -> NESTED LOOPS ( patterns )
// ============================================================

// PATTERN -> a loop inside a loop ( nested loop )
// -> the OUTER loop makes the ROWS
// -> the INNER loop fills each row with characters

// pattern 1 -> complex program -> print this pattern

/**
 * 4444
 * 333
 * 22
 * 1
 *
 */

// input -> the output is a STRING in every row
// there are 4 rows
// the loop runs in REVERSE ( 4 -> 1 )

// WITH methods -> String(i).repeat(i) repeats the digit i times

for (let i = 4; i >= 1; i--) {
    console.log(String(i).repeat(i))
} // 4444 / 333 / 22 / 1

// WITHOUT using methods -> build every row with a nested loop

for (let i = 4; i >= 1; i--) {     // OUTER loop -> rows -> reverse order ( 4 -> 1 )
    let row = ""
    for (let j = 0; j < i; j++) {   // INNER loop -> runs i times -> row "4444" needs 4 characters
        row += i                    // add the current digit to the row ( "4" + 4 -> "44" )
    }
    console.log(row)
} // 4444 / 333 / 22 / 1


// pattern 2 -> print this pattern

/**
 * 1111
 * 222
 * 33
 * 4
 *
 * output in string
 * number of rows -> 4
 * the forward print ( 1 -> 4 )
 *
 */

for (let k = 1; k <= 4; k++) {
    console.log(String(k).repeat(5 - k))
} // 1111 / 222 / 33 / 4

// NOTE -> row 1 gets 4 characters, row 4 gets only 1 -> repeat(5 - k)
//         k = 1 -> 5 - 1 = 4 characters   |   k = 4 -> 5 - 4 = 1 character

// pattern 3 -> print this pattern ( it was left unsolved in the old file )

/**
 * 1
 * 12
 * 123
 * 1234
 *
 */

for (let k = 1; k <= 4; k++) {
    let row = ""
    for (let j = 1; j <= k; j++) {
        row += j // row 1 -> "1"   row 2 -> "12"   row 3 -> "123"
    }
    console.log(row)
} // 1 / 12 / 123 / 1234


// ============================================================
// SECTION 6 -> WHILE LOOP
// ============================================================

// WHILE -> used when the OUTPUT / end point is NOT known
// -> the loop keeps running WHILE the condition is true
// -> the condition must change INSIDE the loop -> otherwise it never ends ( infinite loop )

/* syntax

INITIALIZATION
WHILE (condition) {
    // code
    INCREMENT / DECREMENT
}

*/

// example 1 -> keep doubling a number until it reaches 100 ( the number of steps is NOT known )

let w_num = 1

while (w_num < 100) {
    console.log(w_num)
    w_num = w_num * 2 // the variable MUST change -> otherwise the condition stays true forever
} // 1 2 4 8 16 32 64

// example 2 -> INFINITE LOOP -> the condition never becomes false -> keep this commented

// let f = 0
// while (f >= 0) {   // f only increases -> it stays >= 0 forever -> the program hangs
//     console.log(f)
//     f++
// }

// to make such a loop safe -> stop it with a break :
// while (f >= 0) {
//     if (f === 1000) { break }   // exits the loop at 1000
//     console.log(f)
//     f++
// }

// NOTE -> for vs while :
// FOR   -> the number of rounds is KNOWN     -> all 3 parts live on one line
// WHILE -> the number of rounds is UNKNOWN   -> the condition is checked every round


// ============================================================
// SECTION 7 -> break & continue ( loop control keywords )
// ============================================================

// break    -> EXIT the loop completely ( the loop stops right there )
// continue -> SKIP this round only -> jump to the NEXT round ( the loop keeps running )
// ( both also work inside a switch -> conditions lecture )

// break example

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break // i reached 5 -> stop the WHOLE loop
    }
    console.log(i)
} // 0 1 2 3 4   -> ( 5 is not printed and 6 - 10 also never run )

// continue example

for (let i = 0; i <= 10; i++) {

    if (i === 5) {
        continue // skip only this round -> go on with i = 6
    }

    console.log(i)
} // 0 1 2 3 4 6 7 8 9 10  -> ( ONLY 5 is missing )

// NOTE -> place the console.log AFTER the if/break -> break wins and the rest never runs
//         place it BEFORE -> break still prints that same round once


// ============================================================
// COMMON MISTAKES TO AVOID
// ============================================================

/**
 * 1 i >= 0 together with i++ ( direction opposite to the condition ) -> INFINITE LOOP
 * 2 while without increment / decrement inside the body             -> INFINITE LOOP
 * 3 i <= n written instead of i < n ( or the other way )            -> off by one -> first / last value wrong
 * 4 running the counting loop twice without resetting the counter   -> double counting ( the word count bug )
 * 5 pattern row built with a FIXED inner-loop count                 -> every row the same length ( build i characters )
 * 6 console.log( rows ) while the variable is named row             -> reference error
 * 7 i == 5 inside the condition                                     -> use === ( strict -> lecture 06 )
 * 8 continue does NOT stop the loop                                 -> only the current round is skipped
 *
 */


// ============================================================
// QUICK SUMMARY
// ============================================================

/**
 * for            -> end point KNOWN       -> initialization ; condition ; increment
 * while          -> end point UNKNOWN     -> condition checked BEFORE every round
 * do...while     -> like while            -> code runs at LEAST ONCE ( condition checked last )
 * nested loop    -> loop inside a loop    -> outer = rows, inner = characters in one row
 * break          -> exit the loop completely
 * continue       -> skip the current round only
 * infinite loop  -> condition never false -> the program hangs ( stop it with Ctrl + C )
 *
 */



