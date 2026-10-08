# 09 - JavaScript Loops : Theory Notes

> These notes cover: **why loops**, the **3 basic loop types**, `for` (forward / backward), looping over **strings**, practice programs (**multiplication table**, **word count**, **vowel count**), **nested loops & patterns**, `while`, `do...while`, **`break` / `continue`**, infinite loops, and the common mistakes.
> Read these along with the lecture file `LECTURE/09_loops.js`.

---

## 1. Why Loops?

- A program / software is always created to **perform an action**.
- **Automation** → the program performs the repetitive action **for us**:

| | Manual | Automatic |
|---|--------|-----------|
| Who repeats? | we type the steps again and again | the program repeats them for us |
| Example | running every test case by hand every day | the script runs all test cases with one command |

- A **loop** → the syntax used to perform a **repeating action** without writing the same line again and again.
- 💡 In **interviews**, the logical problem given (patterns, series, counting, searching …) is usually **not solved until you use loops**.

### The 3 basic loop types in JS

| # | Loop | Used when | Rounds |
|---|------|-----------|--------|
| 1 | `for` | the **end point is known** (0 → n) | **finite** — about 95 % of all loops |
| 2 | `while` | the **end point is NOT known** | runs **until a condition changes** |
| 3 | `do...while` | like `while`, but the **first run is guaranteed** | condition is checked **after** the code |

> ⚠️ **Infinite loop** → a loop whose condition **never becomes false** → the program hangs.
> Stop a running program in the terminal with **`Ctrl + C`**.
> Later → `for...of` / `for...in` → special loops for arrays & objects (coming in a later lecture).

---

## 2. `for` loop — when the end point is KNOWN

**Syntax**

```
for (initialization ; condition for the loop to end ; increment / decrement) {
    // code
}
```

| Part | When it runs | Purpose | Typical |
|------|--------------|---------|---------|
| initialization | **once**, before the loop starts | create the counter | `let i = 0` |
| condition | **before every turn** | `false` → the loop ends | `i <= 10` |
| increment / decrement | **after every turn** | move the counter | `i++` / `i--` |

**Example — print 0 → 10 (forward / incremental loop)**

```js
for (let i = 0; i <= 10; i++) {
    console.log(i)
} // 0 1 2 3 4 5 6 7 8 9 10
```

**Example — print 10 → 0 (decremental loop)**

```js
for (let i = 10; i >= 0; i--) {
    console.log(i)
} // 10 9 8 7 6 5 4 3 2 1 0
```

- ⚠️ The **direction must move towards the condition becoming `false`**:
  `i >= 0` together with `i++` → the condition never becomes false → **infinite loop**.
- 🔑 Without a loop we would write `console.log(...)` once per number → 1000 numbers = 1000 lines. The loop runs **one line** 1000 times.

---

## 3. Looping over a string

```js
let name_str = " hello i am learning javascript and i am currently focusing on loops"

for (let i = 0; i < name_str.length; i++) {
    console.log(name_str[i])
}
// one character per line
```

- `name_str[i]` → the character at position `i` (string indexes start at **0**).
- `name_str.length` → the number of characters in the string.
- 🔑 Write **`i < length`** and never `i <= length` → the last valid index is `length - 1` (the index `length` itself is **out of range**).

---

## 4. Practice programs

### 4.1 Multiplication table of 2

```js
let num_1 = 2

for (let i = 1; i <= 10; i++) {
    console.log(`${num_1} x ${i} = ${num_1 * i}`)
} // 2 x 1 = 2  -> ... -> 2 x 10 = 20
```

| Line | What it uses |
|------|--------------|
| `2 x 1 = 2` | label part `${num_1} x ${i}` + value part `${num_1 * i}` |

- 💡 The label prints **`${num_1}`** instead of a hard-coded `2` → change `num_1 = 7` and the **same program** prints the table of 7 without touching the loop.
- 🔑 Both the label and the value follow the loop counter `i` — the table row **changes every round**.

### 4.2 Word count without any method

**Idea** → words = number of **spaces + 1** (every space means one more word starts after it).

