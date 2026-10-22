// ============================================
// 11_ASSIGNMENT -> TOPIC : JS OBJECTS ( + revision of arrays & loops )
// BASED ON : LECTURE/11_object.js  +  THEORY_NOTES/11_JS_Object.md
//
// HOW TO RUN : open terminal -> node 11_ASSIGNMENT_JS_OBJECT.js
// RULES -> for every "predict the output" question , FIRST write your answer as a comment
//          BEFORE running the code . then write the code , run it and verify .
//          for every task FIRST write your plan as a comment , THEN write the code and test it .
//          an OBJECT stores descriptive data as KEY : VALUE pairs -> whenever you touch one ,
//          write in a comment WHICH key you are reading / changing ( notes -> section 7 CRUD ) .
//
// INTERVIEW RULES -> these 3 habits separate an INTERVIEW answer from a guessed answer :
//          1) PREDICT -> before running ANY object code , write your expected output in a
//             comment .
//          2) COPY vs REFERENCE -> before changing an object , write in a comment ->
//             is this a NEW copy ( { ...obj } ) or the SAME object under a new name ? ( notes 13 )
//          3) DYNAMIC KEYS -> whenever a key comes from a VARIABLE / loop ,
//             write in a comment -> dot notation CANNOT be used here ( notes -> section 7 )
// ============================================


// ------------------- SECTION A : OBJECT BASICS ( CREATE + ACCESS + CRUD ) -------------------

//Q1 --> PART A -> declare an object named studentRecord with AT LEAST 6 properties where you use
//                 2 strings , 1 number , 1 boolean , 1 array of skills and 1 NESTED object
//                 ( example shape -> { name , age , isLive , skills: [...] , address: { city , pin } } )
//        PART B -> print the whole object , typeof studentRecord , Array.isArray( studentRecord )
//        PART C -> print the FIRST skill and the LAST skill ( the last one MUST use length - 1 )
//        PART D -> print the nested value studentRecord.address.city  and  studentRecord.salary
//        expected -> typeof -> "object"  ,  Array.isArray -> false  ,
//                    studentRecord.salary -> undefined ( NEVER an error )
//        HINT -> syntax rules -> notes section 3 ; nested access -> notes section 6 ;
//                 a MISSING key gives undefined ( notes section 6 -> the missing key rule )

//Q2 --> PREDICT the output ( write ALL 5 answers FIRST , then run and verify ) ->
//        const person = {
//            name: "Alex",
//            age: 20,
//            city: "Mumbai",
//            "full name": "Alex Kumar",
//        }
//        console.log(person.name)
//        console.log(person["name"])
//        let k = "city"
//        console.log(person.k)             // <- THE TRAP
//        console.log(person[k])
//        console.log(person["full name"])
//        HINT -> person.k looks for a key whose LITERAL name is "k" -> it does NOT read the
//                 variable k -> dot notation can NEVER use variables ( lecture section 5 ,
//                 notes -> section 7 -> dot vs bracket table )
//        THINK -> write in a comment -> which of the 6 keys can ONLY be read with brackets ?
//                 ( the one with the SPACE -> and every dynamic key inside a loop )

//Q3 --> THE 4 OPERATIONS ( CRUD ) on the SAME starter object -> use BOTH notations ->
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2024,
    color: "Black",
    price: 25000,
    fuelType: "Petrol",
    isElectric: false,
}
//        1 RETRIEVE -> print car.brand with DOT and car["brand"] with BRACKET ( both -> "Toyota" )
//        2 ADD      -> car.email = "toyota@toyota.com"   ( DOT )   and   car["seats"] = 5 ( BRACKET )
//        3 UPDATE   -> car.price = 24000   ( DOT )   and   car["color"] = "White"   ( BRACKET )
//        4 DELETE   -> delete car.email    ( DOT )   and   delete car["seats"]      ( BRACKET )
//        print the object after EVERY step ( 4 prints ) AND print the RETURN VALUE of delete
//        expected -> delete returns -> true   ( notes -> section 7 -> delete returns true / false )
//        TEST -> after step 4 the object must hold EXACTLY the 7 starter keys again ->
//                 print Object.keys( car ).length  -> expected -> 7
//                 ( Object.keys() -> notes -> section 11 )

// ------------------- SECTION B : KEY EXISTS + LOOPS ON AN OBJECT -------------------

