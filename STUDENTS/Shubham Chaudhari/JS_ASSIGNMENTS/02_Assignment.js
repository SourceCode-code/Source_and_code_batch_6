// ============================================
// 02_ASSIGNMENT -> TOPIC : JS DATA TYPES (primitive, non-primitive, typeof)
// BASED ON : LECTURE/02_JS_Datatypes.js  +  THEORY_NOTES/02_JS_Datatypes.md
// HOW TO RUN : open terminal -> node 02_ASSIGNMENT_JS_DATA_TYPES.js
// ============================================

// ------------------- SECTION A : PRIMITIVE DATA TYPES -------------------

//Q1 --> Declare one variable for each primitive datatype (number, string, boolean, undefined, null)
//       and print all of them using console.log()
//       HINT -> there are 5 primitive datatypes (check theory notes section 3)
       let studentName = "Shubham"
       let percent = 92.5
       let isPass1 = true
       let result1
       console.log(typeof studentName,typeof percent,typeof isPass1, typeof result1)

//Q2 --> Write a code to check and print the datatype of the below variables using typeof operator
      let city = "Pune"
      let marks = 92.5
      let isPass = true
      let result
//       HINT -> typeof is an operator, example -> console.log(typeof city)
         console.log(`City datatype ${typeof(city)}`)
         console.log(`marks datatype ${typeof(city)}`)
         console.log(`result datatype ${typeof(result)}`)
         console.log(`isPass datatype ${typeof(isPass)}`)

//Q3 --> What is the output of the below code ? write the answer as a comment and then run to verify
      let x;
      console.log(x)
      console.log(typeof x)
//       HINT -> what value does JS give when we dont assign anything ?
        //Output is undefined

//Q4 --> What is the output of the below code ? write the answer as a comment and then run to verify
      let v1 = null
      console.log(typeof v1)
      //object
//       HINT -> this is a famous bug in js (check theory notes section 5)


// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
      let a = 10
      let b = a
      a = 20
      console.log(a)
      console.log(b)
         //20
         //10



//Q10 --> INTERVIEW QUESTION -> write the difference between undefined and null in comments (minimum 2 points)
//        and show one example code of each
//        HINT -> who sets the value, JS or the programmer ?
       // undefined values commes when Valrible is define and value is assigne to that varible 
       //Datatype of undefined varible is undefined
       //null is assigned value of any Valrible intennally when at time of valrible declare we are not sure about the Value 
       ////Datatype of null varible is Object


// ------------------- SECTION C : BONUS CHALLENGE -------------------

//Q13 --> INTERVIEW QUESTION -> predict the output of the below code and explain why in a comment
//        let x;
//        let y = null;
//        let z = "25";
//        console.log(typeof x, typeof y, typeof z)
       // type of X is Undefined as varible Declare but value is not assigned in that 
       // type of y is Object as this is famous bug in Js 
       // type of z is String 

