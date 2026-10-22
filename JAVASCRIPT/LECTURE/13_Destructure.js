// Desctructing -> exacrting values form array or object and store them into varaibles are called destrcuting

let array = [1, 2, 3]

let num_1 = array[0]
let num_2 = array[1]
let num_3 = array[2]

console.log(num_1)
console.log(num_2)
console.log(num_3)

//desturting of an array

//syntax

/*
let [varaible_a,varible_b,varaible_c]=arrayname 

*/


let array_ex_2 = ["mango", "apple", "kiwi"]

let [furit1, furit2, furit3] = array_ex_2

console.log(furit2)
console.log(furit3)
console.log(furit1)


let name_array = ["sid", "amol", "oleg", "ram"]

//1 destructuing as a whole

let [name_1, name_2, name_3] = name_array



console.log(name_1)
console.log(name_2)


//SKIPPING VALUES 
let [n1, , , n4] = name_array

console.log(n1)
console.log(n4)


// NESTED ARRAY 

let fullstack = [["html", "css", "js", "react", "angular"], ["moogodb", "java", "springboot", "python"]]

// desturcte this into 2 array first is fornt end and second is back 

let [frontEnd, backEnd] = fullstack

console.log(frontEnd)
console.log(backEnd)


let [[f1, f2, f3, f4, f5], [b1, b2, b3, b4]] = fullstack


console.log(f1)
console.log(b4)


//SPREADING -> 

let number_ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//... spread opertor 
let [a, b, ...rest] = number_ar

console.log(a)
console.log(b)
console.log(rest)




/**
 * OBJECT DESTRUCTING
 * 
 * why is needed 
 * 
 * API RESPONSE HANDLE
 * REACT PROPS
 * AUTOMATION FRAMEWORKS
 */






let object = {
    xx: 1,
    yy: 2,
    zz: 3
}

let object_2 = {
    xx: 1,
    yy: 2,
    zz: 3
}
console.log(object.xx)
console.log(object["zz"])


// DESTRUCTING STYNAX 

//NOTE :- VARAIBLE NAME MUST MATCH THE KEY 

// let {key1,key2,key3} = obj
console.log("___________________________________")

let { xx, yy, zz } = object
console.log(xx)
console.log(zz)

// renaming varibales 
let { xx: m, yy: n, zz: o } = object

console.log(m)


//nested object 

let user = {
    email: "asab@asab.com",
    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ]
}


let {email,skills}= user
let {email:em,skills:[sk1,sk2,sk3]}= user


console.log(email)
console.log(skills)


console.log(em)
console.log(sk3)

// API RESPONSE 

let RESPONSE = {
    status :200,
    data:{
        username:"sid",
        password:"qwedr321113"
    }
}

let {status,data}= RESPONSE

// console.log(id)
// console.log(pw)

console.log(data)



// interview


let array_a=[1,2,3,4]
let array_b=[5,6,7,8]

// now concat this arrays without using any method or loops 


console.log([...array_a,...array_b])


// //[
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]