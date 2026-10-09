//...// ============================================
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
let str1 = "JavaScript"
let str2 = 'JavaScript'
let str3 = `JavaScript`
console.log(str1, typeof str1)//JavaScript string
console.log(str2, typeof str2)//JavaScript string
console.log(str3, typeof str3)//JavaScript string


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
console.log(typeof a, typeof b, typeof c, typeof d)//string number string boolean


// Q3 --> let city = "Aurangabad"
//       a) print the length of the string
//       b) print the FIRST character
//       c) print the LAST character WITHOUT counting manually
//       HINT -> last element equation -> index (length - 1)

let city = "Aurangabad"
console.log(city.length) //10
let firstcharacter = city[0]
console.log(firstcharacter)//A
let lastCharacter = city[city.length - 1]
console.log(lastCharacter)//d


//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let spaces = "   "
//       console.log(spaces.length)
//       console.log("".length)
//       HINT -> are spaces characters too ? what is the length of an EMPTY string ?

let spaces = "   "
console.log(spaces.length)//3
console.log("".length) //0


//Q5 --> Given the string below, write code to print the character
//       at the 4th index and the 9th index. Then print the character
//       at index 100 and index -5 and observe what comes.
//       let lang = "JavaScript"
//       HINT -> str[100] and str.charAt(100) do NOT give the same thing. find out the difference.
let lang = "JavaScript"
console.log(lang[4])//S
console.log(lang[9])//t
console.log(lang[100])//undefined
console.log(lang[-5])//undefined


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let name = "Siddhant"
//       console.log(`hello ${name}`)
//       console.log("hello ${name}")
//       console.log('hello ${name}')
//       HINT -> ${} placeholders work ONLY in one type of quotes. which one and why ?

let name = "Siddhant"
console.log(`hello ${name}`)  //hello Siddhant
console.log("hello ${name}")
console.log('hello ${name}')
/*
 reason -> ${} placeholders work ONLY in backticks. because backticks are used for template literals
          which allow for string interpolation, while single and double quotes do not support this 
          feature and treat the content as a plain string.
 */

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let str = "JavaScript"
//       console.log(str.includes("script"))
//       console.log(str.includes("Script"))
//       console.log(str.includes("java"))
//       HINT -> includes(), startsWith(), endsWith() are ALL ______ sensitive methods.

let str = "JavaScript"
console.log(str.includes("script")) //false
console.log(str.includes("Script")) //true
console.log(str.includes("java")) //false


//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let greeting = "hello"
//       greeting.toUpperCase()
//       console.log(greeting)
//       HINT -> STRINGS ARE ______ in javascript. what does toUpperCase() actually RETURN
//       and where does that returned value go in this code ?

let greeting = "hello"
greeting.toUpperCase()
//strings are immutable in javascript.
//  toUpperCase() returns a new string but does not change the original string.
console.log(greeting)  //hello

/*
//to actually change the value of greeting, we need to assign the returned value back to greeting
greeting = greeting.toUpperCase()
console.log(greeting.toUpperCase())//HELLO
*/


//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("HelloWorld".toUpperCase().length)
//       console.log("HelloWorld".toLowerCase().charAt(0))
//       console.log("HelloWorld".length.toLowerCase())   // <- this one ERRORS. why ?
//       HINT -> chaining works only when the output of the first method is a VALID INPUT
//       to the second method. what datatype does .length give ?

console.log("HelloWorld".toUpperCase().length) //10
console.log("HelloWorld".toLowerCase().charAt(0)) //h
//console.log("HelloWorld".length.toLowerCase())   // <- this one ERRORS. why ?
//because .length returns a number, and numbers do not have a toLowerCase() method.



//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let str = "JavaScript"
//        console.log(str.substring(4, 10))
//        console.log(str.substr(4, 6))
//        console.log(str.slice(4))
//        HINT -> substring takes ENDING index (NOT included), substr takes NUMBER OF
//        characters, slice with one argument goes till the END of the string.
//        all 3 should print the same word here - are they ? why ?

let str_1 = "JavaScript"
console.log(str_1.substring(4, 10))//Script
console.log(str_1.substr(4, 6))//Script
console.log(str_1.slice(4))//Script



//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let fruit = "banana apple banana"
//        console.log(fruit.indexOf("a"))
//        console.log(fruit.lastIndexOf("a"))
//        console.log(fruit.indexOf("mango"))
//        HINT -> indexOf = FIRST instance, lastIndexOf = LAST instance,
//        and when the value is NOT found the answer is always ______ ?


let fruit = "banana apple banana"
console.log(fruit.indexOf("a")) //1
console.log(fruit.lastIndexOf("a")) //19
console.log(fruit.indexOf("mango")) // -1 (not found)



