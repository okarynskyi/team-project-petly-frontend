import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePhoto } from 'redux/user/userOperations';
import { selectUserInfo} from 'redux/user/userSelectors';
// import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
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
  FormEdit,
  LoaderPhoto,
} from './UserData.styled';

export const UserData = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const [activeField, setActiveField] = useState(null);
  const [changePhoto, setchangePhoto] = useState(false);
  // const isLoading = useSelector(selectIsLoadingUser);
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    setchangePhoto(false);
  }, [userInfo]);

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
        } else {
          filterUserInfo.push({ label: key, value: obj[key] });
        }
      }
    }
    return filterUserInfo;
  }
  const infoProfile = filterData(userInfo.user);

  const UploadFile = async fileSelect => {
    const imageURL = new FormData();
    imageURL.append('imageURL', fileSelect);
    dispatch(updatePhoto(imageURL));
    console.log(imageURL);
    setchangePhoto(true);
  };

  const handleChange = e => {
    const fileSelect = e.target.files[0];
    UploadFile(fileSelect);
  };

  return (
    <div>
      <TitleSectionUser>My information:</TitleSectionUser>
      <CardProfile>
        {userInfo && (
          <div>
            {!userInfo.avatarURL ? (
              <Avatar src={userAvatar} alt="User avatar" />
            ) : (
              <Avatar src={userInfo.avatarURL} alt="User avatar" />
            )}
            {changePhoto ? (
              <LoaderPhoto></LoaderPhoto>
            ) : (
              <FormEdit encType="multipart/form-data" method="post">
                <HiddenInput
                  type="file"
                  name="photo"
                  id="photoUser"
                  accept="image/*,.png, .jpg"
                  onChange={handleChange}
                />
                <LabelEditPhoto htmlFor="photoUser">
                  <HiCamera color="#F59256" size="20px" />
                  Edit photo
                </LabelEditPhoto>
              </FormEdit>
            )}
          </div>
        )}

        <InfoWrapper>
          {infoProfile ? (
            <ListUserInfo>
              {infoProfile.map(itemValue => (
                <ItemUserInfo key={itemValue.label}>
                  <UserDataItem
                    type={checkType(itemValue)}
                    label={itemValue.label}
                    value={itemValue.value}
                    activeField={activeField}
                    setActiveField={setActiveField}
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
