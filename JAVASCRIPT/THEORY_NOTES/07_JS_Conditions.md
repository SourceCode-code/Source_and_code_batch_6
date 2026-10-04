# 07 - JavaScript Conditions : Theory Notes

> These notes cover: **conditional programming** — **`if`**, **`if...else`** (either-or), the **`else if`** ladder, the **ternary shortcut**, **`switch...case`**, the **`switch (true)`** trick, **`break`** & **fall-through**, **`default`**, and **normalizing input with `toLowerCase()`**.
> Read these along with the lecture file `LECTURE/07_conditions.js`.

---

## 1. What are Conditions?

- A **condition** is a decision in the code → "run this block **only if** something is true".
- When we make decisions based on conditions, it is called **conditional programming**.
- The condition itself is written with the **comparison operators** (`> < >= <= == === != !==`) and the **logical operators** (`&& || !`) from lecture 06 → so its result is always a **boolean** (`true` / `false`).

### The condition structures available in JS

| # | Structure | Used for | Outcome |
|---|-----------|----------|---------|
| 1 | `if` | **one** condition | run the block **or** skip it |
| 2 | `if...else` | **either-or** | exactly one of **2** blocks runs |
| 3 | `else if` ladder | **multiple** conditions (2 or more) | one of **many** blocks |
| 4 | `switch...case` | **multiple fixed values** of one parameter | one of **many** blocks |

---

## 2. `if` — single condition

- Checks **one** condition → if it is `true` the block runs; if it is `false` nothing happens and the code continues normally (no error).

**Syntax**

```
if (condition) { output }
```

**Example — only accept a number greater than 0**

```js
let num = -100

if (num > 0) { console.log(` enter input number as ${num}`) }
// -100 > 0 -> false -> block skipped -> nothing prints
```

> 💡 Change `num` to `50` → `50 > 0` is `true` → it prints.

### ⭐ Extra — non-boolean values inside a condition (truthy / falsy)

A condition does not have to be a comparison — JS converts whatever you give it into `true` / `false`:

| **Falsy** (work like `false`) | **Truthy** (work like `true`) |
|---|---|
| `false`, `0`, `-0`, `""` (empty string), `null`, `undefined`, `NaN` | `true`, `"hello"`, `"0"`, `" "`, `123`, `-5`, `[]`, `{}` ... |

```js
if ("0") { console.log("this RUNS") }   // non-empty string -> truthy (tricky one!)
if (0)   { console.log("this SKIPS") }  // the number 0 is falsy
```

> This is exactly why `undefined` and `NaN` end up in the **default** branch later in the lecture — **every comparison with them is `false`**.

---

## 3. `if...else` — either-or

- "Either this, or the other" → one of the two branches is **guaranteed** to run.

**Syntax**

```
if (condition) { output }
else { output for condition 2 }
```

**Example — even or odd**

```js
let even_odd_num = 555

if (even_odd_num % 2 === 0) { console.log(` the given number ${even_odd_num} is an even number`) }
else { console.log(` the given number ${even_odd_num} is an odd number`) }
// 555 % 2 -> 1 -> false -> else -> odd number
```

> 💡 **Style tip:** the lecture compares with **`===`** (strict → compares value **and** type) — the safe habit from lecture 06. `==` gives the same answer for `n % 2` here, but conditions should not rely on type coercion.

### Connection with the ternary operator

When each side is a **single** statement, if/else can be shortened to one line:

```js
// long way
if (even_odd_num % 2 === 0) { console.log("even") } else { console.log("odd") }

// ternary way -> condition ? value_if_true : value_if_false
console.log(even_odd_num % 2 === 0 ? "even" : "odd") // odd
```

> The lecture file keeps this reminder in a comment: `// console.log(even_odd_num % 2 === 0 ? "even" : "odd")` (the full ternary walkthrough is in lecture 06, SECTION 7).

---

