import {
    DefaultExecutor,
    InferReturnTypeOfExecutors,
    MatchExecutor,
    InferInputTypeOfExecutors,
} from '../internal/match-execution/types';
import {strike} from './strike';

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
 * @example
 *   enum Coin {
 *       Quarter,
 *       Nickel,
 *   }
 *
 *   // example from `strike`, but shortened using `pattern`.
 *   const getValue: (coin: Coin) => number = pattern(
 *       match(Coin.Quarter, 0.25),
 *       match(Coin.Nickel, 0.05),
 *       otherwise(0)
 *   );
 *
 *   assertEq(getValue(Coin.Quarter), 0.25);
 *   assertEq(getValue(Coin.Nickel), 0.05);
 */
export function pattern<TArgs extends Array<MatchExecutor | DefaultExecutor>>(
    ...matchers: TArgs
): (
    val: InferInputTypeOfExecutors<TArgs>
) => InferReturnTypeOfExecutors<TArgs> {
    return val => strike(val, ...matchers);
}
