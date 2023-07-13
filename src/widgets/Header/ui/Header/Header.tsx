import { memo } from 'react';
import cn from 'classnames';
import { TestFeatureButton, TestFeatureModal } from '@/features/TestFeature';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = memo(({ className }:HeaderProps) => {
  return (
      <header className={cn(styles.root, className)}>
          <TestFeatureButton />
          <TestFeatureModal />
      </header>
  );
});
