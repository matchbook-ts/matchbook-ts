import test from 'ava';
import { MatchState } from '../../src/types';

test('MatchState::Matched', t => {
    t.is(MatchState.Matched, 'Matched');
});

test('MatchState::Unmatched', t => {
    t.is(MatchState.Unmatched, 'Unmatched');
});
