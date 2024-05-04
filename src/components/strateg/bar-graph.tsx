'use client';

import { styled } from '~panda/jsx';

import BarItem from './bar-item';
import BarLines from './bar-lines';
import BarYAxis from './bar-y-axis';

import type { GraphData } from './fetch-container';
const BarGraph = (props: BarGraphProps) => {
  const { graphData } = props;

  return (
    <styled.div
      w='480px'
      smDown={{
        maxW: '320px',
      }}
      h='600px'
      border='1px solid'
      rounded='md'
      borderColor='border.default'
      display='flex'
      flexDir='column'
    >
      <styled.div
        w='100%'
        h='600px'
        display='flex'
        justifyContent='space-evenly'
        alignItems='flex-end'
        position='relative'
      >
        <BarLines />
        <BarYAxis />
        {graphData.map((d) => (
          <BarItem key={d.name} name={d.name} value={d.value} />
        ))}
      </styled.div>
    </styled.div>
  );
};

export default BarGraph;

type BarGraphProps = {
  graphData: GraphData;
};
