/* eslint-disable @typescript-eslint/no-explicit-any */
import {TrackedEither} from '../../match-tracking/types';

/**
 * @description
 * A delegate that can be called with a value
 * that may have already successfully matched.
 *
 * - If the incoming value is {@link Matched}, this
 * delegate will just return it without doing anything.
 *
 * - If the incoming value is {@link Unmatched},
 * AND the value is a match, it will
 * transform the value with {@link MapFnOrValue}.
 *
 * @internal
 */
export interface MatchExecutor<TIn = any, TOut = any> {
    __exhaustive?: false;
    <TInExt extends TIn>(val: TrackedEither<TInExt, TOut>): TrackedEither<
        TIn,
        TOut
    >;
}
