import {UnwrapExecutor} from '../internal/match-execution/types/unwrap-executor';
import {isUnmatched, TrackedEither} from '../internal/match-tracking';

/**
 * @description
 * This throws if the match was not exhaustive,
 * and returns R if it matched.
 *
 * I sure hope you know what you are doing!
 *
 * @throws {@link UnwrapError}
 *
 * ```typescript
 * enum Time {
 *     Morning = 'Morning',
 *     Noon = 'Noon',
 *     Afternoon = 'Afternoon',
 * };
 * const getMessage = pattern(
 *     match(Time.Morning, 'Good morning!'),
 *     unwrap(),
 * );
 * try {
 *     // This will throw!!
 *     getMessage('blarg!');
 * } catch (e) {
 *     if (e instanceof UnwrapError) {
 *         console.error(e.message);
 *     }
 * }
 * ```
 *
 * @since 1.0.0
 */
export const unwrap: UnwrapExecutor = <TIn, TOut>(t: TrackedEither<TIn, TOut>) =>
    isUnmatched(t) ? throwUnwrapError() : t;

/** @internal */
function throwUnwrapError(): never {
    throw new UnwrapError();
}

/**
 * @description
 * Error type thrown by {@link unwrap} when a value hits `unwrap` and it has
 * not been matched on yet.
 *
 * @since 1.0.0
 */
export class UnwrapError extends Error {
    constructor() {
        super('@matchbook: `unwrap` was invoked, but value did not satisfy any `match` arms.');
    }
}
