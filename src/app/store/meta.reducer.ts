import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function storageSyncReducer(reducer: ActionReducer<any>) {
  const metaReducer = localStorageSync({
    keys: [
      'currency'
    ],
    storage: window.localStorage,
    storageKeySerializer: (key) => `ngrx_${key}`,
    rehydrate: true,
  });
  return metaReducer(reducer);
}

export const metaReducers: MetaReducer<any, any>[] = [storageSyncReducer];
