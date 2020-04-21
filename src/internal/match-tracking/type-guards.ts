import {Matched, MatchState, TrackedEither, Unmatched} from './types';

/**
 * @description
 * Type guard indicating a tracked value is {@link Unmatched}
 *
 * @param val
 *
 * @internal
 */
export function isUnmatched<T>(
    val: TrackedEither<T, unknown>
): val is Unmatched<T> {
    return val._matchstate === MatchState.Unmatched;
}

/**
 * @description
 * Type guard indicating a tracked value is {@link Matched}
 *
 * @param val
 *
 * @internal
 */
export function isMatched<T>(
    val: TrackedEither<unknown, T>
): val is Matched<T> {
    return val._matchstate === MatchState.Matched;
}
