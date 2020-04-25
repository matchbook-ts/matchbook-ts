import {
    AnyExecutor,
    DefaultExecutor,
    MatchExecutor,
} from '../match-execution/types';
import {UnwrapExecutor} from '../match-execution/types/unwrap-executor';

/* eslint-disable no-undef */

/**
 * @description
 * Interface containing the function signatures for
 * strike, without default cases.
 *
 * @internal
 */
export interface NonExhaustiveStrikeSigs {
    <TIn, TOut>(val: TIn, arm_0: MatchExecutor<typeof val, TOut>): TIn | TOut;
    <TIn, TOut_0, TOut_1>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>
    ): TIn | TOut_0 | TOut_1;
    <TIn, TOut_0, TOut_1, TOut_2>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>
    ): TIn | TOut_0 | TOut_1 | TOut_2;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>
    ): TIn | TOut_0 | TOut_1 | TOut_2 | TOut_3;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>
    ): TIn | TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        arm_5: MatchExecutor<typeof val, TOut_5>
    ): TIn | TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5, TOut_6>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        arm_5: MatchExecutor<typeof val, TOut_5>,
        arm_6: MatchExecutor<typeof val, TOut_6>
    ): TIn | TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5 | TOut_6;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5, TOut_6, TOut_7>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        arm_5: MatchExecutor<typeof val, TOut_5>,
        arm_6: MatchExecutor<typeof val, TOut_6>,
        arm_7: MatchExecutor<typeof val, TOut_7>
    ):
        | TIn
        | TOut_0
        | TOut_1
        | TOut_2
        | TOut_3
        | TOut_4
        | TOut_5
        | TOut_6
        | TOut_7;
    <
        TIn,
        TOut_0,
        TOut_1,
        TOut_2,
        TOut_3,
        TOut_4,
        TOut_5,
        TOut_6,
        TOut_7,
        TOut_8
    >(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        arm_5: MatchExecutor<typeof val, TOut_5>,
        arm_6: MatchExecutor<typeof val, TOut_6>,
        arm_7: MatchExecutor<typeof val, TOut_7>,
        arm_8: MatchExecutor<typeof val, TOut_8>
    ):
        | TIn
        | TOut_0
        | TOut_1
        | TOut_2
        | TOut_3
        | TOut_4
        | TOut_5
        | TOut_6
        | TOut_7
        | TOut_8;
    <
        TIn,
        TOut_0,
        TOut_1,
        TOut_2,
        TOut_3,
        TOut_4,
        TOut_5,
        TOut_6,
        TOut_7,
        TOut_8,
        TOut_9
    >(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        arm_5: MatchExecutor<typeof val, TOut_5>,
        arm_6: MatchExecutor<typeof val, TOut_6>,
        arm_7: MatchExecutor<typeof val, TOut_7>,
        arm_8: MatchExecutor<typeof val, TOut_8>,
        arm_9: MatchExecutor<typeof val, TOut_9>
    ):
        | TIn
        | TOut_0
        | TOut_1
        | TOut_2
        | TOut_3
        | TOut_4
        | TOut_5
        | TOut_6
        | TOut_7
        | TOut_8
        | TOut_9;
}

/**
 * @description
 * Interface containing the function signatures for
 * strike, with default cases.
 *
 * @internal
 */
export interface ExhaustiveStrikeSigs {
    <TIn, TOut_0>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        otherwise: DefaultExecutor<TIn, TOut_0> | UnwrapExecutor
    ): TOut_0;
    <TIn, TOut_0, TOut_1>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        otherwise: DefaultExecutor<TIn, TOut_0 | TOut_1> | UnwrapExecutor
    ): TOut_0 | TOut_1;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        otherwise:
            | DefaultExecutor<TIn, TOut_0 | TOut_1 | TOut_2>
            | UnwrapExecutor
    ): TOut_0 | TOut_1 | TOut_2;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        otherwise:
            | DefaultExecutor<TIn, TOut_0 | TOut_1 | TOut_2 | TOut_3>
            | UnwrapExecutor
    ): TOut_0 | TOut_1 | TOut_2 | TOut_3;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        otherwise:
            | DefaultExecutor<TIn, TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4>
            | UnwrapExecutor
    ): TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        arm_5: MatchExecutor<typeof val, TOut_5>,
        otherwise:
            | DefaultExecutor<
                  TIn,
                  TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5
              >
            | UnwrapExecutor
    ): TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5, TOut_6>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        arm_5: MatchExecutor<typeof val, TOut_5>,
        arm_6: MatchExecutor<typeof val, TOut_6>,
        otherwise:
            | DefaultExecutor<
                  TIn,
                  TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5 | TOut_6
              >
            | UnwrapExecutor
    ): TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5 | TOut_6;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5, TOut_6, TOut_7>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        arm_5: MatchExecutor<typeof val, TOut_5>,
        arm_6: MatchExecutor<typeof val, TOut_6>,
        arm_7: MatchExecutor<typeof val, TOut_7>,
        otherwise:
            | DefaultExecutor<
                  TIn,
                  | TOut_0
                  | TOut_1
                  | TOut_2
                  | TOut_3
                  | TOut_4
                  | TOut_5
                  | TOut_6
                  | TOut_7
              >
            | UnwrapExecutor
    ): TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5 | TOut_6 | TOut_7;
    <
        TIn,
        TOut_0,
        TOut_1,
        TOut_2,
        TOut_3,
        TOut_4,
        TOut_5,
        TOut_6,
        TOut_7,
        TOut_8
    >(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        arm_5: MatchExecutor<typeof val, TOut_5>,
        arm_6: MatchExecutor<typeof val, TOut_6>,
        arm_7: MatchExecutor<typeof val, TOut_7>,
        arm_8: MatchExecutor<typeof val, TOut_8>,
        otherwise:
            | DefaultExecutor<
                  TIn,
                  | TOut_0
                  | TOut_1
                  | TOut_2
                  | TOut_3
                  | TOut_4
                  | TOut_5
                  | TOut_6
                  | TOut_7
                  | TOut_8
              >
            | UnwrapExecutor
    ):
        | TOut_0
        | TOut_1
        | TOut_2
        | TOut_3
        | TOut_4
        | TOut_5
        | TOut_6
        | TOut_7
        | TOut_8;
    <
        TIn,
        TOut_0,
        TOut_1,
        TOut_2,
        TOut_3,
        TOut_4,
        TOut_5,
        TOut_6,
        TOut_7,
        TOut_8,
        TOut_9
    >(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        arm_5: MatchExecutor<typeof val, TOut_5>,
        arm_6: MatchExecutor<typeof val, TOut_6>,
        arm_7: MatchExecutor<typeof val, TOut_7>,
        arm_8: MatchExecutor<typeof val, TOut_8>,
        arm_9: MatchExecutor<typeof val, TOut_9>,
        otherwise:
            | DefaultExecutor<
                  TIn,
                  | TOut_0
                  | TOut_1
                  | TOut_2
                  | TOut_3
                  | TOut_4
                  | TOut_5
                  | TOut_6
                  | TOut_7
                  | TOut_8
                  | TOut_9
              >
            | UnwrapExecutor
    ):
        | TOut_0
        | TOut_1
        | TOut_2
        | TOut_3
        | TOut_4
        | TOut_5
        | TOut_6
        | TOut_7
        | TOut_8
        | TOut_9;
}

/**
 * @description
 * Type alias for a rest argument implementation of Strike
 *
 * @internal */
export type StrikeRest = <T, R>(
    v: T,
    ...mat: Array<AnyExecutor<T, R>>
) => T | R;
