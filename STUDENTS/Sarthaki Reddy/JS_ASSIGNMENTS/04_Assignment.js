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
 //      (double quotes, single quotes, backticks).
//       Print all 3 values AND their datatypes using typeof.
//       HINT -> all 3 should print "string". if not, find the mistake.
 let string1="Hello Good Morning"
 console.log(typeof(string1))

 let string2='Good afternoon'
 console.log(typeof(string2))

 let string3=`Good evening`
 console.log(typeof(string3))
 console.log(`Question2....`)
 
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
   console.log(typeof a, typeof b, typeof c, typeof d)
   //Output - String ,number,string,boolean
 console.log(`Question3....`)
//Q3 --> let city = "Aurangabad"
//       a) print the length of the string
//       b) print the FIRST character
//       c) print the LAST character WITHOUT counting manually
//       HINT -> last element equation -> index (length - 1)
let city = "Aurangabad"
console.log(city.length)
console.log(city[0])
console.log(city.length-1)

console.log(`Question4....`)
//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let spaces = "   "
//       console.log(spaces.length)
//       console.log("".length)
//       HINT -> are spaces characters too ? what is the length of an EMPTY string ?
let spaces = "   "
console.log(spaces.length)
console.log("".length)
//output - 3 0

console.log(`Question5....`)
//Q5 --> Given the string below, write code to print the character
//       at the 4th index and the 9th index. Then print the character
//       at index 100 and index -5 and observe what comes.
//       let lang = "JavaScript"
//       HINT ->
//  str[100] and str.charAt(100) do NOT give the same thing. find out the difference.
let lang = "JavaScript"
console.log(lang[4])
console.log(lang[9])

console.log(lang[100])
console.log(lang[-5])
console.log(lang.charAt[100])
// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

console.log(`Question6....`)
//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let name = "Siddhant"
//       console.log(`hello ${name}`)
//       console.log("hello ${name}")
//       console.log('hello ${name}')
//       HINT -> ${} placeholders work ONLY in one type of quotes. which one and why ?
 let name = "Siddhant"
 console.log(`hello ${name}`)
 console.log("hello ${name}")
 console.log('hello ${name}')
//${} placeholders work only inside backticks

console.log(`Question7....`)
//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let str = "JavaScript"
//       console.log(str.includes("script"))
//       console.log(str.includes("Script"))
//       console.log(str.includes("java"))
//       HINT -> includes(), startsWith(), endsWith() are ALL ______ sensitive methods.

let str = "JavaScript"
console.log(str.includes("script"))
console.log(str.includes("Script"))
console.log(str.includes("java"))
//output- 
/*
false
true
false
*/

console.log(`Question8....`)
//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let greeting = "hello"
//       greeting.toUpperCase()
//       console.log(greeting)
//       HINT -> STRINGS ARE ______ in javascript. what does toUpperCase() actually RETURN
//       and where does that returned value go in this code ?

let greeting = "hello"
greeting.toUpperCase()
console.log(greeting)
//Strings are immutable
//toUpperCase() returns a new string, and we must store that returned value if you want to keep it.

console.log(`Question9....`)
//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("HelloWorld".toUpperCase().length)
//       console.log("HelloWorld".toLowerCase().charAt(0))
//       console.log("HelloWorld".length.toLowerCase())   // <- this one ERRORS. why ?
//       HINT -> chaining works only when the output of the first method is a VALID INPUT
//       to the second method. what datatype does .length give ?
console.log("HelloWorld".toUpperCase().length)
console.log("HelloWorld".toLowerCase().charAt(0))    
//console.log("HelloWorld".length.toLowerCase()) 
// .length returns a number, and numbers don't have a .toLowerCase() method.

console.log(`Question10....`)
//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let str = "JavaScript"
//        console.log(str.substring(4, 10))
//        console.log(str.substr(4, 6))
//        console.log(str.slice(4))
//        HINT -> substring takes ENDING index (NOT included), substr takes NUMBER OF
//        characters, slice with one argument goes till the END of the string.
//        all 3 should print the same word here - are they ? why ?

       let strn = "JavaScript"
        console.log(strn.substring(4, 10))
        console.log(strn.substr(4, 6))
        console.log(strn.slice(4))
/*output-
Script
Script
Script
*/
        //All three methods start at index 4, which is "S".
        //and substring takes ENDING index (NOT included), substr takes NUMBER OF
//        characters, slice with one argument goes till the END of the string.


