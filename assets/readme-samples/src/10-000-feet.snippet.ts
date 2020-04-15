// for a value `val`,
let output = strike(val,
    match(/* if it matches `x`      */, /* then do `a` */),
    match(/* else if it matches `y` */, /* then do `b` */),
    // ... any number of other `match` arms
    otherwise(/* else do this */),
);

// e.g. `message` will be set to 'big number!'
let message = strike(23,
    match(10, 'ten'),
    match(n => n > 10, 'big number!'),
    otherwise('some other number')
);