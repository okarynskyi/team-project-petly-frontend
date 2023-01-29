import React from 'react';
import womanImg from '../../staticImages/homepage/woman-desk.png';
import { Container, Main, MainImage, MainTitle } from './HomePage.styled';

export const HomePage = () => {
  return (
    <Main>
      <Container>
        <MainTitle>Take good care of your small pets</MainTitle>
        <MainImage src={womanImg} alt="woman" />
      </Container>
    </Main>
  );
};
