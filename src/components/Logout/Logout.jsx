import { HiOutlineLogout } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { LogoutBtn } from './Logout.styled';

export const Logout = () => {
  const dispatch = useDispatch();

  const onChangeLogout = () => {
    // eslint-disable-next-line no-restricted-globals
    // const isSure = confirm('Are you sure?');

    // if (isSure) {
    //   dispatch(logOut);
    // }

    dispatch(logOut());
    console.log("Hello")
  };

  return (
    <LogoutBtn onClick={onChangeLogout}>
      <HiOutlineLogout color="rgba(245, 146, 86, 0.6)" size="18px" /> Log Out
    </LogoutBtn>
  );
};
