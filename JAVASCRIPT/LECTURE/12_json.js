// ============================================================
// 12 - JAVASCRIPT : JSON (JAVASCRIPT OBJECT NOTATION)
// ============================================================

// SECTION 1 -> WHAT IS JSON ?
// ============================================================

/**
 * JSON -> JavaScript Object Notation
 * It is a lightweight data-interchange format that is easy for humans to read/write
 * and easy for machines to parse/generate.
 *
 * JSON is text-based and language-independent (used by many programming languages).
 */

/**
 * WHY WAS JSON MADE / PRIMARY USE CASES FOR AN AUTOMATION TESTOR
 * -------------------------------------------------------------------------
 * 1. JSON is used to store test data for automation (test users, payloads, config).
 * 2. JSON is used to send data from client side to server side and vice versa (REST APIs).
 * 3. JSON is the new generation alternative to XML (lighter, faster, easier to parse).
 */

// SECTION 2 -> JSON SYNTAX RULES
// ============================================================

/**
 * JSON RULES ->
 * 1. Data is in name/value pairs ( key : value )
 * 2. Data is separated by commas
 * 3. Curly braces hold objects { }
 * 4. Square brackets hold arrays [ ]
 * 5. BOTH keys AND string values must be wrapped in DOUBLE QUOTES " "
 * 6. No comments allowed in JSON
 * 7. No trailing commas allowed in JSON
 * 8. Numbers must NOT have leading zeros
 */

/*
<?xml version="1.0" encoding="UTF-8"?>
<students>
    <student>
        <id>101</id>
        <name>Rahul</name>
        <age>20</age>
        <course>BCA</course>
        <city>Mumbai</city>
    </student>

    <student>
        <id>102</id>
        <name>Priya</name>
        <age>21</age>
        <course>BBA</course>
        <city>Pune</city>
    </student>
</students>
*/

/*

JSON EXAMPLE

{
  "students": [
    {
      "id": 101,
      "name": "Rahul",
      "age": 20,
      "course": "BCA",
      "city": "Mumbai"
    },
    {
      "id": 102,
      "name": "Priya",
      "age": 21,
      "course": "BBA",
      "city": "Pune"
    }
  ]
}
  */


// SECTION 3 -> DIFFERENCE BETWEEN JSON AND JAVASCRIPT OBJECT
// ============================================================

/* JSON EXAMPLE (notice keys are in double quotes)
{
    "id": 102,
      "name": "Priya",
      "age": 21,
      "course": "BBA",
      "city": "Pune"
    }



    OBJECT EXAMPLE 

    {
    id: 102,
    name: "Priya",
    age: 21,
    course: "BBA",
    city: "Pune"
    }
*/



// SECTION 4 -> CONVERSION OF JSON INTO OBJECT AND VICE VERSA
// ============================================================
/**
 * NOTE -> When declaring JSON data inside a JS file, always wrap it in backticks (` `)
 * because JSON contains double quotes which would conflict with normal string quotes.
 */

// ----------------------------------------------------------
// JSON.parse() -> Convert JSON string into JavaScript Object
// ----------------------------------------------------------

let car_json = `{
    "brand": "Toyota",
    "model": "Fortuner",
    "year": 2025,
    "color": "Black",
    "fuel_type": "Diesel",
    "transmission": "Automatic",
    "seating_capacity": 7,
    "price": 3500000,
    "features": [
      "Air Conditioning",
      "Touchscreen Display",
      "Parking Sensors",
      "Sunroof"
    ],
    "available": true
}`
/* SYNTAX
variablename = JSON.parse(json data)
*/

let car_obj = JSON.parse(car_json)
console.log("Parsed car object:", car_obj)
console.log("Brand:", car_obj.brand)
console.log("Model:", car_obj.model)
console.log("Features:", car_obj.features)

// ----------------------------------------------------------
// JSON.stringify() -> Convert JavaScript Object into JSON string
// ----------------------------------------------------------

const student_OBJ = {
    id: 101,
    name: "Rahul",
    age: 20,
    course: "BCA",
    city: "Mumbai"
}

let json_student_data = JSON.stringify(student_OBJ)
console.log("\nStringified student:", json_student_data)

// ----------------------------------------------------------
// JSON.stringify() with pretty-print (space argument)
// ----------------------------------------------------------

console.log("\nPretty-printed JSON:")
console.log(JSON.stringify(student_OBJ, null, 2))

// ----------------------------------------------------------
// JSON.stringify() with replacer (array of keys to keep)
// ----------------------------------------------------------

let Paul = {
    email: "paul@paul.com",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
    age: 20,
    isLoggedIn: false,
    points: 40
}

// one-line solution -> keep only needed fields
let p_json = JSON.stringify(Paul, ["email", "isLoggedIn"])
console.log("\nReplacer array (email, isLoggedIn only):", p_json)

// (student_OBJ and JSON.stringify examples already covered above)


let users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30,
    },
    Asab: {
        email: "asab@asab.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 25,
        isLoggedIn: false,
        points: 50,
    },
    Brook: {
        email: "daniel@daniel.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50,
    },
    Daniel: {
        email: "daniel@alex.com",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    John: {
        email: "john@john.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50,
    },
    Thomas: {
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    Paul: {
        email: "paul@paul.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
};


// Convert whole users object to JSON
let JSON_EXAMPLE = JSON.stringify(users)
console.log("\nAll users JSON:", JSON_EXAMPLE)


// Convert only ONE user (like extracting a single API response)
console.log("\nSingle user (Alex):", users["Alex"])
let alex_json = JSON.stringify(users["Alex"])
console.log("Alex JSON:", alex_json)


// ----------------------------------------------------------
// Filter -> keep only email and age for every user
// ----------------------------------------------------------

let filter = {}

for (let key in users) {
    filter[key] = {
        email:users[key].email,
        age:users[key].age
    }
}

console.log("\nFiltered object:", filter)







let filter_json = JSON.stringify(filter)
console.log("Filtered JSON:", filter_json)

// SECTION 6 -> SAFE JSON PARSING (TRY/CATCH)
// ============================================================

/**
 * JSON.parse() throws an error if the string is NOT valid JSON.
 * In automation/API testing, always wrap JSON.parse() in try/catch
 * so your script does not crash on malformed API responses.
 */

function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString)
    } catch (error) {
        console.error("Invalid JSON received:", error.message)
        return null
    }
}

// Valid JSON
let valid = safeParse('{"name": "Sid", "age": 25}')
console.log("\nSafe parse valid:", valid)

// Invalid JSON (missing quotes around key)
let invalid = safeParse('{name: "Sid", age: 25}')
console.log("Safe parse invalid:", invalid)

// SECTION 7 -> JSON FILE IN THIS FOLDER
// ============================================================

/**
 * NOTE: This lecture folder also contains 12_B_EXAMPLE_json.json
 * which is a real JSON file version of the users data used above.
 * You can read it with Node's fs module in real automation projects:
 *
 * const fs = require('fs')
 * const data = JSON.parse(fs.readFileSync('./12_B_EXAMPLE_json.json', 'utf8'))
 */
