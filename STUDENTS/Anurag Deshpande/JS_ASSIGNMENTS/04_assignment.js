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