/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {_, arm, book} from '../../../src';
import {Fn} from '../../../src/internal/common/types';
import {Cat, Dog, Entity, Spiderman, Toad} from './types';

// e2e test using `pattern`, ctor matching, and `otherwise`
const getCatchphrase: Fn<(_: Entity) => string> = book(
    arm(Cat, 'meow'),
    arm(Dog, 'woof'),
    arm(Spiderman, 'thwipp!'),
    _('...')
);

test('e2e(catchphrase): `getCatchphrase` should return "woof" for dog', t => {
    // arrange
    // act
    const actual = getCatchphrase(new Dog());

    // assert
    t.is(actual, 'woof');
});

test('e2e(catchphrase): `getCatchphrase` should return "meow" for cat', t => {
    // arrange
    // act
    const actual = getCatchphrase(new Cat());

    // assert
    t.is(actual, 'meow');
});

test('e2e(catchphrase): `getCatchphrase` should return "..." for anything else', t => {
    // arrange
    // act
    const actual = getCatchphrase(new Toad());

    // assert
    t.is(actual, '...');
});
