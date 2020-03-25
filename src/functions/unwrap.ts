import { DefaultMatcher } from '../types';

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
export declare function unwrap<TIn, TOut>(): DefaultMatcher<TIn, TOut>;