//Q4 --> check if a key exists in the SAME car object ( from Q3 ) -> use ALL 3 ways ->
//        PART A -> "brand" in car          and   "mileage" in car
//        PART B -> car.hasOwnProperty( "isElectric" )   and   Object.hasOwn( car , "isElectric" )
//        PART C -> car.mileage     ( direct value access -> what comes ? )
//        expected -> true , false , true , true , undefined
//        THINK -> car.mileage gives undefined BUT "mileage" in car gives false ->
//                 write in a comment WHY both answers are correct AND different
//                 ( value access vs key existence -> notes -> section 8 )
//        TEST -> add car.mileage = 18 , then re-run PART A and PART C ->
//                 "mileage" in car now gives ______ and car.mileage gives ______
//        HINT -> NEVER use ( car.mileage !== undefined ) as an existence check ->
//                 a key can exist WITH the value undefined -> write this trap in a comment

//Q5 --> LOOP over the object with for...in ->
//        PART A -> print every property of car in the format -> brand -> Toyota   ( one per line )
//        PART B -> print HOW MANY properties car has ( objects have NO .length ! )
//        expected -> 7 lines of output  and  count -> 7
//        HINT -> for...in gives the KEYS -> the value only with BRACKET car[key]
//                 ( notes -> section 9 -> the golden rule of for...in )
//                 the count -> Object.keys( car ).length  ( notes -> section 11 )
//        THINK -> write in a comment -> why does .length NOT exist on an object at all ?
//                 ( length belongs to ARRAYS and STRINGS -> an object only knows its own keys -> notes 9 )

//Q6 --> PREDICT FIRST ( runs or ERRORS ? ) , write the answer , then TEST it ->
//        // for (const k of car) { console.log(k) }
//        UNCOMMENT the line above , run the file -> write down the EXACT error message ,
//        then COMMENT IT AGAIN so the file runs clean , and fix the loop with for...in
//        HINT -> for...of works only on ITERABLES ( array , string ... ) -> a plain object is
//                 NOT iterable -> notes -> section 9 -> the for...of row of the table
//        THINK -> for...in -> KEYS of an object | for...of -> VALUES of an array ->
//                 write both in one comment line ( this is a favourite interview pair )


// ------------------- SECTION C : METHODS IN AN OBJECT ( FUNCTION + this ) -------------------

//Q7 --> PART A -> the starter object is GIVEN below -> print student.fullName() and student.greet()
const student = {
    firstName: "Vihaan",
    lastName: "Mehta",
    age: 28,

    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },

    greet() {
        return `Hello ${this.firstName}`
    },
}
//        PART B -> ADD your own METHOD named isAdult to the SAME object -> it must RETURN true
//                  when this.age >= 18 -> use the shorthand greet() { ... } style
//                  ( objects are MUTABLE -> adding a method later is allowed -> notes section 3 )
//                  expected -> student.isAdult() -> true
//        PART C -> PREDICT then verify -> let f = student.greet ;  console.log( f() )
//                  expected -> Hello undefined   -> write in a comment WHY
//                  ( f() has NO object before the dot -> this is no longer the student object
//                    -> notes -> section 10 -> "this = the object before the dot" )
//        THINK -> write in a comment -> why must a method be CALLED with the dot ( or brackets )
//                 student["greet"]() also works -> try it

// ------------------- SECTION D : BUILT-IN OBJECT METHODS ( keys / values / entries / COPY / FREEZE ) -------------------

//Q8 --> inspect the SAME car object with the 3 built-in methods ->
//        PART A -> Object.keys( car )   -> print the array of KEYS     ( first key -> brand )
//        PART B -> Object.values( car ) -> print the array of VALUES   ( first value -> "Toyota" )
//        PART C -> Object.entries( car ) -> print the pairs -> the FIRST entry must be
//                  [ 'brand', 'Toyota' ] -> then print ONLY the keys from the entries with a loop
//                  ( each entry is an ARRAY [ key , value ] -> entry[0] is the key )
//        expected -> keys.length -> 7  ,  entries.length -> 7
//        HINT -> all 3 return ARRAYS -> so .length , loops and for...of ALL work on them
//                 ( notes -> section 11 ) -> for...of failed on the OBJECT in Q6 but works HERE
//                 -> write in a comment WHY ( the result of Object.entries() is an ARRAY )

