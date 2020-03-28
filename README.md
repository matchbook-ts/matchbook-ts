<img src="../assets/logo.png" width=500 alt="Project Logo" />

# matchbook

### Pattern Matching in TypeScript & JavaScript
#### ❗ Notice ❗
##### This project is in active development! 🚧🏗👷‍♂️
##### Watch the repository for releases to get notified when version 1 is released!

---

### Why you may consider using `matchbook`:
- it has **_zero_** dependencies _**(npm badge here)**_
- reliable [![build][build_badge]][build_link] [![codecov][codecov_badge]][codecov_link]
- simple API
- smart types

---

<img src="../assets/readme_samples/abc_123.png" width="500" alt="It's as easy as A-B-C 1-2-3"/>

---

### What is Pattern Matching?
Pattern matching is a  modern language feature
that acts like a `switch` / `case` statement
on steroids 💊💪.

You might consider using pattern matching if you
need to switch on Types or states frequently,
and want to handle the different cases in a 
**concise** and **expressive** way.

This project takes heavy inspiration from
[Rust's pattern matching idiom][rust_match].

### API Docs
Coming soon - `typedoc`

### Examples

#### Match with a Type Guard
_A Type Guard is a function that returns a bool
for a value, indicating whether the value is a certain type._[<sup>[TS Docs]</sup>][type_guards]

<img src="../assets/readme_samples/type_guard_example.png" width=500 alt="Code sample" />

[liga]: https://github.com/ToxicFrog/Ligaturizer
[rust_match]: https://doc.rust-lang.org/book/ch06-02-match.html
[codecov_link]: https://codecov.io/gh/cakekindel/matchbook
[codecov_badge]: https://codecov.io/gh/cakekindel/matchbook/branch/master/graph/badge.svg
[build_link]: https://travis-ci.org/cakekindel/matchbook
[build_badge]: https://travis-ci.org/cakekindel/matchbook.svg?branch=master
[type_guards]: https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