//Q12 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let messy = "   JS   "
//        console.log(messy.trim().length)
//        console.log(messy.trimStart().length)
//        console.log(messy.trimEnd().length)
//        console.log(messy.length)
//        HINT -> count the spaces carefully. trim removes start AND end,
//        trimStart removes ONLY start, trimEnd removes ONLY end.


let messy = "   JS   "
console.log(messy.trim().length)//2
console.log(messy.trimStart().length) //5
console.log(messy.trimEnd().length) //5
console.log(messy.length) //8



//Q13 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log("a,b,c".split(",").length)
//        console.log("hello".split("").length)
//        console.log("hello world".split(" "))
//        HINT -> split("") with an EMPTY string splits at EVERY single character.

console.log("a,b,c".split(",").length)//3
console.log("hello".split("").length)//5
console.log("hello world".split(" "))//[ 'hello', 'world' ]


// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q14 --> let username = "   SIDDHANT   "
//        Clean this username -> remove the extra spaces from both sides
//        and convert it to lowercase. Print the final result as "siddhant".
//        HINT -> method chaining -> trim() + toLowerCase()
let username = "   SIDDHANT   "
let new_username = username.trim().toLowerCase()
console.log(new_username) //siddhant


//Q15 --> let sentence = " remove all the spaces from this sentence "
//        Print the sentence with EVERY space removed.
//        Then answer in comments : why does trim() NOT work here ?
//        HINT -> trim() only removes start/end spaces. which method removes ALL instances ?

let sentence = " remove all the spaces from this sentence "

console.log(sentence.split(" ").join("")) //removeallthespacesfromthissentence
console.log(sentence.replaceAll(" ", "")) //removeallthespacesfromthissentence



//Q16 --> let review = "this movie is bad and the acting is bad too"
//        a) replace only the FIRST "bad" with "good"
//        b) replace ALL "bad" with "good"
//        Print both results separately.
//        HINT -> replace() vs replaceAll() -> first instance vs ALL instances
let review = "this movie is bad and the acting is bad too"
console.log(review.replace("bad", "good")) //this movie is good and the acting is bad too
console.log(review.replaceAll("bad", "good"))//this movie is good and the acting is good too


//Q17 --> let colors = "red,green,blue,yellow"
//        Split it into an array and print EACH color separately using its index.
//        Expected output (4 console.logs) -> red | green | blue | yellow
//        HINT -> split(",") gives an array -> arr[0], arr[1], arr[2] ...
let colors = "red,green,blue,yellow"
let colorArray = colors.split(",")

console.log(colorArray) //[ 'red', 'green', 'blue', 'yellow' ]
console.log(colorArray[0])//red
console.log(colorArray[1])//green
console.log(colorArray[2])//blue
console.log(colorArray[3])//yellow

//Q18 --> Extract the word "Script" from "JavaScript" in THREE different ways
//        using substring(), substr() and slice(). Print all 3 results.
//        HINT -> JavaScript -> J(0)a(1)v(2)a(3)S(4)... "Script" starts at index 4
//        and is 6 characters long.

let str_2 = "JavaScript"
console.log(str_2.substring(4, 10))//Script
console.log(str_2.substr(4, 6))//Script
console.log(str_2.slice(4))//Script


//Q19 --> let line = "i am learning javascript and javascript is fun"
//        a) print the total number of characters (including spaces)
//        b) print the number of characters EXCLUDING spaces
//        HINT -> for (b) -> remove all spaces first, then use .length

let line = "i am learning javascript and javascript is fun"
console.log(line.length) // print total number of characters --46
console.log(line.replaceAll(" ", "").length)// print number of characters excluding spaces--39


//Q20 --> REVISION (numbers + strings together) ->
//        Generate a random 6-digit OTP (100000 to 999999) using Math methods
//        and print it using a template literal like "Your OTP is : 483920".
//        HINT -> golden formula from lecture 03 -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> why can a 6-digit OTP NEVER start with 0 ? what min value guarantees this ?

let min = 100000
let max = 999999
let otp = Math.floor(Math.random() * (max - min + 1)) + min
console.log(`Your OTP is : ${otp}`) //Your OTP is : 487786


// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q21 --> INTERVIEW QUESTION -> "Strings are immutable in JavaScript."
//        a) explain this statement in 2-3 lines
//        b) PROVE it with a small code example (change a string with a method,
//           then print the original and show it is unchanged)
//        c) so how do you "change" a string in real projects ? what must you do with
//           the value returned by the method ?

// a) ) explain this statement in 2-3 lines--
//    Strings are immutable in JavaScript, meaning that once a string is created,
//    it cannot be changed or modified. Any operation that appears to modify a string actually creates 
//    a new string instead of altering the original one.

