# Web ☁️ Development
---



# 👊 JS vs Java
---
## or .NET


## vs Java
* no relation to Java
* "JavaScript" 👉 marketing
* _inspired_ by Java


<!-- .slide: data-background-image="./images/marker.png" data-background-size="auto 7%" data-background-position="bottom" data-background-opacity="0.70" -->
vs Java
<small>

* Execution
* Compilation
* Types
* Portability
* Numeric types
* OO
* Inheritance
* Concurrency
* Function overloading
* First class functions
* XML + JSON
* ~~Exception Handling (try, catch, finally)~~
* Deployment / Scaling

</small>



# How to 💡 JavaScript
---
This course 👈 **modern** JavaScript (ECMAScript)



# Types 🎟
---


* Number
* String
* Boolean
* Object
* Array


* Number
* String
* Boolean
* Object
  * Function
  * Array
  * Date
  * RegExp
* null
* undefined


# Number 🔢
* IEEE Standard for Floating-Point Arithmetic (IEEE 754)
* "only 1" number type (+ BigInt)
* parseInt, parseFloat
* NaN
* safe integer range
* FP math
* math built-in


# String 🔤
* similarities to Java
* String.prototype
* `a + b` vs `${}`
* searching
* RegExp


# Boolean ✔️ ❌
* comparison operators
* don't use `==` and `!=`
* Boolish
* `!`, `&&`, `||`
* `NaN`, inverse comparison, De Morgan's


# Object 📦
* everything except `null` and `undefined`
* similar to hash table, map, record, struct, dictionary
* object literals `{}`
* keys
* Object.assign()
* Object.prototype
* Object.freeze()


# Array 📜
* "special" Object: magic length
* creation
* `typeof` vs `Array.isArray()`
* destructive operations
* Array.prototype
* functional
* sorting
* concatenation and substrings


# `null` & `undefined` ❓
* `||` & `&&`
* 2 bottom values
* language uses undefined (let, uninitialized args)
* typeof
* use `undefined` unless required
  * `Object.create(null)`
  * `JSON.stringify({}, null, 2)`



# Variables & Scope 👀
---


# scope
* global
* module
* function
* block


# Variables
* var
* let
* const


# `'use strict'`
* es5
* why?
* examples
* babel



# Control Structures 🔁
---


* conditional `if` & ternary
* loops
  * for, while, do
  * break, continue 😑
  * consider `while(true)` to allow breaking where needed
* switch


# recursion & tail calls
* es6 (but not implemented 😿)
* only if function returns result of calling a function
* optimization: recursion as fast as loops



# Functions 📞
---


* default arguments
* declarations vs expressions
* this
* function objects



# Inheritance
# 👴 👨 👶
---


# Classes
* What is a class?
* C++ Classes
* Java Classes


# Prototypal Inheritance
* objects inherit from other objects
* no "vtable"
* lighter and expressive compared to class inheritance


* objects are containers of properties
* prototypes are objects
* methods are functions, stored in objects
* missing props 👉 undefined, unless prototype exists


* many object can share same prototype
  * _similar_ to classes
* prototypes typically store methods
  * similar objects 👉 similar methods
  * saves memory
* `this`:
  * lets prototype methods now which object
  * dynamically bound ⚠️


# JavaScript Inheritance


## legacy constructors 👎
* magic `new` operator


## class 👍 👎
* "syntactic sugar" over legacy constructors, not true classes
* `this` or that?
* useful for migrating from other languages


## factories 👍
## 🏭
* memory?
* encapsulation with closures (private vars possible)
* no `this` 👉 no errors


<!-- .slide: data-background-image="./images/typescript.png" data-background-size="auto 10%" data-background-position="bottom" data-background-opacity="1" -->
# Typescript
* MS
* requires annotations (allows interfaces)
* large project with big teams
* static type controversy



# Semicolons `;`
---
* Automatic Semicolon Insertion (ASI)
* danger! ☣️



# Homework (Devoir)
---
1. create google account
1. create github account
1. email cody.zuschlag@gmail.com:
  * google email address
  * github username
