import {MapFnOrValue} from '../common';
import {mapUnmatched} from '../match-execution';
import {isMatched, TrackedEither} from '../match-tracking';
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
 * @internal
 */
export const matchValueTester: MatchTester = <TIn, TOut>(
    tracker: TrackedEither<TIn, TOut>,
    rhs: unknown,
    mapOrVal: MapFnOrValue<TIn, TOut>
) => {
    if (isMatched(tracker)) return tracker;

    const isObject = (arg: unknown): arg is object => typeof arg === 'object' && arg !== null;

    const structureMatches = (left: TIn, right: unknown): boolean =>
        isObject(left) &&
        isObject(right) &&
        Object.entries(right).every(([k, v]) => k in left && left[k as keyof TIn] === v);

    if (structureMatches(tracker.val, rhs)) {
        return mapUnmatched(tracker, mapOrVal);
    }

    if (tracker.val === rhs) return mapUnmatched(tracker, mapOrVal);

    return tracker;
};
