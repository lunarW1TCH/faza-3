'use client';

import { styled } from '~panda/jsx';

const BarItem = (props: BarItemProps) => {
  const { name, value } = props;

  console.log(value, value * 4);

  return (
    <styled.div
      h='600px'
      px='3px'
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
        smDown={{
          w: '10px',
        }}
        style={{ height: value * 4 }}
        bgColor='accent.default'
        zIndex={10}
        roundedTop='sm'
        transition='background-color 0.3s ease-in-out, width 0.3s ease-in-out'
        position='relative'
        justifyContent='center'
        display='flex'
        mb='200px'
      />
      <styled.span
        className='barValue'
        display='none'
        opacity='0'
        position='absolute'
        textAlign='center'
        transition='opacity 0.5s, width 0.5s'
        bottom='170px'
      >
        {`${value.toString().replace('.', ',')}%`}
      </styled.span>
      <styled.span
        position='absolute'
        rotate='270deg'
        bottom='110px'
        textWrap='nowrap'
        textAlign='start'
        w='200px'
        fontSize='14px'
      >
        {name}
      </styled.span>
    </styled.div>
  );
};

export default BarItem;

type BarItemProps = {
  name: string;
  value: number;
};
