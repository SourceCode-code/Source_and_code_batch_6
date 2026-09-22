//DATA TYPE CONVERSION 

// WE NEED TO  CONVERT STRING TO NUMBER AND VICE VERSA 

console.log(typeof 7895) // number 
console.log(typeof "1") // string

console.log(1 + "1") //11 


//CONVERSION OF STRING TO NUMBER 

let str_num_1 = '123456789'

console.log(typeof str_num_1) //string


//1 NUMBER() --> THIS WIL CONVERT YOUR STRING INTO NUMBERS

 let one=Number("ASDFGHJKMNBVC")
// you can convert letters into number 

let str_num_2 = "987452145852"

console.log(Number(str_num_2)) //987452145852

console.log(typeof Number(str_num_2)) //number

//2 parseFloat() -> this STring into floating number 

let str_num_3 = "123.456"

console.log(parseFloat(str_num_3))  //123.456

console.log(typeof parseFloat(str_num_3)) //number


//3 parseInt() -> this strig into intergers 

let str_num_4 = "53841.5135"

console.log(parseInt(str_num_4))  //53841

console.log(typeof parseInt(str_num_4)) //number


// NUMBER TO STRING 

// STRING() ->this will convert number to string

let number = 7020400749

console.log(String(number)) //7020400749
console.log(typeof String(number)) //7020400749

//toString()-> this will convert number to string


console.log(number.toString()) //7020400749
console.log(typeof number.toString()) //7020400749



//QUESTION FOR YOU FOR ASSIOGNEMNT

console.log(5+5)
console.log(5+"5")
console.log("5"-5)
console.log(5-"5")
console.log("5"*5)
console.log("5"-true)
console.log("5"-false)
console.log("5"+true)
console.log("5"+false)