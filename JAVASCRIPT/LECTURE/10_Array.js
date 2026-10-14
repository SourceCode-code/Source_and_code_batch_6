// ============================================================
// 10 - JAVASCRIPT : ARRAYS
// ============================================================

// SECTION 1 -> DATATYPE REVISION ( PRIMITIVE vs NON-PRIMITIVE )

/**
 * PRIMITIVE -> simple in nature and IMMUTABLE ( the value itself can never be changed )
 *              number, string, boolean, null, undefined, symbol, bigint
 *
 * NON-PRIMITIVE -> complex in nature and MUTABLE ( the value can be changed as per usecase )
 *                  object, array, function
 *
 * IMPORTANT RULE -> primitive values are compared by VALUE
 *                   non-primitive values are compared by REFERENCE ( address in memory )
 *                   ( this exact rule is used again in SECTION 4 )
 */

// examples of primitive data types
let num = 0
let str = "hello"
let bool = true


// ============================================================
// SECTION 2 -> WHAT IS AN ARRAY ?
// ============================================================

// ARRAY -> a NON-PRIMITIVE datatype which is used to store MULTIPLE values inside ONE variable

/**
 * Q1 -> HOW DO WE DETERMINE IF A VALUE IS AN ARRAY ?
 *        -> an array is always defined by SQUARE BRACKETS [ ]
 *        -> in code the correct check is Array.isArray(value)
 *           ( typeof gives "object" for arrays, so typeof alone is NOT enough )
 *
 * Q2 -> HOW ARE THE VALUES SEPARATED IN AN ARRAY ?
 *        -> each value is separated by a COMMA ,
 *
 * Q3 -> WHICH DATATYPES CAN BE STORED IN AN ARRAY ?
 *        -> ANY datatype -> number, string, boolean, null, even another array ...
 *           ( an array can hold MIXED datatypes together )
 */

// examples ->

let array_a = []                                                        // empty array -> length 0
let array_b = ["siddhant", 7020400749, 27, true, "male", [], null]      // mixed datatypes

console.log(array_a)

console.log(array_b)


// ============================================================
// SECTION 3 -> HOW TO CHECK THE DATATYPE OF A VALUE ?
// ============================================================

console.log(typeof array_b)           // "object" -> typeof CANNOT say "array"
console.log(Array.isArray(array_b))   // true     -> THE CORRECT WAY to check an array
console.log(Array.isArray("hello"))   // false    -> a string is NOT an array


// ============================================================
// SECTION 4 -> EQUALITY -> VALUE vs REFERENCE
// ============================================================

let variable_a = 10
let variable_b = 10

let array_1 = [10]
let array_2 = [10]

console.log(variable_a == variable_b)   // true  -> same VALUE ( == compares loosely )
console.log(variable_a === variable_b)  // true  -> same VALUE and same TYPE ( === compares strictly )

console.log(array_1 == array_2)         // false -> same CONTENT, still FALSE
console.log(array_1 === array_2)        // false -> same CONTENT, still FALSE

// NOTE :- TWO ARRAYS WITH THE SAME CONTENT ARE STILL NOT EQUAL ( with == OR === )

// WHY THIS HAPPENS -

// PRIMITIVES ARE COMPARED BY VALUE -> same value means equal
// NON-PRIMITIVES ( ARRAYS ) ARE COMPARED BY REFERENCE
// TWO DIFFERENT ARRAYS LIVE AT TWO DIFFERENT MEMORY LOCATIONS
// SO THEIR REFERENCE POINTS ARE NEVER THE SAME

// EXAMPLE -> TWO VARIABLES CAN SHARE THE SAME ARRAY ( SAME REFERENCE )

let array_3 = array_1          // NO new array is created -> array_3 POINTS TO the same array
array_3.push(20)

console.log(array_1)             // [ 10, 20 ] -> array_1 ALSO changed ( same reference )
console.log(array_2)             // [ 10 ]     -> array_2 NOT affected ( different reference )
console.log(array_1 === array_3) // true       -> BOTH point to the SAME array
console.log(array_1 === array_2) // false      -> TWO DIFFERENT arrays

// HOW TO COMPARE THE CONTENT OF TWO ARRAYS ?
// -> compare them element by element using a loop ( or JSON.stringify(a) === JSON.stringify(b) )
//    the reference check ( === ) only tells us whether we are using the SAME array or not

// ============================================================
// SECTION 5 -> PROPERTIES OF AN ARRAY -> length & index
// ============================================================

