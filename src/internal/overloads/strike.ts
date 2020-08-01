import {
    AnyExecutor,
    DefaultExecutor,
    MatchExecutor,
} from '../match-execution/types';

/* eslint-disable no-undef */

type CmpOp = '||' | '&&' | '==';
type If<LHS, Cmp extends CmpOp, RHS> =
    Cmp extends '||'
    ? Or<LHS, RHS>
    : Cmp extends '&&'
        ? And<LHS, RHS>
        : Cmp extends '=='
            ? Eq<LHS, RHS>
            : unknown;
type Extends<A, B> = A extends B ? true : false;
type Eq<A, B> = And<Extends<A, B>, Extends<B, A>>;
type Or<A, B> = A extends true ? true : B extends true ? true : false;
type And<A, B> = A extends true ? B extends true ? true : false : false;

/*
    # Explanation of the "non-exhaustive" overloads

    # Generic Arguments
    <
        TIn,                <- The type of the input value we're matching against

        Arm0In extends TIn, <- The potentially narrowed type that the first match arm is testing the input against
        Arm0Out,            <- The output type of the first match arm

        Arm1In extends TIn, <- The potentially narrowed type that the second match arm is testing the input against
        Arm1Out,            <- The output type of the second match arm

        ArmIns =            <- The union of (one of) the Arm input types.
            | Arm0In        <| This will come into play in the return type.
            | Arm1In,       <|

        ArmOuts =            <- The union of (one of) the Arm output types.
            | Arm0Out        <| This will come into play in the return type.
            | Arm1Out,       <|
    >

    # Function Arguments
    (
        val: TIn,                             <- The input of the match structure
        arm0: MatchExecutor<Arm0In, Arm0Out>, <- Test if TIn is Arm0In, if so map val to Arm0Out
        arm1: MatchExecutor<Arm1In, Arm1Out>, <- Test if TIn is Arm1In, if so map val to Arm1Out
    ):

       # Return Type
       If<ArmIns, '==', TIn> extends true <- Test if the input types of the match arms
                                          <| is the same type as the input type.
                                          <| We're checking if the arms put together are
                                          <| guaranteed to exhaustively match against the input value

        ? ArmOuts <- If the match statement is exhaustive,
                  <| then we know we're returning one of the arm outputs.

        : TIn | ArmOuts <- If not exhaustive, the return type could be TIn,
                        <| or one of the arm outputs.
*/

/**
 * @description
 * Interface containing the function signatures for
 * strike, without default cases.
 *
 * @internal
 */
export interface NonExhaustiveStrikeSigs {
    <
     TIn,
     Arm0In extends TIn,
     Arm0Out,
    >(
        val: TIn,
        arm: MatchExecutor<Arm0In, Arm0Out>,
    ): TIn | Arm0Out;
    <
        TIn,
        Arm0In extends TIn,
        Arm0Out,
        Arm1In extends TIn,
        Arm1Out,
    >(
        val: TIn,
        arm0: MatchExecutor<Arm0In, Arm0Out>,
        arm1: MatchExecutor<Arm1In, Arm1Out>,
    ): | TIn
       | Arm0Out
       | Arm1Out;
    <
        TIn,
        Arm0In extends TIn,
        Arm0Out,
        Arm1In extends TIn,
        Arm1Out,
        Arm2In extends TIn,
        Arm2Out,
    >(
        val: TIn,
        arm0: MatchExecutor<Arm0In, Arm0Out>,
        arm1: MatchExecutor<Arm1In, Arm1Out>,
        arm2: MatchExecutor<Arm2In, Arm2Out>,
    ): | TIn
       | Arm0Out
       | Arm1Out
       | Arm2Out;
    <
        TIn,
        Arm0In extends TIn,
        Arm0Out,
        Arm1In extends TIn,
        Arm1Out,
        Arm2In extends TIn,
        Arm2Out,
        Arm3In extends TIn,
        Arm3Out,
    >(
        val: TIn,
        arm0: MatchExecutor<Arm0In, Arm0Out>,
        arm1: MatchExecutor<Arm1In, Arm1Out>,
        arm2: MatchExecutor<Arm2In, Arm2Out>,
        arm3: MatchExecutor<Arm3In, Arm3Out>,
    ): | TIn
       | Arm0Out
       | Arm1Out
       | Arm2Out
       | Arm3Out;
    <
        TIn,
        Arm0In extends TIn,
        Arm0Out,
        Arm1In extends TIn,
        Arm1Out,
        Arm2In extends TIn,
        Arm2Out,
        Arm3In extends TIn,
        Arm3Out,
        Arm4In extends TIn,
        Arm4Out,
    >(
        val: TIn,
        arm0: MatchExecutor<Arm0In, Arm0Out>,
        arm1: MatchExecutor<Arm1In, Arm1Out>,
        arm2: MatchExecutor<Arm2In, Arm2Out>,
        arm3: MatchExecutor<Arm3In, Arm3Out>,
        arm4: MatchExecutor<Arm4In, Arm4Out>,
    ): | TIn
       | Arm0Out
       | Arm1Out
       | Arm2Out
       | Arm3Out
       | Arm4Out;

