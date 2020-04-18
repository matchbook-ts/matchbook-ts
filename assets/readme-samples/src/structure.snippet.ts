import { match, pattern, otherwise } from '@matchbook/ts';

type Person = {name: string, hobby: string};

const steve: Person = {
    name: 'Steve',
    hobby: 'Woodworking',
};

const john: Person = {
    name: 'John',
    hobby: 'Metalworking',
};

const getBirthdayGift: (c: Person) => string = pattern(
    match({hobby: 'Woodworking'}, 'Table saw'),
    match({hobby: 'Metalworking'}, 'TIG welder'),
    otherwise('Money'),
);

assert(getBirthdayGift(steve) === 'Table saw');
assert(getBirthdayGift(john) === 'TIG welder');