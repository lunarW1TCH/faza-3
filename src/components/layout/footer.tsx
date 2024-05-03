import { styled } from '~panda/jsx';

import { Text } from '../ui/text';

const Footer = () => {
  return (
    <styled.footer
      w='100%'
      textAlign='center'
      borderTop='1px solid'
      borderTopColor='border.subtle'
    >
      <styled.span fontSize='sm'>&copy; 2024 Adrian Żegnałek</styled.span>
    </styled.footer>
  );
};

export default Footer;
