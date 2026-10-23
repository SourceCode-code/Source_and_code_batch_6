// ============================================
// 13_ASSIGNMENT -> TOPIC : JS DESTRUCTURING ( + revision of arrays , objects , variables )
// BASED ON : LECTURE/13_Destructure.js  +  THEORY_NOTES/13_JS_Destructuring.md
//
// HOW TO RUN : open terminal -> node 13_ASSIGNMENT_JS_DESTRUCTURING.js
// RULES -> for every "predict the output" question , FIRST write your answer as a comment
//          BEFORE running the code . then write the code , run it and verify .
//          for every task FIRST write your plan as a comment , THEN write the code and test it .
//
// INTERVIEW RULES -> these 3 habits separate an INTERVIEW answer from a guessed answer :
//          1) PREDICT -> before running array/object destructuring , write your expected output
//             in a comment first . remember the number of variables on the LEFT must match
//             the number of items on the RIGHT ( theory notes -> section 2 ) .
//          2) REST -> when you use ...rest , it must be the LAST variable on the LEFT side .
//             if you try to add variables AFTER ...rest , you get a SYNTAX ERROR .
//          3) DEFAULTS -> defaults only kick in when the value is UNDEFINED , NOT when it is
//             null , 0 or false . ( theory notes -> section 4 ) .
// ============================================


// ------------------- SECTION A : ARRAY DESTRUCTURING -------------------

//Q1 --> PART A -> declare an array named nums with 5 numbers : [10, 20, 30, 40, 50]
//        PART B -> destructure it into a , b , c , d , e  ( one variable per element )
//        PART C -> print a , b , c , d , e
//        expected -> a=10 , b=20 , c=30 , d=40 , e=50

//Q2 --> PART A -> destructure the SAME array nums into ONLY 3 variables : first , second ,
//             rest   ( ...rest gets the REST of the elements )
//        PART B -> print first , second and rest
//        HINT -> ...rest must be the LAST variable on the LEFT side
//        expected -> rest -> [30, 40, 50]

//Q3 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        let arr1 = [1, 2, 3]
//        let arr2 = [4, 5, 6]
//        let [ x , y ] = arr1
//        let [ a , b , c , d ] = arr2
//        console.log( x , y )
//        console.log( a , b , c )
//        console.log( d )
//        HINT -> if there are more variables on the LEFT than items on the RIGHT ,
//                 the extra variables get undefined
//        expected -> 1 2 , 4 5 6 , undefined
//        THINK -> write in a comment -> what happens if you swap the declaration order :
//                 let [ a , b ] = arr1; let [ b , a ] = arr2; -> does b change ?

//Q4 --> PART A -> declare an array named colors with 6 colors
//        PART B -> destructure it into firstColor , secondColor and ...others
//        PART C -> print others ( the remaining 4 colors )
//        TEST -> change the values of colors and re-run

// ------------------- SECTION B : ARRAY DESTRUCTURING - SKIP / SWAP / DEFAULTS -------------------

//Q5 --> PART A -> take the array [100, 200, 300] and destructure it into a , _ , c
//             ( _ means SKIP the second element )
//        PART B -> print a and c
//        expected -> a=100 , c=300

//Q6 --> PART A -> destructure [10, 20, 30] into a , b , c  AND print a , b , c
//        PART B -> SWAP the values of a and b using temp variable ( do NOT use [a,b] = [b,a])
//        PART C -> print a and b AGAIN
//        HINT -> declare a temp variable OUTSIDE the destructuring
//        expected -> after swap -> a=20 , b=10

//Q7 --> PART A -> take the array [5, 15, 25] and destructure it with defaults into x , y ,
//             z where x=5 , y=15 and z has DEFAULT 99
//        PART B -> print x , y , z
//        HINT -> defaults only apply when the value is undefined -> not when it is 0 or null
//        expected -> x=5 , y=15 , z=99

//Q8 --> PREDICT the output ( write ALL 4 answers FIRST , then run and verify ) ->
//        let [ p , q ] = [10, 20]
//        console.log( p , q )
//        // NOTE -> [p , q] = [q , p]  -> TDZ / SWAP ERROR in some Node versions .
//                 // For this assignment always use the temp variable approach .
//        [p , q] = [q , p]
//        console.log( p , q )
//        HINT -> in some Node versions swapping with [p,q] = [q,p] gives a TDZ error
//        expected -> 10 20 , 20 10

// -------------------------------------------


// =========================
// SECTION C : OBJECT DESTRUCTURING
// =========================

