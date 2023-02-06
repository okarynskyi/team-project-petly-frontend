import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePhoto } from 'redux/user/userOperations';
import { selectUserInfo } from 'redux/user/userSelectors';
import { filterData, checkType  } from './helpersForRender';
import { HiCamera } from 'react-icons/hi';
import { UserDataItem } from 'components/UserDataItem/UserDataItem';
import { Logout } from 'components/Logout/Logout';
import userAvatar from '../../staticImages/userAvatar.png';
import { TitleSectionUser } from '../../pages/UserPage/UserPage.styled';
import {
  CardProfile,
  ItemUserInfo,
  Avatar,
  LabelEditPhoto,
  ListUserInfo,
  InfoWrapper,
  HiddenInput,
  FormEdit,
  LoaderPhoto, WrapperUserData
} from './UserData.styled';

export const UserData = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const [activeField, setActiveField] = useState(null);
  const [changePhoto, setchangePhoto] = useState(false);

  useEffect(() => {
    setchangePhoto(false);
  }, [userInfo]);

  const infoProfile = filterData(userInfo.user);

  const UploadFile = async fileSelect => {
    const imageURL = new FormData();
    imageURL.append('imageURL', fileSelect);
    dispatch(updatePhoto(imageURL));
    setchangePhoto(true);
  };

  const handleChange = e => {
    const fileSelect = e.target.files[0];
    UploadFile(fileSelect);
  };

  return (
    <WrapperUserData>
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
                  accept="image/png, image/jpeg, image/jpg, image/bmp"
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
    </WrapperUserData>
  );
};
