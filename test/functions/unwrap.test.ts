/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {unwrap} from '../../src';
import {trackMatched, trackUnmatched} from '../../src/internal/match-tracking';

test('`unwrap` should throw, when input unmatched', t => {
    // arrange
    const input = trackUnmatched(123);

    // act
    const closure = () => unwrap(input);

    // assert
    t.throws(closure);
});

test('`unwrap` should not throw, when input matched', t => {
    // arrange
    const input = trackMatched(123);

    // act
    const closure = () => unwrap(input);

    // assert
    t.notThrows(closure);
});
