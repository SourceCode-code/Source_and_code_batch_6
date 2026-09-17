// ============================================
// 03_ASSIGNMENT -> TOPIC : JS DATA TYPE - NUMBERS (Math.floor / ceil / round / toFixed / random)
// BASED ON : LECTURE/03_JS_DataType_Numbers.js  +  THEORY_NOTES/03_JS_DataType_Numbers.md

// HOW TO RUN : open terminal -> node 03_ASSIGNMENT.js
// RULES -> for every "predict the output" question, FIRST write your answer as a comment,
//          THEN write the code, run it and verify. Write your final answer + reason in comments.
// ============================================

// ------------------- SECTION A : BASICS -------------------

//Q1 --> Declare one integer variable and one floating (decimal) variable of your choice.
//       Print both values AND their datatypes using typeof.
//       HINT -> in JS there is NO separate int/float. what does typeof give for BOTH ?
{
    let num_1 = 99;       // Number
    let num_2 = 99.99;     // Number
    console.log(num_1, num_2, typeof num_1, typeof num_2);

}

//Q2 --> A shopkeeper wants to display a price in exact 2 decimal places.
//       let price = 499.5
//       Print the price in 2 decimal format, and ALSO print the datatype of that formatted value.
//       HINT -> which method formats decimals ? and what datatype does it RETURN ?
//       (getting the datatype wrong here is the most common mistake students make)
{
    let price = 499.5;
    price = price.toFixed(2); 
    console.log(price, typeof price );
}

//Q3 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2))
//       console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5))
//       console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9))
//       HINT -> floor = down, ceil = up, round = nearest (.5 and above goes UP)
{
    console.log(Math.floor(10.2), Math.ceil(10.2), Math.round(10.2));
    // My Predictions - 10 , 11, 10

    console.log(Math.floor(10.5), Math.ceil(10.5), Math.round(10.5));
    // My Predictions - 10 , 11, 11

    console.log(Math.floor(10.9), Math.ceil(10.9), Math.round(10.9));
    // My Predictions - 10 , 11, 11
    
}

//Q4 --> INTERVIEW QUESTION -> Math.round() and .toFixed() BOTH look like they "round".
//       Write the difference between them in comments (minimum 3 points).
//       Think about : prefix (Math. or not), return type, what each one is used for.

{
    /*
    Math.round() - 1. rounds up the value to the nearest Integer
                   2. 0 to 0.4 will be round down & 0.5 to 0.9 will be round up.
                   3. this is math mentod
                   4. rounds up the value and dislpys the integer.
    
    .tifixed() - 1. displays the dights after decimal point as per the given argument.
                 2. while displaying the digits after decimal point it will round up and disply.
                 3. this is directly operated on variable or value, on variable method.
                 4. displays the floating value, the after decimal number will be ronded-up and 
                    displays till given no of digits

    */

}

// ------------------- SECTION B : PREDICT THE OUTPUT -------------------

//Q5 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(Math.floor(-4.2))
//       console.log(Math.ceil(-4.8))
//       console.log(Math.round(-4.5))
//       HINT -> floor and ceil do NOT care about "closeness". floor always goes to the LOWER
//       integer, ceil always goes to the HIGHER integer. Think on a number line, not by size.
{
    /*
    console.log(Math.floor(-4.2)) ===> -5
    console.log(Math.ceil(-4.8)) ===> -4
    console.log(Math.round(-4.5)) ===> -4
    */

}

//Q6 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let price = 99.99
//       console.log(Math.floor(price), Math.ceil(price), Math.round(price), price.toFixed(1))
//       HINT -> one of these four outputs is NOT a number. which one ? how can you tell from the console ?
{
    // 99 100 100 100
    // to fix will show value till one digit + it will also roudup and that's why it becomes 100.

}

//Q7 --> Predict the output of the below code (write answer as comment, then run and verify)
//       let x = 10.658912355
//       console.log(x.toFixed(2))
//       console.log(x)
//       HINT -> does toFixed() CHANGE the original variable or only give back a new value ?
{
    // console.log(x.toFixed(2)) ===> 10.66  ----> tofix will also rounds-up the value and displays but not change. 
    // console.log(x) ===> 10.658912355  ----> displays assigned value 
}

