/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {
    isMatched,
    isUnmatched,
    Matched,
    MatchState,
    Unmatched,
} from '../../../src/internal/match-tracking';

test('`isMatched` should return true, when tracker is matched', t => {
    // arrange
    const matched: Matched<12> = {_matchstate: MatchState.Matched, val: 12};

    // act
    const actual = isMatched(matched);

    // assert
    t.true(actual);
});

test('`isMatched` should return false, when tracker is not matched', t => {
    // arrange
    const matched: Unmatched<12> = {_matchstate: MatchState.Unmatched, val: 12};

    // act
    const actual = isMatched(matched);

    // assert
    t.false(actual);
});

test('`isUnmatched` should return true, when tracker is unmatched', t => {
    // arrange
    const matched: Unmatched<12> = {_matchstate: MatchState.Unmatched, val: 12};

    // act
    const actual = isUnmatched(matched);

    // assert
    t.true(actual);
});

test('`isUnmatched` should return false, when tracker is not unmatched', t => {
    // arrange
    const matched: Matched<12> = {_matchstate: MatchState.Matched, val: 12};

    // act
    const actual = isUnmatched(matched);

    // assert
    t.false(actual);
});
