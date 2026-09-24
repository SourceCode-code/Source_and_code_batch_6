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
// Answer :
// let str1 = "JavaScript"
// let str2 = 'JavaScript'
// let str3 = `JavaScript`
// console.log(str1, typeof str1)
// console.log(str2, typeof str2)
// console.log(str3, typeof str3)

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = "123"
//       let b = 123
//       let c = "true"
//       let d = true
//       console.log(typeof a, typeof b, typeof c, typeof d)
//       HINT -> quotes CHANGE everything. revise lecture 02 (datatypes) + lecture 04.
// Answer :
// let a = "123"
// let b = 123
// let c = "true"
// let d = true
// console.log(typeof a, typeof b, typeof c, typeof d) // string number string boolean

//Q3 --> let city = "Aurangabad"
//       a) print the length of the string
//       b) print the FIRST character
//       c) print the LAST character WITHOUT counting manually
//       HINT -> last element equation -> index (length - 1)

// Answer :
// let city = "Aurangabad"
// console.log(city.length) // 10
// console.log(city[0]) // A
// console.log(city[city.length - 1]) // d

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let spaces = "   "
//       console.log(spaces.length)
//       console.log("".length)
//       HINT -> are spaces characters too ? what is the length of an EMPTY string ?
// Answer :
// let spaces = "   "
// console.log(spaces.length) // 3
// console.log("".length) // 0 

//Q5 --> Given the string below, write code to print the character
//       at the 4th index and the 9th index. Then print the character
//       at index 100 and index -5 and observe what comes.
//       let lang = "JavaScript"
//       HINT -> str[100] and str.charAt(100) do NOT give the same thing. find out the difference.
// Answer :
// let lang = "JavaScript"
// console.log(lang[4]) // S  
// console.log(lang[9]) // t
// console.log(lang[100]) // undefined
// console.log(lang[-5]) // undefined
// console.log(lang.charAt(100)) // '' (empty string)
// console.log(lang.charAt(-5)) // '' (empty string)


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let name = "Siddhant"
//       console.log(`hello ${name}`)
//       console.log("hello ${name}")
//       console.log('hello ${name}')
//       HINT -> ${} placeholders work ONLY in one type of quotes. which one and why ?
// Answer :
// let name = "rahulshinde"
// console.log(`hello ${name}`) // hello rahulshinde
// console.log("hello ${name}") // hello ${name}
// console.log('hello ${name}') // hello ${name}

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let str = "JavaScript"
//       console.log(str.includes("script"))
//       console.log(str.includes("Script"))
//       console.log(str.includes("java"))
//       HINT -> includes(), startsWith(), endsWith() are ALL ______ sensitive methods.
// Answer :
// let str = "JavaScript"
// console.log(str.includes("script")) // false
// console.log(str.includes("Script")) // true
// console.log(str.includes("java")) // false

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let greeting = "hello"
//       greeting.toUpperCase()
//       console.log(greeting)
//       HINT -> STRINGS ARE ______ in javascript. what does toUpperCase() actually RETURN
//       and where does that returned value go in this code ?
// Answer :
// let greeting = "hello"
// greeting.toUpperCase()
// console.log(greeting) // hello
// HINT -> STRINGS ARE IMMUTABLE in javascript. toUpperCase() returns a new string, but we didn't store it anywhere, so greeting remains unchanged.

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("HelloWorld".toUpperCase().length)
//       console.log("HelloWorld".toLowerCase().charAt(0))
//       console.log("HelloWorld".length.toLowerCase())   // <- this one ERRORS. why ?
//       HINT -> chaining works only when the output of the first method is a VALID INPUT
//       to the second method. what datatype does .length give ?
// Answer :
// console.log("HelloWorld".toUpperCase().length) // 10
// console.log("HelloWorld".toLowerCase().charAt(0)) // h
// console.log("HelloWorld".length.toLowerCase()) // ERROR: length is a number, and numbers do not have a toLowerCase() method.

//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let str = "JavaScript"
//        console.log(str.substring(4, 10))
//        console.log(str.substr(4, 6))
//        console.log(str.slice(4))
//        HINT -> substring takes ENDING index (NOT included), substr takes NUMBER OF
//        characters, slice with one argument goes till the END of the string.
//        all 3 should print the same word here - are they ? why ?
// Answer :
// let str = "JavaScript"
// console.log(str.substring(4, 10)) // Script    
// console.log(str.substr(4, 6)) // Script
// console.log(str.slice(4)) // Script
// All three methods print "Script" because they all extract the substring starting from index 4.
// substring(4, 10) extracts from index 4 to 9.
// substr(4, 6) extracts 6 characters starting from index 4.
// slice(4) extracts from index 4 to the end of the string.

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let fruit = "banana apple banana"
//        console.log(fruit.indexOf("a"))
//        console.log(fruit.lastIndexOf("a"))
//        console.log(fruit.indexOf("mango"))
//        HINT -> indexOf = FIRST instance, lastIndexOf = LAST instance,
//        and when the value is NOT found the answer is always ______ ?
// Answer :
// let fruit = "banana apple banana"
// console.log(fruit.indexOf("a")) // 1 
// console.log(fruit.lastIndexOf("a")) // 19 
// console.log(fruit.indexOf("mango")) // -1 (not found, returns -1)