## 4. `else if` — ladder for more than 2 possibilities

- Used for **multiple conditions**. They are checked **top → bottom**; the **first `true` wins** and **all the remaining `else if` / `else` are skipped**.
- The final `else` acts as the **default** → it runs only when **nothing** matched.

**Syntax**

```
if (condition) { output }

else if (condition 2) { output 2 }

else if (condition 3) { output 3 }

else { output for condition ... }   // default
```

### Example 1 — grade of the student based on the marks received

| Marks | Grade | Condition used in code |
|-------|-------|------------------------|
| 91 – 100 | **A** | `marks > 90` |
| 81 – 90 | **B** | `marks > 80 && marks <= 90` |
| 71 – 80 | **C** | `marks > 70 && marks <= 80` |
| 40 – 70 | **D** | `marks >= 40 && marks <= 70` |
| 0 – 39 | **F (fail)** | `marks < 40` |
| not a number (`undefined`, `NaN`, ...) | **absent** | final `else` (default) |

```js
let student_marks_1 = undefined // undefined -> all number comparisons are false -> the last else runs

if (student_marks_1 > 90) { console.log(`He has received A grade`) }

else if (student_marks_1 > 80 && student_marks_1 <= 90) { console.log(`He has received B grade`) }

else if (student_marks_1 > 70 && student_marks_1 <= 80) { console.log(`He has received C grade`) }

else if (student_marks_1 >= 40 && student_marks_1 <= 70) { console.log(`He has received D grade`) }

else if (student_marks_1 < 40) { console.log(` He has failed the exam `) }

else { console.log("the student was not present for the exam") }
// -> prints "the student was not present for the exam"
```

> ⚠️ **Boundary thinking:** with `>` / `>=` ranges you must make sure they **never overlap** and **never leave a gap**. Notice `70` belongs to **D** (`<= 70`) and `71` is the first **C** value (`> 70`) → no gap, no double counting.
> 🔧 The comment block in the lecture was unclear (`A -> 90`, `B -> 80-90`, `C -> 70> <80`, `D ->40-70`, `F ->40`) → it has been corrected to match the code exactly.

### Example 2 — accessory suggestion according to the weather (normalizing the input)

```js
let season = "SUmmER" // the user can type it in ANY case

if (season.toLowerCase() === "summer") { console.log("carry cap and water bottle") }

else if (season.toLowerCase() === "rainy") { console.log("carry raincoat / umbrella") }

else if (season.toLowerCase() === "winter") { console.log("carry warm clothes / gloves") }

else { console.log("enter correct input") }
// "SUmmER" -> "summer" -> first condition true -> water bottle & cap
```

- `.toLowerCase()` / `.toLocaleLowerCase()` → convert the input to lowercase **before** comparing, so `"SUmmER"`, `"Summer"` and `"summer"` all match `"summer"`.
- `toLocaleLowerCase()` is the locale-aware version (language rules, e.g. the Turkish `I`); for plain English both behave the same. The lecture normalizes with the simple `.toLowerCase()` in every example — easier to read, same result for English input.

### Example 3 — generation check by birth year

```js
let birthyear = 1995

if (birthyear > 1980 && birthyear <= 1990) {
    console.log("person belongs to the boomer generation")
}
else if (birthyear > 1990 && birthyear <= 2000) {   // fixed: was > 1991 -> 1991 matched NOTHING
    console.log("person belongs to the millennial generation")
}
else if (birthyear > 2000) {
    console.log("person belongs to generation Z")
}
else { console.log("check your inputs ") }
// 1995 -> millennial
```

- 🐞 **Bug that was fixed:** the second range started at `> 1991` while the first ended at `<= 1990` → a person born exactly in **1991** matched **no branch** and fell into "check your inputs". Changing it to `> 1990` covers 1991–2000.

---

## 5. `switch...case` — clean syntax for multiple fixed values

