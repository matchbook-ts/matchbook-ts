import {Matched, trackMatched, Unmatched} from '../match-tracking';
import {Fn, MapFnOrValue} from '../common';

/**
 * @description
 * matchbook internal function.
 *
 * Replaces a tracked unmatched value with a tracked matched value from `mapOrVal`.
 *
 * @access package
 *
 * @param tracker
 * @param mapOrVal
 */
export function mapUnmatched<TIn, TOut>(
    tracker: Unmatched<TIn>,
    mapOrVal: MapFnOrValue<TIn, TOut>
): Matched<TOut> {
    const map: Fn<(_: TIn) => TOut> =
        typeof mapOrVal !== 'function'
            ? () => mapOrVal
            : (mapOrVal as Fn<(_: TIn) => TOut>);

    const out: TOut = map(tracker.val);

    return trackMatched(out);
}
