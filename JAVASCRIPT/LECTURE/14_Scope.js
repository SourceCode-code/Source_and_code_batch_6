// WHAT IS VARAIBLE ? 
/*
A VARAIBLE IS CONTAINER THAT IS USED TO STORE DATA 
*/

// LET , VAR , CONST 

// EXAMPLE ->

let name = "siddhant"

/**
 * VAR -> VAR IS OLDER OF DELCARING a varaibles ( it was used before 2014) 
 * can be updated 
 * can be re-delcared 
 * get hoisted 
 * function scope 
 */

var city = "pune"
console.log(city)
var city = "mumbai"
console.log(city)


/*
Let -> It newer way to delcare the variable (introduce in es6)

1 its a block scope variable 
2 cannot be redlecared in same scope 
3 can be updated 



let num=1 // 1

let num =2 // error 
*/

/*
CONST ->  its newer way to delacre constant 

1 block scope 
2 cannot be redlecared in same scope 
3 cannot be updated 

*/


const obj = {
    name: "siddhant"
}

obj.name = "sid"

console.log(obj.name)

// why is it that after delcaring by const we can update value in object 
// because the object refernce is constant , not the content 


//SCOPE -> 
// scopes defines where a varibale can used or access 

/*
1 GOBAL SCOPE 
2 FUNCTION SCOPE  - VAR
3 BLOCK SCOPE - LET CONST 
*/


// 1 GOBAL SCOPE -> A VARAIBLE THAT IS DELACRED OUTSIDE OF ANY FUNCTION OR BLOCK IS CALLED AS GOBAL SCOPE 
// NOTE THIS DOESNT AFFECT BY DELACRING USING VAR LET OR COSNT

let company = "amazon"

console.log(company)

function print() {
    console.log(company)
}

print()

console.log(company)



// 2 FUNCTION SCOPE -> variables delecared using var in the function are called function scope


function print_fun() {
    var value = 100
    console.log(value)
}

print_fun()
// console.log(value)

//ReferenceError: value is not defined

// outside of function this varible is not accessbile 


// 3 BLOCK SCOPE -> variables delecared using let and const in the block are called block scope

{
    let a = 10
    const b = 20

    console.log(a)
    console.log(b)

    // let a= 50
    // let b = 200 thorwing error cannot redelcare
}

let a = 50
let b = 200

console.log(a)
console.log(b) // this varibale name can be reused because it has not been delcared in the same scope  

// console.log(a)
// //ReferenceError: a is not defined
// console.log(b)
// //ReferenceError: b is not defined


// outside of block this varible is not accessbile 




{
    var error = "show"
}

console.log(error)


// beacause var is function scope 

// hoisting  ->
// shadowing ->