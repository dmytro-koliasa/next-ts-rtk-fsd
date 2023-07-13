import { buildSlice } from '@/shared/lib/utils/buildSlice';
import { TestFeatureSchema } from '../types/testFeatureSchema';

const initialState: TestFeatureSchema = {
  isTestFeatureModalOpen: false,
};

export const testFeatureSlice = buildSlice({
  name: 'testFeature',
  initialState,
  reducers: {
    closeTestFeatureModal: (state) => {
      state.isTestFeatureModalOpen = false;
    },
    openTestFeatureModal: (state) => {
      state.isTestFeatureModalOpen = true;
    },
  },
});

export const {
  reducer: testFeatureReducer,
  useActions: useTestFeatureActions,
} = testFeatureSlice;
