import {AnyExecutor, DefaultExecutor, MatchExecutor} from '../internal/match-execution';
import {UnwrapExecutor} from '../internal/match-execution/types/unwrap-executor';
import {isMatched, trackUnmatched} from '../internal/match-tracking';
import {Matched, Unmatched} from '../internal/match-tracking/types';

interface StrikeNonExhaustive {
    <TIn, TOut>(val: TIn, arm0: MatchExecutor<TIn, TOut>): TIn | TOut;
    <TIn, TOut>(val: TIn, arm0: MatchExecutor<TIn, TOut>, arm1: MatchExecutor<TIn, TOut>): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        arm8: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        arm8: MatchExecutor<TIn, TOut>,
        arm9: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
}

interface StrikeExhaustive {
    <TIn, TOut>(val: TIn, arm0: MatchExecutor<TIn, TOut>, otherwise: DefaultExecutor<TIn> | UnwrapExecutor): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        arm8: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        arm8: MatchExecutor<TIn, TOut>,
        arm9: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
}

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
export const strike: StrikeExhaustive & StrikeNonExhaustive = <TIn, TOut>(
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
