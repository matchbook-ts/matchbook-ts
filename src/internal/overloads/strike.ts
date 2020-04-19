import {AnyExecutor, DefaultExecutor, MatchExecutor} from '../match-execution/types';
import {UnwrapExecutor} from '../match-execution/types/unwrap-executor';

/**
 * @description
 * Interface containing the function signatures for
 * strike, without default cases.
 *
 * @internal
 */
export interface NonExhaustiveStrikeSigs {
    <TIn, TOut>(val: TIn, arm0: MatchExecutor<TIn, TOut>): TIn | TOut;
    <TIn, TOut>(val: TIn, arm0: MatchExecutor<TIn, TOut>, arm1: MatchExecutor<TIn, TOut>): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        arm8: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        arm8: MatchExecutor<TIn, TOut>,
        arm9: MatchExecutor<TIn, TOut>
    ): TIn | TOut;
}

/**
 * @description
 * Interface containing the function signatures for
 * strike, with default cases.
 *
 * @internal
 */
export interface ExhaustiveStrikeSigs {
    <TIn, TOut>(val: TIn, arm0: MatchExecutor<TIn, TOut>, otherwise: DefaultExecutor<TIn> | UnwrapExecutor): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        arm8: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
    <TIn, TOut>(
        val: TIn,
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        arm8: MatchExecutor<TIn, TOut>,
        arm9: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): TOut;
}

/**
 * @description
 * Type alias for a rest argument implementation of Strike
 *
 * @internal */
export type StrikeRest = <T, R>(v: T, ...mat: Array<AnyExecutor<T, R>>) => T | R;
