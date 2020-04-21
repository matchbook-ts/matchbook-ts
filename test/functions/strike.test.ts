/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {strike} from '../../src';
import {
    Matched,
    trackMatched,
    trackUnmatched,
} from '../../src/internal/match-tracking';

test('`strike` should return matcher output, when input matches', t => {
    // arrange
    const expected = 42;
    const matcher = () => trackMatched(expected);

    // act
    const actual = strike(1234, matcher);

    // assert
    t.is(actual, expected);
});

test('`strike` should not invoke arms after matched arm', t => {
    // arrange
    const input = 42;
    const output = 69;
    const matcherA = () => trackUnmatched(input);
    const matcherB = () => trackMatched(output);
    const failMsg = 'matcher arm after successful match was invoked';
    const matcherC = () => (t.fail(failMsg) as unknown) as Matched<number>;

    // act
    const actual = strike(input, matcherA, matcherB, matcherC);

    // assert
    t.is(actual, output);
});