//Q8 --> A student writes this line to generate a random number between 1 and 10 :
//       console.log(Math.floor(Math.random() * 10) + 1)
//       Answer in comments :
//       a) what is the SMALLEST value it can ever print ?
//       b) what is the LARGEST value it can ever print ?
//       c) can Math.random() itself ever return exactly 1 ? why not ?
//       HINT -> Math.random() gives 0 to 0.999..., multiply by 10 -> 0 to 9.999...
{
    /*
    a) what is the SMALLEST value it can ever print ? ---> 1
    b) what is the LARGEST value it can ever print ? ---> 10
    c) can Math.random() itself ever return exactly 1 ? why not ? ---> No , It can not return exactly 1 as
       its range is 0 to 0.9999... 
    */

}

//Q9 --> Predict the output of the below code (write answer as comment, then run and verify)
//       console.log(10.658912355.toFixed(2) + 10.658912355.toFixed(2))
//       HINT -> what does the + symbol do when BOTH sides are strings ?
//       (this one catches even experienced developers)
{
    // 10.6610.66 ----> connects the two output togather.
}


// ------------------- SECTION C : LOGIC BUILDING -------------------

//Q10 --> Write a program that simulates rolling TWO dice.
//        Print the value of each dice and the combined total.
//        If the total is 12, also print "DOUBLE SIX!".
//        HINT -> each dice = Math.floor(Math.random() * 6) + 1
{
    let dice_1 ;
    let dice_2 ;
    dice_1 = Math.floor(Math.random()*6)+1;
    dice_2 = Math.floor(Math.random()*6)+1;
    console.log(dice_1, dice_2, `${dice_1}${dice_2}`);

}

//Q11 --> Write a function randomBetween(min, max) that returns a random INTEGER
//        between min and max (both included). Test it 3 times with (10, 20).
//        HINT -> lecture golden formula -> Math.floor(Math.random() * (max - min + 1)) + min
//        Challenge -> explain in comments WHY we use (max - min + 1) and not (max - min) ?
//        (what would go wrong at the highest end if we removed the +1 ?)
{
    console.log(Math.floor(Math.random()*(20-10+1))+10);
    /* 
       If the random value come 0 then the output will become 0 and to avoid that we 
       use +1 so that will get atleast 1 as output of (Math.random() * (max - min + 1) this and then by
       adding it to min value we will get the output as per requied range.

       If we remove the +1 then if random no generates it will always dispalys min value as everything 
       else become 0.

    */

}

//Q12 --> Write a function randomFloat(min, max) that returns a random FLOAT between min and max,
//        rounded to 1 decimal place.
//        Example -> randomFloat(5.5, 9.3) can give 6.7, 8.2, etc.
//        HINT -> here you do NOT need Math.floor... think WHY floats must stay as they are,
//        and which method is used at the END to fix the decimal places.
{
    let randomFloat;
    randomFloat = (Math.random()*(9.3-5.5 + 1))+5.5;
    console.log(randomFloat.toFixed(1));

    // OR

    console.log(((Math.random()*(9.3-5.5 + 1))+5.5).toFixed(1));
}

//Q13 --> Write a function roundTo5(num) that rounds ANY number to the NEAREST multiple of 5.
//        Example -> roundTo5(28) -> 30 | roundTo5(32) -> 30 | roundTo5(37) -> 35
//        HINT -> Math.round() rounds to the nearest INTEGER. how do you make 5 behave like 1 ?
//        (divide by 5 first, round, then ...?)
{
    let num, roundTo5;
    num = 37;
    roundTo5 = Math.round(num/5)*5;
    console.log(roundTo5);
}

//Q14 --> Write a program to generate a random 4-digit OTP.
//        Rules -> OTP must be between 1000 and 9999 (never 3 digits).
//        Print it as "Your OTP is : XXXX"
//        HINT -> use the golden formula from Q11 with min = 1000, max = 9999
{
    console.log("Your OTP is :"," ", Math.floor(Math.random()*10000+1));

    //OR

    console.log("Your OTP is :"," ", Math.floor(Math.random()*(9999-1000+1))+1000);


}

//Q15 --> Write a program to generate a random INDIAN mobile number.
//        Rules -> total 10 digits, first digit must be 6, 7, 8 or 9.
//        Print it as a single readable string like "9876543210"
//        HINT -> split in 2 parts like the lecture : firstDigit (6-9) + remaining 9 digits.
//        Challenge -> how do you JOIN two numbers so they print as ONE string, not "6 987654321" ?
{
    let mobileNumber, firstDigit, remainingDigits;
    firstDigit = Math.floor(Math.random()*(9-6+1))+6;
    remainingDigits = Math.floor(Math.random()*1000000000);
    mobileNumber = `${firstDigit}${remainingDigits}`;
    console.log(mobileNumber);
    console.log(firstDigit+remainingDigits);
}

