// Q1 --> PART A -> write a regex that matches the word "JS" case-insensitively
//        PART B -> test it on the string "JavaScript is great"
//        expected -> true (matches "JS")

// Q2 --> PART A -> write a regex to find ALL numbers in the string "abc123 def456 ghi789"
//        PART B -> use match() with the global flag
//        expected -> ["123", "456", "789"]

// Q3 --> Write a regex to check if a string is a valid email
//        hint: use the pattern we learned in the lecture
//        test on "siddhant@gmail.com" -> true
//        test on "invalid" -> false

// Q4 --> PART A -> validate a PAN Card number (format: 5 letters + 3 digits + 1 letter)
//        PART B -> explain why ^ and $ anchors are IMPORTANT in validation
//        test on "ASDFG123F" -> true
//        test on "XXASDFG123FA" -> false (with anchors)

// Q5 --> Write a regex to extract all words from a sentence
//        hint: use \w+
//        test on "Hello, World! How are you?" -> ["Hello", "World", "How", "are", "you"]

// Q6 --> PART A -> remove all vowels from a string using regex
//        test on "hello world" -> "hll wrld"
//        PART B -> explain the difference between \d and \D

// Q7 --> Write a regex to validate a phone number (10 digits)
//        hint: use ^ and $ anchors + \d{10}
//        test on "1234567890" -> true
//        test on "12345" -> false
//        test on "12345678901" -> false

// Q8 --> PART A -> replace all spaces in a string with underscores using regex
//        test on "hello world" -> "hello_world"
//        PART B -> explain the difference between * and + quantifiers

// Q9 --> Write a regex to check if a string is a valid 6-digit hex color
//        hint: # followed by exactly 6 hex digits
//        test on "#123ABC" -> true
//        test on "#123AB" -> false
//        test on "123ABC" -> false

// Q10 --> Write a regex to extract the username from an email address
//         hint: the part before the @
//         test on "siddhant@gmail.com" -> "siddhant"

// Q11 --> PART A -> match the regex /go*d/ against "gd", "god", "good"
//         PART B -> match the regex /go+d/ against "gd", "god", "good"
//         expected -> /go*d/ matches all three
//                   -> /go+d/ matches "god" and "good" but NOT "gd"

// Q12 --> Write a regex to find all words that start with "c" and end with "t"
//         test on "The cat and the hat are cute" -> ["cat", "cat"]
//         hint: use word boundaries \b and character sets [A-Za-z]

// Q13 --> PART A -> write a regex to check if a string contains only digits
//         PART B -> write a regex to check if a string contains at least one digit
//         test on "abc123" -> contains digit: true, only digits: false
//         test on "123456" -> contains digit: true, only digits: true

// Q14 --> Write a regex to validate a date in format DD-MM-YYYY
//         hint: use ^ and $ plus \d{2}-\d{2}-\d{4}
//         test on "25-12-2026" -> true
//         test on "2026-12-25" -> false (wrong order)

// Q15 --> Challenge : Write a regex to check if a password is STRONG
//         Requirements: at least 8 characters, 1 uppercase, 1 lowercase, 1 digit, 1 special char
//         test on "S1ddhant!" -> true
//         test on "abc123" -> false

// Q16 --> PART A -> write a regex to split a string by multiple delimiters (comma, semicolon, space)
//         test on "apple, banana; orange" -> ["apple", "banana", "orange"]
//         hint: use split() with a regex

// Q17 --> PART A -> explain what \b does in regex
//         test on "cat" vs "category" with /\bcat\b/
//         expected -> matches "cat" in both cases but with word boundary it only matches "cat"
//         (in "category" there is no boundary between "cat" and "egory")

// Q18 --> Write a regex to remove all punctuation from a string except apostrophes
//         hint: use replace() with a character set that includes everything to remove
//         test on "Hello, World! How's it going?" -> "Hello World How's it going"

// ============================================================
// HOW TO RUN
// ============================================================
// Each question is self-contained. Write your code below each question.
// For "PREDICT the output" questions, write your answer as a comment FIRST,
// then write the code, run it, and verify.
// For questions asking to test, create test strings and use console.log() to verify.

// ============================================================
// TEST TEMPLATE
// ============================================================

// Q1 TEST:
let q1_test = "JavaScript is great"
let q1_regex = /js/i
console.log(q1_regex.test(q1_test)) // Expected: true

// Q3 TEST:
let email1 = "siddhant@gmail.com"
let email2 = "invalid"
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
console.log(emailPattern.test(email1)) // Expected: true
console.log(emailPattern.test(email2)) // Expected: false

// Q5 TEST:
let q5_str = "Hello, World! How are you?"
console.log(q5_str.match(/\w+/g)) // Expected: ["Hello", "World", "How", "are", "you"]

