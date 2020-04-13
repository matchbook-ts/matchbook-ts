/**
 * @description type guard, returning whether an input is a Function
 * @param val
 * @access package
 */
export function isFn(val: unknown): val is Function {
    return typeof val === 'function';
}

/**
 * @description
 * type guard, returning whether an input is a TypeError thrown as a result
 * of invoking a constructor like a function
 *
 * @param error
 * @access package
 */
export function isCtorInvokedWithoutNewError(error: unknown): boolean {
    if (error instanceof TypeError) {
        return error.message.includes("cannot be invoked without 'new'");
    }

    return false;
}
