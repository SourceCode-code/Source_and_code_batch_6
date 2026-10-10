# 10 - JavaScript Arrays : Theory Notes

> These notes cover: **why arrays**, creating arrays, the **3 basic questions about arrays** (identification, separation, datatypes), **index & length**, **`typeof` vs `Array.isArray`**, **reference equality** (`==` / `===` for arrays), **reference sharing**, and the **4 basic operations** — retrieve, update, add, delete.
> Read these along with the lecture file `LECTURE/10_Array.js`.

---

## 1. Why Arrays?

- So far we store **one value per variable**:

```js
let student1 = "siddhant"
let student2 = "arjun"
let student3 = "jui"
// 100 students → 100 variables! ❌
```

- An **array** lets us store **many values in one variable**, in order.
- 💡 In **interviews**, almost every logical problem (find max, second largest, reverse, sum, frequency count …) is solved by looping over an **array**.

> **ARRAY → A NON-PRIMITIVE DATATYPE USED TO STORE MULTIPLE VALUES IN ONE VARIABLE.**

---

## 2. Creating Arrays

```js
let array_a = []                                        // empty array
let array_b = ["siddhant", 7020400749, 27, true, "male", [], null]
```

| Syntax | Meaning |
|--------|---------|
| `[]` | empty array — no elements |
| `[v1, v2, v3]` | array with 3 elements |
| values separated by **`,`** (comma) | mandatory separator |

---

## 3. The 3 Basic Questions About Arrays

| # | Question | Answer |
|---|----------|--------|
| 1 | How to determine the datatype is array? | Defined by **square brackets `[ ]`**; in code the correct check is **`Array.isArray(value)`** (because `typeof` gives `"object"` for arrays) |
| 2 | How are values separated? | Every value is separated by a **comma `,`** |
| 3 | Which datatypes can be stored? | **All** — number, string, boolean, null, even another array (arrays can be nested) |

---

## 4. Indexes and Length

- Values inside an array are stored at **indexes** which always start at **0**.

```
                        0            1        2    3       4    5    6
LET EXAMPLE_ARRAY =  ["siddhant", 7020400749, 27, true, "male", [], null]
```

| Concept | Rule | Example (above) |
|---------|------|-----------------|
| First element | index `0` | `EXAMPLE_ARRAY[0]` → `"siddhant"` |
| Last element | index **`length - 1`** | `EXAMPLE_ARRAY[6]` |
| Length | total number of **slots** | `EXAMPLE_ARRAY.length` → `7` |
| Out of range index | returns `undefined`, **no error** | `EXAMPLE_ARRAY[99]` → `undefined` |

> 🔑 **`length - 1` is always the INDEX of the last element** (not the element itself).

---

## 5. Checking the Datatype of an Array

```js
console.log(typeof array_b)          // "object"  → typeof CANNOT say "array"
console.log(Array.isArray(array_b))  // true      → THE CORRECT WAY ✅
console.log(Array.isArray("hello"))  // false
```

| Check | Result for an array | Verdict |
|-------|---------------------|---------|
| `Array.isArray([1,2])` | `true` | ✅ correct |
| `typeof [1,2]` | `"object"` | ❌ cannot detect array |
| `typeof null` | `"object"` | ⚠️ known JS bug (lecture 02) |

> ⚠️ Arrays **and** `null` both show `"object"` under `typeof` — always use **`Array.isArray()`** to confirm an array.

---

## 6. Equality of Arrays — Reference Comparison (Interview Favourite ⭐)

```js
let variable_a = 10
let variable_b = 10

let array_1 = [10]
let array_2 = [10]

console.log(variable_a == variable_b)   // true
console.log(variable_a === variable_b)  // true

console.log(array_1 == array_2)         // false ❗
console.log(array_1 === array_2)        // false ❗
```

| | Primitives (number, string…) | Non-primitives (arrays, objects) |
|---|---|---|
| Compared **by** | **VALUE** | **REFERENCE** (memory address) |
| Same content → equal? | **yes** | **no** — unless it is the **same** array |
| Two `[10]` arrays | — | never equal (two different memory locations) |

