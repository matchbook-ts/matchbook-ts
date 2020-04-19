/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @description
 * A reference to a `new`-able constructor
 *
 * @internal
 */
export interface Ctor<T> {
    new (...args: any[]): T;
}
