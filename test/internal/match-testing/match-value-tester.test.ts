/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {matchValueTester} from '../../../src/internal/match-testing';
import {trackUnmatched} from '../../../src/internal/match-tracking';

enum Coin {
    Quarter,
    Nickel,
    Dime,
}

test('`matchValueTester` should match, when input reference equals value', t => {
    // arrange
    const input = trackUnmatched(Coin.Dime);
    const expected = 'was val';

    // act
    const actual = matchValueTester(input, Coin.Dime, expected);

    // assert
    t.is(actual.val, expected);
});
test('`matchValueTester` should not match, when input does not reference equal constant value', t => {
    // arrange
    const input = trackUnmatched(Coin.Quarter);
    const transform = () => t.fail('match invoked transform function when value was not a match');

    // act
    const actual = matchValueTester(input, Coin.Nickel, transform);

    // assert
    t.is(actual, input);
});

test('`matchValueTester` should match, when input matches structure', t => {
    // arrange
    const steve = {
        name: 'Steve',
        hobby: 'Woodworking',
    };
    const input = trackUnmatched(steve);
    const expected = 'match!';

    // act
    const actual = matchValueTester(input, {hobby: 'Woodworking'}, expected);

    // assert
    t.is(actual.val, expected);
});
test('`matchValueTester` should not match, when input does not match structure', t => {
    // arrange
    const steve = {
        name: 'Steve',
        hobby: 'Woodworking',
    };
    const input = trackUnmatched(steve);
    const transform = () => t.fail('match invoked transform function when value was not a match');

    // act
    const actual = matchValueTester(input, {hobby: 'Farting'}, transform);

    // assert
    t.is(actual, input);
});
