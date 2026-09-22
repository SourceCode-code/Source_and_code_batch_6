// OPERTAIORS -  symbols in code that are used to perfrom operation

/**
 * DIFFERENT OPERTORS 
 * 
 * 1 ARTHMATIC OPERATORS -> USED TO PERFROM ARTHMATICS ( + - * / %)
 * 2 ASSIGNMENT OPERATORS -> USED TO ASSIGN VALUES TO VARAIBLES ( = += , -=)
 * 3 COMPRASION OPERATORS -> USED TO COMPARE TWO VALUES AND RETURN BOOLEAN ( > < >= , <= ,== ,===)
 * 4 LOGICAL OPERATORS -> USED TO PERFROM LOGICAL OPERTIONS ( & || !)
 * 5 INCREMENT AND DRECEMENT -> USED TO INCREASE OR DERCRES VALUE  
 * 6 TERNANRY OPERATORS -> USED WHEN CONDITION ARE OF IF ESLE  
 * 7 TYPE OF OPERATORS -> USED TO CHECK THE DATATYPE OF VARIBALE
 * 
 * 
 */


/**
 * ---------------------------------ARTHMATIC OPERATORS -------------------
 * 
 * + -> ADDITION
 * - -> SUBSTRACTION
 * * -> MULTIPICATION
 * / -> DIVISION
 * %  -> MODULUS  ( REMINDER)
 * ** -> EXPONENTIATION 
 * 
 */

console.log(2+2) // 4


//------------------------------ASSIGNMENT OPERATORS ---------------------------

// = -> simple assignment 

// let a = 10 // here = is assignment operator
// let b = a

// +=  --> add and assignment  

let c = 5 
let d = 10 
// c = c+d
c += d     // c = c+d
console.log(c) //15

//-=  --> subtract assignment 

let e = 100 
let f = 10

 f-=e
f = f-e
 console.log(f) //-90

// --------------------------------COMPARSION OPERATORS --------------

/**
 * >   --> GREATER THAN
 * <   --> LESSER THAN
 * >=  --> GREATER THAN EQUAL TO 
 * <=  --> LESS THAN EQUAL TO
 * ==  --> EQUAL( VALUE)
 * === --->EQUAL VALUE AND EQUAL DATATYPE
 * !=  --> NOT EQUAL 
 * !=== --> NOT EQUAL VALUE AND DATATYPE  
 */


console.log(4=="4") // two will always just check value  (true) 

console.log(4==="4") // three signs will check value as well as datatype  (false)

console.log(!true) // false



//------------------------------------------------LOGICAL OPERATORS ----------------------------

/**
 * WE HAVE TOTAL OF 3 LOGICAL OPERATORS IN JS 
 * AND (&&)
 * OR (||)
 * NOT (!)
 */

//AND --> ( COMBINATION COMBINATION)-->
// IF WE HAVE 2 CONDITION 
// 

// SIMPLE 

/*
T  && T --> TRUE
T  && F --> FALSE
F  && T --> FALSE
F  && F --> FALSE

*/

console.log(3000<5000 && 10 >5) // true 
console.log(3000<5000 && 10 <5)// false

//OR (||) --> IF ANYONE OF THE CONDITION IS TRUE THEN RESULT WILL BE TRUE 

console.log("------------------------OR-------------")
/*
T  || T --> TRUE
T  || F --> TRUE
F  || T --> TRUE
F  || F --> FALSE

*/

console.log(3000<5000 || 10 >5) // true 
console.log(3000<5000 || 10 <5)//true 

// NOT (!) -> THIS WILL REVERSE THE OUTPUT

//!T --> F
//!F ==>T


//------------------------------------INCREMENT AND DECREMENT OPERATORS  --------------------------

// INCREMENT OPERATORS  (++)

/**
 

 PRE INCREMENT  ( ++ VARIBALE) --> THIS WILL FIRST INCREACE THE VALUE AND THEN SHOW THE OUTPUT

 POST INCREMENT ( VARIBALE ++) --> THIS WILL FIRST SHOW THE VALUE AND THEN INCREACE THE VALUE 

 PRE DRECEMENT ( -- VARIBALE) --> THIS WILL FIRST DECREASE THE VALUE AND THEN SHOW THE OUTPUT

 POST DRECEMENT ( VARIBALE --) -->THIS WILL FIRST SHOW THE VALUE AND THEN DECREASE THE VALUE

 */



 let pre_num = 10
 console.log(++pre_num) // 11


 let post_num = 0
 console.log(post_num++) //0
 console.log(post_num) //1


 // -----------------------------------TERNARY OPERATORS --------------

 // SYNTAX --> (CONDITION)?"POSTIVE OUTPUT":NEGATIVE OUTPUT

let age = 5

 let drive = (age>=18)?"he can drive":"HE CANNOT DRIVE"

 console.log(drive)




 // find the number is even or odd 

 let num = 15

 let find_even_odd= (num%2==0)?"number is even ":"number is odd"

 console.log(find_even_odd)