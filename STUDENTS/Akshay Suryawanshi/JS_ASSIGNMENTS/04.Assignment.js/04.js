// ============================================
// 04_ASSIGNMENT -> TOPIC : JS STRINGS (+ revision of basics, datatypes & numbers)
// BASED ON : LECTURE/04_JS_String.js  +  THEORY_NOTES/04_JS_String.md
//
// HOW TO RUN : open terminal -> node 04_ASSIGNMENT.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : STRING BASICS -------------------

//Q1 --> Declare the SAME string "JavaScript" in all 3 ways
//       (double quotes, single quotes, backticks).
//       Print all 3 values AND their datatypes using typeof.
//       HINT -> all 3 should print "string". if not, find the mistake.
// Answer -->
let A = "my name is Akshay"
let B = 'my name is Akshay'
let C = `my name is Akshay`

console.log(typeof A)
console.log(typeof B)
console.log(typeof C)


//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = "123"
//       let b = 123
//       let c = "true"
//       let d = true
//       console.log(typeof a, typeof b, typeof c, typeof d)
//       HINT -> quotes CHANGE everything. revise lecture 02 (datatypes) + lecture 04.
// Answer -->
let a = "123"
//  string
let b = 123
// number
let c = "true"
//  string
let d = true
//  boolean

console.log(typeof a, typeof b, typeof c, typeof d)

//Q3 --> let city = "Aurangabad"
//       a) print the length of the string
//       b) print the FIRST character
//       c) print the LAST character WITHOUT counting manually
//       HINT -> last element equation -> index (length - 1)
// Answer-->
let city = "Sambhaji nagar"

console.log(city.length)
// length is 14
console.log(city[0])
// first charecter is "S"
console.log(city .at(-1))
// last character is "r"

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let spaces = "   "
//       console.log(spaces.length)
//       console.log("".length)
//       HINT -> are spaces characters too ? what is the length of an EMPTY string ?
// Answer -->
let spaces = "   "
console.log(spaces.length)

// 1) yes spaces are also characters in string.
// 2) if enter any charecter in ("  ") ('  ') (`  `) that will also string 
console.log("".length)
// if string is empty then length is '0'


//Q5 --> Given the string below, write code to print the character
//       at the 4th index and the 9th index. Then print the character
//       at index 100 and index -5 and observe what comes.
//       let lang = "JavaScript"
//       HINT -> str[100] and str.charAt(100) do NOT give the same thing. find out the difference.
// Answer -->
let lang = "JavaScript"
console.log(lang.charAt(3))
// 4th index is "a"
console.log(lang.charAt(8))
// 9th index is "p"
console.log(lang.charAt(100))
// 100th index is EMPTY (because of strings length)
console.log(lang.charAt(-5))
// -5 also give EMPTY (because of strings length)

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let name = "Siddhant"
//       console.log(`hello ${name}`)
//       console.log("hello ${name}")
//       console.log('hello ${name}')
//       HINT -> ${} placeholders work ONLY in one type of quotes. which one and why ?
// Answer -->
let name = "Siddhant"
console.log(`hello ${name}`)
// output is "hello Siddhant" because using of (backticks)
console.log("hello ${name}")
//output is hello ${name}
console.log('hello ${name}')
//output is hello ${name}


//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let str = "JavaScript"
//       console.log(str.includes("script"))
//       console.log(str.includes("Script"))
//       console.log(str.includes("java"))
//       HINT -> includes(), startsWith(), endsWith() are ALL ______ sensitive methods.
// Answer -->
let str = "JavaScript"
console.log(str.includes("script"))
// output is false because in string "S" is in capital letter
console.log(str.includes("Script"))
// output is true because in string "S" is also in capital letter
console.log(str.includes("java"))
// output is false because in string "J" is in capital letter

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let greeting = "hello"
//       greeting.toUpperCase()
//       console.log(greeting)
//       HINT -> STRINGS ARE ______ in javascript. what does toUpperCase() actually RETURN
//       and where does that returned value go in this code ?

// Answer -->
let greeting = "hello"
console.log(greeting.toUpperCase())
// output is "HELLO"
console.log(greeting)
// output is hello --> because STRINGS are IMMUTABLE in javascript

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("HelloWorld".toUpperCase().length)
//       console.log("HelloWorld".toLowerCase().charAt(0))
//       console.log("HelloWorld".length.toLowerCase())   // <- this one ERRORS. why ?
//       HINT -> chaining works only when the output of the first method is a VALID INPUT
//       to the second method. what datatype does .length give ?
// Answer -->
console.log("HelloWorld".toUpperCase().length)
//output length is 10
console.log("HelloWorld".toLowerCase().charAt(0))
// output is "h"
//console.log("HelloWorld".length.toLowerCase())
// because (.length.toLowerCase()) is not a correct way to get output
// correct way---> console.log("HelloWorld".toLowerCase().length)
console.log("HelloWorld".toLowerCase().length)
// output is 10


