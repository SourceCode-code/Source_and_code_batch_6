// ============================================
// 04_ASSIGNMENT -> TOPIC : JS STRINGS (+ revision of basics, datatypes & numbers)
// BASED ON : LECTURE/04_JS_String.js  +  THEORY_NOTES/04_JS_String.md
//
// HOW TO RUN : open terminal -> node 04_ASSIGNMENT.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : STRING BASICS -------------------

//Q1 --> Declare the SAME string "JavaScript" in all 3 ways
//       (double quotes, single quotes, backticks).
//       Print all 3 values AND their datatypes using typeof.
//       HINT -> all 3 should print "string". if not, find the mistake.
{
    let str1 = "JavaScript";
    console.log(str1, typeof str1);

    let str2 = 'JavaScript';
    console.log(str2, typeof str2);

    let str3 = `JavaScript`;
    console.log(str3, typeof str3);


}

//Q2 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let a = "123"
//       let b = 123
//       let c = "true"
//       let d = true
//       console.log(typeof a, typeof b, typeof c, typeof d)
//       HINT -> quotes CHANGE everything. revise lecture 02 (datatypes) + lecture 04.

{
    let a = "123";   // output = 123  type = string
    console.log(a, typeof a);

    let b = 123;   // output = 123  type = number
    console.log(b, typeof b);  

    let c = "true";    // output = true  type = string
    console.log(c, typeof c); 

    let d = true;  // output = true  type = boolen
    console.log(d, typeof d); 

}


//Q3 --> let city = "Aurangabad"
//       a) print the length of the string
//       b) print the FIRST character
//       c) print the LAST character WITHOUT counting manually
//       HINT -> last element equation -> index (length - 1)
{
    let city = "Aurangabad";
    console.log(city.length);

    console.log(city.charAt(0));
    console.log(city[0]);

    console.log(city[city.length-1]);

}

//Q4 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let spaces = "   "
//       console.log(spaces.length)
//       console.log("".length)
//       HINT -> are spaces characters too ? what is the length of an EMPTY string ?
{
    let spaces = "   "; 
    console.log(spaces.length); // Answer = length is 3
    console.log("".length) // Answer = length is 0

}

//Q5 --> Given the string below, write code to print the character
//       at the 4th index and the 9th index. Then print the character
//       at index 100 and index -5 and observe what comes.
//       let lang = "JavaScript"
//       HINT -> str[100] and str.charAt(100) do NOT give the same thing. find out the difference.

{
    let lang = "JavaScript";

    console.log(lang[4], lang[9]);  // this will give 4th and 9th char
    console.log(lang.substring(4,10)); // this will print index 4 to 9 and last index is excluded - index 10

    console.log(lang[100]);   // output = undefined 
    console.log(lang.at(100)); // output = undefined 
    console.log(lang.charAt(100)); // outut = empty string

    console.log(lang[-5]);   // output = undefined
    console.log(lang.at(-5));   // output = c
    console.log(lang.charAt(-5)); // outut = empty string

}

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let name = "Siddhant"
//       console.log(`hello ${name}`)
//       console.log("hello ${name}")
//       console.log('hello ${name}')
//       HINT -> ${} placeholders work ONLY in one type of quotes. which one and why ?

{
    let name = "Siddhant";
    console.log(`hello ${name}`); // output = Siddhant
    console.log("hello ${name}"); // output = hello ${name} - Because ${} will work with backticks only here it will treated as part of string
    console.log('hello ${name}'); // output = hello ${name} - Because ${} will work with backticks only here it will treated as part of string

}

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let str = "JavaScript"
//       console.log(str.includes("script"))
//       console.log(str.includes("Script"))
//       console.log(str.includes("java"))
//       HINT -> includes(), startsWith(), endsWith() are ALL ______ sensitive methods.
{
    let str = "JavaScript";
    console.log(str.includes("script"));  // output = false  output return type is boolen
    console.log(str.includes("Script"));  // output = ture  output return type is boolen
    console.log(str.includes("java"));    // output = false  output return type is boolen

    // Javascript is case sensitive so this methods will match the exact case and give result accordingly.
    // includes(), startsWith(), endsWith() are ALL  _case_ sensitive methods.    

}

