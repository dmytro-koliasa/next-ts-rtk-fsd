import cn from 'classnames';
import Link from 'next/link';
import { Svg } from '@/shared/ui/Svg';
import styles from './SocialsMenu.module.scss';

interface SocialsMenuProps {
  className?: string;
  socials?: any;
}

export const SocialsMenu = ({ className, socials }:SocialsMenuProps) => (
  <ul className={cn(styles.root, className)}>
    {Object.values(socials).map((social: any) => (
      <li key={social.href} className={styles.socials_item}>
        <Link href={social.href} className={cn(styles.socials_link)}>
          <Svg Icon={social.Icon} width="24" height="24" fill={social.fill} stroke={social.stroke} />
        </Link>
      </li>
    ))}
  </ul>
);
