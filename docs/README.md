# `matchbook` - Pattern Matching in TypeScript & JavaScript
### Why `matchbook`:
- **_zero_** dependencies
- Reliable
- Simple
- Idiomatic
- Functional

---

A useless example:
```ts
// we don't know!
declare const val: unknown;

enum MyEnum { Value }

const typeInfo: string = strike(
  42,
  match(isNaN,                      "i don't even know what that is"),
  match(MyEnum.Value,               "it's in my enum!"),
  match(v => typeof v === 'string', "it's a string!"),
  match(v => typeof v === 'number', n => `it's a number! Here's its square: ${Math.pow(n, 2)}`),
  otherwise('couldn\'t tell ya!'),
);

assertEq(typeInfo, "it's a number! Here's its square: 1764");
```

### What is Pattern Matching?
Pattern matching is a feature of many modern languages that lets you
act on a value that may be many different types or states.

### API
Coming soon - `typedoc`
