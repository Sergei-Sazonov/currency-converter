import { ActionReducerMap } from '@ngrx/store';
import { currencyAllReducer } from './currency.reducer';

export interface AppState {
  currency: any;
}

export const reducers: ActionReducerMap<AppState> = {
  currency: currencyAllReducer
};
