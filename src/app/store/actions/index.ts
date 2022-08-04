import { Action } from "@ngrx/store";
import { Currency } from "src/app/core/types/currency";

export const CURRENCIES = '[Currency] Get Currencies';
export const CURRENCIES_SUCCESS = '[Currency] Get Currencies Success';
export const CURRENCIES_FAIL = '[Currency] Get Currencies Fail';

export class CurrenciesAction implements Action {
    readonly type = CURRENCIES;
}

export class CurrenciesSuccessAction implements Action {
    readonly type = CURRENCIES_SUCCESS;
    constructor(public payload: Currency.ICurrency[]) {}
}

export class CurrenciesFailedAction implements Action {
    readonly type = CURRENCIES_FAIL;
    constructor(public payload: Error) {}
}