import {Problem} from '../../common';
import {DefaultExecutor} from './default-executor';
import {MatchExecutor} from './match-executor';
import {UnwrapExecutor} from './unwrap-executor';

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @description
 * Internal helper type that infers the TOut type of a collection
 * of MatchExecutors
 *
 * @access package
 */
export type InferReturnTypeOfExecutors<TExecs> = TExecs extends Array<
    MatchExecutor<infer TIn, infer TOut>
>
    ? TIn | TOut
    : TExecs extends Array<
          | UnwrapExecutor
          | DefaultExecutor<any, infer TOut>
          | MatchExecutor<any, infer TOut>
      >
    ? TOut
    : Problem<TExecs, 'Cannot infer type of Matchers from arguments'>;
