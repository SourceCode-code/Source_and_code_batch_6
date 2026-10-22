// ============================================================
// 11 - JAVASCRIPT : OBJECTS
// ============================================================

// SECTION 1 -> WHY DO WE NEED AN OBJECT ? ( THE PROBLEM WITH ARRAY )

// AN ARRAY CAN STORE MULTIPLE VALUES BUT THE DATA INSIDE IS NOT DESCRIPTIVE
// WE ONLY KNOW THE INDEX , WE DO NOT KNOW WHAT EACH VALUE ACTUALLY MEANS

let person_info = ["siddhant", "arjun", "gadakh", 27, 7020400749, 25]

console.log(person_info[0])   // "siddhant" -> but WHY is index 0 a name ?
console.log(person_info[4])   // 7020400749 -> phone number ? id number ? UNKNOWN

// MAJOR DRAWBACK -> THE DATA IS NOT DESCRIPTIVE ( NO LABELS / NO KEYS )


// ============================================================
// SECTION 2 -> WHAT IS AN OBJECT ?
// ============================================================

// OBJECT -> THE NON-PRIMITIVE DESCRIPTIVE DATA
// OBJECT STORES DATA IN KEY : VALUE PAIRS ( EXACTLY LIKE A REAL DICTIONARY )

/**
 * 1 -> AN OBJECT IS DECLARED OR IDENTIFIED WITH CURLY BRACES { }
 * 2 -> AN OBJECT ALWAYS STORES DATA AS KEY AND VALUE PAIRS
 * 3 -> EVERY KEY : VALUE PAIR IN AN OBJECT IS SEPARATED BY A COMMA ,
 * 4 -> EVERY OBJECT HAS AN INTERNAL PROPERTY CALLED PROTOTYPE
 * 5 -> THE COMBINATION OF ONE KEY AND ONE VALUE IS CALLED A PROPERTY
 * 6 -> A FUNCTION STORED INSIDE AN OBJECT IS CALLED A METHOD
 *
 * IMPORTANT RULES ->
 * -> KEYS ARE ALWAYS UNIQUE AND BEHAVE LIKE STRINGS
 * -> VALUES CAN BE ANY DATATYPE ( number, string, boolean, array, even another object )
 */


// ============================================================
// SECTION 3 -> SYNTAX OF AN OBJECT
// ============================================================

/*
SYNTAX

const OBJECT_NAME = {
    KEY: "VALUE",
    KEY_2: "VALUE_2",
}

RULES ->
1 -> KEYS AND VALUES ARE SEPARATED BY A COLON :
2 -> EACH PROPERTY IS SEPARATED BY A COMMA ,
3 -> THE LAST PROPERTY DOES NOT NEED A TRAILING COMMA ( BUT JAVASCRIPT ALLOWS IT )
4 -> WE USE const FOR OBJECTS BECAUSE WE DO NOT WANT TO REPLACE THE WHOLE OBJECT
    ( we still CAN change the inside properties -> objects are MUTABLE )
 */


// ============================================================
// SECTION 4 -> REAL EXAMPLE
// ============================================================

const user_info = {
    name: "vaibhav",
    age: 29,
    skills: ["html", "css", "js", "cy", "pw"],
    hobbies: ["coding", "reading"],
}

console.log(user_info)

// HOW TO CHECK THE DATATYPE OF AN OBJECT ?

console.log(typeof user_info)          // "object"  -> an object gives "object"
console.log(Array.isArray(user_info))  // false     -> but an object is NOT an array

// ACCESSING NESTED DATA ( AN ARRAY STORED INSIDE AN OBJECT )

console.log(user_info.skills[0])   // "html"   -> BRACKET + INDEX because skills is an array
console.log(user_info.hobbies[1])  // "reading"


// ============================================================
// SECTION 5 -> THE 4 OPERATIONS ON AN OBJECT ( CRUD )
// ============================================================

