// ============================================================
// 04 - JAVASCRIPT : STRINGS
// ============================================================

// SECTION 1 -> WHAT IS A STRING ?

// STRING -> String is a SEQUENCE OF CHARACTERS wrapped in either (" "), (' ') or (``)
// every character of the string gets a position/index

// example :-

let ex_str_1 = "123456789" // string -> numbers inside quotes are ALSO a string
let ex_str_2 = "    "      // string -> only spaces, but still a valid string
let ex_str_3 = 'true'      // string -> true inside quotes is a string, NOT a boolean
let ex_str_4 = `1234$%^&*(*&^%$)ryhtgjvkufy` // string -> backticks (template literal)

console.log(typeof (ex_str_1)) // string
console.log(typeof ex_str_2)   // string
console.log(typeof ex_str_3)   // string
console.log(typeof ex_str_4)   // string

// NOTE :-> template literals (backticks) can do everything a normal string can do,
// PLUS -> ${} placeholders + multi-line strings (see section 5)

// ============================================================
// SECTION 2 -> PROPERTY vs METHOD
// ============================================================

// every data type in js comes with 2 things :

/**
 * METHOD   -> an ACTION to perform            -> used with () brackets  -> e.g. toUpperCase()
 * PROPERTY -> some INFO attached to the data  -> used WITHOUT brackets  -> e.g. length
 */

// syntax to check length (property)

// stringname.length

console.log(ex_str_1.length) // 9  (digits also count)
console.log(ex_str_2.length) // 4  (spaces are also counted as characters)
console.log(ex_str_3.length) // 4
console.log(ex_str_4.length) // 27

// ============================================================
// SECTION 3 -> INDEXES & ACCESSING CHARACTERS
// ============================================================

// in a string the characters are stored in indexes (indexing starts from 0)

/**
 *              0 1 2 3
 *              n a m e
 * let str_1 = "name"
 */

let str_1 = "name"

console.log(str_1.length) // 4

// HOW TO GET/PRINT ANY SINGLE CHARACTER IN STRING

console.log(str_1[0]) // n
console.log(str_1[3]) // e

// MOST IMPORTANT EQUATION (interview favourite) :

// string last index + 1 == length
// LAST element is ALWAYS at index (length - 1)

// NOTE :-> in JS wherever characters are stored by index, we can use this equation

let str_2 = "qwertyuiolkjhgfdsxcvbnm,74126985ertyuiokjhgvf"

console.log(str_2.length) // 45

console.log(str_2[str_2.length - 1]) // f (last character -> works for ANY string)

// ============================================================
// SECTION 4 -> STRING CONCATENATION (JOINING STRINGS)
// ============================================================

// STRING CONCATENATION -> (JOINING OF 2 OR MORE STRINGS)
// combining or adding two or more strings together to create a NEW string is called string CONCATENATION

let firstName = "siddhant"
let middleName = "Arjun"
let lastName = "Gadakh"

// there are 2 ways

// WAY 1 -> use (+) operator --> old way

let fullName = firstName + middleName + lastName
let fullName_1 = firstName + " " + middleName + " " + lastName
console.log(fullName)   // siddhantArjunGadakh (no spaces, we have to add them manually)
console.log(fullName_1) // siddhant Arjun Gadakh

// WAY 2 -> ES6 template literal (backticks + ${} placeholders) --> modern way

// NOTE :-> ${} placeholders ONLY work inside BACKTICKS.
// inside normal quotes (" " or ' ') ${} is printed as plain text and does NOT insert the value.

let fullName_backtick = `my full name is ${firstName} ${middleName} ${lastName}`

console.log(fullName_backtick) // my full name is siddhant Arjun Gadakh

// template literal bonus -> multi-line strings (no \n needed)

let multi_line_str = `line 1
line 2
line 3`
console.log(multi_line_str)

// ============================================================
// SECTION 5 -> STRINGS ARE IMMUTABLE
// ============================================================

// STRINGS ARE IMMUTABLE IN JAVASCRIPT

//-------------
/**
 * IT MEANS ONCE A STRING IS CREATED, THE CHARACTERS IN IT CANNOT BE CHANGED OR MODIFIED
 *
 * IF ANY METHOD THAT SEEMS TO MODIFY A STRING ACTUALLY RETURNS A NEW STRING,
 * IT DOES NOT CHANGE THE ORIGINAL
 *
 * THAT IS WHY -> ALWAYS STORE THE RETURN VALUE IN A NEW VARIABLE IF YOU NEED IT LATER
 */

// ============================================================
// SECTION 6 -> STRING METHODS
// ============================================================

// every method has ->
// 1 ACTION      -> the action it performs
// 2 RETURN TYPE -> the datatype of the output

// ------------------------------------------------------------
// 6.1 toUpperCase() -> converts the string into UPPERCASE (letters/alphabet)
// ------------------------------------------------------------

