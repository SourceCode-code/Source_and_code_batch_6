// ============================================
// 01_ASSIGNMENT -> TOPIC : JS BASICS (variables, comments, console.log)
// BASED ON : LECTURE/01_JS_BASIC.js  +  THEORY_NOTES/01_JS_BASIC.md
// HOW TO RUN : open terminal -> node 01_ASSIGNMENT.js
// ============================================

// ------------------- SECTION A : PRINT & COMMENTS -------------------

//Q1 --> Write a code to print your name in the terminal
//       HINT -> use console.log()
//       EXPECTED OUTPUT (example) -> siddhant
{
    console.log("Pooja Hrishikesh Dombe");
}


//Q2 --> Write a single line comment which says, comments can make code readable
//       HINT -> single line comment starts with //
{
    //comments can make code readable
}


//Q3 --> Write another single line comment which says, Welcome to 30DaysOfJavaScript
{
    //Welcome to 30DaysOfJavaScript
}


//Q4 --> Write a multiline comment which says, comments can make code readable, easy to reuse and informative
//       HINT -> multiline comment starts with /* and ends with */
{
    /*
    comments can make code readable, 
    easy to reuse and informative.
    */
}


// ------------------- SECTION B : VARIABLES -------------------

//Q5 --> Declare four variables without assigning values
//       HINT -> use let ; what value will they hold ? write the answer in a comment
//       BONUS -> print them using console.log and check what js gives by default
{
    let testStatus;
    console.log(testStatus);

    let testId;
    console.log(testId);

    let testResult;
    console.log(testResult);

    let testInput;
    console.log(testInput);

    // result will be undefined as value is not assigned JS by default set value as undefined.

}


//Q6 --> Declare four variables with assigned values
//       ( try one number, one string, one boolean and one decimal value )
{
    let testId = 100;
    console.log(testId, typeof testId);

    let testStatus = "Pass";
    console.log(testStatus, typeof testStatus);

    let testResult = true;
    console.log(testResult, typeof testResult);

    const testInput = 99.99;
    console.log(testInput, typeof testInput);

}


//Q7 --> Declare variables to store your first name, last name, marital status, country and age in multiple lines
//       HINT -> one variable per line, use camelCase names
//       BONUS -> print all of them with a single console.log
{
    let firstName = "Pooja";
    let lastName = "Patil";
    let maritalStatus = "Married";
    const country = "India";
    const age = 29;

    console.log(firstName, lastName, maritalStatus,country, age);
    
}


//Q8 --> Declare variables to store your first name, last name, marital status, country and age in a single line
//       HINT -> separate each declaration with a comma
//       QUESTION -> which way is better, multiple lines or single line ? write answer in a comment
{
    let [firstName, lastName, maritalStatus, country, age] = ["Pooja", "Patil", "Married", "India", 29];
    console.log(firstName, lastName, maritalStatus,country, age);

    /* Both are usefull but when the number of variables are fixed it will be easy to declare them 
     at once when we want to use them in only that same block.
     */

}

//Q9 --> Declare two variables myAge and yourAge and assign them initial values and log to the console
//       HINT -> use let, then print both using console.log()
//       BONUS -> update myAge with a new value and print it again

{
    let [myAge, yourAge] = [29, 30];
    console.log(myAge, yourAge);

    myAge = 29.5;
    yourAge = 30.5;
    console.log(myAge, yourAge);

}


// ------------------- SECTION C : CHALLENGE (based on theory notes) -------------------

//Q10 --> The below variable names are INVALID. Write the reason next to each one as a comment
//        let 1num = 1
//        let my name = "js"
//        let let = 2
//        HINT -> check variable naming rules in theory notes
{
    /*
    let 1num = 1 ===> variable name can not start with the number.

    let my name = "js" ===> space between my and age is not allowed. (As js compiler will confuse between name)

    let let = 2 ===> we can not use keywords(available in JS) as name of variable.

    */
}


//Q11 --> Fix the below variables and rewrite them in correct camelCase
//        let first_name = "siddhant"
//        let LASTNAME = "gadakh"
//        let A = 10

{
     let firstName = "siddhant";
     let lastName = "gadakh";
     let a = 10;

}


//Q12 --> Predict the output before running, then verify with node
//        let city = "Pune"
//        let City = "Mumbai"
//        console.log(city)
//        console.log(City)
//        HINT -> remember, JS is a case sensitive language
{
    //console.log(city) ===> Pune
    //console.log(City) ===> Mumbai
}


//Q13 --> Predict the output before running, then verify with node
//        const pi = 3.14
//        pi = 4
//        console.log(pi)
//        HINT -> check what happens when we update a const variable

{
    // Answer = type error will occur as we are trying ti assign value to a constant variable.

}