// ============================================
// 12_ASSIGNMENT -> TOPIC : JS JSON ( + revision of objects, arrays & loops )
// BASED ON : LECTURE/12_json.js  +  THEORY_NOTES/12_JS_JSON.md
//
// HOW TO RUN : open terminal -> node 12_ASSIGNMENT_JS_JSON.js
// RULES -> for every "predict the output" question , FIRST write your answer as a comment
//          BEFORE running the code . then write the code , run it and verify .
//          for every task FIRST write your plan as a comment , THEN write the code and test it .
//
// INTERVIEW RULES -> these 3 habits separate an INTERVIEW answer from a guessed answer :
//          1) PREDICT -> before running ANY JSON.parse / JSON.stringify , write your expected
//             output in a comment first .
//          2) TRY/CATCH -> whenever you parse JSON that might come from an API / file , wrap it
//             in try/catch and write in a comment WHY ( malformed responses must not crash your
//             automation script ) .
//          3) KEYS QUOTED -> remember JSON keys MUST be in double quotes ; object keys do NOT
//             need quotes ( theory notes -> section 3 ) .
// ============================================


// ------------------- SECTION A : JSON BASICS ( CREATE + PARSE + STRINGIFY ) -------------------

//Q1 --> PART A -> declare a JSON string named user_json with at least 5 key:value pairs
//        ( id , name , email , isLoggedIn , points ) -> wrap it in BACKTICKS `
//        PART B -> parse it with JSON.parse() into userObj -> print userObj and userObj.name
//        PART C -> stringify userObj back into user_json_again -> print it
//        HINT -> JSON inside a .js file must be in backticks because it contains double quotes
//        expected -> typeof user_json -> "string" , typeof userObj -> "object"

//Q2 --> PREDICT the output ( write BOTH answers FIRST , then run and verify ) ->
//        let obj = { id: 101 , name: "Rahul" , city: "Mumbai" }
//        let json1 = JSON.stringify( obj )
//        let obj2 = JSON.parse( json1 )
//        console.log( typeof json1 )
//        console.log( obj2.city )
//        HINT -> stringify returns a STRING , parse returns an OBJECT
//        THINK -> write in a comment -> can JSON.stringify() turn a FUNCTION into JSON ?
//                 ( no -> JSON does not support functions -> write what happens )


// ------------------- SECTION B : JSON SYNTAX RULES -------------------

//Q3 --> PREDICT the output ( write ALL 4 answers FIRST , then run and verify ) ->
//        // INVALID JSON examples -> each one will THROW an error in JSON.parse()
//        try { JSON.parse( '{ name: "Sid" }' ) } catch ( e ) { console.log( e.message ) }
//        try { JSON.parse( "{ 'name': 'Sid' }" ) } catch ( e ) { console.log( e.message ) }
//        try { JSON.parse( '{ "name": "Sid", }' ) } catch ( e ) { console.log( e.message ) }
//        try { JSON.parse( '{ "name": "Sid", "age": }' ) } catch ( e ) { console.log( e.message ) }
//        HINT -> rule 5 -> keys must be in DOUBLE quotes ; rule 6 -> no comments / single quotes ;
//                 rule 7 -> no trailing commas ; rule 8 -> no dangling values
//        THINK -> write in a comment -> which of the 4 errors says "Expected property name" ?



// ------------------- SECTION C : STRINGIFY WITH PRETTY-PRINT AND REPLACER -------------------

//Q4 --> convert the BELOW javascript object into JSON -> print the JSON string AND print it
//        pretty-printed ( 2-space indent ) AND print it with a replacer keeping only
//        [ "email" , "isLoggedIn" ]
const car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025,
    color: "Black",
    price: 3500000,
    available: true,
    features: ["Air Conditioning", "Touchscreen Display", "Parking Sensors", "Sunroof"]
}
//        PART A -> let car_json = JSON.stringify( car )  -> print car_json
//        PART B -> console.log( JSON.stringify( car , null , 2 ) )   -> pretty print
//        PART C -> console.log( JSON.stringify( car , [ "brand" , "model" ] ) )  -> replacer
//        HINT -> replacer array KEEPS only the listed keys -> everything else is dropped
//        TEST -> change the replacer to [ "price" , "color" ] and run again



