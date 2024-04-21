'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { VStack, styled } from '~panda/jsx';
import { button, input } from '~panda/recipes';
import clientCode from '~/../public/client.png';
import { css } from '~panda/css';

const Page = () => {
  const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement | null>(null);

  return (
    <VStack my='4'>
      <styled.input
        w='200px'
        className={input()}
        placeholder='Wpisz swoje imię'
        ref={nameRef}
      />
      <styled.button
        w='200px'
        className={button()}
        onClick={() => {
          if (!nameRef.current) return;
          setName(nameRef.current.value);
          nameRef.current.value = '';
        }}
      >
        Akceptuj
      </styled.button>
      {name && <styled.p>Witaj {name}!</styled.p>}
      <styled.hr
        my='2'
        borderColor='border.muted'
        border='1px solid'
        w='100%'
      />
      <Image
        alt='Kod implementujący powyższą funkcjonalność'
        src={clientCode}
        width={500}
        className={css({
          border: '1px solid',
          borderColor: 'border.subtle',
          rounded: 'md',
        })}
      />
      <styled.p fontSize='12px' fontStyle='italic' color='fg.muted'>
        Kod implementujący powyższą funkcjonalność
      </styled.p>
    </VStack>
  );
};

export default Page;
