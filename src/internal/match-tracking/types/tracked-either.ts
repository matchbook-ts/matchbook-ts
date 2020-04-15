import {Matched} from './matched';
import {Unmatched} from './unmatched';

/**
 * @description
 * Helper type representing either an Unmatched
 * or Matched value.
 *
 * Used by matchbook to keep track of matching internally.
 * You shouldn't need to reference this type directly.
 *
 * @internal
 */
export type TrackedEither<A, B> = Unmatched<A> | Matched<B>;
