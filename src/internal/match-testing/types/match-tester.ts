import {Fn, MapFnOrValue} from '../../common/types';
import {TrackedEither} from '../../match-tracking/types';

/**
 * @description Common type for the different cases supported by {@link match}.
 *
 * @access package
 */
export type MatchTester = Fn<
    <T, R>(
        input: TrackedEither<T, R>,
        when: unknown,
        mapOrVal: MapFnOrValue<T, R>
    ) => TrackedEither<T, R>
>;
