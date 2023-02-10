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
                Because of the war, many <b>Animals</b> in Ukraine lost their
                people.
              </TextReason>
              <Description>
                Many people have to move and find for their pets new owners.
              </Description>
              <MainTitle>OUR MISSION:</MainTitle>
              <WrapperMission>
                <p>
                  to connecting <b>People</b> and <b>Animals</b> so that no a
                  single Tail isn't left alone.
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
