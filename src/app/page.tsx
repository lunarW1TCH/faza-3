import { HStack, VStack, styled } from '~panda/jsx';
import { card, link } from '~panda/recipes';

const Home = () => {
  return (
    <VStack h='100%'>
      <styled.div className={cardRecipe.root} minW='300px'>
        <styled.div className={cardRecipe.header}>
          <styled.h3 className={cardRecipe.title}>Faza 3</styled.h3>
          <styled.p className={cardRecipe.description}>
            Aplikacja fazy 3 do pracy {'"..."'}
          </styled.p>
        </styled.div>
        <styled.div className={cardRecipe.body}>
          <styled.h5 fontWeight={600} mb='2'>
            Pozostałe aplikacje:
          </styled.h5>
          <HStack w='100%' justifyContent='space-between'>
            <styled.span>Faza 1:</styled.span>
            <styled.a className={link()} textDecoration='underline'>
              todo.vercel.app
            </styled.a>
          </HStack>
          <HStack w='100%' justifyContent='space-between'>
            <styled.span>Faza 2:</styled.span>
            <styled.a className={link()} textDecoration='underline'>
              todo.vercel.app
            </styled.a>
          </HStack>
        </styled.div>
      </styled.div>
    </VStack>
  );
};

export default Home;

const cardRecipe = card();
