/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {match, rest, strike} from '../../../src';
import {Coin, CoinCondition, CoinRarity, CoinType} from './types';

/**
 * @file e2e test using `strike`, constant value matching, and `otherwise`
 */

function appraiseCoin(coin: Coin) {
    const conditionFactor = strike(coin.condish, match(CoinCondition.Mint, 5), rest(1));
    const yearFactor = 2020 - coin.year;
    const rarityFactor = strike(
        coin,
        match({rarity: CoinRarity.Rare}, 25),
        match({rarity: CoinRarity.Uncommon}, 1),
        match({rarity: CoinRarity.Legendary}, 50),
        rest(0)
    );

    const baseValue = strike(
        coin,
        match({type: CoinType.Dime}, 0.1),
        match({type: CoinType.Penny}, 0.01),
        match({type: CoinType.Nickel}, 0.05),
        match({type: CoinType.Quarter}, 0.25),
        rest(0)
    );

    return baseValue * rarityFactor + baseValue * yearFactor + baseValue * conditionFactor;
}

test('e2e(coins): appraiseCoin should properly appraise old ass quarter', t => {
    // arrange
    const oldAssQuarter: Coin = {
        year: 1764,
        type: CoinType.Quarter,
        condish: CoinCondition.Mint,
        rarity: CoinRarity.Legendary,
    };

    // act
    const value = appraiseCoin(oldAssQuarter);

    // assert
    t.is(value, 77.75);
});

test('e2e(coins): appraiseCoin should properly appraise new ass penny', t => {
    // arrange
    const newAssPenny: Coin = {
        year: 2020,
        type: CoinType.Penny,
        condish: CoinCondition.Good,
        rarity: CoinRarity.Common,
    };

    // act
    const value = appraiseCoin(newAssPenny);

    // assert
    t.is(value, 0.01);
});
