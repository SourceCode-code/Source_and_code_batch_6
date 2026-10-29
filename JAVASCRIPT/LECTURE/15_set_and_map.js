// IN JS 2015 - ES6 

/*
in the update of ES6 there where 2 data structure introduce and they were called SET and MAP

They were introduce to store or manage the data effeicelnty 

set and map is non primitive  because they are derived form object 

WHY  DO WE SET AND MAP 

1 TO STORE AND MANAGE THE COLLECTION OF DATA
2 TO REMOVE THE DUPLICATE VALUES
3 TO STORE KEY VALUE PAIR 
4 TO PERFORM MULTIPLE OPERATIONS SUCH UNION AND INTERSECTION 

*/


// SET  -> set is collection of unique values.
// it is closer and simlar to array 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 4, 6, 8, 6, 5, 9, 5, 5, 69, 8, 65, 5]

const unique_set = new Set(array)


console.log(unique_set)

//Set(11) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 69, 65 }

// difference between array and set 
//             array                  set
/* duplicate -- allowed               not allowed 
  order        delcaring              order depneds upon insertion
  access ---   arr[index]              index access is not allowed 
  property     length                  size 

  */



// case : - using set to remove duplicates form array 

let str_arry = ["english", "marathi", "hindi", "german", "urdu", "french", "english", "marathi", "hindi"]

// converting array into set 

let unique_str = new Set(str_arry)
console.log(unique_str) //Set(6) { 'english', 'marathi', 'hindi', 'german', 'urdu', 'french' }

// convert set back into array 

// way 1  using ...

let unique_ar = [...unique_str]

console.log(unique_ar) //[ 'english', 'marathi', 'hindi', 'german', 'urdu', 'french' ]

//way 2

let arr2 = Array.from(unique_str)

console.log(arr2)


// IMPORANT SET METHODS 

////Set(6) { 'english', 'marathi', 'hindi', 'german', 'urdu', 'french' }


// add() -> this adds the value in set 

let company = new Set()
console.log(company) //Set(0) {}

company.add("amazon").add("Google")

console.log(company)

// delete()-> remove the value form set 

company.delete("amazon")
company.delete("facebook")

console.log(company) //Set(1) { 'Google' }


//has -> this will check if the value is present or not in set (case sensitive )


console.log(unique_str.has("marathi"))


//size -> give the number of element presnt in set

console.log(unique_str.size)


// clear() -> if we want to clear all the values form the set then we use clear 

let no_values = unique_str.clear() //
console.log(no_values) //undefined

// Note -> clear will return undefine it will not return a clear set 

let set_a= new Set(["abc","def","ghi"])
set_a.clear()
console.log(set_a)
// Set(0) {}


// when ever we use a method 
// action 
// return type method 







//----------------------------------------------------------------------------------



// what refernce point -> point form where data is created 

const a = 10
const arr = [10,20,30]


// method -> action and return 




//LOOPS -> 

let loop_SET = new Set([10,20,30,40,50,60,70,80,90,20,50,40,70,90,50])

console.log(loop_SET)

for(let num of loop_SET){
    console.log(num)
}

// forEach()-->

loop_SET.forEach((num)=>{
    console.log(num)
})


// SET OPERATIONS -->
// set operation are used to combine collection of data or get the common data 


let set_1 =new Set([1,2,3])

let set_2 =new Set([3,4,5])

console.log(set_1)
console.log(set_2)

// UNION (A U B) - union combines all unqiue values in set 

let union_set = new Set([...set_1,...set_2])

console.log(union_set) //Set(5) { 1, 2, 3, 4, 5 }


// INTERSECTION (A n B) -> this will return only common value in both set 

let insertion_Set = new Set([...set_1].filter((num)=>set_2.has(num)))

console.log(insertion_Set)

// DIFFERENCE (A-B) -> it gives the value that are in a but not in b 


let difference_Set = new Set([...set_1].filter((num)=>!set_2.has(num)))

console.log(difference_Set)


// Symmeteric difference  (A /_\ B-> values that exits in ether set but not in both 


let SYM_difference_Set = new Set([
    ...[...set_1].filter((num)=>!set_2.has(num)),
    ...[...set_2].filter((num)=>!set_1.has(num))
])




console.log(SYM_difference_Set)


// MODERN 
console.log("________________________________________________")
console.log(set_1.union(set_2))

console.log(set_1.intersection(set_2))

console.log(set_1.difference(set_2))

console.log(set_1.symmetricDifference(set_2))

console.log("________________________________________________")


/*
IMPORANT CONCEPT -> 
object uniqueness  in set

set removes duplicate primitive value , 
but object are compared with reference 


*/

let set_z = new Set([1,2,2,2,5,6,4])

console.log(set_z) //Set(5) { 1, 2, 5, 6, 4 }

let obj_1 = {name:"sid"}
let obj_2 = {name:"sid"}

let set_y = new Set([obj_1,obj_2])

console.log(set_y)
console.log(set_y.size)

// even thou both object have same key and value there values in set the size is two 
// beacuse the object is compare the by reference 

let check  = new Set([obj_1,obj_1])

console.log(check)
console.log(check.size)


// MAP -> A map is collection of unique key and value pairs 

// each key is unique within map 
// unlike a regular object map allows key of any type 


// Delecare how delecre 

let MAP = new Map()

console.log(MAP)


// how does a map represnt a key and value 
//[key,value]
//[key_2,"value_2"]


let user = new Map([["name","rahul"],["age","25"],["age","26"]])

console.log(user) //Map(2) { 'name' => 'rahul', 'age' => '26' }