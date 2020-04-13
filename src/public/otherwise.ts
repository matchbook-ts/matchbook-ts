/* eslint-disable @typescript-eslint/no-explicit-any */
import {isFn, MapFnOrValue} from '../internal/common';
import {DefaultExecutor} from '../internal/match-execution/types';
import {isMatched, trackMatched} from '../internal/match-tracking';

/**
 * @description
 * Always executes a match, using either a
 * constant value of type R or a delegate
 * that returns a value of type R
 *
 * @example
 *   enum Time {
 *       Morning = 'Morning',
 *       Noon = 'Noon',
 *       Afternoon = 'Afternoon',
 *   }
 *
 *   const actual = strike(
 *       'Night',
 *       match(Time.Morning, 'Good morning!'),
 *       otherwise('Goodnight!')
 *   );
 *
 *   assertEq(actual, 'Goodnight!');
 */
export const otherwise: <TIn = any, TOut = any>(
    useDefault: MapFnOrValue<TIn, TOut>
) => DefaultExecutor<TIn, TOut> = useDefault => tracker => {
    if (isMatched(tracker)) return tracker;

    const defaultValue = isFn(useDefault)
        ? useDefault(tracker.val)
        : useDefault;

    return trackMatched(defaultValue);
};
