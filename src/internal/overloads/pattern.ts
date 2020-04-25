import {DefaultExecutor, MatchExecutor} from '../match-execution/types';

/* eslint-disable no-undef */

/**
 * @description
 * Interface containing the function signatures for
 * pattern, without default cases.
 *
 * @internal
 */
export interface PatternNonExhaustiveSigs {
    <TIn, TOut>(arm_0: MatchExecutor<TIn, TOut>): (val: TIn) => TIn | TOut;
    <TIn, TOut_0, TOut_1>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>
    ): (val: TIn) => TIn | TOut_0 | TOut_1;
    <TIn, TOut_0, TOut_1, TOut_2>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>
    ): (val: TIn) => TIn | TOut_0 | TOut_1 | TOut_2;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>
    ): (val: TIn) => TIn | TOut_0 | TOut_1 | TOut_2 | TOut_3;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        arm_4: MatchExecutor<TIn, TOut_4>
    ): (val: TIn) => TIn | TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        arm_4: MatchExecutor<TIn, TOut_4>,
        arm_5: MatchExecutor<TIn, TOut_5>
    ): (val: TIn) => TIn | TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5, TOut_6>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        arm_4: MatchExecutor<TIn, TOut_4>,
        arm_5: MatchExecutor<TIn, TOut_5>,
        arm_6: MatchExecutor<TIn, TOut_6>
    ): (
        val: TIn
    ) => TIn | TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5 | TOut_6;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5, TOut_6, TOut_7>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        arm_4: MatchExecutor<TIn, TOut_4>,
        arm_5: MatchExecutor<TIn, TOut_5>,
        arm_6: MatchExecutor<TIn, TOut_6>,
        arm_7: MatchExecutor<TIn, TOut_7>
    ): (
        val: TIn
    ) =>
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
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        arm_4: MatchExecutor<TIn, TOut_4>,
        arm_5: MatchExecutor<TIn, TOut_5>,
        arm_6: MatchExecutor<TIn, TOut_6>,
        arm_7: MatchExecutor<TIn, TOut_7>,
        arm_8: MatchExecutor<TIn, TOut_8>
    ): (
        val: TIn
    ) =>
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
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        arm_4: MatchExecutor<TIn, TOut_4>,
        arm_5: MatchExecutor<TIn, TOut_5>,
        arm_6: MatchExecutor<TIn, TOut_6>,
        arm_7: MatchExecutor<TIn, TOut_7>,
        arm_8: MatchExecutor<TIn, TOut_8>,
        arm_9: MatchExecutor<TIn, TOut_9>
    ): (
        val: TIn
    ) =>
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
export interface PatternExhaustiveSigs {
    <TIn, TOut_0, TOut_1>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        otherwise: DefaultExecutor<TIn, TOut_1>
    ): (val: TIn) => TOut_0 | TOut_1;
    <TIn, TOut_0, TOut_1, TOut_2>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        otherwise: DefaultExecutor<TIn, TOut_2>
    ): (val: TIn) => TOut_0 | TOut_1 | TOut_2;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        otherwise: DefaultExecutor<TIn, TOut_3>
    ): (val: TIn) => TOut_0 | TOut_1 | TOut_2 | TOut_3;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        otherwise: DefaultExecutor<TIn, TOut_4>
    ): (val: TIn) => TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        arm_4: MatchExecutor<TIn, TOut_4>,
        otherwise: DefaultExecutor<TIn, TOut_5>
    ): (val: TIn) => TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5, TOut_6>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        arm_4: MatchExecutor<TIn, TOut_4>,
        arm_5: MatchExecutor<TIn, TOut_5>,
        otherwise: DefaultExecutor<TIn, TOut_6>
    ): (
        val: TIn
    ) => TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5 | TOut_6;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5, TOut_6, TOut_7>(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        arm_4: MatchExecutor<TIn, TOut_4>,
        arm_5: MatchExecutor<TIn, TOut_5>,
        arm_6: MatchExecutor<TIn, TOut_6>,
        otherwise: DefaultExecutor<TIn, TOut_7>
    ): (
        val: TIn
    ) => TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5 | TOut_6 | TOut_7;
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
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        arm_4: MatchExecutor<TIn, TOut_4>,
        arm_5: MatchExecutor<TIn, TOut_5>,
        arm_6: MatchExecutor<TIn, TOut_6>,
        arm_7: MatchExecutor<TIn, TOut_7>,
        otherwise: DefaultExecutor<TIn, TOut_8>
    ): (
        val: TIn
    ) =>
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
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        arm_4: MatchExecutor<TIn, TOut_4>,
        arm_5: MatchExecutor<TIn, TOut_5>,
        arm_6: MatchExecutor<TIn, TOut_6>,
        arm_7: MatchExecutor<TIn, TOut_7>,
        arm_8: MatchExecutor<TIn, TOut_8>,
        otherwise: DefaultExecutor<TIn, TOut_9>
    ): (
        val: TIn
    ) =>
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
        TOut_9,
        TOut_10
    >(
        arm_0: MatchExecutor<TIn, TOut_0>,
        arm_1: MatchExecutor<TIn, TOut_1>,
        arm_2: MatchExecutor<TIn, TOut_2>,
        arm_3: MatchExecutor<TIn, TOut_3>,
        arm_4: MatchExecutor<TIn, TOut_4>,
        arm_5: MatchExecutor<TIn, TOut_5>,
        arm_6: MatchExecutor<TIn, TOut_6>,
        arm_7: MatchExecutor<TIn, TOut_7>,
        arm_8: MatchExecutor<TIn, TOut_8>,
        arm_9: MatchExecutor<TIn, TOut_9>,
        otherwise: DefaultExecutor<TIn, TOut_10>
    ): (
        val: TIn
    ) =>
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
        | TOut_10;
}
