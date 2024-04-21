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
      <Text as='span'>&copy; 2024 Adrian Żegnałek</Text>
    </styled.footer>
  );
};

export default Footer;
