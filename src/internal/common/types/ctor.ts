/**
 * @description
 * A reference to a `new`-able constructor
 *
 * @access package
 */
export interface Ctor<T> {
    new (...args: unknown[]): T;
}
