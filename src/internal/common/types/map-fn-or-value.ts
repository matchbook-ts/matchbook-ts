import {Fn} from './fn';

/**
 * @description
 * Helper type representing either:
 * - a mapping function of type `A -> B`
 * - a constant value of type `B`
 *
 * @access package
 */
export type MapFnOrValue<TIn, TOut> = TOut | Fn<(val: TIn) => TOut>;
