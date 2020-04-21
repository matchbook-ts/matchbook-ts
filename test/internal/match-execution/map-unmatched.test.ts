/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {Fn} from '../../../src/internal/common/types';
import {mapUnmatched} from '../../../src/internal/match-execution';
import {trackUnmatched} from '../../../src/internal/match-tracking';

test('`mapUnmatched` should return value, when mapOrVal is value', t => {
    // arrange
    const input = trackUnmatched(32);
    const expected = 42;

    // act
    const actual = mapUnmatched(input, expected).val;

    // assert
    t.is(actual, expected);
});

test('`mapUnmatched` should return output of mapper, when mapOrVal is fn', t => {
    // arrange
    const input = trackUnmatched(32);
    const expected: Fn<(_: number) => number> = n => {
        if (typeof n !== 'number')
            t.fail(`Delegate input "${JSON.stringify(n)}" is not a number.`);
        return n + 10;
    };

    // act
    const actual = mapUnmatched(input, expected).val;

    // assert
    t.is(actual, 32 + 10);
});
