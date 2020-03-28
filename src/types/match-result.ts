import { anything } from './alias';
import { DefaultMatcher, Matcher } from './matcher';
import { Problem } from './problem';

/**
 * @description
 * Internal helper type that calculates
 * the return type of `pattern` and `strike`
 *
 * @access package
 */
export type MatchResult<TMatchers> = TMatchers extends Array<
    Matcher<infer TIn, infer TOut>
>
    ? TIn | TOut
    : TMatchers extends Array<
          DefaultMatcher<anything, infer TOut> | Matcher<anything, infer TOut>
      >
    ? TOut
    : Problem<TMatchers, 'Cannot infer type of Matchers from arguments'>;
