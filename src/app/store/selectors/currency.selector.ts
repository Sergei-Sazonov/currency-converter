import { createSelector } from '@ngrx/store';

export const selectFeature = (state: any) => {
  return state.currency;
};

export const getCurrencies = createSelector(
  selectFeature,
  (state: any) => state.currencies
);
