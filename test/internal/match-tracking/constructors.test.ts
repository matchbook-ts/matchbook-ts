/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {
    MatchState,
    trackMatched,
    trackUnmatched,
} from '../../../src/internal/match-tracking';

test('`trackMatched` should return object of type Matched wrapping val', t => {
    // arrange
    const val = 12;

    // act
    const actual = trackMatched(val);

    // assert
    t.deepEqual(actual, {_matchstate: MatchState.Matched, val});
});

test('`trackUnmatched` should return object of type Matched wrapping val', t => {
    // arrange
    const val = 12;

    // act
    const actual = trackUnmatched(val);

    // assert
    t.deepEqual(actual, {_matchstate: MatchState.Unmatched, val});
});
