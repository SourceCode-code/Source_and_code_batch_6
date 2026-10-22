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
let st1="JavaScript"
console.log(st1)
//console.log(typeOf(st1))
console.log(typeof(st1))//string

let st2='JavaScript'
console.log(st2)
console.log(typeof(st2))//string

let st3= `JavaScript`
console.log(st3)
console.log(typeof(st3))//string

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = "123"//string
//       let b = 123//number
//       let c = "true"//string
//       let d = true//boolean
//       console.log(typeof a, typeof b, typeof c, typeof d)
//       HINT -> quotes CHANGE everything. revise lecture 02 (datatypes) + lecture 04.

//Q3 --> let city = "Aurangabad"
//       a) print the length of the string
//       b) print the FIRST character
//       c) print the LAST character WITHOUT counting manually
//       HINT -> last element equation -> index (length - 1)
let city = "Aurangabad"
console.log(city.length)
console.log(city.charAt(0))
console.log(city.charAt(city.length - 1))

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
      let spaces = "   "
      console.log(spaces.length)
      console.log("".length)
//       HINT -> are spaces characters too ? what is the length of an EMPTY string ?yes spaces are also count as a charector lenght of empty string is 0

//Q5 --> Given the string below, write code to print the character
//       at the 4th index and the 9th index. Then print the character
//       at index 100 and index -5 and observe what comes.
      let lang = "JavaScript"
      console.log(lang.charAt(4))
    console.log(lang.charAt(9))
    console.log(lang.charAt(100))
    console.log(lang.charAt(-5))
    console.log(lang[100])//undefine
    console.log(lang.charAt(100))//print nothing

//       HINT -> str[100] and str.charAt(100) do NOT give the same thing. find out the difference.

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
      let name = "Siddhant"
      console.log(`hello ${name}`)//here the placeholder will work
      console.log("hello ${name}")
      console.log('hello ${name}')
//       HINT -> ${} placeholders work ONLY in one type of quotes. which one and why ?

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
      let str = "JavaScript"
      console.log(str.includes("script"))//false
      console.log(str.includes("Script"))//true
      console.log(str.includes("java"))//false
//       HINT -> includes(), startsWith(), endsWith() are ALL ______ sensitive methods.

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
      let greeting = "hello"
      greeting.toUpperCase()//HELLO
      console.log(greeting)//hello
//       HINT -> STRINGS ARE ______ in javascript. what does toUpperCase() actually RETURN
//       and where does that returned value go in this code ?

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
      console.log("HelloWorld".toUpperCase().length)///10
      console.log("HelloWorld".toLowerCase().charAt(0))//h
      //console.log("HelloWorld".length.toLowerCase())   // <- this one ERRORS. why ?//becaue the output of first method is not the valid input for toLowerCase()
//       HINT -> chaining works only when the output of the first method is a VALID INPUT
//       to the second method. what datatype does .length give ?

//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
       let str_ = "JavaScript"
       console.log(str_.substring(4, 10))//Script
       console.log(str_.substr(4, 6))
       console.log(str_.slice(4))//Sript
//        HINT -> substring takes ENDING index (NOT included), substr takes NUMBER OF
//        characters, slice with one argument goes till the END of the string.
//        all 3 should print the same word here - are they ? why ?-yes they will print same answer
//Yes, all three print `"Script"` because they start at index 4 and extract the remaining six characters using different methods.


//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
       let fruit = "banana apple banana"
       console.log(fruit.indexOf("a"))//1
       console.log(fruit.lastIndexOf("a"))//18
       console.log(fruit.indexOf("mango"))//-1
//        HINT -> indexOf = FIRST instance, lastIndexOf = LAST instance,
//        and when the value is NOT found the answer is always ______ ?=-1

//Q12 --> Predict the output of the below code (write answer as comment, then run and verify)
       let messy = "   JS   "
       console.log(messy.trim().length)//=JS
       console.log(messy.trimStart().length)//5
       console.log(messy.trimEnd().length)//5
       console.log(messy.length)//8
//        HINT -> count the spaces carefully. trim removes start AND end,
//        trimStart removes ONLY start, trimEnd removes ONLY end.

//Q13 --> Predict the output of the below code (write answer as comment, then run and verify)
       console.log("a,b,c".split(",").length)//3
       console.log("hello".split("").length)//5 
       console.log("hello world".split(" "))//['hello','world']
//        HINT -> split("") with an EMPTY string splits at EVERY single character.

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q14 --> let username = "   SIDDHANT   "
//        Clean this username -> remove the extra spaces from both sides
//        and convert it to lowercase. Print the final result as "siddhant".
//        HINT -> method chaining -> trim() + toLowerCase()
let username = "   SIDDHANT   "
console.log(username.trim().toLocaleLowerCase())

//Q15 --> let sentence = " remove all the spaces from this sentence "
//        Print the sentence with EVERY space removed.
//        Then answer in comments : why does trim() NOT work here ?
//        HINT -> trim() only removes start/end spaces. which method removes ALL instances ?we can use replaceAll
let sentence = " remove all the spaces from this sentence "
console.log(sentence.trim())
console.log(sentence.replaceAll(" ",""))//this will remove all the spaces
//Q16 --> let review = "this movie is bad and the acting is bad too"
//        a) replace only the FIRST "bad" with "good"
//        b) replace ALL "bad" with "good"
//        Print both results separately.
//        HINT -> replace() vs replaceAll() -> first instance vs ALL instances
let review = "this movie is bad and the acting is bad too"
console.log(review.replace('bad','good'))
console.log(review.replaceAll('bad','good'))


