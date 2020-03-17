# `matchbook` - Pattern Matching in TypeScript & JavaScript
### Why `matchbook`:
- **_zero_** dependencies
- Reliable
- Simple
- Idiomatic
- Functional

---

```ts
// we don't know!
declare const val: unknown;

enum MyEnum { Value }

const typeInfo = strike(
  42,
  match(v => typeof v === 'string', 'it\'s a string!'),
  match(v => typeof v === 'number', 'it\'s a number!'),
  match(MyEnum.Value, 'it\'s in my enum!'),
  match(isNaN, 'i don\'t even know what that is'),
  otherwise('couldn\'t tell ya!'),
);

assertEq(typeInfo, 'it\'s a number!');
```

### What is Pattern Matching?
Pattern matching is a feature of many modern languages that lets you
act on a value that may be many different types or states.

### API
Coming soon - `typedoc`