/**
 * -> the values in an array are stored at INDEXES ( index = position number, starts from 0 )
 * -> every array has a property called LENGTH -> the number of elements in the array
 *
 *                         0            1        2    3       4    5    6
 * let array_b =     ["siddhant", 7020400749, 27, true, "male", [], null]
 *
 * length = 7
 * THEREFORE  length - 1  IS ALWAYS THE INDEX OF THE LAST ELEMENT  ( 7 - 1 = 6 )
 */

console.log(array_b[0])                    // siddhant -> first element
console.log(array_b[array_b.length - 1])   // null     -> last element ( index 7 - 1 = 6 )
console.log(array_b.length)                // 7

// reading an index that does not exist gives undefined ( it does NOT throw an error )
console.log(array_b[100])                  // undefined


// ============================================================
// SECTION 6 -> BASIC OPERATIONS ON ARRAY
// ============================================================

let basic_operation_array = ["siddhant", 7020400749, 27, true, "male", [], null]

// 1 RETRIEVE -> TO GET THE VALUE FROM THE ARRAY
console.log(basic_operation_array[0])      // siddhant

// 2 UPDATE -> TO UPDATE THE EXISTING VALUE

basic_operation_array[basic_operation_array.length - 1] = "software engineer"
// basic_operation_array[6] = "software engineer"   -> the same thing ( length 7 -> last index 6 )

console.log(basic_operation_array)         // null is replaced by "software engineer"

// 3 ADD -> TO ADD A VALUE IN THE ARRAY
// push() ADDS AT THE END, unshift() ADDS AT THE START ( FULL METHODS LIST -> SECTION 8 )
basic_operation_array.push("22 years experience")

console.log(basic_operation_array)         // length is now 8

// 4 DELETE -> TO DELETE A VALUE FROM THE ARRAY

delete basic_operation_array[6]

console.log(basic_operation_array)
// NOTE :- delete only EMPTIES the slot -> it leaves an EMPTY HOLE behind
//         it does NOT shift the remaining elements and length does NOT change
//         the slot becomes an empty item ( printed as <1 empty item> )
//         -> to remove a value PROPERLY ( and shift the elements ) use splice() -> SECTION 10

console.log(basic_operation_array.length)  // STILL 8 -> delete DID NOT REDUCE THE LENGTH


// ============================================================
// SECTION 7 -> MUTATING vs NON-MUTATING METHODS
// ============================================================

/**
 * WHEN WE USE ANY METHOD WE GET 2 THINGS
 *
 * OUTPUT      -> RESULT OF ACTION PERFORMED
 * RETURN TYPE -> THE DATATYPE OF RECEIVED OUTPUT
 *
 * AND ONE MORE IMPORTANT QUESTION -> DOES THE METHOD CHANGE THE ORIGINAL ARRAY ?
 *
 * MUTATING ( MODIFYING ) METHODS -> change the ORIGINAL array itself
 *      push, pop, shift, unshift, sort, reverse, splice
 *
 * NON-MUTATING ( SAFE ) METHODS -> do NOT touch the original, they return a NEW array / value
 *      slice, concat, map, filter, join, includes, indexOf, find
 *
 * NOTE -> changing the original array by mistake is one of the MOST COMMON BUGS in JS
 */

// ============================================================
// SECTION 8 -> ADDING & REMOVING ELEMENTS -> push / unshift / pop / shift
// ============================================================

let method_array = ["siddhant", "arjun", "gadakh", 27]

// 1 METHOD -> push() -> THIS METHOD WILL ADD AN ELEMENT AT THE END OF THE ARRAY

// syntax -> arrayName.push("value that is to be added")

let new_length = method_array.push("lead-software-engineer")

console.log(method_array)
// output      -> [ 'siddhant', 'arjun', 'gadakh', 27, 'lead-software-engineer' ]
// return type -> NUMBER -> the NEW LENGTH of the array ( NOT the array )

console.log(new_length)    // 5

// 2 METHOD -> unshift() -> THIS METHOD WILL ADD AN ELEMENT AT THE START OF THE ARRAY

// syntax -> arrayName.unshift("value that is to be added")

let new_length_2 = method_array.unshift("Mr")

console.log(method_array)
// output      -> [ 'Mr', 'siddhant', 'arjun', 'gadakh', 27, 'lead-software-engineer' ]
// return type -> NUMBER -> the NEW LENGTH ( NOT the array )

console.log(new_length_2)  // 6