//Q17 --> let colors = "red,green,blue,yellow"
//        Split it into an array and print EACH color separately using its index.
//        Expected output (4 console.logs) -> red | green | blue | yellow
//        HINT -> split(",") gives an array -> arr[0], arr[1], arr[2] ...
          let colors = "red,green,blue,yellow"
          let arr=colors.split(",")//[ 'red', 'green', 'blue', 'yellow' ]
          console.log(arr[0])
           console.log(arr[1])
            console.log(arr[2])
             console.log(arr[3])

//Q18 --> Extract the word "Script" from "JavaScript" in THREE different ways
//        using substring(), substr() and slice(). Print all 3 results.
//        HINT -> JavaScript -> J(0)a(1)v(2)a(3)S(4)... "Script" starts at index 4
//        and is 6 characters long.
let s="JavaScript"
console.log(s.substring(4,10))//starting index,ending index
console.log(s.substr(4,9))
console.log(s.slice(4))

//Q19 --> let line = "i am learning javascript and javascript is fun"
//        a) print the total number of characters (including spaces)
//        b) print the number of characters EXCLUDING spaces
//        HINT -> for (b) -> remove all spaces first, then use .length
let line = "i am learning javascript and javascript is fun"
console.log(line.length)
let line1=line.replaceAll(" ","")
console.log(line1)
console.log(line1.length)

//Q20 --> REVISION (numbers + strings together) ->
//        Generate a random 6-digit OTP (100000 to 999999) using Math methods
//        and print it using a template literal like "Your OTP is : 483920".
//        HINT -> golden formula from lecture 03 -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> why can a 6-digit OTP NEVER start with 0 ? what min value guarantees this ?ans -it will never start with zero because the min value is 100000 ,and it it start from 0 it will give us only 5 digits value
let max=999999
let min=100000
let otp=Math.floor(Math.random() * (max - min + 1)) + min
console.log(otp)

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q21 --> INTERVIEW QUESTION -> "Strings are immutable in JavaScript."
//        a) explain this statement in 2-3 lines
//        b) PROVE it with a small code example (change a string with a method,
//           then print the original and show it is unchanged)
let strr = "hello";
str.toUpperCase();
console.log(strr); // hello
//        c) so how do you "change" a string in real projects ? what must you do with
//           the value returned by the method ?
let str2 = "hello";

str2 = str2.toUpperCase();

console.log(str2); // HELLO

//Q22 --> INTERVIEW QUESTION -> write the difference between substring(), substr() and slice()
//        in the form of a table in comments (minimum 3 points).
//        Think about : what the 2nd argument means, end index included or not,
//        negative index support, and which one is deprecated.
//        Also write WHICH one you would use in a real project and why.
// Q22 --> Difference between substring(), substr() and slice()

/*
| Feature             | substring()                | substr()                    | slice()                    |
|---------------------|----------------------------|-----------------------------|----------------------------|
| 1. 2nd argument     | Ending index               | Number of characters        | Ending index               |
| 2. End index        | Not included               | Not applicable              | Not included               |
| 3. Negative index   | Treated as 0               | Supported                   | Supported                  |
| 4. Deprecated?      | No                         | Yes                         | No                         |
| 5. Argument order   | start, end                 | start, length               | start, end                 |
*/

// Example

let st = "JavaScript";

console.log(st.substring(0, 4)); // Java
console.log(st.substr(0, 4));    // Java (deprecated)
console.log(st.slice(0, 4));     // Java

// Which one would I use in a real project?
// I would use slice() because it supports negative indexes,
// is not deprecated, and works with both positive and negative positions.

//Q23 --> INTERVIEW QUESTION (CLASSIC) -> predict and explain :
       console.log("5" + 5)//55
       console.log("5" - 5)//0
//        HINT -> the + operator joins strings (concatenation), but the - operator
//        works on numbers only. revise datatype conversion from lecture 02 + 03.
//        then answer : why do the two lines give DIFFERENT types of output ?
//Answer-The two lines produce different results because JavaScript handles the + and - operators differently. The + operator performs string concatenation when one operand is a string, whereas the - operator converts numeric strings into numbers and performs subtraction. Therefore, the first expression returns a string ("55"), while the second returns a number (0).

//Q24 --> INTERVIEW QUESTION -> what is the difference between a PROPERTY and a METHOD ?
//        Answer with one string example of each, and explain the syntax difference
//        (brackets vs no brackets).
// Q24 --> Difference between PROPERTY and METHOD

let strw = "JavaScript";

// PROPERTY --> A property gives information about a value.
// No parentheses () are required.

console.log(strw.length); // 10

// METHOD --> A method performs an action on a value.
// Parentheses () are used to call the method.

console.log(strw.toUpperCase()); // JAVASCRIPT
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
// 3. file runs without any error -> node 04_ASSIGNMENT_JS_STRINGS.js
// ============================================