//Q9 --> PART A -> declare an object named student with keys : name , age , course , grade
//        PART B -> destructure it into name , age and grade
//        PART C -> print name , age and grade
//        expected -> name= "Sam" , age= 19 , grade= "A"

//Q10 --> PART A -> destructure the SAME student object into a NEW variable named fullName
//             for the name ( rename the key )
//        PART B -> print fullName and age
//        HINT -> use { name: fullName } syntax


// ---------------- SECTION D : OBJECT DESTRUCTURING - NESTED & SPLAT -------------------

//Q14 --> PART A -> declare a nested object named library with keys : name , address and books
//             where books is an array of 3 book objects
//             { id , title , author }
//        PART B -> destructure library into: libName , city and the FIRST book's title
//        HINT -> use nested destructuring : { books: [{ title: firstBookTitle }] }
//        expected -> firstBookTitle

//Q15 --> PART A -> destructure the SAME library into libName and the TOTAL number of books
//             using ...booksArray
//        PART B -> print libName and booksArray.length
//        HINT -> spread the books array into ...booksArray

//Q16 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        const config = {
//            host: "localhost",
//            port: 3000,
//            secure: true,
//            timeout: 5000,
//            debug: false
//        }
//        const { host , port , ...restConfig } = config
//        console.log( host )
//        console.log( port )
//        console.log( restConfig )
//        HINT -> ...restConfig gets ALL the remaining keys
//        expected -> localhost , 3000 , { secure: true, timeout: 5000, debug: false }

// ------------------- SECTION E : FUNCTION PARAMETER DESTRUCTURING -------------------

//Q17 --> write a function named greetObject( person ) where person is an object like
//             { firstName , lastName , email } -> use object destructuring in the PARAMETERS
//             -> "Welcome <firstName> <lastName> , your email is <email>"
//        PART A -> write the function
//        PART B -> call it with { firstName: "Nina" , lastName: "Patel" , email: "nina@email.com" }
//        expected -> "Welcome Nina Patel , your email is nina@email.com"

//Q18 --> write a function named createUser( { name , age = 18 , role = "user" } ) where
//             the PARAMETERS use destructuring with defaults
//        PART A -> print name + age + role
//        PART B -> call it TWICE :
//                 1) createUser( { name: "Ravi" } )   -> use defaults for age and role
//                 2) createUser( { name: "Sita" , age: 22 , role: "admin" } )   -> use given values
//        expected ->
//                 1) Ravi 18 user
//                 2) Sita 22 admin

//Q19 --> PREDICT the output ( write ALL 4 answers FIRST , then run and verify ) ->
//        function getSkills( { skills = [] } ) {
//            return skills.join( " , " )
//        }
//        console.log( getSkills( { name: "A" , skills: ["HTML" , "CSS"] } ) )
//        console.log( getSkills( { name: "B" } ) )
//        HINT -> the first call has skills in the object -> join works
//                 the second call has NO skills -> default [] kicks in -> join on empty array
//        expected -> "HTML , CSS" , ""


// ---------------- SECTION F : INTERVIEW QUESTIONS ( answer in comments ) -------------------

//Q20 --> what does the ...rest operator do in destructuring and WHY must it ALWAYS be the LAST
//         variable on the LEFT side ? answer in 2 - 3 lines

//Q21 --> what is the difference between the default value ( age = 18 ) and skip ( _ ) ?
//         answer in 1 line each -

//Q22 --> "destructing a nested object is NOT the same as destructing a flat object" -> explain
//         in 2 lines with a small example

//Q23 --> in function parameter destructuring { name , age = 18 } , what happens if the
//         argument is UNDEFINED ? answer in 1 line

//Q24 --> what does object destructuring REMOVE from the original object ? answer in 1 line

// ============================================
// FINAL STEP -> print the given ( starter ) arrays and objects once more to show their
//        original state after destructuring
//
// SUBMISSION CHECKLIST
// 1. every PREDICT question has your answer written BEFORE you ran the code
// 2. every Q has its PLAN written as a comment BEFORE the code
// 3. for every destructuring you used -> COPY vs SKIP vs REST vs DEFAULT is written in a comment
// 4. every expected output matches the real output ( or the difference is explained )
// 5. ALL the TEST values given in the question were tried
// 6. file runs without any error -> node 13_ASSIGNMENT_JS_DESTRUCTURING.js
// 7. every fixed bug has the REASON of the bug written in a comment
// ============================================