```js
let count_str = "hello my name is siddhant and i am a mentor for automation"

let word_count = 1 // words = number of spaces + 1 -> so the count starts from 1

for (let i = 0; i < count_str.length; i++) {
    if (count_str[i] === " ") {
        word_count++
    }
    // console.log(word_count)
}
console.log(word_count) // 12
```

- ⚠️ The trick assumes the string has **no leading / trailing / double spaces** (`" a  b "` would break it) → the real-world solution is `.split(" ")` (string lecture).

### 4.3 Count the vowels ( "aeiou" )

```js
let norm_str = "hello my name is anurag"

let v_count = 0

for (let i = 0; i < norm_str.length; i++) {
    let v_words = norm_str[i].toLowerCase() // one CHARACTER -> lowercase so that "A" / "E" also match
    if (v_words === "a" || v_words === "e" || v_words === "i" || v_words === "o" || v_words === "u") {
        v_count++
    }
}

console.log(v_count) // 8
```

- 💡 `.toLowerCase()` is important — without it the **uppercase** vowels would be missed.
- 🔑 Start counters at **0** when you count "how many of X exist" (the word count starts at 1 only because of the `spaces + 1` trick).

---

## 5. Nested loops & patterns

- A **nested loop** = a loop **inside** a loop.
- The **outer loop** makes the **rows**, the **inner loop** fills each row with characters.

### Pattern 1 — 4444 / 333 / 22 / 1

**With methods** (the short way):

```js
for (let i = 4; i >= 1; i--) {
    console.log(String(i).repeat(i))
} // 4444 / 333 / 22 / 1
```

**Without methods** (build every row with a nested loop):

```js
for (let i = 4; i >= 1; i--) {     // OUTER loop -> rows -> reverse order ( 4 -> 1 )
    let row = ""
    for (let j = 0; j < i; j++) {   // INNER loop -> runs i times -> row "4444" needs 4 characters
        row += i                    // add the current digit to the row ( "4" + 4 -> "44" )
    }
    console.log(row)
} // 4444 / 333 / 22 / 1
```

### Pattern 2 — 1111 / 222 / 33 / 4

```js
for (let k = 1; k <= 4; k++) {
    console.log(String(k).repeat(5 - k))
} // 1111 / 222 / 33 / 4
```

- Row `k` gets **`5 - k`** characters → `k = 1` → `5 - 1` = 4 characters … `k = 4` → `5 - 4` = 1 character.

### Pattern 3 — 1 / 12 / 123 / 1234 (was unsolved — now solved)

```js
for (let k = 1; k <= 4; k++) {
    let row = ""
    for (let j = 1; j <= k; j++) {
        row += j // row 1 -> "1"   row 2 -> "12"   row 3 -> "123"
    }
    console.log(row)
} // 1 / 12 / 123 / 1234
```

- 🔑 The inner loop runs `j` from **1 → k** → every row grows by **one more number**.

---

## 6. `while` loop — when the end point is NOT known

**Syntax**

```
INITIALIZATION
WHILE (condition) {
    // code
    INCREMENT / DECREMENT
}
```

**Example — keep doubling a number until it reaches 100 (steps unknown)**

```js
let w_num = 1

while (w_num < 100) {
    console.log(w_num)
    w_num = w_num * 2 // the variable MUST change -> otherwise the condition stays true forever
} // 1 2 4 8 16 32 64
```

- ⚠️ The variable **must change inside the loop** → otherwise the condition stays `true` forever = **infinite loop**:

```js
// let f = 0
// while (f >= 0) {   // f only increases -> it stays >= 0 forever -> the program hangs
//     console.log(f)
//     f++
// }
```

- 🔧 To make such a loop safe, stop it with a `break`:

```js
// while (f >= 0) {
//     if (f === 1000) { break }   // exits the loop at 1000
//     console.log(f)
//     f++
// }
```

---

## 7. `break` & `continue`

| Keyword | Meaning |
|---------|---------|
| `break` | **exit the loop completely** — it stops right there |
| `continue` | **skip this round only** → jump to the next round (the loop keeps running) |

Both also work inside `switch` (conditions lecture).

**break example**

```js
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break // i reached 5 -> stop the WHOLE loop
    }
    console.log(i)
} // 0 1 2 3 4   -> ( 5 is not printed and 6 - 10 also never run )
```

