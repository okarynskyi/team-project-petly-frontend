// import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { HiCamera } from 'react-icons/hi';
import { UserDataItem } from 'components/UserDataItem/UserDataItem';
import userAvatar from '../../staticImages/userAvatar.png';
import {
  CardProfile,
  ItemUserInfo,
  Avatar,
  AvatarWrapper,
  LabelEditPhoto, ListUserInfo
} from './UserData.styled';
import { Container } from 'components/common/Container.styled';
const userInfoFromBack = [
  {
    name: 'Alena',
    email: 'al@gmail.com',
    city: 'Tokio',
    birthday: '00.00.0000',
    avatarURL: userAvatar,
    phone: '+380965749315',
  },
];

function checkType(item) {
  switch (item.label) {
    case 'email':
      return 'email';
    case 'phone':
      return 'tel';
    default:
      return 'text';
  }
}

export const UserData = ({ userInfo = userInfoFromBack }) => {
  let filterUserInfo = [];
  for (let key in userInfo[0]) {
    if (key === 'avatarURL') {
      continue;
    } else {
      filterUserInfo.push({ label: key, value: userInfo[0][key] });
    }
  }

  return (
    <section>
      <Container>
        <h2>My information:</h2>
        <CardProfile>
          <AvatarWrapper>
            <Avatar src={userInfo[0].avatarURL} alt="User avatar" />
            <LabelEditPhoto htmlFor="photoUser">
              <HiCamera color="#F59256" size="20px" />
              Edit photo
            </LabelEditPhoto>
            <input type="file" name="photo" id="photoUser" />
          </AvatarWrapper>
          {userInfo && (
            <ListUserInfo>
              {filterUserInfo.map(itemValue => (
                <ItemUserInfo key={itemValue.label}>
                  <UserDataItem
                    type={checkType(itemValue)}
                    label={itemValue.label}
                    value={itemValue.value}
                  />
       
                </ItemUserInfo>
              ))}
            </ListUserInfo>
          )}
        </CardProfile>
      </Container>
    </section>
  );
};

UserData.propTypes = {
  userInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};