//Q12 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let messy = "   JS   "
//        console.log(messy.trim().length)
//        console.log(messy.trimStart().length)
//        console.log(messy.trimEnd().length)
//        console.log(messy.length)
//        HINT -> count the spaces carefully. trim removes start AND end,
//        trimStart removes ONLY start, trimEnd removes ONLY end.
// Answer :
// let messy = "   JS   "
// console.log(messy.trim().length) // 2 (removes spaces from both ends) 
// console.log(messy.trimStart().length) // 5 (removes spaces from the start only)
// console.log(messy.trimEnd().length) // 5 (removes spaces from the end only)
// console.log(messy.length) // 8 (original string length, including spaces)


//Q13 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log("a,b,c".split(",").length)
//        console.log("hello".split("").length)
//        console.log("hello world".split(" "))
//        HINT -> split("") with an EMPTY string splits at EVERY single character.
// Answer :
// console.log("a,b,c".split(",").length) // 3 
// console.log("hello".split("").length) // 5 
// console.log("hello world".split(" ")) // ["hello", "world"] 

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q14 --> let username = "   SIDDHANT   "
//        Clean this username -> remove the extra spaces from both sides
//        and convert it to lowercase. Print the final result as "siddhant".
//        HINT -> method chaining -> trim() + toLowerCase()
// Answer :
// let username = "   SIDDHANT   "
// let cleanedUsername = username.trim().toLowerCase()
// console.log(cleanedUsername) // siddhant
//Q15 --> let sentence = " remove all the spaces from this sentence "
//        Print the sentence with EVERY space removed.
//        Then answer in comments : why does trim() NOT work here ?
//        HINT -> trim() only removes start/end spaces. which method removes ALL instances ?
// Answer :
// let sentence = " remove all the spaces from this sentence "
// let noSpaces = sentence.replaceAll(" ", "")
// console.log(noSpaces) // removeallthespacesfromthissentence

//Q16 --> let review = "this movie is bad and the acting is bad too"
//        a) replace only the FIRST "bad" with "good"
//        b) replace ALL "bad" with "good"
//        Print both results separately.
//        HINT -> replace() vs replaceAll() -> first instance vs ALL instances
// Answer :
// let review = "this movie is bad and the acting is bad too"
// let firstReplace = review.replace("bad", "good")
// let allReplace = review.replaceAll("bad", "good")
// console.log(firstReplace) // this movie is good and the acting is bad too
// console.log(allReplace) // this movie is good and the acting is good too

//Q17 --> let colors = "red,green,blue,yellow"
//        Split it into an array and print EACH color separately using its index.
//        Expected output (4 console.logs) -> red | green | blue | yellow
//        HINT -> split(",") gives an array -> arr[0], arr[1], arr[2] ...
// Answer :
// let colors = "red,green,blue,yellow"
// let colorArray = colors.split(",")
// console.log(colorArray[0]) // red
// console.log(colorArray[1]) // green
// console.log(colorArray[2]) // blue
// console.log(colorArray[3]) // yellow

//Q18 --> Extract the word "Script" from "JavaScript" in THREE different ways
//        using substring(), substr() and slice(). Print all 3 results.
//        HINT -> JavaScript -> J(0)a(1)v(2)a(3)S(4)... "Script" starts at index 4
//        and is 6 characters long.
// Answer :
// let str = "JavaScript"
// let subStr = str.substring(4, 10) 
// let substrStr = str.substr(4, 6) 
// let sliceStr = str.slice(4, 10) 
// console.log(subStr) // Script
// console.log(substrStr) // Script
// console.log(sliceStr) // Script

//Q19 --> let line = "i am learning javascript and javascript is fun"
//        a) print the total number of characters (including spaces)
//        b) print the number of characters EXCLUDING spaces
//        HINT -> for (b) -> remove all spaces first, then use .length
// Answer :
// let line = "i am learning javascript and javascript is fun"
// console.log(line.length) // 47
// let noSpaceLine = line.replaceAll(" ", "")
// console.log(noSpaceLine.length) // 39 

