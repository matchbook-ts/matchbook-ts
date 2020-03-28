/* istanbul ignore file */

import { match, pattern } from '../../src';

const A = 'A', B = 'B', C = 'C';

// it's as easy as
pattern(
  match(A, 1),
  match(B, 2),
  match(C, 3),
);
