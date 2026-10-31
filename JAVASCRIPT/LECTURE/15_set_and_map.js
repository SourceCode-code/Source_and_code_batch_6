// ============================================================
//  SET & MAP in JavaScript (ES6 / ECMAScript 2015)
// ============================================================
//  WHAT IS ES6?
//  ----------
//  ES6 = ECMAScript 2015. A major JavaScript update released
//  in 2015. It introduced two new data structures: SET and MAP.
//  ============================================================

// ============================================================
//  WHY USE SET AND MAP?
//  ------------------------------------------------------------
//  1.  Store & manage collections of data efficiently
//  2.  Remove duplicate values automatically (Set)
//  3.  Store key-value pairs where keys can be ANY type (Map)
//  4.  Perform set math operations (Union, Intersection, etc.)
//  ============================================================

//  KEY DIFFERENCE: Map vs Object
//  - Map keys can be ANY type (string, number, object, etc.)
//  - Map preserves insertion order
//  - Map has a built-in .size property
//  - Map has built-in .get(), .set(), .has(), .delete(), .clear()
//  ============================================================

// ============================================================
//  1.  SET  - A collection of UNIQUE values
// ============================================================
//  A Set is like an array but:
//    . No duplicate values allowed
//    . No index-based access (arr[0] does not work)
//    . Order of insertion is preserved
//  ============================================================

//  Example 1: Create a Set from an array (removes duplicates)
let arrayWithDuplicates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 4, 6, 8, 6, 5, 9, 5, 5, 69, 8, 65, 5
];

const uniqueSet = new Set(arrayWithDuplicates);

console.log(uniqueSet);
//  Expected output:  Set(11) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 69, 65 }
//  NOTE:  23 values entered, 11 unique values stored.

//  Example 2: Remove duplicates from an array of strings
let strArray = [
  "english", "marathi", "hindi", "german", "urdu", "french",
  "english", "marathi", "hindi"
];

let uniqueStr = new Set(strArray);

console.log(uniqueStr);
//  Expected output:  Set(6) { 'english', 'marathi', 'hindi', 'german', 'urdu', 'french' }

//  Convert the Set back to an array (2 common ways):
//  1. Spread operator (...)
let uniqueArray1 = [...uniqueStr];
console.log(uniqueArray1);
//  Expected output:  [ 'english', 'marathi', 'hindi', 'german', 'urdu', 'french' ]

//  2. Array.from()
let uniqueArray2 = Array.from(uniqueStr);
console.log(uniqueArray2);
//  Expected output:  [ 'english', 'marathi', 'hindi', 'german', 'urdu', 'french' ]

//  ============================================================
//  2.  IMPORTANT SET METHODS
//  ============================================================

//  a)  add(value)  - adds a value. Returns the Set (chainable)
let company = new Set();
console.log(company); //  Set(0) {}

company.add("amazon").add("Google");
console.log(company); //  Set(2) { 'amazon', 'Google' }

//  b)  delete(value)  - removes a value. Returns true/false
console.log(company.delete("amazon"));      //  true
console.log(company.delete("facebook"));    //  false (never added)
console.log(company); //  Set(1) { 'Google' }

//  c)  has(value)  - checks if a value exists. Returns true/false
console.log(uniqueStr.has("marathi"));   //  true
console.log(uniqueStr.has("kannada"));   //  false
//  NOTE:  has() is case-sensitive: "Marathi" !== "marathi"

//  d)  size  - number of elements in the Set
console.log(uniqueStr.size); //  6

//  e)  clear()  - removes ALL elements. Returns undefined!
let setWithValues = new Set(["abc", "def", "ghi"]);
console.log(setWithValues); //  Set(3) { 'abc', 'def', 'ghi' }

let result = setWithValues.clear();
console.log(result); //  undefined

console.log(setWithValues); //  Set(0) {}//  ============================================================
//  3.  LOOPS IN A SET
//  ============================================================
let loopSet = new Set([10, 20, 30, 40, 50, 60, 70, 80, 90, 20, 50, 40, 70, 90, 50]);
console.log(loopSet);
//  Expected output:  Set(9) { 10, 20, 30, 40, 50, 60, 70, 80, 90 }

//  Method 1:  for...of loop
for (let num of loopSet) {
  console.log(num);
}
//  Expected output:  10  20  30  40  50  60  70  80  90  (each on a new line)

//  Method 2:  forEach() method
loopSet.forEach((num) => {
  console.log(num);
});
//  Expected output:  10  20  30  40  50  60  70  80  90  (each on a new line)

//  NOTE:  forEach() in a Set passes (value, key, set) to the callback.
//  Since Sets are not keyed, the key is the same as the value.

