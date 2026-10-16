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
// Answer:- 
let str_1 = "Javascript"
let str_2 = 'Javascript'
let str_3 = `Javascript`
console.log(str_1)
console.log(str_2)
console.log(str_3)
console.log(typeof str_1)
console.log(typeof str_2)
console.log(typeof str_3)

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = "123"
//       let b = 123
//       let c = "true"
//       let d = true
//       console.log(typeof a, typeof b, typeof c, typeof d)
//       HINT -> quotes CHANGE everything. revise lecture 02 (datatypes) + lecture 04.
let a = "123"
let b = 123
let c = "true"
let d = true
console.log(typeof a, typeof b, typeof c, typeof d) // string number string boolean

//Q3 --> let city = "Aurangabad"
//       a) print the length of the string
//       b) print the FIRST character
//       c) print the LAST character WITHOUT counting manually
//       HINT -> last element equation -> index (length - 1)
// Answer:-
let city = "Aurangabad"
console.log(city.length) //lenght
console.log(city[0]) // FIRST character
console.log(city[city.lenght-1]) // LAST character 

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let spaces = "   "
//       console.log(spaces.length)
//       console.log("".length)
//       HINT -> are spaces characters too ? what is the length of an EMPTY string ?
//Answer:- 
      let spaces = "   " // spaces contains 3 space characters
      console.log(spaces.length) //3
      console.log("".length) // An empty string contains 0 characters


//Q5 --> Given the string below, write code to print the character
//       at the 4th index and the 9th index. Then print the character
//       at index 100 and index -5 and observe what comes.
//       let lang = "JavaScript"
//       HINT -> str[100] and str.charAt(100) do NOT give the same thing. find out the difference.
// Answer:- 
let lang = "JavaScript"
console.log(lang[4]) // 4th index  -S
console.log(lang[9]) // 9th index  -t
console.log(lang[100]) // 100th index -undefined
console.log(lang[-5]) // -5 undefined
console.log(lang.charAt(100))

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let name = "Siddhant"
//       console.log(`hello ${name}`)
//       console.log("hello ${name}")
//       console.log('hello ${name}')
//       HINT -> ${} placeholders work ONLY in one type of quotes. which one and why ?
// Answer:- 
 let name = "Siddhant"
      console.log(`hello ${name}`) //hello Siddhant
      console.log("hello ${name}") //hello ${name}
      console.log('hello ${name}') //hello ${name}

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let str = "JavaScript"
//       console.log(str.includes("script"))
//       console.log(str.includes("Script"))
//       console.log(str.includes("java"))
//       HINT -> includes(), startsWith(), endsWith() are ALL ______ sensitive methods.
// Answer:- 
let str = "JavaScript"
      console.log(str.includes("script")) // false
      console.log(str.includes("Script")) // true
      console.log(str.includes("java")) // false



//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let greeting = "hello"
//       greeting.toUpperCase()
//       console.log(greeting)
//       HINT -> STRINGS ARE ______ in javascript. what does toUpperCase() actually RETURN
//       and where does that returned value go in this code ?
// Answer:- 
 let greeting = "hello"
 greeting.toUpperCase()
 console.log(greeting)

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("HelloWorld".toUpperCase().length)
//       console.log("HelloWorld".toLowerCase().charAt(0))
//       console.log("HelloWorld".length.toLowerCase())   // <- this one ERRORS. why ?
//       HINT -> chaining works only when the output of the first method is a VALID INPUT
//       to the second method. what datatype does .length give ?
// Answer:- 
      console.log("HelloWorld".toUpperCase().length) // "HelloWorld" → "HELLOWORLD" → length = 10
      console.log("HelloWorld".toLowerCase().charAt(0)) // "HelloWorld" → "helloworld" → charAt(0) = "h"
 //    console.log("HelloWorld".length.toLowerCase()) // error becase split the string
//    "HelloWorld".length → 10
// 10 is a NUMBER.
// toLowerCase() is a STRING method.
// Number does not have toLowerCase().

//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let str = "JavaScript"
//        console.log(str.substring(4, 10))
//        console.log(str.substr(4, 6))
//        console.log(str.slice(4))
//        HINT -> substring takes ENDING index (NOT included), substr takes NUMBER OF
//        characters, slice with one argument goes till the END of the string.
//        all 3 should print the same word here - are they ? why ?
// Answer:- 
       let str_4 = "JavaScript"
       console.log(str_4.substring(4, 10))
       console.log(str_4.substr(4, 6))
       console.log(str_4.slice(4))

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let fruit = "banana apple banana"
//        console.log(fruit.indexOf("a"))
//        console.log(fruit.lastIndexOf("a"))
//        console.log(fruit.indexOf("mango"))
//        HINT -> indexOf = FIRST instance, lastIndexOf = LAST instance,
//        and when the value is NOT found the answer is always ______ ?
// Answer:- 

let fruit = "banana apple banana"
console.log(fruit.indexOf("a")) //out:- 1
console.log(fruit.lastIndexOf("a"))// out :- 18
console.log(fruit.indexOf("mango"))//out :- -1

