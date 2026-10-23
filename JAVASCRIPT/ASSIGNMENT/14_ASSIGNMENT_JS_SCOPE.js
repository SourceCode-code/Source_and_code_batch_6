// ============================================
// 14_ASSIGNMENT -> TOPIC : JS SCOPE ( + revision of variables , functions , hoisting )
// BASED ON : LECTURE/14_Scope.js  +  THEORY_NOTES/14_JS_Scope.md
//
// HOW TO RUN : open terminal -> node 14_ASSIGNMENT_JS_SCOPE.js
// RULES -> for every "predict the output" question , FIRST write your answer as a comment
//          BEFORE running the code . then write the code , run it and verify .
//          for every task FIRST write your plan as a comment , THEN write the code and test it .
//
// INTERVIEW RULES -> these 3 habits separate an INTERVIEW answer from a guessed answer :
//          1) PREDICT -> before running scope-related code , write your expected output in a
//             comment first . remember the scope of a variable determines WHERE it can be used .
//          2) HOISTING -> var is HOISTED (moved to the top of its scope) with value undefined .
//             let and const are NOT hoisted in the same way -> they are in the TDZ ( Temporal
//             Dead Zone ) until the declaration line is reached .
//          3) SHADOWING -> when a variable in a inner scope has the SAME NAME as one in the
//             outer scope , the inner variable SHADOWS (hides) the outer one .
// ============================================


// ------------------- SECTION A : var vs let vs const -------------------

//Q1 --> PART A -> declare a variable named x with var , assign 10 , print it
//        PART B -> try to redeclare x with let on the SAME line -> write the ERROR you get
//        HINT -> var can be redeclared within the same scope , let cannot
//        expected -> var works , let throws a SYNTAX ERROR

//Q2 --> PART A -> declare x with var , assign 10 , then redeclare x with var and assign 20
//        PART B -> print x
//        expected -> x=20 ( the second declaration OVERWRITES the first )

//Q3 --> PART A -> declare a variable named y with let and assign 5 , print y
//        PART B -> try to UPDATE y ( let y = 10 ) -> write the ERROR
//        PART C -> update y ( y = 10 ) -> print y
//        HINT -> let allows UPDATING but NOT redeclaring
//        expected -> PART B -> SYNTAX ERROR , PART C -> y=10

//Q4 --> PART A -> declare a constant named PI with const and assign 3.14 , print PI
//        PART B -> try to change PI ( PI = 3.14159 ) -> write the ERROR
//        PART C -> try to redeclare PI -> write the ERROR
//        expected -> both PART B and PART C give SYNTAX ERROR

//Q5 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        var a = 1
//        let b = 2
//        const c = 3
//        console.log( a , b , c )
//        HINT -> var is function-scoped , let and const are block-scoped
//        expected -> 1 2 3

//Q6 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        if ( true ) {
//            var a = 100
//            let b = 200


// ------------------- SECTION B : SCOPE TYPES -------------------

//Q7 --> PART A -> write a function named scopeDemo() that declares:
//             - a global variable named counter = 0
//             - a local variable named localCounter = 10
//             - a block-scoped variable named blockCount = 5 ( inside an if block )
//        PART B -> print all three variables
//        PART C -> try to print blockCount OUTSIDE the if block -> write the ERROR
//        expected -> counter=0 , localCounter=10 , blockCount=5 ( outside gives ReferenceError )

//Q8 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        function testScope() {
//            console.log( x )
//            var x = 10
//        }
//        testScope()
//        HINT -> var is hoisted with value undefined
//        expected -> undefined ( no error because var is hoisted )

//Q9 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        function testScope2() {
//            console.log( y )
//            let y = 20
//        }
//        testScope2()
//        HINT -> let is NOT hoisted the same way as var -> it is in the TDZ
//        expected -> ReferenceError ( cannot access 'y' before initialization )

//            const c = 300
//        }
//        console.log( a )
//        console.log( b )
//        console.log( c )
//        HINT -> var is function-scoped so it "leaks" out of the block
//                 let and const are block-scoped so they CANNOT be accessed outside
//        expected -> 100 , ReferenceError , ReferenceError


// ------------------- SECTION C : HOISTING -------------------

//Q10 --> PREDICT the output ( write ALL 4 answers FIRST , then run and verify ) ->
//        console.log( a )
//        console.log( b )
//        console.log( c )
//        var a = 1
//        let b = 2
//        const c = 3
//        HINT -> var is hoisted and initialized with undefined
//                 let and const are in TDZ until their declaration line
//        expected -> undefined , ReferenceError , ReferenceError

