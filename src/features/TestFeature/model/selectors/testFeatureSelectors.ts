import { StoreSchema } from '@/shared/types/store';

const getIsTestFeatureModalOpen = (state: StoreSchema) => state.testFeature?.isTestFeatureModalOpen || false;

export const testFeatureSelectors = {
  getIsTestFeatureModalOpen,
};
