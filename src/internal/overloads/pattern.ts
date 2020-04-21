import {DefaultExecutor, MatchExecutor} from '../match-execution/types';
import {UnwrapExecutor} from '../match-execution/types/unwrap-executor';

/**
 * @description
 * Interface containing the function signatures for
 * pattern, without default cases.
 *
 * @internal
 */
export interface PatternNonExhaustiveSigs {
    <TIn, TOut>(arm0: MatchExecutor<TIn, TOut>): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        arm8: MatchExecutor<TIn, TOut>
    ): (val: TIn) => TIn | TOut;
    <TIn, TOut>(
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
    ): (val: TIn) => TIn | TOut;
}

/**
 * @description
 * Interface containing the function signatures for
 * strike, with default cases.
 *
 * @internal
 */
export interface PatternExhaustiveSigs {
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
        arm0: MatchExecutor<TIn, TOut>,
        arm1: MatchExecutor<TIn, TOut>,
        arm2: MatchExecutor<TIn, TOut>,
        arm3: MatchExecutor<TIn, TOut>,
        arm4: MatchExecutor<TIn, TOut>,
        arm5: MatchExecutor<TIn, TOut>,
        arm6: MatchExecutor<TIn, TOut>,
        arm7: MatchExecutor<TIn, TOut>,
        otherwise: DefaultExecutor<TIn> | UnwrapExecutor
    ): (val: TIn) => TOut;
    <TIn, TOut>(
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
    ): (val: TIn) => TOut;
    <TIn, TOut>(
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
    ): (val: TIn) => TOut;
}
