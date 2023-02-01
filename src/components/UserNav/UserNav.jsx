import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
// import userAvatar from '../../staticImages/userAvatarWhite.png';
import { AccountBtn, UserCircle } from './UserNav.styled';

export const UserNav = ({ onClose }) => {
  const user = useSelector(selectUser);
  // const user = { name: 'Alena', avatarURL: userAvatar };
  const { name, avatarURL } = user;

  return (
    <>
      <AccountBtn to="/user" onClick={onClose} size="164px">
        <div>
          {avatarURL ? <img src={avatarURL} alt="Account" /> : <UserCircle />}
        </div>
        {name ? name : 'Account'}
      </AccountBtn>
    </>
  );
};
