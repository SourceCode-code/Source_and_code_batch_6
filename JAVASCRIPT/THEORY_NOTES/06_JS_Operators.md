# 06 - JavaScript Operators : Theory Notes

> These notes cover: **Arithmetic** (`+ - * / % **`), **Assignment** (`= += -= *= /= %=`), **Comparison** (`> < >= <= == === != !==` — with the `==` vs `===` interview question), **Logical** (`&& || !` with truth tables), **Increment & Decrement** (`++ --` pre vs post), **Ternary** (`? :`), and the **typeof** operator.
> Read these along with the lecture file `LECTURE/06_JS_Operators.js`.

---

## 1. What are Operators?

- **Operators** → symbols in code used to **perform operations** on values (**operands**).
- `10 + 5` → `10` and `5` are **operands**, `+` is the **operator**.

| # | Operator type | Symbols | Used for |
|---|---------------|---------|----------|
| 1 | Arithmetic | `+ - * / % **` | maths |
| 2 | Assignment | `= += -= *= /= %=` | assign values to variables |
| 3 | Comparison | `> < >= <= == === != !==` | compare two values → **boolean** |
| 4 | Logical | `&&` `\|\|` `!` | combine / flip conditions |
| 5 | Increment & Decrement | `++ --` | increase / decrease by 1 |
| 6 | Ternary | `? :` | shortcut for if/else |
| 7 | Type | `typeof` | check the datatype of a value |

---

## 2. Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | addition | `2 + 2` | `4` |
| `-` | subtraction | `10 - 4` | `6` |
| `*` | multiplication | `6 * 3` | `18` |
| `/` | division | `10 / 3` | `3.3333333333333335` |
| `%` | modulus (**remainder**) | `10 % 3` | `1` |
| `**` | exponentiation (power) | `2 ** 3` | `8` |

⚠️ **Important notes:**
- JS division does **NOT** cut decimals → `10 / 3` gives the full decimal result.
- `%` gives the **remainder** → `10 % 3` = `1` because `10 = (3 × 3) + 1`.

### ⭐ The most common real use of `%` — EVEN / ODD check (interview favourite)

```js
console.log(16 % 2); // 0 -> remainder 0 = EVEN number
console.log(15 % 2); // 1 -> remainder 1 = ODD number
```

---

## 3. Assignment Operators

- `=` → simple assignment → `let a = 10`
- All the others are **shorthands** for "maths + assign".

| Operator | Long way | Example (`c = 5, d = 10`) | Result |
|----------|----------|---------------------------|--------|
| `=` | `c = d` | — | assigns |
| `+=` | `c = c + d` | `c += d` | `15` |
| `-=` | `f = f - e` | `f -= e` (`f=10, e=100`) | `-90` |
| `*=` | `g = g * 3` | `g *= 3` (`g=10`) | `30` |
| `/=` | `h = h / 5` | `h /= 5` (`h=10`) | `2` |
| `%=` | `i = i % 3` | `i %= 3` (`i=10`) | `1` |

```js
// += -> add and assign
let c = 5, d = 10;
// c = c + d   (long way)
c += d;        // c = c + d -> 5 + 10
console.log(c); // 15

// -= -> subtract and assign
let e = 100, f = 10;
// f = f - e   (long way)
f -= e;         // f = f - e -> 10 - 100
console.log(f); // -90

// the same pattern works for ALL arithmetic operators
let g = 10;
g *= 3;  // 30
let h = 10;
h /= 5;  // 2
let i = 10;
i %= 3;  // 1 (remainder of 10 / 3)
```

> ⚠️ **Common mistake:** writing the long way AFTER the shortcut (e.g. `f -= e` then `f = f - e`)
> applies the operation **TWICE** → wrong result. Use either the long way OR the shortcut, never both.

---

## 4. Comparison Operators

- Compare two values → **ALWAYS return a boolean** (`true` / `false`).

```js
let x = 10, y = 5;
console.log(x > y);   // true
console.log(x < y);   // false
console.log(x >= 10); // true  -> greater than or EQUAL
console.log(x <= 5);  // false -> less than or equal
console.log(5 != 5);  // false -> not equal (loose)
console.log(5 !== "5"); // true -> value or datatype different (strict)
```

### ⭐ `==` vs `===` — THE interview favourite

| Operator | Name | Compares | `10 == "10"` | `10 === "10"` |
|----------|------|----------|--------------|----------------|
| `==` | loose equality | only the **VALUE** | `true` ✅ | — |
| `===` | strict equality | **VALUE + DATATYPE** | — | `false` ❌ |

