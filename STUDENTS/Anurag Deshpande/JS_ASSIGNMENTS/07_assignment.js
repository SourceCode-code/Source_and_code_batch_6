console.log("=========================================")
console.log("assignment 07")
console.log("Level 1")
console.log("=========================================")

/**
 * Exercises: Level 1
 */

// 1. Check if the user is old enough to drive.
//    age is 18 or above -> "You are old enough to drive."
//    age is below 18    -> "You are left with X years to drive."   ( X = 18 - age )
//    test with -> age = 30, 18, 15, 1
//    HINT -> this is either-or -> the perfect place for if...else.

let age = 30  //30, 18, 15, 1
if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    console.log(`You are left with ${18 - age} years to drive.`);
}
//Other Outputs
// age = 30 -> You are old enough to drive.
// age = 18 -> You are old enough to drive.
// age = 15 -> You are left with 3 years to drive.
// age = 1  -> You are left with 17 years to drive.


/**
 * age = 30
 * You are old enough to drive.
 *
 * age = 15
 * You are left with 3 years to drive.
 */
console.log("=========================================")

// 2. Compare the values of myAge and yourAge using if...else and print who is older.
//    myAge is fixed ( 25 ) -> test with yourAge = 30, 20, 25
//    yourAge is bigger -> "You are X years older than me."
//    myAge is bigger   -> "I am X years older than you."
//    both are equal    -> "We are of the same age."
//    HINT -> the difference is a simple subtraction -> X = the difference.


/**
 * yourAge = 30
 * You are 5 years older than me.
 *
 * yourAge = 20
 * I am 5 years older than you.
 *
 * yourAge = 25
 * We are of the same age.
 */

let myAge = 25;
let yourAge = 30;

if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
    console.log("We are of the same age.");
}


// Test yourAge = 30, 20, 25.
// other Output :
// You are 5 years older than me.
// I am 5 years older than you.
// We are of the same age.

console.log("=========================================")

// 3. Compare if 'a' is greater than 'b'.
//    implement it in TWO ways -> (a) using if...else   (b) using the ternary operator
//    both ways must print the SAME lines.
//    a is greater -> "4 is greater than 3"    ( use the variables in a template literal )
//    b is greater -> "3 is greater than 4"
//    equal        -> "4 and 3 are equal"
//    HINT -> the ternary gives ONE value, so console.log( a > b ? ... : ... ) is enough.

let a = 4;
let b = 3;

// (a) using if...else
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else if (b > a) {
    console.log(`${b} is greater than ${a}`);
} else {
    console.log(`${a} and ${b} are equal`);
}

// (b) using ternary operator
console.log(a > b ? `${a} is greater than ${b}` : b > a ? `${b} is greater than ${a}` : `${a} and ${b} are equal`);

console.log("=========================================")

// 4. Check if a number is even or odd.
//    test with -> number = 22, 99, 0
//    HINT -> even means the number divides by 2 with 0 remainder -> number % 2 === 0.
//    ( remember : % gives the remainder, a remainder of 0 means it divides perfectly )

let number = 22

/**
 * number = 22
 * 22 is an even number.
 *
 * number = 99
 * 99 is an odd number.
 */
if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is an odd number.`);
}

// 22 -> 22 is an even number.
// 99 -> 99 is an odd number.
// 0  -> 0 is an even number.
console.log("=========================================")
console.log("Level 2")
console.log("=========================================")
/**
 * Exercises: Level 2
 */

// 1. Give grades to students according to their scores.

let score = 95;

// Answer:
if (typeof score !== "number" || !Number.isFinite(score) || score < 0 || score > 100) {
    console.log("Invalid score -> the student was not present for the exam.");
} else if (score >= 80) {
    console.log("Grade : A");
} else if (score >= 70) {
    console.log("Grade : B");
} else if (score >= 60) {
    console.log("Grade : C");
} else if (score >= 50) {
    console.log("Grade : D");
} else {
    console.log("Grade : F ( failed )");
}

// other Outputs:
// score = 95        -> Grade : A
// score = 80        -> Grade : A
// score = 72        -> Grade : B
// score = 50        -> Grade : D
// score = 33        -> Grade : F ( failed )
// score = undefined -> Invalid score -> the student was not present for the exam.

console.log("=========================================")
// 2. Check the season based on the month number.

let monthNum = 12;

// Answer:
switch (monthNum) {
    case 12:
    case 1:
    case 2:
        console.log(`Month ${monthNum} is a Winter month.`);
        break;

    case 3:
    case 4:
    case 5:
        console.log(`Month ${monthNum} is a Summer month.`);
        break;

    case 6:
    case 7:
    case 8:
    case 9:
        console.log(`Month ${monthNum} is a Rainy month.`);
        break;

    case 10:
    case 11:
        console.log(`Month ${monthNum} is an Autumn month.`);
        break;

    default:
        console.log("Invalid month -> please enter a number between 1 and 12.");
}

// other Outputs:
// monthNum = 12 -> Month 12 is a Winter month.
// monthNum = 7  -> Month 7 is a Rainy month.
// monthNum = 4  -> Month 4 is a Summer month.
// monthNum = 15 -> Invalid month -> please enter a number between 1 and 12.

console.log("=========================================")
// 3. Check if a day is a weekend or working day, case-insensitively.

let day = "Saturday";
let cleanDay = day.toLowerCase();

switch (cleanDay) {
    case "saturday":
    case "sunday":
    case "sat":
    case "sun":
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()} is a weekend.`);
        break;

    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
    case "mon":
    case "tue":
    case "wed":
    case "thu":
    case "fri":
        console.log(`${day.charAt(0).toUpperCase() + day.slice(1).toLowerCase()} is a working day.`);
        break;

    default:
        console.log("Invalid day -> please check the spelling.");
}

// Test:
// day = "Saturday" -> Saturday is a weekend.
// day = "FrIDAy"   -> Friday is a working day.
// day = "Sunday"   -> Sunday is a weekend.
// day = "abc"      -> Invalid day -> please check the spelling.
// Bonus short names such as sat, sun, mon, tue, wed, thu and fri are accepted.

console.log("=========================================")
console.log("Level 3")
console.log("=========================================")
/**
 * Exercises: Level 3
 */

// 1. Write a program that tells the number of days in a month.

let month = "January";

// Answer:
let cleanMonth = month.toLowerCase();

switch (cleanMonth) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month} has 31 days.`);
        break;

    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month} has 30 days.`);
        break;

    case "february":
        console.log(`${month} has 28 days.`);
        break;

    default:
        console.log("Invalid month -> please check the spelling.");
}

// Test:
// month = "January" -> January has 31 days.
// month = "february" -> february has 28 days.
// month = "JuNe" -> JuNe has 30 days.
// month = "Febuary" -> Invalid month -> please check the spelling.
// month = "abc" -> Invalid month -> please check the spelling.
