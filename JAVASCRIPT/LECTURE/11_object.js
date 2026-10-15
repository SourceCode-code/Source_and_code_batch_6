// OBJECTS

// WHY IS OBJECT  

let person_info = ["siddhant","arjun","gadakh",27,7020400749,25]
// MAJOR DRAWBACK IS THE DATA IS NOT DESCRIPTPITVE  

// WHY AN OBJECT / WHAT IS AN OBJECT 

// OBJECT IS THE NON PRIMITIVE DESCRIPTIVE DATA 

/*
1 OBJECT IS DELECARED OR IDENFITY  {}
2 OBJECT WILL ALWAYS HAVE A KEY AND VALUE PAIR 
3 EVERY VALUE IN A OBJECT IS SEPRATED BY COMMA ,
4 OBJECT HAS A PROPERTY CALLED AS PROTOTYPE 
5 THE COMBINATION OF KEY AND VALUE IN A OBJECT IS ALSO PROPETRY 
6 METHOD IN OBJECT ARE CREATED WITH HELP FUNCTION 

*/


/*

SYTNAX 

CONST VARIABLE/OBJECTNAME = {

KEY:"VALUE",
KEY_2:"VALUE_2"

}
*/

// NOW A REAL EXAMPLE 

const user_info = {
    name:"vaibhav",
    age:29,
    skills:["html","css","js","cy","pw"],
    hobbies:["coding","reading"]
}

console.log(user_info)

// NON PRIMITIVE DATATYPE HAS 4 OPERATIONS 

/**
 * ADDITION
 * DELETE
 * UPDATE
 * RETRIVE 
 */

// IN OBJECT WE HAVE TWO SYNTAX FOR THIS METHODS

// 1 DOT NOTATION

//2 BARCKET NOTATION 

// WHY 2 NOATATION BEACUSE DOT NOTATATION DOESNT WORK IN LOOPS 

const person = {
  name: "Alex",
  age: 20,
  city: "Mumbai",
  isStudent: true
};

//RETRIVE--> to get the value form object  

//1 DOT
console.log(person.name)


//2 BARCKET 
console.log(person["name"])

//ADD --> adding a key and value to object 

// 1 DOT 

person.email ="Alex@gmail.com"

console.log(person)

// 2 BRACKET 

person["sex"]="Male"

console.log(person)


// UPDATE - to update the key and value in object 

// 1 DOT   -->

person.email="Alex_work@gmail.com"
console.log(person)

//2 BRACKET -->
person["sex"]="M"
console.log(person)


//DELETE  --> remove the key and value from object 

// 1 DOT 
delete person.email

console.log(person)

// BRACKET  

delete person["sex"]

console.log(person)


