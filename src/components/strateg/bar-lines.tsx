'use client';

import { css } from '~panda/css';
import { styled } from '~panda/jsx';

const BarLines = () => {
  return (
    <>
      <styled.hr className={hrStyles} bottom='40px' />
      <styled.hr className={hrStyles} bottom='80px' />
      <styled.hr className={hrStyles} bottom='120px' />
      <styled.hr className={hrStyles} bottom='160px' />
      <styled.hr className={hrStyles} bottom='200px' />
      <styled.hr className={hrStyles} bottom='240px' />
      <styled.hr className={hrStyles} bottom='280px' />
      <styled.hr className={hrStyles} bottom='320px' />
      <styled.hr className={hrStyles} bottom='360px' />
    </>
  );
};

export default BarLines;

const hrStyles = css({
  position: 'absolute',
  borderColor: 'neutral.3',
  w: '100%',
});
