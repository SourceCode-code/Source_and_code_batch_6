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


function calci(x, y) {

    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
    console.log(x ** y)
}

calci(100, 50)
calci(2, 10)
calci(2, 2)


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
function space_count(count_str) {
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

function sayHello() {
    console.log("hello!")
}


sayHello()


// 2 Expression type function -> because a function is stored in a varaible that is why this is called exprfession function 

//beacuse that varaible expresses the function  

//SYNTAX 

let printName = function (name) {
    return name
}

let a = printName("sid")
console.log(a)

// 3 ARROW TYPE FUNCTION -> because this function uses arrow instead of the keyword function 


let bye = () => {
    console.log("bye")
}


bye()


// calssfication on basis of parameters 

// 1 without parameter without return type 


function fullname() {
    console.log("siddhant")
}

fullname()

fullname()

// 2 with parameter without retrun type 

function cal(num1, num2) {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
}



cal(10, 2)
cal(20, 5)


// with parameter with retrun type 

// return type -> a function with a return type have a special usecase where i can store the output of the function in a varibale and then further use it 

//NOTE :- WHEN EVER THERE IS FUNCTION WHICH HAS A RETURN TYPE WORD KEYWORD  YOU CAN NOT USE CONSOLE.LOG( ) IN THAT FUNCTION { with curly braces }

// SYNATX 

function add(num1, num2) {
    return num1 + num2
}

let q = add(2, 3)

console.log(q + 10)
console.log(q + q)



// note :- function parameters can be anything any data type



// Examples of usecases of function 

// Write a function to get me the largest and smallest number in the given array based upon parameter given 


function GET_VALUE(array, neededvalue) {
    let min = Math.min(...array)
    let max = Math.max(...array)

    if (neededvalue.toLowerCase() === "min") {
        console.log(min)
    }
    else if (neededvalue.toLowerCase() === "max") {
        console.log(max)
    }
    else {
        console.log("enter correct parameter ")
    }
}


GET_VALUE([42, 7, 89, 13, 56, 91, 24, 68, 3, 75], "min")


// let numar = [42, 7, 89, 13, 56, 91, 24, 68, 3, 75]

// console.log(Math.min(...numar))
// console.log(Math.max(...numar))


// vowels counting in a string 

function count_vowel(string) {
    console.log(string.match(/[aeiou]/gi).length)
}
//36


count_vowel('The curious little fox wandered through the forest, searching for a magical place where the stars touched the trees."')



// what a function can have unlimted number of parameters 

function get_sum(...numbers) {
    let total = 0
    for (let n = 0; n < numbers.length; n++) {
        total += n
    }
    return total

}


console.log(get_sum(0, 1, 2))

console.log(get_sum(0, 1, 2, 3, 4, 5, 6, 7, 8, 9))


// write function which retrun me sperate even and odd array 


function sperate_even_odd(array) {

    let even = []
    let odd = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even.push(array[i])
        }
        else {
            odd.push(array[i])
        }
    }
    return {
        even_numbers: even,
        odd_numbers: odd
    }

}


console.log(sperate_even_odd([42, 7, 89, 13, 56, 91, 24, 68, 3, 75]))