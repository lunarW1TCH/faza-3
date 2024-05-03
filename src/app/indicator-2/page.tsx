import FetchContainer from '~/components/strateg/fetch-container';
import { getStrategApiUrl } from '~/lib/api';
import { VStack } from '~panda/jsx';

const Page = () => {
  const fetchUrl = getStrategApiUrl(4121, 6246);

  return (
    <VStack>
      <FetchContainer url={fetchUrl} />
    </VStack>
  );
};

export default Page;
