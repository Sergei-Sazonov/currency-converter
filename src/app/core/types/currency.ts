export namespace Currency {
    export interface  ICurrency {
        ccy: ECurrency
        base_ccy:  ECurrency
        buy:  number
        sale:  number
    } 

    export enum ECurrency {
        usd = "USD",
        uah = "UAH",
        eur = "EUR",
        btc = "BTC",
    }
}
