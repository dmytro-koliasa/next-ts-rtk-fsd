import { memo } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { testFeatureSelectors } from '../../model/selectors/testFeatureSelectors';
import { useTestFeatureActions } from '../../model/slices/testFeatureSlice';
import styles from './TestFeatureModal.module.scss';

interface TestFeatureModalProps {
  className?: string;
}

export const TestFeatureModal = memo(({ className }:TestFeatureModalProps) => {
  const isOpen = useSelector(testFeatureSelectors.getIsTestFeatureModalOpen);
  const { closeTestFeatureModal } = useTestFeatureActions();

  const clickHandler = () => {
    closeTestFeatureModal();
  }

  if (!isOpen) {
    return null;
  }

  return (
      <div className={cn(styles.root, className)}>
          TestFeatureModal
          <div>
            <button onClick={clickHandler}>Close X</button>
          </div>
      </div>
  );
});
