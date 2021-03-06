import {Matched, trackMatched, Unmatched} from '../match-tracking';
import {MapFnOrValue} from '../common';

/**
 * @description
 * matchbook internal function.
 *
 * Replaces a tracked unmatched value with a tracked matched value from `mapOrVal`.
 *
 * @internal
 *
 * @param tracker
 * @param mapOrVal
 */
export function mapUnmatched<TIn, TOut>(
    tracker: Unmatched<TIn>,
    mapOrVal: MapFnOrValue<TIn, TOut>
): Matched<TOut> {
    const map: (_: TIn) => TOut =
        typeof mapOrVal !== 'function'
            ? () => mapOrVal
            : (mapOrVal as (_: TIn) => TOut);

    const out: TOut = map(tracker.val);

    return trackMatched(out);
}
