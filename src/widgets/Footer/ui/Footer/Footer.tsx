import { memo } from 'react';
import cn from 'classnames';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export const Footer = memo(({ className }:FooterProps) => {
  return (
      <footer className={cn(styles.root, className)}>
          Footer
      </footer>
  );
});
