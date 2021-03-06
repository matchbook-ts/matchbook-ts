import {mapUnmatched} from '../match-execution';
import {TrackedEither, isUnmatched} from '../match-tracking';
import {isFn, MapFnOrValue} from '../common';
import {MatchTester} from './types';

/**
 * @description
 * Execute a match if a tracked value is unmatched,
 * and the value is an instance of a given constructor.
 *
 * @param tracker
 * @param ctor
 * @param transformer
 *
 * @internal
 */
export const matchCtorTester: MatchTester = <TIn, TOut>(
    tracker: TrackedEither<TIn, TOut>,
    ctor: unknown,
    transformer: MapFnOrValue<TIn, TOut>
) => {
    if (
        isUnmatched(tracker) &&
        isFn(ctor) &&
        !!ctor.prototype &&
        tracker.val instanceof ctor
    ) {
        return mapUnmatched(tracker, transformer);
    }

    return tracker;
};
