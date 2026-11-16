// --------------------------------------------------------------------------
// Regular expression 
//---------------------------------------
 
//REGEX -> 
/*
regex is a pattern of character that defines search patterns and uses it to match find vaildate and maniuplate string 

// REAL WORLD 


/**
 * - VALDITION OF EMAIL / PHONE / PASWORD 
 * - SEARCHING FOR PATTERN IN  LARGE TEXT ( LIKE GOOGLE SEARCH )
 * - EXTRACT DATA AND CLEANING OF DATA 
 * - PARSING YOUR DATA ( )
 */

// HOW TO  RECREATE A REGEX 

/**
 1 leteral sytax -- this is recoomend to because it always helps in dynaic scriptmg 

 SYTANX - 

 /pattern/flags 



*/

let reg = /siddhant/gi


let example = " hello123 world344643 welcome to js "


let varaible = example.replace(/\d/g,"")
console.log(varaible) // hello world welcome to js 



// most used syntax or pattern 

/*

\d - matches with digits 
\D - matches any non digits 
\w - any words 
\W - matches with non world chgarct
\s - white spaces 
\S - non white spaces 




// flags - > this part deals with scope 

/g -> this helps with searching in gobal context - seaches the full string ()
/i -> case insentive flag 




*/

// console.log("JS"==="js")


// method that use is 


// test() -> this method retrun true or false based upon the conditions or the pattern if found it return true if not false 

let str_1 = " i am learning js and the topic for today is Regex in JS java"

let result = /js/gi

console.log(result.test(str_1))


// valid a pan card number 

let pan1 = 'ABCDE1234F'
let pan2  ='ABAB12345Y'

// validate is this valide or invlaid --> format

let valid_pan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/

console.log(valid_pan.test(pan1))

console.log(valid_pan.test(pan2))


/**
 * Major things to know ?
 * 
 * ^ -> verify startswith for string 
 * $ -> verifies endswith 
 * [a-z] --> any lowercase aplha bate 
 * [A-Z] -> UPPERCAEES 
 * [a-zA-Z] ->all upper case and all lowercase 
 * {number} -- the length of sytnax
 * 
 * 
 * //quantifiers 
 * 
 * * -> zero or more {0,}
 * + -> one or more
 * ? -> optional 
 * 
 * 
 * 
 * 
 * 
 */

// [a-zA-Z]  ===  [A-Z]/i

// match , test , replace 



let vaild_gmail ="hello@gmail.com" //
let invalid  = "bye@yahho.com" //


let gmail_reg = /^[a-zA-Z0-9]+@gmail\.com$/

console.log(gmail_reg.test(vaild_gmail))

console.log(gmail_reg.test(invalid))



//find valid adahar 

let valid_adhar = "1234 5678 9123"

let vaild_ad_reg = /^[2-9][0-9]{3} ?[0-9]{4} ?[0-9]{4}$/



console.log(vaild_ad_reg.test(valid_adhar)) //false