/**
 * EVERY NON-PRIMITIVE DATATYPE SUPPORTS 4 OPERATIONS
 *
 * RETRIEVE -> get / read a value
 * ADD      -> add a new key and value
 * UPDATE   -> change an existing value
 * DELETE   -> remove a key and value
 */

// IN AN OBJECT WE HAVE TWO SYNTAXES FOR ALL 4 OPERATIONS

// 1 -> DOT NOTATION       obj.key
// 2 -> BRACKET NOTATION   obj["key"]

/*
 * WHY DO WE NEED 2 NOTATIONS ?
 * BECAUSE DOT NOTATION CANNOT WORK WITH DYNAMIC KEYS ( VARIABLES )
 * INSIDE A LOOP THE KEY KEEPS CHANGING , SO WE MUST USE BRACKET NOTATION
 *
 * obj.key   -> use when the key is written directly in the code
 * obj[key]  -> use when the key is stored inside a variable ( loops )
 */

const person = {
    name: "Alex",
    age: 20,
    city: "Mumbai",
    isStudent: true,
}

// ------------------------------------------------------------
// 5.1 -> RETRIEVE -> to get the value from the object
// ------------------------------------------------------------

// 1 DOT
console.log(person.name)      // "Alex"

// 2 BRACKET
console.log(person["name"])   // "Alex"

// RETRIEVING A KEY THAT DOES NOT EXIST GIVES undefined ( NOT AN ERROR )
console.log(person.salary)      // undefined
console.log(person["salary"])   // undefined

// ------------------------------------------------------------
// 5.2 -> ADD -> adding a new key and value to the object
// ------------------------------------------------------------

// 1 DOT
person.email = "Alex@gmail.com"
console.log(person)

// 2 BRACKET
person["sex"] = "Male"
console.log(person)

// ------------------------------------------------------------
// 5.3 -> UPDATE -> updating an existing key and value
// ------------------------------------------------------------

// 1 DOT
person.email = "Alex_work@gmail.com"
console.log(person)

// 2 BRACKET
person["sex"] = "M"
console.log(person)

// ------------------------------------------------------------
// 5.4 -> DELETE -> removing a key and value
// ------------------------------------------------------------

// 1 DOT
delete person.email
console.log(person)

// 2 BRACKET
delete person["sex"]
console.log(person)

// NOTE -> delete RETURNS true / false ( whether the property was actually removed )

// ============================================================
// SECTION 6 -> HOW TO CHECK IF A KEY EXISTS IN AN OBJECT ?
// ============================================================

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2024,
    color: "Black",
    price: 25000,
    fuelType: "Petrol",
    isElectric: false,
}

// 1 -> THE in OPERATOR
console.log("brand" in car)     // true
console.log("mileage" in car)   // false

// 2 -> hasOwnProperty() ( the classic way )
console.log(car.hasOwnProperty("isElectric"))   // true

// 3 -> Object.hasOwn() ( the modern way - ES2022 )
console.log(Object.hasOwn(car, "isElectric"))   // true


// ============================================================
// SECTION 7 -> LOOPS IN AN OBJECT ( for ... in )
// ============================================================

// SYNTAX OF AN ARRAY LOOP ( revision )

// for (let i = 0; i < array_name.length; i++) {
//     // code -> array_name[i]
// }

// SYNTAX OF AN OBJECT LOOP

/*
 * for (let key in object_name) {
 *     // code -> object_name[key]
 * }
 *
 * IMPORTANT -> for ... in gives the KEYS ( not the values )
 * we MUST use BRACKET NOTATION with the key to get the value
 */

for (let key in car) {
    // console.log(car[key])

    console.log(`${key} -> ${car[key]}`)
}

// NOTE -> for ... of DOES NOT WORK DIRECTLY ON A PLAIN OBJECT
//         ( it only works on ITERABLES like array and string )


// ============================================================
// SECTION 8 -> METHODS IN AN OBJECT ( A FUNCTION INSIDE AN OBJECT )
// ============================================================

