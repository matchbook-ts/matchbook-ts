/**
 * @description
 * A reference to a `new`-able constructor
 *
 * @example
 *   class MyClass {  }
 *   const myCtor: Ctor<MyClass> = MyClass;
 */
export interface Ctor<T> {
    new (...args: unknown[]): T;
}
