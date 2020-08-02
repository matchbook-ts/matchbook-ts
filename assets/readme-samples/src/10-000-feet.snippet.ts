let input: number;
let message = strike(
    input,
    match(10,          'ten'),
    match(n => n > 10, 'big number!'),
    otherwise('some other number')
);

assert(message, 'big number!');
