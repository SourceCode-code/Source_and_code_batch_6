# 16 - JavaScript Regular Expressions (Regex) : Theory Notes

> These notes cover: **What is Regex**, **Two ways to create Regex**, **Flags (g, i, m)**, **Character Classes**, **Anchors**, **Quantifiers**, **Character Sets**, **Alternation**, **Word Boundaries**, and **Practical Examples** - all in simple language with examples.

> Read these along with the lecture file `LECTURE/16_JS_Regex.js`.

---

## 1. What is a Regular Expression (Regex)?

- **Regex (Regular Expression)** is a **pattern of characters** that defines a **search pattern**.
- It is used to **match, find, validate, and manipulate strings** in a powerful way.
- Think of it like **"Google search for strings"** - you search for patterns, not just exact text.

### Real-World Use Cases of Regex

| Use Case | Example |
|----------|---------|
| Form Validation | Check if email/phone/password is valid |
| Search & Replace | Replace all "JS" with "JavaScript" (case-insensitive) |
| Extract Data | Pull all numbers, emails, or links from a large text |
| Remove Unwanted Characters | Remove digits, spaces, or special chars from input |
| Parsing Data | Extract information from logs, CSV, URLs |

### Example : Check if a string contains a word

```js
let str = "I love JS";
console.log(/JS/.test(str)); // true -> checks if "JS" exists in str
```

---

## 2. Two Ways to Create a Regex

### Method 1: Literal Syntax (Most Common & Recommended)

```js
// Syntax : /pattern/flags
let reg1 = /siddhant/          // No flags
let reg2 = /siddhant/gi        // g = global, i = ignore case
let reg3 = /[A-Z]{5}\d{3}[A-Z]/ // PAN card pattern
```

**Advantages of Literal Syntax:**
- Faster (compiled at load time)
- Cleaner and easier to read
- Used in most cases

### Method 2: Constructor Syntax (Useful when pattern is dynamic)

```js
// Syntax : new RegExp("pattern", "flags")
let pattern = "siddhant"
let regConstructor = new RegExp(pattern)
console.log(regConstructor) // /siddhant/

// Use when pattern is built dynamically:
let userInput = "test"
let dynamicRegex = new RegExp(userInput, "gi")
console.log(dynamicRegex) // /test/gi
```

**When to use Constructor:**
- When the pattern comes from user input
- When the pattern is stored in a variable
- When you need to build the pattern programmatically

---

## 3. Flags (Modify Regex Behaviour)

Flags are written **AFTER** the closing slash: `/pattern/FLAGS`

| Flag | Name | Meaning |
|------|------|---------|
| `g` | global | Matches **ALL** occurrences (not just first) |

## 4. Character Classes (Predefined Shorthand)

Character classes are **shorthand** for common character types.

| Class | Meaning | Equivalent | Example |
|-------|---------|------------|---------|
| `\d` | digit (0-9) | `[0-9]` | `/\d/` matches "5" |
| `\D` | non-digit | `[^0-9]` | `/\D/` matches "a" |
| `\w` | word char (a-z, A-Z, 0-9, _) | `[a-zA-Z0-9_]` | `/\w/` matches "a", "1", "_" |
| `\W` | non-word char | `[^a-zA-Z0-9_]` | `/\W/` matches "@" |
| `\s` | whitespace (space, tab, newline) | - | `/\s/` matches " " |
| `\S` | non-whitespace | - | `/\S/` matches "a" |

### Examples :

```js
let str5 = "abc123@"
console.log(str5.match(/\d/g))  // ["1", "2", "3"] -> all digits
console.log(str5.match(/\D/g))  // ["a", "b", "c", "@"] -> all non-digits
console.log(str5.match(/\w/g))  // ["a", "b", "c", "1", "2", "3"] -> word chars
console.log(str5.match(/\W/g))  // ["@"] -> non-word chars

// Practical : Remove all digits
let phone = "98765 43210"
console.log(phone.replace(/\d/g, "")) // "   " (spaces remain, digits removed)

// Practical : Find all words
let sentence = "Hello123 world_456~!@"
console.log(sentence.match(/\w+/g)) // ["Hello123", "world_456"]
```

---

