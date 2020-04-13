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
