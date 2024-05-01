'use client';

import { styled } from '~panda/jsx';

const BarItem = (props: BarItemProps) => {
  const { name, value } = props;

  console.log(value, value * 4);

  return (
    <styled.div
      h='400px'
      display='flex'
      flexDirection='column'
      justifyContent='flex-end'
      alignItems='center'
      _hover={{
        '& .barBg': {
          bgColor: 'accent.9',
          w: '100px',
        },
        '& .barValue': {
          display: 'flex',
          opacity: 1,
        },
      }}
    >
      <styled.div
        className='barBg'
        w='20px'
        style={{ height: value * 4 }}
        bgColor='accent.emphasized'
        zIndex={10}
        roundedTop='sm'
        transition='background-color,width 0.5s'
        position='relative'
        justifyContent='center'
        display='flex'
      >
        <styled.span
          className='barValue'
          display='none'
          opacity='0'
          position='absolute'
          bottom='-8'
          textAlign='center'
          transition='opacity 0.5s, width 0.5s'
        >
          {`${value.toString().replace('.', ',')}%`}
        </styled.span>
        <styled.span
          position='absolute'
          rotate='270deg'
          bottom='-16'
          textWrap='nowrap'
          textAlign='start'
          w='200px'
          fontSize='12px'
        >
          {name}
        </styled.span>
      </styled.div>
    </styled.div>
  );
};

export default BarItem;

type BarItemProps = {
  name: string;
  value: number;
};