//Q16 --> Given the number below, write code to round it to 2 decimal places
//        and store the RESULT as an actual NUMBER (not a string).
//        let amount = 1234.56789    // expected output -> 1234.57
//        HINT -> one way : multiply by 100, round it, then divide by 100.
//        Then compare your result with amount.toFixed(2) using typeof - what is the difference ?
{
    let amount = 1234.56789;
    amount = (Math.round(amount*100))/100;
    console.log(amount, typeof amount);


    amount = amount.toFixed(2);
    console.log(amount, typeof amount);
    // type of will always give output as string type. 
    
}

// ------------------- SECTION D : INTERVIEW QUESTIONS (answer in comments) -------------------

//Q17 --> INTERVIEW QUESTION -> predict and explain (do NOT guess, reason on a number line) :
//        Math.floor(-4.2) , Math.ceil(-4.8) , Math.round(-4.5)
//        Then answer : why is Math.floor(-4.2) NOT -4 ?
//        HINT -> "-4.2 rounded down" means moving AWAY from zero, not towards it.
{
 //Math.floor(-4.2) ---> -5 Because it will round down to nearest lower digit and for -4.2 , -5 is lower than -4
 //Math.ceil(-4.8) ---> -4 Because it will round up to nearest highest digit and for -4.8 , -4 is higher than -5
 //Math.round(-4.5) ---> -4 because it will round to nearest integer value and here nearest value is -4 than -5
}

//Q18 --> INTERVIEW QUESTION -> what is the output range of Math.random() ?
//        Write in comments : minimum value, maximum value, and whether it can ever reach the maximum.
//        Also mention any 3 real-world uses of Math.random() (from the lecture).
{
    /*
    minimum value - 0
    maximum value - 0.9999...
    yes it will go to maximum value but that will be always less than 1.

    Use - 1. to generate OTP 
          2. to generate key
          3. to genarate adhar number
    */
}


//Q19 --> INTERVIEW QUESTION (CLASSIC) -> predict the output of the below code and explain why :
//        console.log(0.1 + 0.2)
//        console.log(0.1 + 0.2 === 0.3)
//        HINT -> JS follows IEEE-754 (binary floating point). some decimal numbers CANNOT be
//        stored exactly in binary. How would you FIX the comparison ? (one line, use a method
//        you learned in this lecture)
{
    /* console.log(0.1 + 0.2) ===> 0.30000000000000004  this will add the number and prints total but if we want to diplay 
       them togather then we have to convert them into string and then we can concat them togather.)


    */   
}

// ------------------- SECTION E : BONUS CHALLENGE -------------------

//Q20 --> BONUS -> generate a random Aadhaar number in the EXACT format "XXXX XXXX XXXX".
//        Rules -> 12 digits total, grouped in 3 blocks of 4 digits with a space between blocks.
//        Print it as one single string. Example -> "4821 9057 3364"
//        HINT -> each block must be a 4-DIGIT number (1000 to 9999) so it never shows 3 digits,
//        then JOIN the 3 blocks with spaces.
{
    let group_1, group_2, group_3;
    group_1 = Math.floor(Math.random()*(9999-1000+1)+1000);
    group_2 = Math.floor(Math.random()*(9999-1000+1)+1000);
    group_3 = Math.floor(Math.random()*(9999-1000+1)+1000);

    console.log("Adhaar No :"," ",`${group_1} ${group_2} ${group_3}`);
    console.log("Adhaar No :"," ",group_1.toString()," ",group_2.toString()," ",group_3.toString());
    console.log("Adhaar No : "+ group_1 + " " + group_2 + " " + group_3);


}

//Q21 --> BONUS (MINI PROJECT - BILLING RECEIPT) ->
//        A customer buys 3 items with these prices : 199.99, 449.50, 89.75
//        a) calculate the total bill
//        b) apply a random discount between 5% and 15% on the total (use randomBetween logic)
//        c) calculate the final amount after discount
//        d) print the receipt in EXACTLY this format (use toFixed) :
//           Total      : Rs. 739.24
//           Discount   : 10.0%
//           Final Bill : Rs. 665.32
//        
{
    let [item_1, item_2, item_3] = [199.99, 449.50, 89.75] ;
    let total = item_1+item_2+item_3;
    console.log(total);
    let discount = Math.floor(Math.random()*(15-5+1))+5;   
    console.log(discount);
    let finalBill = total - (total/discount);
    console.log(finalBill);
    
}

// ============================================
// SUBMISSION CHECKLIST
// 1. every "predict" question has your guess written BEFORE you ran the code
// 2. every Q has its verified answer in comments
// 3. file runs without any error -> node 03_ASSIGNMENT.js
// ============================================