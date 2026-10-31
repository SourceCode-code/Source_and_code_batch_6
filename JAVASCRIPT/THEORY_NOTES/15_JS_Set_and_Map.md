# 15 - JavaScript Sets & Maps : Theory Notes

> These notes cover **all 10 sections of the lecture**: **why Sets & Maps** (the ES6 problem), **what is a Set**, **creating Sets & removing duplicates**, **Set methods** (`add`, `delete`, `has`, `size`, `clear`), **looping over Sets** (`for...of`, `forEach`), **Set operations** (Union, Intersection, Difference, Symmetric Difference), **what is a Map**, **Map methods** (`set`, `get`, `has`, `delete`, `clear`, `size`, `forEach`, `keys`, `values`, `entries`), **Map vs Object** (when to use which), and **practical examples** with frequency counting and grade books.

> Read these along with the lecture file `LECTURE/15_set_and_map.js`.

---

## 1. What is ES6? (Why do we need Sets & Maps?)

- **ES6 = ECMAScript 2015**. A major JavaScript update released in 2015.
- It introduced **two new data structures**: `SET` and `MAP`.
- Before ES6, the only ways to store collections in JavaScript were **arrays** and **objects**.

### Why Use Set and Map?

| Reason | Set | Map |
|--------|-----|-----|
| 1. Store & manage collections of data efficiently | ✅ | ✅ |
| 2. Remove duplicate values automatically | ✅ | — |
| 3. Store key-value pairs where keys can be ANY type | — | ✅ |
| 4. Perform set math operations (Union, Intersection, etc.) | ✅ | — |

---

## 2. Key Differences: Map vs Object

| Feature | Object | Map |
|---------|--------|-----|
| 1. Key types | Only strings & Symbols | Any type (string, number, object, array, etc.) |
| 2. Key order | Only for string/Symbol keys in modern JS | Always insertion order (from ES2015) |
| 3. Size | No built-in `.size` | Built-in `.size` property |
| 4. Built-in methods | Manual (`Object.keys()` etc.) | `.get()`, `.set()`, `.has()`, `.delete()`, `.clear()` |
| 5. Iteration | Not directly iterable | Directly iterable |
| 6. Performance (frequent add/delete) | Slower for frequent add/delete ops | Faster for frequent add/delete and lookup operations |
| 7. JSON support | Native `JSON.stringify()` / `JSON.parse()` | Not natively JSON-supportive |

### Use a Map when:
- Keys are not strings
- You need to store key-value pairs with any type of key
- You need to iterate in insertion order
- You frequently add/remove key-value pairs

### Use a regular Object when:
- Keys are simple strings
- You need JSON serialization (`JSON.stringify()` / `JSON.parse()`)
- You just need a simple key-value pair holder

---

## 3. SET - A Collection of UNIQUE Values

- A **Set** is like an array but with these rules:
  - **No duplicate values allowed**
  - **No index-based access** (`arr[0]` does **not** work)
  - **Order of insertion is preserved**

### 3.1 Create a Set from an Array (Removes Duplicates)

```js
let arrayWithDuplicates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 4, 6, 8, 6, 5, 9, 5, 5, 69, 8, 65, 5
];

const uniqueSet = new Set(arrayWithDuplicates);

console.log(uniqueSet);
// Expected output:  Set(11) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 69, 65 }
// NOTE:  23 values entered, 11 unique values stored.
```

### 3.2 Remove Duplicates from an Array of Strings

```js
let strArray = [
  "english", "marathi", "hindi", "german", "urdu", "french",
  "english", "marathi", "hindi"
];

let uniqueStr = new Set(strArray);

console.log(uniqueStr);
// Expected output:  Set(6) { 'english', 'marathi', 'hindi', 'german', 'urdu', 'french' }
```

### 3.3 Convert the Set Back to an Array (2 Common Ways)

**Way 1: Spread operator (`...`)**

```js
let uniqueArray1 = [...uniqueStr];
console.log(uniqueArray1);
// Expected output:  [ 'english', 'marathi', 'hindi', 'german', 'urdu', 'french' ]
```

**Way 2: `Array.from()`**

```js
let uniqueArray2 = Array.from(uniqueStr);
console.log(uniqueArray2);
// Expected output:  [ 'english', 'marathi', 'hindi', 'german', 'urdu', 'french' ]
```

---

## 4. Important Set Methods

### a) `add(value)` — Adds a value

- Returns the **Set** itself → so calls are **chainable**.
- If the value already exists, it is **ignored** (duplicates not allowed).

