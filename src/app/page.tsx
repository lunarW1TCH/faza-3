import { HStack, styled, VStack } from '~panda/jsx';
import { card, link } from '~panda/recipes';

const Home = () => {
  return (
    <VStack h='100%'>
      <styled.div className={cardRecipe.root} minW='300px' maxW='310px'>
        <styled.div className={cardRecipe.header}>
          <styled.h3 className={cardRecipe.title}>Faza 3</styled.h3>
          <styled.p className={cardRecipe.description}>
            Aplikacja fazy 3 do pracy:
          </styled.p>
          <styled.p className={cardRecipe.description}>
            Wpływ wybranych technologii webowych na działanie aplikacji w ujęciu
            biznesowym
          </styled.p>
        </styled.div>
        <styled.div className={cardRecipe.body}>
          <styled.h5 fontWeight={600} mb='2'>
            Pozostałe aplikacje:
          </styled.h5>
          <HStack w='100%' justifyContent='space-between'>
            <styled.span>Faza 1:</styled.span>
            <styled.a
              href='https://lunaf1.draganczuk.cloud'
              target='_blank'
              rel='noreferrer noopener'
              className={link()}
              textDecoration='underline'
            >
              lunaf1.draganczuk.cloud
            </styled.a>
          </HStack>
          <HStack w='100%' justifyContent='space-between'>
            <styled.span>Faza 2:</styled.span>
            <styled.a
              href='https://faza-2.vercel.app/'
              target='_blank'
              rel='noreferrer noopener'
              className={link()}
              textDecoration='underline'
            >
              faza-2.vercel.app
            </styled.a>
          </HStack>
        </styled.div>
      </styled.div>
    </VStack>
  );
};

export default Home;

const cardRecipe = card();