//Q12 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let messy = "   JS   "
//        console.log(messy.trim().length)
//        console.log(messy.trimStart().length)
//        console.log(messy.trimEnd().length)
//        console.log(messy.length)
//        HINT -> count the spaces carefully. trim removes start AND end,
//        trimStart removes ONLY start, trimEnd removes ONLY end.
// Answer:- 

let messy = "   JS   "
console.log(messy.trim().length)  // out:- 2
console.log(messy.trimStart().length)// out:-5
console.log(messy.trimEnd().length)// out:-5
console.log(messy.length)// out:-8


//Q13 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log("a,b,c".split(",").length)
//        console.log("hello".split("").length)
//        console.log("hello world".split(" "))
//        HINT -> split("") with an EMPTY string splits at EVERY single character.
// Answer:- 

console.log("a,b,c".split(",").length) 
console.log("hello".split("").length)
console.log("hello world".split(" "))


// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q14 --> let username = "   SIDDHANT   "
//        Clean this username -> remove the extra spaces from both sides
//        and convert it to lowercase. Print the final result as "siddhant".
//        HINT -> method chaining -> trim() + toLowerCase()
// Answer:- 
let username = "   SIDDHANT   "
let cleanUsername = username.trim().toLowerCase()
console.log(cleanUsername)

//Q15 --> let sentence = " remove all the spaces from this sentence "
//        Print the sentence with EVERY space removed.
//        Then answer in comments : why does trim() NOT work here ?
//        HINT -> trim() only removes start/end spaces. which method removes ALL instances ?
// Answer:- 
let sentence = " remove all the spaces from this sentence "
let result = sentence.replaceAll(" ","")
console.log(result)
// trim() does NOT work here because trim() removes spaces
// only from the beginning and end of the string.
// It does not remove spaces between words.


//Q16 --> let review = "this movie is bad and the acting is bad too"
//        a) replace only the FIRST "bad" with "good"
//        b) replace ALL "bad" with "good"
//        Print both results separately.
//        HINT -> replace() vs replaceAll() -> first instance vs ALL instances
// Answer:- 
let review = "this movie is bad and the acting is bad too"
let firstResult = review.replace("bad" , "good") 
let secondResult = review.replaceAll("bad" , "good")
console.log(firstResult) // this movie is good and the acting is bad too
console.log(secondResult) // this movie is good and the acting is good too

//Q17 --> let colors = "red,green,blue,yellow"
//        Split it into an array and print EACH color separately using its index.
//        Expected output (4 console.logs) -> red | green | blue | yellow
//        HINT -> split(",") gives an array -> arr[0], arr[1], arr[2] ...
// Answer:- 
let colors = "red,green,blue,yellow"
let colosArray = colors.split(",")

console.log(colosArray[0])
console.log(colosArray[1])
console.log(colosArray[2])
console.log(colosArray[3])



//Q18 --> Extract the word "Script" from "JavaScript" in THREE different ways
//        using substring(), substr() and slice(). Print all 3 results.
//        HINT -> JavaScript -> J(0)a(1)v(2)a(3)S(4)... "Script" starts at index 4
//        and is 6 characters long.
// Answer:- 
let word = "JavaScript"
console.log(word.substring(4, 10))
console.log(word.substr(4 , 6 ))
console.log(word.slice(4 , 10))
// substring(start, end)
// substr(start, length)
// slice(start, end)

//Q19 --> let line = "i am learning javascript and javascript is fun"
//        a) print the total number of characters (including spaces)
//        b) print the number of characters EXCLUDING spaces
//        HINT -> for (b) -> remove all spaces first, then use .length
// Answer:- 
let line = "i am learning javascript and javascript is fun"

// a) print the total number of characters (including spaces)
console.log(line.length) // out:-46

// b) print the number of characters EXCLUDING spaces
let withoutSpace = line.replaceAll(" " , "") 
console.log(withoutSpace.length) // out:-39



//Q20 --> REVISION (numbers + strings together) ->
//        Generate a random 6-digit OTP (100000 to 999999) using Math methods
//        and print it using a template literal like "Your OTP is : 483920".
//        HINT -> golden formula from lecture 03 -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> why can a 6-digit OTP NEVER start with 0 ? what min value guarantees this ?
// Answer:- 

let min = 100000 //100000 → smallest 6-digit number
let max = 999999 //999999 → largest 6-digit number
let otp = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
console.log(otp)

// Math.floor(Math.random()*(max-min+1))+min
// Math.floor(Math.randon()*(max-min+1))+min
// Math.floor(math.random()*(max-min+1))+min
// math.floor(math.randon()*(max-min+1))+min

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q21 --> INTERVIEW QUESTION -> "Strings are immutable in JavaScript."
//        a) explain this statement in 2-3 lines
//        b) PROVE it with a small code example (change a string with a method,
//           then print the original and show it is unchanged)
//        c) so how do you "change" a string in real projects ? what must you do with
//           the value returned by the method ?
 