    <
        TIn,
        Arm0In extends TIn,
        Arm0Out,
        Arm1In extends TIn,
        Arm1Out,
        Arm2In extends TIn,
        Arm2Out,
        Arm3In extends TIn,
        Arm3Out,
        Arm4In extends TIn,
        Arm4Out,
        Arm5In extends TIn,
        Arm5Out,
    >(
        val: TIn,
        arm0: MatchExecutor<Arm0In, Arm0Out>,
        arm1: MatchExecutor<Arm1In, Arm1Out>,
        arm2: MatchExecutor<Arm2In, Arm2Out>,
        arm3: MatchExecutor<Arm3In, Arm3Out>,
        arm4: MatchExecutor<Arm4In, Arm4Out>,
        arm5: MatchExecutor<Arm5In, Arm5Out>,
    ): | TIn
       | Arm0Out
       | Arm1Out
       | Arm2Out
       | Arm3Out
       | Arm4Out
       | Arm5Out;

    <
        TIn,
        Arm0In extends TIn,
        Arm0Out,
        Arm1In extends TIn,
        Arm1Out,
        Arm2In extends TIn,
        Arm2Out,
        Arm3In extends TIn,
        Arm3Out,
        Arm4In extends TIn,
        Arm4Out,
        Arm5In extends TIn,
        Arm5Out,
        Arm6In extends TIn,
        Arm6Out,
    >(
        val: TIn,
        arm0: MatchExecutor<Arm0In, Arm0Out>,
        arm1: MatchExecutor<Arm1In, Arm1Out>,
        arm2: MatchExecutor<Arm2In, Arm2Out>,
        arm3: MatchExecutor<Arm3In, Arm3Out>,
        arm4: MatchExecutor<Arm4In, Arm4Out>,
        arm5: MatchExecutor<Arm5In, Arm5Out>,
        arm6: MatchExecutor<Arm6In, Arm6Out>,
    ): | TIn
       | Arm0Out
       | Arm1Out
       | Arm2Out
       | Arm3Out
       | Arm4Out
       | Arm5Out
       | Arm6Out;

    <
        TIn,
        Arm0In extends TIn,
        Arm0Out,
        Arm1In extends TIn,
        Arm1Out,
        Arm2In extends TIn,
        Arm2Out,
        Arm3In extends TIn,
        Arm3Out,
        Arm4In extends TIn,
        Arm4Out,
        Arm5In extends TIn,
        Arm5Out,
        Arm6In extends TIn,
        Arm6Out,
        Arm7In extends TIn,
        Arm7Out,
    >(
        val: TIn,
        arm0: MatchExecutor<Arm0In, Arm0Out>,
        arm1: MatchExecutor<Arm1In, Arm1Out>,
        arm2: MatchExecutor<Arm2In, Arm2Out>,
        arm3: MatchExecutor<Arm3In, Arm3Out>,
        arm4: MatchExecutor<Arm4In, Arm4Out>,
        arm5: MatchExecutor<Arm5In, Arm5Out>,
        arm6: MatchExecutor<Arm6In, Arm6Out>,
        arm7: MatchExecutor<Arm7In, Arm7Out>,
    ): | TIn
       | Arm0Out
       | Arm1Out
       | Arm2Out
       | Arm3Out
       | Arm4Out
       | Arm5Out
       | Arm6Out
       | Arm7Out;

