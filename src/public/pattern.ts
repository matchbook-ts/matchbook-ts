import {AnyExecutor, DefaultExecutor, MatchExecutor} from '../internal/match-execution/types';
import {UnwrapExecutor} from '../internal/match-execution/types/unwrap-executor';
import {strike} from './strike';

/* eslint-disable @typescript-eslint/no-explicit-any */

interface PatternNonExhaustive {
    <TIn, TOut>(arm0: MatchExecutor<TIn, TOut>): (val: TIn) => TIn | TOut;
    <TIn, TOut>(arm0: MatchExecutor<TIn, TOut>, arm1: MatchExecutor<TIn, TOut>): (val: TIn) => TIn | TOut;
    <TIn, TOut>(arm0: MatchExecutor<TIn, TOut>, arm1: MatchExecutor<TIn, TOut>, arm2: MatchExecutor<TIn, TOut>): (
        val: TIn
    ) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        arm8: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
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
    ): (val: TIn) => TIn | TOut;
}

interface PatternExhaustive {
    <TIn, TOut>(arm0: MatchExecutor<TIn, TOut>, otherwise: DefaultExecutor<TIn> | UnwrapExecutor): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
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
    ): (val: TIn) => TOut;
    <TIn, TOut>(
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
    ): (val: TIn) => TOut;
}

interface StrikeRest {
    <T, R>(v: T, ...mat: Array<AnyExecutor<T, R>>): T | R;
}

/**
 * @description
 * Use this function when you want to define
 * a pattern to be used against one or
 * more values _after_ defining the pattern.
 *
 * {@link pattern} accepts n parameters
 * of Matchers, and returns a function.
 *
 * The returned function accepts a `TIn`
 * and tests it against all of the
 * matchers passed to {@link pattern}.
 *
 * @see {@link strike}
 * ```typescript
 * enum Coin {
 *     Quarter,
 *     Nickel,
 * }
 *
 * // example from `strike`, but shortened using `pattern`.
 * const getValue: (coin: Coin) => number = pattern(
 *     match(Coin.Quarter, 0.25),
 *     match(Coin.Nickel, 0.05),
 *     otherwise(0)
 * );
 *
 * assertEq(getValue(Coin.Quarter), 0.25);
 * assertEq(getValue(Coin.Nickel), 0.05);
 * ```
 */
const pattern: PatternExhaustive & PatternNonExhaustive = <TIn, TOut>(...matchers: Array<AnyExecutor<TIn, TOut>>) => (
    val: TIn
) => (strike as StrikeRest)(val, ...matchers);

export {pattern, pattern as book};
