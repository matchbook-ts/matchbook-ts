import { DefaultMatcher, Transformer } from '../types';
import { anything } from '../types/alias';

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
export declare const otherwise: <TIn = anything, TOut = anything>(
    useDefault: Transformer<TIn, TOut>
) => DefaultMatcher<TIn, TOut>;
