import { match, pattern, unwrap } from '@matchbook/ts';
//                       ^^^^^^
// `unwrap` is like `otherwise`, but instead of
// using a default value you're telling matchbook
// that your pattern will definitely match.
//
// matchbook will throw an Error of type
// `UnmatchedValueWasUnwrappedError` if your
// match fails. making it much less safe than `otherwise`.

enum Coin {
    Nickel,
    Quarter,
    Penny
}

const getValue: Fn<(c: Coin) => number> = pattern(
    match(Coin.Penny,  0.01),
    match(Coin.Nickel, 0.05),
    match(Coin.Quarter, 0.25),
    // `unwrap` is safe for now, but if someone
    // adds a new kind of Coin, then this may throw!
    unwrap,
);

assert(getValue(Coin.Nickel) === 0.05);