import PropTypes from 'prop-types';
import React from 'react';
import { StyledWrapper } from './Friends.styled';
import FriendsItems from './FriendsItems/FriendsItems';

function Friends({ friends }) {
  return (
    <StyledWrapper>
      {friends.map(({ ...item }) => {
        return <FriendsItems key={item._id} {...item} />;
      })}
    </StyledWrapper>
  );
}

export default React.memo(Friends);

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      _id: PropTypes.string.isRequired,
      url: PropTypes.string,
      title: PropTypes.string.isRequired,
      address: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      addressUrl: PropTypes.string,
      workDays: PropTypes.array,
    })
  ),
};