```js
let company = new Set();
console.log(company); //  Set(0) {}

company.add("amazon").add("Google");
console.log(company); //  Set(2) { 'amazon', 'Google' }
```

### b) `delete(value)` — Removes a value

- Returns `true` if the value was found and removed.
- Returns `false` if the value was not found.

```js
console.log(company.delete("amazon"));      //  true
console.log(company.delete("facebook"));    //  false (never added)
console.log(company); //  Set(1) { 'Google' }
```

### c) `has(value)` — Checks if a value exists

- Returns `true` or `false`.

```js
console.log(uniqueStr.has("marathi"));   //  true
console.log(uniqueStr.has("kannada"));   //  false
// NOTE:  has() is very fast — O(1) lookup
```

### d) `size` — Number of elements in the Set

```js
console.log(uniqueStr.size); //  6
```

### e) `clear()` — Removes ALL elements

- Returns `undefined`.

```js
let setWithValues = new Set(["abc", "def", "ghi"]);
console.log(setWithValues); //  Set(3) { 'abc', 'def', 'ghi' }

let result = setWithValues.clear();
console.log(result); //  undefined

console.log(setWithValues); //  Set(0) {}
```


## 5. Loops in a Set

### Method 1: `for...of` loop

```js
let loopSet = new Set([10, 20, 30, 40, 50, 60, 70, 80, 90, 20, 50, 40, 70, 90, 50]);
console.log(loopSet); //  Set(9) { 10, 20, 30, 40, 50, 60, 70, 80, 90 }

for (let num of loopSet) {
  console.log(num);
}
// Expected output:  10  20  30  40  50  60  70  80  90  (each on a new line)
```

### Method 2: `forEach()` method

```js
loopSet.forEach((num) => {
  console.log(num);
});
// Expected output:  10  20  30  40  50  60  70  80  90  (each on a new line)
```

> **NOTE:** `forEach()` in a Set passes `(value, key, set)` to the callback.
> Since Sets are not keyed, the `key` is the **same as the `value`**.

---

## 6. Set Operations (Union, Intersection, Difference, Symmetric Difference)

These operations are based on **mathematical set theory**.

```js
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);

console.log(setA); //  Set(3) { 1, 2, 3 }
console.log(setB); //  Set(3) { 3, 4, 5 }
```

### a) UNION (`A ∪ B`) — All unique elements from both sets

```js
let unionSet = new Set([...setA, ...setB]);
console.log(unionSet);
// Expected output:  Set(5) { 1, 2, 3, 4, 5 }
// Explanation: [...setA, ...setB] -> [1, 2, 3, 3, 4, 5]
//              new Set(...) -> removes the duplicate 3
```

### b) INTERSECTION (`A ∩ B`) — Elements present in BOTH sets

```js
let intersectionSet = new Set([...setA].filter((num) => setB.has(num)));
console.log(intersectionSet);
// Expected output:  Set(1) { 3 }
// Explanation: Filter keeps only numbers that exist in both sets
```

### c) DIFFERENCE (`A - B`) — Elements in A but NOT in B

```js
let differenceSet = new Set([...setA].filter((num) => !setB.has(num)));
console.log(differenceSet);
// Expected output:  Set(2) { 1, 2 }
```

### d) SYMMETRIC DIFFERENCE (`A △ B`) — Elements in EITHER set but NOT in BOTH

```js
let symmetricDifferenceSet = new Set([
  ...[...setA].filter((num) => !setB.has(num)),   // in A but not in B -> [1, 2]
  ...[...setB].filter((num) => !setA.has(num))    // in B but not in A -> [4, 5]
]);
console.log(symmetricDifferenceSet);
// Expected output:  Set(4) { 1, 2, 4, 5 }
```

---

## 7. Important Concept: Object Uniqueness in a Set

- Sets remove duplicate **primitive** values perfectly.
- But **objects are compared by reference**, not by their contents.

```js
let setWithPrimitives = new Set([1, 2, 2, 2, 5, 6, 4]);
console.log(setWithPrimitives);
// Expected output:  Set(5) { 1, 2, 5, 6, 4 }

let obj1 = { name: "sid" };
let obj2 = { name: "sid" };

## 8. MAP - A Collection of KEY-VALUE Pairs

- A Map stores data as **key-value pairs**:
  - Each key is **unique** (no duplicates allowed)
  - Keys can be of **ANY type** (string, number, object, etc.)
  - Order of insertion is **preserved**

### Create an Empty Map

```js
let myMap = new Map();
console.log(myMap); //  Map(0) {}
```

### Create a Map from an Array of [key, value] Arrays

```js
let user = new Map([
  ["name", "Rahul"],
  ["age", "25"],
  ["age", "26"]    // duplicate key - later value overwrites earlier
]);