//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let str = "JavaScript"
//        console.log(str.substring(4, 10))
//        console.log(str.substr(4, 6))
//        console.log(str.slice(4))
//        HINT -> substring takes ENDING index (NOT included), substr takes NUMBER OF
//        characters, slice with one argument goes till the END of the string.
//        all 3 should print the same word here - are they ? why ?
// Answer -->
//           012345678910
let str_1 = "JavaScript"
console.log(str_1.substring(4, 10))
// output is "Script"
console.log(str_1.substr(4, 6))
// output is "Script"
console.log(str_1.slice(4))
// output is "Script"

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let fruit = "banana apple banana"
//        console.log(fruit.indexOf("a"))
//        console.log(fruit.lastIndexOf("a"))
//        console.log(fruit.indexOf("mango"))
//        HINT -> indexOf = FIRST instance, lastIndexOf = LAST instance,
//        and when the value is NOT found the answer is always ______ ?
// Answer -->
         
let fruit = "banana apple banana"
console.log(fruit.indexOf("a"))
// output is "1"
console.log(fruit.lastIndexOf("a"))
// output is "18"
console.log(fruit.indexOf("mango"))
// output is "-1"

//Q12 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let messy = "   JS   "
//        console.log(messy.trim().length)
//        console.log(messy.trimStart().length)
//        console.log(messy.trimEnd().length)
//        console.log(messy.length)
//        HINT -> count the spaces carefully. trim removes start AND end,
//        trimStart removes ONLY start, trimEnd removes ONLY end.
// Answer -->
//           12345678
let messy = "   JS   "
console.log(messy.trim().length)
//output is 2
console.log(messy.trimStart().length)
//output is 5
console.log(messy.trimEnd().length)
//output is 5
console.log(messy.length)
// output is 8

//Q13 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log("a,b,c".split(",").length)
//        console.log("hello".split("").length)
//        console.log("hello world".split(" "))
//        HINT -> split("") with an EMPTY string splits at EVERY single character.
// Answer -->
console.log("a,b,c".split(",").length)
// output is 3
console.log("hello".split("").length)
// output is 5
console.log("hello world".split(" "))
// output is ['hello','world']
console.log("a,b,c".split(""))
//output is ['a',',''b',',''c']

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q14 --> let username = "   SIDDHANT   "
//        Clean this username -> remove the extra spaces from both sides
//        and convert it to lowercase. Print the final result as "siddhant".
//        HINT -> method chaining -> trim() + toLowerCase()
// Answer -->
let username = "   SIDDHANT   "
console.log(username.trim()) 
//remove all the spaces from both side "SIDDHANT"
console.log(username.toLowerCase().trim())
// output is "siddhant" --by using .toLowerCase and .trim method

//Q15 --> let sentence = " remove all the spaces from this sentence "
//        Print the sentence with EVERY space removed.
//        Then answer in comments : why does trim() NOT work here ?
//        HINT -> trim() only removes start/end spaces. which method removes ALL instances ?

// Answer -->

let sentence = " remove all the spaces from this sentence "
console.log(sentence.replaceAll(" ",""))
//removeallthespacesfromthissentence


//Q16 --> let review = "this movie is bad and the acting is bad too"
//        a) replace only the FIRST "bad" with "good"
//        b) replace ALL "bad" with "good"
//        Print both results separately.
//        HINT -> replace() vs replaceAll() -> first instance vs ALL instances

//Answer-->
let review = "this movie is bad and the acting is bad too"
//a)replace only the FIRST "bad" with "good"
console.log(review.replace("bad","good"))
// output is "this movie is good and the acting is bad too"

//b) replace ALL "bad" with "good"
console.log(review.replaceAll("bad","good"))
// output is "this movie is good and the acting is good too"


//Q17 --> let colors = "red,green,blue,yellow"
//        Split it into an array and print EACH color separately using its index.
//        Expected output (4 console.logs) -> red | green | blue | yellow
//        HINT -> split(",") gives an array -> arr[0], arr[1], arr[2] ...

// Answer -->
let colors = "red,green,blue,yellow"
console.log(colors.split(""))
/* output is [
  'r', 'e', 'd', ',', 'g',
  'r', 'e', 'e', 'n', ',',
  'b', 'l', 'u', 'e', ',',
  'y', 'e', 'l', 'l', 'o',
  'w'
]
*/
// let seprate every colour
let colour_1 = "red green blue yellow"
console.log(colour_1.split(" "))
//output is [ 'red', 'green', 'blue', 'yellow' ]

//Q18 --> Extract the word "Script" from "JavaScript" in THREE different ways
//        using substring(), substr() and slice(). Print all 3 results.
//        HINT -> JavaScript -> J(0)a(1)v(2)a(3)S(4)... "Script" starts at index 4
//        and is 6 characters long.

