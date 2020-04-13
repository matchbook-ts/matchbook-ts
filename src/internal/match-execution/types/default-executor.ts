/* eslint-disable @typescript-eslint/no-explicit-any */
import {Matched, TrackedEither} from '../../match-tracking/types';

/**
 * @description
 * A delegate that can be called with a value
 * that may have already successfully matched.
 *
 * If the incoming value is {@link Matched}, this
 * delegate will just pass it through.
 *
 * If the incoming value is {@link Unmatched}
 * it will **always** transform the
 * value with {@link MapFnOrValue}
 *
 * @access package
 */
export interface DefaultExecutor<TIn = any, TOut = any> {
    __exhaustive?: true;
    (val: TrackedEither<TIn, TOut>): Matched<TOut>;
}
