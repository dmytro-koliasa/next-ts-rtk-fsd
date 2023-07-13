import { memo } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { testFeatureSelectors } from '../../model/selectors/testFeatureSelectors';
import { useTestFeatureActions } from '../../model/slices/testFeatureSlice';
import { MainModal } from '@/shared/ui/Modal';
import styles from './TestFeatureModal.module.scss';

interface TestFeatureModalProps {
  className?: string;
}

export const TestFeatureModal = memo(({ className }:TestFeatureModalProps) => {
  const isOpen = useSelector(testFeatureSelectors.getIsTestFeatureModalOpen);
  const { closeTestFeatureModal } = useTestFeatureActions();

  const closeHandler = () => {
    closeTestFeatureModal();
  }

  return (
    <MainModal
      isOpen={isOpen}
      onClose={closeHandler}
      centered
      width={300}
    >
      <div className={cn(styles.root, className)}>
          TestFeatureModal
          <div>
            <button onClick={closeHandler}>Close X</button>
          </div>
      </div>
    </MainModal>
  );
});
