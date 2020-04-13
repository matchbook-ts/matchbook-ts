import {mapUnmatched} from '../match-execution';
import {TrackedEither, isUnmatched} from '../match-tracking';
import {MapFnOrValue} from '../common';
import {MatchTester} from './types';

/**
 * @description
 * Execute a match if a tracked value is unmatched,
 * and the value reference equals (===) another value.
 *
 * @param tracker
 * @param rhs
 * @param mapOrVal
 *
 * @access package
 */
export const matchValueTester: MatchTester = <TIn, TOut>(
    tracker: TrackedEither<TIn, TOut>,
    rhs: unknown,
    mapOrVal: MapFnOrValue<TIn, TOut>
) => {
    if (isUnmatched(tracker) && tracker.val === rhs) {
        return mapUnmatched(tracker, mapOrVal);
    }

    return tracker;
};
