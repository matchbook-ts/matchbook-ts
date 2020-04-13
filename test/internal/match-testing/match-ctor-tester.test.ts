/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {fake} from 'sinon';
import {Fn} from '../../../src/internal/common/types';
import {matchCtorTester} from '../../../src/internal/match-testing';
import {
    trackMatched,
    trackUnmatched,
} from '../../../src/internal/match-tracking';

class CoinBook {}

test('`matchCtorTester` should match, when input is an instance of a constructor', t => {
    // arrange
    const input = trackUnmatched(new CoinBook());
    const expected = 'was val';

    // act
    const actual = matchCtorTester(input, CoinBook, expected);

    // assert
    t.is(actual.val, expected);
});
test('`matchCtorTester` should not match, when input is not an instance of a constructor', t => {
    // arrange
    const input = trackUnmatched({coins: []});
    const transform = () =>
        t.fail('match invoked transform function when value was not a match');

    // act
    const actual = matchCtorTester(input, CoinBook, transform);

    // assert
    t.is(actual, input);
});

test('`matchCtorTester` should never invoke constructor, when input unmatched', t => {
    // arrange
    const input = trackUnmatched(new CoinBook());

    let constructCount = 0;
    class CoinBookFake {
        constructor() {
            constructCount++;
        }
    }

    // act
    matchCtorTester(input, CoinBookFake, () =>
        t.fail('transformer was invoked')
    );

    // assert
    t.is(constructCount, 0);
});
test('`matchCtorTester` should never invoke constructor, when input matched', t => {
    // arrange
    const input = trackMatched('fart');
    const del = fake(() => true);
    const onMatch: Fn<() => string> = () =>
        (t.fail(
            'match invoked transform function when value was not a match'
        ) as unknown) as string;

    // act
    matchCtorTester(input, del, onMatch);

    // assert
    t.is(del.callCount, 0);
});
