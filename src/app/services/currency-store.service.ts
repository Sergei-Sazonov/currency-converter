import { Injectable } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { CurrenciesAction } from '../store/actions';
import { getCurrencies } from "../store/selectors/currency.selector";

@Injectable()
export class CurrencyStoreService {
    public currencies$ = this.store.pipe(select(getCurrencies));
    constructor(private store: Store<any>) {
    }

    dispatchGet() {
        this.store.dispatch(new CurrenciesAction());
    }
}
