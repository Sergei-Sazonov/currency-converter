import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { CURRENCIES, CurrenciesSuccessAction, CurrenciesFailedAction  } from "../actions";
import { CurrencyProvider } from "../../services/currency.provider";

@Injectable()
export class CurrencyEffect {
    constructor(private actions$: Actions, private currencyProvider: CurrencyProvider) {
    }

    getCurrencies$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CURRENCIES),
            switchMap(() => this.currencyProvider.getAll().pipe(
                switchMap(currencies => of(new CurrenciesSuccessAction(currencies))),
                catchError(error => of(new CurrenciesFailedAction(error)))
            )),
        );
    });
}
