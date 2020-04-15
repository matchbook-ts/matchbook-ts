/**
 * @description
 * A reference to a `new`-able constructor
 *
 * @internal
 */
export interface Ctor<T> {
    new (...args: unknown[]): T;
}
