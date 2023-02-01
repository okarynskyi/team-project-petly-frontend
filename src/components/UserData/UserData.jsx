import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/user/userSelectors';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getUserData } from 'redux/user/userOperations';
import { formatBirthDate } from 'helpers/formatDate';
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

export const UserData = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUserInfo);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
      dispatch(getUserData());
    
  }, [dispatch, isLoggedIn]);

  function filterData(obj) {
    let filterUserInfo = [];
    if (obj) {
      for (let key in obj) {
        if (key === 'birthday') {
          if (obj[key]) {
            filterUserInfo.push({
              label: key,
              value: formatBirthDate(obj[key]),
            });
          } else {
            filterUserInfo.push({
              label: key,
              value: '0000-00-00T00:00:00.000+00:00',
            });
          }
          continue;
        }
        if (key === 'avatarURL' || key === 'favorites') {
          continue;
        } else {
          filterUserInfo.push({ label: key, value: obj[key] });
        }
      }
    }
    return filterUserInfo;
  }
  const infoProfile = filterData(userInfo.user);
  return (
    <div>
      <TitleSectionUser>My information:</TitleSectionUser>
      <CardProfile>
        <AvatarWrapper>
          {userInfo ? (
            <Avatar src={userAvatar} alt="User avatar" />
          ) : (
            <Avatar src={userInfo.avatarURL} alt="User avatar" />
          )}

          <LabelEditPhoto htmlFor="photoUser">
            <HiCamera color="#F59256" size="20px" />
            Edit photo
          </LabelEditPhoto>
          <input type="file" name="photo" id="photoUser" />
        </AvatarWrapper>
        <InfoWrapper>
          {infoProfile ? (
            <ListUserInfo>
              {infoProfile.map(itemValue => (
                <ItemUserInfo key={itemValue.label}>
                  <UserDataItem
                    type={checkType(itemValue)}
                    label={itemValue.label}
                    value={itemValue.value}
                  />
                </ItemUserInfo>
              ))}
            </ListUserInfo>
          ) : (
            <ListUserInfo>Not</ListUserInfo>
          )}
          <Logout />
        </InfoWrapper>
      </CardProfile>
    </div>
  );
};

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