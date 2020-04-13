/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {MatchState} from '../../../src/internal/match-tracking';

test("`MatchState::Matched` should equal 'Matched'", t => {
    t.is(MatchState.Matched, 'Matched');
});

test("`MatchState::Unmatched` should equal 'Unmatched'", t => {
    t.is(MatchState.Unmatched, 'Unmatched');
});