First, a **correction** of the lecture comment: it said *"this is latest addition in es6"* → ❌ **that is not true**. `switch` has existed in JS **since the very beginning** (it comes from C). ES6 added things like template literals, `let`/`const` and arrow functions — **not** `switch`.

Key facts:

- `switch` takes **one parameter** and compares it to each `case` value using **strict equality `===`** → `switch (10)` does **not** match `case "10":`.
- When a case matches → its code runs; `break` then exits the whole switch block.
- If **nothing** matches → `default:` runs (the "else" of switch). `default` is optional and normally written last.
- A `case` label can hold any value/expression → `case "sat":`, `case 1 + 1:` (equals 2), even variables.

**Syntax**

```
switch (parameter) {

    case 1: case 1 output
        break
    case 2: case 2 output
        break
    case 3: case 3 output
        break

    default: default output
}
```

### 5.1 The `switch (true)` trick — conditions/ranges as cases

A `case` cannot hold a condition by itself. But when the parameter is **`true`**, every case **expression** becomes a condition → the first case that evaluates to `true` matches.

**Example — positive / negative / zero**

```js
let num_1 = 10

switch (true) {

    case num_1 > 0: console.log(`the given number ${num_1} is a positive number`)
        break
    case num_1 < 0: console.log(`the given number ${num_1} is a negative number`)
        break
    case num_1 === 0: console.log(`the given number is zero`)
        break
    default: console.log(`the given input is NaN`)
}
// 10 > 0 -> true -> the FIRST case matches
```

- If `num_1` is `NaN` → every comparison is `false` → **default** runs → "the given input is NaN" ✅

**The same trick with grades (switch version of the else-if ladder)**

```js
let marks = 91

switch (true) {
    case marks > 90: console.log(`He has received A grade`)
        break
    case marks > 80 && marks <= 90: console.log(`He has received B grade`)
        break
    case marks > 70 && marks <= 80: console.log(`He has received C grade`)
        break
    case marks >= 40 && marks <= 70: console.log(`He has received D grade`)
        break
    case marks < 40: console.log(`He has failed the exam`)
        break
    default: console.log("the student was not present for the exam")
}
// 91 > 90 -> "He has received A grade"
```

### 5.2 `break` — the "full stop" of a case

- `break` **ends only the `switch` block** when a case has matched (the code after the switch still runs — it does **not** stop the whole program).
  - 🔧 The lecture comment said *"it will end the program"* → misleading, so it was corrected.
- If you **forget `break`** → after a match, execution **falls through** into the next case body and keeps going:

```js
switch (2) {
    case 2: console.log("two")    // no break -> prints "two" AND "three"
    case 3: console.log("three")
}
```

### 5.3 Fall-through used on purpose — grouping cases

To give the **same output** to several values, stack the cases (only the last one carries the code):

```js
case "monday":
case "mon":
case "tuesday":
case "tue": console.log("work from office")   // all 4 values reach here
    break
```

### 5.4 ⚠️ Classic mistake: `case "monday" || "mon"`

The lecture originally wrote:

```js
case "monday" || "mon": console.log("work form office")   // ❌ WRONG
```

- `||` returns the **first truthy operand** → `"monday" || "mon"` collapses to `"monday"` **before** the switch even compares it.
- So the case only matches `"monday"` → typing `"mon"`, `"tue"`, `"wed"`, `"fri"`... **never matches** and lands in the default.
- ✅ **Fix** → put the alternatives as **stacked cases** (fall-through):

```js
case "monday":
case "mon": console.log("work from office")
```

### 5.5 Full example — office / home / week off (fixed version)

