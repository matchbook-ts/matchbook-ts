/**
 * @description
 * A wrapper type that helps improve the
 * scannability of arrow function type literals
 *
 * @access package
 *
 * @example
 *   const withoutFn: (coin: Coin) => number = pattern(
 *     match(Coin.Quarter, 0.25),
 *     otherwise(0);
 *   );
 *
 *   const withFn: Fn<(coin: Coin) => number> = pattern(
 *     match(Coin.Quarter, 0.25),
 *     otherwise(0);
 *   );
 */
export type Fn<TFn extends (args: unknown[]) => unknown> = TFn;
