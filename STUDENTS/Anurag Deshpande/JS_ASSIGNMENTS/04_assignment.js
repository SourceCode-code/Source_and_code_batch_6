//Q1 --> Declare the SAME string "JavaScript" in all 3 ways
console.log("Q1")
//       (double quotes, single quotes, backticks).
//       Print all 3 values AND their datatypes using typeof.
//       HINT -> all 3 should print "string". if not, find the mistake.
let abc = "JavaScript"
let bcd = 'JavaScript'
let cde = `JavaScript`

console.log("=========================================")
//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q2")
let a = "123"
let b = 123
let c = "true"
let d = true
console.log(typeof a, typeof b, typeof c, typeof d)

console.log("====================================")
//Q3 --> let city = "Aurangabad"
console.log("Q3")

let city = "Aurangabad"
//       a) print the length of the string
console.log(city.length)
//       b) print the FIRST character
console.log(city.charAt(0))
//       c) print the LAST character WITHOUT counting manually
console.log((city.length -1))
//       HINT -> last element equation -> index (length - 1)

console.log("============================================")
//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q4")
let spaces = "   "
console.log(spaces.length) //OUTPUT: 3
console.log("".length) //OUTPUT: 0 
//       HINT -> are spaces characters too ? what is the length of an EMPTY string ?

console.log("===============================================")
//Q5 --> Given the string below, write code to print the character
console.log("Q5")
//       at the 4th index and the 9th index. Then print the character
//       at index 100 and index -5 and observe what comes.
let lang = "JavaScript"
console.log(lang.charAt(4)) //OUTPUT : S
console.log(lang.charAt(9)) //OUTPUT : t

console.log(lang.charAt[4]) //OUTPUT : undefined 

console.log("=======================================================")
//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q7")
let str = "JavaScript"
console.log(str.includes("script")) //OUTPUT : false
console.log(str.includes("Script")) //OUTPUT : true
console.log(str.includes("java")) //OUTPUT : false


console.log("==========================================================")

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q8")

let greeting = "hello"
greeting.toUpperCase()
console.log(greeting)
//       HINT -> STRINGS ARE ______ in javascript. what does toUpperCase() actually RETURN
//       and where does that returned value go in this code ?
// strings ae immutable in the JavaScript 

console.log("===========================================================")
//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q9")
console.log("HelloWorld".toUpperCase().length)
console.log("HelloWorld".toLowerCase().charAt(0))
//console.log("HelloWorld".length.toLowerCase())   // <- this one ERRORS. why ?
// .lenght .toLowerCase is not a function 

//       HINT -> chaining works only when the output of the first method is a VALID INPUT
//       to the second method. what datatype does .length give ?
console.log("======================================")

//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q10")
let str1 = "JavaScript"
console.log(str1.substring(4, 10)) //script
console.log(str1.substr(4, 6)) //stript
console.log(str1.slice(4)) //script

// substring(4, 10) -> starts at index 4 and stops BEFORE index 10.
// substr(4, 6) -> starts at index 4 and takes 6 characters.
// slice(4) -> starts at index 4 and goes until the END.

console.log("=====================================")
//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q11")
let fruit = "banana apple banana"
console.log(fruit.indexOf("a")) //1
console.log(fruit.lastIndexOf("a")) //18
console.log(fruit.indexOf("mango")) //-1
//        HINT -> indexOf = FIRST instance, lastIndexOf = LAST instance,
//        and when the value is NOT found the answer is always ______ ?

console.log("===========================================")

//Q12 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q12")
let messy = "   JS   "
console.log(messy.trim().length) //2
console.log(messy.trimStart().length) //5
console.log(messy.trimEnd().length) //5
console.log(messy.length) //8

console.log("=================================================")

//Q13 --> Predict the output of the below code (write answer as comment, then run and verify)
console.log("Q13")
console.log("a,b,c".split(",").length) //3
console.log("hello".split("").length) //5
console.log("hello world".split(" ")) //[ 'hello', 'world' ]
//        HINT -> split("") with an EMPTY string splits at EVERY single character.

console.log("==========================================")
console.log("section C")
console.log("==========================================")

//Q14 --> let username = "   SIDDHANT   "
console.log("Q14")
let username = "   SIDDHANT   "
console.log(username.trim().toLowerCase());
//        Clean this username -> remove the extra spaces from both sides
//        and convert it to lowercase. Print the final result as "siddhant".
//        HINT -> method chaining -> trim() + toLowerCase()

console.log("==========================================")

//Q15 --> let sentence = " remove all the spaces from this sentence "
console.log("Q15")
let sentence = " remove all the spaces from this sentence "
console.log(sentence.replaceAll(" ",""));
//        Print the sentence with EVERY space removed.
//        Then answer in comments : why does trim() NOT work here ?
//        HINT -> trim() only removes start/end spaces. which method removes ALL instances ?

