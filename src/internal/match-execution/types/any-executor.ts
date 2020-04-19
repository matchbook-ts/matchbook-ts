import {DefaultExecutor} from './default-executor';
import {MatchExecutor} from './match-executor';
import {UnwrapExecutor} from './unwrap-executor';

export type AnyExecutor<TIn, TOut> = MatchExecutor<TIn, TOut> | DefaultExecutor<TIn, TOut> | UnwrapExecutor;