let Meth_str_1 = "hello i am learning string method in js"

console.log(Meth_str_1.toUpperCase()) // HELLO I AM LEARNING STRING METHOD IN JS

console.log(Meth_str_1) // hello i am learning string method in js (UNCHANGED -> immutable)

// ------------------------------------------------------------
// 6.2 toLowerCase() -> converts the string into lowercase (letters/alphabet)
// ------------------------------------------------------------

let Meth_str_2 = "HELLO I AM LEARNING STRING METHOD IN JS"

console.log(Meth_str_2.toLowerCase()) // hello i am learning string method in js

// ------------------------------------------------------------
// 6.3 METHOD CHAINING -> calling multiple methods one after another
// ------------------------------------------------------------

// when we call multiple methods on the same string in one line it is called METHOD CHAINING

let method_concat = "HELLO I AM LEARNING STRING METHOD IN JS"

console.log(method_concat.toUpperCase().toLowerCase().toUpperCase().toLowerCase())
// hello i am learning string method in js

// NOTE : -
// chaining only works when the OUTPUT of the first method is a VALID INPUT to the second method

// console.log(method_concat.toUpperCase().length.toLowerCase()) // ERROR

// why -> method_concat.toUpperCase().length gives a NUMBER
// and toLowerCase() only works on STRING -> number is not a valid input

// ------------------------------------------------------------
// 6.4 trim() / trimStart() / trimEnd() -> removing blank spaces
// ------------------------------------------------------------

// trim()      -> removes blank spaces from START and END of string
// trimStart() -> removes blank spaces from START only
// trimEnd()   -> removes blank spaces from END only

let method_Trim = " HELLO I AM LEARNING STRING METHOD IN JS "
console.log(method_Trim.length)        // 41 (leading + trailing space)

console.log(method_Trim.trim())        // HELLO I AM LEARNING STRING METHOD IN JS
console.log(method_Trim.trim().length) // 39 (both side spaces removed)

let method_TrimSTART = " HELLO I AM LEARNING STRING METHOD IN JS"
console.log(method_TrimSTART.trimStart())        // no space at start now
console.log(method_TrimSTART.trimStart().length) // 39 (leading space removed)

let method_TrimEnd = "HELLO I AM LEARNING STRING METHOD IN JS "
console.log(method_TrimEnd.trimEnd())        // no space at end now
console.log(method_TrimEnd.trimEnd().length) // 39 (trailing space removed)

// ------------------------------------------------------------
// 6.5 charAt() / at() -> get a character at a given index
// ------------------------------------------------------------

// charAt(index) -> same job as str[index] -> returns the character at the given index
// difference -> str[999] gives undefined  BUT  str.charAt(999) gives "" (empty string)

console.log(Meth_str_1.charAt(0)) // h
console.log(Meth_str_1[0])        // h

// at(index) -> same as str[index] BUT it also supports NEGATIVE index (counts from the end)

let slice_str = "javascript"
console.log(slice_str.at(-1)) // t (last character)

// ------------------------------------------------------------
// 6.6 substr() / substring() / slice() -> get a PART of the string
// ------------------------------------------------------------

// substr(starting index, number of characters)
// -> gives "count" characters starting from the starting index
// -> LEGACY (old) method, it is deprecated -> PREFER substring() or slice()

let dummy_str_1 = "hello this string is used to show substr and substring"

let hello_str = dummy_str_1.substr(0, 5)
console.log(hello_str) // hello (5 characters starting from index 0)

// substring(starting index, ending index)  (preferred)
// -> the ENDING index is NOT included in the output

let hello_dummy = dummy_str_1.substring(0, 4)
console.log(hello_dummy) // hell -> because ending index is NOT included
// so to get "hello" -> dummy_str_1.substring(0, 5)

// slice(starting index, ending index)  (most used)
// -> same as substring() (ending index NOT included)
// -> BUT slice also supports NEGATIVE indexes (counts from the end of string)

console.log(slice_str.slice(0, 4)) // java
console.log(slice_str.slice(-6))   // script (last 6 characters)

// ------------------------------------------------------------
// 6.7 split() -> convert a string into an ARRAY
// ------------------------------------------------------------

// syntax -> we pass the value at which we need to SEPARATE the string
// return type -> array

let single_char_string = dummy_str_1.split("")     // separate at EVERY character
let sapce_char_string = dummy_str_1.split(' ')     // separate at every SPACE
let is_char_sep = dummy_str_1.split('and')         // separate at the word "and"

console.log(single_char_string)

