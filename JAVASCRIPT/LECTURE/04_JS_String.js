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



// NOTE : - 

// STRING ARE IMMUTABLE IN JAVASCRIPT 

//-------------
/** 
 * IT MEANS ONCE A STRING IS CREATED, THE CHARACTER IN IT CANNOT BE CHANGES OR MODIFIED 
 * 
 * IF ANY  METHOD THAT SEEMS TO MODIFY A STRING ACTUALLY , RETURNS A NEW STRING INSTEAD OF CHANGING THE ORGINAL  
 */



// METHOD OF STRING 

// 1 toUpperCase()  -> THIS METHOD WILL CONVERT YOUR STRING INTO UPPERCASE( LETTERS/ALPHABATES )

 let Meth_str_1 = "hello i am learning string method in js"

 console.log(Meth_str_1.toUpperCase()) // output = HELLO I AM LEARNING STRING METHOD IN JS 

 console.log(Meth_str_1)  // beacuse the original is not changed even after using a method instead it created a new strinfg 
 // so it is called as immutable 

 // 2 toLowerCase() -> THIS METHOD WILL CONVERT YOUR STRING INTO LOWERCASE ( LETTERS/ALPHABATES )

 let Meth_str_2 = "HELLO I AM LEARNING STRING METHOD IN JS"

 console.log(Meth_str_2.toLowerCase()) // hello i am learning string method in js


//string contaction -> joining two or more string 

//method concatenation -> 
// when we call multiple method on same string or chaning multiple it called method chaning 

//example

let method_concat = "HELLO I AM LEARNING STRING METHOD IN JS"

console.log(method_concat.toUpperCase().toLowerCase().toUpperCase().toLowerCase()) // this is method chaining

// NOTE : - 
// THIS WILL ONLY WORK WHEN THE OUTPUT OF FIRST METHOD IS A VALID INPUT TO SECOND METHOD 

// EXAMPLE 
// console.log(method_concat.toUpperCase().length.toLowerCase().toUpperCase().toLowerCase())

// here error occures beacuse the output of  method_concat.toUpperCase().length is a number  
// which is not a valid input toLowerCase()


// 3. trim() --> this is used to remove the blank space form start and end of string 
let method_Trim = " HELLO I AM LEARNING STRING METHOD IN JS "
console.log(method_Trim)
console.log(method_Trim.length)

console.log(method_Trim.trim())
console.log(method_Trim.trim().length)

// 4 trimStart() -> this is used to remove the blank space form start 

let method_TrimSTART = " HELLO I AM LEARNING STRING METHOD IN JS"
console.log(method_TrimSTART)
console.log(method_TrimSTART.length)

console.log(method_TrimSTART.trimStart())
console.log(method_TrimSTART.trimStart().length)

// 5 trimEnd() ->this is used to remove the blank space form the end of string 

let method_TrimEnd = "HELLO I AM LEARNING STRING METHOD IN JS "
console.log(method_TrimEnd)
console.log(method_TrimEnd.length)

console.log(method_TrimEnd.trimEnd())
console.log(method_TrimEnd.trimEnd().length)