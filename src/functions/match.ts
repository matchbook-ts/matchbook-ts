import { Ctor, Matcher, Transformer } from '../types';

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
export declare function match<TIn, TInExt extends TIn, TOut>(
    ifInstanceOf: Ctor<TInExt>,
    then: Transformer<TInExt, TOut>
): Matcher<TIn, TOut>;

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
export declare function match<TIn, TInExt extends TIn, TOut>(
    ifIsType: (val: TIn) => val is TInExt,
    then: Transformer<TInExt, TOut>
): Matcher<TIn, TOut>;

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
export declare function match<TIn, TOut>(
    ifTrue: (val: TIn) => boolean,
    then: Transformer<TIn, TOut>
): Matcher<TIn, TOut>;

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
export declare function match<TIn, TOut>(
    ifEquals: () => TIn,
    then: Transformer<TIn, TOut>
): Matcher<TIn, TOut>;

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
export declare function match<TIn, TOut>(
    ifEquals: TIn,
    then: Transformer<typeof ifEquals, TOut>
): Matcher<TIn, TOut>;
