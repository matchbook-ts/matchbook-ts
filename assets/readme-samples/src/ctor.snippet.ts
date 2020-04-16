import { match, unwrap } from '@matchbook/ts';

class Human { ... }
class Teacher extends Human { ... }
class Spiderman extends Human { ... }
class Formula1Driver extends Human { ... }
class ConstructionWorker extends Human { ... }

const getSaying: Fn<(h: Human) => string> = pattern(
    match(Spiderman,          'thwipp!'),
    match(Formula1Driver,     'vrooommmm'),
    match(ConstructionWorker, '*whistle*'),
    unwrap, // throw if `h` matched none of the above
);

assert(getSaying(new Spiderman()) === 'thwipp!');

// this throws an `UnwrapError`!
getSaying(new Teacher());