'use client';

import { useParams, usePathname } from 'next/navigation';
import useSWR from 'swr';
import { getStrategApiUrl } from '~/lib/api';
import { styled, VStack } from '~panda/jsx';
import { card, link } from '~panda/recipes';

const FetchContainer = () => {
  const pathname = usePathname() as AppPathname;
  const mutateKey = ``;

  useSWR(getStrategApiUrl(1659, 2142));

  return (
    <VStack>
      <styled.div className={cardRecipe.root} minW='300px'>
        <styled.div className={cardRecipe.header}>
          <styled.h3 className={cardRecipe.title}>
            {getTitle(pathname)}
          </styled.h3>
          <styled.p className={cardRecipe.description}></styled.p>
        </styled.div>
        <styled.div className={cardRecipe.body}></styled.div>
      </styled.div>
    </VStack>
  );
};

export default FetchContainer;

const cardRecipe = card();

const getTitle = (pathname: AppPathname) => {
  switch (pathname) {
    case '/todo1':
      return 'TODO 1';
    case '/todo2':
      return 'TODO 2';
    case '/todo3':
      return 'TODO 3';
  }
};

type Path = 'todo1' | 'todo2' | 'todo3';
type AppPathname = `/${Path}`;
