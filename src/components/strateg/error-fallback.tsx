'use client';

import { styled, VStack } from '~panda/jsx';
import { card, link } from '~panda/recipes';

const ErrorFallback = () => {
  return (
    <VStack>
      <styled.div className={cardRecipe.root} maxW='400px'>
        <styled.div className={cardRecipe.header}>
          <styled.h1 fontSize='xl' fontWeight={600}>
            Pobieranie danych nie powiodło się
          </styled.h1>
        </styled.div>
        <styled.div className={cardRecipe.body}>
          <styled.p textAlign='justify'>
            API{' '}
            <styled.a
              className={link()}
              href='https://strateg.stat.gov.pl/apidocs'
            >
              strateg.stat.gov
            </styled.a>{' '}
            posiada ograniczenie wykonywanych zapytań: do 10 żądań na sekundę
            oraz do 500 żądań na 15 minut. Jeżeli widzisz tę wiadomość spróbuj
            ponownie za kilkanaście minut. Przepraszam za opóźnienia!
          </styled.p>
        </styled.div>
      </styled.div>
    </VStack>
  );
};

export default ErrorFallback;

const cardRecipe = card();
