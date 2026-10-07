console.log("=============================================")
console.log("Section A")
console.log("=============================================")
//Q1 --> let strTen = "10"
console.log("Q1")
//       let numTen = 10
let strTen = "10"
let numTen = 10
//       Check if the typeof strTen is EXACTLY equal to typeof numTen.
//       Then convert strTen to a number and check again. Print both results.
//       HINT -> typeof strTen === typeof numTen  -> what comes first time ?
//       after Number(strTen) what changes ?git add. 
console.log(typeof strTen) // string
console.log(typeof numTen) // number
console.log(typeof strTen === typeof numTen) // false
let strTen1 = Number(strTen) 
console.log(strTen1) // 10
console.log(typeof strTen1 === typeof numTen) // true



