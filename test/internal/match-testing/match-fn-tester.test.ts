/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {fake} from 'sinon';
import {Fn} from '../../../src/internal/common/types';
import {matchFnTester} from '../../../src/internal/match-testing';
import {
    trackMatched,
    trackUnmatched,
} from '../../../src/internal/match-tracking';

enum Coin {
    Quarter,
    Nickel,
}

test('`matchFnTester` should match, when input deep equals return value of function', t => {
    // arrange
    const input = trackUnmatched(Coin.Nickel);
    const expected = 'was val';

    // act
    const actual = matchFnTester(input, () => Coin.Nickel, expected);

    // assert
    t.is(actual.val, expected);
});

test('`matchFnTester` should not match, when input does not deep equal return value of function', t => {
    // arrange
    const input = trackUnmatched(Coin.Nickel);
    const transform = () =>
        t.fail('match invoked transform function when value was not a match');

    // act
    const actual = matchFnTester(input, () => Coin.Quarter, transform);

    // assert
    t.is(actual, input);
});

test('`matchFnTester` should match, when input satisfies predicate', t => {
    // arrange
    const input = trackUnmatched(NaN);
    const expected = 'was val';

    // act
    const actual = matchFnTester(input, isNaN, expected);

    // assert
    t.is(actual.val, expected);
});

test('`matchFnTester` should not match, when input does not satisfy predicate', t => {
    // arrange
    const input = trackUnmatched(Coin.Nickel);
    const predicate = () => false;
    const transform = () =>
        t.fail('match invoked transform function when value was not a match');

    // act
    const actual = matchFnTester(input, predicate, transform);

    // assert
    t.is(actual, input);
});

test('`matchFnTester` should only invoke delegate once, when input unmatched', t => {
    // arrange
    const input = trackUnmatched(NaN);
    const del = fake(() => true);

    // act
    matchFnTester(input, del, {});

    // assert
    t.is(del.callCount, 1);
});

test('`matchFnTester` should never invoke delegate, when input matched', t => {
    // arrange
    const input = trackMatched('fart');
    const del = fake(() => true);
    const onMatch: Fn<() => string> = () =>
        (t.fail(
            'match invoked transform function when value was not a match'
        ) as unknown) as string;

    // act
    matchFnTester(input, del, onMatch);

    // assert
    t.is(del.callCount, 0);
});

test('`matchFnTester` should never throw, when delegate is a class constructor', t => {
    // arrange
    const input = trackUnmatched('fart');
    const onMatch: Fn<() => string> = () =>
        (t.fail(
            'match invoked transform function when value was not a match'
        ) as unknown) as string;

    // act
    const closure = () => matchFnTester(input, class E {}, onMatch);

    // assert
    t.notThrows(closure);
});

test('`matchFnTester` should throw, when delegate throws', t => {
    // arrange
    const input = trackUnmatched('fart');
    const onMatch: Fn<() => string> = () =>
        (t.fail(
            'match invoked transform function when value was not a match'
        ) as unknown) as string;

    // act
    const closure = () =>
        matchFnTester(
            input,
            () => {
                throw new Error();
            },
            onMatch
        );

    // assert
    t.throws(closure);
});
