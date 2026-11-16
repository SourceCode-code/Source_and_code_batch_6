// ============================================================
// 16 - JAVASCRIPT : REGULAR EXPRESSIONS (REGEX)
// ============================================================

// WHAT IS REGEX ?
// ---------------
// A REGULAR EXPRESSION (REGEX) IS A PATTERN OF CHARACTERS THAT
// DEFINES A SEARCH PATTERN. IT IS USED TO MATCH, FIND, VALIDATE
// AND MANIPULATE STRINGS IN A POWERFUL WAY.
//
// REAL-WORLD USE CASES OF REGEX :
//  - VALIDATING EMAIL / PHONE / PASSWORD
//  - SEARCHING FOR PATTERNS IN LARGE TEXT (Like Google search for strings)
//  - EXTRACTING NUMBERS / EMAILS / LINKS FROM TEXT
//  - REMOVING UNWANTED CHARACTERS (spaces, digits, special chars)
//  - FORM VALIDATION (client-side)
//  - PARSING DATA (log files, CSV, URLs)
//
// EXAMPLE : Check if a string contains a word
//  let str = "I love JS";
//  /JS/.test(str)   // true  -> checks if "JS" exists in str

// ============================================================
// SECTION 1 -> HOW TO CREATE A REGEX
// ============================================================

// METHOD 1 -> LITERAL SYNTAX (Most common & recommended)
// Syntax : /pattern/flags
// The pattern is written directly between forward slashes.

let reg1 = /siddhant/
let reg2 = /siddhant/gi
let reg3 = /[A-Z]{5}\d{3}[A-Z]/



// ============================================================
// SECTION 4 -> SPECIAL CHARACTERS (Metacharacters)
// ============================================================

// These characters have SPECIAL meaning in regex:
// . ^ $ * + ? { } [ ] \ | ( )

// To use them LITERALLY, we must ESCAPE them with backslash \

console.log("Price is $100".match(/\$/))  // ["$"]  -> $ is a special char (end anchor)

// ============================================================
// SECTION 5 -> CHARACTER CLASSES (Predefined Shorthand)
// ============================================================

/**
 * \d  -> matches ANY DIGIT (0-9)  [shorthand for [0-9]]
 * \D  -> matches ANY NON-DIGIT   [shorthand for [^0-9]]
 * \w  -> matches ANY WORD char   [a-zA-Z0-9_]  (letter, digit, underscore)
 * \W  -> matches ANY NON-WORD char [^a-zA-Z0-9_]
 * \s  -> matches ANY WHITESPACE  (space, tab, newline)
 * \S  -> matches ANY NON-WHITESPACE
 */

let str5 = "abc123@"
console.log(str5.match(/\d/g)) // ["1", "2", "3"]  -> all digits
console.log(str5.match(/\D/g)) // ["a", "b", "c", "@"] -> all non-digits
console.log(str5.match(/\w/g)) // ["a", "b", "c", "1", "2", "3"] (word chars only)
console.log(str5.match(/\W/g)) // ["@"]  -> non-word chars

// PRACTICAL EXAMPLE : Remove all digits from a string
let phone = "98765 43210"
let phoneWithoutDigits = phone.replace(/\d/g, "")
console.log(phoneWithoutDigits) // "   " (spaces remain, digits removed)

// PRACTICAL EXAMPLE : Find all words (alphanumeric sequences)
let sentence = "Hello123 world_456~!@"
console.log(sentence.match(/\w+/g)) // ["Hello123", "world_456"] (one or more word chars)


console.log(reg1) // /siddhant/

// METHOD 2 -> CONSTRUCTOR SYNTAX (Useful when pattern is dynamic)
// Syntax : new RegExp("pattern", "flags")

let pattern = "siddhant"
let regConstructor = new RegExp(pattern)
console.log(regConstructor)




// ============================================================
// SECTION 6 -> ANCHORS (Position Matches)
// ============================================================

