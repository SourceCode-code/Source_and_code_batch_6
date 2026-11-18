// WHAT IS VARIBLE ? 
/**
 * its is cointainer that is used to store data 
 */


let x = 10
let y = 30


// mathmetical 

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)


// now calcauylte for 

let z = 50
let w = 100



// FUNCTIONS -> FUNCTION IS CONTAINER THAT IS USED TO STORE YOUR CODE 

// WHY TO USE IT -> 
// CODE MAGNAGEABLE 
// THERE NO REPEATION 
// IT AVOID SYNTAX MISTAKES 
// IT WILL MAKE YOU DYNAMIC 


// SYNTAX FUNCTION OF FUNCTION 


/**
 * 
 * function functionname(parameters){
 * // logics steps
 * }
 * 
 * 
 * how to call or use the function 
 * 
 * functionname(parameter)
 * 
 * 
 */


function calci(x,y) {

    console.log(x+y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
    console.log(x ** y)
}

calci(100,50)
calci(2,10)
calci(2,2)


// there are total 6 functions in js  and they are classifed  on 2 major catoregy 

// 1 on the basis of wrting 

/*
1 delecrative type 
2 expression type 
3 arrow function 
*/

// basis paramter 
/*
1 with parameter without retrun type 
2 without parameter without retrun type
3 with parameter with retrun type

*/




// program 2 -> find the number of words in the string WITHOUT using any method

//let count_str = "hello my name is siddhant and i am a mentor for automation"




console.log("____________________________________________")
function space_count(count_str){
    let word_count = 0 // words = number of spaces + 1 -> so the count starts from 1
for (let i = 0; i < count_str.length; i++) {
    if (count_str[i] === " ") {
        word_count++ // every space means one more word starts after it
    }
    // console.log(word_count)
}
console.log(word_count) // 12
}


space_count("hello my name is siddhant and i am a mentor for automation")
space_count("hello world")






// function classfied on the basis of writing 

//1 DELECRATIVE FUNCTION -> HERE WE DELACRE THE NAME OF THE FUNCTION WHILE CRAETING IT AND SO IT IS CALLED AS DELECRTIVE FUNCTION

//SYNTAX

function sayHello(){
    console.log("hello!")
}


sayHello()


// 2 Expression type function -> because a function is stored in a varaible that is why this is called exprfession function 

//beacuse that varaible expresses the function  

//SYNTAX 

let printName =function (name){
    return name 
}

let a =printName("sid")
console.log(a)



// 3 ARROW TYPE FUNCTION -> because this function uses arrow instead of the keyword function 


let bye = ()=>{
    console.log("bye")
}


bye()


// calssfication on basis of parameters 

// 1 without parameter without return type 


function fullname(){
    console.log("siddhant")
}

fullname()

fullname()

// 2 with parameter without retrun type 

function cal(num1,num2){
    console.log(num1+num2)
    console.log(num1-num2)
    console.log(num1*num2)
}



cal(10,2)
cal(20,5)


// with parameter with retrun type 

// return type -> a function with a return type have a special usecase where i can store the output of the function in a varibale and then further use it 

//NOTE :- WHEN EVER THERE IS FUNCTION WHICH HAS A RETURN TYPE WORD KEYWORD  YOU CAN NOT USE CONSOLE.LOG( ) IN THAT FUNCTION { with curly braces }

// SYNATX 

function add(num1,num2){
    return  num1+num2
}

let q = add(2,3)

console.log(q+10)
console.log(q+q)



// note :- function parameters can be anything any data type