//  b) PROVE it with a small code example (change a string with a method,
//           then print the original and show it is unchanged)
//example:
let orignalString = "Hellow"
let newString = orignalString.toLowerCase()
let newString_1 = orignalString.toUpperCase()

console.log(orignalString) //Hellow
console.log(newString) //hellow
console.log(newString_1) //HELLOW

console.log(orignalString)
/*Hellow ----here the orignal string is unchanged because the method
 toLowerCase() and toUpperCase() return a new string and do not modify
  the original string.*/

//  c) so how do you "change" a string in real projects ? what must you do with the value
// returned by the method ?

//    here to "change" a string in real projects, you must assign the value returned by the method
// to a new variable or reassign it to the original variable. This way, you can work with the modified
// version of the string while keeping the original string intact.


//Q22 --> INTERVIEW QUESTION -> write the difference between substring(), substr() and slice()
//        in the form of a table in comments (minimum 3 points).
//        Think about : what the 2nd argument means, end index included or not,
//        negative index support, and which one is deprecated.
//        Also write WHICH one you would use in a real project and why.
/*
                        substring()                         substr()                             slice()

Feature              substring(start, end)        substr(start,numberOfChars)           slice(start, end)

Second Parameter     end index (exclusive)        number of characters to extract       end index (exclusive)

If start > end       Swaps the arguments          second argument is length             Returns an empty string ("")
                     automatically
Negative Values:     Treats them as 0             start counts backwards; length        Counts backwards from
                                                  becomes 0                             the end of the string



 */
//Q23 --> INTERVIEW QUESTION (CLASSIC) -> predict and explain :
//        console.log("5" + 5)
//        console.log("5" - 5)
//        HINT -> the + operator joins strings (concatenation), but the - operator
//        works on numbers only. revise datatype conversion from lecture 02 + 03.
//        then answer : why do the two lines give DIFFERENT types of output ?

     console.log("5" + 5) //55
       console.log("5" - 5) //0

       /*here the first line gives "55" because the + operator is used for string concatenation,
       so the number 5 is converted to a string and concatenated with the string "5".
       The second line gives 0 because the - operator converts both operands to numbers and performs
       subtraction.*/


//Q24 --> INTERVIEW QUESTION -> what is the difference between a PROPERTY and a METHOD ?
//        Answer with one string example of each, and explain the syntax difference
//        (brackets vs no brackets).
/*
property -> a property is a characteristic or attribute of an object that holds a value.
          example: length property of a string
method -> a method is a function that is associated with an object and can be called to perform
          an action or operation on that object.
          example: toUpperCase() method of a string
syntax difference -> properties are accessed without parentheses, while methods are called with parentheses.
  another example:
let str = "Hello"
console.log(str.length) //property, no parentheses
console.log(str.toUpperCase()) //method, with parentheses

*/
// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q25 --> BONUS -> RANDOM PASSWORD GENERATOR ->
//        From the string below, generate a random 4-character password.
//        Rules -> pick 4 RANDOM characters, join them and print like "a7Kq".
//        let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
//        HINT -> reuse the random alphabet logic from class 4 times
//        (4 separate picks stored in 4 variables), then join with template literal.
//        NOTE -> real passwords mix cases, this is just the beginner version :)

      let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
      let randomIndex1 = Math.floor(Math.random() * chars.length)
      let randomIndex2 = Math.floor(Math.random() * chars.length)
      let randomIndex3 = Math.floor(Math.random() * chars.length)
      let randomIndex4 = Math.floor(Math.random() * chars.length)
  
     
      console.log(`Your random password is : ${chars[randomIndex1]}${chars[randomIndex2]}${chars[randomIndex3]}${chars[randomIndex4]}`)
//Your random password is : a31u
//Your random password is : r4et


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

    let firstName = "Siddhant"
       let lastName = "Gadakh"
       let max_1 = 99
       let min_1  = 10
       let randomNumber = Math.floor(Math.random() * (max_1 - min_1 + 1)) + min_1
       console.log(randomNumber)

       let username_1= firstName.slice(0, 3).toLowerCase() + lastName.slice(0, 3).toLowerCase() + randomNumber
       let email =` ${username_1}@gmail.com`

       console.log(`Name    : ${firstName} ${lastName}`)   //Name    : Siddhant Gadakh
       console.log(`User ID : ${username_1}`)              //User ID : sidgad79
       console.log(`Email   : ${email}`)                   //


       ///////////////OR/////////////////
              let username_2= firstName.substring(0, 3).toLowerCase() + lastName.substring(0, 3).toLowerCase() + randomNumber
              console.log(`User ID : ${username_2}`)//  Email   :  sidgad79@gmail.com


// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 04_ASSIGNMENT.js
// ============================================

