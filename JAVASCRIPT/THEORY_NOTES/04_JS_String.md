# 04 - JavaScript Strings : Theory Notes

> These notes cover: The **String** data type, **Property vs Method**, **length & indexes**, **concatenation** (`+` vs ES6 template literals), **immutability**, and the string methods — `toUpperCase()`, `toLowerCase()`, `trim()`, `trimStart()`, `trimEnd()`, `charAt()`, `at()`, `substr()`, `substring()`, `slice()`, `split()`, `includes()`, `replace()`, `replaceAll()`, `indexOf()`, `lastIndexOf()`, `startsWith()`, `endsWith()`.
> Read these along with the lecture file `LECTURE/04_JS_String.js`.

---

## 1. What is the String Data Type?

- **String** is a primitive data type that represents a **sequence of characters** wrapped in quotes.
- Every character of the string gets a **position (index)**.
- There are **3 ways** to create a string:

```js
let ex_str_1 = "123456789" // string -> numbers inside quotes are ALSO a string
let ex_str_2 = "    "      // string -> only spaces, but still a valid string
let ex_str_3 = 'true'      // string -> true inside quotes is a string, NOT a boolean
let ex_str_4 = `1234$%^&*(*&^%$)ryhtgjvkufy` // string -> backticks (template literal)
```

⚠️ **Remember (datatype revision from lecture 02):**
- Anything inside quotes is a string → `'true'` is a **string**, `true` (without quotes) is a **boolean**.
- `"123456789"` is a **string**, `123456789` is a **number** → always confirm with `typeof`.
- Spaces inside a string also count → `"    "` has length `4`.

### The 3 quote types — when to use what

| Quotes | Name | Extra power |
|--------|------|-------------|
| `" "` | double quotes | normal string |
| `' '` | single quotes | normal string |
| `` ` `` | **backticks** | **${} placeholders + multi-line strings** (ES6 template literal) |

---

## 2. Property vs Method

Every data type in JS comes with **2 things**:

| Thing | Meaning | Example (String) |
|-------|---------|------------------|
| **Method** | an **action** to perform | `toUpperCase()`, `trim()` |
| **Property** | some **info** attached to the data | `length` |

> **📌 Syntax difference (interview favourite ⭐):**
> - Property → **NO brackets** → `str.length`
> - Method → **WITH brackets** → `str.toUpperCase()`

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
string last index + 1 == length
LAST element index == length - 1
```

```js
let str_2 = "qwertyuiolkjhgfdsxcvbnm,74126985ertyuiokjhgvf";
console.log(str_2.length);             // 45
console.log(str_2[str_2.length - 1]); // f -> last character (works for ANY string)
```

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
let fullName = firstName + middleName + lastName;               // siddhantArjunGadakh
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

### 6.2 Removing spaces — `trim()` family

| Method | Action |
|--------|--------|
| `trim()` | removes blank spaces from **start AND end** |
| `trimStart()` | removes blank spaces from **start only** |
| `trimEnd()` | removes blank spaces from **end only** |

```js
let method_Trim = " HELLO I AM LEARNING STRING METHOD IN JS ";
console.log(method_Trim.length);        // 41 (leading + trailing space)
console.log(method_Trim.trim().length); // 39 (both side spaces removed)
```

⚠️ `trim()` only removes **start/end** spaces → spaces **between words are NOT removed**.
(To remove ALL spaces → `str.replaceAll(" ", "")` — see practice problems.)

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

### 6.4 Getting ONE character — `charAt()` / `at()`

| Method | Out of range behaviour | Negative index? |
|--------|------------------------|-----------------|
| `str[index]` | `undefined` | ❌ (gives `undefined`) |
| `charAt(i)` | `""` (empty string) | ❌ |
| `at(i)` | `undefined` | ✅ **supports negative** (counts from end) |

```js
let Meth_str_1 = "hello i am learning string method in js";
console.log(Meth_str_1.charAt(0)); // h
console.log(Meth_str_1[0]);        // h

let slice_str = "javascript";
console.log(slice_str.at(-1)); // t (last character)
```

### 6.5 Getting a PART of the string — `substr()` / `substring()` / `slice()`

| Method | 2nd argument means | End index included? | Negative index? | Status |
|--------|--------------------|---------------------|-----------------|--------|
| `substr(start, count)` | NUMBER of characters | takes count instead | ❌ | deprecated ⚠️ |
| `substring(start, end)` | ENDING index | ❌ not included | ❌ | preferred |
| `slice(start, end)` | ENDING index | ❌ not included | ✅ | most used ⭐ |

```js
let dummy_str_1 = "hello this string is used to show substr and substring";

console.log(dummy_str_1.substr(0, 5));     // hello -> 5 characters from index 0

console.log(dummy_str_1.substring(0, 4));  // hell -> end index 4 NOT included
console.log(dummy_str_1.substring(0, 5));  // hello

let slice_str = "javascript";
console.log(slice_str.slice(0, 4)); // java
console.log(slice_str.slice(-6));   // script (last 6 characters, negative index!)
```

> ⚠️ **NOTE:** `substr()` is a **legacy/old method** — it is deprecated. Prefer `substring()` or `slice()`.

### 6.6 `split()` — String ➜ Array

- Converts a **single string into an array** of multiple strings.
- We pass the value at which we need to **separate** the string.
- Return type → **array**.

```js
let dummy_str_1 = "hello this string is used to show substr and substring";

console.log(dummy_str_1.split(""));    // ['h','e','l','l','o', ...] -> EVERY single character
console.log(dummy_str_1.split(' '));   // ['hello','this','string','is', ...] -> at every SPACE
console.log(dummy_str_1.split('and')); // ['hello this string is used to show substr ', ' substring']
```