//Q9 --> COPY vs REFERENCE ( interview favourite ) ->
//        PART A -> make 2 copies of car and prove the original is untouched ->
//                  let carCopy = Object.assign( {} , car )        // old way
//                  let carCopy2 = { ...car }                      // modern way
//                  print both copies , then print car  ( car must look exactly the same )
//        PART B -> PREDICT then verify ->
//                  console.log( carCopy2 === car )       // answer -> ______
//                  let carAlias = car
//                  console.log( carAlias === car )       // answer -> ______
//                  carAlias.price = 1000
//                  console.log( car.price )              // answer -> ______
//                  expected -> false , true , 1000
//                  HINT -> { ...car } makes a NEW object ( new reference ) ,
//                           carAlias = car only gives a SECOND NAME to the SAME object
//                           ( notes -> section 13 -> reference equality )
//        PART C -> the SHALLOW copy danger -> the starter is GIVEN below ->
const baseObj = { name: "Alex", tags: ["js"] }
//                  const baseCopy = { ...baseObj }
//                  baseCopy.tags.push("node")
//                  console.log( baseObj.tags )
//                  expected -> [ 'js', 'node' ]   -> the NESTED array changed in the ORIGINAL too !
//                  write in a comment WHY -> the copy is SHALLOW -> only the TOP level is copied ,
//                  the nested array keeps the SAME reference ( notes -> section 11 -> shallow copy )

//Q10 --> Object.freeze() vs Object.seal() ->
//        PART A -> let frozenCar = Object.freeze( { ...car } )     ( copy first , then freeze )
//                  try -> frozenCar.price = 100000
//                  print frozenCar.price -> expected -> the OLD price never changes
//                  ( it is silently ignored -> after Q3 the old price is 24000 )
//        PART B -> let sealedCar = Object.seal( { ...car } )
//                  try BOTH -> sealedCar.price = 30000    ( UPDATE an existing key -> works )
//                              sealedCar.mileage = 18      ( ADD a NEW key -> silently blocked )
//                  print sealedCar.price        -> expected -> 30000 ( update allowed )
//                  print Object.keys( sealedCar ).length -> expected -> 7 ( the new key never arrived )
//        HINT -> freeze -> totally read-only ( no add / no update / no delete )
//                 seal -> structure locked ( no add / no delete ) but values can still be updated
//                 both FAIL SILENTLY in normal code -> no error is thrown ( notes -> section 12 )
//        THINK -> is const the same as freeze ? -> write in a comment ->
//                  const ONLY blocks reassignment of the VARIABLE -> the inside is still
//                  changeable -> Object.freeze() is the one that locks the INSIDE ( notes 12 )

// ------------------- SECTION E : REFERENCE EQUALITY + DESTRUCTURING -------------------

//Q11 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        const obj_1 = { name: "Alex" }
//        const obj_2 = { name: "Alex" }
//        console.log( obj_1 == obj_2 )
//        console.log( obj_1 === obj_2 )
//        const obj_3 = obj_1
//        obj_3.name = "Rohan"
//        console.log( obj_1.name )
//        expected -> false , false , "Rohan"
//        HINT -> objects compare by REFERENCE -> two literals with the SAME content still live
//                 at 2 different memory locations ( notes -> section 13 , the array rule from
//                 assignment 10 Q3 returns here ) -> obj_3 = obj_1 creates NO copy ,
//                 both names point at ONE object ( notes -> section 13 -> reference sharing )
//        THINK -> then how WOULD you get a real second copy of obj_1 ? ( 2 ways -> notes 11 )

//Q12 --> DESTRUCTURING -> unpack values in one line -> the starter is GIVEN below ->
const user = {
    name: "Rohan",
    age: 29,
    city: "Pune",
}
//        PART A -> OLD WAY -> store user.name and user.age into 2 separate variables , print them
//        PART B -> DESTRUCTURING WAY -> const { name , age , city } = user  -> print all 3
//        PART C -> rename while destructuring -> const { name: uName } = user -> print uName
//        PART D -> DEFAULT value -> const { job = "Tester" } = user -> print job
//        expected -> Rohan 29 | Rohan 29 Pune | Rohan | Tester
//        HINT -> the LEFT side of the colon holds the NEW variable name ( like object values
//                 vs keys ... but MIRRORED -> notes -> section 14 )
//        TEST -> PART D works only because user has NO "job" key ->
//                 add job: "Developer" to user , run again -> the default is now IGNORED
//                 -> write in a comment when a default value is used and when it is skipped

