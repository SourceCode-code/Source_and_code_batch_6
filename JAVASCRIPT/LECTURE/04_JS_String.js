// STRING --> String is Seqeunce of character wrapped in either (" ") , (' ') , (``)

// example :- 

let ex_str_1 = "123456789" // string
let ex_str_2 = "    " // string
let ex_str_3 = 'true' // string
let ex_str_4=`1234$%^&*(*&^%$)ryhtgjvkufy` // string 

console.log(typeof (ex_str_1) )
console.log(typeof ex_str_2 )
console.log(typeof ex_str_3 )
console.log(typeof ex_str_4 )


// every data type has 
/**
 * METHODS  -> to perfom operation/action
 * PROPERTY ->length(size string) 
 * syntax to check length 
 * 
 * stringname.length
 */


console.log( ex_str_1.length )
console.log( ex_str_2.length )
console.log( ex_str_3.length )
console.log( ex_str_4.length )


// In string the charcters are stored in indexes 

/**
 *              0123 
 * let string = name 
 * 
 */

let str_1 = "name"

console.log(str_1.length) //4

// HOW TO GET/PRINT  ANY SINGLE  CHARACTER  IN STRING

console.log(str_1[0])  // n
console.log(str_1[3]) // e

// string last index +1 == length 

//NOTE :-> IN JS WHEREVER THE CHARCATER STORE BY INDEX WE CAN USE THIS EQUATION 

// LASTELEMENT IS ALWAYS LENGTH -1

let str_2 = "qwertyuiolkjhgfdsxcvbnm,74126985ertyuiokjhgvf"

console.log(str_2.length)

console.log(str_2[str_2.length-1])


// STRING CONCATENETION -> (JOINING OF 2 or more STRING) 
// combiming or adding two or more string together to create a new string  it is called string CONCATENETION

let firstName = "siddhant"
let middleName = "Arjun"
let lastName = "Gadakh"

// there are 2 way 

// first way use (+) operator--> old way 


let fullName = firstName+middleName+lastName
let fullName_1 = firstName+" "+middleName+" "+lastName
console.log(fullName)
console.log(fullName_1)

// ES6 template literal 

// THIS METHOD IS ONLY POSSIBLE IF YOU DELACRE A STRING WITH BACKTICKS

let fullName_backtick = `my fullname is ' ${firstName} ${middleName} ${lastName} '`

console.log(fullName_backtick)