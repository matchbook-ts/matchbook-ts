import test from 'ava';
import {_, arm, pattern} from '../../../src/public';
import {Hobby, isServiceWorker, Person, ServiceWorker, Teacher} from './types';

/**
 * @file e2e test using `pattern`, all forms of matching, and `otherwise`
 */

const getBirthdayPresent: (p: Person) => string = pattern(
    arm((p: Person) => p.name.includes('joe'), 'mamma'),
    arm({favoriteHobby: Hobby.Woodworking}, 'table saw'),
    arm({favoriteHobby: Hobby.Metalworking}, 'tig welder'),
    arm(Teacher, 'apple'),
    arm(isServiceWorker, pattern<ServiceWorker, string>(arm({favoriteHobby: Hobby.Baking}, 'recipe book'), _('money'))),
    _('money')
);

test('e2e(person): `getBirthdayPresent` should return "mamma", when person named joe', t => {
    // arrange
    const joe: Person = {
        name: 'joe pesci',
        favoriteHobby: Hobby.Woodworking,
    };

    // act
    const present = getBirthdayPresent(joe);

    // assert
    t.is(present, 'mamma');
});

test('e2e(person): `getBirthdayPresent` should return "money", when person likes other hobby', t => {
    // arrange
    const bob: Person = {
        name: 'bob mamma',
        favoriteHobby: Hobby.Baking,
    };

    // act
    const present = getBirthdayPresent(bob);

    // assert
    t.is(present, 'money');
});
