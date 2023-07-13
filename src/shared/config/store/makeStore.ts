import {
  Action, CombinedState, configureStore, Reducer, ReducersMapObject, ThunkAction,
} from '@reduxjs/toolkit';
import { Context, createWrapper } from 'next-redux-wrapper';
import { StoreSchema, ThunkExtraArg } from '@/shared/types/store';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

import { testFeatureReducer } from '@/features/TestFeature';

import { createReducerManager } from './createReducerManager';

export const makeStore = (
  initialState?:StoreSchema,
  context?: Context,
  asyncReducers?: ReducersMapObject<StoreSchema>,
) => {
  const rootReducer: ReducersMapObject<StoreSchema> = {
    testFeature: testFeatureReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
    context,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
    devTools: process.env.NODE_ENV === 'development',
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    })
      .concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>((context) => makeStore(undefined, context));
