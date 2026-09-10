// ============================================
// 02_ASSIGNMENT -> TOPIC : JS DATA TYPES (primitive, non-primitive, typeof)
// BASED ON : LECTURE/02_JS_Datatypes.js  +  THEORY_NOTES/02_JS_Datatypes.md
// HOW TO RUN : open terminal -> node 02_ASSIGNMENT.js
// ============================================

// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()
//       HINT -> there are 5 primitive datatypes (check theory notes section 3)
{
    let testId = 99 ;
    console.log(typeof testId);

    let testName = "Pooja" ;
    console.log(typeof testName);

    let testStatus = true ;
    console.log(typeof testStatus);

    let testResult ;
    console.log(typeof testResult);

    let testData = null ;
    console.log(typeof testData);

}




//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
//       let city = "Pune"
//       let marks = 92.5
//       let isPass = true
//       let result
//       HINT -> typeof is an operator, example -> console.log(typeof city)
{
    let city = "Pune" ;
    let marks = 92.5 ;
    let isPass = true ; 
    let result ;

    console.log(typeof city, typeof marks, typeof isPass, typeof result);

}



//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let x;
//       console.log(x)
//       console.log(typeof x)
//       HINT -> what value does JS give when we dont assign anything ?
{
    // Answer - console.log(x) ---> ReferanceError
    // Answer - console.log(typeof x) ---> undefined

    let x;
    console.log(x);
    console.log(typeof x);


}


//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let v1 = null
//       console.log(typeof v1)
//       HINT -> this is a famous bug in js (check theory notes section 5)
{
    // Answer - console.log(typeof v1) ---> object

    let v1 = null ;
    console.log(typeof v1);

}

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = 10
//       let b = a
//       a = 20
//       console.log(a)
//       console.log(b)
//       HINT -> primitives are copied by VALUE
{
    // Answer - console.log(a) ---> 20  ---> js execute line by line befor consol log value reassigned as 20
    // Answer - console.log(b) ---> 10  ---> js execute line by line value of a=10 is assigned first to b and then a=20 value changed

    let a = 10;
    let b = a;
    a = 20;
    console.log(a);
    console.log(b);

}


//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each
//        HINT -> who sets the value, JS or the programmer ?

{
    /* Answer - 

    Undefined                      
    1. we delcalre variable but not assign any value
    2. In var variable if we try to access the variable before it is 
       declared/Initialized we get value as undefined  
    3. Assined by the JS execution system
    4. typeof operator used then ---> output is undefined 
    */
    
    // Example - 
    let userName ;
    console.log(typeof userName);

    /*
    Null 
    1. When we dont want to assign a vaulue to variable we use null, it will keep value as empty (space).
    2. Assigned by Programmer 
    3. typeof used the ---> output is object
    */

    // Example -

    let userId = null ;
    console.log(typeof userId);

}

// ------------------- SECTION C : BONUS CHALLENGE -------------------

//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
//        let x;
//        let y = null;
//        let z = "25";
//        console.log(typeof x, typeof y, typeof z)

{
    // Answer - x = undefined ---> variable only declared but value is not assigned.

    /* Answer - y = object ---> Javascript has an but that if we assigne null to 
                                variable it will provide typeof as object.
    */

    /* Answer - z = String ---> in javascript anything written in "" , '' will be treated as 
                                string even if it is number or any another data type.  
   */                          

}

