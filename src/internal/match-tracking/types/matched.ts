import {MatchState} from './match-state';

/**
 * @description
 * A helper type representing a value
 * that has been successfully matched.
 *
 * Used by matchbook to keep track of matching internally.
 * You shouldn't need to reference this type directly.
 *
 * @access package
 */
export type Matched<T> = {
    _matchstate: MatchState.Matched;
    val: T;
};