**continue example**

```js
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue // skip only this round -> go on with i = 6
    }
    console.log(i)
} // 0 1 2 3 4 6 7 8 9 10  -> ( ONLY 5 is missing )
```

- 🐞 The old comment claimed `continue` prints `0 1 2 3 4` — **wrong**: `continue` skips **one round**, not the rest of the loop.
- 💡 Placement matters: with `console.log(i)` **after** the `if`, `break` prevents that line from printing at all; with `continue` it is only skipped for the current round.

---

## 8. `for` vs `while` vs `do...while` — when to use which

| | `for` | `while` | `do...while` |
|---|-------|---------|--------------|
| End point | **known** (0 → n) | **not known** | not known, first run guaranteed |
| Condition checked | **before** every round (in the header) | **before** every round | **after** every round |
| Typical use | counting, patterns, tables | "keep doing X until something changes" | run once, then decide if it repeats |
| Risk | wrong direction → infinite loop | variable never changes → infinite loop | body always runs at least one time |

---

## 9. Quick Revision Table 📝

| Thing | Purpose | Key point |
|-------|---------|-----------|
| `for` | known number of rounds | `init ; condition ; increment` |
| `while` | unknown number of rounds | change the variable inside, or infinite loop |
| `do...while` | at least one run | condition checked **after** the code |
| nested loop | rows + characters | outer = rows, inner fills one row |
| `i < length` | string loops | last index = `length - 1` |
| `break` | stop the loop | exits **completely** |
| `continue` | skip one round | the loop **keeps running** |
| infinite loop | condition never false | program hangs → `Ctrl + C` |

## 10. Key Points to Remember 🔑

1. `for` = **finite** (end point known) → about 95 % of real loops; `while` = end point **not known**; `do...while` = **at least once**.
2. The counter must move **towards** the condition becoming `false` (direction trap → infinite loop).
3. In counting programs run the loop **once** and start the counter at the right base (`0` for "how many", `1` for the `spaces + 1` trick).
4. Patterns → **outer loop = rows, inner loop = characters in one row** — the inner loop must run the **row's own count**, never a fixed number.
5. `break` = stop everything, `continue` = skip this round only (both also work in `switch`).
6. Always use **`===`** in loop conditions (lecture 06 habit).
7. Every `while` / `do...while` loop needs something **inside** that moves the condition towards `false` — otherwise it never ends.

## 11. 🐞 Mistakes found & fixed in `09_loops.js`

| # | Where | Problem | Fix applied |
|---|-------|---------|-------------|
| 1 | word count program | the counting loop ran **twice** → the same spaces were counted again into the same (never reset) counter → printed **23** instead of 12 | duplicate loop removed — count once |
| 2 | pattern 1 "without methods" | outer loop ran 1 → 4 (wrong row order), inner loop ran a **fixed 4×** (every row 4 chars), `row = row + i` used the outer digit, `console.log(rows)` → wrong variable name | rewritten: outer 4 → 1, inner runs **i times**, prints `row` |
| 3 | pattern 3 (1 / 12 / 123 / 1234) | only the expected output existed — **no code** | solved with a nested loop |
| 4 | continue comment | claimed output `0 1 2 3 4` | corrected → `0 1 2 3 4 6 7 8 9 10` (only 5 skipped) |
| 5 | while intro | "while is used when the output is infinite" | corrected → used when the **end point is unknown**; infinite only when the condition never turns false |
| 6 | "in JS there are 2 types" | `do...while` was missing | the **3 basic loop types** + a full `do...while` section added |
| 7 | multiplication table | the label typed `2` hard-coded while the value came from `num_1 * i` | label prints `${num_1}` → works for any table |
| 8 | break / continue conditions | `i == 5` | `i === 5` (strict) |
| 9 | without-loop example | printed 0 … 5 then jumped to 10 | replaced by the "same line again and again" explanation |
| 10 | typos | `SYTNAX`, `progarm`, `INTERVEIW`, `contiune`, `palced`, `revsere`, `decremenetal`, `INFINTIE`, `SLOVED` … | fixed throughout |





