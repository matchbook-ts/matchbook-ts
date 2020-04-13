import {Problem} from '../../common/types';
import {DefaultExecutor} from './default-executor';
import {MatchExecutor} from './match-executor';

/**
 * @description
 * Infer the TIn generic type argument of a collection of Executors
 *
 * @access package
 */
export type InferInputTypeOfExecutors<
    TExecs extends unknown[]
> = TExecs extends Array<MatchExecutor<infer TIn> | DefaultExecutor<infer TIn>>
    ? TIn
    : Problem<TExecs, 'Matchers Invalid'>;
