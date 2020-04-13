import {UnwrapExecutor} from '../internal/match-execution/types/unwrap-executor';
import {isUnmatched, TrackedEither} from '../internal/match-tracking';

/**
 * @description
 * This throws if the match was not exhaustive,
 * and returns R if it matched.
 *
 * I sure hope you know what you are doing!
 *
 * @example
 *    enum Time {
 *        Morning = 'Morning',
 *        Noon = 'Noon',
 *        Afternoon = 'Afternoon',
 *    };
 *    const getMessage = pattern(
 *        match(Time.Morning, 'Good morning!'),
 *        unwrap(),
 *    );
 *    try {
 *        // This will throw!!
 *        getMessage('blarg!');
 *    } catch (e) {
 *        // logs: "Unwrapped pattern didn't satisfy any matchers."
 *        console.error(e.message);
 *    }
 */
export const unwrap: UnwrapExecutor = <TIn, TOut>(
    t: TrackedEither<TIn, TOut>
) => (isUnmatched(t) ? throwUnwrapError() : t);

function throwUnwrapError(): never {
    throw new Error(
        'matchbook: `unwrap` was invoked, but value did not satisfy any `match` arms.'
    );
}