/**
 * ^  -> matches the START of a string (or line in multiline mode)
 * $  -> matches the END of a string (or line in multiline mode)
 *
 * These are ZERO-width assertions - they don't consume characters,
 * they just check POSITION.
 */

let startStr = "Hello World"
console.log(/^H/.test(startStr))  // true  (starts with H)
console.log(/d$/.test(startStr))  // true  (ends with d)

let email1 = "siddhant@gmail.com"
console.log(/^[a-z]+@[a-z]+\.com$/.test(email1)) // true

// NEGATED anchor :  ^ inside [] means "NOT"
console.log(/[^0-9]/.test("abc")) // true  (contains non-digit)
console.log(/[^0-9]/.test("123")) // false (all digits)

// ============================================================
// SECTION 7 -> QUANTIFIERS (How many times?)
// ============================================================

/**
 * *  -> ZERO OR MORE  (matches 0 or more times)   {0,}
 * +  -> ONE OR MORE   (matches 1 or more times)   {1,}
 * ?  -> ZERO OR ONE   (optional)                  {0,1}
 *
 * {n}  -> exactly n times
 * {n,} -> n or more times
 * {n,m}-> between n and m times
 */

// * examples
console.log(/go*d/.test("gd"))    // true  (0 o's)
console.log(/go*d/.test("god"))   // true  (1 o)
console.log(/go*d/.test("goood")) // true  (many o's)

// + examples
console.log(/go+d/.test("god"))   // true  (1 o)
console.log(/go+d/.test("goood")) // true  (many o's)
console.log(/go+d/.test("gd"))    // false (0 o's - NOT allowed with +)

// ? examples
console.log(/colou?r/.test("color"))  // true  (u is optional)
console.log(/colou?r/.test("colour")) // true  (u present)

// {n} exact
console.log(/\d{4}/.test("2026"))  // true  (exactly 4 digits)
console.log(/\d{4}/.test("20260")) // true  (at least 4 - matches first 4)

// {n,} at least
console.log(/\d{4,}/.test("123456")) // true  (6 digits, >= 4)
console.log(/\d{4,}/.test("123"))    // false (only 3 digits)

// {n,m} range
console.log(/\w{2,4}/.test("abc"))   // true  (3 chars, between 2 and 4)
console.log(/\w{2,4}/.test("abcde")) // true  (matches first 4 - greedy)

// ============================================================
// SECTION 8 -> CHARACTER SETS (Square Brackets)
// ============================================================

// [ ] define a SET of characters to match
// You can specify ranges using - (hyphen)

// Examples :
// [a-z]  -> any lowercase letter
// [A-Z]  -> any uppercase letter
// [0-9]  -> any digit
// [a-zA-Z] -> any letter (both cases)
// [^a-z] -> NOT a lowercase letter (caret inside [] = negation)

let str6 = "Hello World 123"
console.log(str6.match(/[a-z]/g))  // lowercase letters
console.log(str6.match(/[A-Z]/g))  // uppercase letters
console.log(str6.match(/[0-9]/g))  // digits

// PRACTICAL : PAN Card validation
// Format : 5 uppercase letters, 3 digits, 1 uppercase letter
// CORRECT pattern : ^[A-Z]{5}[0-9]{3}[A-Z]{1}$
//   ^           -> start of string
//   [A-Z]{5}    -> exactly 5 uppercase letters
//   [0-9]{3}    -> exactly 3 digits
//   [A-Z]{1}    -> exactly 1 uppercase letter
//   $           -> end of string

// Note: [A-Z] with i flag means [a-zA-Z] - useful for case-insensitive
let pan1 = "ASDFG123F"
let panPattern = /^[A-Z]{5}[0-9]{3}[A-Z]{1}$/i
console.log(panPattern.test(pan1)) // true

// Test with invalid PAN
let invalidPan = "ASDF123F"   // only 4 letters before digits
console.log(panPattern.test(invalidPan)) // false (only 4 letters - should be 5)

