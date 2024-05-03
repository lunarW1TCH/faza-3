'use client';

import { css } from '~panda/css';
import { styled } from '~panda/jsx';

const BarLines = () => {
  return (
    <>
      <styled.hr className={hrStyles} bottom='240px' />
      <styled.hr className={hrStyles} bottom='280px' />
      <styled.hr className={hrStyles} bottom='320px' />
      <styled.hr className={hrStyles} bottom='360px' />
      <styled.hr className={hrStyles} bottom='400px' />
      <styled.hr className={hrStyles} bottom='440px' />
      <styled.hr className={hrStyles} bottom='480px' />
      <styled.hr className={hrStyles} bottom='520px' />
      <styled.hr className={hrStyles} bottom='560px' />
    </>
  );
};

export default BarLines;

const hrStyles = css({
  position: 'absolute',
  borderColor: 'neutral.3',
  w: '100%',
});
