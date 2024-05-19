'use client';

import { warn } from 'console';
import { LoaderPinwheel } from 'lucide-react';
import { styled, VStack } from '~panda/jsx';

const LoadingFallback = () => {
  return (
    <VStack>
      <styled.h1 fontSize='xl'>Wczytywanie</styled.h1>
      <styled.span animation='rotate 1s linear infinite'>
        <LoaderPinwheel />
      </styled.span>
    </VStack>
  );
};

export default LoadingFallback;
