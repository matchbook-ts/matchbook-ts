/**
 * @description
 * If the value is a match, transform it with a mapping
 * function, or swap it out with constant value
 *
 * @example ##### Replace the match with a constant value
 * // logs: ':smile:'
 * match.strike('😊', match.when(Emoji.Smile, ':smile:'));
 *
 * @example ##### Replace the match with the result of some mapping function
 * // logs: '\u1F95A'
 * match.strike('😊', match.when(Emoji.Smile, val => getUnicode(val)));
 */
export type Transformer<TIn, TOut> = TOut | ((val: TIn) => TOut);
