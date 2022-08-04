import { Action } from '@ngrx/store';
import update from 'immutability-helper';
import { CURRENCIES, CURRENCIES_SUCCESS, CURRENCIES_FAIL } from '../actions';

export const defaultState: any = {
    loading: false,
    currencies: [],
    error: null,
};

export function currencyAllReducer(state: any = defaultState, action: Action) {
    switch (action.type) {
        case CURRENCIES: {
            return update(state, {
                loading: { $set: true },
                error: { $set: null }
            });
        }

        case CURRENCIES_SUCCESS: {
          return update(state, {
                currencies: { $set: (action as any).payload },
                loading: { $set: false },
                error: { $set: null }
            });
        }

        case CURRENCIES_FAIL: {
            return update(state, {
                currencies: { $set: [] },
                loading: { $set: false },
                error: { $set: (action as any).payload }
            });
        }

        default:
            return state;
    }
}
