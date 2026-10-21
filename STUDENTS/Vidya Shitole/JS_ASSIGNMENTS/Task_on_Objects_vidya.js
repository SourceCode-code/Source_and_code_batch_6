// OBJECTS - OBJECT IS THE NON PRIMITIVE DESCRIPTIVE DATA 

/*
SYTNAX 

CONST VARIABLE/OBJECTNAME = {

KEY:"VALUE",
KEY_2:"VALUE_2"

}
*/

//Example : 
const emp_info = {
    name:"Vidya",
    id:54462,
    skills:["html","css","js","cy","pw"],
    designation: "Software QE Analyst",
    hobbies:["coding","reading"]
}
console.log(emp_info)

//operations on Objects - //1 using DOT  OR //2 BARCKET
/*
1]  RETRIVE 
2]  ADDITION
3]  DELETE
4]  UPDATE
 */
// 1]  RETRIVE --> to get the value form object 

console.log("Retrive Employee Information:- ")
console.log(emp_info.name)       //using DOT notation
console.log(emp_info.designation)
console.log(emp_info["name"])   //using Bracket notation
console.log(emp_info["skills"])
console.log("*********************************************")

//  2]  ADDITION --> ADD --> adding a key and value to object 

console.log("Adding Employee Information:- ")
emp_info.email = "vidyashitole@gmail.com"                //adding a key & value using DOT notation
//console.log(emp_info)

emp_info["gender"]="Female"                             //adding a key & value using Bracket notation
console.log(emp_info)
console.log("*********************************************")

//  3] UPDATE - to update the key and value in object 
console.log("Updating Employee Information:- ")
emp_info.id = "EI-54462"
emp_info.email = "vidyashitole.work@gmail.com"          //Updating a key & value using DOT notation
//console.log(emp_info) 

emp_info["skills"] = ["C","CPP","Java","js","cy","pw"]
emp_info["gender"]="F"                                  //Updating a key & value using Bracket notation
console.log(emp_info)
console.log("*********************************************")


//  4] DELETE  --> remove the key and value from object 
console.log("Deleting Employee Information:- ")
delete emp_info.gender                                  //Deleting a key & value using DOT notation
delete emp_info["hobbies"]                              //Deleting a key & value using Bracket notation
console.log(emp_info)
console.log("*********************************************")


/* OUTPUT

{
  name: 'Vidya',
  id: 54462,
  skills: [ 'html', 'css', 'js', 'cy', 'pw' ],
  designation: 'Software QE Analyst',
  hobbies: [ 'coding', 'reading' ]
}

*********************************************
Retrive Employee Information:- 
Vidya
Software QE Analyst
Vidya
[ 'html', 'css', 'js', 'cy', 'pw' ]

*********************************************
Adding Employee Information:- 
{
  name: 'Vidya',
  id: 54462,
  skills: [ 'html', 'css', 'js', 'cy', 'pw' ],
  designation: 'Software QE Analyst',
  hobbies: [ 'coding', 'reading' ],
  email: 'vidyashitole@gmail.com',
  gender: 'Female'
}
*********************************************
Updating Employee Information:- 
{
  name: 'Vidya',
  id: 'EI-54462',
  skills: [ 'C', 'CPP', 'Java', 'js', 'cy', 'pw' ],
  designation: 'Software QE Analyst',
  hobbies: [ 'coding', 'reading' ],
  email: 'vidyashitole.work@gmail.com',
  gender: 'F'
}

*********************************************
Deleting Employee Information:- 
{
  name: 'Vidya',
  id: 'EI-54462',
  skills: [ 'C', 'CPP', 'Java', 'js', 'cy', 'pw' ],
  designation: 'Software QE Analyst',
  email: 'vidyashitole.work@gmail.com'
}
*********************************************
*/