// ------------------- SECTION F : THE users OBJECT ( CLASSIC EXERCISE ) -------------------

// the below object is GIVEN -> do NOT change it while answering Q13 -> Q17 ( add yourself only
// on a COPY -> Q16 )

const users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30,
    },
    Asab: {
        email: "asab@asab.com",
        skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
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
        skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
}

//Q13 --> find the person with the MOST skills -> print -> Asab has the most skills ( 8 )
//        HINT -> loop the OBJECT with for...in -> the KEY is the person's name ->
//                 users[key].skills.length gives that person's skill count ( notes -> section 9 )
//                 keep 2 variables -> bestName = "" and bestCount = 0 ->
//                 whenever the current count is BIGGER than bestCount -> overwrite BOTH
//                 ( the running-max pattern from assignment 10 -> Q25 + assignment 09 )
//        TEST with -> print every name and count first ( dry run ) -> then add the comparison
//                 counts -> Alex 3 , Asab 8 , Brook 5 , Daniel 4 , John 6 , Thomas 4 , Paul 7

//Q14 --> COUNTERS over the users object ->
//        PART A -> count the users who are LOGGED IN          ( expected -> 2 -> Brook , John )
//        PART B -> count the users with points >= 50          ( expected -> 3 -> Asab , Brook , John )
//        HINT -> let count = 0  ->  inside for...in -> if ( users[key].isLoggedIn ) count++
//                 same for users[key].points >= 50 ( notes -> section 9 + loops assignment 09 )
//        BONUS -> print the NAMES of the logged-in users too ( not only the count )
//        THINK -> the KEY of users is always a STRING ( notes -> section 2 ) ->
//                 write in a comment why users["Brook"].points and users.Brook.points are the same

//Q15 --> identify the MERN stack developers -> MERN = MongoDB , Express , React , Node
//        print every MERN developer's name -> expected -> Asab , Paul
//        HINT -> a person is MERN when their skills array contains ALL 4 strings ->
//                 let s = users[key].skills
//                 if ( s.includes("MongoDB") && s.includes("Express") && s.includes("React")
//                      && s.includes("Node") )   -> 4 checks joined with && , inside for...in
//        THINK -> John's skills contain "Node.js" -> why is John NOT in the answer ?
//                 ( includes() is an EXACT string match -> "Node.js" !== "Node"
//                   -> notes -> section 15 -> case / exact sensitivity )
//        BONUS -> redo it with a loop over the 4 required skills and a counter ->
//                 when the counter reaches 4 -> the person is MERN

//Q16 --> add YOUR OWN details to the users object WITHOUT modifying the original ->
//        RULE -> first COPY -> let usersCopy = { ...users }   ( or Object.assign( {} , users ) )
//                 then add your key on the COPY -> usersCopy.YourName = { email , skills , age ,
//                 isLoggedIn , points }  ( the same 5 properties every other user has )
//        PROVE it -> print Object.keys( users ).length      -> must stay 7
//                     print Object.keys( usersCopy ).length -> must be 8
//        HINT -> adding on a COPY never touches the original ( notes -> section 11 + 13 )
//                 TEST -> also try users.YourName = { ... } on the ORIGINAL , print the length
//                 ( 8 ) , then delete users.YourName ( delete -> section 7 ) to restore 7

//Q17 --> retrieve all keys and values ->
//        PART A -> Object.keys( users )   -> print the array AND its length   ( expected -> 7 )
//        PART B -> Object.values( users ) -> print the array of the 7 user objects
//        PART C -> how many properties does ONE user have -> Object.keys( users.Alex ).length
//                  expected -> 5 ( email , skills , age , isLoggedIn , points )
//        PART D -> print every key -> value pair of Alex with Object.entries( users.Alex )
//                  inside a for...of loop ( entries IS an array -> for...of works here -> Q6/Q8 )
//        HINT -> keys / values / entries all return ARRAYS ( notes -> section 11 )

// ------------------- SECTION G : THE countries OBJECT ( CLASSIC EXERCISE ) -------------------

const countries = {
    Japan: {
        capital: "Tokyo",
        population: 125.7, // in millions
        languages: ["Japanese"],
    },
    Germany: {
        capital: "Berlin",
        population: 83.2,
        languages: ["German"],
    },
    India: {
        capital: "New Delhi",
        population: 1393, // in millions
        languages: ["Hindi", "English", "Various regional languages"],
    },
    Canada: {
        capital: "Ottawa",
        population: 38,
        languages: ["English", "French"],
    },
    Brazil: {
        capital: "Brasilia",
        population: 213,
        languages: ["Portuguese"],
    },
}