// METHODS FOR DELETION

// 3 METHOD -> pop() -> this removes the element from the END

// syntax -> arrayName.pop()

let removed_from_end = method_array.pop()

console.log(method_array)
// output      -> [ 'Mr', 'siddhant', 'arjun', 'gadakh', 27 ]
// return type -> the REMOVED ELEMENT ( NOT the array )

console.log(removed_from_end)   // lead-software-engineer

// 4 METHOD -> shift() -> this removes the element from the START

// syntax -> arrayName.shift()

let removed_from_start = method_array.shift()

console.log(method_array)
// output      -> [ 'siddhant', 'arjun', 'gadakh', 27 ]
// return type -> the REMOVED ELEMENT ( NOT the array )

console.log(removed_from_start) // Mr

// QUICK SUMMARY -> push / unshift  -> return the NEW LENGTH ( number )
//                  pop / shift     -> return the REMOVED ELEMENT ( value )
//                  ALL FOUR modify the original array

// ============================================================
// SECTION 9 -> SEARCHING / FINDING IN AN ARRAY
// ============================================================

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Strawberry", "Watermelon", "Kiwi", "Papaya"];

// 1 indexOf() -> returns the INDEX of the element, -1 if NOT found ( search starts from the start )

console.log(fruits.indexOf("Mango"))     // 2
console.log(fruits.indexOf("Papaya"))    // 9
console.log(fruits.indexOf("mango"))     // -1 -> the search is CASE SENSITIVE

// 2 lastIndexOf() -> same as indexOf but the search starts from the END

console.log(fruits.lastIndexOf("Apple")) // 0 ( only one "Apple" exists )

// 3 includes() -> returns a BOOLEAN ( true / false ) instead of the index

console.log(fruits.includes("Mango"))    // true
console.log(fruits.includes("mango"))    // false

// 4 find() -> returns the FIRST element that satisfies the condition ( else undefined )

const marks = [45, 67, 89, 23, 76]

console.log(marks.find((el) => el > 80))    // 89 -> the first mark above 80
console.log(marks.find((el) => el > 900))   // undefined -> no element matches

// 5 findIndex() -> returns the INDEX of the first element that satisfies the condition ( else -1 )

console.log(marks.findIndex((el) => el > 80))    // 2
console.log(marks.findIndex((el) => el > 900))   // -1

// 6 at() -> same as arr[index], but it also accepts a NEGATIVE index ( -1 = last element )

console.log(fruits.at(0))    // Apple    -> first element
console.log(fruits.at(-1))   // Papaya   -> last element


// ============================================================
// SECTION 10 -> SLICE vs SPLICE ( two methods that look similar )
// ============================================================

// 1 slice(starting index, ending index) -> COPIES a part of the array into a NEW array
//    -> the ending index is NOT included ( end - start = number of elements )
//    -> the ORIGINAL array is NOT changed ( non-mutating )

let arr_slice = fruits.slice(0, 3)

console.log(arr_slice)   // [ 'Apple', 'Banana', 'Mango' ] -> index 0, 1, 2 ( 3 is skipped )
console.log(fruits)      // ORIGINAL array is fully unchanged

// a negative index also works -> slice(-3) copies the LAST 3 elements
console.log(fruits.slice(-3))   // [ 'Watermelon', 'Kiwi', 'Papaya' ]

// 2 splice(starting index, number of elements to remove, ...new elements to add)
//    -> REMOVES elements from the array and returns the REMOVED elements
//    -> the ORIGINAL array IS changed ( mutating )

const fruits_1 = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Strawberry", "Watermelon", "Kiwi", "Papaya"];

let splice_arr = fruits_1.splice(0, 5)

console.log(splice_arr)
// output      -> [ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes' ] -> the REMOVED elements
// return type -> ARRAY of removed elements
console.log(fruits_1)
// [ 'Pineapple', 'Strawberry', 'Watermelon', 'Kiwi', 'Papaya' ] -> original array is modified

// splice can also ADD elements without removing -> add at index 0, remove 0 elements
fruits_1.splice(0, 0, "Dragonfruit")

console.log(fruits_1)     // [ 'Dragonfruit', 'Pineapple', 'Strawberry', 'Watermelon', 'Kiwi', 'Papaya' ]

// QUICK SUMMARY -> slice = COPY a part ( safe, original untouched )
//                  splice = REMOVE / INSERT a part ( modifies the original )

// ============================================================
// SECTION 11 -> sort(), reverse(), join(), split()
// ============================================================

