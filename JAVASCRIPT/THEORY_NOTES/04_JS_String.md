# 04 - JavaScript Strings : Theory Notes

---

## 4. String Concatenation (Joining Strings)

- **Concatenation** → combining or adding two or more strings together to create a **new string**.

```js
let firstName = "siddhant";
let middleName = "Arjun";
let lastName = "Gadakh";
```

### Way 1 → `+` operator (old way)

```js
let fullName = firstName + middleName + lastName;              // siddhantArjunGadakh
let fullName_1 = firstName + " " + middleName + " " + lastName; // siddhant Arjun Gadakh
```
- Notice we had to manually add `" "` (space) between names.

### Way 2 → ES6 Template Literal (modern way ⭐)

- Uses **backticks** `` ` `` + **`${}` placeholders** → cleaner and no manual spacing.

```js
let fullName_backtick = `my full name is ${firstName} ${middleName} ${lastName}`;
// my full name is siddhant Arjun Gadakh
```

⚠️ **Very important (interview favourite ⭐):**
- `${}` placeholders **ONLY work inside backticks**.
- Inside `" "` or `' '` → `${}` is printed as plain text, the value is NOT inserted.

```js
console.log(`hi ${firstName}`); // hi siddhant   ✅ works
console.log("hi ${firstName}"); // hi ${firstName} ❌ plain text
```

- Template literal **bonus** → multi-line strings without `\n`:

```js
let multi_line_str = `line 1
line 2
line 3`;
```

---

## 5. Strings are IMMUTABLE 🔒

- **Immutable** → once a string is created, the characters in it **cannot be changed or modified**.
- Any method that *seems* to modify a string actually **returns a NEW string** — the original stays unchanged.

```js
let Meth_str_1 = "hello i am learning string method in js";

console.log(Meth_str_1.toUpperCase()); // HELLO I AM LEARNING STRING METHOD IN JS
console.log(Meth_str_1);               // hello i am learning string method in js  <- UNCHANGED!
```

> **📌 This is why** every string method's **return value must be stored** in a variable if you want to use the modified version later:
> `let upper = Meth_str_1.toUpperCase();`

---

## 6. String Methods (Actions + Return Types)

> **📌 NOTE:** Every method we use has:
> 1. **ACTION** → the action it is expected to perform
> 2. **RETURN TYPE** → the datatype of that output

### 6.1 Case conversion

| Method | Action | Return type |
|--------|--------|-------------|
| `toUpperCase()` | converts string to **UPPERCASE** | new string |
| `toLowerCase()` | converts string to **lowercase** | new string |

### 6.2 Removing spaces

| Method | Action |
|--------|--------|
| `trim()` | removes blank spaces from **start AND end** |
| `trimStart()` | removes blank spaces from **start only** |
| `trimEnd()` | removes blank spaces from **end only** |

```js
let method_Trim = " HELLO I AM LEARNING STRING METHOD IN JS ";
console.log(method_Trim.length);        // 42 (with spaces)
console.log(method_Trim.trim().length); // 40 (spaces removed from start + end)
```

⚠️ `trim()` only removes **start/end** spaces → spaces **between words are NOT removed**.
(To remove ALL spaces → `str.replaceAll(" ", "")` — see problem section.)

### 6.3 Method Chaining 🔗

- Calling **multiple methods on the same line**, one after another → **method chaining**.

```js
let method_concat = "HELLO I AM LEARNING STRING METHOD IN JS";
console.log(method_concat.toUpperCase().toLowerCase().toUpperCase().toLowerCase());
// hello i am learning string method in js
```

⚠️ **Condition:** chaining only works when the **output of the first method is a valid input to the second method**.

```js
// ❌ ERROR -> str.toUpperCase().length gives a NUMBER,
// and .toLowerCase() is a string method -> number is NOT a valid input
console.log(method_concat.toUpperCase().length.toLowerCase());
```

---

## 7. Getting a Part of a String

### 7.1 `substr(start, count)` — Legacy ⚠️

- Takes **starting index + NUMBER OF CHARACTERS** to pick.

```js
let dummy_str_1 = "hello this string is used to show substr and substring";
console.log(dummy_str_1.substr(0, 5)); // hello (5 characters from index 0)
```

> ⚠️ **NOTE:** `substr()` is a **legacy/old method** — it is deprecated. Prefer `substring()` or `slice()`.

### 7.2 `substring(start, end)` — Preferred ⭐

- Takes **starting index + ENDING index**, but the **ending index is NOT included**.

```js
console.log(dummy_str_1.substring(0, 4)); // hell -> ending index 4 NOT included
console.log(dummy_str_1.substring(0, 5)); // hello
```

### 7.3 `slice(start, end)` — Most Powerful ⭐

- Same as `substring()` (end NOT included) **BUT also supports negative indexes** (counts from the end).

```js
let slice_str = "javascript";
console.log(slice_str.slice(0, 4)); // java
console.log(slice_str.slice(-6));   // script (last 6 characters)
console.log(slice_str.at(-1));      // t -> at() also supports negative index
```

| Method | End included? | Negative index? | Status |
|--------|---------------|-----------------|--------|
| `substr(start, count)` | takes count instead | ❌ | deprecated ⚠️ |
| `substring(start, end)` | ❌ not included | ❌ | preferred |
| `slice(start, end)` | ❌ not included | ✅ | most used ⭐ |

---

## 8. `split()` — String ➜ Array

- Converts a **single string into an array** of multiple strings.
- We pass the value at which we need to **separate** the string.

```js
let dummy_str_1 = "hello this string is used to show substr and substring";

