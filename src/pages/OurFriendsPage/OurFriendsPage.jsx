import { useEffect, useState } from 'react';
import Friends from 'components/Friends/Friends';
import { getFriends } from 'services/apiService';
// import Loader from '../../components/Loader';
import { Section, StyledTitle, StyledContainer } from './OurFriendsPage.styled';

export function OurFriendsPage() {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
          {/* {isLoading && <Loader />} */}
          {error && <div>{error.message}</div>}
          {friends && <Friends friends={friends} />}
        </StyledContainer>
      </Section>
    </>
  );
};