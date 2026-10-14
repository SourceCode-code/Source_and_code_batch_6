# 10 - JavaScript Arrays : Theory Notes

> These notes cover **all 16 sections of the lecture**: **why arrays**, creating arrays, the **3 basic questions about arrays** (identification, separation, datatypes), **index & length**, **`typeof` vs `Array.isArray`**, **reference equality** (`==` / `===` for arrays), **reference sharing**, the **4 basic operations** (retrieve, update, add, delete), **mutating vs non-mutating methods**, **push / unshift / pop / shift**, **searching** (`indexOf`, `includes`, `find`, `findIndex`, `at`), **slice vs splice**, **sort / reverse / join / split**, **concat / flat**, **max & min**, **loops on arrays**, and **higher-order methods** (`map`, `filter`, `forEach`, `every`, `some`, `reduce`).
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

> Methods are covered in detail in **Sections 9 – 18** below.

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
| Better alternatives | `pop()` / `shift()` / `splice()` (Sections 10 & 12) |

> ⚠️ Because `delete` leaves a hole and does **not** reduce length, it is **rarely used** in real code — prefer the array methods.

---



## 9. Mutating vs Non-Mutating Methods

Whenever we use a method we get **2 things**:

- **Output** → the result of the action performed
- **Return type** → the datatype of that output

…and one more important question → **does the method change the original array?**

| Type | Meaning | Common methods |
|------|---------|----------------|
| **Mutating (modifying)** | change the **original** array itself | `push`, `pop`, `shift`, `unshift`, `sort`, `reverse`, `splice` |
| **Non-mutating (safe)** | do **not** touch the original — they return a **new** array / value | `slice`, `concat`, `map`, `filter`, `join`, `includes`, `indexOf`, `find` |

> ⚠️ Changing the original array by mistake is one of the **most common bugs** in JavaScript.

---

## 10. Adding & Removing Elements — `push` / `unshift` / `pop` / `shift`

```js
let method_array = ["siddhant", "arjun", "gadakh", 27]

// 1 push() -> ADD at the END
// syntax -> arrayName.push("value")
let new_length = method_array.push("lead-software-engineer")
console.log(method_array)   // [ 'siddhant', 'arjun', 'gadakh', 27, 'lead-software-engineer' ]
console.log(new_length)     // 5 -> return type = NUMBER (the NEW LENGTH, NOT the array)

// 2 unshift() -> ADD at the START
let new_length_2 = method_array.unshift("Mr")
console.log(method_array)   // [ 'Mr', 'siddhant', 'arjun', 'gadakh', 27, 'lead-software-engineer' ]
console.log(new_length_2)   // 6 -> return type = NUMBER (the NEW LENGTH)

// 3 pop() -> REMOVE from the END
let removed_from_end = method_array.pop()
console.log(method_array)   // [ 'Mr', 'siddhant', 'arjun', 'gadakh', 27 ]
console.log(removed_from_end)   // 'lead-software-engineer' -> return type = the REMOVED ELEMENT

// 4 shift() -> REMOVE from the START
let removed_from_start = method_array.shift()
console.log(method_array)   // [ 'siddhant', 'arjun', 'gadakh', 27 ]
console.log(removed_from_start) // 'Mr' -> return type = the REMOVED ELEMENT
```

| Method | Adds / Removes | From | Returns | Modifies original? |
|--------|----------------|------|---------|--------------------|
| `push(v)` | add | **end** | **new length** (number) | ✅ yes |
| `unshift(v)` | add | **start** | **new length** (number) | ✅ yes |
| `pop()` | remove | **end** | **removed element** (value) | ✅ yes |
| `shift()` | remove | **start** | **removed element** (value) | ✅ yes |

> 🔑 Quick summary → `push` / `unshift` → return the **new length**; `pop` / `shift` → return the **removed element**. **All four modify** the original array.

---

## 11. Searching & Finding in an Array

```js
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Strawberry", "Watermelon", "Kiwi", "Papaya"]
```