## 5. Anchors (Position Matching)

Anchors check the **POSITION** in the string. They are **zero-width** assertions (they don't consume characters).

| Anchor | Meaning | Example |
|--------|---------|---------|
| `^` | Start of string/line | `/^A/` matches "A..." |
| `$` | End of string/line | `/z$/` matches "...z" |

### Examples :

```js
let startStr = "Hello World"
console.log(/^H/.test(startStr)) // true  (starts with H)
console.log(/d$/.test(startStr)) // true  (ends with d)

// Email validation example
let email1 = "siddhant@gmail.com"
console.log(/^[a-z]+@[a-z]+\.com$/.test(email1)) // true

// NEGATED anchor :  ^ inside [] means "NOT"
console.log(/[^0-9]/.test("abc")) // true  (contains non-digit)
console.log(/[^0-9]/.test("123")) // false (all digits)
```

---

## 6. Quantifiers (How Many Times?)

Quantifiers specify **how many times** a character or group should appear.

| Quantifier | Meaning | Equivalent |
|------------|---------|------------|
| `*` | Zero or more | `{0,}` |
| `+` | One or more | `{1,}` |
| `?` | Zero or one (optional) | `{0,1}` |
| `{n}` | Exactly n times | - |
| `{n,}` | n or more times | - |
| `{n,m}` | Between n and m times | - |

### Examples :

```js
// * - Zero or more
console.log(/go*d/.test("gd"))    // true  (0 o's)
console.log(/go*d/.test("god"))   // true  (1 o)
console.log(/go*d/.test("goood")) // true  (many o's)

// + - One or more
console.log(/go+d/.test("god"))   // true  (1 o)
console.log(/go+d/.test("goood")) // true  (many o's)
console.log(/go+d/.test("gd"))    // false (0 o's - NOT allowed with +)

// ? - Zero or one
console.log(/colou?r/.test("color"))  // true  (u is optional)
console.log(/colou?r/.test("colour")) // true  (u present)

// {n} - Exactly n
console.log(/\d{4}/.test("2026"))  // true  (exactly 4 digits)

// {n,} - At least n
console.log(/\d{4,}/.test("123456")) // true  (6 digits, >= 4)
console.log(/\d{4,}/.test("123"))    // false (only 3 digits)

// {n,m} - Range
console.log(/\w{2,4}/.test("abc"))   // true  (3 chars)
console.log(/\w{2,4}/.test("abcde")) // true  (matches first 4 - greedy)
```

---

## 7. Character Sets (Square Brackets `[]`)

Character sets match **one character** from a set of possible characters.

### Examples :

```js
// [a-z] - any lowercase letter
// [A-Z] - any uppercase letter
// [0-9] - any digit
// [a-zA-Z] - any letter
// [A-Za-z0-9] - alphanumeric
// [^a-z] - NOT a lowercase letter (caret inside [] = negation)

let str6 = "Hello World 123"
console.log(str6.match(/[a-z]/g)) // lowercase letters
console.log(str6.match(/[A-Z]/g)) // uppercase letters
console.log(str6.match(/[0-9]/g)) // digits
```

### Practical : PAN Card Validation

**PAN Card Format:** 5 uppercase letters + 3 digits + 1 uppercase letter

```js
// WRONG: No anchors - can match partial strings
let pan1 = "ASDFG123F"
console.log(/[A-Z]{5}[0-9]{3}[A-Z]{1}/i.test(pan1)) // true (WRONG: partial match)

// CORRECT: Anchors ^ and $ ensure full string matches
let panPattern = /^[A-Z]{5}[0-9]{3}[A-Z]{1}$/
console.log(panPattern.test(pan1)) // true (correct)

// Test with invalid PAN
console.log(panPattern.test("ASDF123F"))    // false (only 4 letters, should be 5)
console.log(panPattern.test("XXABCD123FG")) // false (too long)
```

**Why the anchors matter:**
- Without `^` and `$`, the regex matches "ASDFG123F" as a **substring**
- With `^` and `$`, it ensures the ENTIRE string follows the pattern exactly


| `i` | ignore case | Matches both uppercase and lowercase |
| `m` | multiline | `^` and `$` match start/end of each line |
| `s` | dotAll | `.` matches newline characters too |
| `u` | unicode | Enables full Unicode support |



## 8. Alternation (OR) and Grouping (Parentheses)

### Alternation - The OR Operator (`|`)

```js
console.log(/yes|no/.test("yes")) // true
console.log(/yes|no/.test("no"))  // true
console.log(/yes|no/.test("maybe")) // false

// Match "cat" OR "dog"
console.log(/(cat|dog)/.test("The cat is here")) // true
```

### Grouping - Parentheses `()`

Parentheses serve two purposes:
1. **Group** characters together for quantifiers
2. **Capture** parts of the match

```js
// Group for quantifier - match "ab" repeated
console.log(/(ab)+/.test("ab ab ab")) // true (ab appears 3 times)
console.log(/(ab)+/.test("a"))        // false (ab not found as a group)

// Capturing groups - extract parts of the match
let priceStr = "Price is $100"
let pricePattern = /\$(\d+)/
let match = priceStr.match(pricePattern)
console.log(match) // ["$100", "100", index: 9, input: "Price is $100", ...]
// match[0] = full match "$100"
// match[1] = first capturing group "100" (the digits)
```

---

## 9. Word Boundaries (`\b`)

A **word boundary** (`\b`) is a position between a **word character** (`\w` = letter, digit, underscore) and a **non-word character** (space, punctuation, end of string).

| Pattern | Meaning |
|---------|---------|
| `\b` | Word boundary |
| `\B` | Non-word boundary |

### Examples :

```js
let wordStr = "The cat and the CAT are here"
console.log(/\bcat\b/gi.test(wordStr))     // true
console.log(/\bcat\b/gi.test("category"))   // false (cat inside another word - no boundary)
console.log(/\bcat\b/gi.test("cat123"))     // false (no boundary before 123)

// Practical : Replace only whole word "is"
let sentence2 = "This is a test. It is easy."
console.log(sentence2.replace(/\bis\b/gi, "IS"))
// Output : "This IS a test. It IS easy."
// (only whole word "is", not "This" or inside "topic")
```

---

## 10. Practical Examples

### Example 1 : Email Validation

```js
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let emails = [
  "siddhant@gmail.com",   // valid
  "test.user@org.co.in",  // valid
  "invalid.email",        // invalid
  "user@no-extension",    // invalid
  "user@domain.c"         // invalid (only 1 char in TLD)
]

emails.forEach(email => {
  console.log(email + " -> " + emailPattern.test(email))
})
// Output:
// siddhant@gmail.com -> true
// test.user@org.co.in -> true
// invalid.email -> false
// user@no-extension -> false
// user@domain.c -> false
```

### Example 2 : Phone Number Validation (Indian 10-digit mobile)

```js
// Indian mobile number: starts with 6-9, followed by 9 more digits
let phonePattern = /^[6-9]\d{9}$/
let phoneNumbers = ["9876543210", "6543210987", "5876543210", "1234567890", "98765"]

phoneNumbers.forEach(phone => {
  console.log(phone + " -> " + phonePattern.test(phone))
})
// 9876543210 -> true
// 6543210987 -> true
// 5876543210 -> false (starts with 5)
// 1234567890 -> false (starts with 1)
// 98765      -> false (too short)
```

### Example 3 : Password Strength Check

```js
// At least 8 chars, 1 uppercase, 1 lowercase, 1 digit
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
console.log(passwordPattern.test("S1ddhant")) // true
console.log(passwordPattern.test("abc123"))   // false (too short)
```

### Example 4 : Extract All Numbers from a Sentence

```js
let str7 = "hello everyone class on 19 May 2026 is at 9:05 pm"
console.log(str7.match(/\d+/g)) // ["19", "2026", "9", "05"]
```

### Example 5 : Count Vowels in a String

```js
let str8 = "hello my name is siddhant gadakh"
console.log(str8.match(/[aeiou]/gi)) // ["e", "o", "o", "e", "a", "i", "a", "i", "a", "a"]
console.log(str8.match(/[aeiou]/gi).length) // 10
```

### Example 6 : Remove All Punctuation

```js
let text2 = "Hello, World! How are you? I'm fine."
let noPunctuation = text2.replace(/[.,!?;'"\:-]/g, "")
console.log(noPunctuation) // "Hello World How are you I'm fine"
```



## 11. Common Mistakes & Corrections

### MISTAKE 1 : Missing Anchors in Validation

```js
// WRONG - matches partial strings
/([A-Z]{5}[0-9]{3}[A-Z]{1})/.test("XXASDFG123FA") // TRUE (WRONG!)

// CORRECT - anchors ensure full match
/^[A-Z]{5}[0-9]{3}[A-Z]{1}$/.test("XXASDFG123FA") // FALSE
```

### MISTAKE 2 : Forgetting to Escape Special Characters

```js
// WRONG - $ is treated as end anchor
/price is $100/  // matches "price is " at end of string

// CORRECT - escape the $ to match literally
/price is \$100/ // matches literally "price is $100"
```

### MISTAKE 3 : Case-Sensitive Replacement

```js
// WRONG - only replaces exact "JS"
string.replace("JS", "java")

// CORRECT - use i flag for case-insensitive
string.replace(/JS/gi, "java") // replaces JS, js, Jz, JS
```

---

## 12. Quick Revision Table

| Symbol | Meaning | Example |
|--------|---------|---------|
| `.` | Any character | `/./ matches "a"` |
| `^` | Start of string/line | `/^A/ matches "A..."` |
| `$` | End of string/line | `/z$/ matches "...z"` |
| `*` | Zero or more | `/ab*c/ matches "ac", "abc"` |
| `+` | One or more | `/ab+c/ matches "abc", "abbc"` |
| `?` | Zero or one (optional) | `/ab?c/ matches "ac", "abc"` |
| `{n}` | Exactly n times | `/\d{3}/ matches 3 digits` |
| `[]` | Character set | `/[a-z]/ matches any lowercase` |
| `[^]` | Negated set | `/[^0-9]/ matches non-digit` |
| `\|` | OR | `/cat\|dog/ matches "cat" or "dog"` |
| `()` | Group/capture | `/(ab)+/ matches "ab", "abab"` |
| `\b` | Word boundary | `/\bword\b/ matches whole "word"` |
| `\d` | Digit (0-9) | `/\d/ matches "5"` |
| `\D` | Non-digit | `/\D/ matches "a"` |
| `\w` | Word char (a-z, A-Z, 0-9, _) | `/\w/ matches "a", "1", "_"` |
| `\s` | Whitespace | `/\s/ matches " "` |
| `\S` | Non-whitespace | `/\S/ matches "a"` |

### Flags Summary

| Flag | Full Name | Meaning |
|------|-----------|---------|
| `g` | global | Match ALL occurrences |
| `i` | ignore case | Case insensitive matching |
| `m` | multiline | `^` and `$` per line |

### String Methods That Work with Regex

| Method | Returns | Example |
|--------|---------|---------|
| `test()` | Boolean | `/JS/.test(str)` - true/false |
| `match()` | Array of matches | `str.match(/JS/gi)` |
| `replace()` | New string | `str.replace(/JS/gi, "Java")` |
| `search()` | Index (-1 if not found) | `str.search(/JS/)` |
| `split()` | Array | `"a,b".split(/,/)` |

---

## 13. Practice Problems (Try These!)

1. **Validate a date in format DD/MM/YYYY**
   - Hint: `^(\d{2})\/(\d{2})\/(\d{4})$`

2. **Extract all URLs from a paragraph of text**

3. **Check if a string is a valid hex color** (`#FFF` or `#FFFFFF`)
   - Hint: `^#([A-Fa-f0-9]{3}\|[A-Fa-f0-9]{6})$`

4. **Remove all extra spaces (more than one) from a string**
   - Hint: `str.replace(/\s+/g, " ")`

5. **Extract username from an email address**
   - Hint: `str.match(/^([^@]+)@/)[1]`

6. **Validate a credit card number** (16 digits, groups of 4)
   - Hint: `/^\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}$/`

---

> **💡 Key Takeaway:** Regex is a powerful tool, but it can be tricky. Practice regularly and always use `^` and `$` for validation to ensure the **entire string** matches your pattern. Happy coding! 🎉
.