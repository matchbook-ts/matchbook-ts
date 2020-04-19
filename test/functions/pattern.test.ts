/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {pattern} from '../../src';
import {DefaultExecutor, MatchExecutor} from '../../src/internal/match-execution/types';
import {trackMatched} from '../../src/internal/match-tracking';

test('`pattern` should return TIn | TOut, when matchers are not exhaustive', t => {
    // arrange
    const input = 12;
    const expected = '123';
    const matcherA: MatchExecutor<number, string> = () => trackMatched(expected);

    // act
    const actual = pattern(matcherA)(input);

    // assert
    t.is(actual, expected);
});

test('`pattern` should return TOut, when matchers are exhaustive', t => {
    // arrange
    const input = 12;
    const expected = '123';
    const matcherA: MatchExecutor<number, string> = i => i;
    const matcherB: DefaultExecutor<number, string> = () => trackMatched(expected);

    // act
    const actual: string = pattern(matcherA, matcherB)(input);

    // assert
    t.is(actual, expected);
});