> **NOTE:** Two arrays with the **same content** are still **not equal** — because each `[…]` literal creates a **new** array at a **new memory location**.

### 6.1 Reference Sharing — Two Variables, One Array

```js
let array_3 = array_1          // NO new array is created — same reference!
array_3.push(20)

console.log(array_1)           // [10, 20] → array_1 ALSO changed
console.log(array_1 === array_3) // true  → both point to the SAME array
console.log(array_1 === array_2) // false → two DIFFERENT arrays
```

| Expression | Result | Why |
|------------|--------|-----|
| `array_1 === array_3` | `true` | `array_3` is only another name for the **same** array |
| `array_1 === array_2` | `false` | two separate arrays, two separate memory locations |

- ⚠️ Because of this, **mutating through one variable affects the other** (the "copy by reference" behaviour from lecture 02).
- 🔑 `==` and `===` behave the **same** for arrays — neither ever compares array **content**.

---

## 7. Properties and Methods

- Every array has **properties** (data it already knows) and **methods** (actions you can perform).

| Kind | Name | Purpose |
|------|------|---------|
| Property | `length` | how many slots the array has |
| Method | `push()` | add at the **end** |
| Method | `unshift()` | add at the **start** |
| Method | `pop()` / `shift()` | remove from end / start |
| Method | `splice()`, `indexOf()`, `includes()` … | remove, search, and many more |

> Methods are covered in detail in the **next lecture** — here we only use `push()` inside the ADD operation.

---

## 8. The 4 Basic Operations on an Array

```js
let basic_operation_array = ["siddhant", 7020400749, 27, true, "male", [], null]
```

### 8.1 Retrieve — get a value

```js
console.log(basic_operation_array[0])   // "siddhant"
```

### 8.2 Update — change an existing value

```js
basic_operation_array[basic_operation_array.length - 1] = "software engineer"
// same as: basic_operation_array[6] = "software engineer"
console.log(basic_operation_array)      // last element (null) is replaced
```

### 8.3 Add — put a new value in

```js
basic_operation_array.push("22 years experience")   // adds at the END
console.log(basic_operation_array)                  // length grows by 1 → 8
```

### 8.4 Delete — remove a value

```js
delete basic_operation_array[6]

console.log(basic_operation_array)             // <1 empty item> at index 6
console.log(basic_operation_array.length)      // STILL 8
```

| About `delete` | Behaviour |
|----------------|-----------|
| Removes the **value** | slot becomes an empty / `undefined` hole |
| Shifts other elements? | **No** — indexes stay the same |
| Reduces `length`? | **No** — length stays `8` |
| Better alternatives | `pop()` / `shift()` / `splice()` (next lecture) |

> ⚠️ Because `delete` leaves a hole and does **not** reduce length, it is **rarely used** in real code — prefer the array methods.

---



## 9. Quick Revision Table 📝

| Thing | Purpose | Key point |
|-------|---------|-----------|
| `[ ]` | array literal | values separated by `,` |
| index | position of a value | starts at **0** |
| `length` | count of slots | last index = `length - 1` |
| `Array.isArray(x)` | true array check | `typeof` only gives `"object"` |
| `==` / `===` on arrays | compare **references** | same content ≠ equal |
| `let b = a` (array) | copy by **reference** | changing `b` changes `a` |
| retrieve | `arr[i]` | out of range → `undefined` |
| update | `arr[i] = v` | replaces the value |
| add | `arr.push(v)` | adds at the end, `length` + 1 |
| `delete arr[i]` | leaves a **hole** | `length` does **not** change |

---

## 10. Key Points to Remember 🔑