//  ============================================================
//  4.  SET OPERATIONS  (Union, Intersection, Difference, Symmetric Difference)
//  ============================================================
//  These operations are based on mathematical set theory.

let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);

console.log(setA); //  Set(3) { 1, 2, 3 }
console.log(setB); //  Set(3) { 3, 4, 5 }

//  a)  UNION  (A U B)  -  all UNIQUE elements from both sets
let unionSet = new Set([...setA, ...setB]);
console.log(unionSet);
//  Expected output:  Set(5) { 1, 2, 3, 4, 5 }
//  Explanation:  [...setA, ...setB]  ->  [1, 2, 3, 3, 4, 5]
//               new Set(...)  -> removes the duplicate 3

//  b)  INTERSECTION  (A n B)  -  elements present in BOTH sets
let intersectionSet = new Set([...setA].filter((num) => setB.has(num)));
console.log(intersectionSet);
//  Expected output:  Set(1) { 3 }
//  Explanation:  Filter keeps only numbers that exist in both sets

//  c)  DIFFERENCE  (A - B)  -  elements in A but NOT in B
let differenceSet = new Set([...setA].filter((num) => !setB.has(num)));
console.log(differenceSet);
//  Expected output:  Set(2) { 1, 2 }

//  d)  SYMMETRIC DIFFERENCE  (A /_\ B)  -  elements in EITHER set but NOT in BOTH
let symmetricDifferenceSet = new Set([
  ...[...setA].filter((num) => !setB.has(num)),   // in A but not in B -> [1, 2]
  ...[...setB].filter((num) => !setA.has(num))    // in B but not in A -> [4, 5]
]);
console.log(symmetricDifferenceSet);
//  Expected output:  Set(4) { 1, 2, 4, 5 }

//  ============================================================
//  5.  IMPORTANT CONCEPT:  Object uniqueness in a Set
//  ============================================================
//  Sets remove duplicate PRIMITIVE values perfectly.
//  But objects are compared by REFERENCE, not by their contents.

let setWithPrimitives = new Set([1, 2, 2, 2, 5, 6, 4]);
console.log(setWithPrimitives);
//  Expected output:  Set(5) { 1, 2, 5, 6, 4 }

let obj1 = { name: "sid" };
let obj2 = { name: "sid" };

let setWithObjects = new Set([obj1, obj2]);
console.log(setWithObjects);
//  Expected output:  Set(2) { { name: 'sid' }, { name: 'sid' } }
console.log(setWithObjects.size);
//  Expected output:  2
//  WHY?  obj1 and obj2 are two DIFFERENT objects in memory,
//         even though they look identical.
//         JavaScript compares objects by reference, not by value.

let setWithSameRef = new Set([obj1, obj1]);
console.log(setWithSameRef);
//  Expected output:  Set(1) { { name: 'sid' } }
console.log(setWithSameRef.size);
//  Expected output:  1
//  Here obj1 and obj1 point to the SAME reference,
//  so it is treated as one item.

//  ============================================================
//  6.  MAP  -  A collection of KEY-VALUE PAIRS
//  ============================================================
//  A Map stores data as key-value pairs:
//    . Each key is unique (no duplicates allowed)
//    . Keys can be of ANY type (string, number, object, etc.)
//    . Order of insertion is preserved

//  Create an empty Map
let myMap = new Map();
console.log(myMap); //  Map(0) {}

//  Create a Map from an array of [key, value] arrays
let user = new Map([
  ["name", "Rahul"],
  ["age", "25"],
  ["age", "26"]    // duplicate key - later value overwrites earlier
]);

console.log(user);
//  Expected output:  Map(2) { 'name' => 'Rahul', 'age' => '26' }

//  NOTE:  "age" appears only once because keys must be unique.
//         The second "age" => "26" replaced the first "age" => "25".

//  ============================================================
//  7.  IMPORTANT MAP METHODS
//  ============================================================

//  a)  set(key, value)  - adds or updates a key-value pair
myMap.set("city", "Pune");
myMap.set("country", "India");
myMap.set(1, "number key");   // key can be a number!

console.log(myMap);
//  Expected output:  Map(5) {
//    'name' => 'Rahul',
//    'age' => '26',
//    'city' => 'Pune',
//    'country' => 'India',
//    1 => 'number key'
//  }

//  b)  get(key)  - retrieves the value for a key
console.log(myMap.get("name"));  //  Rahul
console.log(myMap.get("age"));   //  26
console.log(myMap.get("car"));   //  undefined (no such key)

//  c)  has(key)  - checks if a key exists
console.log(myMap.has("name"));  //  true
console.log(myMap.has("email")); //  false

//  d)  delete(key)  - removes a key-value pair
console.log(myMap.delete("city"));    //  true
console.log(myMap.delete("salary"));  //  false (never added)