let invalidPan2 = "XXABCD123FG" // too long
console.log(panPattern.test(invalidPan2)) // false (extra characters)



// ============================================================
// SECTION 9 -> ALTERNATION (OR) and GROUPING (Parentheses)
// ============================================================

/**
 * |  -> OR operator
 * ( )  -> group - captures a part of the match
 */

// | example
console.log(/yes|no/.test("yes"))  // true
console.log(/yes|no/.test("no"))   // true

// Group with alternation - match "cat" OR "dog"
console.log(/(cat|dog)/.test("The cat is here")) // true

// Grouping for quantifiers
console.log(/(ab)+/.test("ab ab ab")) // true (ab appears 3 times)
console.log(/(ab)+/.test("a"))        // false (ab not found as a group)

// Capturing groups - extract parts of the match
let priceStr = "Price is $100"
let pricePattern = /\$(\d+)/
let match = priceStr.match(pricePattern)
console.log(match) // ["$100", "100", ...] - match[1] has the digits

// ============================================================
// SECTION 10 -> WORD BOUNDARIES (\b)
// ============================================================

// \b -> word boundary : position between word char (\w) and non-word char
// \B -> non-word boundary : position where \b does NOT match

let wordStr = "The cat and the CAT are here"
console.log(/\bcat\b/gi.test(wordStr)) // true
console.log(/\bcat\b/gi.test("category")) // false (cat inside another word - no boundary)

// Practical example : Replace only whole word "is"
let sentence2 = "This is a test. It is easy."
console.log(sentence2.replace(/\bis\b/gi, "IS"))
// "This IS a test. It IS easy." (only whole word "is", not "This")

// ============================================================
// SECTION 11 -> PRACTICAL EXAMPLES
// ============================================================

// EXAMPLE 1 : Email Validation
// Format : username@domain.extension
// username : allows letters, digits, dots, underscores, %, +, -
// domain   : allows letters, digits, dots, hyphens
// extension: at least 2 letters
let emailPattern2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let emails = [
  "siddhant@gmail.com",
  "test.user@org.co.in",
  "invalid.email",
  "user@no-extension",
  "user@domain.c"
]
emails.forEach(email => {
  console.log(email + " -> " + emailPattern2.test(email))
})



// EXAMPLE 2 : Phone number validation (Indian 10-digit mobile)
// Must start with 6-9, followed by exactly 9 more digits
let phonePattern = /^[6-9]\d{9}$/
let phoneNumbers = ["9876543210", "6543210987", "5876543210", "1234567890", "98765"]
phoneNumbers.forEach(phone => {
  console.log(phone + " -> " + phonePattern.test(phone))
})

// EXAMPLE 3 : Password strength (basic check)
// At least 8 chars, 1 uppercase, 1 lowercase, 1 digit
let password = "S1ddhant"
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
console.log(passwordPattern.test(password))

// EXAMPLE 4 : Extract all numbers from a sentence
let str7 = "hello everyone class on 19 May 2026 is at 9:05 pm"
console.log(str7.match(/\d+/g))

// EXAMPLE 5 : Count vowels in a string
let str8 = "hello my name is siddhant gadakh"
let vowels = str8.match(/[aeiou]/gi)
console.log(vowels.length)

