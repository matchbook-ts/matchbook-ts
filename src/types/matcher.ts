import { anything } from './any';
import { Matched, Unmatched } from './match-tracker';

/**
 * @description
 * A delegate that can be called with a value
 * that may have already successfully matched.
 *
 * - If the incoming value is {@link Matched}, this
 * delegate will just return it without doing anything.
 *
 * - If the incoming value is {@link Unmatched},
 * and the value is a match, it will
 * transform the value with {@link Transformer}.
 *
 * @example
 *   // An example of where you might store a `StrikeIfMatch` function
 *   const ifDebugLog: StrikeIfMatch<string, void> = match.when(
 *       process.env['NODE_ENV'] === Env.Debug,
 *       msg => console.log(msg),
 *   );
 *
 *   // Only logs if the NODE_ENV environment variable
 *   //   matches Env.Debug
 *   ifDebugLog('[DEBUG] - TESTING');
 */
export interface Matcher<TIn = anything, TOut = anything> {
    __exhaustive: false;
    (val: Unmatched<TIn> | Matched<TOut>): Unmatched<TIn> | Matched<TOut>;
}

/**
 * @description
 * You _probably_ don't need to reference this type.
 *
 * A delegate that can be called with a value
 * that may have already successfully matched.
 *
 * If the incoming value is Matched<_>, this
 * delegate will just pass it through.
 *
 * If the incoming value is Unmatched<_>
 * it will **always** transform the
 * value with {@link Transformer}.
 */
export interface DefaultMatcher<TIn = anything, TOut = anything> {
    __exhaustive: true;
    (val: Unmatched<TIn> | Matched<TOut>): Matched<TOut>;
}
