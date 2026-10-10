// ============================================
// 04_ASSIGNMENT -> TOPIC : JS STRINGS (+ revision of basics, datatypes & numbers)
// BASED ON : LECTURE/04_JS_String.js  +  THEORY_NOTES/04_JS_String.md
//
// HOW TO RUN : open terminal -> node 04_ASSIGNMENT_JS_STRINGS.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : STRING BASICS -------------------

//Q1 --> Declare the SAME string "JavaScript" in all 3 ways
//       (double quotes, single quotes, backticks).
//       Print all 3 values AND their datatypes using typeof.
//       HINT -> all 3 should print "string". if not, find the mistake.

//Answer=
let str1="JavaScript"
let str2='JavaScript'
let str3=`JavaScript`
console.log(str1, typeof str1)
console.log(str2, typeof str2)
console.log(str3, typeof str3)

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = "123"
//       let b = 123
//       let c = "true"
//       let d = true
//       console.log(typeof a, typeof b, typeof c, typeof d)
//       HINT -> quotes CHANGE everything. revise lecture 02 (datatypes) + lecture 04.

//Answer= string, number, string, boolean
let a = "123"
let b = 123
let c = "true"
let d = true
console.log(typeof a, typeof b, typeof c, typeof d)

//Q3 --> let city = "Aurangabad"
//       a) print the length of the string
//       b) print the FIRST character
//       c) print the LAST character WITHOUT counting manually
//       HINT -> last element equation -> index (length - 1)

//Answer=
let city = "Aurangabad"
console.log(city.length)
console.log(city[0])
console.log(city[city.length-1])

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let spaces = "   "
//       console.log(spaces.length)
//       console.log("".length)
//       HINT -> are spaces characters too ? what is the length of an EMPTY string ?

//Answer=3, 0
let spaces = "   "
console.log(spaces.length)
console.log("".length)

//Q5 --> Given the string below, write code to print the character
//       at the 4th index and the 9th index. Then print the character
//       at index 100 and index -5 and observe what comes.
//       let lang = "JavaScript"
//       HINT -> str[100] and str.charAt(100) do NOT give the same thing. find out the difference.

//Answer= It gave "S" for 4th index and "t" for 9th index and undefinded for 100 and -5 index
let lang = "JavaScript"
console.log(lang[4])
console.log(lang[9])
console.log(lang[100])
console.log(lang[-5])

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let name = "Siddhant"
//       console.log(`hello ${name}`)
//       console.log("hello ${name}")
//       console.log('hello ${name}')
//       HINT -> ${} placeholders work ONLY in one type of quotes. which one and why ?

//Answwer= hello Siddhant, hello ${name}, hello ${name}
let name = "Siddhant"
console.log(`hello ${name}`)
console.log("hello ${name}")
console.log('hello ${name}')

// ${} placeholder work only in backtick because it is template litral also it is printed as plain text and does NOT insert the value.


//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let str = "JavaScript"
//       console.log(str.includes("script"))
//       console.log(str.includes("Script"))
//       console.log(str.includes("java"))
//       HINT -> includes(), startsWith(), endsWith() are ALL ______ sensitive methods.

//Answer= false, true, false
let str = "JavaScript"
console.log(str.includes("script"))
console.log(str.includes("Script"))
console.log(str.includes("java"))

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let greeting = "hello"
//       greeting.toUpperCase()
//       console.log(greeting)
//       HINT -> STRINGS ARE ______ in javascript. what does toUpperCase() actually RETURN
//       and where does that returned value go in this code ?

//Answer= hello because strigs are immutable in javascript and the new string value  not stoeed anywhere so it printed original value
let greeting = "hello"
greeting.toUpperCase()
console.log(greeting)

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("HelloWorld".toUpperCase().length)
//       console.log("HelloWorld".toLowerCase().charAt(0))
//       console.log("HelloWorld".length.toLowerCase())   // <- this one ERRORS. why ?
//       HINT -> chaining works only when the output of the first method is a VALID INPUT
//       to the second method. what datatype does .length give ?

//Answer=  10,h, last has number type and number is not a valid input
console.log("HelloWorld".toUpperCase().length)
console.log("HelloWorld".toLowerCase().charAt(0))



//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let str = "JavaScript"
//        console.log(str.substring(4, 10))
//        console.log(str.substr(4, 6))
//        console.log(str.slice(4))
//        HINT -> substring takes ENDING index (NOT included), substr takes NUMBER OF
//        characters, slice with one argument goes till the END of the string.
//        all 3 should print the same word here - are they ? why ?