```js
let day = "sun"
let format_day = day.toLowerCase() // normalize first: "SUN" / "Sun" -> "sun"

switch (format_day) {
    case "monday":
    case "mon": console.log("work from office")
        break
    case "tuesday":
    case "tue": console.log("work from office")
        break
    case "wednesday":
    case "wed": console.log("work from home")
        break
    case "thursday":
    case "thu": console.log("work from home")
        break
    case "friday":
    case "fri": console.log("work from home")
        break
    case "sat": console.log("week off")
        break
    case "sun": console.log("week off")
        break
    default: console.log("enter correct input")
}
// "sun" -> week off
```

**Optimized version** — same logic, cases grouped by output → fewer `break`s:

```js
let day_1 = "monday"
let format_day_1 = day_1.toLowerCase()

switch (format_day_1) {
    case "monday":
    case "mon":
    case "tuesday":
    case "tue": console.log("work from office")
        break
    case "wednesday":
    case "wed":
    case "thursday":
    case "thu":
    case "friday":
    case "fri": console.log("work from home")
        break
    case "sat":
    case "sun": console.log("week off")
        break
    default: console.log("enter correct input")
}
// "monday" -> work from office
```

---

## 6. `if / else if` vs `switch` — when to use which

| | `if / else if / else` | `switch / case` |
|---|---|---|
| Best for | ranges & complex conditions (`&&`, `\|\|`, `%`, function calls...) | one parameter compared against **fixed values** |
| Readability | gets long for many values | very clean list |
| Matching rule | any boolean expression | **strict `===`** (parameter vs case) |
| Default branch | final `else` | `default:` |

---

## 7. Quick Revision Table 📝

| Structure | Purpose | Key point |
|-----------|---------|-----------|
| `if` | single condition | runs when `true`, otherwise skipped |
| `if...else` | either-or | exactly one branch runs |
| `else if` | multiple conditions | first `true` wins → rest skipped; final `else` = default |
| ternary `? :` | one-line if/else | `condition ? value_if_true : value_if_false` |
| `switch...case` | many fixed values | compared with **`===`** |
| `switch (true)` | ranges/conditions inside a switch | every case is a boolean **condition** |
| `break` | stop the switch | without it → **fall-through** |
| `default` | the "else" of switch | optional, usually last |
| stacked `case`s | many values, one output | fall-through used **on purpose** |

## 8. Key Points to Remember 🔑

1. In an `else if` ladder, **order matters** → the **first `true` wins**; put the narrowest/highest range first.
2. Ranges must not **overlap** and must not leave **gaps** (the classic `> 1991` bug).
3. `switch` compares with **strict equality** → `10` never matches `"10"`.
4. Always write `break` in a switch **unless** you intentionally want fall-through.
5. To combine several case values → **stack the cases**; never write `case "a" || "b"` (`||` collapses to a single value).
6. `switch (true)` is the standard trick to use **conditions/ranges** as cases.
7. `default:` (switch) ↔ `else` (if): the fallback when nothing matched.
8. Normalize user input (`.toLowerCase()`, `.trim()`) **before** comparing values.
9. `undefined` / `NaN` → every comparison is `false` → they land in the **default** branch.

## 9. 🐞 Mistakes found & fixed in `07_conditions.js`

| # | Where | Problem | Fix applied |
|---|-------|---------|-------------|
| 1 | day switch + optimized example | `case "monday" || "mon":` — `||` returns only the first truthy value → `"mon"`, `"tue"`, `"wed"`... never matched | stacked cases + fall-through |
| 2 | generation example | `birthyear > 1991` left the year **1991** with no matching range (gap) | changed to `> 1990` |
| 3 | switch intro comment | claimed switch is the "latest addition in es6" — ❌ false | comment corrected (switch has existed since the beginning of JS) |
| 4 | break comment | "it will end the program" — misleading | corrected: exits only the **switch block**; without it → fall-through |
| 5 | grade comment block | `A -> 90 / B -> 80-90 / C -> 70> <80 / D ->40-70 / F ->40` — unclear & looked overlapping | rewritten as exact ranges |
| 6 | typos | `postive`, `work form office/home` | fixed to `positive`, `work from office/home` |



