import { memo } from 'react';
import cn from 'classnames';
import { Flex } from '@/shared/ui/Flex';
import { Typography } from '@/shared/ui/Typography';
import { useTranslation } from 'next-i18next';
import styles from './SizePicker.module.scss';

interface SizePickerProps {
  className?: string;
  sizes: string[];
  onSizeChange: (size: string) => void;
  activeSize: string;
  withTitle?: boolean;
  direction?: 'row' | 'column';
}

export const SizePicker = memo(({
  className, direction = 'row', sizes = [], withTitle, onSizeChange, activeSize,
}: SizePickerProps) => {
  const { t } = useTranslation('sizes');
  return (
    <Flex className={className} direction={direction} align={direction === 'column' ? 'start' : 'center'} gap={direction === 'column' ? '8' : '10'}>
      {withTitle && (
        <Typography variant="body-3">
          {t('size')}
          :
          {' '}
        </Typography>
      )}
      <Flex align="center" gap="10">
        {sizes.map((size) => (
          <button
            type="button"
            onClick={() => onSizeChange(size)}
            key={size}
            className={cn(styles.size, { [styles.active]: size === activeSize })}
          >
            {size}
          </button>
        ))}
      </Flex>
    </Flex>
  );
});