//Q18 --> print the FULL report of every country ( one block per country , use for...in ) ->
//        format ->
//        Japan
//        -> capital : Tokyo
//        -> population : 125.7 million
//        -> languages : Japanese
//        ... 5 blocks
//        HINT -> the for...in KEY is the country NAME ( the first line of every block ) ->
//                 the rest is NESTED access -> countries[key].capital , .population ( notes 9 + 6 )
//                 languages is an ARRAY -> join it with join( " , " )
//                 ( India must show 3 languages separated by " , " )
//        expected -> 5 blocks , India block languages line ->
//                    Hindi , English , Various regional languages

//Q19 --> LOGIC on the countries object ->
//        PART A -> which countries speak MORE THAN ONE language ? print their names
//                  expected -> India , Canada
//        PART B -> which country has the LARGEST population ? print the name and the population
//                  expected -> India ( 1393 )
//        HINT -> PART A -> inside for...in check countries[key].languages.length > 1
//                 PART B -> running max again ( assignment 10 Q25 style ) ->
//                           keep bestCountry = "" and bestPop = 0 ->
//                           when countries[key].population > bestPop -> overwrite both
//        NOTE -> every population here is already a NUMBER ( no quotes ) -> direct >
//                 works -> write in a comment how you would check that BEFORE comparing
//                 ( typeof countries[key].population -> expected "number" )

//Q20 --> add / delete on a COPY of the countries object ->
//        PART A -> let countriesCopy = { ...countries } -> add a NEW country France with
//                  capital "Paris" , population 68 and languages [ "French" ]
//        PART B -> check with the in operator ->
//                  "France" in countries        -> expected -> false
//                  "France" in countriesCopy     -> expected -> true
//                  print Object.keys( countries ).length      -> 5
//                  print Object.keys( countriesCopy ).length  -> 6
//        PART C -> delete Germany from the COPY only -> delete countriesCopy.Germany
//                  print both lengths again -> 5 and 5
//                  and confirm -> "Germany" in countries -> expected -> true ( original safe )
//        THINK -> write in a comment -> WHY did the original stay untouched in every step ?
//                 ( { ...countries } is a NEW object -> notes -> section 13 reference rule )

// ------------------- SECTION H : NESTED DATA ( CLASSIC EXERCISE ) -------------------

// the below object is GIVEN -> note HOW the populations are stored ( look at the QUOTES )
const data = {
    Data: {
        Country: "India",
        States: [
            {
                Name: "Maharashtra",
                Population: "128256452",
            },
            {
                Name: "Gujarat",
                Population: "731000000",
            },
        ],
    },
}

//Q21 --> check if "Maharashtra" is present in the states ->
//        print -> Maharashtra is present
//        HINT -> the states live at data.Data.States -> an ARRAY of objects ( nested ->
//                 object inside object inside ARRAY -> notes -> section 6 nested access )
//                 SHORT way -> data.Data.States.some( (el) => el.Name === "Maharashtra" )
//                 -> some() returns a true / false ( assignment 10 Q28 )
//                 LONG way -> a normal loop over the array + an if on el.Name
//        TEST with -> search "Kerala" instead -> expected -> not present ( false )
//        THINK -> the in operator will NOT help here -> write in a comment why
//                 ( in checks the KEYS of an OBJECT , not the ITEMS of an array -> notes 8 )

//Q22 --> get the TOTAL population of both states ( classic trap ) ->
//        PREDICT FIRST -> before running , write in a comment what you THINK this gives ->
//        data.Data.States[0].Population + data.Data.States[1].Population
//        then run it -> the answer is NOT a number ... it is
//        expected ( the trap ) -> "128256452731000000"  ( the 2 strings were JOINED , not added )
//        HINT -> look at the QUOTES in the starter -> both populations are STRINGS ->
//                 + on 2 strings does CONCATENATION ( strings lecture 04 + operators lecture 06 )
//        FIX -> convert BOTH with Number( ... ) ( or the +value trick from lecture 05 ) first ->
//        expected ( the fix ) -> 128256452 + 731000000 -> 859256452
//        TEST -> print typeof data.Data.States[0].Population -> expected -> "string"
//                 and typeof Number( data.Data.States[0].Population ) -> expected -> "number"
//        THINK -> write in a comment -> WHY the wrong ( concatenated ) answer gave NO error
//                 ( JS happily adds 2 strings -> silent bug -> the most dangerous kind )

