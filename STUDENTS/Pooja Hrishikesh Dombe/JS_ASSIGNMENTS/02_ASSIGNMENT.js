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
    let [testId, testStatus, testResult, testName, testInput] = [100, "Pass", true, , null];
    console.log(testId, testStatus, testResult, testName, testInput);
    console.log(typeof testId, typeof testStatus, typeof testResult, typeof testName, typeof testInput);

}


//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
//       let city = "Pune"
//       let marks = 92.5
//       let isPass = true
//       let result
//       HINT -> typeof is an operator, example -> console.log(typeof city)

{
    let city = "Pune";
    let marks = 92.5;
    let isPass = true;
    let result;
    console.log(typeof city, typeof marks, typeof isPass, typeof result);
}


//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let x;
//       console.log(x)
//       console.log(typeof x)
//       HINT -> what value does JS give when we dont assign anything ?
{
    /* 
    undefined ---> console.log(x)
    undefined ---> console.log(typeof x)

    both will be undefined. To print x on console value is not assigned so JS will by default set 
    value as undefined, as the value assied is unfenied the type of variable also becomes undefined.
    */

    let x;
    console.log(x);
    console.log(typeof x);

}


//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
//       let v1 = null
//       console.log(typeof v1)
//       HINT -> this is a famous bug in js (check theory notes section 5)
{
    // Object - JS has bug in their system whenever we try to check type of null variable it will give output as Object.
    let v1 = null;
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
    /* 20
       10
       
       a = 20 ---> the value of a is changed before displaying it and as the JS code execute line by line it will 
                   take vaue as 20.
       b = 10 ---> the first (a=10) value is assined to b and then 'a' value.
    */

}


//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each
//        HINT -> who sets the value, JS or the programmer ?
{
    /*
    Undefined - 1. whenever we only declare variable without assigning value or keep it empty it has undefined value.
                2. undefined value set by system
                3. when we check type answer is undefined
                4. in var vaeriable when we try to access the variable before its declaration line execution
                   we get vaule as undefined.
                5. let testStatus;
                   console.log(typeof testStatus); 


    Null - 1. whenever we dont want to assign any value to variable we keep value as null.
           2. Null value set by user/Human.
           3. when we check type answer is Object - Bug by JS
           4. let testStatus = null;
              console.log(typeof testStatus);

    */
}


// ------------------- SECTION C : BONUS CHALLENGE -------------------

//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
//        let x;
//        let y = null;
//        let z = "25";
//        console.log(typeof x, typeof y, typeof z)
{
    /* 
    undefined --->value is not assined so by default type becomes undefined.
    object ---> JS has bug and due to that type of null variable becomes object.
    string ---> anything written in '' , " " , ` ` is considered as string in JS 
    */
}