// Q6 TEST:
let q6_str = "hello world"
console.log(q6_str.replace(/[aeiou]/gi, "")) // Expected: "hll wrld"

// Q7 TEST:
let q7_good = "1234567890"
let q7_bad1 = "12345"
let q7_bad2 = "12345678901"
let q7_pattern = /^\d{10}$/
console.log(q7_pattern.test(q7_good)) // Expected: true
console.log(q7_pattern.test(q7_bad1)) // Expected: false
console.log(q7_pattern.test(q7_bad2)) // Expected: false

// Q8 TEST:
let q8_str = "hello world"
console.log(q8_str.replace(/\s/g, "_")) // Expected: "hello_world"

// Q9 TEST:
let q9_good = "#123ABC"
let q9_bad1 = "#123AB"
let q9_bad2 = "123ABC"
let q9_hex = /^#([A-Fa-f0-9]{6})$/
console.log(q9_hex.test(q9_good)) // Expected: true
console.log(q9_hex.test(q9_bad1)) // Expected: false
console.log(q9_hex.test(q9_bad2)) // Expected: false

// Q10 TEST:
let q10_email = "siddhant@gmail.com"
console.log(q10_email.match(/^([^@]+)@/)[1]) // Expected: "siddhant"

// Q11 TEST:
console.log(/go*d/.test("gd"))    // Expected: true
console.log(/go*d/.test("god"))   // Expected: true
console.log(/go*d/.test("good"))  // Expected: true
console.log(/go+d/.test("gd"))    // Expected: false
console.log(/go+d/.test("god"))   // Expected: true
console.log(/go+d/.test("good"))  // Expected: true

// Q12 TEST:
let q12_str = "The cat and the hat are cute"
console.log(q12_str.match(/\bcat\b/gi)) // Expected: ["cat"]

// Q13 TEST:
let q13_1 = "abc123"
let q13_2 = "123456"
console.log(/[0-9]/.test(q13_1))    // Expected: true (contains digit)
console.log(/^[0-9]+$/.test(q13_1)) // Expected: false (not only digits)
console.log(/[0-9]/.test(q13_2))    // Expected: true (contains digit)
console.log(/^[0-9]+$/.test(q13_2)) // Expected: true (only digits)

// Q14 TEST:
let q14_good = "25-12-2026"
let q14_bad1 = "2026-12-25"
let q14_pattern = /^\d{2}-\d{2}-\d{4}$/
console.log(q14_pattern.test(q14_good)) // Expected: true
console.log(q14_pattern.test(q14_bad1)) // Expected: true (format-wise)

// Q18 TEST:
let q18_str = "Hello, World! How's it going?"
console.log(q18_str.replace(/[.,!?;:]/g, "")) // Expected: "Hello World How's it going"

// ============================================================
// EXTRA: Practice with the Lecture Examples
// ============================================================

// From the lecture, here are some exercises to practice:

// 1. PAN validation (correction: always use ^ and $ anchors!)
let pan1 = "ASDFG123F"
console.log(/^[A-Z]{5}[0-9]{3}[A-Z]{1}$/.test(pan1)) // true

// 2. Email validation
let emails = ["siddhant@gmail.com", "invalid", "user@no-extension", "test.user@org.co.in"]

// 3. Find all numbers from a sentence
let sentence = "hello on 19 May 2026 is at 9:05"
console.log(sentence.match(/\d+/g)) // ["19", "2026", "9", "05"]

// 4. Remove extra spaces
let extraSpaces = "hello   world  this   is   a    test"
console.log(extraSpaces.replace(/\s+/g, " ")) // "hello world this is a test"

// 5. Count vowels
let str5 = "hello my name is siddhant"
console.log(str5.match(/[aeiou]/gi).length) // 9

// 6. Password strength check
let password = "S1ddhant"
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
console.log(passwordPattern.test(password)) // true

// 7. Extract username from email
console.log("siddhant@gmail.com".match(/^([a-zA-Z0-9._%+-]+)@/)[1]) // "siddhant"

// ============================================================
// BREAKING POINT
// ============================================================
// STOP HERE and review what you've learned:
// - How to create regex (literal vs constructor)
// - How to use flags (g, i, m)
// - How to use character classes (\d, \w, \s, etc.)
// - How to use anchors (^, $)
// - How to use quantifiers (*, +, ?, {})
// - How to use character sets ([])
// - How to use alternation and grouping
// - How to use word boundaries (\b)

// Next Steps : Try to solve the practice problems in the theory notes (section 13)
// or move on to the next topic (arrays, objects, etc.)


// ============================================================
// END OF ASSIGNMENT : REGEX
// ============================================================
// REMEMBER : Regex is a powerful tool. The more you practice, the better you get!
// ============================================