| # | Method | Returns | Not found | Note |
|---|--------|---------|-----------|------|
| 1 | `indexOf(el)` | index of first match | `-1` | searches from the **start**, **case-sensitive** |
| 2 | `lastIndexOf(el)` | index of last match | `-1` | same as `indexOf`, but search starts from the **end** |
| 3 | `includes(el)` | `true` / `false` | `false` | presence check instead of index |
| 4 | `find(cb)` | first matching **element** | `undefined` | condition-based |
| 5 | `findIndex(cb)` | **index** of first match | `-1` | condition-based |
| 6 | `at(i)` | element at index `i` | `undefined` | accepts a **negative** index (`-1` = last element) |

```js
console.log(fruits.indexOf("Mango"))      // 2
console.log(fruits.indexOf("Papaya"))     // 9
console.log(fruits.indexOf("mango"))      // -1 -> the search is CASE SENSITIVE
console.log(fruits.lastIndexOf("Apple"))  // 0 (only one "Apple" exists)
console.log(fruits.includes("Mango"))     // true
console.log(fruits.includes("mango"))     // false

const marks = [45, 67, 89, 23, 76]
console.log(marks.find((el) => el > 80))      // 89       -> first mark above 80
console.log(marks.find((el) => el > 900))     // undefined -> no element matches
console.log(marks.findIndex((el) => el > 80)) // 2
console.log(marks.findIndex((el) => el > 900)) // -1

console.log(fruits.at(0))    // Apple  -> first element
console.log(fruits.at(-1))   // Papaya -> last element
```

---

## 12. `slice()` vs `splice()` (Interview Favourite ⭐)

They **look** similar but behave completely differently:

| | `slice(start, end)` | `splice(start, removeCount, ...newItems)` |
|---|---------------------|-------------------------------------------|
| What it does | **copies** a part into a **new** array | **removes** (and can **insert**) inside the same array |
| 2nd argument | `end` → **not included** in the copy | **how many** elements to remove |
| Modifies original? | ❌ **No** (safe) | ✅ **Yes** |
| Returns | new array | **array of removed** elements |

```js
// 1 slice(start, ending index) -> COPIES a part of the array into a NEW array
let arr_slice = fruits.slice(0, 3)
console.log(arr_slice)   // [ 'Apple', 'Banana', 'Mango' ] -> index 0, 1, 2 (3 is skipped)
console.log(fruits)      // ORIGINAL array is fully unchanged

// a negative index also works -> slice(-3) copies the LAST 3 elements
console.log(fruits.slice(-3))   // [ 'Watermelon', 'Kiwi', 'Papaya' ]

// 2 splice(starting index, number of elements to remove, ...new elements to add)
const fruits_1 = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Strawberry", "Watermelon", "Kiwi", "Papaya"]

let splice_arr = fruits_1.splice(0, 5)
console.log(splice_arr)
// [ 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes' ] -> the REMOVED elements (return type = ARRAY)
console.log(fruits_1)
// [ 'Pineapple', 'Strawberry', 'Watermelon', 'Kiwi', 'Papaya' ] -> original array IS modified

// splice can also ADD elements without removing -> insert at index 0, remove 0 elements
fruits_1.splice(0, 0, "Dragonfruit")
console.log(fruits_1)   // [ 'Dragonfruit', 'Pineapple', 'Strawberry', 'Watermelon', 'Kiwi', 'Papaya' ]
```

> 🔑 `slice` = **copy** a part (safe, original untouched). `splice` = **remove / insert** a part (modifies the original).

## 13. `sort()`, `reverse()`, `join()`, `split()`

### 13.1 `sort()` — by default it sorts **as strings** (⚠️ mutating)

```js
const mixedArray = [10, "Hello", 25, "Apple", 42, "World"]

console.log(mixedArray.sort())
// output -> [ 10, 25, 42, 'Apple', 'Hello', 'World' ]
// NOTE -> this is NOT a proper number sort!
//         every element is first converted to a string -> "10", "25", "42", "Apple" ...
//         the strings are compared letter by letter -> in ASCII digit characters come BEFORE letters
//         10, 25, 42 look sorted only because "10" < "25" < "42" as STRINGS
```

**To sort numbers correctly** we must give a **comparator function**:

