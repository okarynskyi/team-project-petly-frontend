// import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { LabelUserInfo } from './UserDataItem.styled';

export const UserDataItem = ({ type, label, value }) => {
  return (
    <>
      <LabelUserInfo htmlFor={label}>{label}</LabelUserInfo>
      <input type={type} name={label} id={label} value={value} />
    </>
  );
};

UserDataItem.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
