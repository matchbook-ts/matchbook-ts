import {
    DefaultExecutor,
    InferReturnTypeOfExecutors,
    MatchExecutor,
} from '../internal/match-execution';
import {isMatched, trackUnmatched} from '../internal/match-tracking';
import {Matched, Unmatched} from '../internal/match-tracking/types';

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
 * @example
 *   enum Coin {
 *       Quarter,
 *       Nickel,
 *   }
 *
 *   function getValue(coin: Coin): number {
 *       return strike(coin,
 *           match(Coin.Quarter, 0.25),
 *           match(Coin.Nickel, 0.05),
 *           otherwise(0)
 *       );
 *   }
 *
 *   assertEq(getValue(Coin.Quarter), 0.25);
 *   assertEq(getValue(Coin.Nickel), 0.05);
 */
export function strike<
    TIn,
    TArgs extends Array<MatchExecutor<TIn> | DefaultExecutor<TIn>>
>(val: TIn, ...matchers: TArgs): InferReturnTypeOfExecutors<TArgs> {
    let tracker: Unmatched<TIn> | Matched<unknown> = trackUnmatched(val);
    for (const matcher of matchers) {
        tracker = matcher(tracker);
        if (isMatched(tracker)) break;
    }

    return tracker.val as InferReturnTypeOfExecutors<TArgs>;
}
