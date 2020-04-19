import {MatchExecutor} from '../internal/match-execution';
import {matchCtorTester, matchFnTester, MatchTester, matchValueTester} from '../internal/match-testing';
import {isMatched, TrackedEither} from '../internal/match-tracking';
import {Ctor, Fn, MapFnOrValue} from '../internal/common';

/**
 * @description
 * ## Match if `val` is an instance of a Constructor
 *
 * @since 1.0.0
 *
 * @example
 * ```typescript
 * import { match, strike, otherwise } from 'matchbook';
 *
 * // Get the level of Personal Protective Equipment for each career
 * class Human { }
 * class Nurse extends Human { }
 * class ConstructionWorker extends Human { }
 * class BombSquadTechnician extends Human { }
 *
 * const actual = strike(
 *     new Nurse(),
 *     match(Nurse, PpeLevel.Low),
 *     match(ConstructionWorker, PpeLevel.Medium),
 *     match(BombSquadTechnician, PpeLevel.High),
 *     otherwise(Ppe.None),
 * );
 *
 * assertEq(actual, PpeLevel.Low);
 * ```
 */
function match<TIn, TInExt extends TIn, TOut>(
    ifInstanceOf: Ctor<TInExt>,
    then: MapFnOrValue<TInExt, TOut>
): MatchExecutor<TIn, TOut>;

/**
 * @description
 * ## Match if `val` satisfies a {@link https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards|Type Guard}
 *
 * @since 1.0.0
 *
 * @example
 * ```typescript
 * import { match, strike, otherwise } from 'matchbook';
 *
 * const actual = strike<unknown, string>(
 *     4,
 *     match(
 *         n => typeof n === 'number',
 *         // NOTE: Even though we're matching on type unknown,
 *         //   since our type guard is satisfied,
 *         //   this delegate knows n is a number.
 *         n => `sqrt: ${Math.sqrt(n)}`
 *     ),
 *     otherwise('no clue')
 * );
 *
 * assertEq(actual, 'sqrt: 2');
 * ```
 */
function match<TIn, TInExt extends TIn, TOut>(
    ifIsType: Fn<(val: TIn) => val is TInExt>,
    then: MapFnOrValue<TInExt, TOut>
): MatchExecutor<TIn, TOut>;

/**
 * @description
 * ## Match if `val` satisfies a Predicate
 *
 * @since 1.0.0
 *
 * @example
 * ```typescript
 * import { match, strike, otherwise } from 'matchbook';
 *
 * const actual = strike(
 *     '     ',
 *     match(s => s.trim() === '', `that's empty! nice try!`),
 *     otherwise('not empty!'),
 * );
 *
 * assertEq(actual, `that's empty! outrageous!`);
 * ```
 */
function match<TIn, TOut>(ifTrue: Fn<(val: TIn) => boolean>, then: MapFnOrValue<TIn, TOut>): MatchExecutor<TIn, TOut>;

/**
 * @description
 * ## Match if `val` equals a lazy value
 *
 * @since 1.0.0
 *
 * @example
 * ```typescript
 * import { match, strike, otherwise } from 'matchbook';
 *
 * enum Emoji {
 *     Smiley = '😊',
 *     Sad = '😢',
 *     Eggplant = '🍆'
 * }
 *
 * function getMostPopularEmoji() {
 *     return Emoji.Eggplant;
 * }
 *
 * const actual = strike(
 *     '🍆',
 *     match(getMostPopularEmoji, 'very popular!'),
 *     otherwise('not popular...')
 * );
 *
 * assertEq(actual, 'very popular!');
 * ```
 */
function match<TIn, TOut>(ifEquals: Fn<() => TIn>, then: MapFnOrValue<TIn, TOut>): MatchExecutor<TIn, TOut>;

/**
 * @description
 * ## Match if `val` matches part of another
 *
 * @since 1.0.0
 *
 * @example
 * ```typescript
 * import { match, pattern, otherwise } from 'matchbook';
 *
 * const getGoodBirthdayGift = pattern(
 *     match({ hobby: Hobby.Golf }, 'golf cart'),
 *     match({ hobby: Hobby.Woodworking }, 'table saw'),
 *     match({ hobby: Hobby.Blacksmithing }, 'tongs'),
 *     otherwise('money')
 * );
 *
 * const steve = {
 *     name: 'Steve',
 *     hobby: Hobby.Woodworking,
 * };
 *
 * assertEq(getGoodBirthdayGift(steve), 'table saw');
 * ```
 */
function match<TIn, TOut, TStructure extends Partial<TIn>>(
    ifMatches: TStructure,
    then: MapFnOrValue<TIn, TOut>
): MatchExecutor<TIn, TOut>;

function match<TIn, TOut, TInExt extends TIn = TIn>(
    when: Ctor<TInExt> | Fn<(_: TIn) => _ is TInExt> | Fn<(_: TIn) => boolean> | Fn<() => TIn> | TIn,
    then: MapFnOrValue<TInExt, TOut>
): MatchExecutor<TIn, TOut> {
    const delegate = (t: TrackedEither<TIn, TOut>) => {
        if (isMatched(t)) return t;

        const cases: MatchTester[] = [matchValueTester, matchCtorTester, matchFnTester];

        const match = cases.map(c => c<TIn, TOut>(t, when, then as MapFnOrValue<TIn, TOut>)).find(isMatched);

        return match ?? t;
    };

    return delegate;
}

export {
    match,
    match as m,
    /** @since 1.0.0 */
    match as arm,
    /** @since 1.0.0 */
    match as when,
};
