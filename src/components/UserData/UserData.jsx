import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePhoto } from 'redux/user/userOperations';
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
    // console.log(obj);
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
          //тут я пропускаю, потому что это массив
          continue; // для рендера айтемов, фото туда не входит
        } else {
          filterUserInfo.push({ label: key, value: obj[key] });
        }
      }
    }
    return filterUserInfo;
  }
  const infoProfile = filterData(userInfo.user);
  //ЛОГИКА ДЛЯ ОТПРАВКИ ФОТО
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = e => {
    console.log('e.target.file',e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };
  const OnSumbit = async event => {
    event.preventDefault();
    const imageURL = new FormData();
    imageURL.append('avatarURL', selectedFile);

    console.log('formData', imageURL);
    const newAvatar = await dispatch(updatePhoto({ imageURL }));
    console.log('те, що на бек пішло', newAvatar);
  };

  return (
    <div>
      <TitleSectionUser>My information:</TitleSectionUser>
      <CardProfile>
        <AvatarWrapper>
          {userInfo.user ? (
            <Avatar src={userInfo.user.avatarURL} alt="User avatar" />
          ) : (
            <Avatar src={userAvatar} alt="User avatar" />
          )}
          <LabelEditPhoto htmlFor="photoUser">
            <HiCamera color="#F59256" size="20px" />
            Edit photo
          </LabelEditPhoto>
          {/*ВАРИАНТЫ ДЛЯ РАЗМЕТКИ ФОРМЫ ОТПРАВКИ */}
          {/* <p>
              <input
                type="file"
                name="photo" id="photoUser"
              accept="image/*,.png, .jpg"
              onChange={handleChange}
              />
              <button type="submit"  onSubmit={OnSumbit} >Otghfdbnm</button>
            </p> */}

          <form onSubmit={OnSumbit} encType="multipart/form-data" method="post">
            <p>
              {' '}
              <input
                type="file"
                name="photo"
                id="photoUser"
                accept="image/*,.png, .jpg"
                onChange={handleChange}
              />
              <input type="submit" value="Отправить" />
            </p>
          </form>
          {/*КОНЕЦ ВАРИАНТОВ */}
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
