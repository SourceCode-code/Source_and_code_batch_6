# 08 - JavaScript Date : Theory Notes

> These notes cover: the **Date object**, the **get methods** (`getFullYear()`, `getMonth()`, `getDate()`, `getDay()`, `getHours()`, `getMinutes()`, `getSeconds()`), **`toLocaleString()`** (month / weekday names + one-line custom format), building **human formats** (dd/mm/yyyy, padding, 12-hour + AM/PM), the **set methods** (`setDate()`, `setMonth()`, `setFullYear()`, `setHours()`...) with **mutation** & **overflow**, and the common mistakes to avoid.
> Read these along with the lecture file `LECTURE/08_date.js`.

---

## 1. What is the Date Object?

- **Date** → a **built-in JS object** used to **display and manipulate date and time**.
- created with the **`new Date()`** keyword → gives the **current date + time**.

```js
let date = new Date()
console.log(date) // e.g. 2026-09-30T16:18:42.798Z
```

⚠️ **The default output is NOT human friendly:**
- `2026-09-30T16:18:42.798Z` → this is the **ISO format** → in **UTC time**
- the `Z` at the end = **zulu / UTC** → it is **not** your local time

- In programs / automation we always need the **HUMAN format**:

| Format | Meaning |
|--------|---------|
| `dd/mm/yyyy` | day first (India / UK style) |
| `mm/dd/yyyy` | month first (US style) |
| `HH:MM:SS` | 24-hour time |
| `HH:MM` | hours and minutes |

> **📌 The two families of methods:**
> - **get methods** → READ the parts of the date (`getFullYear()`, `getMonth()` ...)
> - **set methods** → CHANGE the parts of the date (`setDate()`, `setMonth()` ...)

---

## 2. Get Methods — Reading the Parts

| Method | Returns | Range / Notes |
|--------|---------|---------------|
| `getFullYear()` | year in 4 digits | e.g. 2026 |
| `getMonth()` | month as an **INDEX** | **0 – 11** → january = 0 ... december = 11 → **add + 1 for humans** |
| `getDate()` | day of the month | **1 – 31** |
| `getDay()` | weekday as an **index** | **0 = sunday**, 1 = monday ... 6 = saturday |
| `getHours()` | hours | **0 – 23** (24-hour clock) |
| `getMinutes()` | minutes | **0 – 59** |
| `getSeconds()` | seconds | **0 – 59** |

```js
let date = new Date()

console.log(date.getFullYear())  // e.g. 2026
console.log(date.getMonth())     // e.g. 8  -> september is stored as index 8
console.log(date.getMonth() + 1) // e.g. 9  -> september as humans read it
console.log(date.getDate())      // e.g. 30
console.log(date.getDay())       // e.g. 3  -> wednesday ( 0 = sunday )
console.log(date.getHours())     // e.g. 21 -> 9 PM
```

> ⭐ **Interview favourite:** `getMonth()` is **0-based** → that is why we always write `getMonth() + 1`.

---

## 3. Month / Weekday as WORDS — `toLocaleString()`

- `toLocaleString( locale , options )` → converts the date into a **readable string** using a **locale** and an **options object**.

```js
let shortmonth = date.toLocaleString("en-gb", { month: "short" }) // e.g. Sept
let longmonth = date.toLocaleString("en-gb", { month: "long" })   // e.g. September
let dayname = date.toLocaleString("en-gb", { weekday: "long" })   // e.g. Wednesday
```

| Option key | Values | Example output |
|------------|--------|----------------|
| `month` | `"short"` / `"long"` | `Sept` / `September` |
| `weekday` | `"short"` / `"long"` | `Wed` / `Wednesday` |

- the **locale** controls the order → `"en-gb"` = day/month/year (30/09/2026) | `"en-us"` = month/day/year (09/30/2026)

---

## 4. Building a Human Format Date (dd/mm/yyyy)

- collect the parts first → then join them with a **template literal**.

```js
let cur_year = date.getFullYear()
let cur_month = date.getMonth() + 1
let cur_date = date.getDate()

console.log(`${cur_date}/${cur_month}/${cur_year} - ${dayname}`) // e.g. 30/9/2026 - Wednesday
console.log(`${cur_date}/${shortmonth}/${cur_year}`)              // e.g. 30/Sept/2026
console.log(`${cur_date}/${longmonth}/${cur_year}`)               // e.g. 30/September/2026
```

### Padding — the leading zero rule

- `30/9/2026` looks odd → the normal format is **30/09/2026**
- **rule** → "if the value is **less than 10** → put a **0** in front" → done with a **ternary**:

```js
let format_month = cur_month < 10 ? `0${cur_month}` : cur_month
let format_date = cur_date < 10 ? `0${cur_date}` : cur_date

console.log(`${format_date}/${format_month}/${cur_year}`) // e.g. 30/09/2026
```

---

## 5. Time — 24 Hour & 12 Hour Format

### 24-hour format (simple)

```js
let cur_hour = date.getHours()   // 0 - 23
let cur_min = date.getMinutes()  // 0 - 59
let cur_sec = date.getSeconds()  // 0 - 59

console.log(`${cur_hour}:${cur_min}:${cur_sec}`) // e.g. 21:48:42
```

### 12-hour format + AM / PM

```js
let ampm = cur_hour < 12 ? "AM" : "PM"    // before 12 -> AM , 12 and after -> PM
let hours_12 = cur_hour % 12 === 0 ? 12 : cur_hour % 12

console.log(`${hours_12}:${cur_min}:${cur_sec} ${ampm}`) // e.g. 9:48:42 PM
```