//Q8 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let greeting = "hello"
//       greeting.toUpperCase()
//       console.log(greeting)
//       HINT -> STRINGS ARE ______ in javascript. what does toUpperCase() actually RETURN
//       and where does that returned value go in this code ?
{
    let greeting = "hello";
    greeting.toUpperCase(); // HELLO
    console.log(greeting); /* output = hello  ---> string are immutable so any methothod can 
                                                   not change orignal string , but they create 
                                                   new string and shows output */

    /*
    STRINGS ARE ____ in javascript. what does toUpperCase() actually RETURN
    and where does that returned value go in this code ?

    STRINGS ARE _Immutable , and toUpperCase() returns HELLO and this value is stored in new string
    but here this new string is not saved and declared so this will only show output.
    */

}

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log("HelloWorld".toUpperCase().length)
//       console.log("HelloWorld".toLowerCase().charAt(0))
//       console.log("HelloWorld".length.toLowerCase())   // <- this one ERRORS. why ?
//       HINT -> chaining works only when the output of the first method is a VALID INPUT
//       to the second method. what datatype does .length give ?
{
    console.log("HelloWorld".toUpperCase().length); // output = 10 --- last method is length so output will be 10
    console.log("HelloWorld".toLowerCase().charAt(0)); // output = h --- 1st methods output is input to 2nd method 
    //console.log("HelloWorld".length.toLowerCase());  // output = Error --- 1st methods outpt is not valid input for second method

   // what datatype does .length give = number and number is not valid input for string method.

}

//Q10 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let str = "JavaScript"
//        console.log(str.substring(4, 10))
//        console.log(str.substr(4, 6))
//        console.log(str.slice(4))
//        HINT -> substring takes ENDING index (NOT included), substr takes NUMBER OF
//        characters, slice with one argument goes till the END of the string.
//        all 3 should print the same word here - are they ? why ?
{
    let str = "JavaScript";
    console.log(str.substring(4, 10)); // output = Script 
    console.log(str.substr(4, 6)); // output = Script
    console.log(str.slice(4)); // output = Script

    /* 
    All will give same word because
    .substring() = start with indes 4 and end with index 10 but excludes last-index 10, 
                   also if end index is out of range it will only print till end of string 
                   and will not add anything ad end also not shows any error.

    .substr() = start with indec 4 and print till 6 charactors incuding staring index.
    
    .slice() = start with indes 4 and end with index 10 but excludes last-index 10, 
               also if end index is out of range it will only print till end of string 
               and will not add anything ad end also not shows any error.
    */

}

//Q11 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let fruit = "banana apple banana"
//        console.log(fruit.indexOf("a"))
//        console.log(fruit.lastIndexOf("a"))
//        console.log(fruit.indexOf("mango"))
//        HINT -> indexOf = FIRST instance, lastIndexOf = LAST instance,
//        and when the value is NOT found the answer is always ______ ?
{
    let fruit = "banana apple banana";
    console.log(fruit.indexOf("a")); // output = 1
    console.log(fruit.lastIndexOf("a")); // output = 18
    console.log(fruit.indexOf("mango")); // ourout = -1

    //when the value is NOT found the answer is always = -1

}

//Q12 --> Predict the output of the below code (write answer as comment, then run and verify)
//        let messy = "   JS   "
//        console.log(messy.trim().length)
//        console.log(messy.trimStart().length)
//        console.log(messy.trimEnd().length)
//        console.log(messy.length)
//        HINT -> count the spaces carefully. trim removes start AND end,
//        trimStart removes ONLY start, trimEnd removes ONLY end.
{
    let messy = "   JS   ";
    console.log(messy.trim().length); //output=JS
    console.log(messy.trimStart().length); //output= 5 ---> will remove starting whitespace but end will remains as it is.
    console.log(messy.trimEnd().length); //output= 5 ---> will remove endinging whitespace but start will remains as it is.
    console.log(messy.length); //output = 8 

}

//Q13 --> Predict the output of the below code (write answer as comment, then run and verify)
//        console.log("a,b,c".split(",").length)
//        console.log("hello".split("").length)
//        console.log("hello world".split(" "))
//        HINT -> split("") with an EMPTY string splits at EVERY single character.
{
    console.log("a,b,c".split(",").length); // output = 3
    console.log("hello".split("").length); // output = 5
    console.log("hello world".split(" ")); // output = array [hello, world]

}

// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q14 --> let username = "   SIDDHANT   "
//        Clean this username -> remove the extra spaces from both sides
//        and convert it to lowercase. Print the final result as "siddhant".
//        HINT -> method chaining -> trim() + toLowerCase()

{
    let username = "   SIDDHANT   ";
    username = (username.trim()).toLowerCase();
    console.log(username);
}

//Q15 --> let sentence = " remove all the spaces from this sentence "
//        Print the sentence with EVERY space removed.
//        Then answer in comments : why does trim() NOT work here ?
//        HINT -> trim() only removes start/end spaces. which method removes ALL instances ?
{
    let sentence = " remove all the spaces from this sentence ";
    sentence = sentence.replaceAll(" ","");
    console.log(sentence);

}

//Q16 --> let review = "this movie is bad and the acting is bad too"
//        a) replace only the FIRST "bad" with "good"
//        b) replace ALL "bad" with "good"
//        Print both results separately.
//        HINT -> replace() vs replaceAll() -> first instance vs ALL instances
{
    let review = "this movie is bad and the acting is bad too";
    console.log(review.replace("bad","good"));
    console.log(review.replaceAll("bad","good"));

}

//Q17 --> let colors = "red,green,blue,yellow"
//        Split it into an array and print EACH color separately using its index.
//        Expected output (4 console.logs) -> red | green | blue | yellow
//        HINT -> split(",") gives an array -> arr[0], arr[1], arr[2] ...
{
    let colors = "red,green,blue,yellow";
    let colors_1= colors.split(" ");
    console.log(colors_1)

    console.log(colors.substring(0,3));
    console.log(colors.substring(4,9));
    console.log(colors.substring(10,14));
    console.log(colors.substring(15));
    
}

//Q18 --> Extract the word "Script" from "JavaScript" in THREE different ways
//        using substring(), substr() and slice(). Print all 3 results.
//        HINT -> JavaScript -> J(0)a(1)v(2)a(3)S(4)... "Script" starts at index 4
//        and is 6 characters long.
{
    let extractMethods = "JavaScript";
    console.log(extractMethods.substr(4));
    console.log(extractMethods.substring(4)); // OR console.log(extractMethods.substring(4,10));
    console.log(extractMethods.slice(4)); // OR console.log(extractMethods.slice(4,10));

}

//Q19 --> let line = "i am learning javascript and javascript is fun"
//        a) print the total number of characters (including spaces)
//        b) print the number of characters EXCLUDING spaces
//        HINT -> for (b) -> remove all spaces first, then use .length
{
    let line = "i am learning javascript and javascript is fun";
    console.log(line.length);
    console.log(line.replaceAll(" ","").length);

}

//Q20 --> REVISION (numbers + strings together) ->
//        Generate a random 6-digit OTP (100000 to 999999) using Math methods
//        and print it using a template literal like "Your OTP is : 483920".
//        HINT -> golden formula from lecture 03 -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> why can a 6-digit OTP NEVER start with 0 ? what min value guarantees this ?
{
    let otp;
    otp = Math.floor(Math.random()*(999999 - 100000 + 1)+100000);
    console.log(`"Your OTP is : ${otp}"`);

    /* 
       here random never staers with 0 because if random no generated is 0 and that will 
       multiply with (max - min + 1) and all becomes 0 but last we add min value which is 100000 
       and due to this we never get OTP staring with 0 and min value guarantees is - 100000

    */   

}

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q21 --> INTERVIEW QUESTION -> "Strings are immutable in JavaScript."
//        a) explain this statement in 2-3 lines
          /*
          Strings are immutable means we can not change the oroginal string value , whenever we perform 
          any operation on string we get new string in return and that operation will never modify the 
          original string , if we want to get the new result value then we have to strore it into another 
          variable or need to reassign it to the same variable.
          */

//        b) PROVE it with a small code example (change a string with a method,
//           then print the original and show it is unchanged)
{
    let str1 = "Hrishikesh";
    console.log(str1.toLowerCase); // output = hrishikesh
    console.log(str1); // output = Hrishikesh
}
//        c) so how do you "change" a string in real projects ? what must you do with
//           the value returned by the method ?
           /*
           whenever we perform any operation on string we get new string in return and that operation 
           will never modify the original string ,to save the new result value we have to strore it 
           into another variable or need to reassign it to the same variable.
           */


