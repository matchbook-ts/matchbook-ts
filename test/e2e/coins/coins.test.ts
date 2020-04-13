/* eslint-disable node/no-unpublished-import */
import test from 'ava';
import {m, rest, strike} from '../../../src';
import {Coin, CoinCondition, CoinRarity, CoinType} from './types';

// e2e test using `strike`, constant value matching, and `otherwise`

function appraiseCoin(coin: Coin) {
    const conditionFactor = strike(
        coin.condish,
        m(CoinCondition.Mint, 5),
        rest(1)
    );
    const yearFactor = 2020 - coin.year;
    const rarityFactor = strike(
        coin.rarity,
        m(CoinRarity.Legendary, 50),
        m(CoinRarity.Rare, 25),
        m(CoinRarity.Uncommon, 1),
        rest(0)
    );

    const baseValue = strike(
        coin.type,
        m(CoinType.Quarter, 0.25),
        m(CoinType.Dime, 0.1),
        m(CoinType.Nickel, 0.05),
        m(CoinType.Penny, 0.01)
    );

    return (
        baseValue * rarityFactor +
        baseValue * yearFactor +
        baseValue * conditionFactor
    );
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
