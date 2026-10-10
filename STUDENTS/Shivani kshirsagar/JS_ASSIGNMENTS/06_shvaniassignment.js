// ============================================
// 06_ASSIGNMENT -> TOPIC : JS OPERATORS (+ revision of datatypes, numbers & strings)
// BASED ON : LECTURE/06_JS_Operators.js  +  THEORY_NOTES/06_JS_Operators.md
//
// HOW TO RUN : open terminal -> node 06_ASSIGNMENT_JS_OPERATORS.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : ARITHMETIC + ASSIGNMENT -------------------

//Q1 --> let a = 10
//       let b = 3
//       Print the result of ALL 6 arithmetic operators on a and b :
//       + - * / % **  (one console.log each, with the expected answer in comments)
//       HINT -> remember : / does NOT cut decimals in JS.

let a = 10
let b = 3
console.log(a + b)//13
console.log(a - b)//7
console.log(a * b)//30
console.log(a / b)//3.3333333333333335
console.log(a % b)//1
console.log(a ** b)//1000



//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10 % 3)
//       console.log(15 % 2)
//       console.log(16 % 2)
//       console.log(2 ** 4)
//       HINT -> % gives the REMAINDER. remainder 0 means the number divides perfectly.
console.log(10 % 3) //1
console.log(15 % 2)//1
console.log(16 % 2)//0
console.log(2 ** 4)//16


//Q3 --> Using % and the ternary operator, check EVEN or ODD for these numbers :
//       15, 22, 0
//       HINT -> (num % 2 === 0) ? "even" : "odd"
let num = [15, 22, 0]
let even_Odd_Num = ((num % 2 === 0) ? "even" : "odd")
console.log(even_Odd_Num) //odd



//Q4 --> let score = 10
//       Apply these ONE BY ONE, and predict the value of score AFTER EACH STEP
//       (write all predictions in comments BEFORE running) :
//       score += 5
//       score -= 3
//       score *= 2
//       score /= 4
//       score %= 3
//       Then run and confirm. If any prediction was wrong, write the reason.
//       HINT -> translate each shortcut to its long way, step by step.
//       (remember the lecture mistake : never apply the long way AND the shortcut together!)

let score = 10
console.log(score += 5)//15
console.log(score -= 3)//12
console.log(score *= 2)//24
console.log(score /= 4)//6
console.log(score %= 3)//0


//because we declare score one time the we only update the valude of score by using arthmatic operation so we get result lik that-15,12,24,6,0.
//if we declare variable score like that then we get output --
let score_1 = 10
console.log(score_1 += 5)//15
let score_2 = 10
console.log(score_2 -= 3)//7
let score_3 = 10
console.log(score_3 *= 2)//20
let score_4 = 10
console.log(score_4 /= 4)//2.5
let score_5 = 10
console.log(score_5 %= 3)//1



// ------------------- SECTION B : PREDICT THE OUTPUT (COMPARISON + LOGICAL) -------------------

//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(4 > 3)
//       console.log(4 >= 3)
//       console.log(4 < 3)
//       console.log(4 <= 3)
//       console.log(4 == 4)
//       console.log(4 === 4)
//       console.log(4 != 4)
//       console.log(4 !== 4)
//       console.log(4 != "4")
//       console.log(4 == "4")
//       console.log(4 === "4")
//       HINT -> == compares only VALUE, === compares VALUE + DATATYPE.
//       != and !== are their opposites.

console.log(4 > 3) //true
console.log(4 >= 3)//true
console.log(4 < 3)//false
console.log(4 <= 3)//false
console.log(4 == 4)//true
console.log(4 === 4)//true
console.log(4 != 4)//false
console.log(4 !== 4)//false
console.log(4 != "4")//false
console.log(4 == "4")//true
console.log(4 === "4")//false

console.log("----------------------------")

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(4 > 3 && 10 < 12)
//       console.log(4 > 3 && 10 > 12)
//       console.log(4 > 3 || 10 > 12)
//       console.log(4 < 3 || 10 > 12)
//       console.log(!(4 > 3))
//       console.log(!(false))
//       console.log(!(4 === "4"))
//       HINT -> && needs BOTH true, || needs AT LEAST ONE true, ! flips.

console.log(4 > 3 && 10 < 12)// true
console.log(4 > 3 && 10 > 12)//false
console.log(4 > 3 || 10 > 12)//true
console.log(4 < 3 || 10 > 12)//false
console.log(!(4 > 3))//false
console.log(!(false))//true
console.log(!(4 === "4"))//true


//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 5
//       console.log(++a)
//       console.log(a)
//       let b = 5
//       console.log(b++)
//       console.log(b)
//       let c = 5
//       console.log(--c)
//       console.log(c)
//       HINT -> PRE changes the value BEFORE using it, POST uses the OLD value first.


let a1 = 5
console.log(++a1)//6
console.log(a1)//6
let b1 = 5
console.log(b1++)//5
console.log(b1)//6
let c = 5
console.log(--c)//4
console.log(c)//4


