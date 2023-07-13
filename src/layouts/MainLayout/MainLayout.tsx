import { ReactNode } from 'react';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import cn from 'classnames';
import styles from './MainLayout.module.scss';
import Head from 'next/head';

interface MainLayoutProps {
  className?: string;
  children: ReactNode;
}

export const MainLayout = ({
  className,
  children
}: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>Next-ts-rtk</title>
        <meta name="description" content="Some description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <main className={cn(styles.main, className)}>
            {children}
        </main>
        <Footer className={styles.footer} />
      </div>
    </>
  );
};