console.log(dummy_str_1.split(""));   // ['h','e','l','l','o', ... ] -> every single character
console.log(dummy_str_1.split(' '));  // ['hello','this','string','is', ...] -> at every space
console.log(dummy_str_1.split('and')); // ['hello this string is used to show substr ', ' substring']
```

> **📌 Interview favourite ⭐:** `split("")` with empty string → splits into **every single character** → string ➜ array of characters.

---

## 9. Searching / Checking Methods

| Method | Action | Return type | Case sensitive? |
|--------|--------|-------------|-----------------|
| `includes(sub)` | checks if string **contains** a substring | boolean | ✅ yes |
| `indexOf(sub)` | index of the **FIRST** instance | number | ✅ yes |
| `lastIndexOf(sub)` | index of the **LAST** instance | number | ✅ yes |
| `startsWith(sub)` | string **starts with** the value? | boolean | ✅ yes |
| `endsWith(sub)` | string **ends with** the value? | boolean | ✅ yes |

```js
let into_str = "hello is my name is siddhant";

console.log(into_str.includes("siddhant"));  // true
console.log(into_str.includes("sidddhant")); // false (spelling wrong)
console.log(into_str.includes("Siddhant"));  // false (CASE SENSITIVE)

let name_fn = "hello my name is xyz";
console.log(name_fn.startsWith("h")); // true
console.log(name_fn.startsWith("H")); // false (case sensitive)
console.log(name_fn.endsWith("z"));   // true
```

> ⭐ **IMPORTANT:** If the value is **NOT found**, `indexOf()` returns **`-1`** (this is asked in interviews).

---

## 10. Replacing — `replace()` vs `replaceAll()`

```js
let basic_str = " hello i am learning javascript and javascript is a very interesting lang";
```

| Method | Replaces |
|--------|----------|
| `replace(old, new)` | only the **FIRST** instance |
| `replaceAll(old, new)` | **ALL** the instances |

```js
console.log(basic_str.replace("javascript", "python"));
// hello i am learning python and javascript is a very interesting lang
//                            ^ only the FIRST one changed