// 1 sort() -> by default it sorts the elements AS STRINGS and RETURNS THE SAME array ( modifies original )

const mixedArray = [10, "Hello", 25, "Apple", 42, "World"];

console.log(mixedArray.sort())
// output -> [ 10, 25, 42, 'Apple', 'Hello', 'World' ]
// NOTE -> this is NOT a proper number sort !
//         every element is first converted to a string -> "10", "25", "42", "Apple" ...
//         the strings are compared letter by letter -> in ASCII the digit characters come BEFORE letters
//         10, 25, 42 look sorted only because "10" < "25" < "42" as STRINGS

// TO SORT NUMBERS CORRECTLY we must give a COMPARATOR function -> (a, b) => a - b

const numbers = [
  123456789,
  987654321,
  1234567890,
  0,
  9876543210,
  1234567890123,
  999999999999999];

// (a, b) => a - b  -> negative result -> a comes first  -> SMALL TO LARGE ( ascending )
// (a, b) => b - a  -> positive result -> a comes first  -> LARGE TO SMALL ( descending )

let small_large = numbers.sort((a, b) => { return a - b })

console.log(small_large)
// [ 0, 123456789, 987654321, 1234567890, 9876543210, 1234567890123, 999999999999999 ]

console.log(small_large === numbers)   // true -> sort() RETURNS THE SAME array ( it does not create a new one )
console.log(numbers)                   // also sorted -> the ORIGINAL array is modified

// 2 reverse() -> reverses the array in place ( modifies the original and returns the same array )

console.log(small_large.reverse())
// [ 999999999999999, 1234567890123, 9876543210, 1234567890, 987654321, 123456789, 0 ]

// QUESTION -> reverse the given string ?

let str_q = " hello my name is ....."

// split("") -> string to array | reverse() -> reverse the array | join("") -> array to string
// split() is a STRING method ( the opposite of join() )

console.log(str_q.split("").reverse().join(""))
// output -> "..... si eman ym olleh "
// ( the FIRST space of the string becomes the LAST space after reversing )

// 3 join() -> converts an array into a STRING ( the separator is placed between the elements )
//    -> the original array is NOT modified

console.log(fruits.join(" --> "))
// Apple --> Banana --> Mango --> Orange --> Grapes --> Pineapple --> Strawberry --> Watermelon --> Kiwi --> Papaya

console.log(fruits.join(" "))
// Apple Banana Mango Orange Grapes Pineapple Strawberry Watermelon Kiwi Papaya

console.log(fruits)   // ORIGINAL array is still unchanged -> join() does not modify

// ============================================================
// SECTION 12 -> concat() & flat()
// ============================================================

// 1 concat() -> joins two or more arrays into a NEW array ( the original arrays are unchanged )

let a = [1, 2, 3]
let b = [4, 5, 6]
let c = [7, 8, 9]

let combine_array = a.concat(b, c)
console.log(combine_array)   // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

let rev_combine = c.concat(b, a)
console.log(rev_combine)     // [ 7, 8, 9, 4, 5, 6, 1, 2, 3 ]

console.log(a)               // [ 1, 2, 3 ] -> original arrays are not changed

// 2 flat() -> flattens a NESTED array ( array inside array ) into a single level array

const arr = [1, 2, [3, 4], [5, 6]];

console.log(arr.flat())      // [ 1, 2, 3, 4, 5, 6 ] -> default depth = 1 ( only one level )

const deep_arr = [1, [2, [3, [4]]]];

console.log(deep_arr.flat())         // [ 1, 2, [ 3, [ 4 ] ] ]  -> only ONE level was flattened
console.log(deep_arr.flat(Infinity)) // [ 1, 2, 3, 4 ]          -> fully flattened ( all levels )


// ============================================================
// SECTION 13 -> HOW TO FIND THE MAX AND MIN VALUE OF AN ARRAY
// ============================================================

const number_a = [
  42, 17, 89, 3, 56,
  91, 24, 68, 12, 75,
  34, 100, 7, 63, 48
];

// WAY 1 -> sort and pick the first / last element
// NOTE -> sort() modifies number_a itself, so after sorting BOTH variables are the SAME array

let sorted_array = number_a.sort((a, b) => { return a - b })
console.log(sorted_array === number_a)   // true -> same array ( sorted in place )
console.log(number_a)                    // also sorted -> the original array is changed

