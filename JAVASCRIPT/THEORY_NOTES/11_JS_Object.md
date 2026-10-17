# 11 - JavaScript Objects : Theory Notes

> These notes cover **all 12 sections of the lecture**: **why objects** (the problem with arrays), **what is an object**, **key-value pairs & properties**, **creating objects**, **`typeof` on objects**, **nested access**, **dot vs bracket notation**, **the 4 operations** (retrieve, add, update, delete), **checking if a key exists** (`in`, `hasOwnProperty`, `Object.hasOwn`), **loops** (`for...in`), **methods inside objects & `this`**, **built-in Object methods** (`assign`, `keys`, `values`, `entries`), **spread & shallow copy**, **`freeze` / `seal`**, **reference equality**, **destructuring**, and **practice with an array of objects**.
> Read these along with the lecture file `LECTURE/11_object.js`.

---

## 1. Why Do We Need an Object? (The Problem with Arrays)

- An array **can** store multiple values, but the data inside is **not descriptive** — we only know the **index**, never **what each value actually means**.

```js
let person_info = ["siddhant", "arjun", "gadakh", 27, 7020400749, 25]

console.log(person_info[0])   // "siddhant" → but WHY is index 0 a name?
console.log(person_info[4])   // 7020400749 → phone number? id number? UNKNOWN
```

| Drawback | Explanation |
|----------|-------------|
| No labels | We must **remember** that index `0` = name, `3` = age … |
| Readable? | `person_info[4]` tells us nothing about the value |
| Error-prone | Putting a value at the wrong index is silent — no error |

> **MAJOR DRAWBACK → THE DATA IS NOT DESCRIPTIVE (NO LABELS / NO KEYS).**
> **OBJECT → THE NON-PRIMITIVE DESCRIPTIVE DATA.**

---

## 2. What Is an Object?

- An **object** stores data as **key : value pairs** — exactly like a real dictionary.
- 💡 In **interviews**, objects are used everywhere: API/JSON data, maps & frequency counts, grouping, and DOM data are all objects.

```js
const user_info = {
    name: "vaibhav",                              // key : value
    age: 29,                                      // key : value
    skills: ["html", "css", "js", "cy", "pw"],    // value can be an array
    hobbies: ["coding", "reading"],
}
```

### The 6 Basic Rules About Objects

| # | Rule |
|---|------|
| 1 | An object is **declared / identified** with **curly braces `{ }`** |
| 2 | An object **always** stores data as **key and value pairs** |
| 3 | Every **key : value pair** is separated by a **comma `,`** |
| 4 | Every object has an internal property called **prototype** (covered in OOP) |
| 5 | The combination of **one key + one value** is called a **property** |
| 6 | A **function stored inside** an object is called a **method** |

### Important Rules About Keys and Values

- **Keys are always unique** and behave like **strings**.
- **Values can be any datatype** — number, string, boolean, array, even another object.

---

## 3. Creating Objects — Syntax

```js
const OBJECT_NAME = {
    KEY: "VALUE",
    KEY_2: "VALUE_2",
}
```

| Rule | Example |
|------|---------|
| Keys and values are separated by a **colon `:`** | `name: "vaibhav"` |
| Each property is separated by a **comma `,`** | `age: 29,` |
| The **last property does not need** a trailing comma (but JS allows it) | `hobbies: [...]` ✅ |
| We use **`const`** because we don't want to **replace the whole object** | we still **can** change the inside properties → objects are **mutable** |
| Keys with **spaces or special characters** must be quoted | `"full name": "Alex"` → access with `obj["full name"]` |

```js
let array_a = []                       // empty array
let obj_a = {}                         // empty object
```

> 🔑 **`const` does NOT freeze the object** — it only stops you from reassigning the variable. Use `Object.freeze()` for a read-only object (Section 12).


---

## 4. Object vs Array (Quick Comparison)

| Feature | Array `[ ]` | Object `{ }` |
|---------|-------------|--------------|
| Identified by | square brackets `[ ]` | curly braces `{ }` |
| Data stored as | **index → value** (ordered) | **key → value** (labelled) |
| Access by | numeric index `arr[0]` | key `obj.name` |
| Best for | a **list** of items | **described / grouped** data |
| Loop | `for`, `for...of`, `forEach` | **`for...in`** |
| Datatype check | `Array.isArray(x)` | `typeof x === "object"` |

> 💡 An **array is also an object** under the hood (its keys are `"0"`, `"1"` …), which is why `typeof []` gives `"object"`.

