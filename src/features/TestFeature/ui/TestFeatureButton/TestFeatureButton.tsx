import { memo } from 'react';
import cn from 'classnames';
import { useTestFeatureActions } from '../../model/slices/testFeatureSlice';
import styles from './TestFeatureButton.module.scss';

interface TestFeatureButtonProps {
  className?: string;
}

export const TestFeatureButton = memo(({ className }:TestFeatureButtonProps) => {
  const { openTestFeatureModal } = useTestFeatureActions();

  const clickHandler = () => {
    console.log('useTestFeatureActions', useTestFeatureActions);
    openTestFeatureModal();
  }

  return (
      <div className={cn(styles.root, className)}>
          <button onClick={clickHandler}>Click me</button>
      </div>
  );
});
