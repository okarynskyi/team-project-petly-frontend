// import { useState, useEffect } from "react";
// import PropTypes from 'prop-types';

import { checkType } from 'helpers/typeInputCheck';
import { HiCamera } from 'react-icons/hi';
import { UserDataItem } from 'components/UserDataItem/UserDataItem';
import { TitleSectionUser } from '../../pages/UserPage/UserPage.styled';
import { Logout } from 'components/Logout/Logout';
import userAvatar from '../../staticImages/userAvatar.png';
import {
  CardProfile,
  ItemUserInfo,
  Avatar,
  AvatarWrapper,
  LabelEditPhoto,
  ListUserInfo,
  InfoWrapper,
} from './UserData.styled';

// const userInfoFromBack = [
//   {
//     name: 'Alena',
//     email: 'al@gmail.com',
//     city: 'Tokio',
//     birthday: '2000-12-01T00:00:00.000Z',
//     avatarURL: userAvatar,
//     phone: '+380965749315',
//   },
// ];

export const UserData = ({ userInfo , avatar }) => {
  return (
    <div>
      <TitleSectionUser>My information:</TitleSectionUser>
      <CardProfile>
        <AvatarWrapper>
          {avatar ? (
            <Avatar src={avatar} alt="User avatar" />
          ) : (
            <Avatar src={userAvatar} alt="User avatar" />
          )}

          <LabelEditPhoto htmlFor="photoUser">
            <HiCamera color="#F59256" size="20px" />
            Edit photo
          </LabelEditPhoto>
          <input type="file" name="photo" id="photoUser" />
        </AvatarWrapper>
        <InfoWrapper>
          {userInfo ? (
            <ListUserInfo>
              {userInfo.map(itemValue => (
                <ItemUserInfo key={itemValue.label}>
                  <UserDataItem
                    type={checkType(itemValue)}
                    label={itemValue.label}
                    value={itemValue.value}
                  />
                </ItemUserInfo>
              ))}
            </ListUserInfo>
          ): (<ListUserInfo>Not</ListUserInfo>)}
          <Logout />
        </InfoWrapper>
      </CardProfile>
    </div>
  );
};

// UserData.propTypes = {
//   userInfo: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//       city: PropTypes.string.isRequired,
//       birthday: PropTypes.string.isRequired,
//       avatarUrl: PropTypes.string.isRequired,
//       phone: PropTypes.string.isRequired,
//     })
//   ),
// };
