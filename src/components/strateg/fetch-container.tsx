'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher, getStrategApiUrl, voivodeships } from '~/lib/api';
import { styled, VStack } from '~panda/jsx';
import { card } from '~panda/recipes';

import BarGraph from './bar-graph';

import type { StrategResponseBody, VoivodeshipID } from '~/types/api';
const FetchContainer = () => {
  const pathname = usePathname() as AppPathname;
  const mutateKey = getStrategApiUrl(1659, 2142);

  const [graphData, setGraphData] = useState<GraphData>([]);

  const { data, isLoading } = useSWR<StrategResponseBody<string>>(
    mutateKey,
    fetcher
  );

  useEffect(() => {
    if (isLoading || !data) return;

    const data2022 = Object.entries(data?.real_values['2022']).map((entry) => ({
      name: voivodeships[entry[0] as VoivodeshipID],
      value: parseFloat(entry[1]),
    }));

    setGraphData(data2022);
  }, [isLoading, data]);

  if (isLoading) return 'Loading...';

  return (
    <VStack>
      <styled.div className={cardRecipe.root} minW='300px'>
        <styled.div className={cardRecipe.header}>
          <styled.h3 className={cardRecipe.title}>
            {getTitle(pathname)}
          </styled.h3>
          <styled.p className={cardRecipe.description}></styled.p>
        </styled.div>
        <styled.div className={cardRecipe.body}>
          {/* {displayedData.map((d) => (
            <styled.div key={d.name}>
              {d.name}: {d.value}
            </styled.div>
          ))} */}
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

export type GraphData = {
  name: string;
  value: number;
}[];
