import {Matched, TrackedEither} from '../../match-tracking/types';

/**
 * @description
 * A delegate that can be called with a value
 * that may have already successfully matched.
 *
 * - If the incoming value is {@link Matched}, this
 * delegate will just return it without doing anything.
 *
 * - If the incoming value is {@link Unmatched},
 * this delegate will throw!
 *
 * @internal
 */
export interface UnwrapExecutor {
    __exhaustive?: true;
    <TOut>(val: TrackedEither<unknown, TOut>): Matched<TOut>;
}