```js
console.log(10 == "10");  // true  -> "10" got CONVERTED to 10, then compared
console.log(10 === "10"); // false -> number vs string -> datatype mismatch
```

> **📌 Rule:** in real projects **ALWAYS use `===` and `!==`** (strict) → avoids surprise type conversions.
>
> | Pair | Opposite of |
> |------|-------------|
> | `==` | `!=` |
> | `===` | `!==` |

- Comparison works on strings too → `"b" > "a"` → `true` (alphabet order).

---

## 5. Logical Operators

- Combine or flip boolean conditions.

| Operator | Name | Meaning |
|----------|------|---------|
| `&&` | AND | `true` only if **BOTH** sides are true |
| `\|\|` | OR | `true` if **AT LEAST ONE** side is true |
| `!` | NOT | **flips** the boolean |

### AND (`&&`) truth table

| A | B | A && B |
|---|---|--------|
| T | T | **T** |
| T | F | F |
| F | T | F |
| F | F | F |

### OR (`||`) truth table

| A | B | A \|\| B |
|---|---|----------|
| T | T | **T** |
| T | F | **T** |
| F | T | **T** |
| F | F | F |

### In code

```js
let num1 = 10;

// && -> BOTH must be true
console.log(num1 > 5 && num1 < 20); // true
console.log(num1 > 5 && num1 < 8);  // false

// || -> at least ONE must be true
console.log(num1 > 5 || num1 < 8);   // true
console.log(num1 > 50 || num1 < 8);  // true  (second one saves it)
console.log(num1 > 50 || num1 > 80); // false (NEITHER is true)

// ! -> flips
console.log(!true);      // false
console.log(!(num1 > 5)); // false -> num1 > 5 is true, flipped -> false
```

---

## 6. Increment & Decrement Operators (`++` / `--`)

| Form | Name | Action |
|------|------|--------|
| `++x` | **pre**-increment | increase FIRST, then use/print |
| `x++` | **post**-increment | use/print FIRST, then increase |
| `--x` | **pre**-decrement | decrease FIRST, then use/print |
| `x--` | **post**-decrement | use/print FIRST, then decrease |

```js
let count = 5;
// long way: count = count + 1  |  shortcut: count += 1  |  operator: ++count
console.log(++count); // 6 -> increased BEFORE printing

let step = 5;
console.log(step--); // 5 -> printed the OLD value first
console.log(step);   // 4 -> NOW the value is 4
```

> **📌 Interview favourite ⭐:** the difference between **pre** (`++x` → change first) and **post** (`x++` → use old value first, change after).

---

## 7. Ternary Operator (`? :`)

- Shortcut for **if/else** in ONE line.

```
condition ? value_if_true : value_if_false
```

```js
let num2 = 15;

// long way (if/else)
// if (num2 % 2 === 0) { console.log("even") } else { console.log("odd") }

// ternary way
console.log(num2 % 2 === 0 ? "even" : "odd"); // odd (15 % 2 -> 1 -> condition false)

let age = 20;
console.log(age >= 18 ? "can vote" : "cannot vote"); // can vote
```

> **📌 Connection:** this combines **arithmetic `%`** (even/odd) + **comparison** (`===`) + **logical thinking** — a great pattern to remember.

---

## 8. typeof Operator

- Returns the datatype of a value **as a string**.

```js
console.log(typeof 10);        // "number"
console.log(typeof "10");      // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
```

- Connects back to comparison:

```js
console.log(10 === "10");              // false
console.log(typeof 10 === typeof "10"); // false -> number vs string
```

---

## 9. Quick Revision Table 📝

| Category | Symbols | Returns |
|----------|---------|---------|
| Arithmetic | `+ - * / % **` | number (`%` → remainder) |
| Assignment | `= += -= *= /= %=` | assigned value |
| Comparison | `> < >= <= == === != !==` | **boolean** |
| Logical | `&&` `\|\|` `!` | boolean |
| Inc/Dec | `++ --` | number (pre vs post matters!) |
| Ternary | `? :` | one of the two values |
| Type | `typeof` | datatype as a string |

### 🔑 Key Points to Remember

1. `/` does **NOT** cut decimals in JS → use `Math.floor()` / `parseInt()` when you need integers.
2. `%` = **remainder** → the standard trick for **even/odd** (`n % 2`).
3. `==` compares only **value**, `===` compares **value + datatype** → always prefer `===`.
4. `&&` needs **both true**, `||` needs **at least one true**, `!` **flips**.
5. **Pre** `++x` changes before use; **post** `x++` uses the old value first.
6. Ternary = one-line if/else → `condition ? value_if_true : value_if_false`.
7. Comparison and logical operators **always return booleans**.

