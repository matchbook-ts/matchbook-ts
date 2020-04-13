import {Matched, TrackedEither} from '../../match-tracking/types';

export interface UnwrapExecutor {
    __exhaustive?: true;
    (val: TrackedEither<unknown, unknown>): Matched<unknown>;
}
