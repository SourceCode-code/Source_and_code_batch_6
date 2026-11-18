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




let password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

console.log(password_pattern.test("abc123"));



// ectaract all number form the string 


let string = " hello my name is siddhant is 26 years old and i have 5 years of expereince as softweare i started my carrer in 2021 "


console.log(string.match(/\d+/g)) //[ '26', '5', '2021' ]


// count the vowels in the string 



let vowels_string = " hello my name is sIddhant is 26 years old and i have 5 years of expereince as softweare i started my carrer in 2021 "

/**
 * 
 * let norm_str = /hello my name is anurag/gi

let v_count = 0

for (let i = 0; i < norm_str.length; i++) {
    let v_words = norm_str[i].toLowerCase() // one CHARACTER -> lowercase so that "A" / "E" also match
    if (v_words === "a" || v_words === "e" || v_words === "i" || v_words === "o" || v_words === "u") {
        v_count++
    }
}

console.log(v_count) // 8
 * 
 */

console.log(vowels_string.match(/[aeiou]/gi))
console.log(vowels_string.match(/[aeiou]/gi).length)


// clean the text 

let encyrtstring = "h,!.el!.lo w'o.r,l!!!!!!!!!!!d my n!!!!!!ame is j.............ohn"

console.log(encyrtstring.replace(/[,!.']/g,"")) //


// encyrtption and decryption 


let password = "12345"





