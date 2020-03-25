/**
 * @description
 * Whether or not a match for a value has been executed yet
 *
 * Used by matchbook to keep track of matching internally.
 * You shouldn't need to reference this type directly.
 *
 * @access package
 */
export enum MatchState {
    Matched = 'Matched',
    Unmatched = 'Unmatched',
}

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
export type Matched<T> = MatchTracker<T, MatchState.Matched>;

/**
 * @description
 * A helper type representing a value
 * that has not yet been successfully matched.
 *
 * Used by matchbook to keep track of matching internally.
 * You shouldn't need to reference this type directly.
 *
 * @access package
 */
export type Unmatched<T> = MatchTracker<T, MatchState.Unmatched>;

interface MatchTracker<TVal, TState extends MatchState> {
    __matchstate: TState;
    val: TVal;
}
