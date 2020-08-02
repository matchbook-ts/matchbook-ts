import { match, otherwise } from '@matchbook/ts';

class Human { ... }
class Teacher extends Human { ... }
class Spiderman extends Human { ... }
class Formula1Driver extends Human { ... }
class ConstructionWorker extends Human { ... }

const getSaying: (h: Human) => string = pattern(
    match(Spiderman,          'thwipp!'),
    match(Formula1Driver,     'vrooommmm'),
    match(ConstructionWorker, '*whistle*'),
    otherwise('humany things'),
);

assert(getSaying(new Spiderman()) === 'thwipp!');

assert(
    getSaying(new Teacher()) === 'humany things'
);