// EXAMPLE 6 : Remove all punctuation
let text2 = "Hello, World! How are you? I'm fine."
let noPunctuation = text2.replace(/[.,!?;'"\:-]/g, "")
console.log(noPunctuation)



// ============================================================
// SECTION 12 -> QUICK REVISION TABLE
// ============================================================

/**
 * | SYMBOL | MEANING                      | EXAMPLE              |
 * |--------|------------------------------|----------------------|
 * | .      | any character                | /./ matches "a"      |
 * | ^      | start of string/line         | /^A/ matches "A..."  |
 * | $      | end of string/line           | /z$/ matches "...z"  |
 * | *      | 0 or more                    | /ab*c/ matches "ac", "abc" |
 * | +      | 1 or more                    | /ab+c/ matches "abc", "abbc" |
 * | ?      | 0 or 1 (optional)            | /ab?c/ matches "ac", "abc" |
 * | {}     | exact/n-range count          | /\d{3}/ matches 3 digits |
 * | []     | character set                | /[a-z]/ matches any lowercase |
 * | [^]    | negated set                  | /[^0-9]/ matches non-digit |
 * | |      | OR                           | /cat|dog/ matches "cat" or "dog" |
 * | ()     | group / capture              | /(ab)+/ matches "ab", "abab" |
 * | \b     | word boundary                | /\bword\b/ matches whole "word" |
 * | \d     | digit (0-9)                  | /\d/ matches "5"       |
 * | \D     | non-digit                    | /\D/ matches "a"       |
 * | \w     | word char (a-zA-Z0-9_)       | /\w/ matches "a", "1", "_"|
 * | \s     | whitespace                   | /\s/ matches " "       |
 * | \S     | non-whitespace               | /\S/ matches "a"       |
 *
 * FLAGS:
 *  g - global  (all matches)
 *  i - ignore case
 *  m - multiline (^ and $ per line)
 *
 * STRING METHODS WITH REGEX:
 *  - test()       -> boolean (does it match?)
 *  - match()      -> array of matches
 *  - replace()    -> new string with replacements
 *  - search()     -> index of first match (-1 if none)
 *  - split()      -> array split by regex
 */

// ============================================================
// SECTION 13 -> COMMON MISTAKES & CORRECTIONS
// ============================================================

// MISTAKE 1: Missing anchors ^ and $ in validation
// WRONG : /[A-Z]{5}[0-9]{3}[A-Z]{1}/.test("XXASDFG123FA") // TRUE (WRONG!)
// CORRECT : /^[A-Z]{5}[0-9]{3}[A-Z]{1}$/.test("XXASDFG123FA") // FALSE

// MISTAKE 2: Using string methods case-sensitively
// WRONG : string.replace("JS", "java")  // only replaces "JS" exactly
// CORRECT : string.replace(/JS/gi, "java") // replaces JS, js, Js, JS...

// MISTAKE 3: Forgetting to escape special characters
// WRONG : /price is $100/  (the $ is treated as end anchor)
// CORRECT : /price is \$100/  (matches literally "price is $100")



// ============================================================
// SECTION 14 -> PRACTICE PROBLEMS (Try these on your own)
// ============================================================

// 1. Validate a date in format DD/MM/YYYY
// 2. Extract all URLs from a paragraph of text
// 3. Check if a string is a valid hex color (#FFF or #FFFFFF)
// 4. Remove all extra spaces (more than one) from a string
// 5. Extract username from an email address
// 6. Validate a credit card number (16 digits, groups of 4)

console.log("\n--- QUICK EXERCISE ANSWERS ---")

// Exercise 1 : Date validation
let datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
console.log("25/12/2026 valid:", datePattern.test("25/12/2026")) // true
console.log("13/13/2026 valid:", datePattern.test("13/13/2026")) // false

// Exercise 4 : Remove extra spaces
let extraSpaces = "hello   world  this   is   a    test"
let cleaned = extraSpaces.replace(/\s+/g, " ")
console.log(cleaned) // "hello world this is a test"

// Exercise 5 : Extract username from email
let email3 = "siddhant@gmail.com"
let username = email3.match(/^([a-zA-Z0-9._%+-]+)@/)[1]
console.log(username) // "siddhant"

// Exercise 6 : Credit card validation (basic format check only)
let ccPattern = /^\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}$/
console.log(ccPattern.test("1234-5678-9012-3456"))
console.log(ccPattern.test("1234567890123456"))
console.log(ccPattern.test("1234-5678-9012-345"))

// ============================================================
// END OF LECTURE : REGEX
// ============================================================
// REMEMBER : Regex is a powerful tool. Practice regularly!
// Review these concepts weekly and solve at least 
// 3-5 regex problems every week.
// ============================================================

