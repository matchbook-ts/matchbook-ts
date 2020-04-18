// pseudo-code example:
let output = strike(
    val, // for a value `val`,
    match(/* if it matches `x` */, /* then do `a` */),
    match(/* else if it matches `y` */, /* then do `b` */),
    /* ...any number of other `match` arms */
    otherwise(/* do this */),
);

// simple example:
let message = strike(23,
    match(10, 'ten'),
    match(n => n > 10, 'big number!'),
    otherwise('some other number')
);

assert(message, 'big number!');