// ------------------- SECTION C : REAL USERS DATA ( API-LIKE EXAMPLE ) -------------------

// the users object is GIVEN below ( same shape as the lecture + the JSON data file )
const users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: "asab@asab.com",
        skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: "daniel@daniel.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: "daniel@alex.com",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: "john@john.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: "paul@paul.com",
        skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

//Q5 --> PART A -> convert the WHOLE users object into JSON -> print it
//        PART B -> convert only ONE user ( Alex ) into JSON -> print it
//        PART C -> extract ONLY email and age for EVERY user into a new object named filter
//                 -> print filter AND stringify it
//        HINT -> loop with for( let key in users ) -> build filter[key] = { email , age }
//        expected ( PART C ) ->
//        { Alex: { email: 'alex@alex.com', age: 20 }, Asab: { email: 'asab@asab.com', age: 25 }, ... }

//Q6 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        console.log( typeof users )
//        console.log( Array.isArray( users ) )
//        console.log( JSON.stringify( users )[0] )
//        HINT -> users is an OBJECT -> typeof "object" , Array.isArray false , JSON starts with "{"
//        THINK -> write in a comment -> if you stringify users and then parse it back ->
//                 do you get the SAME object back ? write YES / NO with a one-line reason



// ------------------- SECTION D : SAFE JSON PARSING ( try/catch ) -------------------

//Q7 --> write a function named safeParse( jsonString ) ->
//        PART A -> try { return JSON.parse( jsonString ) }
//                  catch ( error ) { console.error( "Invalid JSON:" , error.message )
//                                    return null }
//        PART B -> test it with a VALID json string   -> print result
//        PART C -> test it with an INVALID json string -> print result ( should be null )
//        HINT -> wrap EVERY JSON.parse() that touches API / file data in try/catch
//        THINK -> write in a comment -> why must an AUTOMATION script never let JSON.parse()
//                 throw an uncaught error ? ( a malformed API response would crash the whole run )

//Q8 --> PREDICT the output ( write the answer FIRST , then run and verify ) ->
//        let bad = '{ "name": "Sid" "age": 25 }'   // <- missing comma -> INVALID JSON
//        let parsed = safeParse( bad )
//        console.log( parsed )
//        HINT -> safeParse catches the error and returns null -> console.log prints null



// ============================================
// SECTION E : INTERVIEW QUESTIONS ( answer in comments )

//Q9 --> what is the difference between JSON and a JavaScript object ? answer in 3 lines ->
//        ( hint -> keys quoted / string vs live value / parse & stringify )

//Q10 --> why do we wrap JSON data in BACKTICKS when writing it inside a .js file ?
//        answer in 1 line + give an example of what breaks if you use normal quotes

//Q11 --> JSON.parse() vs JSON.stringify() -> which one turns a STRING into an OBJECT and which
//        one turns an OBJECT into a STRING ? give 1 line of code as proof for each

//Q12 --> "delete user[\"age\"] works on a JavaScript object but NOT on JSON" -> explain in 2 lines
//        ( hint -> JSON is a string -> you cannot delete from a string -> parse first )

//Q13 --> the replacer array in JSON.stringify( obj , [ "a" , "b" ] ) -> what does it KEEP and
//        what does it DROP ? write the rule in 1 line

// ============================================
// FINAL STEP -> print users once more and write in a comment which questions above used
//        JSON.stringify / JSON.parse / try/catch
//
// SUBMISSION CHECKLIST
// 1. every PREDICT question has your answer written BEFORE you ran the code
// 2. every Q has its PLAN written as a comment BEFORE the code
// 3. every JSON.parse() that touches outside data is wrapped in try/catch
// 4. every expected output matches the real output ( or the difference is explained )
// 5. ALL the TEST values given in the question were tried
// 6. file runs without any error -> node 12_ASSIGNMENT_JS_JSON.js
// 7. every fixed bug has the REASON of the bug written in a comment
// ============================================
