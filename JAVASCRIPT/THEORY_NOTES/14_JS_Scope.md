# 14 - JavaScript Scope : Theory Notes

> These notes cover **all sections of the lecture**: **what is a variable**, **var vs let vs const** (scope, re-declare, update, hoisting, initialization), **scope types** (global, function, block), **hoisting** and the **Temporal Dead Zone (TDZ)**, **shadowing**, and a **var vs let vs const quick revision table**.
> Read these along with the lecture file `LECTURE/14_Scope.js`.

---

## 1. What Is a Variable?

A **variable** is a container used to store data. JavaScript has three ways to declare variables:

- `let` — block scope, can be updated, cannot be re-declared in same scope
- `var` — function scope (older, pre-ES6), can be updated and re-declared, gets hoisted
- `const` — block scope, cannot be updated or re-declared, must be initialized at declaration

### var — older way (used before ES6 / 2015)

| Feature | Behavior |
|---------|----------|
| Scope | Function scope |
| Re-declare | Allowed |
| Update / re-assign | Allowed |
| Hoisting | Yes (initialized as `undefined`) |
| Must initialize | No |

```js
var city = "pune"
console.log(city)   // pune
var city = "mumbai" // re-declared → allowed with var
console.log(city)   // mumbai
```

### let — newer way (introduced in ES6)

| Feature | Behavior |
|---------|----------|
| Scope | Block scope |
| Re-declare | Not allowed in same scope |
| Update / re-assign | Allowed |
| Hoisting | Yes (but in TDZ → ReferenceError) |
| Must initialize | No |

```js
let num = 1
// let num = 2   // error → cannot re-declare 'let' in same scope
num = 2            // update → allowed
console.log(num)   // 2
```

### const — newer way (introduced in ES6)

| Feature | Behavior |
|---------|----------|
| Scope | Block scope |
| Re-declare | Not allowed in same scope |
| Update / re-assign | Not allowed |
| Hoisting | Yes (but in TDZ → ReferenceError) |
| Must initialize | **Yes** |

```js
const PI = 3.14
// PI = 3.14159   // error → Assignment to constant variable
// const PI2      // error → Missing initializer in const declaration
```

> **Why can we update properties inside a `const` object?**
> Because the object **reference** is constant, not the content inside it. Re-assigning the variable is blocked, but changing a property is allowed.

```js
const obj = { name: "siddhant" }
obj.name = "sid"    // allowed → changing a property, not re-assigning
console.log(obj.name)   // sid
```

---

## 2. Scope

**Scope** defines where a variable can be used or accessed.

| Scope | Declared where | Accessible where | Keywords |
|-------|---------------|------------------|----------|
| Global | Outside any function/block | Everywhere | `var`, `let`, `const` |
| Function | Inside a function | Only inside that function | `var` |
| Block | Inside a `{ }` block | Only inside that block | `let`, `const` |

### 1. Global scope

```js
let company = "amazon"

console.log(company)   // amazon

function print() {
    console.log(company)   // can access global variable inside function
}

print()
console.log(company)   // amazon
```

### 2. Function scope (var only)

Variables declared with `var` inside a function are **not accessible outside** that function.

```js
function print_fun() {
    var value = 100
    console.log(value)   // 100
}

print_fun()
// console.log(value)   // ReferenceError: value is not defined
```

### 3. Block scope (let and const)

Variables declared with `let` / `const` inside a `{ }` block are **not accessible outside** that block.

```js
{
    let a = 10
    const b = 20
    console.log(a)   // 10
    console.log(b)   // 20
}

// console.log(a)   // ReferenceError → not accessible outside block

let a = 50   // reuse name OK — not same scope as the block above
let b = 200
console.log(a)   // 50
console.log(b)   // 200
```

> `var` is **function-scoped**, NOT block-scoped — so a `var` declared inside `{ }` leaks out:

```js
{
    var error = "show"
}
console.log(error)   // show   ← accessible because var is function-scoped
```

---

## 3. Hoisting

**Hoisting** — JavaScript moves declarations to the top of their scope during the compilation phase, before code execution.

### var hoisting

Declaration is hoisted, initialization is **not**. Accessing before declaration gives `undefined` (not an error).

```js
console.log(varHoisted)   // undefined  (NOT ReferenceError)
var varHoisted = 50
```

### let / const hoisting (TDZ)

Declaration is hoisted but **not initialized**. Accessing before the declaration line throws a `ReferenceError`.

```js
// console.log(letHoisted)   // ReferenceError: Cannot access before initialization
let letHoisted = 30

// console.log(constHoisted) // ReferenceError
const constHoisted = 40
```

### TDZ — Temporal Dead Zone

The time between entering the scope and the actual declaration line where `let`/`const` variables exist in memory but **cannot be accessed**. Accessing them throws a `ReferenceError`.

---

## 4. Shadowing

**Shadowing** — when a variable declared inside a narrower scope has the **same name** as a variable in an outer scope. The inner variable "shadows" (hides) the outer one within that scope.

```js
let shadow = "global"

function shadowDemo() {
    let shadow = "local"   // shadows the outer 'shadow'
    console.log("Inside function ->", shadow)   // local
}

shadowDemo()
console.log("Outside function ->", shadow)   // global

// Block shadowing
{
    let shadow = "block"
    console.log("Inside block ->", shadow)   // block
}
console.log("After block ->", shadow)   // global
```

---

## 🔑 Quick Revision: var vs let vs const

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Re-declare | Allowed | Not allowed | Not allowed |
| Update / re-assign | Allowed | Allowed | Not allowed |
| Hoisting | Yes (`undefined`) | Yes (TDZ) | Yes (TDZ) |
| Must initialize | No | No | **Yes** |

**Best practice:** Use `const` by default. Use `let` only when you need to re-assign. Avoid `var` in modern JavaScript.
