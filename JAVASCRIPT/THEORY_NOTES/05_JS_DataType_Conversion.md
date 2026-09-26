# 05 - JavaScript Data Type Conversion : Theory Notes

> These notes cover: **Why conversion is needed**, **String → Number** (`Number()`, `parseFloat()`, `parseInt()`, unary `+`), **Number → String** (`String()`, `toString()`), **Boolean() & falsy values**, **automatic conversion (coercion)** with operators, and **NaN + isNaN()**.
> Read these along with the lecture file `LECTURE/05_JS_DataType_Conversion.js`.

---

## 1. Why Do We Need Data Type Conversion?

- **Conversion** → converting a value from one datatype to another (most common → **string ↔ number**).
- **Why?** → data coming from `prompt()`, form inputs, APIs, files is **ALWAYS a string**.

```js
"199" + 1  // "1991"  ❌ WRONG result, we wanted 200
```

- So before doing **maths** we must convert string → number.

```js
console.log(typeof 7895);  // number
console.log(typeof "1");   // string
console.log(1 + "1");      // "11" -> + saw a string, so it JOINED them (string)
```

---

## 2. String → Number

### 2.1 `Number()`

- Converts a string into a **number**. The string must **LOOK like a number**.

```js
let str_num_2 = "987452145852";
console.log(Number(str_num_2));        // 987452145852
console.log(typeof Number(str_num_2)); // number
```

⚠️ **You CANNOT convert letters/words into a number:**

```js
let one = Number("ASDFGHJKMNBVC");
console.log(one); // NaN  -> "Not a Number" (typeof NaN is still "number")
```

**📌 Special cases (interview favourite ⭐):**

| Input | `Number(input)` returns |
|-------|-------------------------|
| `Number("")` | `0` |
| `Number(null)` | `0` |
| `Number(undefined)` | `NaN` |
| `Number(true)` | `1` |
| `Number(false)` | `0` |
| `Number("12ab")` | `NaN` |

### 2.2 `parseFloat()` — string → decimal number

```js
let str_num_3 = "123.456";
console.log(parseFloat(str_num_3));        // 123.456
console.log(typeof parseFloat(str_num_3)); // number
```

- Reads from the **START** and stops at the first invalid character:

```js
console.log(parseFloat("123.456abc")); // 123.456
console.log(parseFloat("abc123"));     // NaN (string must START with a number)
```

### 2.3 `parseInt()` — string → integer (no decimals)

```js
let str_num_4 = "53841.5135";
console.log(parseInt(str_num_4));        // 53841 (decimal part is CUT, not rounded)
console.log(typeof parseInt(str_num_4)); // number
```

- Also stops at the first invalid character:

```js
console.log(parseInt("99px")); // 99
console.log(parseInt("px99")); // NaN
```

### 2.4 The UNARY `+` trick ⭐ (interview favourite)

- Putting `+` before a string converts it to a number — the **fastest** way.

```js
console.log(+"5");       // 5
console.log(+"5.5");     // 5.5
console.log(+"abc");     // NaN
console.log(typeof +"5"); // number
```

### parseInt vs parseFloat — quick compare

| Expression | Result |
|------------|--------|
| `parseInt("53841.5135")` | `53841` (cuts decimals) |
| `parseFloat("53841.5135")` | `53841.5135` |
| both on `"abc"` | `NaN` |
| `parseInt("99px")` | `99` |
| `parseFloat("123.456abc")` | `123.456` |

---

## 3. Number → String

### 3.1 `String()`

```js
let number = 7020400749;
console.log(String(number));        // "7020400749"
console.log(typeof String(number)); // string
```

### 3.2 `toString()`

```js
console.log(number.toString());        // "7020400749"
console.log(typeof number.toString()); // string
```

⚠️ **Difference (interview favourite ⭐):**
- `String()` works even on `null` / `undefined` → gives `"null"`, `"undefined"`.
- `.toString()` gives a **TypeError** on `null` / `undefined` (they have no methods).

