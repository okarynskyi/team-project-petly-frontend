// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { HiOutlineLogout } from 'react-icons/hi';
import { LogoutBtn } from './Logout.styled';

export const Logout = () => {
  return (
    <LogoutBtn type="button">
      <HiOutlineLogout color="rgba(245, 146, 86, 0.6)" size="18px" /> Log Out
    </LogoutBtn>
  );
};