console.log(user);
// Expected output:  Map(2) { 'name' => 'Rahul', 'age' => '26' }

// NOTE:  "age" appears only once because keys must be unique.
//        The second "age" => "26" replaced the first "age" => "25".
```

---

## 9. Important Map Methods

### a) `set(key, value)` — Adds or updates a key-value pair

```js
myMap.set("city", "Pune");
myMap.set("country", "India");
myMap.set(1, "number key");   // key can be a number!

console.log(myMap);
// Expected output:  Map(5) {
//    'name' => 'Rahul',
//    'age' => '26',
//    'city' => 'Pune',
//    'country' => 'India',
//    1 => 'number key'
//  }
```

### b) `get(key)` — Retrieves the value for a key

```js
console.log(myMap.get("name"));  //  Rahul
console.log(myMap.get("age"));   //  26
console.log(myMap.get("car"));   //  undefined (no such key)
```

### c) `has(key)` — Checks if a key exists

```js
console.log(myMap.has("name"));  //  true
console.log(myMap.has("email")); //  false
```

### d) `delete(key)` — Removes a key-value pair

```js
console.log(myMap.delete("city"));    //  true
console.log(myMap.delete("salary"));  //  false (never added)

console.log(myMap);
// Expected output:  Map(4) {
//    'name' => 'Rahul',
//    'age' => '26',
//    'country' => 'India',
//    1 => 'number key'
//  }
```

### e) `clear()` — Removes ALL key-value pairs

```js
myMap.clear();
console.log(myMap); //  Map(0) {}
```

### f) `size` — Number of key-value pairs

```js
let tempMap = new Map([["a", 1], ["b", 2], ["c", 3]]);
console.log(tempMap.size); //  3
```


let setWithObjects = new Set([obj1, obj2]);
console.log(setWithObjects);
// Expected output:  Set(2) { { name: 'sid' }, { name: 'sid' } }
console.log(setWithObjects.size);
// Expected output:  2

// WHY?  obj1 and obj2 are two DIFFERENT objects in memory,
// even though they look identical. Sets use **reference equality**
// (===) to decide uniqueness, so obj1 !== obj2 → both are kept
// as two separate items.
```

> **KEY TAKEAWAY:** Two objects with identical contents are **not** considered duplicate by a Set unless they reference the **exact same object**.


### g) `forEach()` — Loop through key-value pairs

```js
let fruits = new Map([
  ["apple", 50],
  ["banana", 30],
  ["orange", 40]
]);

fruits.forEach((price, fruit) => {
  console.log(fruit + " costs " + price + " Rs");
});
// Expected output:
//    apple costs 50 Rs
//    banana costs 30 Rs
//    orange costs 40 Rs
```

### h) `keys()` — Returns an iterator of all keys

```js
console.log([...fruits.keys()]);
// Expected output:  [ 'apple', 'banana', 'orange' ]
```

### i) `values()` — Returns an iterator of all values

```js
console.log([...fruits.values()]);
// Expected output:  [ 50, 30, 40 ]
```

### j) `entries()` — Returns an iterator of [key, value] pairs

```js
console.log([...fruits.entries()]);
// Expected output:
// [
//   [ 'apple', 50 ],
//   [ 'banana', 30 ],
//   [ 'orange', 40 ]
// ]
```

---

## 10. MAP vs. OBJECT — When to Use Which?

| Feature | Object | Map |
|---------|--------|-----|
| 1. Key types | Only strings & Symbols | Any type (string, number, object, array, etc.) |
| 2. Key order | Only for string/Symbol keys in modern JS | Always insertion order (from ES2015) |
| 3. Size | No built-in `.size` | Built-in `.size` property |
| 4. Built-in methods | Manual (`Object.keys()` etc.) | `.get()`, `.set()`, `.has()`, `.delete()`, `.clear()` |
| 5. Iteration | Not directly iterable | Directly iterable |
| 6. Performance (frequent add/delete) | Slower for frequent add/delete ops | Faster for frequent add/delete and lookup operations |
| 7. JSON support | Native `JSON.stringify()` / `JSON.parse()` | Not natively JSON-supportive |

### Use a Map when:
- Keys are not strings
- You need to store key-value pairs with any type of key
- You need to iterate in insertion order
- You frequently add/remove key-value pairs

### Use a regular Object when:
- Keys are simple strings
- You need JSON serialization (`JSON.stringify()` / `JSON.parse()`)
- You just need a simple key-value pair holder

---

## 11. Practical Examples