//Answer= script, script, Script
let strs = "JavaScript"
console.log(strs.substring(4, 10))
console.log(strs.substr(4, 6))
console.log(strs.slice(4))



//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let fruit = "banana apple banana"
//        console.log(fruit.indexOf("a"))
//        console.log(fruit.lastIndexOf("a"))
//        console.log(fruit.indexOf("mango"))
//        HINT -> indexOf = FIRST instance, lastIndexOf = LAST instance,
//        and when the value is NOT found the answer is always ______ ?

//Answe= 1,18, -1
// mango is not found in the string so it will return -1 because if the value is NOT found -> it returns -1
let fruit = "banana apple banana"
console.log(fruit.indexOf("a"))
console.log(fruit.lastIndexOf("a"))
console.log(fruit.indexOf("mango"))

//Q12 --> Predict the output of the below code (write answer as comment, then run and verify)

//
//        let messy = "   JS   "
//        console.log(messy.trim().length)
//        console.log(messy.trimStart().length)
//        console.log(messy.trimEnd().length)
//        console.log(messy.length)
//        HINT -> count the spaces carefully. trim removes start AND end,
//        trimStart removes ONLY start, trimEnd removes ONLY end.

//Answer= 2, 5, 5, 8
let messy = "   JS   "
console.log(messy.trim().length)
console.log(messy.trimStart().length)
console.log(messy.trimEnd().length)
console.log(messy.length)   


//Q13 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log("a,b,c".split(",").length)
//        console.log("hello".split("").length)
//        console.log("hello world".split(" "))
//        HINT -> split("") with an EMPTY string splits at EVERY single character.

//Answer=  3, 5, [ 'hello', 'world' ]
console.log("a,b,c".split(",").length)
console.log("hello".split("").length)
console.log("hello world".split(" "))


// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q14 --> let username = "   SIDDHANT   "
//        Clean this username -> remove the extra spaces from both sides
//        and convert it to lowercase. Print the final result as "siddhant".
//        HINT -> method chaining -> trim() + toLowerCase()

//Answer=
let username = "   SIDDHANT   "
console.log(username.trim().toLowerCase())


//Q15 --> let sentence = " remove all the spaces from this sentence "
//        Print the sentence with EVERY space removed.
//        Then answer in comments : why does trim() NOT work here ?
//        HINT -> trim() only removes start/end spaces. which method removes ALL instances ?

//Answer = trim() only removes start/end spaces. replaceAll() removes ALL instances of spaces
let sentence = " remove all the spaces from this sentence "
console.log(sentence.trim())
console.log(sentence.replaceAll(" ", ""))

//Q16 --> let review = "this movie is bad and the acting is bad too
//        a) replace only the FIRST "bad" with "good"
//        b) replace ALL "bad" with "good"
//        Print both results separately.
//        HINT -> replace() vs replaceAll() -> first instance vs ALL instances
 let review = "this movie is bad and the acting is bad too"
 console.log(review.replace("bad","good"))
 console.log(review.replaceAll("bad","good"))

//Q17 --> let colors = "red,green,blue,yellow"
//        Split it into an array and print EACH color separately using its index.
//        Expected output (4 console.logs) -> red | green | blue | yellow
//        HINT -> split(",") gives an array -> arr[0], arr[1], arr[2] ...

let colors= "red,green,blue,yellow"
let separateColors=colors.split(",")
let color1=separateColors[0]
let color2=separateColors[1]
let color3=separateColors[2]
let color4=separateColors[3]
console.log(color1)
console.log(color2)
console.log(color3)
console.log(color4)


//Q18 --> Extract the word "Script" from "JavaScript" in THREE different ways
//        using substring(), substr() and slice(). Print all 3 results.
//        HINT -> JavaScript -> J(0)a(1)v(2)a(3)S(4)... "Script" starts at index 4
//        and is 6 characters long.

let word="JavaScript"
console.log(word.substring(4,10))
console.log(word.substr(4,10))
console.log(word.slice(4,10))

//Q19 --> let line = "i am learning javascript and javascript is fun"
//        a) print the total number of characters (including spaces)
//        b) print the number of characters EXCLUDING spaces
//        HINT -> for (b) -> remove all spaces first, then use .length