console.log("==========================================")
//Q16 --> let review = "this movie is bad and the acting is bad too"
console.log("Q16")
let review = "this movie is bad and the acting is bad too"
//        a) replace only the FIRST "bad" with "good"
console.log(review.replace("bad", "good")) //this movie is good and the acting is bad too
//        b) replace ALL "bad" with "good"
console.log(review.replaceAll("bad", "good")) //this movie is good and the acting is good too
//        Print both results separately.
//        HINT -> replace() vs replaceAll() -> first instance vs ALL instances

console.log("===============================================")
//Q17 --> let colors = "red,green,blue,yellow"
console.log("Q17")
let colors = "red,green,blue,yellow"
//        Split it into an array and print EACH color separately using its index.
let colorArray = colors.split(",")
console.log(colorArray)
console.log(colorArray[0]) //red
console.log(colorArray[1]) //green
console.log(colorArray[2]) //blue
console.log(colorArray[3]) //yellow
//        Expected output (4 console.logs) -> red | green | blue | yellow
//        HINT -> split(",") gives an array -> arr[0], arr[1], arr[2] ...
// note arrey should be in [] not in () if used we get = TypeError: colorArray is not a function

console.log("===========================================")

//Q18 --> Extract the word "Script" from "JavaScript" in THREE different ways
console.log("Q18")
//        using substring(), substr() and slice(). Print all 3 results.
//        HINT -> JavaScript -> J(0)a(1)v(2)a(3)S(4)... "Script" starts at index 4
//        and is 6 characters long.
let str4 = "JavaScript"
console.log(str4.substring(4, 10)) //script
console.log(str4.substr(4, 6)) //stript
console.log(str4.slice(4)) //script

console.log("===================================================")
//Q19 --> let line = "i am learning javascript and javascript is fun"
console.log("Q19")
let line = "i am learning javascript and javascript is fun"
//        a) print the total number of characters (including spaces)
console.log(line.length) //46
//        b) print the number of characters EXCLUDING spaces
console.log(line.replaceAll(" ", "").length) //39
//        HINT -> for (b) -> remove all spaces first, then use .length

console.log("======================================================")

//Q20 --> REVISION (numbers + strings together) ->
console.log("Q20")
let max = 999999
let min = 100000

let otp = Math.floor(Math.random() * (max - min + 1)) + min
console.log("your OTP is : ", otp )
//        Generate a random 6-digit OTP (100000 to 999999) using Math methods
//        and print it using a template literal like "Your OTP is : 483920".
//        HINT -> golden formula from lecture 03 -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> why can a 6-digit OTP NEVER start with 0 ? what min value guarantees this ?

console.log("===========================================")

//Q21 --> INTERVIEW QUESTION -> "Strings are immutable in JavaScript."
console.log("Q21")
//        a) explain this statement in 2-3 lines
/**
 * strings are immutable, which means the original string cannot change directly.
 * string methods return the new sting rather to change the original string.
 */
//        b) PROVE it with a small code example (change a string with a method,
//           then print the original and show it is unchanged)
let prove = "hello"
let prove1 = prove.toUpperCase()
console.log(prove) //hello
console.log(prove1) //HELLO

//        c) so how do you "change" a string in real projects ? what must you do with
let prove2 = prove.toUpperCase()
console.log(prove2) //HELLO

//           the value returned by the method ?
console.log("=============================================")
//Q22 --> INTERVIEW QUESTION -> write the difference between substring(), substr() and slice()
console.log("Q22")
//        in the form of a table in comments (minimum 3 points).
//        Think about : what the 2nd argument means, end index included or not,
//        negative index support, and which one is deprecated.
//        Also write WHICH one you would use in a real project and why.

console.log("=============================================")

//Q23 --> INTERVIEW QUESTION (CLASSIC) -> predict and explain :
console.log("Q23")

console.log("5" + 5)  //55
/**
 * the + operator performs concatation 
 * so 5 is converted into string gives us 55
 */
console.log("5" - 5)  //0
/**
 * the - operator performs math substraction 
 * so it converts "5" to number gives us 0  
 */
//        HINT -> the + operator joins strings (concatenation), but the - operator
//        works on numbers only. revise datatype conversion from lecture 02 + 03.
//        then answer : why do the two lines give DIFFERENT types of output ?

console.log("=============================================")
//Q24 --> INTERVIEW QUESTION -> what is the difference between a PROPERTY and a METHOD ?
console.log("Q24")
//        Answer with one string example of each, and explain the syntax difference
console.log("property = property gives you basic information about the sting", "property has no brackets at all")
console.log("method = method is action performed on the sting", "has '()' this type of brackets")
//        (brackets vs no brackets).