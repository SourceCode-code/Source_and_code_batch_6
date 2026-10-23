// ============================================================
// 14 - JAVASCRIPT : SCOPE, VAR, LET, CONST AND HOISTING
// ============================================================

// SECTION 1 -> WHAT IS A VARIABLE ?
// ============================================================

/*
A VARIABLE IS A CONTAINER THAT IS USED TO STORE DATA
*/

// LET , VAR , CONST

// EXAMPLE ->


let name = "siddhant"

/**
 * VAR -> older way of declaring variables (used before ES6 / 2015)
 * 1. can be updated
 * 2. can be re-declared in the same scope
 * 3. gets hoisted (moved to top of its scope during compilation)
 * 4. function scope
 */

var city = "pune"
console.log(city)
var city = "mumbai"   // re-declared -> allowed with var
console.log(city)

// ----------------------------------------------------------
// LET -> newer way (introduced in ES6)
// ----------------------------------------------------------

/*
LET ->
1. block scope
2. cannot be re-declared in the same scope
3. can be updated
*/

let num = 1   // 1

// let num = 2   // error -> cannot re-declare 'let' in same scope

num = 2       // update -> allowed
console.log(num)

// ----------------------------------------------------------
// CONST -> newer way (introduced in ES6)
// ----------------------------------------------------------

/*
CONST ->
1. block scope
2. cannot be re-declared in the same scope
3. cannot be updated (re-assigned)
4. must be initialized at the time of declaration
*/

const PI = 3.14

// PI = 3.14159   // error -> Assignment to constant variable.
// const PI2;     // error -> Missing initializer in const declaration.

const obj = {
    name: "siddhant"
}

obj.name = "sid"      // allowed -> we are changing a PROPERTY, not re-assigning the variable
console.log(obj.name)

/**
 * Why can we update values inside a const object ?
 * Because the object REFERENCE is constant, not the content inside it.
 */

// SECTION 2 -> SCOPE
// ============================================================

/*
Scope defines where a variable can be used or accessed.

1. GLOBAL SCOPE
2. FUNCTION SCOPE  - var
3. BLOCK SCOPE     - let, const
*/

// ----------------------------------------------------------
// 1. GLOBAL SCOPE
// ----------------------------------------------------------

/*
A variable declared OUTSIDE any function or block is called global scope.
NOTE -> this is NOT affected by declaring using var, let or const.
*/

let company = "amazon"

console.log(company)

function print() {
    console.log(company)   // can access global variable inside function
}

print()
console.log(company)



// ----------------------------------------------------------
// 2. FUNCTION SCOPE (var only)
// ----------------------------------------------------------

/*
Variables declared using var inside a function are function-scoped.
They are NOT accessible outside that function.
*/

function print_fun() {
    var value = 100
    console.log(value)   // 100
}

print_fun()
// console.log(value)   // ReferenceError: value is not defined


// ----------------------------------------------------------
// 3. BLOCK SCOPE (let and const)
// ----------------------------------------------------------

{
    let a = 10
    const b = 20

    console.log(a)
    console.log(b)

    // let a = 50   // error -> cannot re-declare 'let' in same scope
    // let b = 200  // error -> cannot re-declare 'const' in same scope
}

let a = 50
let b = 200

console.log(a)
console.log(b)   // this variable name can be reused because it is NOT declared in the same scope




// outside of block, 'a' and 'b' from inside the block are NOT accessible




{
    var error = "show"
}

console.log(error)   // accessible -> var is function-scoped, NOT block-scoped

// ----------------------------------------------------------
// HOISTING
// ----------------------------------------------------------

/*
Hoisting -> JavaScript moves declarations to the top of their scope
during the compilation phase, BEFORE code execution.
*/

// VAR hoisting -> declaration is hoisted, initialization is NOT
console.log("Var hoisting ->", varHoisted)   // undefined (NOT ReferenceError)
var varHoisted = 50

// LET / CONST hoisting -> declaration is hoisted but NOT initialized
// This creates the TEMPORAL DEAD ZONE (TDZ)

// console.log(letHoisted)   // ReferenceError: Cannot access 'letHoisted' before initialization
let letHoisted = 30

// console.log(constHoisted) // ReferenceError: Cannot access 'constHoisted' before initialization
const constHoisted = 40

/**
 * TDZ -> Temporal Dead Zone
 * The time between entering the scope and the actual declaration line
 * where let/const variables exist in memory but cannot be accessed.
 * Accessing them throws a ReferenceError.
 */

// ----------------------------------------------------------
// SHADOWING
// ----------------------------------------------------------

/*
Shadowing -> When a variable declared inside a narrower scope
has the same name as a variable in an outer scope.
The inner variable "shadows" (hides) the outer one within that scope.
*/

let shadow = "global"

function shadowDemo() {
    let shadow = "local"   // shadows the outer 'shadow'
    console.log("Inside function ->", shadow)   // local
}

shadowDemo()
console.log("Outside function ->", shadow)   // global

// Block shadowing
{
    let shadow = "block"
    console.log("Inside block ->", shadow)   // block
}
console.log("After block ->", shadow)   // global

// ----------------------------------------------------------
// var vs let vs const QUICK REVISION
// ----------------------------------------------------------

/*
FEATURE              | var          | let          | const
-----------------------------------------------------------------------
Scope                | Function     | Block        | Block
Re-declare           | Allowed      | Not allowed  | Not allowed
Update / Re-assign   | Allowed      | Allowed      | Not allowed
Hoisting             | Yes (undefined) | Yes (TDZ)  | Yes (TDZ)
Must initialize      | No           | No           | Yes
*/

console.log("\n--- End of Scope Lecture ---")