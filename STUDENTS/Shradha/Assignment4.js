//Q1 --> Declare the SAME string "JavaScript" in all 3 ways
//       (double quotes, single quotes, backticks).
//       Print all 3 values AND their datatypes using typeof.
//       HINT -> all 3 should print "string". if not, find the mistake.


let string="JAVASCRIPT"
console.log(string)

let name
console.log(typeof name)//undefined

let myname='Shradha'
console.log(typeof myname)
let number=10
console.log(typeof number)
let isactive=true
console.log(typeof isactive)

const pi = 3.14
    //  pi = 4
      // console.log(pi)//we can not assign new value to const variable



       //Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = "123"
//       let b = 123
//       let c = "true"
//       let d = true
//       console.log(typeof a, typeof b, typeof c, typeof d)
//       HINT -> quotes CHANGE everything. revise lecture 02 (datatypes) + lecture 04.
//Ans==the  a-String, b=Number c String, d=Boolean

//Q3 --> let city = "Aurangabad"
//       a) print the length of the string
//       b) print the FIRST character
//       c) print the LAST character WITHOUT counting manually
//       HINT -> last element equation -> index (length - 1)
let city="aurangabad"
console.log(typeof city)
let len=city.length
console.log(city.charAt(len-1))

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
   //let spaces = "   "
   //    console.log(spaces.length)
   //  console.log("".length)
//       HINT -> are spaces characters too ? what is the length of an EMPTY string ?

//In javascript spaces are also considered as character and
//  its counted in length of the string


//Q5 pending

//Q5 --> Given the string below, write code to print the character
//       at the 4th index and the 9th index. Then print the character
//       at index 100 and index -5 and observe what comes.
//       let lang = "JavaScript"
//       HINT -> str[100] and str.charAt(100) do NOT give the same thing.
//  find out the difference.


let lang="JavaScript"
console.log(lang[100])//index does not exist undefined
console.log(lang.charAt(100))//empty
console.log(lang.charAt(-5))//empty
console.log(lang[-5])//invalid index --undefined


//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let name = "Siddhant"
//       console.log(`hello ${name}`)--- will print hello Siddhant
//       console.log("hello ${name}")--- will print hello ${name}
//       console.log('hello ${name}')---will print hello ${name}
//       HINT -> ${} placeholders work ONLY in one type of quotes. which one and why ?

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
   let str = "JavaScript"
       console.log(str.includes("script")) //False
       console.log(str.includes("Script"))//True
      console.log(str.includes("java"))//false
      // HINT -> includes(), startsWith(), endsWith() are ALL ______ sensitive methods.

