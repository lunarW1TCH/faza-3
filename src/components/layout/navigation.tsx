import { styled } from '~panda/jsx';
import { button } from '~panda/recipes';
import { Link } from '../ui/link';
import NextLink from 'next/link';

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
      <Link
        w='96px'
        textAlign='center'
        textStyle='2xl'
        fontWeight='light'
        asChild
        className={button({ variant: 'ghost' })}
      >
        <NextLink style={{ textAlign: 'center' }} href='/'>
          Home
        </NextLink>
      </Link>
      <Link
        w='96px'
        textAlign='center'
        textStyle='2xl'
        fontWeight='light'
        asChild
        className={button({ variant: 'ghost' })}
      >
        <NextLink href='/todo1'>Todo 1</NextLink>
      </Link>
      <Link
        w='96px'
        textAlign='center'
        textStyle='2xl'
        fontWeight='light'
        asChild
        className={button({ variant: 'ghost' })}
      >
        <NextLink href='/todo2'>Todo 2</NextLink>
      </Link>
      <Link
        w='96px'
        textAlign='center'
        textStyle='2xl'
        fontWeight='light'
        asChild
        className={button({ variant: 'ghost' })}
      >
        <NextLink href='/todo3'>Todo 3</NextLink>
      </Link>
      <Link
        w='96px'
        textAlign='center'
        textStyle='2xl'
        fontWeight='light'
        asChild
        className={button({ variant: 'ghost' })}
      >
        <NextLink href='/klient'>Klient</NextLink>
      </Link>
    </styled.nav>
  );
};

export default Navigation;
