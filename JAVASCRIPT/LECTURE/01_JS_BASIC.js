// how run js file  ->

//1 step -> click on file you need to run 
//2 step -> open in intergated terimnial
//3 in terminal type  -> node filename.js

//how print in terminal

// in console print  hello world 
console.log("hello")


// comment -> comments are the line written in code which are used to explain the code and this igonred by console/terminal

//use :-
//1 it will make your code readable
//2 it will make your code easy to maintain


// types ->
// 1 single line comment --> used 95 percent --> (//) --> it has the scope or range upto a single line

// example -> this is a single line comment 


/* 2 multi - comment -> used 5 % --> it can 
given 
in 
multiple line 

starting (/*   comment 


)

ending (*/





/*
comment rules  - code quality

1 use comment to explain the complex flow not simple flows 
2 avoid unwanted commenting ( comments which doesnt add value -> remove them )
3 keep comments updated with code changes
4 comments should be short and clear understand 

*/




//VARIABLE -> In js Variables are used to store a value 


// IN JS WE HAVE 3 TYPES OF VARIABLES 

//LET
//VAR 
//CONST


/**
 * let -> let is used to delacre a vlaue that can be updated in the future 
 * 
 * example 
 * 
 */

let number_ten = 10
let number_five =5

console.log(number_ten)
console.log(number_five)

number_ten =100
number_five =500
console.log(number_ten)
console.log(number_five)


/*


/*
var -> var is used to delacre a vlaue that can be updated in the future 
example
*/
// var one = 1
// var two = 2

// console.log(one)
// console.log(two)


one = 11
console.log(one)
/*
const -> is used to delcare a constant variable

example
*/
const pi = 3.1423

console.log(pi)

// pi = 4
// console.log(pi)



//NOTE :- 
/*
WE USE LET FOR UPDATING VARAIBLES
WE CONST FOR CONSTANT VARIABLES
WE DONT USE VAR 


//LET AND CONST IS BLOCK SCOPE VARIABLE 
//VAR IS FUNCTIONAL SCOPE VARIABLE
*/

// Explain varaibles in js 
// let difference let and var 

/**
 * QUALITY CODE IMPORVE 
 *
 * rules or follow 
 */


// 1 rule -> varaible name should not start with a number or symbol 

//example

//valid  -> let num_1 = 1
//invaild  -> let 1_num = 1
// invaild -> let %num = 1

//2 rule -> varaible name can only contain letters , number, underscore ( _ ), dollar sign $

//valid  -> let num_1 = 1
//invaild  -> let ^_num = 1
// invaild -> let number one  = 1

// let number_one = 1

// 3 rule -> varaibles are case senstive 
// NOTE -> JS IS CASE SENSTIVE LANGAUGE -> 

let siddhant = 1
let Siddhant = 2

console.log(siddhant)
console.log(Siddhant)


// 4 rule -> varaible name cannot be reserve keyword of js 

// let var = 2  


// bonus Rule : -> 

// always your varibale name should give a hint / should be realted to the varibale value and always delacre it in 
// camelcase 

//camelCase -> starting first letter or varaible should be small rest every starting letter should be captial 

// number_One = correct case 
// first_Name = correct camel  case

/**
  invaild
 let siddhant = 1
let Siddhant = 2

let number_one = 1
let number_two = 2
 */


// how to delcare multiple varaibles in a single line 

// this is list of name siddhant , arjun , jui , raj 

let first_Name = "siddhant",middle_Name= "Arjun" ,last_Name = "gadakh"

let fName = "siddhant"
let mName = "arjun"
let Lname = "gadakh"