---

## 5. Checking the Datatype of an Object

```js
console.log(typeof user_info)          // "object"  → an object gives "object"
console.log(Array.isArray(user_info))  // false     → but an object is NOT an array
```

| Check | Result for an object | Verdict |
|-------|---------------------|---------|
| `typeof {}` | `"object"` | ✅ correct (generic) |
| `Array.isArray({})` | `false` | ✅ proves it is not an array |
| `typeof null` | `"object"` | ⚠️ known JS bug (lecture 02) |

> ⚠️ `typeof` alone cannot tell **object vs array vs null** — combine it with **`Array.isArray()`**.

---

## 6. Accessing Data & Nested Objects

### Dot notation and bracket notation both retrieve values

```js
console.log(person.name)      // "Alex"
console.log(person["name"])   // "Alex"   → same result
```

### Accessing nested data (an array stored inside an object)

```js
console.log(user_info.skills[0])   // "html"   → BRACKET + INDEX because skills is an array
console.log(user_info.hobbies[1])  // "reading"
```

```
user_info
 ├── name     : "vaibhav"
 ├── age      : 29
 ├── skills   : ["html", "css", "js", "cy", "pw"]   ← access like an array → skills[0]
 └── hobbies  : ["coding", "reading"]
```

### Accessing a key that does not exist

```js
console.log(person.salary)      // undefined   → NO error
console.log(person["salary"])   // undefined   → NO error
```

| Situation | Result |
|-----------|--------|
| Key exists | returns the **value** |
| Key does **not** exist | returns **`undefined`** (never an error) |
| Key exists but value is `undefined` | also returns `undefined` |

---

## 7. The 4 Operations on an Object (CRUD)

Every non-primitive datatype supports **4 operations**:

| Operation | Meaning |
|-----------|---------|
| **RETRIEVE** | get / read a value |
| **ADD** | add a new key and value |
| **UPDATE** | change an existing value |
| **DELETE** | remove a key and value |

And in an object we have **two syntaxes** for all 4:

| # | Notation | Syntax |
|---|----------|--------|
| 1 | **DOT** | `obj.key` |
| 2 | **BRACKET** | `obj["key"]` |

### 7.1 Retrieve

```js
const person = {
    name: "Alex",
    age: 20,
    city: "Mumbai",
    isStudent: true,
}

console.log(person.name)      // "Alex"
console.log(person["name"])   // "Alex"
```

### 7.2 Add

```js
person.email = "Alex@gmail.com"     // DOT
person["sex"] = "Male"              // BRACKET
console.log(person)
```

### 7.3 Update

```js
person.email = "Alex_work@gmail.com"   // DOT     → same key, new value
person["sex"] = "M"                    // BRACKET
console.log(person)
```

### 7.4 Delete

```js
delete person.email        // DOT
delete person["sex"]       // BRACKET
console.log(person)
```

> ⚠️ **`delete` RETURNS `true` / `false`** (whether the property was actually removed) — it does **not** return the deleted value like array `pop()`.

### Why Do We Need 2 Notations?

**Because dot notation cannot work with dynamic keys (variables).** Inside a loop the key keeps changing, so we must use bracket notation.

```js
// obj.key   → use when the key is written directly in the code
// obj[key]  → use when the key is stored inside a variable (loops)

let dynamicKey = "city"
console.log(person[dynamicKey])   // "Mumbai"  ✅ works
console.log(person.dynamicKey)    // undefined ❌ looks for a key literally named "dynamicKey"
```


---

## 8. How to Check If a Key Exists?

Retrieving a missing key always gives `undefined` — but what if the **value itself is `undefined`**? Use one of these three checks:

```js
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2024,
    color: "Black",
    price: 25000,
    fuelType: "Petrol",
    isElectric: false,
}

// 1 → THE "in" OPERATOR
console.log("brand" in car)     // true
console.log("mileage" in car)   // false

// 2 → hasOwnProperty()  (the classic way)
console.log(car.hasOwnProperty("isElectric"))   // true

// 3 → Object.hasOwn()  (the modern way - ES2022)
console.log(Object.hasOwn(car, "isElectric"))   // true
```

| Method | Checks | Notes |
|--------|--------|-------|
| `"key" in obj` | the key **anywhere** (includes prototype chain) | simplest |
| `obj.hasOwnProperty("key")` | only **own** properties | classic, still works |
| `Object.hasOwn(obj, "key")` | only **own** properties | ✅ modern recommended way |