1. Array = **non-primitive** type that stores **multiple values** in one variable; values separated by **commas**, wrapped in **`[ ]`**.
2. Indexes start at **0**; the last element is always at **`length - 1`**.
3. `typeof []` is `"object"` → the correct array check is **`Array.isArray()`**.
4. Two arrays with the same **content** are **never equal** (`==` or `===`) — arrays compare by **reference**, not by value.
5. `let b = a` makes both variables point to the **same** array → mutating one **mutates the other**.
6. `delete arr[i]` removes the value but **leaves a hole** and **does not change `length`** — use `pop()` / `splice()` instead.
7. `push()` adds at the **end** (length + 1); `unshift()` adds at the **start**.

---

## 11. Practice / Interview Questions

1. Why do we need arrays? Can't we just use multiple variables?
2. Which datatype category does an array belong to — primitive or non-primitive?
3. How are values separated inside an array? Which symbol defines an array?
4. Can an array store values of different datatypes? Give an example.
5. What is the index of the first and the last element of an array?
6. Predict the output: `console.log([10] == [10])`, `console.log([10] === [10])` — why?
7. What does `typeof []` return? How do you correctly check for an array?
8. What is the effect of `delete arr[i]` on `length`? Why is `delete` avoided in real code?
9. `let a = [1,2]; let b = a; b.push(3); console.log(a);` — what prints and why?
10. Difference between a **property** and a **method** of an array?

---

## 12. 🐞 Mistakes found & fixed in `10_Array.js`

| # | Where | Problem | Fix applied |
|---|-------|---------|-------------|
| 1 | datatype comment | `NON- PRMITIVE`, `CHNAGED` typos | corrected to `NON-PRIMITIVE`, `CHANGED` |
| 2 | intro comment | "this is **a** example" | "this is **an** example" |
| 3 | Q1 answer | `SQUARE BARCKETS`; no in-code check mentioned | fixed spelling + added **`Array.isArray()`** as the correct check (typeof gives `"object"`) |
| 4 | Q2 | `SEPRATED` (×3), "THE VALUE ARE" | fixed to `SEPARATED`, "THE VALUES ARE" |
| 5 | Q3 | "WHAT ARE DATATYPE STORED" (grammar) + vague answer | "WHICH DATATYPES CAN BE STORED" + clarified all datatypes incl. nested arrays |
| 6 | — | **no datatype-check code existed** | added `typeof`, `Array.isArray()` demos with outputs |
| 7 | equality note | "TWO NON-PRIMTIVE CANNOT BE EQUAL" — wrong wording (a non-primitive *can* equal itself) | corrected → two arrays with the **same content** are not equal; comparison is by **reference** |
| 8 | explanation | "CAN **WE** EQUAL", "THERE REFERANCE" typos + confusing wording | rewritten: primitives compare **by value**, arrays compare **by reference / memory location** |
| 9 | `// EXAMPLE` heading | heading existed but **no example code followed** | added reference-sharing example (`array_3 = array_1`, `push(20)` → `array_1` also changes, `===` is `true`) |
| 10 | properties comment | "VAST NUMBER METHODS", "THE VALUE IN ARRAY" | "A VAST NUMBER OF METHODS", "THE VALUES IN ARRAY" |
| 11 | index diagram | "THERE FORE LENGTH -1 WILL ALWAYS BE **LAST ELEMENT**" (length − 1 is an **index**, not the element) | "THEREFORE LENGTH - 1 IS ALWAYS THE **INDEX** OF THE LAST ELEMENT" |
| 12 | retrieve/update headings | `RETRIVE`, `EXSITING`, "VALUE **FOR** ARRAY" | `RETRIEVE`, `EXISTING`, "VALUE **FROM** ARRAY" |
| 13 | ADD section | only said `//COVERED IN METHOD` — **no code at all** | added working `push()` example with output |
| 14 | DELETE section | `FORM ARRAY` typo; no explanation that `delete` **leaves a hole & keeps length** | fixed typo + added notes + `console.log(length)` → `8` proving length is unchanged |
| 15 | comment style | `//True`, `//false` inconsistent casing | normalized to `// true`, `// false` |