// A FUNCTION STORED AS A PROPERTY IS CALLED A METHOD

const student = {
    firstName: "Vihaan",
    lastName: "Mehta",
    age: 28,

    // METHOD 1 -> normal function expression ( CAN use "this" )
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },

    // METHOD 2 -> shorthand syntax ( ES6 -> same result , cleaner )
    greet() {
        return `Hello ${this.firstName}`
    },
}

console.log(student.fullName())   // "Vihaan Mehta"
console.log(student.greet())      // "Hello Vihaan"

/*
 * "this" -> refers to the CURRENT OBJECT ( the object written before the dot )
 * student.greet() -> inside greet , "this" = student
 */


// ============================================================
// SECTION 9 -> BUILT-IN OBJECT METHODS ( METHODS OF THE Object CLASS )
// ============================================================

// ------------------------------------------------------------
// Object.assign() -> COPY properties from one object into another
// ------------------------------------------------------------
// ( copy - paste ) -> the original object is NOT changed
// Object.assign({}, source) -> creates a SHALLOW COPY of the source

let Toyota_Camry = Object.assign({}, car)
console.log(Toyota_Camry)

// IMPORTANT -> Object.assign() creates a SHALLOW COPY
// if the object has a NESTED array / object , the copy still SHARES the same reference

// THE MODERN ALTERNATIVE -> SPREAD OPERATOR ...

let Toyota_Camry_2 = { ...car }
console.log(Toyota_Camry_2)

// ------------------------------------------------------------
// Object.keys() -> gets all the KEYS of the object as an ARRAY
// ------------------------------------------------------------

let Toyota_Camry_keys = Object.keys(Toyota_Camry)
console.log(Toyota_Camry_keys)

// ------------------------------------------------------------
// Object.values() -> gets all the VALUES of the object as an ARRAY
// ------------------------------------------------------------

let Toyota_Camry_values = Object.values(Toyota_Camry)
console.log(Toyota_Camry_values)

// ------------------------------------------------------------
// Object.entries() -> gets each [ key , value ] pair as an ARRAY of arrays
// ------------------------------------------------------------

let Toyota_Camry_entries = Object.entries(Toyota_Camry)
console.log(Toyota_Camry_entries)

// ------------------------------------------------------------
// Object.freeze() -> makes the object READ-ONLY ( cannot add / update / delete )
// ------------------------------------------------------------

const frozen_brand = Object.freeze({ name: "Toyota", country: "Japan" })

frozen_brand.name = "Honda"        // silently fails ( no error in non-strict mode )
console.log(frozen_brand.name)     // still "Toyota"

// Object.seal() -> cannot ADD or DELETE properties , but CAN update existing values

// ============================================================
// SECTION 10 -> OBJECTS ARE COMPARED BY REFERENCE ( NOT BY VALUE )
// ============================================================

const obj_1 = { name: "Alex" }
const obj_2 = { name: "Alex" }

console.log(obj_1 == obj_2)    // false -> same CONTENT but different MEMORY LOCATION
console.log(obj_1 === obj_2)   // false -> same reason

// TWO VARIABLES CAN POINT TO THE SAME OBJECT ( THE SAME REFERENCE )

const obj_3 = obj_1
obj_3.name = "Rohan"

console.log(obj_1.name)   // "Rohan" -> BOTH variables share ONE object in memory


// ============================================================
// SECTION 11 -> DESTRUCTURING -> UNPACK VALUES IN ONE LINE
// ============================================================

const user = {
    name: "Rohan",
    age: 29,
    city: "Pune",
}

// OLD WAY -> one by one
const old_name = user.name
const old_age = user.age

// DESTRUCTURING WAY -> in one line
const { name: u_name, age: u_age, city } = user

console.log(old_name, old_age)       // "Rohan" 29
console.log(u_name, u_age, city)     // "Rohan" 29 "Pune"