> 🔑 All three return a **boolean** (`true` / `false`), unlike retrieving which returns `undefined`.

---

## 9. Loops in an Object — `for...in`

### Syntax comparison

```js
// ARRAY loop (revision)
for (let i = 0; i < array_name.length; i++) {
    // code → array_name[i]
}

// OBJECT loop
for (let key in object_name) {
    // code → object_name[key]
}
```

```js
for (let key in car) {
    // console.log(car[key])

    console.log(`${key} -> ${car[key]}`)
}
```

**Output:**

```
brand -> Toyota
model -> Camry
year -> 2024
color -> Black
price -> 25000
fuelType -> Petrol
isElectric -> false
```

### The 3 Important Rules of `for...in`

| # | Rule |
|---|------|
| 1 | `for...in` gives the **KEYS** (not the values) |
| 2 | We **MUST use bracket notation** with the key to get the value → `car[key]` |
| 3 | **`for...of` does NOT work on a plain object** (it only works on *iterables* like array and string) |

> 💡 This is the real reason we need **bracket notation** — inside the loop the `key` variable changes on every turn, and `car.key` would look for a literal key named `"key"`.

---

## 10. Methods in an Object (A Function Inside an Object)

- A **function stored as a property** is called a **method**.

```js
const student = {
    firstName: "Vihaan",
    lastName: "Mehta",
    age: 28,

    // METHOD 1 → normal function expression (CAN use "this")
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },

    // METHOD 2 → shorthand syntax (ES6 → same result, cleaner)
    greet() {
        return `Hello ${this.firstName}`
    },
}

console.log(student.fullName())   // "Vihaan Mehta"
console.log(student.greet())      // "Hello Vihaan"
```

### The `this` Keyword

- **`this`** refers to the **current object** — the object written **before the dot**.
- `student.greet()` → inside `greet`, **`this` = `student`**.

| Calling | `this` points to |
|---------|------------------|
| `student.greet()` | `student` |
| `car.fuelCheck()` | `car` |

| Syntax | Example | Note |
|--------|---------|------|
| Function expression | `greet: function () { … }` | classic, can use `this` |
| **Shorthand (ES6)** | `greet() { … }` | ✅ cleaner, same behaviour, can use `this` |
| Arrow function | `greet: () => { … }` | ⚠️ **avoid** — arrow functions get `this` from OUTSIDE the object |

---

## 11. Built-in Object Methods (Methods of the `Object` Class)

These are **static methods** — called on the `Object` class itself, not on your object.

### 11.1 `Object.assign()` — copy properties

```js
let Toyota_Camry = Object.assign({}, car)
console.log(Toyota_Camry)
```

- **(copy – paste)** → the original object is **NOT changed**.
- `Object.assign({}, source)` creates a **SHALLOW COPY** of the source.

> ⚠️ **SHALLOW COPY warning** → if the object has a **nested array / object**, the copy still **SHARES the same reference** (changing it in the copy changes the original too).

### The modern alternative → Spread operator `...`

```js
let Toyota_Camry_2 = { ...car }
console.log(Toyota_Camry_2)
```

### 11.2 `Object.keys()` — all KEYS as an array

```js
let Toyota_Camry_keys = Object.keys(Toyota_Camry)
console.log(Toyota_Camry_keys)   // ["brand", "model", "year", ...]
```

### 11.3 `Object.values()` — all VALUES as an array

```js
let Toyota_Camry_values = Object.values(Toyota_Camry)
console.log(Toyota_Camry_values) // ["Toyota", "Camry", 2024, ...]
```

### 11.4 `Object.entries()` — each `[key, value]` pair

```js
let Toyota_Camry_entries = Object.entries(Toyota_Camry)
console.log(Toyota_Camry_entries)
// [["brand","Toyota"], ["model","Camry"], ["year",2024], ...]
```

| Method | Returns |
|--------|---------|
| `Object.assign({}, obj)` | a **new object** (shallow copy) |
| `{ ...obj }` | a **new object** (shallow copy) — modern |
| `Object.keys(obj)` | **array of keys** |
| `Object.values(obj)` | **array of values** |
| `Object.entries(obj)` | **array of `[key, value]` arrays** |

> 💡 `Object.entries()` + `for...of` is the modern way to loop an object when you need both key and value.


---

## 12. `Object.freeze()` and `Object.seal()`

### `Object.freeze()` → makes the object READ-ONLY

