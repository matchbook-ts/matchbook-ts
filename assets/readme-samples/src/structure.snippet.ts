import {
    match,
    strike,
    otherwise
} from '@matchbook/ts';

type Person = { name: string, hobby: string, };

const steve: Person = {
    name: 'Steve',
    hobby: 'woodworking',
};

const john: Person = {
    name: 'John',
    hobby: 'welding',
};

const getBirthdayGift =
    (p: Person): string => strike(
        p,
        match(
            {hobby: 'woodworking'},
            'Table saw'
        ),
        match(
            {hobby: 'welding'},
            'TIG welder'
        ),
        otherwise('Money'),
    );

assert(getBirthdayGift(steve) === 'Table saw');
assert(getBirthdayGift(john) === 'TIG welder');