console.log(sapce_char_string)
console.log(is_char_sep)
/**
 * [
  'h', 'e', 'l', 'l', 'o', ' ', 't', 'h',
  'i', 's', ' ', 's', 't', 'r', 'i', 'n',
  'g', ' ', 'i', 's', ' ', 'u', 's', 'e',
  'd', ' ', 't', 'o', ' ', 's', 'h', 'o',
  'w', ' ', 's', 'u', 'b', 's', 't', 'r',
  ' ', 'a', 'n', 'd', ' ', 's', 'u', 'b',
  's', 't', 'r', 'i', 'n', 'g'
]



[
  'hello',  'this',
  'string', 'is',
  'used',   'to',
  'show',   'substr',
  'and',    'substring'
]

[ 'hello th', ' string ', ' used to show substr and substring' ]

[ 'hello this string is used to show substr ', ' substring' ]
 */

// ------------------------------------------------------------
// 6.8 includes() -> check if the string CONTAINS a substring
// ------------------------------------------------------------

// this is a CASE SENSITIVE method
// return type -> boolean

let into_str = "hello is my name is siddhant"

console.log(into_str.includes("siddhant"))  // true
console.log(into_str.includes("sidddhant")) // false (spelling is wrong)
console.log(into_str.includes("Siddhant"))  // false (case sensitive -> capital S does not match)

// ------------------------------------------------------------
// 6.9 replace() / replaceAll() -> replacing parts of a string
// ------------------------------------------------------------

// replace() -> replaces ONLY the FIRST instance of the given value
// syntax
// stringname.replace("character to be replaced", "word to replace with")

let basic_str = " hello i am learning javascript and javascript is a very interesting lang"

let py_str = basic_str.replace("javascript", "python")
console.log(py_str) // hello i am learning python and javascript is a very interesting lang
//                                            ^ only the FIRST "javascript" changed

// replaceAll() -> replaces ALL the instances of the given value
// syntax
// stringname.replaceAll("character to be replaced", "word to replace with")

let py_str2 = basic_str.replaceAll("javascript", "java")
console.log(py_str2) // hello i am learning java and java is a very interesting lang
//                                       ^ ALL of them changed

// ------------------------------------------------------------
// 6.10 indexOf() / lastIndexOf() -> find the position of a value
// ------------------------------------------------------------

// indexOf() -> gives the index of the FIRST instance of the given character
// if the value is NOT found -> it returns -1

console.log(basic_str.indexOf("a"))   // 9 (first "a" is in "am")
console.log(basic_str.indexOf("xyz")) // -1 (not found)

// lastIndexOf() -> gives the index of the LAST instance of the given character

console.log(basic_str.lastIndexOf("a")) // 70 (last "a" is in "lang")

// ------------------------------------------------------------
// 6.11 startsWith() / endsWith() -> check start / end of a string
// ------------------------------------------------------------

// startsWith() -> verifies if your string STARTS with a particular character or not
// return type -> boolean | it is a CASE SENSITIVE method

let name_fn = "hello my name is xyz"

console.log(name_fn.startsWith("h")) // true
console.log(name_fn.startsWith("H")) // false (case sensitive)

// endsWith() -> verifies if your string ENDS with a particular character or not

console.log(name_fn.endsWith("z")) // true

// EXTRA -> match() / matchAll() -> used with REGEX, we will cover it later

// ============================================================
// SECTION 7 -> PRACTICE PROBLEMS
// ============================================================

// ------------------------------------------------------------
// PROBLEM 1 -> remove ALL the spaces from the given string
// ------------------------------------------------------------

let space_str = " hello this is a session for string method used i need to remove spaces for this string "

let removed_space = space_str.replaceAll(" ", "")
console.log(removed_space)
// hellothisisasessionforstringmethodusedineedtoremovespacesforthisstring

// NOTE -> trim() will NOT work here (it only removes start and end spaces)

// let space_remove = space_str.trim()
// console.log(space_remove)

// ------------------------------------------------------------
// PROBLEM 2 -> replace all "_" with "" in the given string
// ------------------------------------------------------------

let str__2 = "hello_my_name_is_siddhant"

let no_underscore_str = str__2.replaceAll("_", "")
console.log(no_underscore_str) // hellomynameissiddhant

// ------------------------------------------------------------
// PROBLEM 3 -> write a program to generate a RANDOM alphabet every time
// ------------------------------------------------------------

// hints we got from previous sessions ->
// number          -> Math.random() gives a random decimal between 0 and 1 (0 included, 1 NOT included)
// string property -> .length (total characters)
// string indexing -> str[index] to pick one character
// string variable -> we store all alphabets in a string

// step 1 : string of all alphabets
let alphabets = "abcdefghijklmnopqrstuvwxyz"
// step 2 : generate a random index between 0 and alphabets.length - 1
let random_index = Math.floor(Math.random() * alphabets.length)
// step 3 : pick the character at that random index
let random_alphabet = alphabets[random_index]

console.log(random_index)    // e.g. 14 (a NEW random number every time you run)
console.log(random_alphabet) // e.g. "o" (a NEW random alphabet every time you run)