```js
const frozen_brand = Object.freeze({ name: "Toyota", country: "Japan" })

frozen_brand.name = "Honda"        // silently fails (no error in non-strict mode)
console.log(frozen_brand.name)     // still "Toyota"
```

| Action | On a frozen object |
|--------|--------------------|
| Add a new property | ❌ blocked |
| Update a value | ❌ blocked |
| Delete a property | ❌ blocked |
| **Read** a value | ✅ allowed |

### `Object.seal()` → cannot ADD or DELETE, but CAN update existing values

| Action | `Object.freeze()` | `Object.seal()` |
|--------|-------------------|-----------------|
| Add new property | ❌ | ❌ |
| Update existing value | ❌ | ✅ |
| Delete property | ❌ | ❌ |
| Read value | ✅ | ✅ |

> ⚠️ Both are **shallow** — they do not protect **nested** objects. And remember: **`const` is NOT the same as `freeze`** (`const` only locks the variable name).

---

## 13. Objects Are Compared by Reference (Not by Value)

- This is the **same rule as arrays** (lecture 10) — non-primitives are compared by **reference (memory address)**.

```js
const obj_1 = { name: "Alex" }
const obj_2 = { name: "Alex" }

console.log(obj_1 == obj_2)    // false → same CONTENT but different MEMORY LOCATION
console.log(obj_1 === obj_2)   // false → same reason
```

### Two variables can point to the SAME object

```js
const obj_3 = obj_1
obj_3.name = "Rohan"

console.log(obj_1.name)   // "Rohan" → BOTH variables share ONE object in memory
```

```
obj_1 ──┐
        ├──►  { name: "Rohan" }     ← ONE object in memory
obj_3 ──┘

obj_2 ────►  { name: "Alex" }       ← a DIFFERENT object
```

| Situation | Result |
|-----------|--------|
| `obj_1 == obj_2` (same content, 2 objects) | **false** |
| `obj_1 === obj_2` | **false** |
| `obj_3 = obj_1` (same reference) | mutating `obj_3` **mutates `obj_1`** |
| Need a real copy | `Object.assign({}, obj)` or `{ ...obj }` (but shallow!) |

> 🔑 **PRIMITIVES compare by VALUE · NON-PRIMITIVES (objects & arrays) compare by REFERENCE.**

---

## 14. Destructuring — Unpack Values in One Line

```js
const user = {
    name: "Rohan",
    age: 29,
    city: "Pune",
}

// OLD WAY → one by one
const old_name = user.name
const old_age = user.age

// DESTRUCTURING WAY → in one line
const { name: u_name, age: u_age, city } = user

console.log(old_name, old_age)    // "Rohan" 29
console.log(u_name, u_age, city)  // "Rohan" 29 "Pune"
```

| Syntax | Meaning |
|--------|---------|
| `const { name } = obj` | create a variable `name` from `obj.name` |
| `const { name: u_name } = obj` | create `u_name` from `obj.name` (**rename**) |
| `const { job = "Tester" } = obj` | **default value** if the key is missing |

> 🔑 The variable names on the **left** of the `:` must match the **keys** of the object. Values on the right of `:` are just new variable names.


---

## 15. Practice — Array of Objects (Real-World Shape of Data)

Real data (APIs, databases, forms) almost always looks like an **array of objects**:

```js
const profiles = [
    { firstName: "Vihaan", lastName: "Mehta", skills: ["TypeScript", "CI/CD"], ... },
    { firstName: "Rohan",  lastName: "Joshi", skills: ["TypeScript", "JavaScript", "Cypress", "Docker"], ... },
    // ... 10 profiles total (see the lecture file for full data)
]
```

### Q1 → Print the name of all users

```js
// APPROACH 1 → normal loop (BRACKET NOTATION with the dynamic index)
for (let i = 0; i < profiles.length; i++) {
    console.log(`${profiles[i]["firstName"]} ${profiles[i]["lastName"]}`)
}

// APPROACH 2 → forEach()
profiles.forEach((el, index, arr) => {
    console.log(`${el.firstName} ${el.lastName}`)
})
```

### Q2 → Print the candidates who have "Python" in their skills

```js
profiles.forEach((el, index, arr) => {
    if (el.skills.includes("Python")) {
        console.log(`${el.firstName} ${el.lastName}`)
    }
})
```

### ⚠️ The Case-Sensitivity Trap

- `"Python"` and `"python"` are **two different strings**.
- The last profile (**Vikram Joshi**) has `"python"` in **LOWERCASE** → `includes("Python")` will **NOT** match that profile.