console.log(sorted_array[0])                             // 3   -> smallest
console.log(sorted_array[sorted_array.length - 1])       // 100 -> largest
console.log(sorted_array[sorted_array.length - 2])       // 91  -> second largest

// if you do NOT want to change the original array -> first make a COPY with slice()
// let sorted_copy = number_a.slice().sort((a, b) => a - b)

// WAY 2 -> Math.max() / Math.min() with the SPREAD operator ( ... )
// spread ( ... ) expands the array into individual values -> Math.max(42, 17, 89, 3 ... )

console.log(Math.max(...number_a))   // 100
console.log(Math.min(...number_a))   // 3

// ============================================================
// SECTION 14 -> LOOPS ON AN ARRAY
// ============================================================

// example 1 -> for the given array add 2 in every element and make a new array named added_2

const array_add = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const added_2 = []

for (let i = 0; i < array_add.length; i++) {
  added_2.push(array_add[i] + 2)
}

console.log(added_2)
// [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

// example 2 -> make every element uppercase and store it in a new array

const str_array = ["apple", "banana", "hello", "cat", "orange", "js", "mango", "dog"];
const Upper_ar = []

for (let i = 0; i < str_array.length; i++) {
  Upper_ar.push(str_array[i].toUpperCase())
}

console.log(Upper_ar)
// [ 'APPLE', 'BANANA', 'HELLO', 'CAT', 'ORANGE', 'JS', 'MANGO', 'DOG' ]

// example 3 -> for...of loop -> gives only the VALUE of every element ( simpler syntax )
//              use the normal for loop when you also need the INDEX

for (const el of str_array) {
  console.log(el.toUpperCase())
}

// NOTE -> both the above tasks can be done in ONE LINE with map() -> next section


// ============================================================
// SECTION 15 -> HIGHER ORDER ARRAY METHODS
// ============================================================

/**
 * HIGHER ORDER METHOD -> a method which ACCEPTS a function ( callback ) as an argument
 *
 * CALLBACK FUNCTION -> the function we pass INTO another function,
 *                      which that method calls for every element
 *
 * almost every array method gives the callback 3 values
 *      el    -> the current element
 *      index -> the index of the current element
 *      arr   -> the array itself
 *
 * ( we do not need to use all 3 -> write only the parameters you need )
 *
 * map() / filter() / reduce() / forEach() / every() / some()
 */

// --------------------------------------------------------------
// 1 map() -> perform an action on EVERY element and RETURN A NEW ARRAY ( same length )
// -------------------------------------------------------------- //

/**
 * syntax -> const newArray = name_array.map((el, index, arr) => { return code })
 */

const added_by_2 = array_add.map((el, index, arr) => { return el + 2 })

console.log(added_by_2)
// [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
// ORIGINAL array_add is unchanged

const new_str_ar = str_array.map((el, index, arr) => { return el.toUpperCase() })

console.log(new_str_ar)
// [ 'APPLE', 'BANANA', 'HELLO', 'CAT', 'ORANGE', 'JS', 'MANGO', 'DOG' ]

// --------------------------------------------------------------
// 2 filter() -> keep only the elements that satisfy the condition -> returns a NEW ARRAY
// -------------------------------------------------------------- //

/**
 * syntax -> const newArray = name_array.filter((el, index, arr) => { return condition })
 *
 * the condition must return true / false -> only the elements where it is true are kept
 * the length of the new array can be smaller ( or even 0 ) -> unlike map()
 */

const array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// WITHOUT filter ( the long way )
// question -> filter the elements above 5 and add them in a new array called above_5

let above_5 = []
for (let i = 0; i < array_num.length; i++) {
  if (array_num[i] > 5) {
    above_5.push(array_num[i])
  }
}
console.log(above_5)   // [ 6, 7, 8, 9, 10 ]

// split the even and odd numbers with a loop

let even_arr = []
let odd_arr = []

for (let i = 0; i < array_num.length; i++) {
  if (array_num[i] % 2 == 0) {
    even_arr.push(array_num[i])
  }
  else {
    odd_arr.push(array_num[i])
  }
}
console.log(even_arr)  // [ 2, 4, 6, 8, 10 ]
console.log(odd_arr)   // [ 1, 3, 5, 7, 9 ]

// WITH filter ( the short way )

let above_5_ar = array_num.filter((el, index, arr) => { return el > 5 })
console.log(above_5_ar)   // [ 6, 7, 8, 9, 10 ]

let even_only = array_num.filter((el) => { return el % 2 == 0 })
console.log(even_only)    // [ 2, 4, 6, 8, 10 ]