//Q20 --> REVISION (numbers + strings together) ->
//        Generate a random 6-digit OTP (100000 to 999999) using Math methods
//        and print it using a template literal like "Your OTP is : 483920".
//        HINT -> golden formula from lecture 03 -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> why can a 6-digit OTP NEVER start with 0 ? what min value guarantees this ?
// Answer :
// let min = 100000
// let max = 999999
// let otp = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(`Your OTP is : ${otp}`) 

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q21 --> INTERVIEW QUESTION -> "Strings are immutable in JavaScript."
//        a) explain this statement in 2-3 lines
//        b) PROVE it with a small code example (change a string with a method,
//           then print the original and show it is unchanged)
//        c) so how do you "change" a string in real projects ? what must you do with
//           the value returned by the method ?
// Answer :
// a) Strings are immutable in JavaScript means that once a string is created, it cannot be changed. Any operation that seems to modify a string actually creates a new string instead of altering the original one.
// b) Example:
// let originalString = "Rahul, Shinde";
// let modifiedString = originalString.replace("Rahul", "rjs");
// console.log(originalString); // "Rahul, Shinde"
// console.log(modifiedString); // "rjs, Shinde"
// c) To "change" a string in real projects, 
// you must assign the value returned by the string method to a new variable or overwrite the original variable. 
// This way, you can work with the modified string while keeping the original intact if needed.

//Q22 --> INTERVIEW QUESTION -> write the difference between substring(), substr() and slice()
//        in the form of a table in comments (minimum 3 points).
//        Think about : what the 2nd argument means, end index included or not,
//        negative index support, and which one is deprecated.
//        Also write WHICH one you would use in a real project and why.
// Answer :
// substring() -> The 2nd argument is the end position. 
// It does not include the end position and does not support negative indexes. 
// It is not deprecated.
//
// substr() -> The 2nd argument means the number of characters. 
// It supports negative indexes and is deprecated.
//
// slice() -> The 2nd argument is the end position. 
// It does not include the end position and supports negative indexes. 
// It is not deprecated.

//Q23 --> INTERVIEW QUESTION (CLASSIC) -> predict and explain :
//        console.log("5" + 5)
//        console.log("5" - 5)
//        HINT -> the + operator joins strings (concatenation), but the - operator
//        works on numbers only. revise datatype conversion from lecture 02 + 03.
//        then answer : why do the two lines give DIFFERENT types of output ?
// Answer :
// console.log("5" + 5) // "55" (string concatenation)
// console.log("5" - 5) // 0 (number subtraction) 

//Q24 --> INTERVIEW QUESTION -> what is the difference between a PROPERTY and a METHOD ?
//        Answer with one string example of each, and explain the syntax difference
//        (brackets vs no brackets).
// Answer :
// A property is a characteristic of an object that holds a value, 
// while a method is a function associated with an object that performs an action. 
// Example of a property: "hello".length (returns 5, no brackets)
// Example of a method: "hello".toUpperCase() (returns "HELLO", requires brackets to invoke the function)

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q25 --> BONUS -> RANDOM PASSWORD GENERATOR ->
//        From the string below, generate a random 4-character password.
//        Rules -> pick 4 RANDOM characters, join them and print like "a7Kq".
//        let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
//        HINT -> reuse the random alphabet logic from class 4 times
//        (4 separate picks stored in 4 variables), then join with template literal.
//        NOTE -> real passwords mix cases, this is just the beginner version :)
// Answer :
// let chars = "abcdefghijklmnopqrstuvwxyz0123456789"

// let randomchar1 = Math.floor(Math.random() * chars.length);
// let randomchar2 = Math.floor(Math.random() * chars.length);
// let randomchar3 = Math.floor(Math.random() * chars.length);
// let randomchar4 = Math.floor(Math.random() * chars.length);

// let password = `${chars[randomchar1]}${chars[randomchar2]}${chars[randomchar3]}${chars[randomchar4]}`
// console.log(`Your random password is : ${password}`)


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
// Answer :
// let firstName = "rahul"
// let lastName = "shinde"
// let username = firstName.slice(0, 3).toLowerCase() + lastName.slice(0, 3).toLowerCase() + (Math.floor(Math.random() * 90) + 10)
// let email = `${ username }@gmail.com`
// console.log(`Name    : ${firstName} ${lastName}`)
// console.log(`User ID : ${username}`)
// console.log(`Email   : ${email}`)   
// Name    : rahul shinde
// User ID : rahshi49
// Email   : rahshi49@gmail.com

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 04_ASSIGNMENT.js
// ============================================

