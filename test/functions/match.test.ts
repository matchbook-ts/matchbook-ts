/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {SinonSandbox, createSandbox, SinonStub} from 'sinon';
import {match} from '../../src';
import {Fn} from '../../src/internal/common/types';
import {
    isMatched,
    Matched,
    trackMatched,
    trackUnmatched,
} from '../../src/internal/match-tracking';
import testerModule = require('../../src/internal/match-testing');

interface TestContext {
    sandbox: SinonSandbox;
    valTesterStub: SinonStub;
    ctorTesterStub: SinonStub;
    fnTesterStub: SinonStub;
}

test.before(t => {
    const sandbox = createSandbox();

    t.context = {
        sandbox,
        valTesterStub: sandbox.stub(testerModule, 'matchValueTester'),
        ctorTesterStub: sandbox.stub(testerModule, 'matchCtorTester'),
        fnTesterStub: sandbox.stub(testerModule, 'matchFnTester'),
    };
});
test.after(t => (t.context as TestContext).sandbox?.restore());

test.beforeEach(t => {
    (t.context as TestContext).sandbox.resetHistory();
});

test.serial('`match` should defer to testers', t => {
    // arrange
    const ctx = t.context as TestContext;
    const input = trackUnmatched(12);

    ctx.valTesterStub.returns(input);
    ctx.ctorTesterStub.returns(input);
    ctx.fnTesterStub.returns(trackMatched(true));

    // act
    const actual = match(123, true)(input);

    // assert
    t.true(isMatched(actual));
    t.true(actual.val);
    t.is(ctx.valTesterStub.callCount, 1);
    t.is(ctx.ctorTesterStub.callCount, 1);
    t.is(ctx.fnTesterStub.callCount, 1);
});

test.serial('`match` should return input, no testers match', t => {
    // arrange
    const ctx = t.context as TestContext;
    const input = trackUnmatched(123);

    ctx.valTesterStub.returns(input);
    ctx.ctorTesterStub.returns(input);
    ctx.fnTesterStub.returns(input);

    // act
    const actual = match(123, () =>
        t.fail('map delegate was called when no testers matched')
    )(input);

    // assert
    t.is(actual, input);
    t.is(ctx.valTesterStub.callCount, 1);
    t.is(ctx.ctorTesterStub.callCount, 1);
    t.is(ctx.fnTesterStub.callCount, 1);
});

test.serial(
    '`match` should not invoke testers, when input already matched',
    t => {
        // arrange
        const ctx = t.context as TestContext;
        const input = trackMatched(undefined as void);

        const failFake: Fn<(
            msg: string
        ) => () => Matched<unknown>> = msg => () =>
            (t.fail(msg) as unknown) as Matched<unknown>;

        ctx.valTesterStub.callsFake(failFake('value tester was called'));
        ctx.ctorTesterStub.callsFake(failFake('ctor tester was called'));
        ctx.fnTesterStub.callsFake(failFake('fn tester was called'));

        // act
        const actual = match(123, () =>
            t.fail('map delegate was called when no testers matched')
        )(input);

        // assert
        t.is(actual, input);
        t.is(ctx.ctorTesterStub.callCount, 0);
        t.is(ctx.valTesterStub.callCount, 0);
        t.is(ctx.fnTesterStub.callCount, 0);
    }
);