console.log(basic_str.replaceAll("javascript", "java"));
// hello i am learning java and java is a very interesting lang
//                            ^ ALL of them changed
```

---

## 11. Practice Problems (from the lecture) 🧩

### Problem 1 → Remove ALL spaces from a string

```js
let space_str = " hello this is a session for string methods in js ";
let removed_space = space_str.replaceAll(" ", "");
console.log(removed_space); // hellothisisasessionforstringmethodsinjs
```
- `trim()` would NOT work here → it only removes start/end spaces.

### Problem 2 → Replace all `_` with `""`

```js
let str__2 = "hello_my_name_is_siddhant";
console.log(str__2.replaceAll("_", "")); // hellomynameissiddhant
```

### Problem 3 → Generate a RANDOM alphabet every time 🔀

```js
// step 1 : string of all alphabets
let alphabets = "abcdefghijklmnopqrstuvwxyz";
// step 2 : random index between 0 and length - 1
let random_index = Math.floor(Math.random() * alphabets.length);
// step 3 : pick the character at that index
let random_alphabet = alphabets[random_index];
console.log(random_index);    // e.g. 14
console.log(random_alphabet); // e.g. "o" -> different EVERY time
```

---

## 12. Quick Revision Table 📝

| Member | Type | What it does |
|--------|------|--------------|
| `length` | property | total characters (no brackets) |
| `str[index]` | access | character at index (last = `length - 1`) |
| `charAt(i)` | method | character at index (out of range → `""`) |
| `at(i)` | method | character at index (supports negative) |
| `toUpperCase()` / `toLowerCase()` | method | case conversion |
| `trim()` / `trimStart()` / `trimEnd()` | method | removes spaces (start/end) |
| `substring(s, e)` / `slice(s, e)` | method | part of string (end NOT included) |
| `split(sep)` | method | string ➜ **array** |
| `includes()` / `startsWith()` / `endsWith()` | method | check ➜ boolean (case sensitive) |
| `indexOf()` / `lastIndexOf()` | method | first / last index (not found → `-1`) |
| `replace()` / `replaceAll()` | method | replace first / ALL instances |

### 🔑 Key Points to Remember

1. Strings are **IMMUTABLE** → methods return a **new string**, original never changes.
2. `${}` placeholders work **ONLY inside backticks**.
3. Last character index = **`length - 1`**.
4. `substring()` / `slice()` end index is **NOT included**.
5. `indexOf()` returns **`-1`** when value not found.
6. Almost all checking methods (`includes`, `startsWith`, etc.) are **case sensitive**.
7. Every method has → **ACTION** + **RETURN TYPE** → know both before using.



> These notes cover: The **String** data type, **length property & indexes**, **concatenation** (old way vs ES6 template literals), **immutability**, and the string methods — `toUpperCase()`, `toLowerCase()`, `trim()`, `trimStart()`, `trimEnd()`, `substr()`, `substring()`, `split()`, `includes()`, `replace()`, `replaceAll()`, `indexOf()`, `lastIndexOf()`, `startsWith()`, `endsWith()`.
> Read these along with the lecture file `LECTURE/04_JS_String.js`.

---

## 1. What is the String Data Type?

- **String** is a primitive data type that represents a **sequence of characters** wrapped in quotes.
- There are **3 ways** to create a string:

```js
let ex_str_1 = "123456789" // string  -> double quotes
let ex_str_2 = "    "      // string  -> only spaces, but still a valid string
let ex_str_3 = 'true'      // string  -> single quotes
let ex_str_4 = `1234$%^&*` // string  -> backticks (template literal)
```

⚠️ **Remember:**
- Anything inside quotes is a string → `'true'` is a **string**, `true` (without quotes) is a **boolean**.
- `"123456789"` is a **string**, `123456789` is a **number** → check with `typeof`.
- Spaces inside a string also count → `"    "` has length `4`.

### The 3 quote types — when to use what

| Quotes | Name | Extra power |
|--------|------|-------------|
| `" "` | double quotes | normal string |
| `' '` | single quotes | normal string |
| `` ` `` | **backticks** | **${} placeholders + multi-line strings** (ES6 template literal) |

---

## 2. Every Data Type in JS has 2 Things

| Thing | Meaning | Example (String) |
|-------|---------|------------------|
| **Method** | Commands used to perform **operations** (actions) | `toUpperCase()`, `trim()` |
| **Property** | **Inherited values** / key information attached to the data | `length` |

> **📌 NOTE:** `length` is a **property** → NO brackets → `str.length`
> Methods are **actions** → WITH brackets → `str.toUpperCase()`

---

## 3. `length` Property & Indexes

- String characters are **stored in indexes**, starting from **0**.

```js
let str_1 = "name";   //  n a m e
                      //  0 1 2 3
console.log(str_1.length); // 4
console.log(str_1[0]);     // n  (first character)
console.log(str_1[3]);     // e  (last character)
```

### ⭐ Most used equation (interview favourite)

```
last index + 1 == length
LAST element index == length - 1
```

```js
let str_2 = "qwertyuiolkjhgfdsxcvbnm,74126985ertyuiokjhgvf";
console.log(str_2.length);             // total characters
console.log(str_2[str_2.length - 1]); // f  -> last character (works for ANY string length)
```
