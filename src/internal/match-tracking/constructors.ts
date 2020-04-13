import {Matched, MatchState, Unmatched} from './types';

/**
 * @description
 * A helper function that constructs a {@link Matched}.
 *
 * Used by matchbook to keep track of matching internally.
 * You shouldn't need to reference this function directly.
 *
 * @param val
 * value to start tracking
 *
 * @access package
 */
export function trackMatched<T>(val: T): Matched<T> {
    return {val, _matchstate: MatchState.Matched};
}

/**
 * @description
 * A helper function that constructs an {@link Unmatched}.
 *
 * Used by matchbook to keep track of matching internally.
 * You shouldn't need to reference this function directly.
 *
 * @param val
 * value to start tracking
 *
 * @access package
 */
export function trackUnmatched<T>(val: T): Unmatched<T> {
    return {val, _matchstate: MatchState.Unmatched};
}
