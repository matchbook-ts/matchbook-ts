import {
    match,
    strike,
    otherwise
} from '@matchbook/ts';

enum Coin {
    Nickel,
    Quarter,
    Penny
}

const getValue = (c: Coin): number => strike(
    c,
    match(Coin.Penny,   0.01),
    match(Coin.Nickel,  0.05),
    match(Coin.Quarter, 0.25),
    otherwise(0),
);

assert(getValue(Coin.Nickel) === 0.05);
