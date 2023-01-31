import { useEffect, useState } from 'react';
import Friends from 'components/Friends/Friends';
import { getFriends } from 'services/apiService';
import { Section, StyledTitle, StyledContainer } from './OurFriendsPage.styled';

export function OurFriendsPage() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function fetchData() { 
      const {data: {friends}} = await getFriends();
      setFriends([...friends]);
    }
    fetchData();
  }, []);

  return (
    <>
      <Section>
        <StyledContainer>
          <StyledTitle>Our friends</StyledTitle>
          {friends && <Friends friends={friends} />}
        </StyledContainer>
      </Section>
    </>
  );
};