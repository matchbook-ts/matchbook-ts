import {
    match,
    strike,
    otherwise
} from '@matchbook/ts';

class Human { ... }
class Teacher extends Human { ... }
class Spiderman extends Human { ... }
class Formula1Driver extends Human { ... }
class ConstructionWorker extends Human { ... }

const catchphrase = (h: Human) => strike(
    h,
    match(Spiderman, 'thwipp!'),
    match(Formula1Driver, 'vrooommmm'),
    match(ConstructionWorker, '*whistle*'),
    otherwise('humany things'),
);

assertEq(
    catchphrase(new Spiderman()),
    'thwipp!'
);

assertEq(
    catchphrase(new Teacher()),
    'humany things'
);
