import { Home } from 'lucide-react';
import NextLink from 'next/link';
import { styled } from '~panda/jsx';
import { button } from '~panda/recipes';

import { Button } from '../ui/button';
import { Link } from '../ui/link';

const Navigation = () => {
  return (
    <styled.nav
      display='flex'
      flexDir='row'
      w='100%'
      py='2'
      px='4'
      borderBottom='1px solid'
      borderBottomColor='border.subtle'
      gap='2'
    >
      <Button
        textAlign='center'
        textStyle='sm'
        fontWeight='light'
        asChild
        variant='ghost'
        _active={{
          bgColor: 'accent.5',
        }}
      >
        <NextLink style={{ textAlign: 'center' }} href='/'>
          <Home />
        </NextLink>
      </Button>
      <Button
        textAlign='center'
        textStyle='sm'
        fontWeight='light'
        asChild
        variant='ghost'
        _active={{
          bgColor: 'accent.5',
        }}
      >
        <NextLink href='/indicator-1'>Wskaźnik 1</NextLink>
      </Button>
      <Button
        textAlign='center'
        textStyle='sm'
        fontWeight='light'
        asChild
        variant='ghost'
        _active={{
          bgColor: 'accent.5',
        }}
      >
        <NextLink href='/indicator-2'>Wskaźnik 2</NextLink>
      </Button>
      <Button
        textAlign='center'
        textStyle='sm'
        fontWeight='light'
        asChild
        variant='ghost'
        _active={{
          bgColor: 'accent.5',
        }}
      >
        <NextLink href='/indicator-3'>Wskaźnik 3</NextLink>
      </Button>
      <Button
        textAlign='center'
        textStyle='sm'
        fontWeight='light'
        asChild
        variant='ghost'
        _active={{
          bgColor: 'accent.5',
        }}
      >
        <NextLink href='/klient'>Klient</NextLink>
      </Button>
    </styled.nav>
  );
};

export default Navigation;