//Q23 --> build a report object from the nested data ->
//        PART A -> print one line per state with a loop over data.Data.States -> format ->
//                  Maharashtra -> 128256452
//                  Gujarat -> 731000000
//        PART B -> make a NEW object named report with EXACTLY 3 keys ->
//                  country -> "India" , stateCount -> 2 , totalPopulation -> 859256452
//                  ( reuse the CONVERTED total from Q22 -> do NOT retype the number by hand
//                    if the states change , the report must stay correct -> write this rule
//                    as a comment -> NEVER hardcode a value you can calculate )
//                  print the report with ONE console.log -> the values must be NUMBERS
//                  ( stateCount from .length , totalPopulation from the Q22 fix )
//        HINT -> object literal syntax -> notes -> section 3 ( KEY: VALUE , separated by , )

// ------------------- SECTION I : ARRAY OF OBJECTS ( REAL-WORLD SHAPE OF DATA ) -------------------

// the below array of objects is GIVEN ( a shortened version of the lecture profiles -> section 12 )

const profiles = [
    { firstName: "Rohan", lastName: "Joshi", age: 29, experience: 11, skills: ["TypeScript", "JavaScript", "Cypress", "Docker"], position: "Technical Lead" },
    { firstName: "Vihaan", lastName: "Deshmukh", age: 32, experience: 1, skills: ["Python", "TypeScript"], position: "Software Engineer" },
    { firstName: "Ishaan", lastName: "Pandey", age: 31, experience: 14, skills: ["Python", "Cypress"], position: "Systems Engineer" },
    { firstName: "Ishaan", lastName: "Deshmukh", age: 25, experience: 1, skills: ["Java", "Playwright", "JavaScript", "SQL"], position: "Systems Engineer" },
    { firstName: "Pranav", lastName: "Joshi", age: 24, experience: 2, skills: ["JavaScript", "GitHub Actions", "Playwright", "TypeScript"], position: "Data Analyst" },
    { firstName: "Rohan", lastName: "Joshi", age: 33, experience: 3, skills: ["JavaScript", "Java", "Docker", "TypeScript"], position: "Full-Stack Developer" },
    { firstName: "Arjun", lastName: "Nayak", age: 36, experience: 4, skills: ["Java", "Playwright", "Docker"], position: "Systems Engineer" },
    { firstName: "Vikram", lastName: "Joshi", age: 34, experience: 1, skills: ["python"], position: "Full-Stack Developer" },
]

//Q24 --> print the FULL NAME of every profile ( one per line ) -> solve it TWICE ->
//        1) normal for loop with BRACKET access  -> profiles[i]["firstName"]
//        2) forEach()                            -> el.firstName
//        expected -> 8 lines , the first line -> Rohan Joshi , the last -> Vikram Joshi
//        HINT -> an ARRAY of objects -> the loop gives one OBJECT per round ->
//                 bracket and dot BOTH work on it ( lecture -> section 12 -> approach 1 + 2 )
//        THINK -> "Rohan Joshi" appears TWICE in the list ( index 0 and index 5 ) ->
//                 write in a comment why a real system ALWAYS needs a unique id / email
//                 and cannot use the name as the key ( unlike the users object in SECTION F )

//Q25 --> print the names of the candidates who have "Python" in their skills ->
//        PART A -> case SENSITIVE -> if ( el.skills.includes( "Python" ) )
//                  expected -> Vihaan Deshmukh , Ishaan Pandey        ( 2 names )
//        PART B -> case INSENSITIVE -> also match the lowercase "python"
//                  expected -> Vihaan Deshmukh , Ishaan Pandey , Vikram Joshi   ( 3 names )
//        HINT -> PART B -> el.skills.some( (skill) => skill.toLowerCase() === "python" )
//                 ( the lecture section 12 trick -> "Python" and "python" are 2 DIFFERENT
//                   strings -> string lecture 04 -> case sensitive methods )
//        THINK -> Vikram's skill is ["python"] in LOWERCASE -> why does PART A miss him ?
//                 and why is some() the right helper here instead of filter() ?
//                 ( some -> a yes / no answer -> assignment 10 section G )

