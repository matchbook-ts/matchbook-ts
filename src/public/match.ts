import {MatchExecutor} from '../internal/match-execution';
import {
    matchCtorTester,
    matchFnTester,
    MatchTester,
    matchValueTester,
} from '../internal/match-testing';
import {isMatched, TrackedEither} from '../internal/match-tracking';
import {Ctor, Fn, MapFnOrValue} from '../internal/common';

/**
 * @description
 * ## Match if `val` is an instance of a Constructor
 *
 * @example
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
 */
export function match<TIn, TInExt extends TIn, TOut>(
    ifInstanceOf: Ctor<TInExt>,
    then: MapFnOrValue<TInExt, TOut>
): MatchExecutor<TIn, TOut>;

/**
 * @description
 * ## Match if `val` satisfies a {@link https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards|Type Guard}
 *
 * @example
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
 */
export function match<TIn, TInExt extends TIn, TOut>(
    ifIsType: Fn<(val: TIn) => val is TInExt>,
    then: MapFnOrValue<TInExt, TOut>
): MatchExecutor<TIn, TOut>;

/**
 * @description
 * ## Match if `val` satisfies a Predicate
 *
 * @example
 * import { match, strike, otherwise } from 'matchbook';
 *
 * const actual = strike(
 *     '     ',
 *     match(s => s.trim() === '', `that's empty! nice try!`),
 *     otherwise('not empty!'),
 * );
 *
 * assertEq(actual, `that's empty! outrageous!`);
 */
export function match<TIn, TOut>(
    ifTrue: Fn<(val: TIn) => boolean>,
    then: MapFnOrValue<TIn, TOut>
): MatchExecutor<TIn, TOut>;

/**
 * @description
 * ## Match if `val` equals a lazy value
 *
 * @example
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
 */
export function match<TIn, TOut>(
    ifEquals: Fn<() => TIn>,
    then: MapFnOrValue<TIn, TOut>
): MatchExecutor<TIn, TOut>;

/**
 * @description
 * ## Match if `val` equals a value
 *
 * @example
 * import { match, strike, otherwise } from 'matchbook';
 *
 * enum Emoji {
 *     Smiley = '😊',
 *     Sad = '😢',
 * }
 *
 * const actual = strike(
 *     '😊',
 *     match(Emoji.Smiley, ':smiley:'),
 *     match(Emoji.Sad, ':sad:'),
 *     otherwise('unknown emoji')
 * );
 *
 * assertEq(actual, ':smiley:');
 */
export function match<TIn, TOut>(
    ifEquals: TIn,
    then: MapFnOrValue<typeof ifEquals, TOut>
): MatchExecutor<TIn, TOut>;

export function match<TIn, TOut, TInExt extends TIn = TIn>(
    when:
        | Ctor<TInExt>
        | Fn<(_: TIn) => _ is TInExt>
        | Fn<(_: TIn) => boolean>
        | Fn<() => TIn>
        | TIn,
    then: MapFnOrValue<TInExt, TOut>
): MatchExecutor<TIn, TOut> {
    const delegate = (t: TrackedEither<TIn, TOut>) => {
        if (isMatched(t)) return t;

        const cases: MatchTester[] = [
            matchValueTester,
            matchCtorTester,
            matchFnTester,
        ];

        const match = cases
            .map(c => c<TIn, TOut>(t, when, then as MapFnOrValue<TIn, TOut>))
            .find(isMatched);

        return match ?? t;
    };

    return delegate;
}