```js
// (a, b) => a - b  -> negative result -> a comes first -> SMALL TO LARGE  ( ascending )
// (a, b) => b - a  -> positive result -> a comes first -> LARGE TO SMALL  ( descending )

let small_large = numbers.sort((a, b) => { return a - b })
console.log(small_large)
// [ 0, 123456789, 987654321, 1234567890, 9876543210, 1234567890123, 999999999999999 ]

console.log(small_large === numbers)   // true  -> sort() RETURNS THE SAME array (no new array is created)
console.log(numbers)                   // also sorted -> the ORIGINAL array is modified
```

### 13.2 `reverse()` — reverses the array **in place** (mutating, returns the same array)

```js
console.log(small_large.reverse())
// [ 999999999999999, 1234567890123, 9876543210, 1234567890, 987654321, 123456789, 0 ]
```

**Classic question → reverse the given string?**

```js
let str_q = " hello my name is ....."

// split("")  -> string to ARRAY | reverse() -> reverse the ARRAY | join("") -> ARRAY to string
// split() is a STRING method (the opposite of join())

console.log(str_q.split("").reverse().join(""))
// output -> "..... si eman ym olleh "
// ( the FIRST space of the string becomes the LAST space after reversing )
```

### 13.3 `join()` — converts an array into a **string** (safe — original not modified)

The separator is placed **between** the elements:

```js
console.log(fruits.join(" --> "))
// Apple --> Banana --> Mango --> Orange --> Grapes --> Pineapple --> Strawberry --> Watermelon --> Kiwi --> Papaya
console.log(fruits.join(" "))
// Apple Banana Mango Orange Grapes Pineapple Strawberry Watermelon Kiwi Papaya
console.log(fruits)   // ORIGINAL array is still unchanged -> join() does not modify
```

### 13.4 `split()` — string → array (it is a **STRING** method — the opposite of `join()`)

---

## 14. `concat()` & `flat()`

```js
// 1 concat() -> joins two or more arrays into a NEW array (originals unchanged)
let a = [1, 2, 3]
let b = [4, 5, 6]
let c = [7, 8, 9]

let combine_array = a.concat(b, c)
console.log(combine_array)   // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

let rev_combine = c.concat(b, a)
console.log(rev_combine)     // [ 7, 8, 9, 4, 5, 6, 1, 2, 3 ]

console.log(a)               // [ 1, 2, 3 ] -> original arrays are not changed

// 2 flat() -> flattens a NESTED array (array inside array) into a single level array
const arr = [1, 2, [3, 4], [5, 6]]

console.log(arr.flat())      // [ 1, 2, 3, 4, 5, 6 ] -> default depth = 1 (only one level)

const deep_arr = [1, [2, [3, [4]]]]

console.log(deep_arr.flat())         // [ 1, 2, [ 3, [ 4 ] ] ]  -> only ONE level was flattened
console.log(deep_arr.flat(Infinity)) // [ 1, 2, 3, 4 ]          -> fully flattened (all levels)
```

| Method | Purpose | Modifies original? |
|--------|---------|--------------------|
| `concat(a, b, …)` | join arrays into a **new** array | ❌ no |
| `flat(depth)` | flatten nested arrays — default depth `1`, `Infinity` = all levels | ❌ no |

---

## 15. How to Find the Max & Min Value of an Array

```js
const number_a = [42, 17, 89, 3, 56, 91, 24, 68, 12, 75, 34, 100, 7, 63, 48]
```

**Way 1 → sort and pick the first / last element** (⚠️ `sort()` modifies the array itself)

```js
let sorted_array = number_a.sort((a, b) => { return a - b })
console.log(sorted_array === number_a)   // true -> same array (sorted in place)

console.log(sorted_array[0])                             // 3   -> smallest
console.log(sorted_array[sorted_array.length - 1])       // 100 -> largest
console.log(sorted_array[sorted_array.length - 2])       // 91  -> second largest

// if you do NOT want to change the original array -> first make a COPY with slice()
// let sorted_copy = number_a.slice().sort((a, b) => a - b)
```

**Way 2 → `Math.max()` / `Math.min()` with the SPREAD operator `...`** (does not modify the array)