//Q26 --> STATISTICS over the profiles array ->
//        PART A -> how many candidates are a "Systems Engineer" ?     ( expected -> 3 )
//        PART B -> the MOST experienced candidate -> name and years   ( expected -> Ishaan Pandey 14 )
//        PART C -> print the full names of every candidate whose position CONTAINS
//                  the word "Developer"                              ( expected -> Rohan Joshi , Vikram Joshi )
//        HINT -> PART A -> loop + counter + el.position === "Systems Engineer" ( exact match )
//                 PART B -> running max over el.experience ( assignment 10 Q25 pattern )
//                 PART C -> el.position.includes( "Developer" ) -> a SUBSTRING match ,
//                           "Full-Stack Developer" contains it , "Systems Engineer" does not
//        TEST -> change PART A to a substring check -> el.position.includes( "Engineer" )
//                 -> expected -> 4 ( the Software Engineer also matches ) -> write why

// ------------------- SECTION J : INTERVIEW QUESTIONS ( answer in comments ) -------------------

//Q27 -> why do we need an OBJECT ? write the MAJOR drawback of storing the same data in an
//        array ( give the person_info example from the lecture -> section 1 ) and answer ->
//        in 2 lines -> what does "descriptive data" mean ? ( notes -> section 1 + 2 )

//Q28 -> what is a PROPERTY and what is a METHOD of an object ? give 1 example of each
//        from the objects you already wrote ( student .fullName is a METHOD -> what else ? )
//        then answer -> what does "this" point to inside a method ? ( notes -> section 10 )

//Q29 -> person.mileage returns undefined -> does that PROVE the key is missing ? -> NO ->
//        write in a comment the CORRECT way to check key existence ( all 3 ways )
//        and the WRONG way ( !== undefined ) with the reason it fails ( notes -> section 8 )

//Q30 -> Object.freeze() vs Object.seal() vs const -> fill this in your own words ->
//        freeze -> can I add ? can I update ? can I delete ? can I reassign the variable ?
//        seal   -> can I add ? can I update ? can I delete ? can I reassign the variable ?
//        const  -> can I add ? can I update ? can I delete ? can I reassign the variable ?
//        ( notes -> section 12 + the THINK of Q10 )

//Q31 -> Object.assign() / { ...obj } create which type of copy ? what is the DANGER with a
//        nested object / array ? ( write the Q9 PART C example in one line as your proof )
//        ( notes -> section 11 -> shallow copy )

//Q32 -> why does for...of FAIL on a plain object while for...in works ?
//        and why does for...of WORK on the result of Object.entries( obj ) ?
//        ( notes -> section 9 -> iterable vs not -> and the Q6 / Q8 proofs )

//Q33 -> PREDICT the output ( answers FIRST , then run and verify ) ->
//        const a = { x: 1 }
//        const b = { x: 1 }
//        const c = a
//        console.log( a == b )
//        console.log( a === b )
//        console.log( a === c )
//        let d = { ...a }
//        d.x = 5
//        console.log( a.x )
//        expected -> false , false , true , 1
//        write in a comment -> line by line WHY ( reference vs copy -> notes -> section 13 )

//Q34 -> why should an ARROW function NOT be used as a method inside an object ?
//        PROVE it with a small code example ( add an arrow method on student -> call it ->
//        show what this becomes ) and write the 2 correct ways instead
//        ( notes -> section 10 -> the arrow function warning )


// ============================================
// FINAL STEP -> print the GIVEN objects once more -> car , users , countries and data ->
//        and write in a comment WHICH questions changed them on purpose
//        ( Q3 -> car ( CRUD ) , Q9 -> carAlias , Q16 -> only if you tested on the original )
//
// SUBMISSION CHECKLIST
// 1. every PREDICT question has your answer written BEFORE you ran the code
// 2. every Q has its PLAN written as a comment BEFORE the code
// 3. for every change you made -> COPY or REFERENCE is written in a comment
// 4. every expected output matches the real output ( or the difference is explained
//    in a comment )
// 5. ALL the TEST values given in the question were tried ( change the value , run again )
// 6. the population of Q22 is printed as a NUMBER ( the string trap was fixed with Number )
// 7. every fixed bug has the REASON of the bug written in a comment ( not only the fix )
// 8. any line you uncommented for a test ( Q6 ) was commented again ->
//    file runs without any error -> node 11_ASSIGNMENT_JS_OBJECT.js
// ============================================