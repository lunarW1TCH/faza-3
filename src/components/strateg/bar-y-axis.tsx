'use client';

import { css } from '~panda/css';
import { styled } from '~panda/jsx';

const BarYAxis = () => {
  return (
    <>
      <styled.span className={labelStyles} bottom='232px'>
        10%
      </styled.span>
      <styled.span className={labelStyles} bottom='272px'>
        20%
      </styled.span>
      <styled.span className={labelStyles} bottom='312px'>
        30%
      </styled.span>
      <styled.span className={labelStyles} bottom='352px'>
        40%
      </styled.span>
      <styled.span className={labelStyles} bottom='392px'>
        50%
      </styled.span>
      <styled.span className={labelStyles} bottom='432px'>
        60%
      </styled.span>
      <styled.span className={labelStyles} bottom='472px'>
        70%
      </styled.span>
      <styled.span className={labelStyles} bottom='512px'>
        80%
      </styled.span>
      <styled.span className={labelStyles} bottom='552px'>
        90%
      </styled.span>
    </>
  );
};

export default BarYAxis;

const labelStyles = css({
  position: 'absolute',
  w: '100%',
  left: '-6',
  fontSize: '10px',
});
