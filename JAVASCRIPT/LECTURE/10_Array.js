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

basic_operation_array[basic_operation_array.length - 1] = "software engineer"
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

let Method_array_1 = ["siddhant", "arjun", "gadakh", 27]


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

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Strawberry", "Watermelon", "Kiwi", "Papaya"];

//slice(starting index , ending index) -> but it will not consider ending index  

let arr_slice = fruits.slice(0, 3) //[ 'Apple', 'Banana', 'Mango' ]

console.log(arr_slice)

// splice(starting index , number character)


const fruits_1 = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Strawberry", "Watermelon", "Kiwi", "Papaya"];


let splice_arr = fruits_1.splice(0, 5)

console.log(splice_arr) //[ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes' ]



// sort -> this method will sort the array alphabatically 

const mixedArray = [10, "Hello", 25, "Apple", 42, "World"];

console.log(mixedArray.sort())


// if we want numbers 

const numbers = [
  123456789,
  987654321,
  1234567890,
  0,
  9876543210,
  1234567890123,
  999999999999999];

// to sort numbers use this 

let small_large = numbers.sort((a, b) => { return a - b }) // small to large


console.log(small_large)

// reverse() - this is used to revserse your array
console.log(small_large.reverse())

// resverse is an array method 


// question - > revsere the given string 

let str_q = " hello my name is ....."

console.log(str_q.split("").reverse().join("")) //..... si eman ym olleh 


// join() -> this method is used to convert your array into string 


console.log(fruits.join(" --> "))

console.log(fruits.join(" "))


// inculdes() -> this will check if the element is present in the array or not 

console.log(fruits.includes("Mango"))
console.log(fruits.includes("mango"))


// concat -> this method is used to join two or more arrays 

let a = [1, 2, 3]
let b = [4, 5, 6]
let c = [7, 8, 9]

let combine_array = a.concat(b, c)
console.log(combine_array)

let rev_combine = c.concat(b, a)
console.log(rev_combine)


//flat() -->this is used to fallten the array 
// if in a single there are mutiple array you want to combine them in a single array use flat

const arr = [1, 2, [3, 4], [5, 6]];

console.log(arr.flat()) //[ 1, 2, 3, 4, 5, 6 ]


// how to find the max and min value od array 

const number_a = [
  42, 17, 89, 3, 56,
  91, 24, 68, 12, 75,
  34, 100, 7, 63, 48
];


let sorted_array = number_a.sort((a, b) => { return a - b })
console.log(number_a)

console.log(sorted_array[0]) // smallest
console.log(sorted_array[sorted_array.length - 1]) // largest element 
console.log(sorted_array[sorted_array.length - 2]) // second largest  element


// max
console.log(Math.max(...number_a)) //100


// min 

console.log(Math.min(...number_a)) //3


//---------------------------------------------ADVANCE METHODS -------------------------------------
// LOOPS IN ARRAY 

// for the given array add 2 in every elememt and make a new aarray named added_2

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const added_2 = []


for (let i = 0; i < array.length; i++) {
  added_2.push(array[i] + 2)
}

console.log(added_2)
// [
//    2, 3, 4,  5,  6,
//    7, 8, 9, 10, 11,
//   12
// ]

const str_array = ["apple", "banana", "hello", "cat", "orange", "js", "mango", "dog"];
const Upper_ar = []
for (let i = 0; i < str_array.length; i++) {
  Upper_ar.push(str_array[i].toUpperCase())
}

console.log(Upper_ar)

// [
//   'APPLE',  'BANANA',
//   'HELLO',  'CAT',
//   'ORANGE', 'JS',
//   'MANGO',  'DOG'
// ]


//map --> it will iterate over every element in array to peform an action and it returns a new array

/**
 * const newarray = name_array.map((el,index,arr)=>{return code})
 * 
 */

const added_by_2 = array.map((el, index, arr) => { return el + 2 })

console.log(added_by_2)

//const str_array = ["apple", "banana", "hello", "cat", "orange", "js", "mango", "dog"];

const new_str_ar = str_array.map((el, index, arr) => { return el.toUpperCase() })
console.log(new_str_ar)

//[
//    2, 3, 4,  5,  6,
//    7, 8, 9, 10, 11,
//   12
// ]

/**
[
  'APPLE',  'BANANA',
  'HELLO',  'CAT',
  'ORANGE', 'JS',
  'MANGO',  'DOG'
]
 */

/**
 * map()
 * filter()
 * reduce()
 * forEach()
 * every()
 * some()
 */


const array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// i have to filter element above 5 and add then in new array called above 5 
let above_5 = []
for (let i = 0; i < array_num.length; i++) {
  if (array_num[i] > 5) {
    above_5.push(array_num[i])
  }
}
console.log(above_5) //[ 6, 7, 8, 9, 10 ]

let even_arr = []
let odd_arr = []


for (let i = 0; i < array_num.length; i++) {
  if (array_num[i] % 2 == 0) {
    even_arr.push(array_num[i])
  }
  else {
    odd_arr.push(array_num[i])
  }
}
console.log(even_arr) //[ 2, 4, 6, 8, 10 ]
console.log(odd_arr)// [ 1, 3, 5, 7, 9 ]



//filter()-> this method filter out the element of the array based upon the conditions and return a new array 

/**
 *  * const newarray = name_array.filter((el,index,arr)=>{return code})
 * 
 */

let above_5_ar = array_num.filter((el, index, arr) => { return el > 5 })
console.log(above_5_ar)


//forEach()


// loop example 

const str_array_1 = ["apple", "banana", "hello", "cat", "orange", "js", "mango", "dog"];

// make every element as uppercase 

for (let i = 0; i < str_array_1.length; i++) {
  console.log(str_array_1[i].toUpperCase())
}

/**
APPLE
BANANA
HELLO
CAT
ORANGE
JS
MANGO
DOG

 */


//forEach()


//forEach --> it will iterate over every element in array to peform an action.

/**
 *  name_array.forEach((el,index,arr)=>{ code})
 * 
 */

str_array_1.forEach((el, index, arr) => { console.log(el.toUpperCase()) })

/*
APPLE
BANANA
HELLO
CAT
ORANGE
JS
MANGO
DOG*/


// when to use 
// map -> itearte new array
//filter -> filter new array
//forEach -> itreate 



//every
//some

// this both are checking method

//const array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// every is like ann ( if all output are true it will show true  if not then false )

let every_5 = array_num.every((el, index, arr) => {
  return el > 5
})

console.log(every_5) //false
// some is or ( if some out put are true then it show true )



let some_5 = array_num.some((el, index, arr) => {
  return el > 5
})


console.log(some_5)


// reduce() --> this method is used to get sum of all the elements in array 
// return type number 

// loop example 


// //const array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// get the sum of all the elements 

let sum = 0  // accumatlot 
for (let i = 0; i < array_num.length; i++) {
  sum = sum + array_num[i]
  // sum +=array_num[i]

}

console.log(sum) //55

// sytnax of reduce() -> 

/*

let newarray = array.reduce((acc,el,index,arr)=>{retrun code },acc)

//acc is accumaltor ->
*/

let sum_10 = array_num.reduce((acc, el, indexc, arr) => { return el += acc }, 0)

console.log(sum_10) //55