import { match, otherwise, pattern } from '@matchbook/ts';

class Human { ... }
class Teacher extends Human { ... }
class Spiderman extends Human { ... }
class Formula1Driver extends Human { ... }
class ConstructionWorker extends Human { ... }

const getSaying: Fn<(h: Human) => string> = pattern(
    match(Spiderman,          'thwipp!'),
    match(Formula1Driver,     'vrooommmm'),
    match(ConstructionWorker, '*whistle*'),
    otherwise('blah blah blah'),
);

assert(getSaying(new Teacher()) === 'blah blah blah');
assert(getSaying(new Spiderman()) === 'thwipp!');