// DEFAULT VALUE -> if the key is missing , the default value is used
const { job = "Tester" } = user
console.log(job)   // "Tester" -> user has no "job" key , so the default runs


// ============================================================
// SECTION 12 -> PRACTICE -> ARRAY OF OBJECTS
// ============================================================

const profiles = [
    {
        firstName: "Vihaan",
        lastName: "Mehta",
        age: 28,
        experience: 6,
        skills: ["TypeScript", "CI/CD"],
        position: "Automation Tester",
    },
    {
        firstName: "Rohan",
        lastName: "Joshi",
        age: 29,
        experience: 11,
        skills: ["TypeScript", "JavaScript", "Cypress", "Docker"],
        position: "Technical Lead",
    },
    {
        firstName: "Vihaan",
        lastName: "Deshmukh",
        age: 32,
        experience: 1,
        skills: ["Python", "TypeScript"],
        position: "Software Engineer",
    },
    {
        firstName: "Ishaan",
        lastName: "Pandey",
        age: 31,
        experience: 14,
        skills: ["Python", "Cypress"],
        position: "Systems Engineer",
    },
    {
        firstName: "Ishaan",
        lastName: "Deshmukh",
        age: 25,
        experience: 1,
        skills: ["Java", "Playwright", "JavaScript", "SQL"],
        position: "Systems Engineer",
    },
    {
        firstName: "Rohan",
        lastName: "Joshi",
        age: 33,
        experience: 3,
        skills: ["JavaScript", "Java", "Docker", "TypeScript"],
        position: "Full-Stack Developer",
    },
    {
        firstName: "Pranav",
        lastName: "Joshi",
        age: 24,
        experience: 2,
        skills: ["JavaScript", "GitHub Actions", "Playwright", "TypeScript"],
        position: "Data Analyst",
    },
    {
        firstName: "Rohan",
        lastName: "Nayak",
        age: 24,
        experience: 10,
        skills: ["JavaScript", "GitHub Actions", "Playwright"],
        position: "Backend Developer",
    },
    {
        firstName: "Arjun",
        lastName: "Nayak",
        age: 36,
        experience: 4,
        skills: ["Java", "Playwright", "Docker"],
        position: "Systems Engineer",
    },
    {
        firstName: "Vikram",
        lastName: "Joshi",
        age: 34,
        experience: 1,
        skills: ["python"],
        position: "Full-Stack Developer",
    },
];


// REVISION -> HOW WE LOOP OVER AN ARRAY

let ar = ["A", "B", "C", "D"]

for (let i = 0; i < ar.length; i++) {
    console.log(ar[i])
}


// Q -> FROM THE ABOVE DATA PRINT THE NAME OF ALL USERS

// APPROACH 1 -> normal loop ( BRACKET NOTATION with the dynamic index )
for (let i = 0; i < profiles.length; i++) {
    console.log(`${profiles[i]["firstName"]} ${profiles[i]["lastName"]}`)
}

// APPROACH 2 -> forEach()
profiles.forEach((el, index, arr) => {
    console.log(`${el.firstName} ${el.lastName}`)
})


// Q -> PRINT THE NAMES OF THE CANDIDATES WHO HAVE "Python" IN THEIR SKILLS

console.log("____________________________________________________________")

profiles.forEach((el, index, arr) => {
    if (el.skills.includes("Python")) {
        console.log(`${el.firstName} ${el.lastName}`)
    }
})

/*
 * CASE SENSITIVITY -> "Python" and "python" are TWO DIFFERENT strings
 * the last profile ( Vikram Joshi ) has "python" in LOWERCASE
 * so includes("Python") will NOT match that profile
 *
 * FOR A CASE-INSENSITIVE CHECK ->
 */

profiles.forEach((el) => {
    const hasPython = el.skills.some((skill) => skill.toLowerCase() === "python")
    if (hasPython) {
        console.log(`${el.firstName} ${el.lastName}`)
    }
})
