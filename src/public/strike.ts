import {AnyExecutor} from '../internal/match-execution';
import {isMatched, trackUnmatched} from '../internal/match-tracking';
import {Matched, Unmatched} from '../internal/match-tracking/types';
import {
    ExhaustiveStrikeSigs,
    NonExhaustiveStrikeSigs,
} from '../internal/overloads/strike';

/**
 * @description
 * Use this function when you have a value
 * and you want to test it against a pattern.
 *
 * {@link strike} will iterate through your
 * Matchers and use the first match's
 * Transformer to map `val` to a `TOut`.
 *
 * strike is comparable to the `match`
 * operator in Rust, F#, and other languages
 * with idiomatic Pattern Matching.
 *
 * @see {@link pattern}
 *
 * @since 1.0.0
 *
 * @example
 * ```typescript
 * enum Coin {
 *     Quarter,
 *     Nickel,
 * }
 *
 * function getValue(coin: Coin): number {
 *     return strike(coin,
 *         match(Coin.Quarter, 0.25),
 *         match(Coin.Nickel, 0.05),
 *         otherwise(0)
 *     );
 * }
 *
 * assertEq(getValue(Coin.Quarter), 0.25);
 * assertEq(getValue(Coin.Nickel), 0.05);
 * ```
 */
export const strike: ExhaustiveStrikeSigs & NonExhaustiveStrikeSigs = <
    TIn,
    TOut
>(
    val: TIn,
    ...matchers: Array<AnyExecutor<TIn, TOut>>
): TIn | TOut => {
    let tracker: Unmatched<TIn> | Matched<TOut> = trackUnmatched(val);
    for (const matcher of matchers) {
        tracker = matcher(tracker);
        if (isMatched(tracker)) break;
    }

    return tracker.val;
};
