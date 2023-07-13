import { memo } from 'react';
import cn from 'classnames';
import styles from './MainView.module.scss';

interface MainViewProps {
  className?: string;
}

export const MainView = memo(({ className }:MainViewProps) => {
  return (
      <div className={cn(styles.root, className)}>
          MainView
      </div>
  );
});
