import { useTestFeatureActions } from './slices/testFeatureSlice';

export const useTestFeatureModel = () => {
  const { openTestFeatureModal } = useTestFeatureActions();

  return { openTestFeatureModal };
};