console.log(`Question11....`)
//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let fruit = "banana apple banana"
//        console.log(fruit.indexOf("a"))
//        console.log(fruit.lastIndexOf("a"))
//        console.log(fruit.indexOf("mango"))
//        HINT -> indexOf = FIRST instance, lastIndexOf = LAST instance,
//        and when the value is NOT found the answer is always ______ ?

 let fruit = "banana apple banana"
        console.log(fruit.indexOf("a"))
        console.log(fruit.lastIndexOf("a"))
        console.log(fruit.indexOf("mango"))
/*
output
1
18
-1
and when the value is NOT found the answer is always '-1'
*/

console.log(`Question12....`)
//Q12 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let messy = "   JS   "
//        console.log(messy.trim().length)
//        console.log(messy.trimStart().length)
//        console.log(messy.trimEnd().length)
//        console.log(messy.length)
//        HINT -> count the spaces carefully. trim removes start AND end,
//        trimStart removes ONLY start, trimEnd removes ONLY end.

let messy = "   JS   "
        console.log(messy.trim().length)
        console.log(messy.trimStart().length)
        console.log(messy.trimEnd().length)
        console.log(messy.length)
/* output
2
5
5
8
* */

console.log(`Question13....`)
//Q13 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log("a,b,c".split(",").length)
//        console.log("hello".split("").length)
//        console.log("hello world".split(" "))
//        HINT -> split("") with an EMPTY string splits at EVERY single character.

        console.log("a,b,c".split(",").length)
        console.log("hello".split("").length)
        console.log("hello world".split(" "))
/*
output
3
5
[ 'hello', 'world' ]
*/
// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q14 --> let username = "   SIDDHANT   "
//        Clean this username -> remove the extra spaces from both sides
//        and convert it to lowercase. Print the final result as "siddhant".
//        HINT -> method chaining -> trim() + toLowerCase()
console.log(`Question 14`)
let username = "   SIDDHANT   "
console.log(username.trim().toLowerCase())


//Q15 --> let sentence = " remove all the spaces from this sentence "
//        Print the sentence with EVERY space removed.
//        Then answer in comments : why does trim() NOT work here ?
//        HINT -> trim() only removes start/end spaces. which method removes ALL instances ?

console.log(`Question 15`)
let sentence = " remove all the spaces from this sentence "
console.log(sentence.replaceAll(" ", ""))
 //trim() only removes spaces from the beginning and end of a string.
// It does NOT remove spaces between words.

//Q16 --> let review = "this movie is bad and the acting is bad too"
//        a) replace only the FIRST "bad" with "good"
//        b) replace ALL "bad" with "good"
//        Print both results separately.
//        HINT -> replace() vs replaceAll() -> first instance vs ALL instances
console.log(`Question 16`)
let review = "this movie is bad and the acting is bad too"
console.log(review.replace("bad", "good"))
console.log(review.replaceAll("bad", "good"))

//Q17 --> let colors = "red,green,blue,yellow"
//        Split it into an array and print EACH color separately using its index.
//        Expected output (4 console.logs) -> red | green | blue | yellow
//        HINT -> split(",") gives an array -> arr[0], arr[1], arr[2] ...

console.log(`Question 17`)
let colors = "red,green,blue,yellow"
let array = colors.split(",")

console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

//Q18 --> Extract the word "Script" from "JavaScript" in THREE different ways
//        using substring(), substr() and slice(). Print all 3 results.
//        HINT -> JavaScript -> J(0)a(1)v(2)a(3)S(4)... "Script" starts at index 4
//        and is 6 characters long.
console.log(`Question 18`)
let st = "JavaScript"
console.log(str.substring(4, 10))
console.log(str.substr(4, 6))
console.log(str.slice(4))


//Q19 --> let line = "i am learning javascript and javascript is fun"
//        a) print the total number of characters (including spaces)
//        b) print the number of characters EXCLUDING spaces
//        HINT -> for (b) -> remove all spaces first, then use .length
console.log(`Question 19`)
let line = "i am learning javascript and javascript is fun"
console.log(line.length)
console.log(line.replaceAll(" ", "").length)