```js
// spread ( ... ) expands the array into individual values -> Math.max(42, 17, 89, 3 ...)
console.log(Math.max(...number_a))   // 100
console.log(Math.min(...number_a))   // 3
```

---

## 16. Loops on an Array

```js
const array_add = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// example 1 -> add 2 to every element and make a new array named added_2
const added_2 = []
for (let i = 0; i < array_add.length; i++) {
  added_2.push(array_add[i] + 2)
}
console.log(added_2)
// [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

// example 2 -> make every element uppercase and store it in a new array
const str_array = ["apple", "banana", "hello", "cat", "orange", "js", "mango", "dog"]
const Upper_ar = []
for (let i = 0; i < str_array.length; i++) {
  Upper_ar.push(str_array[i].toUpperCase())
}
console.log(Upper_ar)
// [ 'APPLE', 'BANANA', 'HELLO', 'CAT', 'ORANGE', 'JS', 'MANGO', 'DOG' ]

// example 3 -> for...of loop -> gives only the VALUE of every element (simpler syntax)
//              use the normal for loop when you also need the INDEX
for (const el of str_array) {
  console.log(el.toUpperCase())
}
```

> 💡 Both tasks above can be done in **ONE LINE** with `map()` → next section.

---

## 17. Higher-Order Array Methods ⭐ (Interview Core)

| Term | Meaning |
|------|---------|
| **Higher-order method** | a method which **accepts a function** (callback) as an argument |
| **Callback function** | the function we **pass into** another function, which that method **calls for every element** |

Almost every array method gives the callback **3 values**:

| Parameter | Meaning |
|-----------|---------|
| `el` | the current element |
| `index` | the index of the current element |
| `arr` | the array itself |

(We do not need to use all 3 — write only the parameters you need.)

Covered here: `map()` / `filter()` / `forEach()` / `every()` / `some()` / `reduce()`

### 17.1 `map()` — perform an action on EVERY element → **NEW ARRAY (same length)**

```js
/*
 * syntax -> const newArray = name_array.map((el, index, arr) => { return code })
 */

const added_by_2 = array_add.map((el, index, arr) => { return el + 2 })
console.log(added_by_2)
// [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
// ORIGINAL array_add is unchanged

const new_str_ar = str_array.map((el, index, arr) => { return el.toUpperCase() })
console.log(new_str_ar)
// [ 'APPLE', 'BANANA', 'HELLO', 'CAT', 'ORANGE', 'JS', 'MANGO', 'DOG' ]
```

### 17.2 `filter()` — keep only the elements that satisfy the condition → **NEW ARRAY**

```js
/*
 * syntax -> const newArray = name_array.filter((el, index, arr) => { return condition })
 *
 * the condition must return true / false -> only the elements where it is true are kept
 * the length of the new array can be smaller (or even 0) -> unlike map()
 */

const array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// without filter (the long way) -> loop + push
let above_5 = []
for (let i = 0; i < array_num.length; i++) {
  if (array_num[i] > 5) {
    above_5.push(array_num[i])
  }
}
console.log(above_5)   // [ 6, 7, 8, 9, 10 ]

// with filter (the short way)
let above_5_ar = array_num.filter((el, index, arr) => { return el > 5 })
console.log(above_5_ar)   // [ 6, 7, 8, 9, 10 ]

let even_only = array_num.filter((el) => { return el % 2 == 0 })
console.log(even_only)    // [ 2, 4, 6, 8, 10 ]
```

### 17.3 `forEach()` — iterate to PERFORM AN ACTION → **returns `undefined`**

```js
/*
 * syntax -> name_array.forEach((el, index, arr) => { code })
 *
 * -> like a loop, it runs the function for every element
 * -> it does NOT return a new array -> use map() / filter() when you need a NEW ARRAY
 */

str_array.forEach((el, index, arr) => { console.log(el.toUpperCase()) })
/* the same output as a normal for loop printing el.toUpperCase() */
```

### 17.4 `every()` & `some()` — CHECKING methods → both return a **BOOLEAN**