```js
console.log(String(null));    // "null"
console.log(null.toString()); // ❌ TypeError -> Cannot read properties of null
```

---

## 4. Other Conversions — `Boolean()` & Falsy Values

- `Boolean()` → converts any value to `true` / `false`.

```js
console.log(Boolean("hello")); // true  (non-empty string -> true)
console.log(Boolean(""));      // false (empty string -> false)
console.log(Boolean(0));       // false
console.log(Boolean(100));     // true  (any non-zero number -> true)
```

### ⭐ The 6 FALSY values (memorize!)

```
false, 0, "" (empty string), null, undefined, NaN
```

> **📌 Everything else is TRUE** — e.g. `"0"`, `"false"`, `[]`, `{}` are all **truthy**!

---

## 5. Automatic Conversion (COERCION) with Operators

- JS sometimes converts datatypes **AUTOMATICALLY** → this is called **coercion**.

### The rules

| Situation | `+` acts as | Other operators (`- * / %`) |
|-----------|-------------|------------------------------|
| number + number | **arithmetic** | work normally |
| **any** side is a **string** | **concatenation** (joins) | convert string → number first, then work |

```js
console.log(5 + 5);    // 10    -> number + number -> arithmetic
console.log(5 + "5");  // "55"  -> number + string -> CONCAT
console.log("5" - 5);  // 0     -> minus converts "5" to 5 automatically
console.log(5 - "5");  // 0
console.log("5" * 5);  // 25
console.log("5" / 5);  // 1
```

### Booleans in maths → `true = 1`, `false = 0`

```js
console.log("5" - true);  // 4   -> true becomes 1  -> 5 - 1
console.log("5" - false); // 5   -> false becomes 0 -> 5 - 0
console.log("5" + true);  // "5true"  -> + sees a string -> CONCAT
console.log("5" + false); // "5false" -> + sees a string -> CONCAT
```

---

## 6. NaN (Not a Number)

- **NaN** → the result of a **failed** number conversion / failed maths.

```js
let failed = Number("hello");
console.log(failed);        // NaN
console.log(typeof failed); // number <- NaN is STILL of type "number" (trick question!)
```

### `isNaN()` — checking for NaN

- Returns **boolean**.

```js
console.log(isNaN(failed));     // true
console.log(isNaN("123"));      // false
console.log(isNaN("hello123")); // true
```

### ⭐ Classic interview question

```js
console.log(NaN === NaN); // false !
```
- NaN is **not equal to anything**, not even to itself — that is why we use `isNaN()` to detect it.

---

## 7. Quick Revision Table 📝

| Conversion | Method | Example |
|------------|--------|---------|
| string → number | `Number()` | `Number("123")` → `123` |
| string → decimal | `parseFloat()` | `parseFloat("12.5abc")` → `12.5` |
| string → integer | `parseInt()` | `parseInt("12.9")` → `12` (cut, not rounded) |
| string → number (fastest) | unary `+` | `+"5"` → `5` |
| number → string | `String()` | `String(123)` → `"123"` |
| number → string | `.toString()` | `(123).toString()` → `"123"` |
| anything → boolean | `Boolean()` | `Boolean("")` → `false` |
| check for NaN | `isNaN()` | `isNaN("abc")` → `true` |

### 🔑 Key Points to Remember

1. `+` with **any string** → **CONCAT**; `-` `*` `/` with a numeric string → **auto converts to number**.
2. `Number("")` and `Number(null)` → `0`, but `Number(undefined)` → `NaN`.
3. `parseInt()` **cuts** the decimal part (no rounding), `parseFloat()` keeps it.
4. `NaN` is of type **"number"**, but `NaN === NaN` is **false** → use `isNaN()`.
5. `String(null)` works, `null.toString()` **errors**.
6. **6 falsy values** → `false, 0, "", null, undefined, NaN` — everything else is truthy.
7. Unary `+` is the fastest string → number conversion.