//Q20 --> REVISION (numbers + strings together) ->
//        Generate a random 6-digit OTP (100000 to 999999) using Math methods
//        and print it using a template literal like "Your OTP is : 483920".
//        HINT -> golden formula from lecture 03 -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> why can a 6-digit OTP NEVER start with 0 ? what min value guarantees this ?
console.log(`Question 20`)
let otp = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
console.log(`Your OTP is : ${otp}`)
//Because the minimum value is 100000 and the maximum is 999999

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q21 --> INTERVIEW QUESTION -> "Strings are immutable in JavaScript."
//        a) explain this statement in 2-3 lines
//        b) PROVE it with a small code example (change a string with a method,
//           then print the original and show it is unchanged)
//        c) so how do you "change" a string in real projects ? what must you do with
//           the value returned by the method ?
console.log(`Question 21`)
//a)-> In JavaScript, strings are immutable,
//     meaning their characters cannot be changed after the string is created. 
//     String methods such as toUpperCase() return a new string instead of modifying the original one.
//b)->
let greeting1 = "hello"
console.log(greeting1.toUpperCase())
console.log(greeting1)
//c-> we should strore the string value retrun by the method
let greeting2 = "hello"
greeting2=greeting2.toUpperCase()
console.log(greeting2)


//Q22 --> INTERVIEW QUESTION -> write the difference between substring(), substr() and slice()
//        in the form of a table in comments (minimum 3 points).
//        Think about : what the 2nd argument means, end index included or not,
//        negative index support, and which one is deprecated.
//        Also write WHICH one you would use in a real project and why.
console.log(`Question 22`)
//
/*
| Method | 2nd argument means | End index included? | Negative index? | Status |
|--------|--------------------|---------------------|-----------------|--------|
| `substr(start, count)` | NUMBER of characters | takes count instead | ❌ | deprecated ⚠️ |
| `substring(start, end)` | ENDING index | ❌ not included | ❌ | preferred |
| `slice(start, end)` | ENDING index | ❌ not included | ✅ | most used ⭐ |

 substr() is deprecated. For new projects, I would generally use slice() 
 because it supports negative indexes and uses clear start/end index arguments.

*/

//Q23 --> INTERVIEW QUESTION (CLASSIC) -> predict and explain :
//        console.log("5" + 5)
//        console.log("5" - 5)
//        HINT -> the + operator joins strings (concatenation), but the - operator
//        works on numbers only. revise datatype conversion from lecture 02 + 03.
//        then answer : why do the two lines give DIFFERENT types of output ?
console.log(`Question 23`)
console.log("5" + 5)
console.log("5" - 5)

//The + operator performs string concatenation .The number 5 is converted to the string "5"
//The - operator performs numeric subtraction.JavaScript converts the string "5" to the number 5


//Q24 --> INTERVIEW QUESTION -> what is the difference between a PROPERTY and a METHOD ?
//        Answer with one string example of each, and explain the syntax difference
//        (brackets vs no brackets).
console.log(`Question 24`)
//property- provides the infromation 
let newstr1 = "JavaScript"
console.log(newstr1.length)
//brackets are not required

//method-  perform the action

let newstr = "JavaScript"
console.log(newstr.toUpperCase())
//brackets are required to call
// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q25 --> BONUS -> RANDOM PASSWORD GENERATOR ->
//        From the string below, generate a random 4-character password.
//        Rules -> pick 4 RANDOM characters, join them and print like "a7Kq".
//        let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
//        HINT -> reuse the random alphabet logic from class 4 times
//        (4 separate picks stored in 4 variables), then join with template literal.
//        NOTE -> real passwords mix cases, this is just the beginner version :)
console.log(`Question 25`)

let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
let char1 = chars[Math.floor(Math.random() * chars.length)]
let char2 = chars[Math.floor(Math.random() * chars.length)]
let char3 = chars[Math.floor(Math.random() * chars.length)]
let char4 = chars[Math.floor(Math.random() * chars.length)]

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
console.log(`Question 26`)

let firstName = "Siddhant"
let lastName = "Gadakh"

// a) generate a username 
let firstPart = firstName.slice(0, 3)
let lastPart = lastName.slice(0, 3)
let randomNum = Math.floor(Math.random() * (99 - 10 + 1)) + 10
let username1 = `${firstPart}${lastPart}${randomNum}`.toLowerCase()

// b) generate the email -> username + "@gmail.com"
let email = `${username1}@gmail.com`;

// c) print a small ID CARD in EXACTLY this format (use template literals) 

console.log(`Name    : ${firstName} ${lastName}
User ID : ${username1}
Email   : ${email}`);

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 04_ASSIGNMENT.js
// ============================================

