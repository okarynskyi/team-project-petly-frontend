import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/user/userSelectors';
// import userAvatar from '../../staticImages/userAvatarWhite.png';
import { AccountBtn, UserCircle } from './UserNav.styled';

export const UserNav = ({ onClose }) => {
  const userInfo = useSelector(selectUserInfo);
  // const user = { name: 'Alena', avatarURL: userAvatar };
  const { user, avatarURL } = userInfo ;

  return (
    <>
      <AccountBtn to="/user" onClick={onClose} size="164px">
        <div>
          {avatarURL ? <img src={avatarURL} alt="Account" /> : <UserCircle />}
        </div>
        {user.name ? user.name : 'Account'}
      </AccountBtn>
    </>
  );
};
