/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import type {SinonSandbox} from 'sinon';
import {pattern} from '../../src';
import strikeModule = require('../../src/public/strike');
import {createSandbox} from 'sinon';
import {trackMatched} from '../../src/internal/match-tracking';

let sandbox: SinonSandbox;

test.beforeEach(() => {
    sandbox = createSandbox();
});

test.afterEach(() => {
    sandbox.restore();
});

test('`pattern` should return a delegate that wraps strike', t => {
    // arrange
    const input = 12;
    const matcherA = () => trackMatched(123);

    const strikeStub = sandbox.stub(strikeModule, 'strike');

    // act
    const pat = pattern(matcherA);
    pat(input);

    // assert
    t.true(strikeStub.calledOnceWith(input, matcherA));
});
