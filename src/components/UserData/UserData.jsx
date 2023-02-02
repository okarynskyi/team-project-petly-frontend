import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePhoto } from 'redux/user/userOperations';
import { selectUserInfo, selectIsLoadingUser } from 'redux/user/userSelectors';
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
  LabelEditPhoto,
  ListUserInfo,
  InfoWrapper,
  HiddenInput,
  InputSend,
  FormEdit,
  Loader,
} from './UserData.styled';

export const UserData = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUserInfo);
  const isLoading = useSelector(selectIsLoadingUser);

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

  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = e => {
    console.log('e.target.file', e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };
  const OnSumbit = async event => {
    event.preventDefault();
    const imageURL = new FormData();
    imageURL.append('imageURL', selectedFile);
    await dispatch(updatePhoto(imageURL));
    setSelectedFile(null);
    await dispatch(getUserData());
  };

  return (
    <div>
      <TitleSectionUser>My information:</TitleSectionUser>
      <CardProfile>
        <div>
          {userInfo.user ? (
            <Avatar src={userInfo.user.avatarURL} alt="User avatar" />
          ) : (
            <Avatar src={userAvatar} alt="User avatar" />
          )}
          <FormEdit
            onSubmit={OnSumbit}
            encType="multipart/form-data"
            method="post"
          >
            <HiddenInput
              type="file"
              name="photo"
              id="photoUser"
              accept="image/*,.png, .jpg"
              onChange={handleChange}
            />
            {selectedFile ? (
              isLoading ? (
                <Loader type="submit" value="Send..." />
              ) : (
                <InputSend type="submit" value="Send" />
              )
            ) : (
              <LabelEditPhoto htmlFor="photoUser">
                <HiCamera color="#F59256" size="20px" />
                Edit photo
              </LabelEditPhoto>
            )}
        </FormEdit>
        </div>
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
