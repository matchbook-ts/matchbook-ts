/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {isCtorInvokedWithoutNewError, isFn} from '../../../src/internal/common';
import {fake} from 'sinon';

test('`isFn` should return true, when input is a function', t => {
    // arrange
    const input = () => {};

    // act
    const actual = isFn(input);

    // assert
    t.true(actual);
});

test('`isFn` should return false, when input is not a function', t => {
    // arrange
    const input = 12;

    // act
    const actual = isFn(input);

    // assert
    t.false(actual);
});

test('`isFn` should never invoke input, when input is a function', t => {
    // arrange
    const input = fake();

    // act
    isFn(input);

    // assert
    t.is(input.callCount, 0);
});

test('`isCtorInvokedWithoutNewError` should return true, when error is from invoking ctor w/o new', t => {
    // arrange
    class E {}

    let err: TypeError | undefined = undefined;
    try {
        (E as Function)();
    } catch (e) {
        err = e;
    }

    // act
    const actual = isCtorInvokedWithoutNewError(err);

    // assert
    t.true(actual);
});

test('`isCtorInvokedWithoutNewError` should return false, when error is any other TypeError', t => {
    // arrange
    const err: TypeError = new TypeError('fart');

    // act
    const actual = isCtorInvokedWithoutNewError(err);

    // assert
    t.false(actual);
});

test('`isCtorInvokedWithoutNewError` should return false, when error is any other Error', t => {
    // arrange
    const err: Error = new Error('fart');

    // act
    const actual = isCtorInvokedWithoutNewError(err);

    // assert
    t.false(actual);
});
