import { Injectable } from "@angular/core";
import { Currency } from "../core/types/currency";

@Injectable()
export class CurrencyService {
    calculateValue(value: number, currencies: Currency.ICurrency[], from: Currency.ECurrency, to: Currency.ECurrency) {
        if (!value || value === null) return;

        const operand = this.variationOperand(from, to);

        const buy = this.calcBuy(currencies, from, to);

        if (!operand) return value;

        const result = operand === 1 ? value / buy : value * buy;

        const fixedResult = result.toFixed(4);

        return fixedResult;
    }

    calcBuy(currencies: Currency.ICurrency[], from: Currency.ECurrency, to: Currency.ECurrency) {
        const toBuy = currencies.find(({ ccy }) => ccy === to)?.buy || 1;

        const fromBuy = currencies.find(({ ccy }) => ccy === from)?.buy || 1;

        if (from === 'USD' && to === 'EUR') {
            return toBuy / fromBuy;
        }

        if (to === 'UAH') {
            return fromBuy;
        }

        if (from === 'EUR' && to === 'USD') {
            return toBuy / fromBuy;
        }

        return toBuy;
    }

    variationOperand(from: Currency.ECurrency, to: Currency.ECurrency) {
        if (from === to) return 0;

        if (from === 'USD' && to === 'EUR' || from === 'EUR' && to === 'USD') {
            return 1;
        }

        return from === 'UAH' ? 1 : -1;
    }
}
