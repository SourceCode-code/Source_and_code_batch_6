//JSON -> JAVASCRIPT OBJECT NOTATATION

//WHY WAS JSON MADE OR WHAT ARE THE USE CASE
/**
 * JSON MAKES DATA MORE MANAGEABLE AND IT MAKES DATA MORE UNDERSTANDABLE/READABLE
 */

// WHAT ARE PRIMARY USECASES FOR A AUTOMATION TESTOR
/*
1 JSON IS USED TO STORED THE DATA FOR AUTOMATION
2 JSON IS USED TO SEND DATA FORM CLIENT SIDE TO SERVER SIDE AND VICE VERSA ( FOR REST API )

*/

// JSON IS NEW GEN ALTERNATIVE TO XML

/*
<?xml version="1.0" encoding="UTF-8"?>
<students>
    <student>
        <id>101</id>
        <name>Rahul</name>
        <age>20</age>
        <course>BCA</course>
        <city>Mumbai</city>
    </student>

    <student>
        <id>102</id>
        <name>Priya</name>
        <age>21</age>
        <course>BBA</course>
        <city>Pune</city>
    </student>
</students>
*/

/*

JSON EXAMPLE

{
  "students": [
    {
      "id": 101,
      "name": "Rahul",
      "age": 20,
      "course": "BCA",
      "city": "Mumbai"
    },
    {
      "id": 102,
      "name": "Priya",
      "age": 21,
      "course": "BBA",
      "city": "Pune"
    }
  ]
}
  */


// WHAT IS DIFFERENCE BETWEEN JSON AND OBJECT 
//IN JSON FOR BOTH KEY AND HAVE ARE WRAPPED ("DOUBLE")

/*
JSON EXAMPLE
 {
    "id": 102,
      "name": "Priya",
      "age": 21,
      "course": "BBA",
      "city": "Pune"
    }



    OBJECT EXAMPLE 

    {
    id: 102,
    name: "Priya",
    age: 21,
    course: "BBA",
    city: "Pune"
    }
*/



//-------------------- CONVERSION OF JSON INTO OBJECT AND VICE VERSA ---------------------------
// NOTE WHEN DELACRING YOUR JSON DATA IN JS FILE ALWAYS WRAP IT IN BACKTICKS 

// PARSE() -> THIS METHOD IS USED TO CONVERT YOUR JSON DATA INTO OBJECTS

let car_json = `{
    "brand": "Toyota",
    "model": "Fortuner",
    "year": 2025,
    "color": "Black",
    "fuel_type": "Diesel",
    "transmission": "Automatic",
    "seating_capacity": 7,
    "price": 3500000,
    "features": [
      "Air Conditioning",
      "Touchscreen Display",
      "Parking Sensors",
      "Sunroof"
    ],
    "available": true
}`
//sytanx

/*
varaiblename =JSON.parse(json data )
*/

let car_obj = JSON.parse(car_json)
console.log(car_obj)

/*
{
  brand: 'Toyota',
  model: 'Fortuner',
  year: 2025,
  color: 'Black',
  fuel_type: 'Diesel',
  transmission: 'Automatic',
  seating_capacity: 7,
  price: 3500000,
  features: [
    'Air Conditioning',
    'Touchscreen Display',
    'Parking Sensors',
    'Sunroof'
  ],
  available: true
}
  */

//STRINGIFY() -> THIS METHOD IS USED TO CONVERT OBJECT INTO JSON

const student_OBJ = {
    id: 101,
    name: "Rahul",
    age: 20,
    course: "BCA",
    city: "Mumbai"
};

let json_student_data = JSON.stringify(student_OBJ)

console.log(json_student_data) 
//{"id":101,"name":"Rahul","age":20,"course":"BCA","city":"Mumbai"}


let users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30,
    },
    Asab: {
        email: "asab@asab.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 25,
        isLoggedIn: false,
        points: 50,
    },
    Brook: {
        email: "daniel@daniel.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50,
    },
    Daniel: {
        email: "daniel@alex.com",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    John: {
        email: "john@john.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50,
    },
    Thomas: {
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    Paul: {
        email: "paul@paul.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
};


let JSON_EXAMPLE = JSON.stringify(users)
console.log(JSON_EXAMPLE)


// EXAMPLE -> CONVERSION OF DATA TO JSON BUT ONLY KEEPING THE NEEDED DATA 
console.log(users["Alex"])

let alex_json = JSON.stringify(users["Alex"])
console.log(alex_json)  //{"email":"alex@alex.com","skills":["HTML","CSS","JavaScript"],"age":20,"isLoggedIn":false,"points":30}


// complex --> 


// get the data and convert it into single object/json
//email 
//age 


let filter = {}

for(let key in users){
    filter[key] = {
        email:users[key].email,
        age:users[key].age
    }
}

console.log(filter)

/**
 * {
  Alex: { email: 'alex@alex.com', age: 20 },
  Asab: { email: 'asab@asab.com', age: 25 },
  Brook: { email: 'daniel@daniel.com', age: 30 },
  Daniel: { email: 'daniel@alex.com', age: 20 },
  John: { email: 'john@john.com', age: 20 },
  Thomas: { email: 'thomas@thomas.com', age: 20 },
  Paul: { email: 'paul@paul.com', age: 20 }
}
 */

let filter_json = JSON.stringify(filter)
console.log(filter_json)

/*
{"Alex":{"email":"alex@alex.com","age":20},"Asab":{"email":"asab@asab.com","age":25},"Brook":{"email":"daniel@daniel.com","age":30},"Daniel":{"email":"daniel@alex.com","age":20},"John":{"email":"john@john.com","age":20},"Thomas":{"email":"thomas@thomas.com","age":20},"Paul":{"email":"paul@paul.com","age":20}}
*/


let Paul= {
        email: "paul@paul.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 20,
        isLoggedIn: false,
        points: 40,
    }
//one line solution -> 

let p_json = JSON.stringify(Paul,["email","isLoggedIn"])
console.log(p_json)

//{"email":"paul@paul.com","isLoggedIn":false}


//JSON 
// WHY IS USED 
// CONVERSION OPERTAION 