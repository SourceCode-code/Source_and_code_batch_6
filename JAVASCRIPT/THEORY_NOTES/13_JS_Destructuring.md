# 13 - JavaScript Destructuring : Theory Notes

> These notes cover **all 6 sections of the lecture**: **what is destructuring**, **array destructuring** (syntax, skipping values, nested arrays, rest operator, default values, swapping variables), **object destructuring** (renaming/aliases, default values, nested, mixing object + array, API response), **object rest/spread** (pick / omit, merging configs), **destructuring function parameters** with defaults, and an **interview example** (concatenating arrays without methods).
> Read these along with the lecture file `LECTURE/13_Destructure.js`.

---

## 1. What Is Destructuring?

**Destructuring** means extracting values from arrays or objects and storing them into variables — unpacking data quickly instead of accessing each item by index or key.

```js
// WITHOUT destructuring (long way)
let array = [1, 2, 3]
let num_1 = array[0]
let num_2 = array[1]
let num_3 = array[2]

// WITH destructuring (short way)
let [a, b, c] = array
```

---

## 2. Array Destructuring

### Syntax

```js
let [variable_a, variable_b, variable_c] = arrayName
```

### Skipping values (holes)

```js
let names = ["sid", "amol", "oleg", "ram"]

let [n1, , , n4] = names   // grab 1st and 4th, skip middle two
console.log(n1)   // sid
console.log(n4)   // ram
```

### Nested array destructuring

```js
let fullstack = [
    ["html", "css", "js", "react", "angular"],   // front end
    ["mongodb", "java", "springboot", "python"]   // back end
]

let [frontEnd, backEnd] = fullstack
console.log(frontEnd)   // [ 'html', 'css', 'js', 'react', 'angular' ]
console.log(backEnd)    // [ 'mongodb', 'java', 'springboot', 'python' ]
```

Deeper nesting — grab specific elements:

```js
let [[f1, f2, f3, f4, f5], [b1, b2, b3, b4]] = fullstack
console.log(f1)   // html
console.log(b4)   // python
```

### Rest operator (`...rest`)

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [a, b, ...rest] = numbers

console.log(a)    // 1
console.log(b)    // 2
console.log(rest) // [3, 4, 5, 6, 7, 8, 9, 10]
```

### Default values

Used when a value is `undefined`.

```js
let [x = 100, y = 200] = [10]
console.log(x)   // 10
console.log(y)   // 200  ← default because 2nd value missing
```

### Swapping variables (no temp variable)

```js
let p = 10
let q = 20

// destructuring assignment (ES6)
[p, q] = [q, p]

console.log(p)   // 20
console.log(q)   // 10
```


---

## 3. Object Destructuring

### Why is it needed?

- **API response handling** — pull fields out of a response object
- **React props** — destructure props in component parameters
- **Automation frameworks** — config / test data handling

### Syntax — variable name MUST match the key

```js
let object = { xx: 1, yy: 2, zz: 3 }

let { xx, yy, zz } = object
console.log(xx)   // 1
console.log(zz)   // 3
```

### Renaming variables (alias)

```js
let { xx: m, yy: n, zz: o } = object
console.log(m)   // 1
```

### Default values

```js
let { country = "India", city = "Pune" } = { city: "Mumbai" }
console.log(country)   // India   ← default because key missing
console.log(city)      // Mumbai
```

### Nested object destructuring

```js
let user = {
    email: "asab@asab.com",
    skills: ["HTML", "CSS", "JavaScript"]
}

let { email, skills } = user
let { email: em, skills: [sk1, sk2, sk3] } = user   // mix object + array

console.log(em)   // asab@asab.com
console.log(sk3)  // JavaScript
```

Mixing object + array inside a nested object:

```js
let profile = {
    name: "Siddhant",
    address: { city: "Pune", pincode: 411001 }
}

let { name: userName, address: { city, pincode } } = profile
console.log(userName)   // Siddhant
console.log(city)       // Pune
console.log(pincode)    // 411001
```

### API response example

```js
let RESPONSE = {
    status: 200,
    data: {
        username: "sid",
        password: "qwedr321113"
    }
}

let { status, data } = RESPONSE
console.log(data)   // { username: 'sid', password: 'qwedr321113' }
```

---

## 4. Object Rest / Spread (Pick / Omit)

### Rest syntax (`...`) — collect remaining properties

```js
let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025,
    color: "Black",
    price: 3500000
}

// PICK → extract brand & model, rest goes into 'remaining'
let { brand, model, ...remaining } = car

console.log(brand)       // Toyota
console.log(model)       // Fortuner
console.log(remaining)   // { year: 2025, color: 'Black', price: 3500000 }
```

### Omit — create a new object without certain keys

```js
let { brand: _, model: _2, ...carWithoutBrandModel } = car
console.log(carWithoutBrandModel)
// { year: 2025, color: 'Black', price: 3500000 }
```

### Spread — merge / copy objects

```js
let baseConfig = { browser: "chrome", headless: true }
let envConfig  = { url: "https://example.com", timeout: 5000 }

let mergedConfig = { ...baseConfig, ...envConfig }
// { browser: 'chrome', headless: true, url: 'https://example.com', timeout: 5000 }
```

---

## 5. Destructuring Function Parameters

Very common in **React props** and **automation frameworks**.

```js
function printUserInfo({ name, age, city }) {
    console.log(`User: ${name}, Age: ${age}, City: ${city}`)
}

let userInfo = { name: "Siddhant", age: 27, city: "Pune" }
printUserInfo(userInfo)
// User: Siddhant, Age: 27, City: Pune
```

With default values in parameters:

```js
function connectBrowser({ browser = "chrome", headless = false } = {}) {
    console.log(`Browser: ${browser}, Headless: ${headless}`)
}

connectBrowser({ browser: "firefox", headless: true })
// Browser: firefox, Headless: true

connectBrowser()
// Browser: chrome, Headless: false   ← defaults used
```

---

## 6. Interview Example

Concatenate two arrays **without using any method or loops** (spread):

```js
let array_a = [1, 2, 3, 4]
let array_b = [5, 6, 7, 8]

console.log([...array_a, ...array_b])
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

---

## 🔑 Quick Revision

| Concept | Syntax |
|---------|--------|
| Array destructuring | `let [a, b] = arr` |
| Skip values | `let [a, , c] = arr` |
| Rest (array) | `let [a, ...rest] = arr` |
| Default value | `let [a = 10] = arr` |
| Swap variables | `[a, b] = [b, a]` |
| Object destructuring | `let { key } = obj` |
| Rename key | `let { key: newName } = obj` |
| Object rest | `let { key, ...rest } = obj` |
| Object spread | `let merged = { ...obj1, ...obj2 }` |
| Function param | `function f({ key }) { }` |

