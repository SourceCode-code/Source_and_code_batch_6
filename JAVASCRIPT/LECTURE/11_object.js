// OBJECTS

// WHY IS OBJECT  

let person_info = ["siddhant","arjun","gadakh",27,7020400749,25]
// MAJOR DRAWBACK IS THE DATA IS NOT DESCRIPTPITVE  

// WHY AN OBJECT / WHAT IS AN OBJECT 

// OBJECT IS THE NON PRIMITIVE DESCRIPTIVE DATA 

/*
1 OBJECT IS DELECARED OR IDENFITY  {}
2 OBJECT WILL ALWAYS HAVE A KEY AND VALUE PAIR 
3 EVERY VALUE IN A OBJECT IS SEPRATED BY COMMA ,
4 OBJECT HAS A PROPERTY CALLED AS PROTOTYPE 
5 THE COMBINATION OF KEY AND VALUE IN A OBJECT IS ALSO PROPETRY 
6 METHOD IN OBJECT ARE CREATED WITH HELP FUNCTION 

*/


/*

SYTNAX 

CONST VARIABLE/OBJECTNAME = {

KEY:"VALUE",
KEY_2:"VALUE_2"

}
*/

// NOW A REAL EXAMPLE 

const user_info = {
    name:"vaibhav",
    age:29,
    skills:["html","css","js","cy","pw"],
    hobbies:["coding","reading"]
}

console.log(user_info)

// NON PRIMITIVE DATATYPE HAS 4 OPERATIONS 

/**
 * ADDITION
 * DELETE
 * UPDATE
 * RETRIVE 
 */

// IN OBJECT WE HAVE TWO SYNTAX FOR THIS METHODS

// 1 DOT NOTATION

//2 BARCKET NOTATION 

// WHY 2 NOATATION BEACUSE DOT NOTATATION DOESNT WORK IN LOOPS 

const person = {
  name: "Alex",
  age: 20,
  city: "Mumbai",
  isStudent: true
};

//RETRIVE--> to get the value form object  

//1 DOT
console.log(person.name)


//2 BARCKET 
console.log(person["name"])

//ADD --> adding a key and value to object 

// 1 DOT 

person.email ="Alex@gmail.com"
console.log(person)

// 2 BRACKET 

person["sex"]="Male"
console.log(person)


// UPDATE - to update the key and value in object 

// 1 DOT   -->
person.email="Alex_work@gmail.com"
console.log(person)

//2 BRACKET -->
person["sex"]="M"
console.log(person)

//DELETE  --> remove the key and value from object 

// 1 DOT 
delete person.email
console.log(person)

// BRACKET  
delete person["sex"]
console.log(person)

//-----------------------------------------------------------LOOPS IN OBJECT 
// syntax for array loop 

// for(let i =0 ;i< Array.length;i++){
//   //code
// }


const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2024,
  color: "Black",
  price: 25000,
  fuelType: "Petrol",
  isElectric: false,
};


// syntax 

for(let key in car){
  // console.log(car[key])

  console.log(`${key}->${car[key]}`)
}




//-----------------------------------METHODS 

// Object.assign() --> it will copy your object without changing the orignal object 
//(copy - paste )

let Toyota_Camre = Object.assign({},car)
console.log(Toyota_Camre)

//Object.keys() --> gets all the keys form the object but the output array 

let Toyota_Camre_key = Object.keys(Toyota_Camre)
console.log(Toyota_Camre_key) 

//object.values() -->gets all the values form the object but the output array

let Toyota_Camre_value = Object.values(Toyota_Camre)
console.log(Toyota_Camre_value) 



//Object.entires()-> this will get you each key and value in an array
let Toyota_Camre_value_k = Object.entries(Toyota_Camre)
console.log(Toyota_Camre_value_k) 

//hasownproperty() -> this is used tp check if object has a key/ property
console.log(car.hasOwnProperty("isElectric"))





const profiles = [
    {
        firstName: "Vihaan",
        lastName: "Mehta",
        age: 28,
        experience: 6,
        skills: ["TypeScript", "CI/CD"],
        position: "Automation Tester",
    },
    {
        firstName: "Rohan",
        lastName: "Joshi",
        age: 29,
        experience: 11,
        skills: ["TypeScript", "JavaScript", "Cypress", "Docker"],
        position: "Technical Lead",
    },
    {
        firstName: "Vihaan",
        lastName: "Deshmukh",
        age: 32,
        experience: 1,
        skills: ["Python", "TypeScript"],
        position: "Software Engineer",
    },
    {
        firstName: "Ishaan",
        lastName: "Pandey",
        age: 31,
        experience: 14,
        skills: ["Python", "Cypress"],
        position: "Systems Engineer",
    },
    {
        firstName: "Ishaan",
        lastName: "Deshmukh",
        age: 25,
        experience: 1,
        skills: ["Java", "Playwright", "JavaScript", "SQL"],
        position: "Systems Engineer",
    },
    {
        firstName: "Rohan",
        lastName: "Joshi",
        age: 33,
        experience: 3,
        skills: ["JavaScript", "Java", "Docker", "TypeScript"],
        position: "Full-Stack Developer",
    },
    {
        firstName: "Pranav",
        lastName: "Joshi",
        age: 24,
        experience: 2,
        skills: ["JavaScript", "GitHub Actions", "Playwright", "TypeScript"],
        position: "Data Analyst",
    },
    {
        firstName: "Rohan",
        lastName: "Nayak",
        age: 24,
        experience: 10,
        skills: ["JavaScript", "GitHub Actions", "Playwright"],
        position: "Backend Developer",
    },
    {
        firstName: "Arjun",
        lastName: "Nayak",
        age: 36,
        experience: 4,
        skills: ["Java", "Playwright", "Docker"],
        position: "Systems Engineer",
    },
    {
        firstName: "Vikram",
        lastName: "Joshi",
        age: 34,
        experience: 1,
        skills: ["python"],
        position: "Full-Stack Developer",
    },
];


// form the above data i want to print name of all user 


let ar = [
  "A",
  "B",
  "C",
  "D"
]

//loop
for(let i =0;i<ar.length;i++){
  console.log(ar[i])
}


// 
for(let i=0;i<profiles.length;i++){
  console.log(`${profiles[i]["firstName"]} ${profiles[i]["lastName"]}`)
}

// //forEach()
// ar.forEach((el,index,arr)=>{console.log(el)})

profiles.forEach((el,index,arr)=>{
  console.log(`${el.firstName} ${el.lastName}`)
})


//print the name of candites/profiles who has python skills

console.log("_____________________________________________________________________________")


profiles.forEach((el,index,arr)=>{
  if(el.skills.includes("Python")){
  console.log(`${el.firstName} ${el.lastName}`)
  }

})