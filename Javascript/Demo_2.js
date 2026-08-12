//VARIABLES IN JS --> IN JS VARIABLE ARE DATA CONTAINER USED TO STORE THE VALUE 

// In JS we can create varaibles by 3 keywords 

// LET 
// VAR 
// CONST

/**
 * let --> the let keyword is used when the value in data container can be updated as required 
ACUTAL EXAMPLE OF HOW TO DELCARE A VARIBLE 

let num1 = 10 

here 
let is keyword 
 =  is a ssignemnt sign 
 10 is value 
*/

let name = "siddhant arjun gadakh"
console.log(name) //siddhant arjun gadakh
name = "siddhant"
console.log(name) //siddhant

// Correct way to update varaible 
let num = 10
console.log(num)

num = 15
console.log(num)

// what wrong way to update variable 

// let number = 15
// console.log(number)
// let number = 20
// console.log(number)



/**
 * var -->  the var keyword is used when the value in data container can be updated as required 
 * (var is older way to delacre varaibles) 
*/
//ES6 

var gg = 12
console.log(gg)

gg=112
console.log(gg)

/**
 * const -> the varaible type whose value cannot be updated 
 */
// example 
const pi = 3.1432
console.log(pi)
// pi = 4
// console.log(pi)


// QUALITY CODE 

// 1 RULE --> VARAIBLE NAME SHOULD BE UNIQUE ( NO TWO VARAIBLES SHOULD SAME NAME)
// 2 RULE --> VARAIBLE NAME SHOULD NOT START WITH A NUMBER OR A SPECIAL SIGN 
// 3 RULE --> YOU CANNOT USE ANY SPECIAL CHARACTER IN THE VARAIBLE NAME
// we can only use _ (underscore) or $ (dollar sign )
//EXAMPLE wrong examples 
// let number^1 = "hello" 
// let first name = "siddhant"
let first_name = "siddhant"
let first$name ="siddhant"

//RULE 4 --> YOUR VARAIBLE NAME SHOULD REFELECT THE VALUE IN THE VARAIBLE
let num_10 = 10
// let x= 10

// RULE 5 --> YOUR VARAIBLE NAME ARE CASE SENSENTIVE 
let NUMX = 10
let numx = 20

// RULE 6 -> YOUR VARIBALE SHOULD ALWAYS BE IN CAMELCASE
let first_Name = "sid"

