let student_info ={
    name_of_student :"shivani",
    middle_name: "mankeshwar",
    sirname :"sarkale"
}

//Add
student_info.city="Latur"
student_info.number=201251552
student_info["class"]="Batch-5"

console.log(student_info)
 /*{
  name_of_student: 'shivani',
  middle_name: 'mankeshwar',
  sirname: 'sarkale',
  city: 'Latur',
  number: 201251552,
  class: 'Batch-5'
}
  */

//update
student_info.city="Tuljapur"
student_info ["sirname"]="kshirsagar"
console.log(student_info)
/*{
  name_of_student: 'shivani',
  middle_name: 'mankeshwar',
  sirname: 'kshirsagar',
  city: 'Tuljapur',
  number: 201251552
}*/


//retrive

console.log(student_info.name_of_student) //shivani
console.log(student_info.class)//Batch-5
console.log(student_info["middle_name"])//mankeshwar
console.log(student_info[ "number"]) //201251552



 //delete
console.log(delete student_info.number) //true
// delete student_info.number
console.log(student_info)
/*{
  name_of_student: 'shivani',
  middle_name: 'mankeshwar',
  sirname: 'kshirsagar',
  city: 'Tuljapur',
  class: 'Batch-5'
}*/

console.log(delete student_info.number) //true