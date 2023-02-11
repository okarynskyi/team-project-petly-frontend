import React from 'react';
import { womanImg } from './HomePageImg';
import {
  Section,
  MainPage,
  MainImage,
  MainTitle,
  Description,
  TextReason,
  WrapperMission,
  Donat,
  BoxDonat,
  StyledMoney,
} from './HomePage.styled';
import { Container } from 'components/common/Container.styled.jsx';

const HomePage = () => {
  return (
    <main>
      <Section>
        <Container>
          <MainPage>
            <div>
              <TextReason>
                Many <b>Pets</b> in Ukraine lost their <b>Owners</b> because of the war
              </TextReason>
              <Description>
                People have to move somewhere else and find new owners for their pets
              </Description>
              <MainTitle>OUR MISSION:</MainTitle>
              <WrapperMission>
                <p>
                  to connect <b>Owners</b> and <b>Pets</b> so that not a
                  single Tail is left alone
                </p>
              </WrapperMission>
              <BoxDonat>
                {' '}
                <Donat
                  href="https://happypaw.ua/ua/?gclid=CjwKCAiA0JKfBhBIEiwAPhZXD4YPXZfCc5iWlYH7r4FOVC1OEmZM-9c2hDS5uFCMnAU0L-F_zVRAHBoCUR0QAvD_BwE"
                  target="_blank"
                >
                  <StyledMoney />
                </Donat>{' '}
                Donat
              </BoxDonat>
            </div>

            <MainImage
              srcSet={`${womanImg.small} 320w, ${womanImg.medium} 768w, ${womanImg.large} 1280w`}
              src={womanImg.medium}
              alt="woman"
            />
          </MainPage>
        </Container>
      </Section>
    </main>
  );
};
export default HomePage;
