/**
 * @description
 * A helper type containing an error message
 * for corner cases that
 * the TypeScript compiler won't catch.
 *
 * @internal
 */
export type Problem<WithType, Msg> = [WithType, Msg];
