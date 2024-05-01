'use client';

import { css } from '~panda/css';
import { styled } from '~panda/jsx';

import BarItem from './bar-item';
import BarLines from './bar-lines';

import type { GraphData } from './fetch-container';
const BarGraph = (props: BarGraphProps) => {
  const { graphData } = props;

  return (
    <styled.div
      w='480px'
      h='600px'
      bgColor='red/20'
      border='1px solid'
      borderColor='border.default'
      display='flex'
      flexDir='column'
    >
      <styled.div
        w='100%'
        h='400px'
        bgColor='white'
        display='flex'
        justifyContent='space-evenly'
        alignItems='flex-end'
        position='relative'
      >
        <BarLines />
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