let line = "i am learning javascript and javascript is fun"
console.log(line.length)
console.log(line.replaceAll(" ","").length)

//Q20 --> REVISION (numbers + strings together) ->
//        Generate a random 6-digit OTP (100000 to 999999) using Math methods
//        and print it using a template literal like "Your OTP is : 483920".
//        HINT -> golden formula from lecture 03 -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> why can a 6-digit OTP NEVER start with 0 ? what min value guarantees this ?

//Answer
let otp= Math.floor(Math.random()*(999999-100000+1))+100000
console.log("Your OTP is " +otp)

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q21 --> INTERVIEW QUESTION -> "Strings are immutable in JavaScript."
//        a) explain this statement in 2-3 lines
//        b) PROVE it with a small code example (change a string with a method,
//           then print the original and show it is unchanged)
//        c) so how do you "change" a string in real projects ? what must you do with
//           the value returned by the method ?


//Answer
// a) Strings is immutable in javascript that means once it is created it cnnot be changed
//if we want to change the string we have to create a new string and assign it to the variable

//b)
let strings = "hello"
strings.toUpperCase()
console.log(strings) // it will print hello because the original string is unchanged

// c) to change a string in real projects we have to assign the value return by mentod to variable
let strss = "hello"
strss = strss.toUpperCase()
console.log(strss) 

//Q22 --> INTERVIEW QUESTION -> write the difference between substring(), substr() and slice()
//        in the form of a table in comments (minimum 3 points).
//        Think about : what the 2nd argument means, end index included or not,
//        negative index support, and which one is deprecated.
//        Also write WHICH one you would use in a real project and why.

//Answer= substring () takes starting and ending index
// substr also tales staring and ending index but we will not use as it is old
// slice() it is mostly used  method, it support start and end index and also support negative index

//Q23 --> INTERVIEW QUESTION (CLASSIC) -> predict and explain :
//        console.log("5" + 5)
//        console.log("5" - 5)
//        HINT -> the + operator joins strings (concatenation), but the - operator
//        works on numbers only. revise datatype conversion from lecture 02 + 03.
//        then answer : why do the two lines give DIFFERENT types of output ?

//Answer= 55,0
// first is string and second is number plus operator concatenated string and number
// minus operattor converted string to number and then minsed so resut is zero
console.log("5" + 5)
console.log("5" - 5)

//Q24 --> INTERVIEW QUESTION -> what is the difference between a PROPERTY and a METHOD ?
//        Answer with one string example of each, and explain the syntax difference
//        (brackets vs no brackets).

//Asnwer= Method is an action that is going to perform and property is some info which is attached to data
// methos is used with brackets () eg. toUppercase()
// property is used without brackets eg .length

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q25 --> BONUS -> RANDOM PASSWORD GENERATOR ->
//        From the string below, generate a random 4-character password.
//        Rules -> pick 4 RANDOM characters, join them and print like "a7Kq".
//        let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
//        HINT -> reuse the random alphabet logic from class 4 times
//        (4 separate picks stored in 4 variables), then join with template literal.
//        NOTE -> real passwords mix cases, this is just the beginner version :)

// Answer= 
let password= "abcdefghijklmnopqrstuvwxyz0123456789"
let split_pass= password.split()
let pass_1 = password[Math.floor(Math.random() * password.length)];
let pass_2 = password[Math.floor(Math.random() * password.length)];
let pass_3 = password[Math.floor(Math.random() * password.length)];
let pass_4 = password[Math.floor(Math.random() * password.length)];

console.log(`${pass_1}${pass_2}${pass_3}${pass_4}`)


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

//Answer= 
//a, b
let firstName = "Siddhant"
let lastName = "Gadakh"
let randomNum= Math.floor(Math.random()*(99-10+1))+10
let fName= firstName.toLowerCase()
let lName= lastName.toLowerCase()
let mail= "@gmail.com"
//let userId= console.log(`${firstName.substring(0,3)}${(lastName.substring(0,3))}${randomNum}${mail}`)

let userId=firstName.substring(0,3).toLowerCase()+lastName.substring(0,3).toLowerCase()+randomNum

console.log(userId+mail)

let idCard= ("Name : "+firstName+" "+lastName)
console.log(idCard)
let usersId= userId
console.log("User ID : "+usersId)
let emails= ("Email :"+ userId+mail)
console.log(emails)

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 04_ASSIGNMENT_JS_STRINGS.js
// ============================================

