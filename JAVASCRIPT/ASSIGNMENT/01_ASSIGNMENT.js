//Q1 --> you have write a code to print your name in the terminal
console.log("Pooja Hrishikesh Dombe")

// Write a single line comment which says, comments can make code readable
// Comments are uesed to make code readable


// Write another single comment which says, Welcome to JavaScript
// Welcome to JavaScript


// Write a multiline comment which says, comments can make code readable, easy to reuse and informative
/*

comments can make code readable,
easy to reuse and informative

*/


// Declare four variables without assigning values

{ // veriable declaration 

    let testStatus ;
    testStatus = "Passed" 
    console.log(testStatus) ;

    let testData ;
    testData = "Name";
    console.log(testData) ;

    let testId ;
    testId = "TC_SEARCH_001" ;
    console.log(testId);

    let testResult ;
    testResult = "Name = Pooja " ;
    console.log(testResult)

    /* only let variable we can delcare and then initialize later const 
    varibale must be initialized while declaring. */

}

// Declare four variables with assigned value

{ // veriable declaration with initialization

    let testStatus ;
    testStatus = "Passed" 
    console.log(testStatus) ;

    const testData = "Name" ;
    console.log(testData) ;

    const testId = "TC_SEARCH_001" ;
    console.log(testId);

    let testResult = "Name = Pooja " ;
    console.log(testResult)


}

// Declare variables to store your first name, last name, marital status, country and age in multiple lines

{ //  First Name, Last Name, Marital Status, Country, Age

    let first_Name = "Pooja" ;
    console.log(first_Name);

    let last_Name = "Patil"
    console.log(last_Name);

    let marital_status = "Married";
    console.log(marital_status);

    let country = "India";
    console.log(country);

    let age = "29";
    console.log(age);

}


// Declare variables to store your first name, last name, marital status, country and age in a single line

{ //  First Name, Last Name, Marital Status, Country, Age

    {
        let first_Name = "Pooja", last_Name = "Dombe", marital_Status = "Married", Country = "India", Age = "29";
        console.log(first_Name,last_Name,marital_Status,Country,Age);

    }

    {
        let [first_Name, last_Name, marital_Status,Country,age] = ["Pooja", "Dombe", "Married", "India", "29"];
        console.log(first_Name,last_Name,marital_Status,Country,age);

    }

}


// Declare two variables myAge and yourAge and assign them initial values and log to the console.

const myAge = "29";
console.log(myAge);

let yourAge = "30";
console.log(yourAge);

// Assignment complete.!!

