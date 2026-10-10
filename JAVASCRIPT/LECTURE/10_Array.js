// DATATYPE ->
// PRIMITIVE -> THE DATA TYPE WHICH ARE SIMPLE IN NATURE AND IMMUTABLE IS CALLED AS PRIMITIVE 
// NON-PRIMITIVE -> THE COMPLEX DATA TYPE WHICH CAN BE CHANGED AS PER USECASE

// this is an example of primitive data type 
let num = 0
let str = "hello"


// ARRAY -> ARRAY IS A NON PRIMITIVE DATATYPE WHICH IS USED TO STORE MULTIPLE VALUES 

/*

1 HOW TO DETERMINE IF THE DATATYPE IS ARRAY ?
 AN ARRAY IS ALWAYS DEFINED BY SQUARE BRACKETS [ ]
 IN CODE THE CORRECT CHECK IS Array.isArray(value) BECAUSE typeof GIVES "object" FOR ARRAYS

2 HOW TO KNOW THE VALUES ARE SEPARATED OR NOT ? HOW ARE VALUES SEPARATED IN ARRAY  
 IN ARRAY EACH VALUE IS SEPARATED BY COMMA , 


3 WHICH DATATYPES CAN BE STORED IN AN ARRAY ?
WE CAN STORE ALL THE DATA TYPES (NUMBER, STRING, BOOLEAN, NULL, EVEN ANOTHER ARRAY ...)  

*/

//EXAMPLE -> 

let array_a = []
let array_b = ["siddhant", 7020400749, 27, true, "male", [], null]

console.log(array_a)

console.log(array_b)

// HOW TO CHECK THE DATATYPE OF A VALUE ?
console.log(typeof array_b)          // "object" -> typeof CANNOT say "array"
console.log(Array.isArray(array_b))  // true -> THE CORRECT WAY TO CHECK AN ARRAY
console.log(Array.isArray("hello"))  // false

// EQUALITY ->

let variable_a = 10
let variable_b = 10


let array_1 = [10]
let array_2 = [10]


console.log(variable_a == variable_b)   // true
console.log(variable_a === variable_b)   // true

console.log(array_1 == array_2)           // false
console.log(array_1 === array_2)          // false

//NOTE :- TWO ARRAYS WITH THE SAME CONTENT ARE STILL NOT EQUAL (BY == OR ===)

// WHY THIS HAPPENS -

// PRIMITIVES ARE COMPARED BY VALUE -> SAME VALUE MEANS EQUAL
// NON-PRIMITIVES (ARRAYS) ARE COMPARED BY REFERENCE -> TWO DIFFERENT ARRAYS
// LIVE AT TWO DIFFERENT MEMORY LOCATIONS, SO THEIR REFERENCE POINTS ARE NEVER SAME

// EXAMPLE -> TWO VARIABLES CAN SHARE THE SAME ARRAY (SAME REFERENCE)

let array_3 = array_1          // array_3 POINTS TO THE SAME ARRAY, NO NEW ARRAY IS CREATED
array_3.push(20)

console.log(array_1)           // [10, 20] -> array_1 ALSO CHANGED (SAME REFERENCE)
console.log(array_1 === array_3) // true -> BOTH POINT TO THE SAME ARRAY
console.log(array_1 === array_2) // false -> TWO DIFFERENT ARRAYS


// ARRAY -> EVERY DATA WILL HAVE PROPERTIES AND METHODS 

/*
ARRAY HAS A PROPERTY CALLED AS LENGTH 
ARRAY HAS A VAST NUMBER OF METHODS
THE VALUES IN ARRAY ARE STORED IN INDEXES 

                        0            1        2    3       4    5    6
LET EXAMPLE_ARRAY =  ["siddhant", 7020400749, 27, true, "male", [], null]
THEREFORE LENGTH - 1 IS ALWAYS THE INDEX OF THE LAST ELEMENT 
*/

// BASIC OPERATION ON ARRAY 

let basic_operation_array = ["siddhant", 7020400749, 27, true, "male", [], null]

// 1 RETRIEVE -> TO GET THE VALUE FROM ARRAY 
console.log(basic_operation_array[0])

// 2 UPDATE  -> TO UPDATE THE EXISTING VALUE 

basic_operation_array[basic_operation_array.length-1] = "software engineer"
//basic_operation_array[6] = "software engineer"

console.log(basic_operation_array)

// 3 ADD     -> TO ADD A VALUE IN ARRAY 
// push() ADDS AT THE END, unshift() ADDS AT THE START (FULL METHODS LIST -> NEXT LECTURE)
basic_operation_array.push("22 years experience")

console.log(basic_operation_array)

// 4 DELETE -> TO DELETE A VALUE FROM ARRAY 

delete basic_operation_array[6]

console.log(basic_operation_array)
// NOTE :- delete LEAVES AN EMPTY HOLE BEHIND, IT DOES NOT SHIFT THE ELEMENTS
// AND THE length DOES NOT CHANGE -> THE SLOT BECOMES undefined / empty item

console.log(basic_operation_array.length)   // STILL 8 -> delete DID NOT REDUCE THE LENGTH


//-------------------------------------------------METHODS ON ARRAY --------------------------------


// WHEN WE USE ANY METHOD WE GET 2 THINGS 

// OUTPUT -> RESULT OF ACTION PERFORMED 
// RETURN TYPE --> THE DATATYPE OF RECVIED OUTPUT 

let Method_array_1 = ["siddhant","arjun","gadakh",27]


// ADDITION TO ARRAY 

// 1 METHOD -  push() -> THIS METHOD WILL ADD A ELEMENT AT THE END OF THE ARRAY 

// stnax   --> arrayName.push("value that is to added")

Method_array_1.push("lead-software-engineer")

console.log(Method_array_1)

// output -> [ 'siddhant', 'arjun', 'gadakh', 27, 'lead-software-engineer' ]
// return type  --> array 

// 2 METHOD - unshift() -> THIS METHOD WILL ADD A ELEMENT AT THE START OF THE ARRAY 


// stnax   --> arrayName.unshift("value that is to added")


Method_array_1.unshift("Mr")

console.log(Method_array_1)

//output -> [ 'Mr', 'siddhant', 'arjun', 'gadakh', 27, 'lead-software-engineer' ]
// return type -> array 


//METHODS FOR DELETION 

// 3 METHOD -> pop() -> this removes the element form the end.

//syntax ->arrayName.pop()

Method_array_1.pop()
console.log(Method_array_1)


//output - > [ 'Mr', 'siddhant', 'arjun', 'gadakh', 27 ]
//return type -> array 

//4 METHOD -> shift() ->  this removes the element form the start.

//syntax ->arrayName.shift()

Method_array_1.shift()

console.log(Method_array_1)
//output -> [ 'siddhant', 'arjun', 'gadakh', 27 ]
//return type -> array 