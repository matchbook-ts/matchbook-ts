// for a value `val`,
let output = strike(val,
    match(/* if it matches this */, /* then do this */),
    match(/* else if it matches this */, /* then do this */),
    otherwise(/* else do this */),
);

// for a number `num`,
let message = strike(num,
    // if it equals 10, return 'ten'
    match(10, 'ten'),
    // else if it is greater than 10, return 'big'
    match(n => n > 10, 'big'),
    // otherwise return 'some other number'
    otherwise('some other number')
);