> ⚠️ **The classic bug:** `hour % 12` gives **0 at 12 o'clock** (because `12 % 12 = 0`) → it would print `0:30 PM`.
> **Fix** → `hour % 12 === 0 ? 12 : hour % 12`

### Padding the time parts

```js
let pad_hour = hours_12 < 10 ? `0${hours_12}` : hours_12
let pad_min = cur_min < 10 ? `0${cur_min}` : cur_min
let pad_sec = cur_sec < 10 ? `0${cur_sec}` : cur_sec

console.log(`${pad_hour}:${pad_min}:${pad_sec} ${ampm}`) // e.g. 09:48:42 PM
```

---

## 6. The One-Line Format — Options Object

The whole format can be built in a **single line** with a `toLocaleString` **options object**:

```js
let current_date_time = date.toLocaleString("en-gb", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",   // key is second ( singular ) -> "seconds" is IGNORED
    hour12: true
})

console.log(current_date_time) // e.g. 30/09/2026, 09:48:42 pm
```

| Option | Example value | Meaning |
|--------|---------------|---------|
| `timeZone` | `"Asia/Kolkata"` | forces a timezone |
| `day` / `month` / `year` | `"2-digit"` / `"numeric"` | date parts |
| `hour` / `minute` / **`second`** | `"2-digit"` | time parts |
| `hour12` | `true` / `false` | 12-hour (with am/pm) or 24-hour |

⚠️ **Watch the key name** → `second` (**singular**). If you write `seconds`, JS **silently ignores** it and the seconds never appear in the output.

---

## 7. Set Methods — Changing the Date

- **get** methods → READ the parts | **set** methods → CHANGE the parts
- ⚠️ **Two crucial rules about set methods:**
  1. they **mutate the original object** (change it in place)
  2. they **return a NUMBER** → a **timestamp** (milliseconds since 1 Jan 1970) → **not** a date object → so never store them in a date variable

| Method | Changes |
|--------|---------|
| `setDate(n)` | day of the month |
| `setMonth(n)` | month (0-based index) |
| `setFullYear(y)` | year |
| `setHours(n)` | hours |
| `setMinutes(n)` | minutes |
| `setSeconds(n)` | seconds |

### JS handles the overflow automatically 🎯

```js
let change_date = new Date()

let todays_date = change_date.getDate()       // e.g. 30
let ts = change_date.setDate(todays_date + 5) // 30 + 5 = 35 -> day 5 of the NEXT month

console.log(ts, typeof ts)         // e.g. 179121... "number" -> NOT a date object
console.log(change_date.getDate()) // e.g. 5  -> the original object was mutated
```

- `setMonth(9 + 4)` → month **13** → rolls into **february of the next year** on its own
- `setHours(21 + 5)` → **26** → becomes next day 2 AM ; `setMinutes(48 + 30)` → **78** → rolls into the next hour
- `setFullYear(2026 - 28)` → travels back to **1998**

> **📌 NOTE:** there is **no modern `setYear()`** → the correct method is **`setFullYear()`**.

---

## 8. Common Mistakes to Avoid

| # | Mistake | Fix |
|---|---------|-----|
| 1 | forgetting the month is 0-based | `getMonth() + 1` |
| 2 | thinking overflow breaks the date | JS rolls `30 + 5 = 35` into the next month automatically |
| 3 | `hour % 12` shows 0 at 12 o'clock | `hour % 12 === 0 ? 12 : hour % 12` |
| 4 | writing `seconds:` in the options object | the key is `second` (singular) |
| 5 | storing a set method result in a variable | set methods **mutate** + return a **number** |
| 6 | using `setYear()` | use `setFullYear()` |
| 7 | `9/9/2026` instead of `09/09/2026` | pad → `value < 10 ? "0" + value : value` |

---

## 9. Quick Revision (One-Liners)

- `new Date()` → the date object (current date + time) — ISO output is **UTC** (`Z` = zulu).
- get methods → READ : `getFullYear()`, `getMonth()` (+1!), `getDate()`, `getDay()` (0 = sunday), `getHours()`, `getMinutes()`, `getSeconds()`.
- `toLocaleString("en-gb", { month: "short" })` → "Sept" ; `{ weekday: "long" }` → "Wednesday".
- Human date → template literal + **ternary padding** for single digits.
- 12-hour → `hour % 12` + AM/PM + **the 12 o'clock fix**.
- One-line format → `toLocaleString` options object → the key is **`second`** (singular!).
- set methods → **mutate** the object, **return a timestamp number**, and **overflow is automatic**.
- Year method → **`setFullYear()`** (not `setYear()`).

---

## 10. Practice / Interview Questions

1. Why does `getMonth()` return `8` for September? How do you fix it for humans?
2. What does the **`Z`** mean in `2026-09-30T16:18:42.798Z`?
3. Predict the output:

```js
let d = new Date()   // suppose today is 30 september
d.setDate(30 + 5)
console.log(d.getDate(), d.getMonth() + 1) // ?
// Answer -> 5 10  -> the date rolled over into october automatically
```

4. What does `12 % 12` return, and why is `hour % 12` dangerous at 12 o'clock?
5. What does a **set method return**? Why is `let d2 = d.setDate(5)` a mistake?
6. Write a one-line expression to print `30/09/2026, 09:48:42 pm` from the current date.
7. What is the difference between `getDay()` and `getDate()`?
8. Fill in the blank → the correct key in the options object is `second` , not ______ .