### Example 1: Removing Duplicates from a List of Emails

```js
let emails = [
  "a@mail.com", "b@mail.com", "a@mail.com",
  "c@mail.com", "b@mail.com", "d@mail.com"
];

let uniqueEmails = [...new Set(emails)];
console.log(uniqueEmails);
// Expected output:  [ 'a@mail.com', 'b@mail.com', 'c@mail.com', 'd@mail.com' ]
```

### Example 2: Counting Frequency of Items in an Array (Map Usage)

```js
let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
let frequency = new Map();

for (let item of items) {
  frequency.set(item, (frequency.get(item) || 0) + 1);
}

console.log(frequency);

## 12. Quick Recap

```js
let studentGrades = new Map();
let student1 = { id: "S001", name: "Alice" };
let student2 = { id: "S002", name: "Bob" };

studentGrades.set(student1, { math: 90, science: 85 });
studentGrades.set(student2, { math: 78, science: 92 });

console.log(studentGrades.get(student1));
// Expected output:  { math: 90, science: 85 }

console.log(studentGrades.get(student2).science);
// Expected output:  92
```


### SET
1. Collection of **UNIQUE** values
2. Similar to an array but **no duplicates**, **no index access**
3. Main methods: `add()`, `delete()`, `has()`, `size`, `clear()`
4. Use: Remove duplicates, unique value storage, set math

### MAP
1. Collection of **KEY-VALUE** pairs
2. Keys can be **any type** (not just strings)
3. Main methods: `set()`, `get()`, `has()`, `delete()`, `clear()`, `size`
4. Use: Keyed data, counting frequencies, caching

---

## 13. Practice / Interview Questions

1. What does ES6 stand for? Which year was it released?
2. Name two new data structures introduced in ES6.
3. Why is a Set like an array but with one major difference?
4. Is it possible to access the 3rd element of a Set using `set[2]`? Why or why not?
5. What are the 5 main Set methods? What does each one return?
6. Can a Set contain duplicate values? What happens if you try to add a duplicate?
7. How do you convert a Set back into an array? Give two ways.
8. What is the difference between `delete()` and `clear()` on a Set?
9. What does `has()` return for a value that does not exist in the Set?
10. Which loop works on a Set: `for...of` or `for...in`? Why?
11. What does the `forEach()` callback receive in a Set `(value, key, set)` — which two are the same?
12. What is the Union of two sets? Give an example with actual numbers.
13. What is the Intersection of two sets? Give an example.
14. What is the Difference of two sets `A - B`? Give an example.
15. What is Symmetric Difference? Give an example.
16. Two objects `obj1 = {name:"x"}` and `obj2 = {name:"x"}` are added to a Set. What is the Set's size? Why?
17. What is a Map? How is it different from a plain Object?
18. Can a Map's key be a number? An object? Explain.
19. What happens when you add a duplicate key to a Map? Which value is kept?
20. List the 7 main Map methods and what each one does.
21. Why would you choose a Map over a regular Object?
22. Why would you choose a regular Object over a Map?
23. Can a Map store key-value pairs where keys are objects? Give a practical use case.
24. What is the output of `[...myMap.keys()]` for a Map with 3 entries?
25. What does `size` return on an empty Set vs an empty Map — how is it the same or different from an empty array/object?

---

## 14. Common Mistakes & Gotchas

1. **`set[0]` does not work on a Set** — Sets have no index-based access.
2. **Adding an object to a Set twice does NOT remove duplicates** — objects are compared by reference.
3. **`myMap.get("missing")` returns `undefined`**, not an error — be careful when chaining.
4. **JSON casting**: `JSON.stringify(map)` gives `{}` (empty object) because Maps are not natively JSON-serializable. Convert to an array first if needed.
5. **Object keys in Maps are compared by reference** — same as Sets. `{id:1}` and `{id:1}` are different keys; only the exact same object reference is treated as a duplicate.

---

> **END OF LECTURE 15 - SET & MAP**
> *Docs generated from `LECTURE/15_set_and_map.js` — full code examples live in the lecture file.*

// Expected output:  Map(3) {
//    'apple' => 3,
//    'banana' => 2,
//    'orange' => 1
//  }
```


```js
let studentGrades = new Map();
let student1 = { id: "S001", name: "Alice" };
let student2 = { id: "S002", name: "Bob" };

studentGrades.set(student1, { math: 90, science: 85 });
studentGrades.set(student2, { math: 78, science: 92 });

console.log(studentGrades.get(student1));
// Expected output:  { math: 90, science: 85 }

console.log(studentGrades.get(student2).science);
// Expected output:  92
```

