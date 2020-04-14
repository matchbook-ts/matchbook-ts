<img src="./assets/logo.png" width=500 alt="Project Logo" />

# matchbook
[![npm version][npm_ver_badge]][npm_link] [![codacy][codacy_badge]][codacy_link] [![source rank][source_rank_badge]][libraries_io] ![license][license_badge]
## Pattern Matching in TypeScript & JavaScript
### ❗ Notice ❗
#### This project is in active development! 🚧🏗👷‍♂️
Watch the repository for releases to get notified when version 1 is released!

---

#### Matchbook Goals
-   simple & powerful API
    -   API is just **5 functions**, and some aliases
    -   Well documented (TODO: typedoc)
    -   **Powerful type inference** backed by ![top lang][lang_badge]

-   costs almost nothing to use
    -   **_zero_** runtime dependencies
    -   [![pkg size][npm_size_badge]][npm_link]

-   reliable
    -   comprehensive automated tests backed by [![ava][ava_dep_badge]][ava_npm]
    -   100% code coverage [![codecov][codecov_badge]][codecov_link]
    -   All pull requests & commits to `master` built via Travis CI [![build][build_badge]][build_link]

---

<img src="./assets/readme_samples/abc_123.png" width="500" alt="It's as easy as A-B-C 1-2-3"/>

---

### Pattern Matching Explained
Pattern matching is a  modern language feature
that acts like a `switch` / `case` statement
on steroids 💊💪.

You might consider using pattern matching if you
need to switch on Types or states frequently,
and want to handle the different cases in a 
**concise** and **expressive** way.

This project takes heavy inspiration from
[Rust's pattern matching idiom][rust_match].

### Examples

[rust_match]: https://doc.rust-lang.org/book/ch06-02-match.html
[codecov_link]: https://codecov.io/gh/matchbook-ts/matchbook-ts
[codecov_badge]: https://codecov.io/gh/matchbook-ts/matchbook-ts/branch/master/graph/badge.svg
[build_link]: https://travis-ci.org/matchbook-ts/matchbook-ts
[build_badge]: https://travis-ci.org/matchbook-ts/matchbook-ts.svg?branch=master
[npm_ver_badge]: https://img.shields.io/npm/v/@matchbook/ts
[npm_size_badge]: https://img.shields.io/bundlephobia/min/@matchbook/ts
[npm_link]: https://www.npmjs.com/package/@matchbook/ts
[lang_badge]: https://img.shields.io/github/languages/top/matchbook-ts/matchbook-ts
[license_badge]: https://img.shields.io/github/license/matchbook-ts/matchbook-ts
[source_rank_badge]: https://img.shields.io/librariesio/sourcerank/npm/@matchbook/ts
[libraries_io]: https://libraries.io/npm/@matchbook%2Fts
[ava_dep_badge]: https://img.shields.io/github/package-json/dependency-version/matchbook-ts/matchbook-ts/dev/ava
[ava_npm]: https://www.npmjs.com/package/ava
[codacy_badge]: https://api.codacy.com/project/badge/Grade/dd3aa51feb4b4b9988d2a1c9ea543187
[codacy_link]: https://www.codacy.com/gh/matchbook-ts/matchbook-ts?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=matchbook-ts/matchbook-ts&amp;utm_campaign=Badge_Grade
