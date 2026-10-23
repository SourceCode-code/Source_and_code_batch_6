// ============================================================
// 13 - JAVASCRIPT : DESTRUCTURING
// ============================================================
// SECTION 1 -> WHAT IS DESTRUCTURING ?
// ============================================================

/**
 * Destructuring -> Extracting values from arrays or objects and storing them
 * into variables is called destructuring.
 *
 * It lets you unpack data quickly instead of accessing each item by index or key.
 */

// WITHOUT destructuring (the old / long way)
let array = [1, 2, 3]

let num_1 = array[0]
let num_2 = array[1]
let num_3 = array[2]

console.log(num_1)
console.log(num_2)
console.log(num_3)

// SYNTAX ->
/*
let [variable_a, variable_b, variable_c] = arrayName
*/

// SECTION 2 -> ARRAY DESTRUCTURING
// ============================================================

let array_ex_2 = ["mango", "apple", "kiwi"]

let [fruit1, fruit2, fruit3] = array_ex_2

console.log(fruit2)
console.log(fruit3)
console.log(fruit1)

// ----------------------------------------------------------
// Skipping values (holes)
// ----------------------------------------------------------

let name_array = ["sid", "amol", "oleg", "ram"]

// destructuring as a whole
let [name_1, name_2, name_3] = name_array

console.log(name_1)
console.log(name_2)

// skipping middle values -> only grab 1st and 4th
let [n1, , , n4] = name_array

console.log(n1)
console.log(n4)

// ----------------------------------------------------------
// Nested array destructuring
// ----------------------------------------------------------

let fullstack = [["html", "css", "js", "react", "angular"], ["mongodb", "java", "springboot", "python"]]

// destructure into 2 arrays -> first is front end, second is back end
let [frontEnd, backEnd] = fullstack

console.log(frontEnd)
console.log(backEnd)

// deeper nesting -> grab specific elements from each sub-array
let [[f1, f2, f3, f4, f5], [b1, b2, b3, b4]] = fullstack

console.log(f1)
console.log(b4)

// ----------------------------------------------------------
// Rest operator with array destructuring (...rest)
// ----------------------------------------------------------

let number_ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// spread operator -> grab first two, rest goes into an array
let [a, b, ...rest] = number_ar

console.log(a)
console.log(b)
console.log(rest)


// ----------------------------------------------------------
// Default values (if value is undefined)
// ----------------------------------------------------------

let [x = 100, y = 200] = [10]
console.log("Default values -> x:", x, "y:", y)

// ----------------------------------------------------------
// Swapping variables without a temp variable
// ----------------------------------------------------------

let p = 10
let q = 20

// Swap using a temporary variable
let temp = p
p = q
q = temp

console.log("After swap -> p:", p, "q:", q)

/**
 * Why is object destructuring needed ?
 * - API response handling
 * - React props
 * - Automation frameworks (config / test data)
 */






let object = {
    xx: 1,
    yy: 2,
    zz: 3
}

// DESTRUCTURING SYNTAX ->
// NOTE -> VARIABLE NAME MUST MATCH THE KEY

// let {key1, key2, key3} = obj
console.log("___________________________________")

let { xx, yy, zz } = object
console.log(xx)
console.log(zz)

// ----------------------------------------------------------
// Renaming variables (alias)
// ----------------------------------------------------------

let { xx: m, yy: n, zz: o } = object

console.log(m)


//nested object

// ----------------------------------------------------------
// Default values for object destructuring
// ----------------------------------------------------------

let { country = "India", city = "Pune" } = { city: "Mumbai" }
console.log("Default object values -> country:", country, "city:", city)

// ----------------------------------------------------------
// Nested object destructuring
// ----------------------------------------------------------

let user = {
    email: "asab@asab.com",
    skills: ["HTML", "CSS", "JavaScript"]
}

let { email, skills } = user
let { email: em, skills: [sk1, sk2, sk3] } = user

console.log(email)
console.log(skills)

console.log(em)
console.log(sk3)

// ----------------------------------------------------------
// API RESPONSE example
// ----------------------------------------------------------

let RESPONSE = {
    status: 200,
    data: {
        username: "sid",
        password: "qwedr321113"
    }
}

let { status, data } = RESPONSE

console.log(data)

// SECTION 4 -> OBJECT REST / SPREAD (PICK / OMIT)
// ============================================================

/**
 * Rest syntax (...) -> collect remaining properties into a new object
 * Spread syntax (...) -> copy / merge properties into a new object
 */

let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025,
    color: "Black",
    price: 3500000
}

// PICK -> extract brand and model, rest goes into remaining object
let { brand, model, ...remaining } = car

console.log("\nPick -> brand:", brand, "model:", model)
console.log("Remaining ->", remaining)

// OMIT -> create a new object without brand and model
let { brand: _, model: _2, ...carWithoutBrandModel } = car
console.log("Omit ->", carWithoutBrandModel)

// ----------------------------------------------------------
// SPREAD -> merge / copy objects
// ----------------------------------------------------------

let baseConfig = { browser: "chrome", headless: true }
let envConfig = { url: "https://example.com", timeout: 5000 }

let mergedConfig = { ...baseConfig, ...envConfig }
console.log("\nMerged config ->", mergedConfig)

// SECTION 5 -> DESTRUCTURING FUNCTION PARAMETERS
// ============================================================

/**
 * Very common in React props and automation frameworks.
 * Instead of passing a whole object, destructure it directly in parameters.
 */

function printUserInfo({ name, age, city }) {
    console.log(`User: ${name}, Age: ${age}, City: ${city}`)
}

let userInfo = { name: "Siddhant", age: 27, city: "Pune" }
printUserInfo(userInfo)

// With default values in parameters
function connectBrowser({ browser = "chrome", headless = false } = {}) {
    console.log(`Connecting browser: ${browser}, headless: ${headless}`)
}

connectBrowser({ browser: "firefox", headless: true })
connectBrowser()

// SECTION 6 -> INTERVIEW / QUICK EXAMPLES
// ============================================================

let array_a = [1, 2, 3, 4]
let array_b = [5, 6, 7, 8]

// concat two arrays without using any method or loops (spread)
console.log("\nConcat without methods:", [...array_a, ...array_b])