// Answer -->
//            0123456789
let string = "JavaScript"
// 1) subsrting()
console.log(string.substring(4,10))
// output is "Script"

// 2) substr()
console.log(string.substr(4,9))
// output is "Script"

// 3) slice()
console.log(string.slice(-6))
// output is "Script"


//Q19 --> let line = "i am learning javascript and javascript is fun"
//        a) print the total number of characters (including spaces)
//        b) print the number of characters EXCLUDING spaces
//        HINT -> for (b) -> remove all spaces first, then use .length

// Answer -->
let line = "i am learning javascript and javascript is fun"

// a) print the total number of characters (including spaces)
console.log(line.length)
//output is "46"

// b) print the number of characters EXCLUDING spaces
console.log(line.replaceAll(" ",""))
// output is "iamlearningjavascriptandjavascriptisfun"

// c) let get length
console.log(line.replaceAll(" ","").length)
// output is "39"


//Q20 --> REVISION (numbers + strings together) ->
//        Generate a random 6-digit OTP (100000 to 999999) using Math methods
//        and print it using a template literal like "Your OTP is : 483920".
//        HINT -> golden formula from lecture 03 -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> why can a 6-digit OTP NEVER start with 0 ? what min value guarantees this ?

// Answer -->
let OTP = Math.floor(Math.random()*(100000+999999+1))
console.log(OTP)
// output is "917188"
let your_otp = "Your OTP is:- "

console.log(your_otp + OTP)
// Your OTP is:- 917188


// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q21 --> INTERVIEW QUESTION -> "Strings are immutable in JavaScript."
//        a) explain this statement in 2-3 lines
//        b) PROVE it with a small code example (change a string with a method,
//           then print the original and show it is unchanged)
//        c) so how do you "change" a string in real projects ? what must you do with
//           the value returned by the method ?

//Q22 --> INTERVIEW QUESTION -> write the difference between substring(), substr() and slice()
//        in the form of a table in comments (minimum 3 points).
//        Think about : what the 2nd argument means, end index included or not,
//        negative index support, and which one is deprecated.
//        Also write WHICH one you would use in a real project and why.

//Q23 --> INTERVIEW QUESTION (CLASSIC) -> predict and explain :
//        console.log("5" + 5)
//        console.log("5" - 5)
//        HINT -> the + operator joins strings (concatenation), but the - operator
//        works on numbers only. revise datatype conversion from lecture 02 + 03.
//        then answer : why do the two lines give DIFFERENT types of output ?

// Answer -->
console.log("5" + 5)
//output is "55", because "5" is a string.
// in this case (+) is a perform joining strings
console.log(5+5)
// if we did not use ("") then it will arithmatical operation
console.log("5" - 5)
// output is "0", in this case its arithmatical operation

//Q24 --> INTERVIEW QUESTION -> what is the difference between a PROPERTY and a METHOD ?
//        Answer with one string example of each, and explain the syntax difference
//        (brackets vs no brackets).

// Answer-->
// METHOD --> 1) Commands used to perform various operations
//            2) it does not change the original value
//  example of method in string
let ex_METHOD = "i am learning JS and its intresting language"
console.log(ex_METHOD.toUpperCase()) // output is "I AM LEARNING JS AND ITS INTRESTING LANGUAGE"
// syntax --> stringname.toUppercase()

// PROPERTIES --> 1) some value add in data
let name1 ="AKSHAY"
console.log(name1.length) // output is "6"
// syntax --> stringname.length
// in METHOD use with() and in PROPERTIES use without () 

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q25 --> BONUS -> RANDOM PASSWORD GENERATOR ->
//        From the string below, generate a random 4-character password.
//        Rules -> pick 4 RANDOM characters, join them and print like "a7Kq".
//        let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
//        HINT -> reuse the random alphabet logic from class 4 times
//        (4 separate picks stored in 4 variables), then join with template literal.
//        NOTE -> real passwords mix cases, this is just the beginner version :)

//Q26 --> BONUS (MINI PROJECT - USERNAME & EMAIL GENERATOR) ->
//        Given the details below :
//        let firstName = "Siddhant"
//        let lastName = "Gadakh"
//        a) generate a username -> first 3 letters of firstName (lowercase)
//           + first 3 letters of lastName (lowercase) + a random 2-digit number (10 to 99)
//           Example -> "sidgad73"
//        b) generate the email -> username + "@gmail.com"
//        c) print a small ID CARD in EXACTLY this format (use template literals) :
//           Name    : Siddhant Gadakh
//           User ID : sidgad73
//           Email   : sidgad73@gmail.com
//        HINT -> slice() for the name parts, golden formula for the random number,
//        toLowerCase() for the username, template literal to join everything.

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 04_ASSIGNMENT.js
// ============================================