//Q22 --> INTERVIEW QUESTION -> write the difference between substring(), substr() and slice()
//        in the form of a table in comments (minimum 3 points).
//        Think about : what the 2nd argument means, end index included or not,
//        negative index support, and which one is deprecated.
//        Also write WHICH one you would use in a real project and why.
{
/*
.substr()
1. starting index and length(number of charactors)
2. when length given as 0 it will return empty string
3. negative staring index - it will go backword and starts counting from 1 and give output according to given digit
4. 

.substring()
1.starting index and ending index (but exclude ending index)
2.when starting index > ending index = it will swap values and give output
3.negative staring index = it will make it as 0 and start from index 0

.Slice()
1.starting index and ending index (but exclude ending index)
2.when starting index > ending index = returns empty index
3.negative staring index = it will go backword and starts counting from 1 and give output according to given digit


*/
}

//Q23 --> INTERVIEW QUESTION (CLASSIC) -> predict and explain :
//        console.log("5" + 5)
//        console.log("5" - 5)
//        HINT -> the + operator joins strings (concatenation), but the - operator
//        works on numbers only. revise datatype conversion from lecture 02 + 03.
//        then answer : why do the two lines give DIFFERENT types of output ?
{
    console.log("5" + 5) // output = 55 --- when we add any number value with string value it will concat and give result.

    console.log("5" - 5) /* output = 0 --- "5" is string but - is airthmatic operation and JS will convert string to number 
                                            number value and 5-5 becomes 0 and give result.*/
}

//Q24 --> INTERVIEW QUESTION -> what is the difference between a PROPERTY and a METHOD ?
//        Answer with one string example of each, and explain the syntax difference
//        (brackets vs no brackets).
{
    /*
    Property = Property gives information about the variable = Information (how it is) 
               this will not have brackets as they dont need to call the veriable.

         Syntax = veriableName.length;     
    */           

    console.log("Hrishikesh".length);


    /*
    Method = Methods will tell what operation it can perform = Action (what it can do)
             this will have the brackets as they need to call the veriable to perform the specified action
             
         Syntax = veriableName.toUpperCase();    
    */

    console.log("Hrishikesh".toUpperCase());

}

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q25 --> BONUS -> RANDOM PASSWORD GENERATOR ->
//        From the string below, generate a random 4-character password.
//        Rules -> pick 4 RANDOM characters, join them and print like "a7Kq".
//        let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
//        HINT -> reuse the random alphabet logic from class 4 times
//        (4 separate picks stored in 4 variables), then join with template literal.
//        NOTE -> real passwords mix cases, this is just the beginner version :)
{
    let PASSWORD, grp1, grp2, grp3, grp4, str1;
    str1 = "abcdefghijklmnopqrstuvwxyz0123456789"
    str1 = str1.split("");
    grp1 = Math.floor(Math.random()*(36+1));
    grp2 = Math.floor(Math.random()*(36+1));
    grp3 = Math.floor(Math.random()*(36+1));
    grp4 = Math.floor(Math.random()*(36+1));

    console.log(`PASSWORD is : ${str1[grp1]}${str1[grp2]}${str1[grp3]}${str1[grp4]}`);

}

//Q26 --> BONUS (MINI PROJECT - USERNAME & EMAIL GENERATOR) ->
//        Given the details below :
//        let firstName = "Siddhant"
//        let lastName = "Gadakh"
//        a) generate a username -> first 3 letters of firstName (lowercase)
//           + first 3 letters of lastName (lowercase) + a random 2-digit number (10 to 99)
//           Example -> "sidgad73"
//        b) generate the email -> username + "@gmail.com"
//        c) print a small ID CARD in EXACTLY this format (use template literals) :
//           Name    : Siddhant Gadakh
//           User ID : sidgad73
//           Email   : sidgad73@gmail.com
//        HINT -> slice() for the name parts, golden formula for the random number,
//        toLowerCase() for the username, template literal to join everything.
{
    let firstName , lastName , mailID;
    firstName = "Siddhant".toLowerCase();
    lastName = "Gadakh".toLowerCase();
    console.log(`Your Mail ID is : ${firstName.substring(0,3)}${lastName.substring(0,3)}${Math.floor(Math.random()*(99-10+1))+10}@gmail.com`);

}

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 04_ASSIGNMENT.js
// ============================================

