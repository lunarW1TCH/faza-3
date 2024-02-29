import { styled } from '~panda/jsx';
import { Link } from '../ui/link';
import NextLink from 'next/link';

const Navigation = () => {
  return (
    <styled.nav display='flex' flexDir='row' w='100%' my='2' mx='4'>
      <Link
        w='100px'
        textAlign='center'
        textStyle='2xl'
        fontWeight='light'
        asChild
      >
        <NextLink style={{ textAlign: 'center' }} href='/'>
          Home
        </NextLink>
      </Link>
      <Link
        w='100px'
        textAlign='center'
        textStyle='2xl'
        fontWeight='light'
        asChild
      >
        <NextLink href='/todo1'>Todo 1</NextLink>
      </Link>
      <Link
        w='100px'
        textAlign='center'
        textStyle='2xl'
        fontWeight='light'
        asChild
      >
        <NextLink href='/todo2'>Todo 2</NextLink>
      </Link>
      <Link
        w='100px'
        textAlign='center'
        textStyle='2xl'
        fontWeight='light'
        asChild
      >
        <NextLink href='/todo3'>Todo 3</NextLink>
      </Link>
    </styled.nav>
  );
};

export default Navigation;