//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let strTen = "10"
//       let numTen = 10
//       console.log(strTen == numTen)
//       console.log(strTen === numTen)
//       console.log(typeof strTen === typeof numTen)
//       HINT -> == triggers automatic CONVERSION (last lecture). === does NOT.


let strTen = "10"
let numTen = 10
console.log(strTen == numTen)//true
console.log(strTen === numTen)//false
console.log(typeof strTen === typeof numTen)//false 


//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("b" > "a")
//       console.log("apple" < "banana")
//       HINT -> comparison works on strings too -> alphabet order.

console.log("b" > "a")//true
console.log("apple" < "banana")//true


// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> let myAge = 21
//        let yourAge = 25
//        Calculate the age difference using a subtraction, and print it
//        with a template literal like "Age difference is : 4 years".
//        Then use a ternary to print WHO is older -> "I am older" or "You are older".

let myAge = 21
let yourAge = 25
let Diff = (yourAge - myAge)
let age_Diff = (`Age difference is:${Diff} years.`)
console.log(age_Diff) //Age difference is:4 years.


//Q11 --> let birthYear = 2004
//        Calculate the age (assume current year 2026, use arithmetic),
//        then use the TERNARY operator to print "can drive" or "cannot drive"
//        (driving age is 18).
//        HINT -> (age >= 18) ? ... : ...
let birthYear = 2004
let current_year = 2026
let my_running_Age = current_year - birthYear
let my_Age = (my_running_Age > 18) ? "I can drive " : "I cannot drive "
console.log(my_Age) //I can drive 



//Q12 --> Using the ternary operator, check if the year 2024 is EVEN or ODD.
//        HINT -> % 2 === 0
let year = 2024
let even_odd = (2024 % 2 === 0) ? "this is a even year." : "this is a odd year."

console.log(even_odd)  //this is a even year.



//Q13 --> let firstName = "siddhant"
//        let lastName = "gadakh"
//        a) compare BOTH lengths using > and print the boolean
//        b) use the ternary to print which name is longer :
//           "first name is longer" / "last name is longer"
//        HINT -> .length (lecture 04) + comparison (this lecture).

let firstName = "siddhant"
let lastName = "gadakh"
console.log(firstName.length)//8
console.log(lastName.length)//6
console.log(firstName.length > lastName.length) //true
console.log((firstName.length > lastName.length) ? "longer name :firstName" : "longer name : lastName") //longer name :firstName



//Q14 --> let word1 = "python"
//        let word2 = "jargon"
//        Check if the word "on" is found in BOTH words using includes() and &&.
//        Print the final true/false.
//        HINT -> includes() (lecture 04) combined with && (this lecture).

let word1 = "python"
let word2 = "jargon"
let check = (word1.includes("on") && word2.includes("on")) ? "true" : "false"

console.log(check) //true


//Q15 --> let base = 10
//        let height = 6
//        Calculate the area of the triangle (formula -> (base * height) / 2)
//        and print it like "Area of triangle is : 30".
//        OPTIONAL -> try it with prompt() for user input (works in the BROWSER console only).


let base = 10
let height = 6
let Area_Of_Traingle = ((base * height) / 2)
console.log(`Area of traingle is : ${Area_Of_Traingle}`) //Area of traingle is : 30



//Q16 --> let length = 12
//        let width = 8
//        Calculate the AREA (length * width) and PERIMETER (2 * (length + width))
//        of the rectangle. Print both in a readable format using template literals.

let length = 12
let width = 8
let Area = length * width
let perimeter = (2 * (length + width))
console.log(`Area of Rectangle is : ${Area} and Perimeter of Rectangle is : ${perimeter} `)//Area of Rectangle is : 96 and Perimeter of Rectangle is : 40 



//Q17 --> let radius = 7
//        Calculate the AREA (Math.PI * radius ** 2) and CIRCUMFERENCE
//        (2 * Math.PI * radius) of the circle. Round both to 2 decimals with toFixed().
//        HINT -> Math.PI is a PROPERTY (no brackets) -> revision lecture 03.

let radius = 7
let AREA = (Math.PI * radius ** 2)
let CIRCUMFERENCE = (2 * Math.PI * radius)
console.log(AREA.toFixed(2)) //153.94
console.log(CIRCUMFERENCE.toFixed(2)) //43.98



//Q18 --> let salary = 25000
//        Using ONLY assignment shortcuts, do these steps in order :
//        a) add a bonus of 5000        (+=)
//        b) deduct 10% tax             (*= 0.9)
//        c) add a random incentive between 500 and 1500   (+= with Math.random)
//        Print the final salary.
//        HINT -> golden formula (lecture 03) for the random part.


let salary = 25000
let bonus = 5000
console.log(salary += 5000) // 30000
console.log(salary *= 0.9)//27000
console.log((salary += 5000) - (salary *= 0.1)) //28800
console.log((salary += Math.random(1500 - 500 + 1) - 500))//2700.6111774957985



// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q19 --> INTERVIEW QUESTION (CLASSIC) -> what is the difference between =, == and === ?
//        Write ONE line for each with a small example.
//        HINT -> assignment | loose comparison | strict comparison.

/*
operator    Name                          Use

=           Assignment operators          Assigning value to a veriable
==          loose equallity operator      compaire value allowing type conversion.
===         strict equality operator      compaire both value and data type.


Example-
1.  Assignment operators -
let a= 10
console.log(a) //10

2.  loose equallity operator
console.log(5=="5") //true

3.  strict equality operator 
console.log(5==="5")//false
console.log(0===false)//true

*/


//Q20 --> INTERVIEW QUESTION -> why do JS developers ALWAYS prefer === over == ?
//        Give one real example where == gives a SURPRISING result.
//        HINT -> "0" == 0, "" == 0, null == undefined -> try these in the console,
//        write the results, and explain the surprise.

/*
Js developers usually prefer === because it compaire both value and data type without 
automatically converting one type to another.
this make code more predicatable and help prevent unexpected result

example-
console.log(5=="5")//true
console.log(5==="5")//false
 */


//Q21 --> INTERVIEW QUESTION -> what is the output of the below code ? explain step by step.
//        let x = 5
//        let y = x++ + ++x
//        console.log(y)
//        console.log(x)
//        HINT -> solve LEFT to RIGHT : x++ gives the OLD value first,
//        then ++x increases BEFORE using. track x at every step.


let x = 5
let y = x++ + ++x //here x value print then increase(5)+value of x is increase then print(7)= 5+7
console.log(y) //12
console.log(x)//7


//Q22 --> INTERVIEW QUESTION -> what does the % (modulus) operator do ?
//        Write 3 real-world uses of % (from the lecture + your own thinking).
//        HINT -> even/odd check is one. what about checking divisibility by 5 ? or cycles ?

/*
The % operator is called the Modulus (reminder)operator .
it returns the remainder after dividing one number by another.
*/
//Example-

//1. check whether number is even or odd

let num_1 = 7
if (num_1 % 2 === 0) {
      console.log("it is a even number")
}
else {
      console.log("it is a odd number")
}//it is a odd number

//2.check whether number is divisible by 3 
let num_2 = 12

//3.apply a discount to every fifth purches 
let purchesNum = 10
if (purchesNum % 5 === 0) {
      console.log("Special offer available.")
}
else {
      console.log("nothing any offer ")
}//Special offer available.





//Q23 --> INTERVIEW QUESTION -> what is operator precedence ?
//        Predict WITHOUT running, then confirm :
//        console.log(2 + 3 * 4)
//        console.log((2 + 3) * 4)
//        console.log(10 - 4 % 3)
//        HINT -> * / % are calculated BEFORE + - (like BODMAS maths).
//        brackets () always win.

//        Predict WITHOUT running, then confirm :
console.log(2 + 3 * 4) //14
console.log((2 + 3) * 4)//20
console.log(10 - 4 % 3)//9



// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q24 --> BONUS -> SWAP TWO VARIABLES WITHOUT A THIRD VARIABLE ->
//        let a = 3
//        let b = 8
//        Swap their values using ONLY arithmetic operators (+ and -),
//        so at the end a is 8 and b is 3. Print before AND after.
//        NO third variable, NO re-declaring directly.
//        HINT -> a = a + b  ->  b = a - b  ->  a = a - b
//        track the values on paper step by step, then explain WHY it works in comments.

let a2 = 3
let b2 = 8
console.log(a2 + b2) //11
console.log(a2 - b2)//-5

console.log(a2 = a2 + b2)//11
console.log(b2 = a2 - b2)//3
console.log(a2 = a2 - b2)//8


//Q25 --> BONUS (MINI PROJECT - SHOPPING BILL) ->
//        let price = 499
//        let quantity = 3
//        a) calculate the total (use *= on a total variable)
//        b) apply a 10% discount ONLY IF the total is more than 1000
//           (use a ternary to decide, then arithmetic to apply)
//        c) print the receipt in EXACTLY this format :
//           Price     : Rs. 499
//           Quantity  : 3
//           Total     : Rs. 1497.00
//           Discount  : Rs. 149.70
//           Final Bill: Rs. 1347.30
//        HINT -> ternary gives you the discount AMOUNT (0 or total * 0.1),
//        toFixed(2) for the money format (revision lecture 03).


let price = 499
let quantity = 3
// a) calculate the total (use *= on a total variable)
let total = price * quantity
console.log(total) //1497

//b) apply a 10% discount ONLY IF the total is more than 1000
//           (use a ternary to decide, then arithmetic to apply)
let discount = (total>1000)? total*0.10:"no discound"
console.log( discount.toFixed(2)) //149.70


let final_bill = total -discount
console.log(`final bill is  Rs. ${final_bill.toFixed(2)}`)//final bill is  Rs. 1347.30

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 06_ASSIGNMENT_JS_OPERATORS.js
// ============================================

