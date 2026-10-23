# 12 - JavaScript JSON : Theory Notes

> These notes cover **all 7 sections of the lecture**: **what is JSON** (definition + primary use cases for an automation testor), **JSON syntax rules**, **JSON vs JavaScript object**, **conversion** (`JSON.parse()` / `JSON.stringify()`), **pretty-print & replacer**, **real users API-like example** with filtering, **safe JSON parsing with try/catch**, and the **JSON file** present in this folder.
> Read these along with the lecture file `LECTURE/12_json.js` and the data file `LECTURE/12_B_EXAMPLE_json.json`.

---

## 1. What Is JSON?

- **JSON** stands for **JavaScript Object Notation**.
- It is a **lightweight**, text-based, language-independent data-interchange format.
- Easy for humans to read/write and easy for machines to parse/generate.

### Primary use cases for an automation testor

| # | Use Case | Explanation |
|---|----------|-------------|
| 1 | Store test data | Test users, API payloads, configs saved as JSON files |
| 2 | Client ↔ Server data | Sending/receiving data for REST APIs |
| 3 | XML alternative | Lighter, faster, and easier to parse than XML |

> **JSON is just a string.** It is not a live JavaScript value until you parse it.

---

## 2. JSON Syntax Rules

| # | Rule |
|---|------|
| 1 | Data is in **name/value pairs** (`"key": "value"`) |
| 2 | Pairs are separated by **commas `,`** |
| 3 | Objects are wrapped in **curly braces `{ }`** |
| 4 | Arrays are wrapped in **square brackets `[ ]`** |
| 5 | **Both keys AND string values must be in double quotes `" "`** |
| 6 | **No comments** allowed in JSON |
| 7 | **No trailing commas** allowed in JSON |
| 8 | Numbers must **not** have leading zeros |

### XML (old) vs JSON (new)

```xml
<!-- XML: heavier, tags repeat -->
<student>
    <id>101</id>
    <name>Rahul</name>
    <age>20</age>
    <city>Mumbai</city>
</student>
```

```json
// JSON: lighter, no closing tags, keys quoted
{
  "id": 101,
  "name": "Rahul",
  "age": 20,
  "city": "Mumbai"
}
```

---

## 3. JSON vs JavaScript Object

| | JSON | JavaScript Object |
|---|------|-------------------|
| Keys | Must be in **double quotes** | Do **not** need quotes |
| Comments | Not allowed | Allowed |
| Nature | Just a **string** | Live value in memory |
| Functions / Date | Not supported | Supported |

```json
// JSON
{
    "id": 102,
    "name": "Priya"
}
```

```js
// JavaScript object
{
    id: 102,
    name: "Priya"
}
```

> **NOTE:** When writing JSON *inside* a `.js` file, always wrap it in **backticks** (`` ` ``) because JSON contains double quotes that would clash with normal string quotes.

---

## 4. Conversion: JSON ↔ Object

### `JSON.parse()` → JSON string to JavaScript object

```js
let car_json = `{
    "brand": "Toyota",
    "model": "Fortuner",
    "year": 2025,
    "color": "Black"
}`

let car_obj = JSON.parse(car_json)
console.log(car_obj.brand)   // Toyota
console.log(car_obj.model)   // Fortuner
```

### `JSON.stringify()` → JavaScript object to JSON string

```js
const student = {
    id: 101,
    name: "Rahul",
    age: 20,
    course: "BCA",
    city: "Mumbai"
}

let json_string = JSON.stringify(student)
// {"id":101,"name":"Rahul","age":20,"course":"BCA","city":"Mumbai"}
```

### Pretty-print (readable output)

```js
console.log(JSON.stringify(student, null, 2))
```
The `null` means no replacer; `2` means 2-space indentation.

### Replacer (keep only selected keys)

```js
let Paul = {
    email: "paul@paul.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 40
}

let p_json = JSON.stringify(Paul, ["email", "isLoggedIn"])
// {"email":"paul@paul.com","isLoggedIn":false}
```

---

## 5. Real Users API-Like Example

In automation you often receive a big JSON response but only need a few fields.

```js
let users = {
    Alex: { email: "alex@alex.com", age: 20, points: 30, ... },
    Asab:  { email: "asab@asab.com", age: 25, points: 50, ... },
    // ... more users
}

// Keep only email and age for every user
let filter = {}
for (let key in users) {
    filter[key] = {
        email: users[key].email,
        age: users[key].age
    }
}

let filter_json = JSON.stringify(filter)
```

---

## 6. Safe JSON Parsing (try/catch)

**`JSON.parse()` throws an error if the string is not valid JSON.** In automation/API testing, always wrap it in `try/catch` so your script does not crash on a malformed response.

```js
function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString)
    } catch (error) {
        console.error("Invalid JSON received:", error.message)
        return null
    }
}

safeParse('{"name": "Sid", "age": 25}')   // works
safeParse('{name: "Sid", age: 25}')       // invalid JSON → returns null
```

---

## 7. JSON File in This Folder

The lecture folder also contains `12_B_EXAMPLE_json.json` — a real JSON file version of the users data used above.

In real automation projects you would read it with Node's `fs` module:

```js
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./12_B_EXAMPLE_json.json', 'utf8'))
```

---

## 🔑 Quick Revision

| Concept | Method / Rule |
|---------|---------------|
| String → Object | `JSON.parse(jsonString)` |
| Object → String | `JSON.stringify(obj)` |
| Pretty-print | `JSON.stringify(obj, null, 2)` |
| Keep selected keys | `JSON.stringify(obj, ["key1", "key2"])` |
| Keys must be quoted | Always `"key"` in JSON |
| No comments / trailing commas | Not allowed in JSON |
| Safe parsing | Wrap `JSON.parse()` in `try/catch` |
