/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {matchValueTester} from '../../../src/internal/match-testing';
import {trackUnmatched} from '../../../src/internal/match-tracking';

enum Coin {
    Quarter,
    Nickel,
    Dime,
}

test('`matchValueTester` should match, when input deep equals value', t => {
    // arrange
    const input = trackUnmatched(Coin.Dime);
    const expected = 'was val';

    // act
    const actual = matchValueTester(input, Coin.Dime, expected);

    // assert
    t.is(actual.val, expected);
});
test('`matchValueTester` should not match, when input does not deep equal constant value', t => {
    // arrange
    const input = trackUnmatched(Coin.Quarter);
    const transform = () =>
        t.fail('match invoked transform function when value was not a match');

    // act
    const actual = matchValueTester(input, Coin.Nickel, transform);

    // assert
    t.is(actual, input);
});
