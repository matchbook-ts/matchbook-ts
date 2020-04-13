/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {fake} from 'sinon';
import {otherwise} from '../../src';
import {Fn} from '../../src/internal/common/types';
import {trackMatched, trackUnmatched} from '../../src/internal/match-tracking';

test('`otherwise` should match using map fn, when input unmatched', t => {
    // arrange
    const input = trackUnmatched('input');
    const mapper: Fn<(_: string) => string> = str => str + '_fart';

    // act
    const actual = otherwise(mapper)(input);

    // assert
    t.is(actual.val, 'input_fart');
});

test('`otherwise` should match using default value, when input unmatched', t => {
    // arrange
    const input = trackUnmatched('input');
    const expected = 'expected';

    // act
    const actual = otherwise(expected)(input);

    // assert
    t.is(actual.val, expected);
});

test('`otherwise` should return input, when input already matched', t => {
    // arrange
    const input = trackMatched('input');
    const mapper: Fn<(_: string) => string> = str => str + '_fart';

    // act
    const actual = otherwise(mapper)(input);

    // assert
    t.is(actual, input);
});

test('`otherwise` should not invoke mapper, when input already matched', t => {
    // arrange
    const input = trackMatched('input');
    const mapper = fake();

    // act
    otherwise(mapper)(input);

    // assert
    t.is(mapper.callCount, 0);
});
