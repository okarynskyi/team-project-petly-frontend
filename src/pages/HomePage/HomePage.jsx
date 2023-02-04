import React from 'react';
import { womanImg } from './HomePageImg';
import { Section, MainPage, MainImage, MainTitle } from './HomePage.styled';
import { Container } from 'components/common/Container.styled.jsx';

const HomePage = () => {
  return (
    <main>
      <Section>
        <Container>
          <MainPage>
            <MainTitle>Take good care of your small pets</MainTitle>
            <MainImage
              src={womanImg.large}
              srcSet={`${womanImg.small} 320w, ${womanImg.medium} 768w, ${womanImg.large} 1280w`}
              alt="woman"
            />
          </MainPage>
        </Container>
      </Section>
    </main>
  );
};
export default HomePage;
