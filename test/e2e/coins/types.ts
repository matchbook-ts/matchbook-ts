export enum CoinType {
    Quarter,
    Dime,
    Nickel,
    Penny,
}

export enum CoinRarity {
    Legendary,
    Rare,
    Uncommon,
    Common,
}

export enum CoinCondition {
    Mint,
    Good,
    Acceptable,
    Poor,
}

export interface Coin {
    condish: CoinCondition;
    rarity: CoinRarity;
    type: CoinType;
    year: number;
}

export class CoinBook {
    public readonly coins: Coin[] = [];
}
