import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import type { Props } from '~/types';
import { styled } from '~panda/jsx';
import Navigation from '~/components/layout/navigation';
import Footer from '~/components/layout/footer';

const inter = Inter({
  subsets: ['latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const Root = (props: Props) => {
  const { children } = props;

  return (
    <styled.html lang='en' className={inter.variable}>
      <styled.body>
        <Navigation />
        <styled.main
          display='flex'
          flexDir='column'
          justifyContent='center'
          alignItems='center'
          bgColor='bg.subtle'
        >
          {children}
        </styled.main>
        <Footer />
      </styled.body>
    </styled.html>
  );
};

export default Root;
