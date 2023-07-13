import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { rtkApi } from '@/shared/api/rtkApi';
import { TestFeatureSchema } from '@/features/TestFeature';
import { Context } from 'next-redux-wrapper';

export interface StoreSchema {
  testFeature: TestFeatureSchema;
  // lookConstructor?: LookConstructorSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type StoreSchemaKey = keyof StoreSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>;
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>;
  add: (key: StoreSchemaKey, reducer: Reducer) => void;
  remove: (key: StoreSchemaKey) => void;
}

export interface ReduxStoreWithReducerManager extends EnhancedStore<StoreSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  context?: Context;
}

export interface ThunkConfig<Error> {
  rejectValue: Error;
  extra: ThunkExtraArg;
  state: StoreSchema;
}

export type StateSchemaKey = keyof StoreSchema;

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StoreSchema[name]>>;
};