//Q11 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        function hoistTest() {
//            console.log( x )
//            var x = 5
//            if ( true ) {
//                var x = 100
//            }
//            console.log( x )
//        }
//        hoistTest()
//        HINT -> var is function-scoped AND hoisted , so redeclaring it in the if block
//                 affects the same x variable
//        expected -> undefined , 100

//Q12 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        function hoistTest2() {
//            console.log( y )
//            let y = 5
//            if ( true ) {


// ------------------- SECTION D : SHADOWING -------------------

//Q14 --> PART A -> write a function that declares a variable named message = "global"
//             -> inside the function , declare ANOTHER variable named message = "local"
//             -> print both messages
//        PART B -> print message OUTSIDE the function
//        expected -> "global" ( the outer one is NOT shadowed outside )

//Q15 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        let count = 10
//        function counter() {
//            let count = 20
//            if ( true ) {
//                let count = 30
//                console.log( count )
//            }
//            console.log( count )
//        }
//        counter()
//        console.log( count )
//        HINT -> 3 different count variables -> global , function-level , block-level
//        expected -> 30 , 20 , 10

//Q16 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        const name = "Global"
//        function showName() {
//            const name = "Local"
//            {
//                const name = "Block"
//                console.log( name )
//            }
//            console.log( name )
//        }
//        showName()
//        console.log( name )
//        expected -> "Block" , "Local" , "Global"


// ------------------- SECTION E : CLOSURES -------------------

//Q17 --> write a function named makeCounter() that returns ANOTHER function
//        -> the inner function should increment and return a count variable
//        -> the count variable should be VISIBLE to the inner function but NOT outside
//        PART A -> write makeCounter()
//        PART B -> create two counters : counter1 and counter2
//        PART C -> call counter1() 3 times and counter2() 2 times
//        expected ->
//                 counter1 -> 1 , 2 , 3
//                 counter2 -> 1 , 2
//        HINT -> the count variable is "remembered" by the inner function ( closure )

//Q18 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        function outer() {
//            let outerVar = "outer"
//            function inner() {
//                let innerVar = "inner"
//                console.log( outerVar )
//                console.log( innerVar )
//            }
//            return inner
//        }
//        const fn = outer()
//        fn()
//        HINT -> inner() can access outerVar even after outer() has finished running
//        expected -> "outer" , "inner"

//Q19 --> PREDICT the output ( write ALL 3 answers FIRST , then run and verify ) ->
//        function makeAdder( x ) {
//            return function ( y ) {
//                return x + y
//            }
//        }
//        const add5 = makeAdder( 5 )
//        const add10 = makeAdder( 10 )
//        console.log( add5( 3 ) )
//        console.log( add10( 3 ) )
//        HINT -> each call to makeAdder creates a NEW closure with its own x
//        expected -> 8 , 13

// ---------------- SECTION F : INTERVIEW QUESTIONS ( answer in comments ) -------------------

//Q20 --> what is the difference between function scope ( var ) and block scope ( let / const ) ?
//         answer in 2 - 3 lines with an example

//Q21 --> explain the TDZ ( Temporal Dead Zone ) for let and const -> when does the variable
//         become "usable" ? answer in 2 lines

//Q22 --> what is variable shadowing and WHY is it DANGEROUS in large codebases ?
//         answer in 2 lines

//Q23 --> why is var considered bad practice in modern JavaScript (ES6+) ?
//         answer in 2 - 3 lines ( give 2 specific reasons )

//Q24 --> a closure "remembers" its outer variables -> explain in 2 lines how this is useful
//         for data privacy and modular code

// ============================================
// FINAL STEP -> print the given ( starter ) variables once more to show their original state
//
// SUBMISSION CHECKLIST
// 1. every PREDICT question has your answer written BEFORE you ran the code
// 2. every Q has its PLAN written as a comment BEFORE the code
// 3. for every variable you declared -> scope level ( global / function / block ) is written in a comment
// 4. every expected output matches the real output ( or the difference is explained )
// 5. ALL the TEST values given in the question were tried
// 6. file runs without any error -> node 14_ASSIGNMENT_JS_SCOPE.js
// 7. every fixed bug has the REASON of the bug written in a comment
// ============================================