// --------------------------------------------------------------
// 3 forEach() -> iterate over every element to PERFORM AN ACTION -> returns undefined
// -------------------------------------------------------------- //

/**
 * syntax -> name_array.forEach((el, index, arr) => { code })
 *
 * -> like a loop, it runs the function for every element
 * -> it does NOT return a new array -> use map() / filter() when you need a NEW ARRAY
 */

// loop example ( the long way ) -> print every string in uppercase

for (let i = 0; i < str_array.length; i++) {
  console.log(str_array[i].toUpperCase())
}

/*
APPLE
BANANA
HELLO
CAT
ORANGE
JS
MANGO
DOG
*/

// forEach example ( the short way )

str_array.forEach((el, index, arr) => { console.log(el.toUpperCase()) })

/* the same output as above is printed */

// --------------------------------------------------------------
// 4 every() & some() -> CHECKING methods -> both return a BOOLEAN ( true / false )
// -------------------------------------------------------------- //

// every() -> like AND ( && ) -> true only when ALL elements pass the condition

let every_5 = array_num.every((el, index, arr) => {
  return el > 5
})

console.log(every_5)   // false -> because 1, 2, 3, 4, 5 are NOT above 5

console.log(array_num.every((el) => el > 0))   // true -> ALL elements are greater than 0

// some() -> like OR ( || ) -> true when AT LEAST ONE element passes the condition

let some_5 = array_num.some((el, index, arr) => {
  return el > 5
})

console.log(some_5)    // true -> 6, 7, 8, 9, 10 are above 5

console.log(array_num.some((el) => el > 100))  // false -> NO element is above 100

// --------------------------------------------------------------
// 5 reduce() -> REDUCE the whole array into ONE single value
// -------------------------------------------------------------- //

// example -> get the sum of all the elements ( without reduce -> the long way )

let sum = 0    // accumulator -> it keeps the running total
for (let i = 0; i < array_num.length; i++) {
  sum = sum + array_num[i]
  // sum += array_num[i]
}

console.log(sum)   // 55

/*
 * SYNTAX OF reduce()
 *
 * let result = array.reduce((accumulator, el, index, arr) => {
 *     return code
 * }, initialValue)
 *
 * accumulator ( acc ) -> carries the result from the previous turn
 * initialValue        -> the starting value of the accumulator ( 0 for a sum )
 * the callback runs once for every element and finally reduce() returns the accumulator
 */

let sum_10 = array_num.reduce((acc, el, index, arr) => { return acc + el }, 0)

console.log(sum_10)   // 55

// reduce() is NOT only for sum -> the return type can be ANY datatype
// the value depends on what we build inside the accumulator

// example -> find the largest number with reduce()

let max_reduce = array_num.reduce((acc, el) => { return acc > el ? acc : el }, -Infinity)

console.log(max_reduce)   // 10

// ============================================================
// SECTION 16 -> WHEN TO USE WHICH METHOD ? ( QUICK REVISION )
// ============================================================

/**
 * I NEED ...                                             USE ...
 * -----------------------------------------------------------------------------
 * a new array where every element is CHANGED            map()
 * a new array where only SOME elements are kept         filter()
 * to just do an action ( print / update )               forEach()  ( or a normal loop )
 * one single value from the whole array                 reduce()   ( sum / max / count ... )
 * a yes / no answer about ALL elements                  every()
 * a yes / no answer about ANY element                   some()
 * to find ONE element / its index by a condition        find() / findIndex()
 * to check the presence of a value                      includes() / indexOf()
 * to add / remove from the ends                         push / pop / shift / unshift
 * to copy a part of an array                            slice()   ( safe )
 * to remove / insert in the middle                      splice()  ( modifies )
 * to join arrays / flatten nested arrays                concat() / flat()
 * array -> string / string -> array                     join() / split()
 *
 * METHOD                          RETURNS                    MODIFIES ORIGINAL ?
 * -----------------------------------------------------------------------------
 * push / unshift                  NEW LENGTH ( number )      YES
 * pop / shift                     REMOVED ELEMENT ( value )  YES
 * sort / reverse                  THE SAME array             YES
 * splice                          ARRAY of removed elements  YES
 * slice / concat / map / filter   NEW ARRAY                  NO
 * join / includes / indexOf / at  value ( string / number )  NO
 * forEach                         undefined                  NO
 * reduce                          accumulator ( any type )   NO
 * every / some                    boolean                    NO
 */