**For a case-insensitive check:**

```js
profiles.forEach((el) => {
    const hasPython = el.skills.some((skill) => skill.toLowerCase() === "python")
    if (hasPython) {
        console.log(`${el.firstName} ${el.lastName}`)
    }
})
```

> 💡 The skill is **inside a nested array**, so we use **`.some()`** (an array method) instead of `.includes()` to normalise each skill first.


---

## 16. Quick Revision Table 📝

| Thing | Purpose | Key point |
|-------|---------|-----------|
| `{ }` | object literal | data as **key : value** pairs |
| property | one key + one value | keys unique, behave like strings |
| method | function inside an object | can use **`this`** |
| `obj.key` | dot notation | key must be **literal** in code |
| `obj["key"]` | bracket notation | works with **variables / dynamic keys** |
| missing key | — | returns **`undefined`** (no error) |
| `"key" in obj` / `hasOwnProperty` / `Object.hasOwn` | key existence check | returns **boolean** |
| `for (let key in obj)` | loop an object | gives **KEYS**; use `obj[key]` for values |
| `for...of` on object | — | ❌ **does not work** (not iterable) |
| `delete obj.key` | remove a property | returns `true` / `false` |
| `typeof obj` | datatype check | `"object"` (also for arrays & null!) |
| `==` / `===` on objects | compare **references** | same content ≠ equal |
| `let b = a` (object) | copy by **reference** | changing `b` changes `a` |
| `Object.assign({}, o)` / `{ ...o }` | copy | **shallow** — nested refs shared |
| `Object.keys / values / entries` | inspect | returns **arrays** |
| `Object.freeze(o)` | read-only | cannot add / update / delete |
| `Object.seal(o)` | lock structure | can still **update** existing values |
| `const { key } = obj` | destructuring | unpack in one line (+ rename / default) |

---

## 17. Key Points to Remember 🔑

1. Object = **non-primitive, descriptive** data stored as **key : value pairs** — it fixes the "not descriptive" drawback of arrays.
2. Keys are **unique** and behave like **strings**; values can be **any** datatype (including arrays and other objects).
3. **Dot notation** works only with literal keys; **bracket notation** is required for **dynamic keys** (loops, variables).
4. Accessing a **missing key returns `undefined`** — never an error. To truly check existence use **`in`**, **`hasOwnProperty()`**, or **`Object.hasOwn()`**.
5. **`for...in`** iterates over **keys** and requires **bracket notation** to get values; **`for...of` does not work** on plain objects.
6. A **function inside an object is a method**; **`this`** refers to the object before the dot. Avoid **arrow functions** as methods (wrong `this`).
7. Objects compare by **reference** — same content is still `== false` / `=== false`, and `let b = a` shares **one** object.
8. **`Object.assign()` / spread create SHALLOW copies** — nested arrays/objects are still shared.
9. **`const` ≠ frozen** — it only blocks reassignment. Use **`Object.freeze()`** for read-only and **`Object.seal()`** to allow updates but block add/delete.
10. Real-world data is an **array of objects** — combine `forEach` / loops with `includes` / `some`, and always beware of **case sensitivity** in strings.

---

## 18. Practice / Interview Questions

1. Why do we need objects? What is the major drawback of storing the same data in an array?
2. Which datatype category does an object belong to — primitive or non-primitive? How do you check its datatype?
3. What is a **property**? What is a **method**? How are they different?
4. How are properties separated inside an object? Which symbols separate key from value and property from property?
5. Can keys be repeated in an object? Can values be of any datatype?
6. Difference between **dot notation** and **bracket notation**? When is bracket notation *mandatory*?
7. What does `person.salary` return if the key does not exist? Does it throw an error?
8. Predict the output: `const a = {x: 1}; const b = {x: 1}; console.log(a == b, a === b)` — why?
9. `let a = {x: 1}; let b = a; b.x = 5; console.log(a.x);` — what prints and why?
10. Difference between `Object.freeze()` and `Object.seal()`? Is `const obj = {}` the same as freezing?
11. `Object.assign()` creates which type of copy? What is the danger with nested objects?
12. Why does `for...of` fail on a plain object while `for...in` works?
13. Write a method inside an object that uses `this`. Why should arrow functions be avoided as methods?
14. How do `Object.keys()`, `Object.values()` and `Object.entries()` differ in their return value?
15. Given `skills: ["Python", "Java"]`, why will `includes("python")` return `false`? How do you make the check case-insensitive?

---





