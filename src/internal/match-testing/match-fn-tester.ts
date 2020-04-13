import {mapUnmatched} from '../match-execution';
import {isUnmatched, TrackedEither} from '../match-tracking';
import {isCtorInvokedWithoutNewError, isFn, MapFnOrValue} from '../common';
import {MatchTester} from './types';

/**
 * @description
 * Execute a match if a tracked value is unmatched,
 * and the value satisfies a given function.
 *
 * A value is considered to "satisfy the function" if:
 * - the return value of the function reference equals (===) the tracked value
 * - the return value of the function is `true`
 *
 * @param tracker
 * @param fn A Predicate OR a function returning a TIn
 * @param transformer
 *
 * @access package
 */
export const matchFnTester: MatchTester = <TIn, TOut>(
    tracker: TrackedEither<TIn, TOut>,
    fn: unknown,
    transformer: MapFnOrValue<TIn, TOut>
) => {
    if (isUnmatched(tracker) && isFn(fn)) {
        let fnReturn: unknown;

        try {
            fnReturn = fn(tracker.val);
        } catch (e) {
            if (!isCtorInvokedWithoutNewError(e)) {
                throw e;
            }
        }

        if (fnReturn === true || fnReturn === tracker.val) {
            return mapUnmatched(tracker, transformer);
        }
    }

    return tracker;
};
