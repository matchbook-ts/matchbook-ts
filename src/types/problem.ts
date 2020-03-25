/**
 * @description
 * A helper type containing a helpful
 * error message for corner cases that
 * the TypeScript compiler won't catch.
 */
export type Problem<WithType, Msg> = [WithType, Msg];
