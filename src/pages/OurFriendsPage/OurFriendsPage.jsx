import { useEffect, useState } from 'react';
import Friends from 'components/Friends/Friends';
// import { getFriends } from 'services/apiService';
// import Loader from '../../components/Loader';
import { Section, StyledTitle, StyledContainer } from './OurFriendsPage.styled';

export function OurFriendsPage() {
  const [friends, setFriends] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchFriends = async () => {
  //     setIsLoading(true);
  //     setError(null);
  //     try {
  //       const data = await getFriends('friends');
  //       setFriends(data);
  //     } catch (e) {
  //       setError(e);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchFriends();
  // }, []);

  // useEffect(() => {
  //   const fetchFriends = async () => {
  //     const data = await fetch(getFriends);
  //     console.log(data);
  //     setFriends(data);
  //   };
  //   fetchFriends();
  // }, []);

  useEffect(() => {
      const fetchFriends = async () => {
         const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=10'
         );
         const data = await response.json();
         console.log(data);
         setFriends(data);
      };
      fetchFriends();
   }, []);


  return (
    <>
      <Section>
        <StyledContainer>
          <StyledTitle>Our friends</StyledTitle>
          {/* {isLoading && <Loader />} */}
          {/* {error && <div>{error.message}</div>} */}
          {friends && <Friends friends={friends} />}
        </StyledContainer>
      </Section>
    </>
  );
};