// a) explain this statement in 2-3 lines
// Answer:-1)Strings are immutable in JavaScript,which means once a string is created, its characters cannot be changed directly.
//         2)String methods don't modify the original string; they return a new string.
//         3)To "change" a string, we must store the returned value in a variable, often by assigning it back to the original variable.

// b) PROVE it with a small code example (change a string with a method,
//           then print the original and show it is unchanged)
// Answer:-
let small = "hello"
small.toUpperCase()
console.log(small)
// c)To "change" a string, we must store the returned value in a variable, often by assigning it back to the original variable.

let small_1 = "hello"
// Store the returned value back in the same variable
small_1 = small_1.toUpperCase()
console.log(small_1)


//Q22 --> INTERVIEW QUESTION -> write the difference between substring(), substr() and slice()
//        in the form of a table in comments (minimum 3 points).
//        Think about : what the 2nd argument means, end index included or not,
//        negative index support, and which one is deprecated.
//        Also write WHICH one you would use in a real project and why.
// Answer:- 
// Difference between substring(), substr() and slice()

// | Point              | substring()              | substr()                    | slice()                  |
// |--------------------|--------------------------|-----------------------------|--------------------------|
// | 1. 2nd argument    | End index                | Number of characters        | End index                |
// | 2. End included?   | No                       | Not applicable              | No                       |
// | 3. Negative index  | Not supported            | Supported (start)           | Supported                |
// | 4. Deprecated?     | No                       | YES - Deprecated            | No                       |

// Real project:
// I would use slice() because it is modern, supports negative indexes,
// and clearly defines the start and end positions.

// substring(start, end)
// substr(start, length)     // Deprecated
// slice(start, end)         // Recommended

//Q23 --> INTERVIEW QUESTION (CLASSIC) -> predict and explain :
//        console.log("5" + 5)
//        console.log("5" - 5)
//        HINT -> the + operator joins strings (concatenation), but the - operator
//        works on numbers only. revise datatype conversion from lecture 02 + 03.
//        then answer : why do the two lines give DIFFERENT types of output ?
// Answer:- 
console.log("5" + 5) // 55  The + operator with a string performs concatenation.
console.log("5" - 5) // 5 The - operator works with numbers, so JavaScript converts "5" from a string to a number:

//Q24 --> INTERVIEW QUESTION -> what is the difference between a PROPERTY and a METHOD ?
//        Answer with one string example of each, and explain the syntax difference
//        (brackets vs no brackets).
// Answer:- 

// Property                                           |	Method                           |
//----------------------------------------------------|--------------------------------------|
// A property gives information about an object/value.|	A method performs an action.     |
// It is used without ().                             |	It is called with ().            |
// Example: .length	                              |     Example: .toUpperCase()          |

// //let str = "JavaScript"
// // Property
// console.log(str.length)
// // Method
// console.log(str.toUpperCase())

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q25 --> BONUS -> RANDOM PASSWORD GENERATOR ->
//        From the string below, generate a random 4-character password.
//        Rules -> pick 4 RANDOM characters, join them and print like "a7Kq".
//        let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
//        HINT -> reuse the random alphabet logic from class 4 times
//        (4 separate picks stored in 4 variables), then join with template literal.
//        NOTE -> real passwords mix cases, this is just the beginner version :)
// Answer:- 
let chars = "abcdefghijklmnopqrstuvwxyz0123456789"

// Pick 4 random characters
let char1 = chars[Math.floor(Math.random() * chars.length)]
let char2 = chars[Math.floor(Math.random() * chars.length)]
let char3 = chars[Math.floor(Math.random() * chars.length)]
let char4 = chars[Math.floor(Math.random() * chars.length)]
// Join them using template literal
let password = `${char1}${char2}${char3}${char4}`
console.log(password)


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

//a) generate a username -> first 3 letters of firstName (lowercase)
//           + first 3 letters of lastName (lowercase) + a random 2-digit number (10 to 99)
//           Example -> "sidgad73"
// Answer:- 
let firstName = "Siddhant"
let lastName = "Gadakh"
// First 3 letters of firstName
let firstPart = firstName.slice(0, 3).toLowerCase()
// First 3 letters of lastName
let lastPart = lastName.slice(0, 3).toLowerCase()
// Random 2-digit number (10 to 99)
let randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10
// Generate username
let username_1 = `${firstPart}${lastPart}${randomNumber}`
console.log(username_1) // sidgad93

//b) generate the email -> username + "@gmail.com"

let email = `${username}@gmail.com`
console.log(username)
console.log(email)

//c) print a small ID CARD in EXACTLY this format (use template literals) :
//           Name    : Siddhant Gadakh
//           User ID : sidgad73
//           Email   : sidgad73@gmail.com
//        HINT -> slice() for the name parts, golden formula for the random number,
//        toLowerCase() for the username, template literal to join everything.
//Answer:-

// ID Card
let idCard = `Name    : ${firstName} ${lastName}
User ID : ${username}
Email   : ${email}`

console.log(idCard)


// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 04_ASSIGNMENT.js
// ============================================