```js
// every() -> like AND (&&) -> true only when ALL elements pass the condition
let every_5 = array_num.every((el, index, arr) => { return el > 5 })
console.log(every_5)   // false -> because 1, 2, 3, 4, 5 are NOT above 5
console.log(array_num.every((el) => el > 0))   // true -> ALL elements are greater than 0

// some() -> like OR (||) -> true when AT LEAST ONE element passes the condition
let some_5 = array_num.some((el, index, arr) => { return el > 5 })
console.log(some_5)    // true -> 6, 7, 8, 9, 10 are above 5
console.log(array_num.some((el) => el > 100))  // false -> NO element is above 100
```

### 17.5 `reduce()` — REDUCE the whole array into ONE single value

```js
// example -> get the sum of all the elements (without reduce -> the long way)
let sum = 0    // accumulator -> it keeps the running total
for (let i = 0; i < array_num.length; i++) {
  sum = sum + array_num[i]
}
console.log(sum)   // 55

/*
 * SYNTAX OF reduce()
 *
 * let result = array.reduce((accumulator, el, index, arr) => {
 *     return code
 * }, initialValue)
 *
 * accumulator (acc) -> carries the result from the previous turn
 * initialValue        -> the starting value of the accumulator (0 for a sum)
 * the callback runs once for every element and finally reduce() returns the accumulator
 */

let sum_10 = array_num.reduce((acc, el, index, arr) => { return acc + el }, 0)
console.log(sum_10)   // 55

// reduce() is NOT only for sum -> the return type can be ANY datatype
// the value depends on what we build inside the accumulator

// example -> find the largest number with reduce()
let max_reduce = array_num.reduce((acc, el) => { return acc > el ? acc : el }, -Infinity)
console.log(max_reduce)   // 10
```

---

## 18. When to Use Which Method? (Quick Revision)

| I need… | Use |
|---------|-----|
| a new array where every element is **CHANGED** | `map()` |
| a new array where only **SOME** elements are kept | `filter()` |
| to just do an action (print / update) | `forEach()` (or a normal loop) |
| **one single value** from the whole array | `reduce()` (sum / max / count …) |
| a yes / no answer about **ALL** elements | `every()` |
| a yes / no answer about **ANY** element | `some()` |
| to find ONE element / its index by a condition | `find()` / `findIndex()` |
| to check the presence of a value | `includes()` / `indexOf()` |
| to add / remove from the ends | `push` / `pop` / `shift` / `unshift` |
| to copy a part of an array | `slice()` (safe) |
| to remove / insert in the middle | `splice()` (modifies) |
| to join arrays / flatten nested arrays | `concat()` / `flat()` |
| array → string / string → array | `join()` / `split()` |

| Method | RETURNS | MODIFIES ORIGINAL? |
|--------|---------|--------------------|
| `push` / `unshift` | **new length** (number) | ✅ YES |
| `pop` / `shift` | **removed element** (value) | ✅ YES |
| `sort` / `reverse` | the **same** array | ✅ YES |
| `splice` | **array of removed** elements | ✅ YES |
| `slice` / `concat` / `map` / `filter` | **new array** | ❌ NO |
| `join` / `includes` / `indexOf` / `at` | value (string / number) | ❌ NO |
| `forEach` | `undefined` | ❌ NO |
| `reduce` | accumulator (any type) | ❌ NO |
| `every` / `some` | **boolean** | ❌ NO |

---

## 19. Quick Revision Table 📝

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

## 20. Key Points to Remember 🔑

1. Array = **non-primitive** type that stores **multiple values** in one variable; values separated by **commas**, wrapped in **`[ ]`**.
2. Indexes start at **0**; the last element is always at **`length - 1`**.
3. `typeof []` is `"object"` → the correct array check is **`Array.isArray()`**.
4. Two arrays with the same **content** are **never equal** (`==` or `===`) — arrays compare by **reference**, not by value.
5. `let b = a` makes both variables point to the **same** array → mutating one **mutates the other**.
6. `delete arr[i]` removes the value but **leaves a hole** and **does not change `length`** — use `pop()` / `splice()` instead.
7. `push()` adds at the **end** (length + 1); `unshift()` adds at the **start**.

---

## 21. Practice / Interview Questions

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