    <
        TIn,
        Arm0In extends TIn,
        Arm0Out,
        Arm1In extends TIn,
        Arm1Out,
        Arm2In extends TIn,
        Arm2Out,
        Arm3In extends TIn,
        Arm3Out,
        Arm4In extends TIn,
        Arm4Out,
        Arm5In extends TIn,
        Arm5Out,
        Arm6In extends TIn,
        Arm6Out,
        Arm7In extends TIn,
        Arm7Out,
        Arm8In extends TIn,
        Arm8Out,
        ArmOuts =
        | Arm0Out
        | Arm1Out
        | Arm2Out
        | Arm3Out
        | Arm4Out
        | Arm5Out
        | Arm6Out
        | Arm7Out
        | Arm8Out
        ,
    >(
        val: TIn,
        arm0: MatchExecutor<Arm0In, Arm0Out>,
        arm1: MatchExecutor<Arm1In, Arm1Out>,
        arm2: MatchExecutor<Arm2In, Arm2Out>,
        arm3: MatchExecutor<Arm3In, Arm3Out>,
        arm4: MatchExecutor<Arm4In, Arm4Out>,
        arm5: MatchExecutor<Arm5In, Arm5Out>,
        arm6: MatchExecutor<Arm6In, Arm6Out>,
        arm7: MatchExecutor<Arm7In, Arm7Out>,
        arm8: MatchExecutor<Arm8In, Arm8Out>,
    ): | TIn
       | Arm0Out
       | Arm1Out
       | Arm2Out
       | Arm3Out
       | Arm4Out
       | Arm5Out
       | Arm6Out
       | Arm7Out
       | Arm8Out;

    <
        TIn,
        Arm0In extends TIn,
        Arm0Out,
        Arm1In extends TIn,
        Arm1Out,
        Arm2In extends TIn,
        Arm2Out,
        Arm3In extends TIn,
        Arm3Out,
        Arm4In extends TIn,
        Arm4Out,
        Arm5In extends TIn,
        Arm5Out,
        Arm6In extends TIn,
        Arm6Out,
        Arm7In extends TIn,
        Arm7Out,
        Arm8In extends TIn,
        Arm8Out,
        Arm9In extends TIn,
        Arm9Out,
    >(
        val: TIn,
        arm0: MatchExecutor<Arm0In, Arm0Out>,
        arm1: MatchExecutor<Arm1In, Arm1Out>,
        arm2: MatchExecutor<Arm2In, Arm2Out>,
        arm3: MatchExecutor<Arm3In, Arm3Out>,
        arm4: MatchExecutor<Arm4In, Arm4Out>,
        arm5: MatchExecutor<Arm5In, Arm5Out>,
        arm6: MatchExecutor<Arm6In, Arm6Out>,
        arm7: MatchExecutor<Arm7In, Arm7Out>,
        arm8: MatchExecutor<Arm8In, Arm8Out>,
        arm9: MatchExecutor<Arm9In, Arm9Out>,
    ): | TIn
       | Arm0Out
       | Arm1Out
       | Arm2Out
       | Arm3Out
       | Arm4Out
       | Arm5Out
       | Arm6Out
       | Arm7Out
       | Arm8Out
       | Arm9Out
}

/**
 * @description
 * Interface containing the function signatures for
 * strike, with default cases.
 *
 * @internal
 */
export interface ExhaustiveStrikeSigs {
    <TIn, TOut_0, TOut_1>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        otherwise: DefaultExecutor<TIn, TOut_1>
    ): TOut_0 | TOut_1;
    <TIn, TOut_0, TOut_1, TOut_2>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        otherwise: DefaultExecutor<TIn, TOut_2>
    ): TOut_0 | TOut_1 | TOut_2;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        otherwise: DefaultExecutor<TIn, TOut_3>
    ): TOut_0 | TOut_1 | TOut_2 | TOut_3;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        otherwise: DefaultExecutor<TIn, TOut_4>
    ): TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        otherwise: DefaultExecutor<TIn, TOut_5>
    ): TOut_0 | TOut_1 | TOut_2 | TOut_3 | TOut_4 | TOut_5;
    <TIn, TOut_0, TOut_1, TOut_2, TOut_3, TOut_4, TOut_5, TOut_6>(
        val: TIn,
        arm_0: MatchExecutor<typeof val, TOut_0>,
        arm_1: MatchExecutor<typeof val, TOut_1>,
        arm_2: MatchExecutor<typeof val, TOut_2>,
        arm_3: MatchExecutor<typeof val, TOut_3>,
        arm_4: MatchExecutor<typeof val, TOut_4>,
        arm_5: MatchExecutor<typeof val, TOut_5>,
        otherwise: DefaultExecutor<TIn, TOut_6>
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
        otherwise: DefaultExecutor<TIn, TOut_7>
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
        otherwise: DefaultExecutor<TIn, TOut_8>
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
        otherwise: DefaultExecutor<TIn, TOut_9>
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
        otherwise: DefaultExecutor<TIn, TOut_10>
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
        | TOut_9
        | TOut_10;
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
