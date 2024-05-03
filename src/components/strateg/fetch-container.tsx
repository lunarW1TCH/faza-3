'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher, voivodeships } from '~/lib/api';
import { styled, VStack } from '~panda/jsx';
import { card } from '~panda/recipes';

import LoadingFallback from '../loading-fallback';
import BarGraph from './bar-graph';
import ErrorFallback from './error-fallback';

import type {
  StrategApiURL,
  StrategResponseBody,
  VoivodeshipID,
} from '~/types/api';
const FetchContainer = (props: FetchContainerProps) => {
  const { url } = props;
  const pathname = usePathname() as AppPathname;

  //! DUMMY DATA
  // const [graphData, setGraphData] = useState<GraphData>(
  //   Object.entries(dummyData.real_values[2021]).map((entry) => ({
  //     name: voivodeships[entry[0] as VoivodeshipID],
  //     value: parseFloat(entry[1]),
  //   }))
  // );

  // ! REAL DATA
  const [graphData, setGraphData] = useState<GraphData>([]);
  const { data, isLoading, error } = useSWR<StrategResponseBody<string>>(
    url,
    fetcher,
    {
      isPaused: () => false,
    }
  );

  useEffect(() => {
    if (isLoading || !data || error || 'message' in data) return;

    const data2021 = Object.entries(data?.real_values['2021']).map((entry) => ({
      name: voivodeships[entry[0] as VoivodeshipID],
      value: parseFloat(entry[1]),
    }));

    setGraphData(data2021);
  }, [isLoading, data, error]);

  if (isLoading) return <LoadingFallback />;
  if (error || (data && 'message' in data)) return <ErrorFallback />;
  //! REAL DATA

  return (
    <VStack>
      <styled.div
        className={cardRecipe.root}
        minW='300px'
        maxW='530px'
        smDown={{
          maxW: '400px',
        }}
      >
        <styled.div className={cardRecipe.header}>
          <styled.h3
            className={cardRecipe.title}
            textWrap='wrap'
            fontSize='16px'
          >
            {getTitle(pathname)}
          </styled.h3>
        </styled.div>
        <styled.div className={cardRecipe.body}>
          <BarGraph graphData={graphData} />
        </styled.div>
      </styled.div>
    </VStack>
  );
};

export default FetchContainer;

const cardRecipe = card();

const getTitle = (pathname: AppPathname) => {
  switch (pathname) {
    case '/indicator-1':
      return 'Odsetek gospodarstw domowych posiadających szerokopasmowy dostęp do Internetu w domu - 2021';
    case '/indicator-2':
      return 'Odsetek osób korzystających z Internetu w celu wyszukiwania informacji o towarach lub usługach - 2021';
    case '/indicator-3':
      return 'Przedsiębiorstwa (powyżej 9 pracujących) posiadające własną stronę internetową - 2021';
  }
};

type Path = 'indicator-1' | 'indicator-2' | 'indicator-3';
type AppPathname = `/${Path}`;

export type GraphData = {
  name: string;
  value: number;
}[];

type FetchContainerProps = {
  url: StrategApiURL;
};