console.log(myMap);
//  Expected output:  Map(4) {
//    'name' => 'Rahul',
//    'age' => '26',
//    'country' => 'India',
//    1 => 'number key'
//  }

//  e)  clear()  - removes ALL key-value pairs
myMap.clear();
console.log(myMap); //  Map(0) {}

//  f)  size  - number of key-value pairs
let tempMap = new Map([["a", 1], ["b", 2], ["c", 3]]);
console.log(tempMap.size); //  3

//  g)  forEach()  - loop through key-value pairs
let fruits = new Map([
  ["apple", 50],
  ["banana", 30],
  ["orange", 40]
]);

fruits.forEach((price, fruit) => {
  console.log(fruit + " costs " + price + " Rs");
});
//  Expected output:
//    apple costs 50 Rs
//    banana costs 30 Rs
//    orange costs 40 Rs

//  h)  keys()  - returns an iterator of all keys
console.log([...fruits.keys()]);
//  Expected output:  [ 'apple', 'banana', 'orange' ]

//  i)  values()  - returns an iterator of all values
console.log([...fruits.values()]);
//  Expected output:  [ 50, 30, 40 ]

//  j)  entries()  - returns an iterator of [key, value] pairs
console.log([...fruits.entries()]);
//  Expected output:  [
//    [ 'apple', 50 ],
//    [ 'banana', 30 ],
//    [ 'orange', 40 ]
//  ]

//  ============================================================
//  8.  MAP vs. OBJECT  -  WHEN TO USE WHICH?
//  ============================================================
//  | Feature                | Object                   | Map                         |
//  |------------------------|--------------------------|-----------------------------|
//  | Key types              | Only strings & Symbols   | Any type (string, number,  |
//  |                        |                          | object, array, etc.)        |
//  | Key order              | Only for string/Symbol   | Always insertion order      |
//  |                        | keys in modern JS        | (from ES2015)               |
//  | Size                   | No built-in .size        | Built-in .size property     |
//  | Built-in methods       | Manual (Object.keys() etc.)| .get(), .set(), .has(),    |
//  |                        |                          | .delete(), .clear()         |
//  | Iteration              | Not directly iterable    | Directly iterable           |
//  | Performance (frequent  | Slower for frequent add/ | Faster for frequent add/delete|
//  | add/delete)            | delete operations        | and lookup operations       |
//  | JSON support           | Native JSON.stringify()  | Not natively JSON-supportive|

//  Use a Map when:
//    . Keys are not strings
//    . You need to store key-value pairs with any type of key
//    . You need to iterate in insertion order
//    . You frequently add/remove key-value pairs

//  Use a regular object when:
//    . Keys are simple strings
//    . You need JSON serialization (JSON.stringify() / JSON.parse())
//    . You just need a simple key-value pair holder

//  ============================================================
//  9.  PRACTICAL EXAMPLES
//  ============================================================

//  Example 1:  Removing duplicates from a list of emails
let emails = [
  "a@mail.com", "b@mail.com", "a@mail.com",
  "c@mail.com", "b@mail.com", "d@mail.com"
];

let uniqueEmails = [...new Set(emails)];
console.log(uniqueEmails);
//  Expected output:  [ 'a@mail.com', 'b@mail.com', 'c@mail.com', 'd@mail.com' ]

//  Example 2:  Counting frequency of items in an array
let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
let frequency = new Map();

for (let item of items) {
  frequency.set(item, (frequency.get(item) || 0) + 1);
}

console.log(frequency);
//  Expected output:  Map(3) {
//    'apple' => 3,
//    'banana' => 2,
//    'orange' => 1
//  }

//  Example 3:  Student grade book (using objects as keys)
let studentGrades = new Map();
let student1 = { id: "S001", name: "Alice" };
let student2 = { id: "S002", name: "Bob" };

studentGrades.set(student1, { math: 90, science: 85 });
studentGrades.set(student2, { math: 78, science: 92 });

console.log(studentGrades.get(student1));
//  Expected output:  { math: 90, science: 85 }
console.log(studentGrades.get(student2).science);
//  Expected output:  92

//  ============================================================
//  10.  QUICK RECAP
//  ============================================================
//
//  SET
//  1. Collection of UNIQUE values
//  2. Similar to an array but no duplicates, no index access
//  3. Main methods: add(), delete(), has(), size, clear()
//  4. Use: Remove duplicates, unique value storage, set math
//
//  MAP
//  1. Collection of KEY-VALUE pairs
//  2. Keys can be any type (not just strings)
//  3. Main methods: set(), get(), has(), delete(), clear(), size
//  4. Use: Keyed data, counting frequencies, caching
//
//  ============================================================
//  END OF LECTURE 15 - SET & MAP
//  ============================================================