> **📌 Interview favourite ⭐:** `split("")` with an EMPTY string → splits into **every single character** → string ➜ array of characters.

### 6.7 `includes()` — does the string CONTAIN a value?

- Checks whether a string contains a particular substring or not.
- **CASE SENSITIVE** method.
- Return type → **boolean**.

```js
let into_str = "hello is my name is siddhant";

console.log(into_str.includes("siddhant"));  // true
console.log(into_str.includes("sidddhant")); // false (spelling is wrong)
console.log(into_str.includes("Siddhant"));  // false (case sensitive -> capital S does not match)
```

### 6.8 `replace()` / `replaceAll()` — replacing parts of a string

| Method | Replaces |
|--------|----------|
| `replace(old, new)` | only the **FIRST** instance |
| `replaceAll(old, new)` | **ALL** the instances |

```js
let basic_str = " hello i am learning javascript and javascript is a very interesting lang";

console.log(basic_str.replace("javascript", "python"));
// hello i am learning python and javascript is a very interesting lang
//                            ^ only the FIRST "javascript" changed

console.log(basic_str.replaceAll("javascript", "java"));
// hello i am learning java and java is a very interesting lang
//                                       ^ ALL of them changed
```

### 6.9 `indexOf()` / `lastIndexOf()` — finding the position of a value

| Method | Gives | Not found |
|--------|-------|-----------|
| `indexOf(sub)` | index of the **FIRST** instance | returns **`-1`** |
| `lastIndexOf(sub)` | index of the **LAST** instance | returns **`-1`** |

```js
let basic_str = " hello i am learning javascript and javascript is a very interesting lang";

console.log(basic_str.indexOf("a"));   // 9  (first "a" is in "am")
console.log(basic_str.lastIndexOf("a")); // 70 (last "a" is in "lang")
console.log(basic_str.indexOf("xyz")); // -1 (NOT found)
```

> ⭐ **IMPORTANT (interview favourite):** if the value is **NOT found**, `indexOf()` returns **`-1`**.

### 6.10 `startsWith()` / `endsWith()` — checking start / end

- `startsWith(sub)` → verifies if the string **STARTS** with the value → boolean, **case sensitive**.
- `endsWith(sub)` → verifies if the string **ENDS** with the value → boolean, **case sensitive**.

```js
let name_fn = "hello my name is xyz";

console.log(name_fn.startsWith("h")); // true
console.log(name_fn.startsWith("H")); // false (case sensitive)
console.log(name_fn.endsWith("z"));   // true
```

> **📌 EXTRA:** `match()` / `matchAll()` → used with **REGEX**, covered in a later session.

---

## 7. Practice Problems (from the lecture) 🧩

### Problem 1 → Remove ALL spaces from a string

```js
let space_str = " hello this is a session for string method used i need to remove spaces for this string ";
let removed_space = space_str.replaceAll(" ", "");
console.log(removed_space);
// hellothisisasessionforstringmethodusedineedtoremovespacesforthisstring
```
- ⚠️ `trim()` would NOT work here → it only removes **start/end** spaces.

### Problem 2 → Replace all `_` with `""`

```js
let str__2 = "hello_my_name_is_siddhant";
let no_underscore_str = str__2.replaceAll("_", "");
console.log(no_underscore_str); // hellomynameissiddhant
```

### Problem 3 → Generate a RANDOM alphabet every time 🔀

```js
// step 1 : string of all alphabets
let alphabets = "abcdefghijklmnopqrstuvwxyz";
// step 2 : random index between 0 and alphabets.length - 1
let random_index = Math.floor(Math.random() * alphabets.length);
// step 3 : pick the character at that random index
let random_alphabet = alphabets[random_index];
console.log(random_index);    // e.g. 14 (NEW random number every run)
console.log(random_alphabet); // e.g. "o" (NEW random alphabet every run)
```

> **📌 Concept connection:** this uses lecture 03 (Math.random + Math.floor) + this lecture
> (string property `.length` + string indexing `str[index]`).

---

## 8. Quick Revision Table 📝

| Member | Type | What it does |
|--------|------|--------------|
| `length` | property | total characters (NO brackets) |
| `str[index]` | access | character at index (last = `length - 1`, out of range → `undefined`) |
| `charAt(i)` | method | character at index (out of range → `""`) |
| `at(i)` | method | character at index (supports negative) |
| `toUpperCase()` / `toLowerCase()` | method | case conversion → new string |
| `trim()` / `trimStart()` / `trimEnd()` | method | removes spaces (start/end) → new string |
| `substr(s, count)` | method | part of string (count of characters) — deprecated ⚠️ |
| `substring(s, e)` / `slice(s, e)` | method | part of string (end NOT included, `slice` supports negative) |
| `split(sep)` | method | string ➜ **array** |
| `includes()` / `startsWith()` / `endsWith()` | method | check ➜ **boolean** (case sensitive) |
| `indexOf()` / `lastIndexOf()` | method | first / last index (not found → `-1`) |
| `replace()` / `replaceAll()` | method | replace first / ALL instances → new string |

### 🔑 Key Points to Remember

1. Strings are **IMMUTABLE** → methods return a **new string**, the original never changes.
2. `${}` placeholders work **ONLY inside backticks**.
3. Last character index = **`length - 1`**.
4. `substring()` / `slice()` end index is **NOT included**.
5. `indexOf()` returns **`-1`** when the value is not found.
6. All checking methods (`includes`, `startsWith`, `endsWith`) are **case sensitive**.
7. Every method has → **ACTION** + **RETURN TYPE** → know both before using.
8. Property = **no brackets** (`length`), Method = **with brackets** (`toUpperCase()`).



