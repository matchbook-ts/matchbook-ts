/**
 * @description
 * Helper type representing either:
 * - a mapping function of type `A -> B`
 * - a constant value of type `B`
 *
 * @internal
 */
export type MapFnOrValue<TIn, TOut> = TOut | ((val: TIn) => TOut);
